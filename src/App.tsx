import { useEffect, useRef, useState } from "react";
import { recipes } from "./recipes";
import {
  type IngredientType,
  type KeyWord,
  type MealType,
  type Recipe,
} from "./types";
import IngredientIcon from "./assets/ingredientsIcon";
import {
  calculateRecipeKcal,
  calculateRecipeKcalPer100g,
  calculateRecipeNutrients,
  countDoneRecipes,
  countIngredientTypes,
  countIngredientUsage,
  countRecipeCalories,
  countRecipeKcalPer100g,
  countRecipesTypes,
  ingredientTypeColor,
  ingredientTypeLabels,
  interpolateColor,
  kcalLowColors,
  kcalTopColors,
  keywordAliases,
  MealTypesData,
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
import {
  Chart,
  BarController,
  BarElement,
  CategoryScale,
  LinearScale,
  ArcElement,
  Legend,
  Tooltip,
} from "chart.js";

const SWIPE_THRESHOLD = 50;
const recipeTypeCount = countRecipesTypes(recipes);
const ingredientTypeCount = countIngredientTypes();
const doneRecipeCount = countDoneRecipes(recipes);
const ingredientUsage = countIngredientUsage(recipes);
const recipeCalories = countRecipeCalories(recipes);
const recipeKcalPer100g = countRecipeKcalPer100g(recipes);
console.log(recipeKcalPer100g);

Chart.register(
  BarController,
  BarElement,
  ArcElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
);

function App() {
  const canvasRefs = {
    calories: useRef<HTMLCanvasElement | null>(null),
    kcalDensity: useRef<HTMLCanvasElement | null>(null),
    recipeTypes: useRef<HTMLCanvasElement | null>(null),
    ingredientTypes: useRef<HTMLCanvasElement | null>(null),
    doneRecipes: useRef<HTMLCanvasElement | null>(null),
    ingredientUsage: useRef<HTMLCanvasElement | null>(null),
    topCalories: useRef<HTMLCanvasElement | null>(null),
    bottomCalories: useRef<HTMLCanvasElement | null>(null),
    topKcalDensity: useRef<HTMLCanvasElement | null>(null),
    bottomKcalDensity: useRef<HTMLCanvasElement | null>(null),
  };
  const chartRefs = {
    calories: useRef<Chart | null>(null),
    kcalDensity: useRef<Chart | null>(null),
    recipeTypes: useRef<Chart | null>(null),
    ingredientTypes: useRef<Chart | null>(null),
    doneRecipes: useRef<Chart | null>(null),
    ingredientUsage: useRef<Chart | null>(null),
    topCalories: useRef<Chart | null>(null),
    bottomCalories: useRef<Chart | null>(null),
    topKcalDensity: useRef<Chart | null>(null),
    bottomKcalDensity: useRef<Chart | null>(null),
  };

  const createChart = (
    canvas: HTMLCanvasElement | null,
    chartRef: React.MutableRefObject<Chart | null>,
    labels: string[],
    data: number[],
    colors?: string[],
  ) => {
    const truncateLabel = (label: string) => {
      return label.length > 12 ? label.slice(0, 9) + "..." : label;
    };

    if (!canvas) return;

    if (chartRef.current) {
      chartRef.current.destroy();
    }

    chartRef.current = new Chart(canvas, {
      type: "bar",
      data: {
        labels: labels.map(truncateLabel),
        datasets: [
          {
            data,
            backgroundColor:
              colors ??
              labels.map((_, i) => (i % 2 === 0 ? "#099268" : "#c3fae8")),
            borderRadius: 0,
            borderSkipped: false,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false,
          },
        },
        scales: {
          x: {
            grid: {
              display: true,
              color: "#222",
              lineWidth: 1,
            },
          },
          y: {
            grid: {
              display: true,
              color: "#222",
              lineWidth: 1,
            },
          },
        },
      },
    });
  };

  const contentRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);
  const [activeTypes, setActiveTypes] = useState<MealType[]>([]);
  const [showFilters, setShowFilters] = useState<boolean>(false);
  const [showSearch, setShowSearch] = useState<boolean>(false);
  const [headerCollapsed, setHeaderCollapsed] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [activeImageIndex, setActiveImageIndex] = useState<number>(0);
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

  // scroll unset on modal open
  useEffect(() => {
    document.body.style.overflow = selectedRecipe ? "hidden" : "auto";
    setActiveImageIndex(0);
  }, [selectedRecipe]);
  useEffect(() => {
    document.body.style.overflow =
      showAllIngredients || showStatistics ? "hidden" : "auto";
  }, [showAllIngredients, showStatistics]);

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

  // creates all charts
  const createCharts = () => {
    const topN = (obj: Record<string, number>, n: number) =>
      Object.entries(obj)
        .sort((a, b) => b[1] - a[1])
        .slice(0, n);

    const bottomN = (obj: Record<string, number>, n: number) =>
      Object.entries(obj)
        .sort((a, b) => a[1] - b[1])
        .slice(0, n);

    const sorted = (obj: Record<string, number>) =>
      Object.entries(obj).sort((a, b) => b[1] - a[1]);

    const allKcal = sorted(recipeCalories);
    const minKcal = Math.min(...allKcal.map(([, v]) => v));
    const maxKcal = Math.max(...allKcal.map(([, v]) => v));

    const allKcalColors = allKcal.map(([, v]) =>
      interpolateColor(v, minKcal, maxKcal),
    );
    createChart(
      canvasRefs.calories.current,
      chartRefs.calories,
      allKcal.map(([k]) => k),
      allKcal.map(([, v]) => v),
      allKcalColors,
    );

    const allKcalDensity = sorted(recipeKcalPer100g);
    const minKcalDen = Math.min(...allKcalDensity.map(([, v]) => v));
    const maxKcalDen = Math.max(...allKcalDensity.map(([, v]) => v));
    const allKcalDenColors = allKcalDensity.map(([, v]) =>
      interpolateColor(v, minKcalDen, maxKcalDen),
    );
    createChart(
      canvasRefs.kcalDensity.current,
      chartRefs.kcalDensity,
      allKcalDensity.map(([k]) => k),
      allKcalDensity.map(([, v]) => v),
      allKcalDenColors,
    );

    const topKcal = topN(recipeCalories, 10);
    createChart(
      canvasRefs.topCalories.current,
      chartRefs.topCalories,
      topKcal.map(([k]) => k),
      topKcal.map(([, v]) => v),
      kcalTopColors,
    );

    const lowKcal = bottomN(recipeCalories, 10);
    createChart(
      canvasRefs.bottomCalories.current,
      chartRefs.bottomCalories,
      lowKcal.map(([k]) => k),
      lowKcal.map(([, v]) => v),
      kcalLowColors,
    );

    const topKcalDensity = topN(recipeKcalPer100g, 10);
    createChart(
      canvasRefs.topKcalDensity.current,
      chartRefs.topKcalDensity,
      topKcalDensity.map(([k]) => k),
      topKcalDensity.map(([, v]) => v),
      kcalTopColors,
    );

    const lowKcalDensity = bottomN(recipeKcalPer100g, 10);
    createChart(
      canvasRefs.bottomKcalDensity.current,
      chartRefs.bottomKcalDensity,
      lowKcalDensity.map(([k]) => k),
      lowKcalDensity.map(([, v]) => v),
      kcalLowColors,
    );

    const ingredientTypeMap: Record<string, IngredientType> = {};
    const ingredientCollections = [
      iDIR,
      iFAT,
      iFRT,
      iGRN,
      iMET,
      iOTH,
      iSAU,
      iSPC,
      iVEG,
    ];

    ingredientCollections.forEach((col) => {
      Object.values(col).forEach((i) => {
        ingredientTypeMap[i.name] = i.type;
      });
    });

    const topIng = topN(ingredientUsage, 10);
    createChart(
      canvasRefs.ingredientUsage.current,
      chartRefs.ingredientUsage,
      topIng.map(([k]) => k),
      topIng.map(([, v]) => v),
      topIng.map(([k]) => ingredientTypeColor[ingredientTypeMap[k]]),
    );

    const recipeLabels = Object.keys(recipeTypeCount);
    const recipeValues = Object.values(recipeTypeCount);
    createChart(
      canvasRefs.recipeTypes.current,
      chartRefs.recipeTypes,
      recipeLabels.map((k) => MealTypesData[k as MealType].label),
      recipeValues,
      recipeLabels.map((k) => MealTypesData[k as MealType].color),
    );

    const ingLabels = Object.keys(ingredientTypeCount);
    const ingValues = Object.values(ingredientTypeCount);
    createChart(
      canvasRefs.ingredientTypes.current,
      chartRefs.ingredientTypes,
      ingLabels.map((k) => ingredientTypeLabels[k as IngredientType]),
      ingValues,
      ingLabels.map((k) => ingredientTypeColor[k as IngredientType]),
    );

    createChart(
      canvasRefs.doneRecipes.current,
      chartRefs.doneRecipes,
      ["Done", "Not done"],
      [doneRecipeCount.yes, doneRecipeCount.no],
      ["#0ca678", "#f03e3e"],
    );
  };
  useEffect(() => {
    if (!showStatistics) return;

    requestAnimationFrame(() => {
      createCharts();
    });
  }, [showStatistics]);

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
                        <h4 className="ingredient-group-title">
                          {group.title}
                        </h4>
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

                      <div className="ingredient-usage">
                        Użyto w przepisach:{" "}
                        <strong>{ingredientUsage[item.name] ?? 0}</strong>
                      </div>
                    </div>

                    <span className="ingredient-id">{id}</span>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      )}

      {showStatistics && (
        <div className="statistics">
          <div
            className="close-ingredients"
            onClick={() => {
              setShowStatistics(false);
            }}
          >
            <UtilsIcon name="close" color="#fff" />
          </div>

          <div className="statistics-element">
            <h2>Dziesięć najbardziej kalorycznych przepisów na 100g</h2>
            <div className="chart-wrapper">
              <canvas ref={canvasRefs.topKcalDensity}></canvas>
            </div>
          </div>

          <div className="statistics-element">
            <h2>Dziesięć najmniej kalorycznych przepisów na 100g</h2>
            <div className="chart-wrapper">
              <canvas ref={canvasRefs.bottomKcalDensity}></canvas>
            </div>
          </div>

          <div className="statistics-element">
            <h2>Dziesięć najbardziej kalorycznych przepisów na porcję</h2>
            <div className="chart-wrapper">
              <canvas ref={canvasRefs.topCalories}></canvas>
            </div>
          </div>

          <div className="statistics-element">
            <h2>Dziesięć najmniej kalorycznych przepisów na porcję</h2>
            <div className="chart-wrapper">
              <canvas ref={canvasRefs.bottomCalories}></canvas>
            </div>
          </div>

          <div className="statistics-element">
            <h2>Najczęściej używane składniki</h2>
            <div className="chart-wrapper">
              <canvas ref={canvasRefs.ingredientUsage}></canvas>
            </div>
          </div>

          <div className="statistics-element">
            <h2>Rodzaje przepisów</h2>
            <div className="chart-wrapper">
              <canvas ref={canvasRefs.recipeTypes}></canvas>
            </div>
          </div>

          <div className="statistics-element">
            <h2>Rodzaje składników</h2>
            <div className="chart-wrapper">
              <canvas ref={canvasRefs.ingredientTypes}></canvas>
            </div>
          </div>

          <div className="statistics-element">
            <h2>Wykonane przepisy</h2>
            <div className="chart-wrapper">
              <canvas ref={canvasRefs.doneRecipes}></canvas>
            </div>
          </div>

          <div className="statistics-element">
            <h2>Kaloryczność w przeliczeniu na porcję</h2>
            <div className="chart-wrapper">
              <canvas ref={canvasRefs.calories}></canvas>
            </div>
          </div>

          <div className="statistics-element">
            <h2>Kaloryczność w przeliczeniu na 100 g</h2>
            <div className="chart-wrapper">
              <canvas ref={canvasRefs.kcalDensity}></canvas>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
