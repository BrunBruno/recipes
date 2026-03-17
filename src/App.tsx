import "./app.css";
import { useEffect, useRef, useState } from "react";
import { recipes } from "./recipes";
import { type KeyWord, type MealType, type Recipe } from "./types";
import { keywordAliases, MealTypesData } from "./utils";
import RecipeTypeIcon from "./assets/recipeTypeIcon";
import UtilsIcon from "./assets/utilsIcon";
import Statistics from "./components/statistics/Statistics";
import Ingredients from "./components/ingredients/Ingredients";
import RecipesGrid from "./components/recipes-grid/RecipesGrid";
import RecipeCard from "./components/recipe-card/RecipeCard";

function App() {
  const searchInputRef = useRef<HTMLInputElement>(null);

  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);
  const [activeTypes, setActiveTypes] = useState<MealType[]>([]);
  const [showFilters, setShowFilters] = useState<boolean>(false);
  const [showSearch, setShowSearch] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [showAllIngredients, setShowAllIngredients] = useState<boolean>(false);
  const [showStatistics, setShowStatistics] = useState<boolean>(false);

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

    return typeMatch && (nameMatch || keywordsMatch);
  });

  useEffect(() => {
    document.body.style.overflow = selectedRecipe ? "hidden" : "auto";
  }, [selectedRecipe]);
  useEffect(() => {
    document.body.style.overflow =
      showAllIngredients || showStatistics ? "hidden" : "auto";
  }, [showAllIngredients, showStatistics]);

  useEffect(() => {
    if (showSearch) {
      setSearchQuery("");
      searchInputRef.current?.focus();
    }
  }, [showSearch]);

  if (recipes.length > 0 && recipes[0] === undefined) return;

  return (
    <div className="recipes-page">
      <div className="page-title">
        <h1>
          <UtilsIcon name="logo" color="#099268" />
          Przepisy {filteredRecipes.length}
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
            className={`filter-buttons-bg ${showSearch ? "show" : ""}`}
            onClick={() => setShowSearch((prev) => !prev)}
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

          <div
            className={`filter-buttons-bg ${showFilters ? "show" : ""}`}
            onClick={() => setShowFilters((prev) => !prev)}
          ></div>

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
        <div className="details-bg" onClick={() => setSelectedRecipe(null)} />
      )}
      {selectedRecipe && (
        <RecipeCard
          selectedRecipe={selectedRecipe}
          setSelectedRecipe={setSelectedRecipe}
        />
      )}

      <RecipesGrid
        filteredRecipes={filteredRecipes}
        setSelectedRecipe={setSelectedRecipe}
      />

      <footer className="footer">
        <button
          className="footer-button"
          onClick={() => setShowAllIngredients((prev) => !prev)}
        >
          <UtilsIcon name="ingredients" color="#fff" />
          <span>Składniki</span>
        </button>
        <button
          className="footer-button"
          onClick={() => setShowStatistics((prev) => !prev)}
        >
          <UtilsIcon name="statistics" color="#fff" />
          <span>Statystyki</span>
        </button>
      </footer>

      {showAllIngredients && (
        <Ingredients setShowAllIngredients={setShowAllIngredients} />
      )}

      {showStatistics && (
        <Statistics
          showStatistics={showStatistics}
          setShowStatistics={setShowStatistics}
        />
      )}
    </div>
  );
}

export default App;
