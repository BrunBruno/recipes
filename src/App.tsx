import { useEffect, useRef, useState } from "react";
import { recipes } from "./recipes";
import { type mealType, type Recipe } from "./types";
import IngredientSvg from "./assets/ingredientsSvgs";
import { calculateRecipeKcal } from "./utils";
import RecipeTypeIcons from "./assets/recipeTypeIcons";

const borderColorMap: Record<mealType, string> = {
  dinner: "#f59f00",
  snack: "#f03e3e",
  soup: "#37b24d",
  dessert: "#1c7ed6",
  salad: "#ae3ec9",
  other: "#f76707",
};

const mealTypes: mealType[] = [
  "dinner",
  "snack",
  "soup",
  "dessert",
  "salad",
  "other",
];
const mealTypePL: Record<mealType, string> = {
  dinner: "Obiad",
  snack: "Przekąska",
  soup: "Zupa",
  dessert: "Deser",
  salad: "Sałatka",
  other: "Inne",
};

function App() {
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);
  const [activeTypes, setActiveTypes] = useState<mealType[]>([]);
  const [showFilters, setShowFilters] = useState<boolean>(false);
  const [showSearch, setShowSearch] = useState<boolean>(false);
  const [headerCollapsed, setHeaderCollapsed] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>("");

  const contentRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

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
  }, [selectedRecipe]);

  useEffect(() => {
    if (!selectedRecipe) return;

    const contentEl = contentRef.current;
    if (!contentEl) return;

    const handleScroll = () => {
      setHeaderCollapsed(true);
      // contentEl.removeEventListener("scroll", handleScroll);
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
          <svg
            fill="#099268"
            viewBox="0 0 50 50"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12,39h32V2H12C8.691,2,6,4.691,6,8v34.417C6,45.496,8.691,48,12,48h32v-2H12c-2.168,0-4-1.641-4-3.583C8,40.501,9.757,39,12,39z M36.709,31.706C36.514,31.902,36.257,32,36,32c-0.255,0-0.511-0.097-0.705-0.292l-6.523-6.494l-1.76,1.76l-1.846-1.879l3.153-3.153l8.387,8.349C37.097,30.681,37.099,31.314,36.709,31.706z M16.286,10.007l7.733,7.781l-3.044,3.044L16.23,16C14.568,14.338,14.594,11.637,16.286,10.007z M14.329,30.293l13.024-13.024c-0.034-0.085-0.083-0.163-0.107-0.252c-0.399-1.509-0.322-3.426,1.045-4.777c2.031-2.094,5.497-2.989,6.998-1.505c1.501,1.571,0.596,4.909-1.435,6.916c-1.444,1.428-3.298,1.545-4.8,1.16c-0.104-0.027-0.196-0.081-0.294-0.122L14.743,31.707C14.548,31.902,15.292,32,15.036,32s-0.512-0.098-0.707-0.293C13.938,31.316,13.938,30.684,14.329,30.293z" />
          </svg>
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
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11 6C13.7614 6 16 8.23858 16 11M16.6588 16.6549L21 21M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z"
                stroke="#999"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <button
            className="toggle-filters-btn"
            onClick={() => {
              setShowFilters((prev) => !prev);
              setShowSearch(false);
            }}
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 12L4 4H15M20 4L15 12V21L9 18V16"
                stroke="#999"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          <div
            className={`filter-buttons-bg ${showSearch ? "show" : ""}`}
            onClick={() => setShowSearch((prev) => !prev)}
          ></div>

          <div className={`recipe-search ${showSearch ? "show" : ""}`}>
            <label className="recipe-search-label">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11 6C13.7614 6 16 8.23858 16 11M16.6588 16.6549L21 21M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z"
                  stroke="#999"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
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
            {mealTypes.map((type) => (
              <button
                key={type}
                className={`filter-btn`}
                style={{
                  borderColor: activeTypes.includes(type)
                    ? borderColorMap[type]
                    : "#666",
                }}
                onClick={() => toggleType(type)}
              >
                <div className="filter-svg">
                  <RecipeTypeIcons
                    type={type}
                    color={activeTypes.includes(type) ? "" : "#666"}
                  />
                </div>
                <span className="filter-text">{mealTypePL[type]}</span>
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
            ×
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

            {/* <div
              className={`recipe-param 
                ${getFontSizeClass(selectedRecipe.kcal)} 
                ${getStatusClass("kcal", selectedRecipe.kcal)}
              `}
            >
              {selectedRecipe.kcal}
            </div> */}
          </div>

          <div className="recipe-details-header">
            <img
              src={
                selectedRecipe.image === ""
                  ? "./default.jpg"
                  : selectedRecipe.image
              }
              alt={selectedRecipe.name}
              className="recipe-details-image"
            />
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
              <svg
                width="120px"
                height="120px"
                viewBox="0 0 1024 1024"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="#aaa"
                  d="m557.248 608 135.744-135.744-45.248-45.248-135.68 135.744-135.808-135.68-45.248 45.184L466.752 608l-135.68 135.68 45.184 45.312L512 653.248l135.744 135.744 45.248-45.248L557.312 608zM704 192h160v736H160V192h160v64h384v-64zm-320 0V96h256v96H384z"
                />
              </svg>
            </div>
          ) : (
            <div ref={contentRef} className="recipe-details-content">
              <section>
                <h3>Składniki</h3>
                <ul className="ingredients-list">
                  {selectedRecipe.ingredients.map((ingredient, index) => {
                    return (
                      <li key={index}>
                        <div className="ingredient-indicator">
                          <IngredientSvg ingType={ingredient.ingredient.type} />
                        </div>
                        <span className="ingredient-name">
                          {ingredient.ingredient.name}
                        </span>
                        <span className="ingredient-amount">
                          {ingredient.amount}
                          {ingredient.amount
                            ? ingredient.unit
                              ? ` ${ingredient.unit}`
                              : ingredient.ingredient.defaultUnit
                                ? ` ${ingredient.ingredient.defaultUnit}`
                                : " g"
                            : ""}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </section>

              <section>
                <h3>Sposób przygotowania</h3>
                <ol className="steps-list">
                  {Array.isArray(selectedRecipe.steps) &&
                    selectedRecipe.steps.map((step, index) => {
                      if (typeof step === "string") {
                        return <li key={index}>{step}</li>;
                      } else {
                        return (
                          <div key={index}>
                            <h4>{step.title}</h4>
                            {step.steps.map((s, i) => (
                              <li key={i}>{s}</li>
                            ))}
                          </div>
                        );
                      }
                    })}
                </ol>
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
              className={`recipe-card-bg ${
                recipe.image !== "" ? "saturate-bg" : ""
              }`}
              style={{
                backgroundImage: `linear-gradient(
                  rgba(0,0,0,0.3),
                  rgba(0,0,0,0.8)
                ),url(${recipe.image === "" ? "./default.jpg" : recipe.image})`,
              }}
            ></div>

            <div
              className="card-svg"
              style={{ borderColor: borderColorMap[recipe.type] }}
            >
              <RecipeTypeIcons type={recipe.type} />
            </div>

            <div className="recipe-card-content">
              <h2>{recipe.name}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
