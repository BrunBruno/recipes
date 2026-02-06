import { useEffect, useState, type JSX } from "react";
import { recipes } from "./recipes";
import type { mealType, Recipe } from "./types";
import DinnerSvg from "./assets/dinnerSvg";
import SnackSvg from "./assets/snackSvg";
import SoupSvg from "./assets/soupSvg";
import DessertSvg from "./assets/dessertSvg";

const borderColorMap: Record<mealType, string> = {
  dinner: "#f59f00",
  snack: "#f03e3e",
  soup: "#37b24d",
  dessert: "#1c7ed6",
};

const mealTypes: mealType[] = ["dinner", "snack", "soup", "dessert"];

function App() {
  const svgMap: Record<mealType, JSX.Element> = {
    dinner: <DinnerSvg />,
    snack: <SnackSvg />,
    soup: <SoupSvg />,
    dessert: <DessertSvg />,
  };

  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);
  const [activeTypes, setActiveTypes] = useState<mealType[]>([]);
  const [showFilters, setShowFilters] = useState<boolean>(false);

  const toggleType = (type: mealType) => {
    setActiveTypes((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type],
    );
  };

  const filteredRecipes =
    activeTypes.length === 0
      ? recipes
      : recipes.filter((r) => activeTypes.includes(r.type));

  useEffect(() => {
    document.body.style.overflow = selectedRecipe ? "hidden" : "auto";
  }, [selectedRecipe]);

  if (recipes.length > 0 && recipes[0] === undefined) return;

  return (
    <div className="recipes-page">
      <div className="page-title">
        <h1>Przepisy</h1>

        <button
          className="toggle-filters-btn"
          onClick={() => setShowFilters((prev) => !prev)}
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9 12L4 4H15M20 4L15 12V21L9 18V16"
              stroke="#666"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        <div className={`filter-buttons ${showFilters ? "show" : ""}`}>
          {mealTypes.map((type) => (
            <button
              key={type}
              className={`filter-btn ${activeTypes.includes(type) ? "" : "active"}`}
              onClick={() => toggleType(type)}
            >
              <div className="filter-svg">{svgMap[type]}</div>
              <span className="filter-text">
                {type.charAt(0).toUpperCase() + type.slice(1)}
              </span>
            </button>
          ))}
        </div>
      </div>

      {selectedRecipe && (
        <div className="details-bg" onClick={() => setSelectedRecipe(null)} />
      )}

      {selectedRecipe && (
        <div className="recipe-details">
          <button
            className="close-button"
            onClick={() => setSelectedRecipe(null)}
            aria-label="Close recipe details"
          >
            ×
          </button>

          <div className="recipe-details-header">
            <img
              src={
                selectedRecipe.image === ""
                  ? "./default.jpg"
                  : selectedRecipe.image
              }
              alt={selectedRecipe.name}
              className="recipe-details-image"
            />
            <h2 className="recipe-details-title">{selectedRecipe.name}</h2>
          </div>

          <div className="recipe-details-content">
            <section>
              <h3>Składniki</h3>
              <ul className="ingredients-list">
                {selectedRecipe.ingredients.map((ingredient, index) => (
                  <li key={index}>
                    <span className="ingredient-amount">
                      {ingredient.amount}
                      {ingredient.unit ? ` ${ingredient.unit}` : ""}
                    </span>
                    <span className="ingredient-name">{ingredient.name}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h3>Sposób przygotowania</h3>
              <ol className="steps-list">
                {selectedRecipe.steps.map((step, index) => (
                  <li key={index}>{step}</li>
                ))}
              </ol>
            </section>
          </div>
        </div>
      )}

      <div className="recipes-grid">
        {filteredRecipes.map((recipe, index) => (
          <div
            key={index}
            className="recipe-card"
            onClick={() => setSelectedRecipe(recipe)}
          >
            <div
              className={`recipe-card-bg ${
                recipe.image !== "" ? "saturate-bg" : ""
              }`}
              style={{
                backgroundImage: `linear-gradient(
                  rgba(0,0,0,0.4),
                  rgba(0,0,0,0.8)
                ),url(${recipe.image === "" ? "./default.jpg" : recipe.image})`,
              }}
            ></div>

            <div
              className="card-svg"
              style={{ borderColor: borderColorMap[recipe.type] }}
            >
              {svgMap[recipe.type]}
            </div>
            <div className="recipe-card-content">
              <h2>{recipe.name}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
