import "./recipe-card.css";
import { Fragment, useEffect, useRef, useState } from "react";
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
import type {
  DayIngredientPair,
  DayIngredients,
  DayMealType,
  Ingredient,
  Recipe,
} from "../../types";
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
  setDayIngredients: React.Dispatch<React.SetStateAction<DayIngredients>>;
};

const swipeThreshold = 50;

function RecipeCard({ selectedRecipe, setDayIngredients }: RecipeCardProps) {
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
  const [mealType, setMealType] = useState<DayMealType>("breakfast");

  useEffect(() => {
    if (selectedRecipe.type === "breakfast") {
      setMealType("breakfast");
    } else if (
      selectedRecipe.type === "dinner" ||
      selectedRecipe.type === "soup" ||
      selectedRecipe.type === "dessert"
    ) {
      setMealType("lunch");
    } else {
      setMealType("dinner");
    }
  }, [selectedRecipe.type]);

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

  const handleRadioChange = (
    event: React.ChangeEvent<HTMLInputElement, HTMLInputElement>,
  ) => {
    const value = event.target.value as DayMealType;
    setMealType(value);
  };

  function isChoice(item: any) {
    return item.type === "choice";
  }
  function resolveIngredient(item: any): Ingredient {
    if (isChoice(item)) {
      return item.options[item.selected];
    }
    return item as Ingredient;
  }
  function toGrams(item: Ingredient) {
    const raw = item.amount;

    if (raw === undefined || raw === null) return 0;

    const amount = typeof raw === "string" ? parseFloat(raw) : raw;
    if (!amount || Number.isNaN(amount)) return 0;

    const unit = item.unit ?? "g";
    const weight = item.ing.unitWeights?.[unit];

    return weight ? amount * weight : amount;
  }
  const onAddToDay = () => {
    const dayIngredients: DayIngredientPair[] = [];

    recipeState.ingredients.forEach((group) => {
      group.items.forEach((item) => {
        const resolved = resolveIngredient(item);

        const ratio = portions / selectedRecipe.portions;
        const grams = toGrams(resolved) * ratio;

        dayIngredients.push([resolved.ing.name, grams]);
      });
    });

    setDayIngredients((prev) => ({
      ...prev,
      [mealType]: [...prev[mealType], ...dayIngredients],
    }));
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
                            {item.amount ? formatUnit(item) : "g"}
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
    const maxRange = Math.round(
      Math.max(...data) + 10 * (portions > 0 ? portions : 1),
    );

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
                position: "right",
                beginAtZero: true,
                max: maxRange,
                ticks: {
                  display: true,
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
            window.history.back();
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
                            <li key={index} className="ingredient-item">
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
                                  {active.amount ? formatUnit(active) : ""}
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
                        if (item.invisible)
                          return <Fragment key={index}></Fragment>;

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
              <div className="add-to-day-content">
                <h3>Dodaj do Dnia</h3>
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
                      value={grams.toFixed(1)}
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
                <div className="input-meal">
                  <label className="meal-radio">
                    <input
                      type="radio"
                      name="meal"
                      value={"breakfast"}
                      checked={mealType === "breakfast"}
                      onChange={(e) => {
                        handleRadioChange(e);
                      }}
                    />
                    <svg
                      fill="#fff"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M23,16a1,1,0,0,1-1,1H2a1,1,0,0,1,0-2H22A1,1,0,0,1,23,16Zm-5,5a1,1,0,0,0,0-2H6a1,1,0,0,0,0,2ZM7,12a1,1,0,0,0,2,0,3,3,0,0,1,6,0,1,1,0,0,0,2,0A5,5,0,0,0,7,12Zm4-7a1,1,0,0,0,2,0V4a1,1,0,0,0-2,0Zm7,7a1,1,0,0,0,1,1h1a1,1,0,0,0,0-2H19A1,1,0,0,0,18,12ZM4,11a1,1,0,0,0,0,2H5a1,1,0,0,0,0-2ZM5.636,5.636a1,1,0,0,0,0,1.414l.707.707A1,1,0,0,0,7.757,6.343L7.05,5.636A1,1,0,0,0,5.636,5.636Zm11.314,0-.707.707a1,1,0,1,0,1.414,1.414l.707-.707A1,1,0,1,0,16.95,5.636Z" />
                    </svg>
                  </label>
                  <label className="meal-radio">
                    <input
                      type="radio"
                      name="meal"
                      value={"lunch"}
                      checked={mealType === "lunch"}
                      onChange={(e) => {
                        handleRadioChange(e);
                      }}
                    />
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="12"
                        cy="12"
                        r="5"
                        stroke="#fff"
                        strokeWidth="1.5"
                      />
                      <path
                        d="M12 2V4"
                        stroke="#fff"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                      <path
                        d="M12 20V22"
                        stroke="#fff"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                      <path
                        d="M4 12L2 12"
                        stroke="#fff"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                      <path
                        d="M22 12L20 12"
                        stroke="#fff"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                      <path
                        d="M19.7778 4.22266L17.5558 6.25424"
                        stroke="#fff"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                      <path
                        d="M4.22217 4.22266L6.44418 6.25424"
                        stroke="#fff"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                      <path
                        d="M6.44434 17.5557L4.22211 19.7779"
                        stroke="#fff"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                      <path
                        d="M19.7778 19.7773L17.5558 17.5551"
                        stroke="#fff"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                    </svg>
                  </label>
                  <label className="meal-radio">
                    <input
                      type="radio"
                      name="meal"
                      value={"dinner"}
                      checked={mealType === "dinner"}
                      onChange={(e) => {
                        handleRadioChange(e);
                      }}
                    />
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M14.5739 1.11056L13.7826 2.69316C13.7632 2.73186 13.7319 2.76325 13.6932 2.7826L12.1106 3.5739C11.9631 3.64761 11.9631 3.85797 12.1106 3.93167L13.6932 4.72297C13.7319 4.74233 13.7632 4.77371 13.7826 4.81241L14.5739 6.39502C14.6476 6.54243 14.858 6.54243 14.9317 6.39502L15.723 4.81241C15.7423 4.77371 15.7737 4.74232 15.8124 4.72297L17.395 3.93167C17.5424 3.85797 17.5424 3.64761 17.395 3.5739L15.8124 2.7826C15.7737 2.76325 15.7423 2.73186 15.723 2.69316L14.9317 1.11056C14.858 0.963147 14.6476 0.963148 14.5739 1.11056Z"
                        fill="#fff"
                      />
                      <path
                        d="M19.2419 5.07223L18.4633 7.40815C18.4434 7.46787 18.3965 7.51474 18.3368 7.53464L16.0009 8.31328C15.8185 8.37406 15.8185 8.63198 16.0009 8.69276L18.3368 9.4714C18.3965 9.4913 18.4434 9.53817 18.4633 9.59789L19.2419 11.9338C19.3027 12.1161 19.5606 12.1161 19.6214 11.9338L20.4 9.59789C20.42 9.53817 20.4668 9.4913 20.5265 9.4714L22.8625 8.69276C23.0448 8.63198 23.0448 8.37406 22.8625 8.31328L20.5265 7.53464C20.4668 7.51474 20.42 7.46787 20.4 7.40815L19.6214 5.07223C19.5606 4.88989 19.3027 4.88989 19.2419 5.07223Z"
                        fill="#fff"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M10.4075 13.6642C13.2348 16.4915 17.6517 16.7363 20.6641 14.3703C20.7014 14.341 20.7385 14.3113 20.7754 14.2812C20.9148 14.1674 21.051 14.0479 21.1837 13.9226C21.2376 13.8718 21.2909 13.8201 21.3436 13.7674C21.8557 13.2552 22.9064 13.5578 22.7517 14.2653C22.6983 14.5098 22.6365 14.7517 22.5667 14.9905C22.5253 15.1321 22.4811 15.2727 22.4341 15.4122C22.4213 15.4502 22.4082 15.4883 22.395 15.5262C20.8977 19.8142 16.7886 23.0003 12 23.0003C5.92487 23.0003 1 18.0754 1 12.0003C1 7.13315 4.29086 2.98258 8.66889 1.54252L8.72248 1.52504C8.8185 1.49401 8.91503 1.46428 9.01205 1.43587C9.26959 1.36046 9.5306 1.29438 9.79466 1.23801C10.5379 1.07934 10.8418 2.19074 10.3043 2.72815C10.251 2.78147 10.1987 2.83539 10.1473 2.88989C10.0456 2.99777 9.94766 3.10794 9.8535 3.22023C9.83286 3.24485 9.8124 3.26957 9.79212 3.29439C7.32966 6.30844 7.54457 10.8012 10.4075 13.6642ZM8.99331 15.0784C11.7248 17.8099 15.6724 18.6299 19.0872 17.4693C17.4281 19.6024 14.85 21.0003 12 21.0003C7.02944 21.0003 3 16.9709 3 12.0003C3 9.09163 4.45653 6.47161 6.66058 4.81846C5.41569 8.27071 6.2174 12.3025 8.99331 15.0784Z"
                        fill="#fff"
                      />
                    </svg>
                  </label>
                  <div className="radio-indicator">
                    {mealType === "breakfast"
                      ? "Śniadanie"
                      : mealType === "lunch"
                        ? "Obiad"
                        : "Kolacja"}
                  </div>
                </div>
                <button
                  className="add-button"
                  onClick={() => {
                    onAddToDay();
                  }}
                >
                  Dodaj
                </button>
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
