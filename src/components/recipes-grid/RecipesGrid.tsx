import "./recipes-grid.css";
import RecipeTypeIcon from "../../assets/recipeTypeIcon";
import UtilsIcon from "../../assets/utilsIcon";
import type { Recipe } from "../../types";
import { MealTypesData } from "../../utils";

type RecipesGridProps = {
  filteredRecipes: Recipe[];
  setSelectedRecipe: React.Dispatch<React.SetStateAction<Recipe | null>>;
};

function RecipesGrid({ filteredRecipes, setSelectedRecipe }: RecipesGridProps) {
  return (
    <div className="recipes-grid">
      {filteredRecipes.map((recipe, index) => (
        <div
          key={index}
          className="recipe-card"
          onClick={() => setSelectedRecipe(recipe)}
        >
          <div
            className={`recipe-card-bg ${recipe.images[0] !== "" ? "saturate-bg" : ""}`}
            style={{
              backgroundImage: `linear-gradient(rgba(0,0,0,0.1),rgba(0,0,0,0.8)),
                                  url(${recipe.images[0] === "" ? "./thumbnail/default.jpg" : "./thumbnail/" + recipe.images[0]})`,
            }}
          ></div>

          <div
            className="card-svg"
            style={{ borderColor: MealTypesData[recipe.type].color }}
          >
            <RecipeTypeIcon type={recipe.type} />
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
