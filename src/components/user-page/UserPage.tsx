import { useMemo, useState } from "react";
import type {
  DayIngredientPair,
  DayIngredients,
  DayMealType,
  IngredientItem,
} from "../../types";
import "./user-page.css";
import MealPanelIcon from "../../assets/mealPanelIcon";
import UtilsIcon from "../../assets/utilsIcon";
import { allIngredients, DAILY_NUTRIENTS, ingredientLookup } from "../../utils";
import IngredientIcon from "../../assets/ingredientsIcon";
import { DUMMY_RECORDS, STORAGE_KEY, type DayRecord } from "./user-page-data";
import { AnimatePresence, motion } from "framer-motion";
import MacroIcon from "../../assets/macroIcon";

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
  const [selectedDate, setSelectedDate] = useState(
    new Date().toISOString().split("T")[0],
  );
  const [search, setSearch] = useState("");
  const [showSavedInfo, setShowSavedInfo] = useState(false);
  const [saveDialog, setSaveDialog] = useState<{
    open: boolean;
    newRecord: DayRecord | null;
  }>({
    open: false,
    newRecord: null,
  });

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

    const newRecord: DayRecord = {
      date: selectedDate,
      kcal: Math.round(macros.kcal),
      protein: Math.round(macros.protein),
      fat: Math.round(macros.fat),
      carbs: Math.round(macros.carbs),
    };

    const existing = loadDayRecords();

    const alreadyExists = existing.some((d) => d.date === selectedDate);

    if (!alreadyExists) {
      const updated = [...existing, newRecord];

      saveDayRecords(updated);
      setHistory(updated);

      clearDay();

      setShowSavedInfo(true);
      setTimeout(() => setShowSavedInfo(false), 2000);

      clearDay();
      return;
    }

    setSaveDialog({
      open: true,
      newRecord,
    });
  }

  const overwriteDay = () => {
    if (!saveDialog.newRecord) return;

    const updated = [
      ...loadDayRecords().filter((d) => d.date !== saveDialog.newRecord!.date),
      saveDialog.newRecord,
    ];

    saveDayRecords(updated);
    setHistory(updated);

    clearDay();

    setSaveDialog({
      open: false,
      newRecord: null,
    });

    setShowSavedInfo(true);
    setTimeout(() => setShowSavedInfo(false), 2000);

    clearDay();
  };

  const addToExistingDay = () => {
    if (!saveDialog.newRecord) return;

    const updated = loadDayRecords().map((d) => {
      if (d.date !== saveDialog.newRecord!.date) return d;

      return {
        ...d,
        kcal: d.kcal + saveDialog.newRecord!.kcal,
        protein: d.protein + saveDialog.newRecord!.protein,
        carbs: d.carbs + saveDialog.newRecord!.carbs,
        fat: d.fat + saveDialog.newRecord!.fat,
      };
    });

    saveDayRecords(updated);
    setHistory(updated);

    clearDay();

    setSaveDialog({
      open: false,
      newRecord: null,
    });

    setShowSavedInfo(true);
    setTimeout(() => setShowSavedInfo(false), 2000);

    clearDay();
  };

  const getKey = (meal: DayMealType, index: number) => `${meal}-${index}`;

  const sleep = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));

  const clearDay = async () => {
    const delay = 110;

    const meals: DayMealType[] = ["breakfast", "lunch", "dinner"];

    let state = structuredClone(dayIngredients);

    const maxLen = Math.max(
      state.breakfast.length,
      state.lunch.length,
      state.dinner.length,
    );

    for (let i = 0; i < maxLen; i++) {
      const removals: { meal: DayMealType }[] = [];

      for (const meal of meals) {
        if (state[meal].length > 0) {
          removals.push({ meal });
        }
      }

      if (removals.length === 0) break;

      for (const { meal } of removals) {
        state[meal].splice(0, 1);
      }

      setDayIngredients(structuredClone(state));

      await sleep(delay);
    }
  };

  const onRemoveIngredient = (type: DayMealType, index: number) => {
    let state = structuredClone(dayIngredients);

    switch (type) {
      case "breakfast":
        state.breakfast.splice(index, 1);
        break;
      case "lunch":
        state.lunch.splice(index, 1);
        break;
      case "dinner":
        state.dinner.splice(index, 1);
        break;
    }

    setDayIngredients(structuredClone(state));
  };

  const renderDummyRecords = (meal: DayMealType) => {
    return DUMMY_RECORDS[meal].map((item, index) => (
      <div key={`dummy-${index}`} className="meal-ing dummy-record">
        <div className="meal-ing-grid">
          <IngredientIcon
            ingType={ingredientLookup[item[0]].type}
            subType={ingredientLookup[item[0]].subType}
            color={ingredientLookup[item[0]].color}
          />
          <span className="dummy-grams">{item[1]}g</span>
          <span className="dummy-name">{item[0]}</span>
        </div>
      </div>
    ));
  };

  const renderIngGroup = (group: DayIngredientPair[], meal: DayMealType) => {
    return (
      <div className={`meal-list ${group.length === 0 ? "empty" : ""}`}>
        <AnimatePresence initial={false}>
          {group.length === 0
            ? renderDummyRecords(meal)
            : group.map(([name, grams], index) => {
                const ing = ingredientLookup[name];
                const key = getKey(meal, index);

                return (
                  <motion.div
                    key={key}
                    layout
                    initial={{ opacity: 1, x: 0, scale: 1 }}
                    exit={{ opacity: 0, x: -30, scale: 0.8 }}
                    transition={{
                      layout: { duration: 0.2 },
                      opacity: { duration: 0.1 },
                    }}
                    className="meal-ing"
                    style={{ color: ing?.color }}
                  >
                    <div className="meal-ing-grid">
                      <IngredientIcon
                        ingType={ing!.type}
                        subType={ing!.subType}
                        color={ing!.color}
                      />
                      <span>{grams.toFixed(1)} g</span>
                      <span>{ing!.name}</span>
                      <p onClick={() => onRemoveIngredient(meal, index)}>
                        <UtilsIcon name="close" color="#888" />
                      </p>
                    </div>
                  </motion.div>
                );
              })}
        </AnimatePresence>
      </div>
    );
  };

  const filteredIngredients = useMemo(() => {
    return allIngredients.filter((ing) =>
      ing.name.toLowerCase().includes(search.toLowerCase()),
    );
  }, [search]);

  const existingRecord = saveDialog.newRecord
    ? loadDayRecords().find((d) => d.date === saveDialog.newRecord?.date)
    : undefined;

  return (
    <div className="user-page">
      <div className="page-title">
        <div className="page-title-background"></div>

        <h1 className="page-title-h1">
          <span className="h1-text">Moje Posiłki</span>
        </h1>
      </div>

      <div className="meal-panel">
        <div className="meal-card">
          <div
            className="meal-card-header"
            onClick={() => {
              setSelectedMealType("breakfast");
              setIsModalOpen(true);
            }}
          >
            <h3>
              <MealPanelIcon type="breakfast" />
              <span className="meal-name">Śniadanie</span>
            </h3>
            <div className="add-ingredient">
              <UtilsIcon name="plus" color="#ffffff" />
              <span>Dodaj</span>
            </div>
          </div>

          {renderIngGroup(dayIngredients.breakfast, "breakfast")}
        </div>

        <div className="meal-card">
          <div className="meal-card-header">
            <h3>
              <MealPanelIcon type="lunch" />
              <span className="meal-name">Obiad</span>
            </h3>
            <button
              className="add-ingredient"
              onClick={() => {
                setSelectedMealType("lunch");
                setIsModalOpen(true);
              }}
            >
              <UtilsIcon name="plus" color="#ffffff" />
              <span>Dodaj</span>
            </button>
          </div>

          {renderIngGroup(dayIngredients.lunch, "lunch")}
        </div>

        <div className="meal-card">
          <div className="meal-card-header">
            <h3>
              <MealPanelIcon type="dinner" />
              <span className="meal-name">Kolacja</span>
            </h3>
            <button
              className="add-ingredient"
              onClick={() => {
                setSelectedMealType("dinner");
                setIsModalOpen(true);
              }}
            >
              <UtilsIcon name="plus" color="#ffffff" />
              <span>Dodaj</span>
            </button>
          </div>

          {renderIngGroup(dayIngredients.dinner, "dinner")}
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

        <div className="save-day">
          <label>
            Data:
            <input
              type="date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
            />
          </label>
        </div>

        <button
          className="save-btn"
          onClick={() => {
            handleSaveDay();
          }}
        >
          Zapisz dzień
        </button>
      </div>

      {isModalOpen && (
        <div className="modal-backdrop" onClick={() => setIsModalOpen(false)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <h2>Dodaj składnik</h2>

            <div className="modal-inputs">
              <label className="modal-input">
                Gramatura:
                <input
                  type="number"
                  min={1}
                  value={gramsInput}
                  onChange={(e) => setGramsInput(Number(e.target.value))}
                />
                {" g"}
              </label>

              <input
                className="modal-search"
                placeholder="Szukaj składnika..."
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>

            <div className="modal-ingredient-list">
              {filteredIngredients.map((ing) => (
                <button
                  key={ing.name}
                  className="ingredient-item-button"
                  onClick={() => addIngredientToDay(ing)}
                >
                  {ing.name}
                </button>
              ))}
            </div>

            <button
              className="modal-close"
              onClick={() => setIsModalOpen(false)}
            >
              Zamknij
            </button>
          </div>
        </div>
      )}

      {saveDialog.open && (
        <div className="modal-backdrop">
          <div className="save-dialog">
            <h2>Dzień już istnieje</h2>
            <p>
              Dla <strong>{selectedDate}</strong> istnieje już zapis.
            </p>

            {existingRecord && saveDialog.newRecord && (
              <div className="save-dialog-compare">
                <div className="compare-header"></div>
                <div className="compare-header"></div>
                <div className="compare-header">Zapisany</div>
                <div className="compare-header">Nowy</div>

                <MacroIcon type="kcal" />
                <span>Kalorie</span>
                <strong>{existingRecord.kcal} kcal</strong>
                <strong>{saveDialog.newRecord.kcal} kcal</strong>

                <MacroIcon type="fats" />
                <span>Tłuszcze</span>
                <strong>{existingRecord.fat} g</strong>
                <strong>{saveDialog.newRecord.fat} g</strong>

                <MacroIcon type="carb" />
                <span>Węglowodany</span>
                <strong>{existingRecord.carbs} g</strong>
                <strong>{saveDialog.newRecord.carbs} g</strong>

                <MacroIcon type="prot" />
                <span>Białko</span>
                <strong>{existingRecord.protein} g</strong>
                <strong>{saveDialog.newRecord.protein} g</strong>
              </div>
            )}

            <button onClick={overwriteDay}>Nadpisz dzień</button>
            <button onClick={addToExistingDay}>Dodaj do istniejącego</button>
            <button
              onClick={() =>
                setSaveDialog({
                  open: false,
                  newRecord: null,
                })
              }
            >
              Anuluj
            </button>
          </div>
        </div>
      )}

      {showSavedInfo && (
        <div className="saved-info">✓ Dzień został zapisany</div>
      )}
    </div>
  );
}
