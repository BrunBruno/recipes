import { iDIR } from "./ingredients/ingDairy";
import { iFAT } from "./ingredients/ingFat";
import { iFRT } from "./ingredients/ingFruit";
import { iGRN } from "./ingredients/ingGrain";
import { iMET } from "./ingredients/ingMeat";
import { iOTH } from "./ingredients/ingOther";
import { iSAU } from "./ingredients/ingSauce";
import { iSPC } from "./ingredients/ingSpice";
import { iVEG } from "./ingredients/ingVegetable";
import type { IngredientType, KeyWord, MealType, Recipe } from "./types";

export const MealTypesData: Record<MealType, { label: string; color: string }> =
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

export const ingredientTypeColor: Record<IngredientType, string> = {
  met: "#f03e3e",
  fsh: "#1c7ed6",
  dir: "#ffffff",
  fat: "#fcc419",
  veg: "#40c057",
  frt: "#40c057",
  grn: "#fcc419",
  spc: "#adb5bd",
  sau: "#f03e3e",
  egg: "#ffec99",
  che: "#fcc419",
  wat: "#1c7ed6",
  msh: "#ced4da",
  pot: "#B79268",
  nut: "#B79268",
  hrb: "#40c057",
  jar: "#40c057",
  oth: "#ced4da",
};

export const kcalTopColors = [
  "#c92a2a",
  "#e03131",
  "#f03e3e",
  "#fa5252",
  "#ff6b6b",
  "#ff8787",
  "#ffa8a8",
  "#ffc9c9",
  "#ffe3e3",
  "#fff5f5",
];

export const kcalLowColors = [
  "#087f5b",
  "#099268",
  "#0ca678",
  "#12b886",
  "#20c997",
  "#38d9a9",
  "#63e6be",
  "#96f2d7",
  "#c3fae8",
  "#e6fcf5",
];

export const calculateRecipeKcal = (recipe: Recipe): number => {
  const DEFAULT_FAT_GRAMS = 12;

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
  wołowina: ["wołowina", "wołowe", "wołowiny"],
  wieprzowina: ["wieprzowina", "wieprzowe", "wieprzowa"],
  kurczak: ["kurczak", "kurczaka", "kurczaki", "kurczaczek", "drób"],
  indyk: ["indyk", "indyka", "indycze"],
  makaron: ["makaron", "makarony", "pasta", "spaghetti"],
  ryż: ["ryż", "ryżu", "ryżowy", "ryżowa"],
  ziemniak: ["ziemniak", "ziemniaki", "ziemniacz"],
  jajko: ["jajko", "jajka", "jaja", "jajeczne"],
  naleśnik: ["naleśnik", "nalesnik", "naleśniki", "nalesniki"],
  owoce: ["owoce", "owoc", "owoco"],
  warzywa: ["warzywa", "warzywo", "warzywny", "warzywna"],
  sos: ["sos", "sosy", "sosik", "polewa", "dressing"],
  krem: ["krem", "kremowy", "kremowa", "masa"],
  ser: ["ser", "sery", "serowy", "serowa", "sernik", "twaróg"],
  sałatka: ["sałatka", "sałatki", "salatka", "salatki"],
  pieczywo: ["pieczywo", "pieczywa", "chleb", "chleby", "bułka", "bułki"],
  ryba: ["ryba", "ryby", "owoce morza"],
  zupa: ["zupa", "zupy", "zupka", "zupki", "krem"],
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

export const countRecipesTypes = (recipes: Recipe[]) => {
  const usage: Record<MealType, number> = {
    dinner: 0,
    snack: 0,
    soup: 0,
    dessert: 0,
    salad: 0,
    other: 0,
  };

  recipes.forEach((recipe) => {
    usage[recipe.type]++;
  });

  return usage;
};

export const countIngredientTypes = () => {
  const usage: Record<IngredientType, number> = {
    met: 0,
    fsh: 0,
    dir: 0,
    fat: 0,
    veg: 0,
    frt: 0,
    grn: 0,
    spc: 0,
    sau: 0,
    egg: 0,
    che: 0,
    wat: 0,
    msh: 0,
    pot: 0,
    nut: 0,
    hrb: 0,
    jar: 0,
    oth: 0,
  };

  const ingredientCollections = [
    iDIR,
    iFAT,
    iFRT,
    iGRN,
    iMET,
    iOTH,
    iSAU,
    iSPC,
    iVEG,
  ];

  for (const collection of ingredientCollections) {
    for (const ingredient of Object.values(collection)) {
      usage[ingredient.type]++;
    }
  }

  return usage;
};

export const countRecipeCalories = (recipes: Recipe[]) => {
  const usage: Record<string, number> = {};

  recipes.forEach((recipe) => {
    if (recipe.type !== "other")
      usage[recipe.name] = calculateRecipeKcal(recipe);
  });

  return usage;
};

export const countDoneRecipes = (recipes: Recipe[]) => {
  const usage: Record<string, number> = {
    yes: 0,
    no: 0,
  };

  recipes.forEach((recipe) => {
    if (recipe.keyWords) {
      usage[recipe.keyWords.includes("xxx") ? "yes" : "no"]++;
    }
  });

  return usage;
};
