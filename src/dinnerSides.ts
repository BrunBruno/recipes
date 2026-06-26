import { iDIR } from "./ingredients/ingDairy";
import { iFAT } from "./ingredients/ingFat";
import { iGRN } from "./ingredients/ingGrain";
import { iJAR } from "./ingredients/ingJar";
import { iSPC } from "./ingredients/ingSpice";
import { iVEG } from "./ingredients/ingVegetable";
import type { ExtrasIngredientGroup } from "./types";

type DinnerSidesNames =
  | "boiled-potatoes"
  | "boiled-potatoes-dry"
  | "mashed-potatoes"
  | "oven-fries"
  | "rice"
  | "buckwheat"
  | "bulgur"
  | "penne-pasta"
  | "spaghetti-pasta"
  | "kopytka-ready"
  | "silesian-dumplings-ready"
  | "steamed-vegetables"
  | "sauteed-cabbage"
  | "sauerkraut-salad"
  | "cream-cucumber-salad"
  | "beets-shredded-ready"
  | "beets-fried-ready"
  | "beets-whole-vinegar"
  | "sauerkraut"
  | "pickled-cucumber"
  | "pickled-cucumber-vinegar"
  | "canned-peas"
  | "coleslaw-ready"
  | "corn-salad-ready"
  | "cucumber-salad-ready"
  | "red-cabbage-ready";

export const dinnerSides = (
  name: DinnerSidesNames,
  portions: number,
): ExtrasIngredientGroup => {
  switch (name) {
    case "boiled-potatoes":
      return {
        title: "Ziemniaki gotowane",
        items: [
          { ing: iVEG.potato, amount: portions * 200 },
          { ing: iSPC.dill },
          { ing: iSPC.black_pepper },
          { ing: iSPC.salt },
        ],
      };
    case "boiled-potatoes-dry":
      return {
        title: "Ziemniaki gotowane",
        items: [
          { ing: iVEG.potato, amount: portions * 200 },
          { ing: iSPC.salt },
        ],
      };
    case "mashed-potatoes":
      return {
        title: "Purée ziemniaczane",
        items: [
          { ing: iVEG.potato, amount: portions * 200 },
          { ing: iFAT.butter, amount: portions, unit: "lzi" },
          { ing: iDIR.milk, amount: portions * 10, unit: "ml" },
          { ing: iSPC.black_pepper },
          { ing: iSPC.salt },
        ],
      };
    case "oven-fries":
      return {
        title: "Frytki z piekarnika",
        items: [
          { ing: iJAR.frozen_fries, amount: portions * 200 },
          { ing: iSPC.potato_seasoning },
        ],
      };
    case "rice":
      return {
        title: "Ryż gotowany",
        items: [{ ing: iGRN.rice, amount: portions * 100 }, { ing: iSPC.salt }],
      };
    case "buckwheat":
      return {
        title: "Kasza gryczana",
        items: [
          { ing: iGRN.buckwheat, amount: portions * 100 },
          { ing: iSPC.salt },
        ],
      };
    case "bulgur":
      return {
        title: "Kasza bulgur",
        items: [
          { ing: iGRN.bulgur, amount: portions * 80 },
          { ing: iSPC.salt },
        ],
      };
    case "penne-pasta":
      return {
        title: "Makaron penne",
        items: [
          { ing: iGRN.penne_pasta, amount: portions * 100 },
          { ing: iSPC.salt },
        ],
      };
    case "spaghetti-pasta":
      return {
        title: "",
        items: [
          { ing: iGRN.spaghetti_pasta, amount: portions * 100 },
          { ing: iSPC.salt },
        ],
      };
    case "kopytka-ready":
      return {
        title: "Kopytka",
        items: [
          { ing: iGRN.kopytka, amount: portions * 250 },
          { ing: iFAT.oil, amount: 1, unit: "lzi" },
          { ing: iSPC.salt },
        ],
      };
    case "silesian-dumplings-ready":
      return {
        title: "Kluski śląskie",
        items: [
          { ing: iGRN.silesian_dumplings, amount: portions * 250 },
          { ing: iFAT.oil, amount: 1, unit: "lzi" },
          { ing: iSPC.salt },
        ],
      };

    //// ////

    case "steamed-vegetables":
      return {
        title: "Warzywa na parze",
        items: [
          { ing: iJAR.frozen_vegetable_mix, amount: 150 * portions },
          { ing: iFAT.olive, amount: portions, unit: "lzi" },
          { ing: iSPC.salt },
        ],
      };
    case "sauteed-cabbage":
      return {
        title: "Kapusta zasmażana",
        items: [
          { ing: iJAR.sauerkraut, amount: portions * 120 },
          { ing: iFAT.clarified_butter, amount: 1, unit: "lzi" },
          { ing: iSPC.black_pepper },
          { ing: iSPC.salt },
        ],
      };
    case "sauerkraut-salad":
      return {
        title: "Surówka z koszonej kapusty",
        items: [
          { ing: iJAR.sauerkraut, amount: portions * 100 },
          { ing: iVEG.carrot, amount: portions * 50 },
          { ing: iFAT.oil, amount: 2, unit: "lzi" },
          { ing: iJAR.lemon_juice, amount: 1, unit: "lz" },
          { ing: iSPC.black_pepper },
          { ing: iSPC.salt },
        ],
      };
    case "cream-cucumber-salad":
      return {
        title: "Mizeria",
        items: [
          { ing: iDIR.cream_18, amount: portions * 2, unit: "lz" },
          { ing: iVEG.cucumber, amount: portions * 0.5, unit: "szt" },
          { ing: iVEG.spring_onion },
          { ing: iSPC.black_pepper },
          { ing: iSPC.salt },
        ],
      };
    case "beets-shredded-ready":
      return {
        title: "Buraczki wiórki",
        items: [
          { ing: iJAR.beets_shredded, amount: portions * 150 },
          { ing: iSPC.salt },
        ],
      };
    case "beets-fried-ready":
      return {
        title: "Buraczki zasmażane",
        items: [
          { ing: iJAR.fried_beets, amount: portions * 150 },
          { ing: iSPC.salt },
        ],
      };
    case "beets-whole-vinegar":
      return {
        title: "Buraczki z octu",
        items: [
          { ing: iJAR.beets_whole_vinegar, amount: portions * 200 },
          { ing: iSPC.salt },
        ],
      };
    case "sauerkraut":
      return {
        title: "Kapusta kiszona",
        items: [{ ing: iJAR.sauerkraut, amount: portions * 150 }],
      };
    case "pickled-cucumber":
      return {
        title: "Ogórki kiszone",
        items: [
          {
            ing: iJAR.pickled_cucumber,
            amount: portions * 2,
            unit: "szt",
          },
        ],
      };
    case "pickled-cucumber-vinegar":
      return {
        title: "Ogórki konserwowe",
        items: [
          {
            ing: iJAR.pickled_cucumber_vinegar,
            amount: portions * 2,
            unit: "szt",
          },
        ],
      };
    case "canned-peas":
      return {
        title: "Groszek",
        items: [{ ing: iJAR.canned_peas, amount: 100 * portions }],
      };

    case "coleslaw-ready":
      return {
        title: "Colesław",
        items: [{ ing: iJAR.coleslaw, amount: portions * 180 }],
      };
    case "corn-salad-ready":
      return {
        title: "Sałatka z kukurydzą",
        items: [{ ing: iJAR.corn_salad, amount: portions * 180 }],
      };
    case "cucumber-salad-ready":
      return {
        title: "Sałatka z ogórka",
        items: [{ ing: iJAR.cucumber_salad, amount: portions * 180 }],
      };
    case "red-cabbage-ready":
      return {
        title: "",
        items: [{ ing: iJAR.red_cabbage, amount: portions * 180 }],
      };
  }
};

//  case "":
//       return {
//         title: "",
//         items: [],
//       };
