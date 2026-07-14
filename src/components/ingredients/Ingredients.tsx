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
  allIngredients,
  countIngredientUsage,
  IngredientTypeData,
} from "../../utils";
import type { IngredientItem } from "../../types";
import { useEffect, useMemo, useState } from "react";
import { iJAR } from "../../ingredients/ingJar";
import { iSNK } from "../../ingredients/ingSnack";
import { iFSH } from "../../ingredients/ingFish";
import { iHRB } from "../../ingredients/ingHerb";
import { iSAU } from "../../ingredients/ingSauce";
import { iLIQ } from "../../ingredients/ingLiquid";
import { iNUT } from "../../ingredients/ingNut";
import IngredientCard from "../ingredeint-card/IngredientCard";
import UnitIcon from "../../assets/unitIcon";

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
  { label: "Orzechy", data: iNUT },
  { label: "Sosy", data: iSAU },
  { label: "Przetwory", data: iJAR },
  { label: "Ciecze", data: iLIQ },
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
  const [search, setSearch] = useState("");
  const [selectedIngredient, setSelectedIngredient] =
    useState<IngredientItem | null>(null);

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
      <div className="page-title">
        <div className="page-title-background"></div>

        <h1 className="page-title-h1">
          <span className="h1-text">Wszystkie Składniki</span>
        </h1>

        <div className={`ingredient-search`}>
          <label className="ingredient-search-label">
            <UtilsIcon name="search" color="#999999" />
            <input
              type="text"
              placeholder="Szukaj składnika..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="ingredient-search-input"
            />
          </label>
        </div>
      </div>

      <div className="ingredient-stats">
        <div className="ingredient-stat">
          <span className="stat-value">
            <strong>{ingredientStats.all}</strong>
          </span>
          <span className="stat-label">Wszystkich</span>
        </div>

        <div className="ingredient-stat">
          <span className="stat-value">
            <strong>{ingredientStats.used}</strong>
            <span>
              {" "}
              ({((100 * ingredientStats.used) / ingredientStats.all).toFixed(1)}
              %)
            </span>
          </span>
          <span className="stat-label">Wykorzystanych</span>
        </div>

        <div className="ingredient-stat">
          <span className="stat-value">
            <strong>{ingredientStats.mult}</strong>
            <span>
              {" "}
              ({((100 * ingredientStats.mult) / ingredientStats.all).toFixed(1)}
              %)
            </span>
          </span>
          <span className="stat-label">Wielokrotnie</span>
        </div>

        <div className="ingredient-stat">
          <span className="stat-value">
            <strong>{ingredientStats.verified}</strong>
            <span>
              {" "}
              (
              {((100 * ingredientStats.verified) / ingredientStats.all).toFixed(
                1,
              )}
              %)
            </span>
          </span>
          <span className="stat-label">Zweryfikowanych</span>
        </div>

        <div className="ingredient-stat">
          <span className="stat-value">
            <strong>{ingredientStats.priced}</strong>
            <span>
              {" "}
              (
              {((100 * ingredientStats.priced) / ingredientStats.all).toFixed(
                1,
              )}
              %)
            </span>
          </span>
          <span className="stat-label">Z ceną</span>
        </div>
      </div>

      {allGroups.map((group) => {
        const grouped = groupByType(group.data);

        return (
          <section key={group.label} className="ing-group">
            {Object.entries(grouped).map(([type, items]) => {
              const filteredItems = items.filter(([_, item]) => {
                if (!displayUnused && !ingredientUsage[item.name]) return false;
                if (!search) return true;

                return item.name.toLowerCase().includes(search.toLowerCase());
              });

              const rows = Math.ceil(filteredItems.length / columns);

              if (filteredItems.length === 0) return null;

              return (
                <div key={type} className="ingredient-subgroup">
                  <h2
                    className={`ing-group-title ${openTypes[type] ? "open" : ""} `}
                    onClick={() => {
                      toggleType(type);
                    }}
                  >
                    <UtilsIcon name={"arrow"} color={"#fff"} />
                    {group.label} ({filteredItems.length})
                  </h2>

                  <ul
                    className={`ingredient-list`}
                    style={{
                      maxHeight: openTypes[type] ? `${rows * 250}px` : "0px",
                    }}
                  >
                    {filteredItems.map(([id, item]) => {
                      if (!ingredientUsage[item.name] && !displayUnused) return;

                      return (
                        <li
                          key={id}
                          className="ingredient-card"
                          onClick={() => setSelectedIngredient(item)}
                        >
                          <div className="ing-card-header">
                            <span className="ingredient-name">{item.name}</span>
                            <div className="header-icons">
                              {item.isVeg && (
                                <UnitIcon type="lst" color="#fff" />
                              )}
                              {item.verified && (
                                <UtilsIcon name="check" color="#fff" />
                              )}
                            </div>
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

                            {item.price ? (
                              <div className="ing-price">
                                <strong>{item.price.toFixed(2)}</strong> zł/kg
                              </div>
                            ) : (
                              ""
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

      {selectedIngredient && (
        <div className="ing-card-backdrop">
          <IngredientCard
            ingredient={selectedIngredient}
            onClose={() => setSelectedIngredient(null)}
          />
        </div>
      )}
    </div>
  );
}

export default Ingredients;
