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

function App() {
  const svgMap: Record<mealType, JSX.Element> = {
    dinner: <DinnerSvg />,
    snack: <SnackSvg />,
    soup: <SoupSvg />,
    dessert: <DessertSvg />,
  };

  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);

  useEffect(() => {
    document.body.style.overflow = selectedRecipe ? "hidden" : "auto";
  }, [selectedRecipe]);

  if (recipes.length > 0 && recipes[0] === undefined) return;

  return (
    <div className="recipes-page">
      <h1 className="page-title">Przepisy</h1>

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
        {recipes.map((recipe, index) => (
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
