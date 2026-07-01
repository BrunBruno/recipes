import { useMemo, useState } from "react";
import type { DayIngredients, DayMealType, IngredientItem } from "../../types";
import "./user-page.css";
import MealPanelIcon from "../../assets/mealPanelIcon";
import UtilsIcon from "../../assets/utilsIcon";
import { DAILY_NUTRIENTS, ingredientCollections } from "../../utils";
import IngredientIcon from "../../assets/ingredientsIcon";
import { STORAGE_KEY, type DayRecord } from "./user-page-data";

const ingredientLookup: Record<string, IngredientItem> = {};
ingredientCollections.forEach((collection) => {
  Object.values(collection).forEach((ing) => {
    ingredientLookup[ing.name] = ing;
  });
});
const allIngredients = Object.values(ingredientLookup);

type Macros = {
  kcal: number;
  protein: number;
  carbs: number;
  fat: number;
};

type UserPageProps = {
  dayIngredients: DayIngredients;
  setDayIngredients: React.Dispatch<React.SetStateAction<DayIngredients>>;
  loadDayRecords(): DayRecord[];
  setHistory: React.Dispatch<React.SetStateAction<DayRecord[]>>;
};

export default function UserPage({
  dayIngredients,
  setDayIngredients,
  loadDayRecords,
  setHistory,
}: UserPageProps) {
  const [gramsInput, setGramsInput] = useState(100);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedMealType, setSelectedMealType] = useState<DayMealType>();

  function calculateMacros(day: DayIngredients): Macros {
    let kcal = 0;
    let protein = 0;
    let carbs = 0;
    let fat = 0;

    const allIngredients = [...day.breakfast, ...day.lunch, ...day.dinner];

    allIngredients.forEach(([name, grams]) => {
      const ing = ingredientLookup[name];

      if (!ing) return;

      const factor = grams / 100;

      kcal += ing.kcalPer100g * factor;
      fat += ing.nutrientsPer100g[0] * factor;
      carbs += ing.nutrientsPer100g[1] * factor;
      protein += ing.nutrientsPer100g[2] * factor;
    });

    return {
      kcal,
      protein,
      carbs,
      fat,
    };
  }

  function mapIngredients(ingredients: [string, number][]) {
    return ingredients
      .map(([name, grams]) => {
        const ing = ingredientLookup[name];

        return {
          name,
          grams,
          ingredient: ing,
        };
      })
      .filter((i) => i.ingredient);
  }

  const macros = useMemo(
    () => calculateMacros(dayIngredients),
    [dayIngredients],
  );

  function addIngredientToDay(ing: IngredientItem) {
    if (!selectedMealType) return;

    setDayIngredients((prev) => ({
      ...prev,
      [selectedMealType]: [...prev[selectedMealType], [ing.name, gramsInput]],
    }));
  }

  function saveDayRecords(records: DayRecord[]) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(records));
  }

  function handleSaveDay() {
    if (!macros) return;

    const today = new Date().toISOString().split("T")[0];

    const newRecord: DayRecord = {
      date: today,
      kcal: Math.round(macros.kcal),
      protein: Math.round(macros.protein),
      fat: Math.round(macros.fat),
      carbs: Math.round(macros.carbs),
    };

    const existing = loadDayRecords();

    const updated = [...existing.filter((d) => d.date !== today), newRecord];

    saveDayRecords(updated);

    setHistory(updated);
  }

  return (
    <div className="user-page">
      <h1>Moje posiłki</h1>

      <div className="meal-panel">
        <div className="meal-card">
          <h3>
            <MealPanelIcon type="breakfast" />
            <span>Śniadanie</span>
          </h3>

          <div className="meal-list">
            {mapIngredients(dayIngredients.breakfast).map(
              ({ ingredient, grams }) => (
                <div
                  key={ingredient!.name}
                  className="meal-ing"
                  style={{ color: ingredient!.color }}
                >
                  <IngredientIcon
                    ingType={ingredient!.type}
                    subType={ingredient!.subType}
                    color={ingredient!.color}
                  />
                  {ingredient!.name}: {grams.toFixed(1)} g
                  {/* {grams.toFixed(1)} g */}
                </div>
              ),
            )}
          </div>

          <button
            onClick={() => {
              setSelectedMealType("breakfast");
              setIsModalOpen(true);
            }}
          >
            <UtilsIcon name="plus" color="#ffffff" />
          </button>
        </div>

        <div className="meal-card">
          <h3>
            <MealPanelIcon type="lunch" />
            <span>Obiad</span>
          </h3>

          <div className="meal-list">
            {mapIngredients(dayIngredients.lunch).map(
              ({ ingredient, grams }) => (
                <div
                  key={ingredient!.name}
                  className="meal-ing"
                  style={{ color: ingredient!.color }}
                >
                  <IngredientIcon
                    ingType={ingredient!.type}
                    subType={ingredient!.subType}
                    color={ingredient!.color}
                  />
                  {ingredient!.name}: {grams.toFixed(1)} g
                  {/* {grams.toFixed(1)} g */}
                </div>
              ),
            )}
          </div>

          <button
            onClick={() => {
              setSelectedMealType("lunch");
              setIsModalOpen(true);
            }}
          >
            <UtilsIcon name="plus" color="#ffffff" />
          </button>
        </div>

        <div className="meal-card">
          <h3>
            <MealPanelIcon type="dinner" />
            <span>Kolacja</span>
          </h3>

          <div className="meal-list">
            {mapIngredients(dayIngredients.dinner).map(
              ({ ingredient, grams }) => (
                <div
                  key={ingredient!.name}
                  className="meal-ing"
                  style={{ color: ingredient!.color }}
                >
                  <IngredientIcon
                    ingType={ingredient!.type}
                    subType={ingredient!.subType}
                    color={ingredient!.color}
                  />
                  {ingredient!.name}: {grams.toFixed(1)} g
                  {/* {grams.toFixed(1)} g */}
                </div>
              ),
            )}
          </div>

          <button
            onClick={() => {
              setSelectedMealType("dinner");
              setIsModalOpen(true);
            }}
          >
            <UtilsIcon name="plus" color="#ffffff" />
          </button>
        </div>
      </div>

      <div className="summary-card">
        <h2>Podsumowanie dnia</h2>

        <div className="macro-row">
          <span>Kalorie</span>
          <strong>
            {macros ? Math.round(macros.kcal) : 0} / {DAILY_NUTRIENTS[0]} kcal
          </strong>
        </div>
        <div className="macro-row">
          <div className="macro-indicator">
            <p
              style={{
                width: `${(100 * (macros ? macros.kcal : 0)) / DAILY_NUTRIENTS[0]}%`,
                backgroundColor: "#099268",
              }}
            />
          </div>
        </div>

        <div className="macro-row">
          <span>Tłuszcze</span>
          <strong>
            {macros ? Math.round(macros.fat) : 0} / {DAILY_NUTRIENTS[1]} g
          </strong>
        </div>
        <div className="macro-row">
          <div className="macro-indicator">
            <p
              style={{
                width: `${(100 * (macros ? macros.fat : 0)) / DAILY_NUTRIENTS[1]}%`,
                backgroundColor: "#f59f00",
              }}
            />
          </div>
        </div>

        <div className="macro-row">
          <span>Węglowodany</span>
          <strong>
            {macros ? Math.round(macros.carbs) : 0} / {DAILY_NUTRIENTS[2]} g
          </strong>
        </div>
        <div className="macro-row">
          <div className="macro-indicator">
            <p
              style={{
                width: `${(100 * (macros ? macros.carbs : 0)) / DAILY_NUTRIENTS[2]}%`,
                backgroundColor: "#1098ad",
              }}
            />
          </div>
        </div>

        <div className="macro-row">
          <span>Białko</span>
          <strong>
            {macros ? Math.round(macros.protein) : 0} / {DAILY_NUTRIENTS[3]} g
          </strong>
        </div>
        <div className="macro-row">
          <div className="macro-indicator">
            <p
              style={{
                width: `${(100 * (macros ? macros.protein : 0)) / DAILY_NUTRIENTS[3]}%`,
                backgroundColor: "#f03e3e",
              }}
            />
          </div>
        </div>

        <button className="save-btn" onClick={handleSaveDay}>
          Zapisz dzień
        </button>
      </div>

      {isModalOpen && (
        <div className="modal-backdrop">
          <div className="modal">
            <h2>Dodaj składnik</h2>

            <label>
              Gramatura:
              <input
                type="number"
                min={1}
                value={gramsInput}
                onChange={(e) => setGramsInput(Number(e.target.value))}
              />
            </label>

            <div className="modal-ingredient-list">
              {allIngredients.map((ing) => (
                <button
                  key={ing.name}
                  className="ingredient-item"
                  onClick={() => addIngredientToDay(ing)}
                >
                  {ing.name}
                </button>
              ))}
            </div>

            <button onClick={() => setIsModalOpen(false)}>Zamknij</button>
          </div>
        </div>
      )}
    </div>
  );
}
