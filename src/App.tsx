import { useEffect, useRef, useState } from "react";
import { recipes } from "./recipes";
import { type mealType, type Recipe } from "./types";
import IngredientIcon from "./assets/ingredientsIcon";
import {
  calculateRecipeKcal,
  ingredientTypeLabels,
  mealTypesData,
} from "./utils";
import RecipeTypeIcon from "./assets/recipeTypeIcon";
import UtilsIcon from "./assets/utilsIcon";
import { iDIR } from "./ingredients/ingDairy";
import { iFAT } from "./ingredients/ingFat";
import { iFRT } from "./ingredients/ingFruit";
import { iGRN } from "./ingredients/ingGrain";
import { iMET } from "./ingredients/ingMeat";
import { iOTH } from "./ingredients/ingOther";
import { iSAU } from "./ingredients/ingSauce";
import { iSPC } from "./ingredients/ingSpice";
import { iVEG } from "./ingredients/ingVegetable";

const SWIPE_THRESHOLD = 50;

function App() {
  const contentRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);
  const [activeTypes, setActiveTypes] = useState<mealType[]>([]);
  const [showFilters, setShowFilters] = useState<boolean>(false);
  const [showSearch, setShowSearch] = useState<boolean>(false);
  const [headerCollapsed, setHeaderCollapsed] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [activeImageIndex, setActiveImageIndex] = useState<number>(0);
  const [showAllIngredients, setShowAllIngredients] = useState<boolean>(false);

  const toggleType = (type: mealType) => {
    setActiveTypes((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type],
    );
  };

  const filteredRecipes = recipes.filter((r) => {
    const typeMatch = activeTypes.length === 0 || activeTypes.includes(r.type);

    const query = searchQuery.toLowerCase();
    const nameMatch = r.name.toLowerCase().includes(query);
    const keyWordsMatch = r.keyWords?.some((kw) =>
      kw.toLowerCase().includes(query),
    );

    return typeMatch && (nameMatch || keyWordsMatch);
  });

  useEffect(() => {
    document.body.style.overflow = selectedRecipe ? "hidden" : "auto";
    setActiveImageIndex(0);
  }, [selectedRecipe]);

  useEffect(() => {
    document.body.style.overflow = showAllIngredients ? "hidden" : "auto";
  }, [showAllIngredients]);

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

  useEffect(() => {
    if (showSearch) {
      setSearchQuery("");
      searchInputRef.current?.focus();
    }
  }, [showSearch]);

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

  const getFontSizeClass = (value: number): string => {
    const length = String(value).length;

    if (length <= 2) return "font-xl";
    if (length === 3) return "font-lg";
    if (length === 4) return "font-md";
    return "font-sm";
  };

  const getStatusClass = (type: string, value: number) => {
    if (type === "kcal") {
      if (value <= 300) return "status-green";
      if (value <= 700) return "status-yellow";
      return "status-red";
    }

    if (type === "time") {
      if (value <= 20) return "status-green";
      if (value <= 45) return "status-yellow";
      return "status-red";
    }

    return "";
  };

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

  if (recipes.length > 0 && recipes[0] === undefined) return;

  return (
    <div className="recipes-page">
      <div className="page-title">
        <h1 onClick={() => location.reload()}>
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
            {Object.entries(mealTypesData).map(([key, { label, color }]) => (
              <button
                key={key}
                className="filter-btn"
                style={{
                  borderColor: activeTypes.includes(key as mealType)
                    ? color
                    : "#666",
                }}
                onClick={() => toggleType(key as mealType)}
              >
                <div className="filter-svg">
                  <RecipeTypeIcon
                    type={key as mealType}
                    color={activeTypes.includes(key as mealType) ? "" : "#666"}
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
              {calculateRecipeKcal(selectedRecipe)}
            </div>
            <div
              className={`recipe-param 
                ${getFontSizeClass(selectedRecipe.time)} 
                ${getStatusClass("time", selectedRecipe.time)}
              `}
            >
              {selectedRecipe.time}
            </div>
            <div
              className={`recipe-param 
                ${getFontSizeClass(selectedRecipe.portions)}
              `}
            >
              {selectedRecipe.portions}
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
                  src={image === "" ? "./default.jpg" : image}
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
                        <h4 className="ingredient-group-title">
                          {group.title}
                        </h4>
                      )}
                      <ul className="ingredients-list">
                        {group.items.map((ingredient, index) => (
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
                        ))}
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
      )}

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
                                  url(${recipe.images[0] === "" ? "./default.jpg" : recipe.images[0]})`,
              }}
            ></div>

            <div
              className="card-svg"
              style={{ borderColor: mealTypesData[recipe.type].color }}
            >
              <RecipeTypeIcon type={recipe.type} />
            </div>
            {(recipe.steps.length === 0 || recipe.ingredients.length === 0) && (
              <div
                className="card-warning"
                style={{ borderColor: mealTypesData[recipe.type].color }}
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

      {showAllIngredients && (
        <div className="all-ingredients">
          <div
            className="close-ingredients"
            onClick={() => {
              setShowAllIngredients(false);
            }}
          >
            <UtilsIcon name="close" color="#fff" />
          </div>
          {[
            { label: "Mięso", data: iMET },
            { label: "Zboża", data: iGRN },
            { label: "Nabiał", data: iDIR },
            { label: "Tłuszcze", data: iFAT },
            { label: "Warzywa", data: iVEG },
            { label: "Owoce", data: iFRT },
            { label: "Inne", data: iOTH },
            { label: "Sosy", data: iSAU },
            { label: "Przyprawy", data: iSPC },
          ].map((group) => (
            <section key={group.label} className="ingredient-group">
              <h2 className="ingredient-group-title">{group.label}</h2>

              <ul className="ingredient-list">
                {Object.entries(group.data).map(([id, item]) => (
                  <li key={id} className="ingredient-card">
                    <div className="ingredient-card-header">
                      <span className="ingredient-name">{item.name}</span>
                    </div>

                    <div className="ingredient-card-content">
                      <div className="ingredient-meta">
                        <IngredientIcon ingType={item.type} />
                        <span className="type">
                          {ingredientTypeLabels[item.type]}
                        </span>
                      </div>

                      <div className="kcal">
                        <strong>{item.kcalPer100g} kcal / 100 g</strong>
                      </div>

                      {item.nutrientsPer100g && (
                        <div className="macros">
                          <span>
                            T: <strong>{item.nutrientsPer100g[0]} g</strong>
                          </span>
                          <span>
                            W: <strong>{item.nutrientsPer100g[1]} g</strong>
                          </span>
                          <span>
                            B: <strong>{item.nutrientsPer100g[2]} g</strong>
                          </span>
                        </div>
                      )}

                      {item.unitWeights && (
                        <div className="units">
                          {Object.entries(item.unitWeights).map(
                            ([unit, weight]) => (
                              <span key={unit} className="unit">
                                {unit}: <strong>{weight} g</strong>
                              </span>
                            ),
                          )}
                        </div>
                      )}
                    </div>

                    <span className="ingredient-id">{id}</span>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      )}

      <footer className="footer">
        <button
          className="show-ingredients"
          onClick={() => {
            setShowAllIngredients((prev) => !prev);
          }}
        >
          Pokaż listę składników
        </button>
      </footer>
    </div>
  );
}

export default App;
