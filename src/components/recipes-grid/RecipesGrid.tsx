import "./recipes-grid.css";
import RecipeTypeIcon from "../../assets/recipeTypeIcon";
import UtilsIcon from "../../assets/utilsIcon";
import type { Recipe } from "../../types";
import {
  hexToRgb,
  calculateRecipePrice,
  isPriceComplete,
  MealTypesData,
} from "../../utils";
import { AnimatePresence, motion } from "framer-motion";

type RecipesGridProps = {
  filteredRecipes: Recipe[];
  setSelectedRecipe: React.Dispatch<React.SetStateAction<Recipe | null>>;
};

function RecipesGrid({ filteredRecipes, setSelectedRecipe }: RecipesGridProps) {
  const setRecipe = (recipe: Recipe) => {
    window.history.pushState({ recipeModal: true }, "");

    setSelectedRecipe(recipe);
  };

  return (
    <div className={`recipes-grid`}>
      <AnimatePresence mode="popLayout">
        {filteredRecipes
          // .filter((r) => r.ingredients.length > 1)
          // .filter((r) => r.extrasMain)
          // .filter((r) => !r.taste || !r.difficulty)
          // .filter((r) => (r.taste || r.difficulty) && r.images[0] === "")
          // .filter((r) =>
          //   r.ingredients.some((g) =>
          //     g.items.some((i) => "type" in i && i.type === "placeholder"),
          //   ),
          // )
          // .filter((r) => !r.country)
          // .filter((r) => !r.keyWords)
          // .filter(
          //   (r) => r.keyWords && r.keyWords?.length === 0 && r.images[0] !== "",
          // )
          .map((recipe) => (
            <motion.div
              key={`${recipe.fileName}`}
              layout="position"
              transition={{
                layout: { type: "spring", stiffness: 350, damping: 30 },
              }}
              className={`recipe-card`}
              style={{ borderRadius: "0" }}
              onClick={() => {
                setRecipe(recipe);
              }}
            >
              <div
                className={`recipe-card-bg ${recipe.images[0] !== "" ? "saturate-bg" : ""}`}
                style={{
                  backgroundImage: `url(${recipe.images[0] === "" ? "./tmb/default.jpg" : "./tmb/" + recipe.images[0] + ".png"})`,
                  backgroundColor:
                    recipe.images[0] === ""
                      ? ""
                      : `rgba(${hexToRgb(MealTypesData[recipe.type].color)[0]},${hexToRgb(MealTypesData[recipe.type].color)[1]},${hexToRgb(MealTypesData[recipe.type].color)[2]}, 0.1)`,
                  border:
                    recipe.images[0] === ""
                      ? "none"
                      : `solid 0.5rem rgba(${hexToRgb(MealTypesData[recipe.type].color)[0]},${hexToRgb(MealTypesData[recipe.type].color)[1]},${hexToRgb(MealTypesData[recipe.type].color)[2]}, 0.1)`,
                  backgroundClip:
                    recipe.images[0] === "" ? "unset" : "padding-box",
                }}
              ></div>

              {isPriceComplete(recipe) && (
                <div
                  className="card-price"
                  style={{ backgroundColor: MealTypesData[recipe.type].color }}
                >
                  <span>{calculateRecipePrice(recipe).toFixed(2)}</span>
                  <span>zł</span>
                </div>
              )}

              <div
                className="card-mark"
                style={{ backgroundColor: MealTypesData[recipe.type].color }}
              >
                <div className="card-svg">
                  <span className="card-grade">
                    <span style={{ marginTop: "3.5px" }}>{recipe.taste}</span>
                    <UtilsIcon name="star-empty" color="#000" />
                  </span>
                  <span className="card-type">
                    <RecipeTypeIcon type={recipe.type} color="#000" />
                  </span>
                </div>
              </div>

              {(recipe.steps.length === 0 ||
                recipe.ingredients.length === 0) && (
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
            </motion.div>
          ))}
      </AnimatePresence>
    </div>
  );
}

export default RecipesGrid;
