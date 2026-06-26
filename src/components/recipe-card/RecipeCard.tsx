import "./recipe-card.css";
import { useEffect, useRef, useState } from "react";
import IngredientIcon from "../../assets/ingredientsIcon";
import UtilsIcon from "../../assets/utilsIcon";
import {
  calculateRecipeKcal,
  calculateRecipeKcalPer100g,
  calculateRecipeNutrients,
  DAILY_NUTRIENTS,
  formatUnit,
} from "../../utils";
import type { Ingredient, Recipe } from "../../types";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";

ChartJS.register(ChartDataLabels);
ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
);

type RecipeCardProps = {
  selectedRecipe: Recipe;
  setSelectedRecipe: React.Dispatch<React.SetStateAction<Recipe | null>>;
};

const swipeThreshold = 50;

function RecipeCard({ selectedRecipe, setSelectedRecipe }: RecipeCardProps) {
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const [headerCollapsed, setHeaderCollapsed] = useState<boolean>(false);
  const [activeImageIndex, setActiveImageIndex] = useState<number>(0);
  const [recipeState, setRecipeState] = useState(selectedRecipe);

  useEffect(() => {
    setRecipeState(structuredClone(selectedRecipe));
  }, [selectedRecipe]);

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

  const generateExtras = () => {
    return (
      <>
        {recipeState.extrasMain &&
          (() => {
            const extraMain =
              recipeState.extrasMain.options[recipeState.extrasMain.selected];

            return (
              <div className="recipe-ingredient-group">
                <div className="ingredients-list-container">
                  <h4 className="ingredient-group-title">
                    {extraMain.title}
                    <button
                      className="group-alt"
                      onClick={() => {
                        setRecipeState((prev) => {
                          const copy = structuredClone(prev);

                          copy.extrasMain!.selected =
                            (copy.extrasMain!.selected + 1) %
                            copy.extrasMain!.options.length;

                          return copy;
                        });
                      }}
                    >
                      <UtilsIcon name="swap" color="#fff" />
                    </button>
                  </h4>

                  <ul className="ingredients-list">
                    {extraMain.items.map((item, index) => (
                      <li key={index} className="ingredient-item">
                        <div className="ingredient-indicator">
                          <IngredientIcon
                            ingType={item.ing.type}
                            subType={item.ing.subType}
                            color={item.ing.color}
                          />
                        </div>

                        <span className="ingredient-name">{item.ing.name}</span>

                        <span className="ingredient-amount">
                          {item.amount}
                          <span className="ingredient-unit">
                            {item.amount ? formatUnit(item) : ""}
                          </span>
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })()}

        {recipeState.extrasVeg &&
          (() => {
            const extraVeg =
              recipeState.extrasVeg.options[recipeState.extrasVeg.selected];

            return (
              <div className="recipe-ingredient-group">
                <div className="ingredients-list-container">
                  <h4 className="ingredient-group-title">
                    {extraVeg.title}
                    <button
                      className="group-alt"
                      onClick={() => {
                        setRecipeState((prev) => {
                          const copy = structuredClone(prev);

                          copy.extrasVeg!.selected =
                            (copy.extrasVeg!.selected + 1) %
                            copy.extrasVeg!.options.length;

                          return copy;
                        });
                      }}
                    >
                      <UtilsIcon name="swap" color="#fff" />
                    </button>
                  </h4>

                  <ul className="ingredients-list">
                    {extraVeg.items.map((item, index) => (
                      <li key={index} className="ingredient-item">
                        <div className="ingredient-indicator">
                          <IngredientIcon
                            ingType={item.ing.type}
                            subType={item.ing.subType}
                            color={item.ing.color}
                          />
                        </div>

                        <span className="ingredient-name">{item.ing.name}</span>

                        <span className="ingredient-amount">
                          {item.amount}
                          <span className="ingredient-unit">
                            {item.amount ? formatUnit(item) : ""}
                          </span>
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })()}
      </>
    );
  };

  const recipeDailyCharts = (
    kcal: number,
    nutrients: [string, string, string],
  ) => {
    const values = [kcal];
    for (let nut in nutrients) {
      values.push(parseFloat(nutrients[nut]));
    }
    const data = values.map((val, i) => (val / DAILY_NUTRIENTS[i]) * 100);
    const maxRange = Math.round(Math.max(...data) + 10);

    const barData = {
      labels: ["Kcal", "Tłuszcze", "Węglowodany", "Białko"],
      datasets: [
        {
          label: "Pokrycie (%)",
          data: data,
          backgroundColor: ["#099268", "#f59f00", "#1098ad", "#f03e3e"],
        },
      ],
    };

    return (
      <div className="recipe-daily-chart">
        <Bar
          data={barData}
          options={{
            scales: {
              y: {
                beginAtZero: true,
                max: maxRange,
                ticks: {
                  callback: (val) => val + "%",
                },
                grid: {
                  display: true,
                  color: "#222",
                  lineWidth: 1,
                },
              },
            },
            plugins: {
              datalabels: {
                anchor: "end",
                align: "top",
                formatter: (val: number) => val.toFixed(1) + "%",
                color: "#aaa",
                font: {
                  weight: "bold",
                },
              },
              legend: {
                display: false,
              },
            },
          }}
        />
      </div>
    );
  };

  return (
    <div
      ref={contentRef}
      className={`recipe-details ${headerCollapsed ? "collapsed" : ""}`}
    >
      <div className="recipe-details-header">
        <button
          className="close-button"
          onClick={() => {
            setSelectedRecipe(null);
            window.history.pushState(null, "");
          }}
          aria-label="Close recipe details"
        >
          <UtilsIcon name="close" color="#fff" />
        </button>

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
      </div>

      {selectedRecipe.ingredients.length === 0 &&
      selectedRecipe.steps.length === 0 ? (
        <div style={{ margin: "auto" }}>
          <UtilsIcon name="empty" color="#aaaaaa" />
        </div>
      ) : (
        <div className="recipe-details-content">
          <section className="description-section">
            {selectedRecipe.description}
            <br /> <br />
            {selectedRecipe.executionDifficulty && (
              <div className="diff-rating">
                <span>Uciążliwość wykonania:</span>
                {Array.from({ length: selectedRecipe.executionDifficulty }).map(
                  (_, i) => (
                    <UtilsIcon
                      key={`fs${i}`}
                      name="star-full"
                      color="#0ca678"
                    />
                  ),
                )}
                {Array.from({
                  length: 5 - selectedRecipe.executionDifficulty,
                }).map((_, i) => (
                  <UtilsIcon key={`es${i}`} name="star-empty" color="#0ca678" />
                ))}
              </div>
            )}
            <br />
            Lista składników przeliczona na{" "}
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
            <div className={`${"ingredients-container"}`}>
              {recipeState.ingredients.map((group, groupIndex) => (
                <div
                  key={groupIndex}
                  className={`recipe-ingredient-group ${group.isMain || recipeState.ingredients.length === 1 ? "main-group" : ""}`}
                >
                  <div className="ingredients-list-container">
                    <h4 className="ingredient-group-title">
                      {group.title
                        ? `Składniki: ${group.title}`
                        : "Lista składników"}
                    </h4>
                    <ul className="ingredients-list">
                      {group.items.map((item, index) => {
                        if ("type" in item && item.type === "choice") {
                          const active = item.options[item.selected];

                          return (
                            <li key={index} className="ingredient-item-alt">
                              <div className="ingredient-indicator">
                                <IngredientIcon
                                  ingType={active.ing.type}
                                  subType={active.ing.subType}
                                  color={active.ing.color}
                                />
                              </div>

                              <span className="ingredient-name">
                                {active.ing.name}
                              </span>

                              <span className="ingredient-amount">
                                {active.amount}
                                <span className="ingredient-unit">
                                  {active.unit ? formatUnit(active) : ""}
                                </span>
                              </span>

                              <button
                                className="ingredient-alt"
                                onClick={() => {
                                  setRecipeState((prev) => {
                                    const copy = structuredClone(prev);
                                    const it = copy.ingredients[groupIndex]
                                      .items[index] as any;
                                    it.selected =
                                      (it.selected + 1) % it.options.length;
                                    return copy;
                                  });
                                }}
                              >
                                <UtilsIcon name="swap" color="#fff" />
                              </button>
                            </li>
                          );
                        }

                        item = item as Ingredient;
                        const ing = item.ing;
                        if (item.exclude || item.invisible) return <></>;

                        return (
                          <li key={index} className="ingredient-item">
                            <div className="ingredient-indicator">
                              <IngredientIcon
                                ingType={ing.type}
                                subType={ing.subType}
                                color={ing.color}
                              />
                            </div>

                            <span className="ingredient-name">{ing.name}</span>

                            <span className="ingredient-amount">
                              {item.amount}
                              <span className="ingredient-unit">
                                {item.amount ? formatUnit(item) : ""}
                              </span>
                            </span>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              ))}

              {(selectedRecipe.extrasMain || selectedRecipe.extrasVeg) &&
                generateExtras()}
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
          <section className="recipe-details-params">
            <div
              className={`recipe-param 
                ${getFontSizeClass(calculateRecipeKcal(recipeState))} 
                ${getStatusClass("kcal", calculateRecipeKcal(recipeState))}
              `}
            >
              <span>{calculateRecipeKcal(recipeState)}</span>
            </div>
            <div
              className={`recipe-param 
                ${getFontSizeClass(calculateRecipeKcalPer100g(recipeState))} 
                ${getStatusClass("kcal100", calculateRecipeKcalPer100g(recipeState))}
              `}
            >
              <span>{calculateRecipeKcalPer100g(recipeState)}</span>
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
                ${getFontSizeClass(calculateRecipeNutrients(recipeState)[0])}
              `}
            >
              <span>{calculateRecipeNutrients(recipeState)[0]}</span>
            </div>
            <div
              className={`recipe-param 
                ${getFontSizeClass(calculateRecipeNutrients(recipeState)[1])}
              `}
            >
              <span>{calculateRecipeNutrients(recipeState)[1]}</span>
            </div>
            <div
              className={`recipe-param 
                ${getFontSizeClass(calculateRecipeNutrients(recipeState)[2])}
              `}
            >
              <span>{calculateRecipeNutrients(recipeState)[2]}</span>
            </div>
          </section>
          <section className="recipe-details-daily">
            {recipeDailyCharts(
              calculateRecipeKcal(recipeState),
              calculateRecipeNutrients(recipeState),
            )}
          </section>
        </div>
      )}
    </div>
  );
}

export default RecipeCard;
