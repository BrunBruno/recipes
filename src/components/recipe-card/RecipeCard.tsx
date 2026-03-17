import "./recipe-card.css";
import { useEffect, useRef, useState } from "react";
import IngredientIcon from "../../assets/ingredientsIcon";
import UtilsIcon from "../../assets/utilsIcon";
import {
  calculateRecipeKcal,
  calculateRecipeKcalPer100g,
  calculateRecipeNutrients,
} from "../../utils";
import type { Recipe } from "../../types";

type RecipeCardProps = {
  selectedRecipe: Recipe;
  setSelectedRecipe: React.Dispatch<React.SetStateAction<Recipe | null>>;
};

const SWIPE_THRESHOLD = 50;

function RecipeCard({ selectedRecipe, setSelectedRecipe }: RecipeCardProps) {
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const [headerCollapsed, setHeaderCollapsed] = useState<boolean>(false);
  const [activeImageIndex, setActiveImageIndex] = useState<number>(0);

  useEffect(() => {
    setActiveImageIndex(0);
  }, [selectedRecipe]);

  useEffect(() => {
    if (!selectedRecipe) return;

    const contentEl = contentRef.current;
    if (!contentEl) return;

    const handleScroll = () => {
      setHeaderCollapsed(true);
    };

    contentEl.addEventListener("scroll", handleScroll);

    return () => {
      contentEl.removeEventListener("scroll", handleScroll);
      setHeaderCollapsed(false);
    };
  }, [selectedRecipe]);

  // swipe images
  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    touchEndX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;

    const deltaX = touchStartX.current - touchEndX.current;

    if (Math.abs(deltaX) < SWIPE_THRESHOLD) return;

    setActiveImageIndex((prev) => {
      if (!selectedRecipe) return 0;
      if (deltaX > 0) {
        return Math.min(prev + 1, selectedRecipe.images.length - 1);
      } else {
        return Math.max(prev - 1, 0);
      }
    });

    touchStartX.current = null;
    touchEndX.current = null;
  };

  // recipe stats
  const getFontSizeClass = (value: number): string => {
    const length = String(value).length;

    if (length <= 2) return "font-xl";
    if (length === 3) return "font-lg";
    if (length === 4) return "font-md";
    return "font-sm";
  };
  const getStatusClass = (type: string, value: number) => {
    if (type === "kcal") {
      if (value <= 500) return "status-green";
      if (value <= 1000) return "status-yellow";
      return "status-red";
    }

    if (type === "kcal100") {
      if (value <= 150) return "status-green";
      if (value <= 300) return "status-yellow";
      return "status-red";
    }

    if (type === "time") {
      if (value <= 30) return "status-green";
      if (value <= 60) return "status-yellow";
      return "status-red";
    }

    return "";
  };

  // recipe open
  const handleHeaderScroll = () => {
    const contentEl = contentRef.current;
    if (!contentEl) return;

    if (contentEl.scrollTop === 0) {
      setHeaderCollapsed(false);
      return;
    }

    const handleScrollEnd = () => {
      if (contentEl.scrollTop === 0) {
        setHeaderCollapsed(false);
        contentEl.removeEventListener("scroll", handleScrollEnd);
      }
    };

    contentEl.addEventListener("scroll", handleScrollEnd);
    contentEl.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className={`recipe-details ${headerCollapsed ? "collapsed" : ""}`}>
      <button
        className="close-button"
        onClick={() => setSelectedRecipe(null)}
        aria-label="Close recipe details"
      >
        <UtilsIcon name="close" color="#fff" />
      </button>

      <div className="recipe-details-params">
        <div
          className={`recipe-param 
                ${getFontSizeClass(calculateRecipeKcal(selectedRecipe))} 
                ${getStatusClass("kcal", calculateRecipeKcal(selectedRecipe))}
              `}
        >
          <span>{calculateRecipeKcal(selectedRecipe)}</span>
        </div>
        <div
          className={`recipe-param 
                ${getFontSizeClass(calculateRecipeKcalPer100g(selectedRecipe))} 
                ${getStatusClass("kcal100", calculateRecipeKcalPer100g(selectedRecipe))}
              `}
        >
          <span>{calculateRecipeKcalPer100g(selectedRecipe)}</span>
        </div>
        <div
          className={`recipe-param 
                ${getFontSizeClass(selectedRecipe.time)} 
                ${getStatusClass("time", selectedRecipe.time)}
              `}
        >
          <span>{selectedRecipe.time}</span>
        </div>
        <div
          className={`recipe-param 
                ${getFontSizeClass(selectedRecipe.portions)}
              `}
        >
          <span>{selectedRecipe.portions}</span>
        </div>

        <div
          className={`recipe-param 
                ${getFontSizeClass(calculateRecipeNutrients(selectedRecipe)[0])}
              `}
        >
          <span>{calculateRecipeNutrients(selectedRecipe)[0]}</span>
        </div>
        <div
          className={`recipe-param 
                ${getFontSizeClass(calculateRecipeNutrients(selectedRecipe)[1])}
              `}
        >
          <span>{calculateRecipeNutrients(selectedRecipe)[1]}</span>
        </div>
        <div
          className={`recipe-param 
                ${getFontSizeClass(calculateRecipeNutrients(selectedRecipe)[2])}
              `}
        >
          <span>{calculateRecipeNutrients(selectedRecipe)[2]}</span>
        </div>
      </div>

      <div className="recipe-details-header">
        <div
          className="details-images"
          onTouchStart={(e) => handleTouchStart(e)}
          onTouchMove={(e) => handleTouchMove(e)}
          onTouchEnd={() => handleTouchEnd()}
        >
          {selectedRecipe.images.length > 1 && (
            <div
              className="images-arrow"
              onClick={() => {
                setActiveImageIndex((prev) => {
                  if (prev === 0) return 0;
                  return prev - 1;
                });
              }}
            >
              <UtilsIcon name="arrow" color="#ffffff" />
            </div>
          )}

          {selectedRecipe.images.map((image, i) => (
            <img
              key={`image-${i}-${image}`}
              src={image === "" ? "./full/default.jpg" : "./full/" + image}
              alt={selectedRecipe.name}
              className="recipe-details-image"
              style={{ left: `${i * 100 - activeImageIndex * 100}%` }}
            />
          ))}

          {selectedRecipe.images.length > 1 && (
            <div className="images-indicators">
              {selectedRecipe.images.map((_, i) => (
                <div
                  key={`ind-${i}`}
                  className={`image-indicator ${activeImageIndex === i ? "active" : ""}`}
                />
              ))}
            </div>
          )}

          {selectedRecipe.images.length > 1 && (
            <div
              className="images-arrow"
              onClick={() => {
                setActiveImageIndex((prev) => {
                  if (prev === selectedRecipe.images.length - 1)
                    return selectedRecipe.images.length - 1;
                  return prev + 1;
                });
              }}
            >
              <UtilsIcon name="arrow" color="#ffffff" />
            </div>
          )}
        </div>

        <h2
          className="recipe-details-title"
          onClick={() => {
            handleHeaderScroll();
          }}
        >
          {selectedRecipe.name}
        </h2>
      </div>

      {selectedRecipe.ingredients.length === 0 &&
      selectedRecipe.steps.length === 0 ? (
        <div style={{ margin: "auto" }}>
          <UtilsIcon name="empty" color="#aaaaaa" />
        </div>
      ) : (
        <div ref={contentRef} className="recipe-details-content">
          <section>
            <h3>Składniki</h3>
            <div className="ingredients-container">
              {selectedRecipe.ingredients.map((group, groupIndex) => (
                <div key={groupIndex} className="recipe-ingredient-group">
                  {group.title && (
                    <h4 className="ingredient-group-title">{group.title}</h4>
                  )}
                  <ul className="ingredients-list">
                    {group.items.map((ingredient, index) => {
                      if (ingredient.invisible) return;
                      return (
                        <li key={index} className="ingredient-item">
                          <div className="ingredient-indicator">
                            <IngredientIcon
                              ingType={ingredient.ingredient.type}
                            />
                          </div>
                          <span className="ingredient-name">
                            {ingredient.ingredient.name}
                          </span>
                          <span className="ingredient-amount">
                            {ingredient.amount}
                            {ingredient.amount
                              ? ingredient.unit
                                ? ` ${ingredient.unit}`
                                : " g"
                              : ""}
                          </span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h3>Sposób przygotowania</h3>
            {Array.isArray(selectedRecipe.steps) &&
              selectedRecipe.steps.map((step, index) => (
                <div key={index} className="steps">
                  {step.title !== "" && <h4>{step.title}</h4>}
                  <ol className="steps-list">
                    {step.steps.map((s, i) => (
                      <li key={i}>{s}</li>
                    ))}
                  </ol>
                </div>
              ))}
          </section>
        </div>
      )}
    </div>
  );
}

export default RecipeCard;
