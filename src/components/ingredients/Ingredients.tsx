import "./ingredients.css";
import IngredientIcon from "../../assets/ingredientsIcon";
import UtilsIcon from "../../assets/utilsIcon";
import { iDIR } from "../../ingredients/ingDairy";
import { iFAT } from "../../ingredients/ingFat";
import { iFRT } from "../../ingredients/ingFruit";
import { iGRN } from "../../ingredients/ingGrain";
import { iMET } from "../../ingredients/ingMeat";
import { iOTH } from "../../ingredients/ingOther";
import { iSPC } from "../../ingredients/ingSpice";
import { iVEG } from "../../ingredients/ingVegetable";
import { recipes } from "../../recipes";
import {
  countIngredientUsage,
  ingredientCollections,
  IngredientTypeData,
} from "../../utils";
import type { IngredientItem } from "../../types";
import { useEffect, useMemo, useState } from "react";
import { iJAR } from "../../ingredients/ingJar";
import { iSNK } from "../../ingredients/ingSnack";
import { iFSH } from "../../ingredients/ingFish";
import { iHRB } from "../../ingredients/ingHerb";
import { iSAU } from "../../ingredients/ingSauce";

type IngredientsProps = {};

const displayUnused = true;
const allGroups = [
  { label: "Mięso", data: iMET },
  { label: "Ryby", data: iFSH },
  { label: "Zboża", data: iGRN },
  { label: "Nabiał", data: iDIR },
  { label: "Tłuszcze", data: iFAT },
  { label: "Warzywa", data: iVEG },
  { label: "Owoce", data: iFRT },
  { label: "Sosy", data: iSAU },
  { label: "Przetwory", data: iJAR },
  { label: "Przekąski", data: iSNK },
  { label: "Zioła", data: iHRB },
  { label: "Przyprawy", data: iSPC },
  { label: "Pozostałe", data: iOTH },
];
const groupedTypes = allGroups.flatMap((group) =>
  Object.values(group.data).map((item) => item.type),
);
const initialOpenTypes = Object.fromEntries(
  groupedTypes.map((type) => [type, true]),
);

const ingredientLookup: Record<string, IngredientItem> = {};
ingredientCollections.forEach((collection) => {
  Object.values(collection).forEach((ing) => {
    ingredientLookup[ing.name] = ing;
  });
});
const allIngredients = Object.values(ingredientLookup);

function Ingredients({}: IngredientsProps) {
  const getColumnCount = () => {
    const width = window.innerWidth;

    if (width <= 520) return 1;
    if (width <= 720) return 2;
    if (width <= 960) return 3;
    if (width <= 1200) return 4;
    return 5;
  };

  const ingredientUsage = useMemo(() => countIngredientUsage(recipes), []);

  const [openTypes, setOpenTypes] =
    useState<Record<string, boolean>>(initialOpenTypes);
  const [columns, setColumns] = useState(getColumnCount());

  useEffect(() => {
    const handleResize = () => setColumns(getColumnCount());

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleType = (type: string) => {
    setOpenTypes((prev) => ({
      ...prev,
      [type]: !prev[type],
    }));
  };

  const groupByType = (data: Record<string, IngredientItem>) => {
    return Object.entries(data).reduce(
      (acc, [id, item]) => {
        if (!acc[item.type]) {
          acc[item.type] = [];
        }
        acc[item.type].push([id, item]);
        return acc;
      },
      {} as Record<string, [string, IngredientItem][]>,
    );
  };

  const ingredientStats = useMemo(() => {
    const all = allIngredients.length;

    const used = allIngredients.filter(
      (ing) => (ingredientUsage[ing.name] ?? 0) > 0,
    ).length;

    const mult = allIngredients.filter(
      (ing) => (ingredientUsage[ing.name] ?? 0) > 3,
    ).length;

    const verified = allIngredients.filter((ing) => ing.verified).length;

    const priced = allIngredients.filter(
      (ing) => ing.price !== undefined,
    ).length;

    return { all, used, mult, verified, priced };
  }, [ingredientUsage]);

  return (
    <div className="all-ingredients">
      <h1>
        <svg fill="#eee" viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
          <path d="M29 0C27.894531 0 27 0.898438 27 2L27 4C27 5.101563 27.894531 6 29 6L39 6C40.105469 6 41 5.101563 41 4L41 2C41 0.898438 40.105469 0 39 0 Z M 28.09375 7.875C27.164063 9.613281 26.363281 11.855469 25.78125 13.65625L40.53125 22L44 22L44 21.8125C44 19.492188 42.09375 12.074219 39.84375 7.90625C39.574219 7.964844 39.285156 8 39 8L29 8C28.6875 8 28.382813 7.941406 28.09375 7.875 Z M 14.625 13.78125C9.632813 13.78125 5.6875 17.167969 4.65625 22L12.25 22L19.59375 15.0625C18.089844 14.222656 16.398438 13.78125 14.625 13.78125 Z M 23.1875 14.6875C22.980469 14.710938 22.785156 14.816406 22.625 14.96875L15.15625 22L36.46875 22L23.8125 14.8125C23.621094 14.703125 23.394531 14.664063 23.1875 14.6875 Z M 2.84375 24C1.273438 24 0 25.273438 0 26.84375L0 30.15625C0 31.726563 1.273438 33 2.84375 33L47.15625 33C48.726563 33 50 31.726563 50 30.15625L50 26.84375C50 25.273438 48.726563 24 47.15625 24 Z M 3 35L3 36C3 36.195313 3.007813 36.304688 6.4375 47.4375C6.457031 47.503906 6.527344 47.65625 6.5625 47.71875C7.160156 48.789063 7.816406 50 9.21875 50L40.78125 50C42.519531 50 43.117188 48.507813 43.5625 47.4375C46.988281 36.304688 47 36.195313 47 36L47 35L37 35L37 45L34 45L34 35L30 35L30 45L27 45L27 35L23 35L23 45L20 45L20 35L16 35L16 45L13 45L13 35Z" />
        </svg>
        <span>Wszystkie składniki</span>
      </h1>

      <div className="ingredient-stats">
        <div className="ingredient-stat">
          <span className="stat-value">{ingredientStats.all}</span>
          <span className="stat-label">Wszystkich</span>
        </div>

        <div className="ingredient-stat">
          <span className="stat-value">{ingredientStats.used}</span>
          <span className="stat-label">Wykorzystanych</span>
        </div>

        <div className="ingredient-stat">
          <span className="stat-value">{ingredientStats.mult}</span>
          <span className="stat-label">Wielokrotnie</span>
        </div>

        <div className="ingredient-stat">
          <span className="stat-value">{ingredientStats.verified}</span>
          <span className="stat-label">Zweryfikowanych</span>
        </div>

        <div className="ingredient-stat">
          <span className="stat-value">{ingredientStats.priced}</span>
          <span className="stat-label">Z ceną</span>
        </div>
      </div>

      {allGroups.map((group) => {
        const grouped = groupByType(group.data);

        return (
          <section key={group.label} className="ing-group">
            {Object.entries(grouped).map(([type, items]) => {
              const sortedItems = items;
              const rows = Math.ceil(sortedItems.length / columns);

              return (
                <div key={type} className="ingredient-subgroup">
                  <h2
                    className={`ing-group-title ${openTypes[type] ? "open" : ""}`}
                    onClick={() => toggleType(type)}
                  >
                    <UtilsIcon name={"arrow"} color={"#fff"} />
                    {group.label} ({" "}
                    {
                      items.filter(
                        ([_, item]) =>
                          displayUnused || ingredientUsage[item.name],
                      ).length
                    }{" "}
                    )
                  </h2>

                  <ul
                    className={`ingredient-list`}
                    style={{
                      maxHeight: openTypes[type] ? `${rows * 250}px` : "0px",
                    }}
                  >
                    {sortedItems.map(([id, item]) => {
                      if (!ingredientUsage[item.name] && !displayUnused) return;

                      return (
                        <li key={id} className="ingredient-card">
                          <div className="ing-card-header">
                            <span className="ingredient-name">{item.name}</span>
                            {item.verified && (
                              <UtilsIcon name="check" color="#fff" />
                            )}
                          </div>

                          <div className="ingredient-card-content">
                            <div className="ingredient-meta">
                              <IngredientIcon
                                ingType={item.type}
                                subType={item.subType}
                                color={item.color}
                              />
                              <span className="type">
                                {IngredientTypeData[item.type].label}
                              </span>
                            </div>

                            <div className="kcal">
                              <strong>{item.kcalPer100g} kcal / 100 g</strong>
                            </div>

                            {item.nutrientsPer100g && (
                              <div className="macros">
                                <span>
                                  T:{" "}
                                  <strong>{item.nutrientsPer100g[0]} g</strong>
                                </span>
                                <span>
                                  W:{" "}
                                  <strong>{item.nutrientsPer100g[1]} g</strong>
                                </span>
                                <span>
                                  B:{" "}
                                  <strong>{item.nutrientsPer100g[2]} g</strong>
                                </span>
                              </div>
                            )}

                            {item.price && (
                              <div className="ing-price">
                                <strong>{item.price.toFixed(2)}</strong> zł/kg
                              </div>
                            )}

                            <div className="ingredient-usage">
                              Użyto w przepisach:{" "}
                              <strong
                                className={
                                  !ingredientUsage[item.name]
                                    ? "none"
                                    : ingredientUsage[item.name] > 3
                                      ? "many"
                                      : "def"
                                }
                              >
                                {ingredientUsage[item.name] ?? 0}
                              </strong>
                            </div>
                          </div>

                          <span className="ingredient-id">{id}</span>

                          <div className="nutrient-indicator">
                            <div
                              className="nutrient-fat"
                              style={{
                                height: `${item.nutrientsPer100g[0]}%`,
                              }}
                            ></div>
                            <div
                              className="nutrient-carb"
                              style={{
                                height: `${item.nutrientsPer100g[1]}%`,
                              }}
                            ></div>
                            <div
                              className="nutrient-prot"
                              style={{
                                height: `${item.nutrientsPer100g[2]}%`,
                              }}
                            ></div>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              );
            })}
          </section>
        );
      })}
    </div>
  );
}

export default Ingredients;
