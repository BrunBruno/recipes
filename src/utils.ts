import type { IngredientType, KeyWord, mealType, Recipe } from "./types";

export const mealTypesData: Record<mealType, { label: string; color: string }> =
  {
    dinner: { label: "Obiad", color: "#f59f00" },
    snack: { label: "Przekąska", color: "#f03e3e" },
    soup: { label: "Zupa", color: "#37b24d" },
    dessert: { label: "Deser", color: "#1c7ed6" },
    salad: { label: "Sałatka", color: "#ae3ec9" },
    other: { label: "Inne", color: "#f76707" },
  };

export const ingredientTypeLabels: Record<IngredientType, string> = {
  met: "Mięso",
  fsh: "Ryby",
  dir: "Nabiał",
  fat: "Tłuszcze",
  veg: "Warzywa",
  frt: "Owoce",
  grn: "Zboża",
  spc: "Przyprawy",
  sau: "Sosy",
  egg: "Jajka",
  che: "Sery",
  wat: "Woda",
  msh: "Grzyby",
  pot: "Ziemniaki",
  nut: "Orzechy",
  hrb: "Zioła",
  jar: "Przetwory",
  oth: "Inne",
};

export const calculateRecipeKcal = (recipe: Recipe): number => {
  const DEFAULT_FAT_GRAMS = 15;

  let totalKcal = 0;

  for (const group of recipe.ingredients) {
    if (group.excludeFromCalc) continue;

    for (const item of group.items) {
      const { ingredient, amount, unit } = item;

      let grams = 0;
      let value = amount;

      if (typeof amount === "string") {
        if (amount.includes("×")) {
          const parts = amount.split("×").map(Number);
          value = parts.reduce((a, b) => a * b, 1);
        } else if (amount.includes("-")) {
          const parts = amount.split("-").map(Number);
          value = parts.reduce((a, b) => a + b, 0) / parts.length;
        } else {
          console.warn(`Incorrect amount ${amount}`);
          continue;
        }
      }

      if (!value || typeof value === "string") {
        if (ingredient.type === "fat")
          grams = DEFAULT_FAT_GRAMS * recipe.portions;
        else continue;
      } else {
        if (!unit) {
          grams = value;
        } else if (ingredient.unitWeights?.[unit]) {
          grams = value * ingredient.unitWeights[unit];
        } else {
          if (unit !== "g")
            console.warn(`No unit ${unit} for ${ingredient.name}`);
          grams = value;
        }
      }

      totalKcal += (grams / 100) * ingredient.kcalPer100g;
    }
  }

  return Math.round(recipe.portions ? totalKcal / recipe.portions : totalKcal);
};

export const calculateRecipeNutrients = (
  recipe: Recipe,
): [number, number, number] => {
  const DEFAULT_FAT_GRAMS = 15;

  let totalFat = 0;
  let totalCarb = 0;
  let totalProt = 0;

  for (const group of recipe.ingredients) {
    if (group.excludeFromCalc) continue;

    for (const item of group.items) {
      const { ingredient, amount, unit } = item;

      if (!ingredient.nutrientsPer100g) continue;

      let grams = 0;
      let value = amount;

      if (typeof amount === "string") {
        if (amount.includes("×")) {
          const parts = amount.split("×").map(Number);
          value = parts.reduce((a, b) => a * b, 1);
        } else if (amount.includes("-")) {
          const parts = amount.split("-").map(Number);
          value = parts.reduce((a, b) => a + b, 0) / parts.length;
        } else {
          console.warn(`Incorrect amount ${amount}`);
          continue;
        }
      }

      if (!value || typeof value === "string") {
        if (ingredient.type === "fat") {
          grams = DEFAULT_FAT_GRAMS * recipe.portions;
        } else {
          continue;
        }
      } else {
        if (!unit) {
          grams = value;
        } else if (ingredient.unitWeights?.[unit]) {
          grams = value * ingredient.unitWeights[unit];
        } else {
          if (unit !== "g") {
            console.warn(`No unit ${unit} for ${ingredient.name}`);
          }
          grams = value;
        }
      }

      const [fat, carb, prot] = ingredient.nutrientsPer100g;

      totalFat += (grams / 100) * fat;
      totalCarb += (grams / 100) * carb;
      totalProt += (grams / 100) * prot;
    }
  }

  if (recipe.portions) {
    return [
      Math.round((10 * totalFat) / recipe.portions) / 10,
      Math.round((10 * totalCarb) / recipe.portions) / 10,
      Math.round((10 * totalProt) / recipe.portions) / 10,
    ];
  }

  return [Math.round(totalFat), Math.round(totalCarb), Math.round(totalProt)];
};

export const keywordAliases: Record<KeyWord, string[]> = {
  xxx: ["xxx"],

  ciasto: ["ciasto", "ciasta", "wypiek", "wypieki", "placek", "placki"],
  deser: ["deser", "desery", "słodkie", "na słodko"],
  biszkopt: ["biszkopt", "biszkopty", "biszkoptowy", "biszkoptowa"],
  wołowina: ["wołowina", "wołowe", "wołowiny", "befsztyk", "stek"],
  wieprzowina: [
    "wieprzowina",
    "wieprzowe",
    "wieprzowiny",
    "schab",
    "karkówka",
    "boczek",
  ],
  kurczak: ["kurczak", "kurczaka", "kurczaki", "kurczaczek", "drób"],
  indyk: ["indyk", "indyka", "indycze"],
  makaron: ["makaron", "makarony", "pasta", "spaghetti"],
  ryż: ["ryż", "ryżu", "ryżowy", "ryżowa"],
  ziemniak: [
    "ziemniak",
    "ziemniaki",
    "ziemniaczana",
    "ziemniaczany",
    "kartofel",
    "kartofle",
    "pyra",
    "pyry",
  ],
  jajko: ["jajko", "jajka", "jaja", "jajeczne"],
  naleśnik: ["naleśnik", "naleśniki", "naleśnikowy", "naleśnikowa"],
  owoce: ["owoce", "owoc", "owocowy", "owocowa"],
  warzywa: [
    "warzywa",
    "warzywo",
    "warzywny",
    "warzywna",
    "jarzyny",
    "jarzynowy",
  ],
  sos: ["sos", "sosy", "sosik", "polewa", "dressing"],
  krem: ["krem", "kremowy", "kremowa", "kremówka", "masa"],
  ser: ["ser", "sery", "serowy", "serowa", "sernik", "twaróg"],
  sałatka: ["sałatka", "sałatki", "salatka", "salatki", "mix sałat"],
  pieczywo: ["pieczywo", "pieczywa", "chleb", "chleby", "bułka", "bułki"],
  ryba: ["ryba", "ryby", "owoce morza"],
  zupa: ["zupa", "zupy", "zupka", "zupki", "krem", "zupa krem"],
};

export const countIngredientUsage = (recipes: Recipe[]) => {
  const usage: Record<string, number> = {};

  recipes.forEach((recipe) => {
    recipe.ingredients.forEach((group) => {
      group.items.forEach((item) => {
        const key = item.ingredient.name;
        usage[key] = (usage[key] ?? 0) + 1;
      });
    });
  });

  return usage;
};
