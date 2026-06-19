import "./recipes-grid.css";
import RecipeTypeIcon from "../../assets/recipeTypeIcon";
import UtilsIcon from "../../assets/utilsIcon";
import type { Recipe } from "../../types";
import { hexToRgb, MealTypesData } from "../../utils";
import { useEffect, useState } from "react";

type RecipesGridProps = {
  filteredRecipes: Recipe[];
  setSelectedRecipe: React.Dispatch<React.SetStateAction<Recipe | null>>;
};

function RecipesGrid({ filteredRecipes, setSelectedRecipe }: RecipesGridProps) {
  const [listView, setListView] = useState<boolean>(false);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Enter") {
        setListView((prev) => !prev);
      }
    };

    window.addEventListener("keydown", handleKey);

    return () => {
      window.removeEventListener("keydown", handleKey);
    };
  }, []);

  const setRecipe = (recipe: Recipe) => {
    window.history.pushState({ recipeModal: true }, "");

    setSelectedRecipe(recipe);
  };

  return (
    <div className={`recipes-grid ${listView ? "list-view" : ""}`}>
      {filteredRecipes.map((recipe, index) => (
        <div
          key={index}
          className={`recipe-card`}
          onClick={() => {
            setRecipe(recipe);
          }}
        >
          <div
            className={`recipe-card-bg ${recipe.images[0] !== "" ? "saturate-bg" : ""}`}
            style={{
              backgroundImage: listView
                ? `linear-gradient(170deg, rgba(0,0,0,0.1) 40%,rgba(${hexToRgb(MealTypesData[recipe.type].color)},0.2))`
                : `linear-gradient(rgba(0,0,0,0.0),rgba(0,0,0,0.4)),
                     url(${recipe.images[0] === "" ? "./thumbnail/default.jpg" : "./thumbnail/" + recipe.images[0]})`,
            }}
          ></div>

          <div
            className="card-mark"
            style={{ backgroundColor: MealTypesData[recipe.type].color }}
          >
            <div
              className="card-svg"
              // style={{ borderColor: MealTypesData[recipe.type].color }}
            >
              <RecipeTypeIcon type={recipe.type} color="#000" />
            </div>
          </div>

          {(recipe.steps.length === 0 || recipe.ingredients.length === 0) && (
            <div
              className="card-warning"
              style={{ borderColor: MealTypesData[recipe.type].color }}
            >
              <UtilsIcon name="warning" color="#f03e3e" />
            </div>
          )}

          <div className="recipe-card-content">
            <h2>{recipe.name}</h2>
          </div>
        </div>
      ))}
    </div>
  );
}

export default RecipesGrid;
