import { iDIR } from "./ingredients/ingDairy";
import { iFAT } from "./ingredients/ingFat";
import { iFRT } from "./ingredients/ingFruit";
import { iGRN } from "./ingredients/ingGrain";
import { iJAR } from "./ingredients/ingJAR";
import { iMET } from "./ingredients/ingMeat";
import { iOTH } from "./ingredients/ingOther";
import { iSPC } from "./ingredients/ingSpice";
import { iVEG } from "./ingredients/ingVegetable";
import type {
  Ingredient,
  IngredientType,
  KeyWord,
  MealType,
  Recipe,
} from "./types";

export const DAILY_NUTRIENTS = [3213, 98, 441, 64]; // [kcal, fat, carbs, protein]

export const ingredientCollections = [
  iDIR,
  iFAT,
  iFRT,
  iGRN,
  iMET,
  iOTH,
  iSPC,
  iVEG,
  iJAR,
];

type DictRecord = {
  label: string;
  color: string;
};

export const MealTypesData: Record<MealType, DictRecord> = {
  dinner: { label: "Obiad", color: "#f59f00" },
  snack: { label: "Przekąska", color: "#f03e3e" },
  soup: { label: "Zupa", color: "#37b24d" },
  dessert: { label: "Deser", color: "#1c7ed6" },
  salad: { label: "Sałatka", color: "#ae3ec9" },
  other: { label: "Inne", color: "#f76707" },
};
export const IngredientTypeData: Record<IngredientType, DictRecord> = {
  met: { label: "Mięso", color: "#f03e3e" },
  dir: { label: "Nabiał", color: "#ffffff" },
  fat: { label: "Tłuszcze", color: "#fcc419" },
  veg: { label: "Warzywa", color: "#40c057" },
  frt: { label: "Owoce", color: "#40c057" },
  grn: { label: "Zboża", color: "#fcc419" },
  spc: { label: "Przyprawy", color: "#868e96" },
  jar: { label: "Przetwory", color: "#40c057" },
  oth: { label: "Inne", color: "#ced4da" },
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

const hexToRgb = (hex: string) => {
  const m = hex.match(/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i);
  if (!m) throw new Error("Invalid hex");
  return [parseInt(m[1], 16), parseInt(m[2], 16), parseInt(m[3], 16)];
};

const rgbToHex = ([r, g, b]: number[]) => {
  return "#" + [r, g, b].map((x) => x.toString(16).padStart(2, "0")).join("");
};

export const interpolateColor = (kcal: number, min: number, max: number) => {
  const mid = (min + max) / 2;

  const green = hexToRgb("#087f5b");
  const white = hexToRgb("#FFFFFF");
  const red = hexToRgb("#c92a2a");

  let t: number;
  let start: number[];
  let end: number[];

  if (kcal <= mid) {
    t = (kcal - min) / (mid - min);
    start = green;
    end = white;
  } else {
    t = (kcal - mid) / (max - mid);
    start = white;
    end = red;
  }

  const rgb = start.map((s, i) => Math.round(s + t * (end[i] - s)));
  return rgbToHex(rgb);
};

export const calculateRecipeKcal = (recipe: Recipe): number => {
  const DEFAULT_FAT_GRAMS = 12;

  let totalKcal = 0;

  for (const group of recipe.ingredients) {
    for (const item of group.items) {
      if (item.excludeFromCalc || item.alt) continue;

      const { ingredient, amount, unit } = item;

      let grams = 0;
      let value = amount;

      if (typeof amount === "string") {
        if (amount.includes("-")) {
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

export const calculateRecipeKcalPer100g = (recipe: Recipe): number => {
  const DEFAULT_FAT_GRAMS = 12;

  let totalKcal = 0;
  let totalGrams = 0;

  for (const group of recipe.ingredients) {
    for (const item of group.items) {
      if (item.excludeFromCalc || item.alt) continue;

      const { ingredient, amount, unit } = item;

      let grams = 0;
      let value = amount;

      if (typeof amount === "string") {
        if (amount.includes("-")) {
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

      totalGrams += grams;
      totalKcal += (grams / 100) * ingredient.kcalPer100g;
    }
  }

  if (totalGrams === 0) return 0;

  return Math.round((totalKcal / totalGrams) * 100);
};

export const calculateRecipeNutrients = (
  recipe: Recipe,
): [string, string, string] => {
  const DEFAULT_FAT_GRAMS = 15;

  let totalFat = 0;
  let totalCarb = 0;
  let totalProt = 0;

  for (const group of recipe.ingredients) {
    for (const item of group.items) {
      if (item.excludeFromCalc || item.alt) continue;

      const { ingredient, amount, unit } = item;

      if (!ingredient.nutrientsPer100g) continue;

      let grams = 0;
      let value = amount;

      if (typeof amount === "string") {
        if (amount.includes("-")) {
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
      (Math.round((10 * totalFat) / recipe.portions) / 10).toFixed(1),
      (Math.round((10 * totalCarb) / recipe.portions) / 10).toFixed(1),
      (Math.round((10 * totalProt) / recipe.portions) / 10).toFixed(1),
    ];
  }

  return [
    Math.round(totalFat).toFixed(1),
    Math.round(totalCarb).toFixed(1),
    Math.round(totalProt).toFixed(1),
  ];
};

export const keywordAliases: Record<KeyWord, string[]> = {
  ciasto: ["ciasto", "ciasta", "wypiek", "wypieki", "placek", "placki"],
  deser: ["deser", "desery", "słodkie", "słodko"],
  biszkopt: ["biszkopt", "biszkopty", "biszkoptowy", "biszkoptowa"],
  wołowina: ["wołowina", "wołowe", "wołowiny"],
  wieprzowina: ["wieprzowina", "wieprzowe", "wieprzowa"],
  kurczak: ["kurczak", "kurczaka", "kurczaki", "kurczaczek", "drób"],
  indyk: ["indyk", "indyka", "indycze"],
  makaron: ["makaron", "makarony", "pasta"],
  ryż: ["ryż", "ryz", "ryżu", "ryżowy", "ryżowa"],
  ziemniak: ["ziemniak", "ziemniaki", "ziemniacz"],
  jajko: ["jajko", "jajka", "jaja", "jajeczne"],
  naleśnik: ["naleśnik", "nalesnik", "naleśniki", "nalesniki"],
  owoce: ["owoce", "owoc", "owocowe"],
  warzywa: ["warzywa", "warzywo", "warzywny", "warzywna"],
  sos: ["sos", "sosy", "sosik", "polewa", "dressing"],
  krem: ["krem", "kremowy", "kremowa", "masa", "mus"],
  ser: ["ser", "sery", "serowy", "serowa"],
  sałatka: ["sałatka", "sałatki", "salatka", "salatki"],
  pieczywo: ["pieczywo", "pieczywa", "chleb", "chleby", "bułka", "bułki"],
  ryba: ["ryba", "ryby"],
  zupa: ["zupa", "zupy", "zupka", "zupki"],
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
    dir: 0,
    fat: 0,
    veg: 0,
    frt: 0,
    grn: 0,
    spc: 0,
    jar: 0,
    oth: 0,
  };

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
      usage[recipe.images[0] !== "" ? "yes" : "no"]++;
    }
  });

  return usage;
};

export const countRecipeKcalPer100g = (recipes: Recipe[]) => {
  const usage: Record<string, number> = {};

  recipes.forEach((recipe) => {
    usage[recipe.name] = calculateRecipeKcalPer100g(recipe);
  });

  return usage;
};

export const formatUnit = (ingredient: Ingredient): string => {
  if (!ingredient.amount || !ingredient.unit) return " g";

  let count: number;
  if (typeof ingredient.amount === "string") {
    const match = ingredient.amount.match(/^(\d+)\s*-\s*\d+/);
    count = match ? (parseInt(match[0], 10) + parseInt(match[1], 10)) / 2 : 1;
  } else {
    count = ingredient.amount;
  }

  const unit = ingredient.unit;

  const pluralize = (
    n: number,
    singular: string,
    dual: string,
    plural: string,
    fraction: string,
  ) => {
    if (!Number.isInteger(n)) return fraction;

    const n10 = n % 10;
    const n100 = n % 100;
    if (n === 1) return singular;
    if (n10 >= 2 && n10 <= 4 && !(n100 >= 12 && n100 <= 14)) return dual;
    return plural;
  };

  switch (unit) {
    case "szt":
      return ` ${pluralize(count, "sztuka", "sztuki", "sztuk", "sztuki")}`;
    case "lz":
      return ` ${pluralize(count, "łyżka", "łyżki", "łyżek", "łyżki")}`;
    case "lzi":
      return ` ${pluralize(count, "łyżeczka", "łyżeczki", "łyżeczek", "łyżeczki")}`;
    case "szk":
      return ` ${pluralize(count, "szklanka", "szklanki", "szklanek", "szklanki")}`;
    case "opak":
      return ` ${pluralize(count, "opakowanie", "opakowania", "opakowań", "opakowania")}`;
    case "kst":
      return ` ${pluralize(count, "kostka", "kostki", "kostek", "kostki")}`;
    case "plas":
      return ` ${pluralize(count, "plaster", "plastry", "plastrów", "plastra")}`;
    case "krom":
      return ` ${pluralize(count, "kromka", "kromki", "kromek", "kromki")}`;
    case "zbk":
      return ` ${pluralize(count, "ząbek", "ząbki", "ząbków", "ząbka")}`;
    case "lst":
      return ` ${pluralize(count, "listek", "listki", "listków", "listka")}`;
    case "ziar":
      return ` ${pluralize(count, "ziarno", "ziarna", "ziaren", "ziarna")}`;
    case "peto":
      return ` ${pluralize(count, "pęto", "pęta", "pęt", "pęta")}`;
    default:
      return ` ${unit}`;
  }
};
