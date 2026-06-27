import "./recipe-card.css";
import { useEffect, useRef, useState } from "react";
import IngredientIcon from "../../assets/ingredientsIcon";
import UtilsIcon from "../../assets/utilsIcon";
import {
  calculateRecipeKcal,
  calculateRecipeKcalPer100g,
  calculateRecipeNutrients,
  calculateRecipeWeight,
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
import { dinnerSidesSteps } from "../../dinnerSides";

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
  const [basePortionGrams, setBasePortionGrams] = useState<number>(0);
  const [activeInput, setActiveInput] = useState<"g" | "p">("p");
  const [portions, setPortions] = useState<number>(1);
  const [grams, setGrams] = useState<number>(100);

  useEffect(() => {
    setRecipeState(structuredClone(selectedRecipe));
  }, [selectedRecipe]);

  useEffect(() => {
    const portionWeight =
      calculateRecipeWeight(recipeState) / recipeState.portions;
    setBasePortionGrams(portionWeight);
    setGrams(portions * portionWeight);
  }, [recipeState]);

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

  // add day input handlers
  const updateFromPortions = (value: number) => {
    const safe = Math.max(0, value);
    setPortions(safe);
    setGrams(safe * basePortionGrams);
  };

  const updateFromGrams = (value: number) => {
    const safe = Math.max(0, value);
    setGrams(safe);
    setPortions(Math.round((10 * safe) / basePortionGrams) / 10);
  };

  const changePortions = (delta: number) => {
    updateFromPortions(portions + delta);
  };

  const changeGrams = (delta: number) => {
    const newG = grams + delta * 0.1 * basePortionGrams;
    updateFromGrams(Math.round(100 * newG) / 100);
  };

  // generate content
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
                    {recipeState.extrasMain.options.length > 1 && (
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
                        <UtilsIcon name="swap" color="#ffffff" />
                      </button>
                    )}
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
                    {recipeState.extrasVeg.options.length > 1 && (
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
                        <UtilsIcon name="swap" color="#ffffff" />
                      </button>
                    )}
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
      <div className={"recipe-details-daily"}>
        <Bar
          data={barData}
          options={{
            scales: {
              y: {
                beginAtZero: true,
                max: maxRange,
                ticks: {
                  display: false,
                  // callback: (val) => val + "%",
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
                color: "#eaeaea",
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
              ? "porcję."
              : selectedRecipe.portions < 5
                ? "porcje."
                : "porcji."}
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
                            <li
                              key={index}
                              // className="ingredient-item-alt"
                              className="ingredient-item"
                            >
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
                        if (item.invisible) return <></>;

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
            {(recipeState.extrasMain || recipeState.extrasVeg) && (
              <div className="steps">
                <h4>Przykładowe podanie</h4>
                <ol className="steps-list">
                  {recipeState.extrasMain &&
                    dinnerSidesSteps(
                      recipeState.extrasMain.options[
                        recipeState.extrasMain.selected
                      ].sideName,
                    ).map((s, i) => <li key={`main-${i}`}>{s}</li>)}

                  {recipeState.extrasVeg &&
                    dinnerSidesSteps(
                      recipeState.extrasVeg.options[
                        recipeState.extrasVeg.selected
                      ].sideName,
                    ).map((s, i) => <li key={`veg-${i}`}>{s}</li>)}
                </ol>
              </div>
            )}
          </section>

          <section className="add-to-day-section">
            <div className="add-to-day">
              <div style={{}}></div>
              <div className="add-to-day-content">
                <h3>Dodaj do dnia</h3>
                <div className="input-selector">
                  <div
                    className={`add-input add-portions ${activeInput === "p" ? "active" : ""}`}
                    onClick={() => setActiveInput("p")}
                  >
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        changePortions(1);
                        setActiveInput("p");
                      }}
                    >
                      +
                    </button>
                    <input
                      readOnly
                      type="number"
                      value={portions}
                      onChange={(e) =>
                        updateFromPortions(Number(e.target.value))
                      }
                    />
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        changePortions(-1);
                        setActiveInput("p");
                      }}
                    >
                      -
                    </button>
                  </div>
                  <div
                    className={`add-input add-grams ${activeInput === "g" ? "active" : ""}`}
                    onClick={() => setActiveInput("g")}
                  >
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        changeGrams(1);
                        setActiveInput("g");
                      }}
                    >
                      +
                    </button>
                    <input
                      readOnly
                      value={grams}
                      onChange={(e) => updateFromGrams(Number(e.target.value))}
                    />
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        changeGrams(-1);
                        setActiveInput("g");
                      }}
                    >
                      -
                    </button>
                  </div>
                </div>
                <button className="add-button">Dodaj</button>
              </div>
            </div>

            <div className="recipe-params">
              <div className="recipe-params-data">
                <div className="params-items">
                  <div
                    className={`recipe-param 
                ${getFontSizeClass(calculateRecipeKcal(recipeState, portions))} 
                ${getStatusClass("kcal", calculateRecipeKcal(recipeState, portions))}
              `}
                  >
                    <span>{calculateRecipeKcal(recipeState, portions)}</span>
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
                ${getFontSizeClass(calculateRecipeNutrients(recipeState, portions)[0])}
              `}
                  >
                    <span>
                      {calculateRecipeNutrients(recipeState, portions)[0]}
                    </span>
                  </div>
                  <div
                    className={`recipe-param 
                ${getFontSizeClass(calculateRecipeNutrients(recipeState, portions)[1])}
              `}
                  >
                    <span>
                      {calculateRecipeNutrients(recipeState, portions)[1]}
                    </span>
                  </div>
                  <div
                    className={`recipe-param 
                ${getFontSizeClass(calculateRecipeNutrients(recipeState, portions)[2])}
              `}
                  >
                    <span>
                      {calculateRecipeNutrients(recipeState, portions)[2]}
                    </span>
                  </div>
                </div>
              </div>

              {recipeDailyCharts(
                calculateRecipeKcal(recipeState, portions),
                calculateRecipeNutrients(recipeState, portions),
              )}
            </div>
          </section>
        </div>
      )}
    </div>
  );
}

export default RecipeCard;
