import { useRef, useState, useEffect } from "react";
import RecipeTypeIcon from "../../assets/recipeTypeIcon";
import UtilsIcon from "../../assets/utilsIcon";
import { recipes } from "../../recipes";
import type { Recipe, MealType, KeyWord } from "../../types";
import { keywordAliases, MealTypesData } from "../../utils";
import RecipeCard from "../recipe-card/RecipeCard";
import RecipesGrid from "../recipes-grid/RecipesGrid";
import "./recipes-page.css";

function RecipesPage() {
  const searchInputRef = useRef<HTMLInputElement>(null);

  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);
  const [activeTypes, setActiveTypes] = useState<MealType[]>([]);
  const [showFilters, setShowFilters] = useState<boolean>(false);
  const [showSearch, setShowSearch] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>("");

  const toggleType = (type: MealType) => {
    setActiveTypes((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type],
    );
  };
  const normalize = (text: string) => text.toLowerCase().trim();
  const matchesKeyword = (query: string, recipeKeywords: KeyWord[]) => {
    const q = normalize(query);

    return recipeKeywords.some((kw) =>
      keywordAliases[kw].some((alias) => alias.includes(q)),
    );
  };

  const filteredRecipes = recipes.filter((r) => {
    const typeMatch = activeTypes.length === 0 || activeTypes.includes(r.type);

    const query = normalize(searchQuery);

    const nameMatch = r.name.toLowerCase().includes(query);
    const keywordsMatch = r.keyWords
      ? matchesKeyword(query, r.keyWords)
      : false;

    const hasImages = r.images.some((img) => img !== "");
    const onlyEmptyImages = r.images.every((img) => img === "");

    const specialMatch =
      query === "xxx" ? hasImages : query === "zzz" ? onlyEmptyImages : true;

    return (
      typeMatch &&
      specialMatch &&
      (nameMatch || keywordsMatch || query === "xxx" || query === "zzz")
    );
  });

  useEffect(() => {
    document.body.style.overflow = selectedRecipe ? "hidden" : "auto";
  }, [selectedRecipe]);

  useEffect(() => {
    if (showSearch) {
      setSearchQuery("");
      searchInputRef.current?.focus();
    }
  }, [showSearch]);

  useEffect(() => {
    const handlePopState = () => {
      if (selectedRecipe) {
        setSelectedRecipe(null);

        window.history.pushState(null, "");
      }
    };

    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, [selectedRecipe]);

  if (recipes.length > 0 && recipes[0] === undefined) return;

  return (
    <div className="recipes-page">
      <div className="page-title">
        <h1 className="page-title-h1">
          <UtilsIcon name="logo" color="#099268" />
          <span className="h1-text">Przepisy</span> {filteredRecipes.length}
        </h1>

        <div className="page-title-options">
          <button
            className="toggle-search-btn"
            onClick={() => {
              setShowSearch((prev) => !prev);
              setShowFilters(false);
            }}
          >
            <UtilsIcon name="search" color="#999999" />
          </button>
          <button
            className="toggle-filters-btn"
            onClick={() => {
              setShowFilters((prev) => !prev);
              setShowSearch(false);
            }}
          >
            <UtilsIcon name="filter" color="#999999" />
          </button>

          <div
            className={`filter-buttons-bg ${showSearch || showFilters ? "show" : ""}`}
            onClick={() => {
              setShowSearch(false);
              setShowFilters(false);
            }}
          ></div>

          <div className={`recipe-search ${showSearch ? "show" : ""}`}>
            <label className="recipe-search-label">
              <UtilsIcon name="search" color="#999999" />
              <input
                ref={searchInputRef}
                type="text"
                placeholder="Szukaj przepisu..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="recipe-search-input"
              />
            </label>
          </div>

          {/* <div
            className={`filter-buttons-bg ${showFilters ? "show" : ""}`}
            onClick={() => setShowFilters((prev) => !prev)}
          ></div> */}

          <div className={`filter-buttons ${showFilters ? "show" : ""}`}>
            {Object.entries(MealTypesData).map(([key, { label, color }]) => (
              <button
                key={key}
                className="filter-btn"
                style={{
                  borderColor: activeTypes.includes(key as MealType)
                    ? color
                    : "#666",
                }}
                onClick={() => toggleType(key as MealType)}
              >
                <div className="filter-svg">
                  <RecipeTypeIcon
                    type={key as MealType}
                    color={activeTypes.includes(key as MealType) ? "" : "#666"}
                  />
                </div>
                <span className="filter-text">{label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {selectedRecipe && (
        <div
          className="details-bg"
          onClick={() => {
            setSelectedRecipe(null);
            window.history.pushState(null, "");
          }}
        />
      )}
      {selectedRecipe && (
        <RecipeCard
          selectedRecipe={selectedRecipe}
          setSelectedRecipe={setSelectedRecipe}
        />
      )}

      <div className="grid-container">
        <RecipesGrid
          filteredRecipes={filteredRecipes}
          setSelectedRecipe={setSelectedRecipe}
        />
      </div>
    </div>
  );
}

export default RecipesPage;
