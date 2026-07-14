import { useRef, useState, useEffect } from "react";
import RecipeTypeIcon from "../../assets/recipeTypeIcon";
import UtilsIcon from "../../assets/utilsIcon";
import { recipes } from "../../recipes";
import type { Recipe, MealType, KeyWord, DayIngredients } from "../../types";
import { keywordAliases, MealTypesData } from "../../utils";
import RecipeCard from "../recipe-card/RecipeCard";
import RecipesGrid from "../recipes-grid/RecipesGrid";
import "./recipes-page.css";

type RecipePageProps = {
  setDayIngredients: React.Dispatch<React.SetStateAction<DayIngredients>>;
};

function RecipesPage({ setDayIngredients }: RecipePageProps) {
  const searchInputRef = useRef<HTMLInputElement>(null);

  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);
  const [activeTypes, setActiveTypes] = useState<MealType[]>([]);
  const [showFilters, setShowFilters] = useState<boolean>(false);
  const [showSearch, setShowSearch] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [filterUnused, setFilterUnused] = useState<boolean>(true);

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

  const filteredRecipes = recipes
    .filter((r) => {
      const typeMatch =
        activeTypes.length === 0 || activeTypes.includes(r.type);

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
    })
    .filter((r) =>
      filterUnused
        ? r.steps.length > 0 && r.ingredients.length > 0
        : r.steps.length === 0 || r.ingredients.length === 0,
    );

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
      }
    };

    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, [selectedRecipe]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Enter") {
        setFilterUnused((prev) => !prev);
      }
    };

    window.addEventListener("keydown", handleKey);

    return () => {
      window.removeEventListener("keydown", handleKey);
    };
  }, []);

  if (recipes.length > 0 && recipes[0] === undefined) return;

  return (
    <div className="recipes-page">
      <div className="page-title">
        <div className="page-title-background"></div>

        <h1 className="page-title-h1">
          <div className="page-title-h1-indicator">
            {filteredRecipes.length}
          </div>
          <span className="h1-text">Przepisy</span>
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
            window.history.back();
          }}
        />
      )}
      {selectedRecipe && (
        <RecipeCard
          selectedRecipe={selectedRecipe}
          setDayIngredients={setDayIngredients}
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
