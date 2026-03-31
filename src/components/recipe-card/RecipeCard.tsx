import "./recipe-card.css";
import { useEffect, useRef, useState } from "react";
import IngredientIcon from "../../assets/ingredientsIcon";
import UtilsIcon from "../../assets/utilsIcon";
import {
  calculateRecipeKcal,
  calculateRecipeKcalPer100g,
  calculateRecipeNutrients,
  formatUnit,
} from "../../utils";
import type { Recipe } from "../../types";

type RecipeCardProps = {
  selectedRecipe: Recipe;
  setSelectedRecipe: React.Dispatch<React.SetStateAction<Recipe | null>>;
  // setEnlargedImageUrl: React.Dispatch<React.SetStateAction<string>>;
};

const swipeThreshold = 50;

function RecipeCard({
  selectedRecipe,
  setSelectedRecipe,
  // setEnlargedImageUrl,
}: RecipeCardProps) {
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

    if (Math.abs(deltaX) < swipeThreshold) return;

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
  const getFontSizeClass = (value: number | string): string => {
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

      <div className="recipe-details-header">
        <div
          className="details-images"
          onTouchStart={(e) => handleTouchStart(e)}
          onTouchMove={(e) => handleTouchMove(e)}
          onTouchEnd={() => handleTouchEnd()}
        >
          {selectedRecipe.images.length > 1 && activeImageIndex !== 0 && (
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
                  onClick={() => {
                    setActiveImageIndex(i);
                  }}
                />
              ))}
            </div>
          )}

          {selectedRecipe.images.length > 1 &&
            activeImageIndex !== selectedRecipe.images.length - 1 && (
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

        {/* {selectedRecipe.images.length > 0 &&
          selectedRecipe.images[0] !== "" && (
            <button
              className="resize-button"
              onClick={() => {
                setEnlargedImageUrl(selectedRecipe.images[activeImageIndex]);
              }}
            >
               <UtilsIcon name="resize" color="#fff" /> 
            </button>
          )} */}
      </div>

      {selectedRecipe.ingredients.length === 0 &&
      selectedRecipe.steps.length === 0 ? (
        <div style={{ margin: "auto" }}>
          <UtilsIcon name="empty" color="#aaaaaa" />
        </div>
      ) : (
        <div ref={contentRef} className="recipe-details-content">
          <section className="description-section">
            {selectedRecipe.description}
            <br /> <br />
            przeliczona na{" "}
            <span style={{ color: "#20c997", fontWeight: "bold" }}>
              {selectedRecipe.portions}
            </span>{" "}
            {selectedRecipe.portions === 1
              ? "porcję"
              : selectedRecipe.portions < 5
                ? "porcje"
                : "porcji"}
            :
          </section>
          <section className="ingredients-section">
            <div
              className={`${"ingredients-container"} ${selectedRecipe.ingredients.length === 1 ? "one-ingredient-list" : ""}`}
            >
              {selectedRecipe.ingredients.map((group, groupIndex) => (
                <div key={groupIndex} className="recipe-ingredient-group">
                  <div className="ingredients-list-container">
                    <h4 className="ingredient-group-title">
                      {group.title
                        ? `Składniki: ${group.title}`
                        : "Lista składników"}
                    </h4>
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
                              <span className="ingredient-unit">
                                {ingredient.amount
                                  ? formatUnit(ingredient)
                                  : ""}
                              </span>
                            </span>
                            <span className="ingredient-unit"></span>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="steps-section">
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
        </div>
      )}
    </div>
  );
}

export default RecipeCard;
