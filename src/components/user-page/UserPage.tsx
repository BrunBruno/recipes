import { useEffect, useState } from "react";
import type { Ingredient, IngredientType, Recipe } from "../../types";
import type { MealEntry } from "./user-page-data";
import "./user-page.css";
import { recipes } from "../../recipes";
import MealPanelIcon from "../../assets/mealPanelIcon";
import UtilsIcon from "../../assets/utilsIcon";
import {
  calculateRecipeKcal,
  calculateRecipeNutrients,
  DAILY_NUTRIENTS,
  getActiveIngredient,
} from "../../utils";
import IngredientIcon from "../../assets/ingredientsIcon";

type Macros = {
  kcal: number;
  protein: number;
  carbs: number;
  fat: number;
};

export default function UserPage() {
  const [breakfast, setBreakfast] = useState<MealEntry[]>([]);
  const [lunch, setLunch] = useState<MealEntry[]>([]);
  const [dinner, setDinner] = useState<MealEntry[]>([]);
  const [macros, setMacros] = useState<Macros | null>(null);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [selectedMealType, setSelectedMealType] = useState<
    "breakfast" | "lunch" | "dinner"
  >();

  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);

  const [portions, setPortions] = useState(1);

  function handleAddMeal() {
    if (!selectedRecipe) return;

    const meal: MealEntry = {
      recipe: selectedRecipe,
      portions,
    };

    switch (selectedMealType) {
      case "breakfast":
        setBreakfast((prev) => [...prev, meal]);
        break;

      case "lunch":
        setLunch((prev) => [...prev, meal]);
        break;

      case "dinner":
        setDinner((prev) => [...prev, meal]);
        break;
    }

    setIsModalOpen(false);
    setPortions(1);
    setSelectedRecipe(null);
  }

  function toGrams(
    item: MealEntry["recipe"]["ingredients"][number]["items"][number],
  ) {
    item = item as Ingredient;
    const raw = item.amount;

    if (raw === undefined || raw === null) return 0;

    const amount = typeof raw === "string" ? parseFloat(raw) : raw;

    if (!amount || Number.isNaN(amount)) return 0;

    const unit = item.unit ?? "g";

    const weight = item.ing.unitWeights?.[unit];

    return weight ? amount * weight : amount;
  }

  function calculateIngredients(meals: MealEntry[]) {
    const result = new Map<string, number>();

    meals.forEach((meal) => {
      const ratio = meal.portions / meal.recipe.portions;

      meal.recipe.ingredients.forEach((group) => {
        group.items.forEach((item) => {
          const ingredient = getActiveIngredient(item);
          const grams = toGrams(ingredient) * ratio;

          const key = `${ingredient.ing.name}__${ingredient.ing.color}__${ingredient.ing.type}__${ingredient.ing.subType}`;

          result.set(key, (result.get(key) ?? 0) + grams);
        });
      });
    });

    return Array.from(result.entries())
      .map(([key, grams]) => {
        const [name, color, type, subType] = key.split("__");
        return { name, color, type, subType, grams };
      })
      .filter((item) => item.grams > 0);
  }

  function calculateDayMacros(meals: MealEntry[]): Macros {
    let kcal = 0;
    let protein = 0;
    let carbs = 0;
    let fat = 0;

    meals.forEach((meal) => {
      // const ratio = meal.portions / meal.recipe.portions;
      // const weightFactor = ratio * 1;

      const nutrients = calculateRecipeNutrients(meal.recipe);
      const kcalPerMeal = calculateRecipeKcal(meal.recipe);

      if (!nutrients || !kcalPerMeal) return;

      const [f, c, p] = nutrients;

      kcal += kcalPerMeal * meal.portions;
      protein += parseFloat(p) * meal.portions;
      carbs += parseFloat(c) * meal.portions;
      fat += parseFloat(f) * meal.portions;
    });

    return { kcal, protein, carbs, fat };
  }

  const mapIngredients = (meal: MealEntry[]) => {
    return (
      <div className="meal-list">
        {calculateIngredients(meal).map((ing, i) => (
          <div
            key={`${ing.name}${i}`}
            className="meal-ing"
            style={{
              color: ing.color,
            }}
          >
            <IngredientIcon
              ingType={ing.type as IngredientType}
              subType={ing.subType}
              color={ing.color}
            />{" "}
            {ing.name}: {ing.grams.toFixed(2)}g
          </div>
        ))}
      </div>
    );
  };

  useEffect(() => {
    const dayMeals = [...breakfast, ...lunch, ...dinner];

    setMacros(calculateDayMacros(dayMeals));
  }, [breakfast, lunch, dinner]);

  return (
    <div className="user-page">
      <h1>Moje posiłki</h1>

      <div className="meal-panel">
        <div className="meal-card">
          <h3>
            <MealPanelIcon type="breakfast" />
            <span>Śniadanie</span>
          </h3>

          {mapIngredients(breakfast)}

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

          {mapIngredients(lunch)}

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

          {mapIngredients(dinner)}

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

        <button className="save-btn">Zapisz dzień</button>
      </div>

      {isModalOpen && (
        <div className="modal-backdrop">
          <div className="modal">
            <h2>
              Dodaj posiłek do{" "}
              {selectedMealType === "breakfast"
                ? "Śniadania"
                : selectedMealType === "lunch"
                  ? "Obiadu"
                  : "Kolacji"}
            </h2>

            <label className="portions-input">
              <span>Liczba porcji:</span>
              <input
                type="number"
                min={1}
                value={portions}
                onChange={(e) => setPortions(Number(e.target.value))}
              />
            </label>

            <select
              onChange={(e) => {
                const recipe = recipes.find((r) => r.name === e.target.value);

                setSelectedRecipe(recipe ?? null);
              }}
            >
              <option>Wybierz przepis</option>

              {recipes.map((recipe) => (
                <option key={recipe.name} value={recipe.name}>
                  {recipe.name}
                </option>
              ))}
            </select>

            <button onClick={handleAddMeal}>Dodaj</button>
          </div>
        </div>
      )}
    </div>
  );
}
