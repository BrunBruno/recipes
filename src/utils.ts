import { iDIR } from "./ingredients/ingDairy";
import { iFAT } from "./ingredients/ingFat";
import { iFSH } from "./ingredients/ingFish";
import { iFRT } from "./ingredients/ingFruit";
import { iGRN } from "./ingredients/ingGrain";
import { iHRB } from "./ingredients/ingHerb";
import { iJAR } from "./ingredients/ingJar";
import { iLIQ } from "./ingredients/ingLiquid";
import { iMET } from "./ingredients/ingMeat";
import { iNUT } from "./ingredients/ingNut";
import { iOTH } from "./ingredients/ingOther";
import { iSAU } from "./ingredients/ingSauce";
import { iSNK } from "./ingredients/ingSnack";
import { iSPC } from "./ingredients/ingSpice";
import { iVEG } from "./ingredients/ingVegetable";
import type {
  Ingredient,
  IngredientChoice,
  IngredientItem,
  IngredientType,
  KeyWord,
  MealType,
  Recipe,
  UnitType,
} from "./types";

export const DAILY_NUTRIENTS = [3213, 98, 441, 140, 500]; // [kcal, fat, carbs, protein, veg-mass]

export const ingredientCollections = [
  iDIR,
  iFAT,
  iFRT,
  iNUT,
  iGRN,
  iMET,
  iFSH,
  iHRB,
  iSPC,
  iVEG,
  iSAU,
  iJAR,
  iLIQ,
  iSNK,
  iOTH,
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
  breakfast: { label: "Śniadanie", color: "#22b8cf" },
  other: { label: "Inne", color: "#f76707" },
};
export const IngredientTypeData: Record<IngredientType, DictRecord> = {
  met: { label: "Mięso", color: "#C92A2A" },
  fsh: { label: "Ryby", color: "#1971C2" },
  dir: { label: "Nabiał", color: "#F8F9FA" },
  fat: { label: "Tłuszcze", color: "#F59F00" },
  veg: { label: "Warzywa", color: "#2F9E44" },
  frt: { label: "Owoce", color: "#6F42C1" },
  nut: { label: "Owoce", color: "#8D6E63" },
  grn: { label: "Zboża", color: "#C77D1A" },
  hrb: { label: "Zioła", color: "#0CA678" },
  spc: { label: "Przyprawy", color: "#E8590C" },
  sau: { label: "Sosy", color: "#D9480F" },
  jar: { label: "Przetwory", color: "#A61E4D" },
  liq: { label: "Ciecze", color: "#1098AD" },
  snk: { label: "Przekąski", color: "#FAB005" },
  oth: { label: "Inne", color: "#868E96" },
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

export const hexToRgb = (hex: string) => {
  const m = hex.match(/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i);
  if (!m) throw new Error("Invalid hex");
  return [parseInt(m[1], 16), parseInt(m[2], 16), parseInt(m[3], 16)];
};

export const rgbToHex = ([r, g, b]: number[]) => {
  return "#" + [r, g, b].map((x) => x.toString(16).padStart(2, "0")).join("");
};

export const interpolateKcalColor = (
  kcal: number,
  min: number,
  max: number,
  startColor?: string,
  endColor?: string,
) => {
  const mid = (min + max) / 2;

  const green = hexToRgb(startColor ? startColor : "#087f5b");
  const white = hexToRgb("#FFFFFF");
  const red = hexToRgb(endColor ? endColor : "#c92a2a");

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

export const interpolateColor = (
  value: number,
  max: number,
  startColor: string,
  endColor: string,
) => {
  const t = Math.max(0, Math.min(1, value / max));

  const start = hexToRgb(startColor);
  const end = hexToRgb(endColor);

  const rgb = start.map((s, i) => Math.round(s + t * (end[i] - s)));

  return rgbToHex(rgb);
};

export const getActiveIngredient = (
  item: Ingredient | IngredientChoice,
): Ingredient => {
  if ("type" in item && item.type === "choice") {
    return item.options[item.selected];
  }

  return item as Ingredient;
};

const getAllIngredientItems = (recipe: Recipe) => {
  const items: Ingredient[] = [];

  for (const group of recipe.ingredients) {
    for (const item of group.items) {
      const active = getActiveIngredient(item);

      if (!active || active.exclude) continue;

      items.push(active);
    }
  }

  if (recipe.extrasMain) {
    const extra = recipe.extrasMain.options[recipe.extrasMain.selected];

    for (const item of extra.items) {
      if (!item.exclude) {
        items.push(item);
      }
    }
  }

  if (recipe.extrasVeg) {
    const extra = recipe.extrasVeg.options[recipe.extrasVeg.selected];

    for (const item of extra.items) {
      if (!item.exclude) {
        items.push(item);
      }
    }
  }

  return items;
};

export const calculateRecipeKcal = (
  recipe: Recipe,
  portions?: number,
): number => {
  const DEFAULT_FAT_GRAMS = 12;

  let totalKcal = 0;

  for (const ingredientItem of getAllIngredientItems(recipe)) {
    if (!ingredientItem) continue;

    if (ingredientItem.exclude) continue;

    const { ing, amount, unit } = ingredientItem;

    let grams = 0;
    let value = amount;

    if (!value || typeof value === "string") {
      if (ing.type === "fat") grams = DEFAULT_FAT_GRAMS * recipe.portions;
      else continue;
    } else {
      if (!unit) {
        grams = value;
      } else if (ing.unitWeights?.[unit]) {
        grams = value * ing.unitWeights[unit];
      } else {
        if (unit !== "g") {
          console.warn(`No unit ${unit} for ${ing.name}`);
        }
        grams = value;
      }
    }

    totalKcal += (grams / 100) * ing.kcalPer100g;
  }

  const portMul = portions ? portions : 1;
  return Math.round(
    recipe.portions
      ? (portMul * totalKcal) / recipe.portions
      : portMul * totalKcal,
  );
};

export const calculateRecipeKcalPer100g = (recipe: Recipe): number => {
  const DEFAULT_FAT_GRAMS = 12;

  let totalKcal = 0;
  let totalGrams = 0;

  for (const ingredientItem of getAllIngredientItems(recipe)) {
    if (!ingredientItem) continue;

    if (ingredientItem.exclude) continue;

    const { ing, amount, unit } = ingredientItem;

    let grams = 0;
    let value = amount;

    if (!value || typeof value === "string") {
      if (ing.type === "fat") grams = DEFAULT_FAT_GRAMS * recipe.portions;
      else continue;
    } else {
      if (!unit) {
        grams = value;
      } else if (ing.unitWeights?.[unit]) {
        grams = value * ing.unitWeights[unit];
      } else {
        if (unit !== "g") console.warn(`No unit ${unit} for ${ing.name}`);
        grams = value;
      }
    }

    totalGrams += grams;
    totalKcal += (grams / 100) * ing.kcalPer100g;
  }

  if (totalGrams === 0) return 0;

  return Math.round((totalKcal / totalGrams) * 100);
};

export const calculateRecipeNutrients = (
  recipe: Recipe,
  portions?: number,
): [string, string, string] => {
  const DEFAULT_FAT_GRAMS = 15;

  let totalFat = 0;
  let totalCarb = 0;
  let totalProt = 0;

  for (const ingredientItem of getAllIngredientItems(recipe)) {
    if (!ingredientItem) continue;

    if (ingredientItem.exclude) continue;

    const { ing, amount, unit } = ingredientItem;

    if (!ing.nutrientsPer100g) continue;

    let grams = 0;
    let value = amount;

    if (!value || typeof value === "string") {
      if (ing.type === "fat") {
        grams = DEFAULT_FAT_GRAMS * recipe.portions;
      } else {
        continue;
      }
    } else {
      if (!unit) {
        grams = value;
      } else if (ing.unitWeights?.[unit]) {
        grams = value * ing.unitWeights[unit];
      } else {
        if (unit !== "g") {
          console.warn(`No unit ${unit} for ${ing.name}`);
        }
        grams = value;
      }
    }

    const [fat, carb, prot] = ing.nutrientsPer100g;

    totalFat += (grams / 100) * fat;
    totalCarb += (grams / 100) * carb;
    totalProt += (grams / 100) * prot;
  }

  const portMul = portions ? portions : 1;
  if (recipe.portions) {
    return [
      ((portMul * Math.round((10 * totalFat) / recipe.portions)) / 10).toFixed(
        1,
      ),
      ((portMul * Math.round((10 * totalCarb) / recipe.portions)) / 10).toFixed(
        1,
      ),
      ((portMul * Math.round((10 * totalProt) / recipe.portions)) / 10).toFixed(
        1,
      ),
    ];
  }

  return [
    Math.round(portMul * totalFat).toFixed(1),
    Math.round(portMul * totalCarb).toFixed(1),
    Math.round(portMul * totalProt).toFixed(1),
  ];
};

export const calculateRecipeVegMass = (
  recipe: Recipe,
  portions?: number,
): number => {
  let totalMass = 0;

  for (const ingredientItem of getAllIngredientItems(recipe)) {
    if (!ingredientItem) continue;

    if (ingredientItem.exclude) continue;

    const { ing, amount, unit } = ingredientItem;

    if (!ing.nutrientsPer100g) continue;

    let grams = 0;
    let value = amount;
    if (!value) continue;

    if (!unit) {
      grams = value;
    } else if (ing.unitWeights?.[unit]) {
      grams = value * ing.unitWeights[unit];
    } else {
      if (unit !== "g") {
        console.warn(`No unit ${unit} for ${ing.name}`);
      }
      grams = value;
    }

    totalMass += ing.isVeg ? grams : 0;
  }

  const portMul = portions ? portions : 1;
  return Math.round(
    recipe.portions
      ? (portMul * totalMass) / recipe.portions
      : portMul * totalMass,
  );
};

export const calculateRecipeWeight = (recipe: Recipe) => {
  let totalGrams = 0;

  for (const ingredientItem of getAllIngredientItems(recipe)) {
    if (!ingredientItem) continue;

    if (ingredientItem.exclude) continue;

    const { ing, amount, unit } = ingredientItem;

    let grams = 0;
    let value = amount;

    if (!value || typeof value === "string") {
      continue;
    } else {
      if (!unit) {
        grams = value;
      } else if (ing.unitWeights?.[unit]) {
        grams = value * ing.unitWeights[unit];
      } else {
        if (unit !== "g") console.warn(`No unit ${unit} for ${ing.name}`);
        grams = value;
      }
    }

    totalGrams += grams;
  }

  if (totalGrams === 0) return 0;

  return Math.round(totalGrams);
};

export const keywordAliases: Record<KeyWord, string[]> = {
  ciasto: ["ciasto", "ciasta", "wypiek", "wypieki", "placek", "placki"],
  deser: ["deser", "desery", "słodkie", "słodko"],
  biszkopt: ["biszkopt", "biszkopty", "biszkoptowy", "biszkoptowa"],
  wołowina: ["wołowina", "wolowina", "wołowe", "wolowe", "wołowiny"],
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

  const addItems = (items: (Ingredient | IngredientChoice)[]) => {
    items.forEach((item) => {
      if ((item as IngredientChoice).type === "choice") {
        (item as IngredientChoice).options.forEach((opt) => {
          usage[opt.ing.name] = (usage[opt.ing.name] ?? 0) + 1;
        });
        return;
      }

      const active = getActiveIngredient(item);

      if (active.exclude) return;

      usage[active.ing.name] = (usage[active.ing.name] ?? 0) + 1;
    });
  };

  recipes.forEach((recipe) => {
    recipe.ingredients.forEach((group) => addItems(group.items));
    recipe.extrasMain?.options[0] &&
      addItems(recipe.extrasMain.options[0].items);
    recipe.extrasVeg?.options[0] && addItems(recipe.extrasVeg.options[0].items);
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
    breakfast: 0,
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
    grn: 0,
    veg: 0,
    frt: 0,
    nut: 0,
    sau: 0,
    jar: 0,
    liq: 0,
    hrb: 0,
    spc: 0,
    snk: 0,
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

export const countUsedIngredients = (usages: Record<string, number>) => {
  const usage = { yes: 0, no: 0 };

  for (const collection of ingredientCollections) {
    for (const ingredient of Object.values(collection)) {
      usages[ingredient.name] > 0 ? usage.yes++ : usage.no++;
    }
  }

  return usage;
};

export const countRecipeKcalPer100g = (recipes: Recipe[]) => {
  const usage: Record<string, number> = {};

  recipes.forEach((recipe) => {
    usage[recipe.name] = calculateRecipeKcalPer100g(recipe);
  });

  return usage;
};

export const countRecipeWeight = (recipes: Recipe[]) => {
  const usage: Record<string, number> = {};

  recipes.forEach((recipe) => {
    usage[recipe.name] = calculateRecipeWeight(recipe);
  });

  return usage;
};

export const countRecipeWeightPerPortion = (recipes: Recipe[]) => {
  const usage: Record<string, number> = {};

  recipes.forEach((recipe) => {
    usage[recipe.name] = Math.round(
      calculateRecipeWeight(recipe) / recipe.portions,
    );
  });

  return usage;
};

export const countRecipePreparationTime = (recipes: Recipe[]) => {
  const usage: Record<string, number> = {};

  recipes.forEach((recipe) => {
    usage[recipe.name] = recipe.time;
  });

  return usage;
};

export const formatUnit = (ingredient: Ingredient): string => {
  if (!ingredient.amount || !ingredient.unit) return " g";

  const count = ingredient.amount;
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

export const fryingFat = (
  ing: IngredientItem,
  amount: number,
  unit: UnitType,
  coef = 0.3,
): Ingredient[] => [
  {
    ing,
    amount,
    unit,
    exclude: true,
  },
  {
    ing,
    amount: amount * coef,
    unit,
    invisible: true,
  },
];

export const calculateRecipePrice = (recipe: Recipe): number => {
  const DEFAULT_FAT_GRAMS = 12;

  let totalPrice = 0;

  for (const ingredientItem of getAllIngredientItems(recipe)) {
    if (!ingredientItem) continue;

    if (ingredientItem.exclude) continue;

    const { ing, amount, unit } = ingredientItem;
    if (!ing.price) continue;

    let grams = 0;
    let value = amount;

    if (!value || typeof value === "string") {
      if (ing.type === "fat") grams = DEFAULT_FAT_GRAMS * recipe.portions;
      else continue;
    } else {
      if (!unit) {
        grams = value;
      } else if (ing.unitWeights?.[unit]) {
        grams = value * ing.unitWeights[unit];
      } else {
        if (unit !== "g") {
          console.warn(`No unit ${unit} for ${ing.name}`);
        }
        grams = value;
      }
    }

    totalPrice += (grams * ing.price) / 1000;
  }

  return totalPrice / recipe.portions;
  // return Math.round() / 100;
};

export const ingredientLookup: Record<string, IngredientItem> = {};
ingredientCollections.forEach((collection) => {
  Object.values(collection).forEach((ing) => {
    ingredientLookup[ing.name] = ing;
  });
});
export const allIngredients = Object.values(ingredientLookup);
