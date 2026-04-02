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
import { countIngredientUsage, IngredientTypeData } from "../../utils";
import type { IngredientItem, IngredientType } from "../../types";
import { useEffect, useMemo, useState } from "react";

type IngredientsProps = {
  setShowAllIngredients: React.Dispatch<React.SetStateAction<boolean>>;
};

const allGroups = [
  { label: "Mięso", data: iMET },
  { label: "Zboża", data: iGRN },
  { label: "Nabiał", data: iDIR },
  { label: "Tłuszcze", data: iFAT },
  { label: "Warzywa", data: iVEG },
  { label: "Owoce", data: iFRT },
  { label: "Inne", data: iOTH },
  { label: "Przyprawy", data: iSPC },
];
const groupedTypes = allGroups.flatMap((group) =>
  Object.values(group.data).map((item) => item.type),
);
const initialOpenTypes = Object.fromEntries(
  groupedTypes.map((type) => [type, true]),
);

function Ingredients({ setShowAllIngredients }: IngredientsProps) {
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

  return (
    <div className="all-ingredients">
      <div
        className="close-ingredients"
        onClick={() => {
          setShowAllIngredients(false);
        }}
      >
        <UtilsIcon name="close" color="#fff" />
      </div>
      {allGroups.map((group) => {
        const grouped = groupByType(group.data);

        return (
          <section key={group.label} className="ing-group">
            {Object.entries(grouped).map(([type, items]) => {
              const sortedItems = items.sort(([_, itemA], [__, itemB]) => {
                const usageA = ingredientUsage[itemA.name] ?? 0;
                const usageB = ingredientUsage[itemB.name] ?? 0;

                if (usageB !== usageA) return usageB - usageA;
                return itemA.name.localeCompare(itemB.name);
              });

              const rows = Math.ceil(sortedItems.length / columns);

              return (
                <div key={type} className="ingredient-subgroup">
                  <h2
                    className={`ing-group-title ${openTypes[type] ? "open" : ""}`}
                    onClick={() => toggleType(type)}
                  >
                    <UtilsIcon name={"arrow"} color={"#fff"} />
                    {IngredientTypeData[type as IngredientType].label}
                  </h2>

                  <ul
                    className={`ingredient-list`}
                    style={{
                      maxHeight: openTypes[type] ? `${rows * 210}px` : "0px",
                    }}
                  >
                    {sortedItems.map(([id, item]) => (
                      <li key={id} className="ingredient-card">
                        <div className="ing-card-header">
                          <span className="ingredient-name">{item.name}</span>
                          {item.verified && (
                            <UtilsIcon name="check" color="#fff" />
                          )}
                        </div>

                        <div className="ingredient-card-content">
                          <div className="ingredient-meta">
                            <IngredientIcon ingType={item.type} />
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

                          <div className="ingredient-usage">
                            Użyto w przepisach:{" "}
                            <strong>{ingredientUsage[item.name] ?? 0}</strong>
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
                    ))}
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
