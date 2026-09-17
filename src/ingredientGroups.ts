import { iBAK } from "./ingredients/ingBakery";
import { iDIR } from "./ingredients/ingDairy";
import { iFAT } from "./ingredients/ingFat";
import { iFRT } from "./ingredients/ingFruit";
import { iJAR } from "./ingredients/ingJar";
import { iMET } from "./ingredients/ingMeat";
import { iVEG } from "./ingredients/ingVegetable";
import type { IngredientChoice } from "./types";

export type IngGroups =
  | "oil"
  | "yellow_cheese"
  | "hard_cheese"
  | "broccoli"
  | "pineapple"
  | "roll"
  | "meat_spread"
  | "steak"
  | "onion"
  | "tomato"
  | "lettuce";

export const getIngredientGroup = (
  groupName: IngGroups,
  amount: number,
): IngredientChoice => {
  switch (groupName) {
    case "hard_cheese":
      return {
        type: "choice",
        options: [
          { ing: iDIR.hard_cheese, amount: amount, replaceable: true },
          { ing: iDIR.parmesan, amount: amount, replaceable: true },
          { ing: iDIR.parmigiano_reggiano, amount: amount, replaceable: true },
        ],
        selected: 0,
      };
    case "yellow_cheese":
      return {
        type: "choice",
        options: [
          { ing: iDIR.yellow_cheese, amount: amount, replaceable: true },
          { ing: iDIR.gouda_cheese, amount: amount, replaceable: true },
          { ing: iDIR.edam_cheese, amount: amount, replaceable: true },
          { ing: iDIR.tylzycki_cheese, amount: amount, replaceable: true },
        ],
        selected: 0,
      };
    case "oil":
      return {
        type: "choice",
        options: [
          { ing: iFAT.oil, amount: amount, replaceable: true },
          { ing: iFAT.rapeseed_oil, amount: amount, replaceable: true },
          { ing: iFAT.sunflower_oil, amount: amount, replaceable: true },
        ],
        selected: 0,
      };
    case "broccoli":
      return {
        type: "choice",
        options: [
          { ing: iVEG.broccoli, amount: amount, replaceable: true },
          { ing: iJAR.frozen_broccoli, amount: amount, replaceable: true },
        ],
        selected: 0,
      };
    case "pineapple":
      return {
        type: "choice",
        options: [
          { ing: iJAR.canned_pineapple, amount: amount, replaceable: true },
          { ing: iFRT.pineapple, amount: amount, replaceable: true },
        ],
        selected: 0,
      };
    case "roll":
      return {
        type: "choice",
        options: [
          { ing: iBAK.kaiser_roll, amount: amount, replaceable: true },
          {
            ing: iBAK.multigrain_kaiser_roll,
            amount: amount,
            replaceable: true,
          },
          { ing: iBAK.morning_roll, amount: amount, replaceable: true },
          { ing: iBAK.graham_roll, amount: amount, replaceable: true },
        ],
        selected: 0,
      };
    case "meat_spread":
      return {
        type: "choice",
        options: [
          { ing: iMET.meat_spread, amount: amount, replaceable: true },
          { ing: iMET.liver_sausage, amount: amount, replaceable: true },
        ],
        selected: 0,
      };
    case "steak":
      return {
        type: "choice",
        options: [
          { ing: iMET.beef_steak, amount: amount, replaceable: true },
          { ing: iMET.sirloin_steak, amount: amount, replaceable: true },
        ],
        selected: 0,
      };
    case "onion":
      return {
        type: "choice",
        options: [
          { ing: iVEG.onion, amount: amount, replaceable: true },
          { ing: iVEG.red_onion, amount: amount, replaceable: true },
          { ing: iVEG.shallot, amount: amount, replaceable: true },
        ],
        selected: 0,
      };
    case "tomato":
      return {
        type: "choice",
        options: [
          { ing: iVEG.tomato, amount: amount, replaceable: true },
          { ing: iVEG.tomato_raspberry, amount: amount, replaceable: true },
          { ing: iVEG.tomato_roma, amount: amount, replaceable: true },
        ],
        selected: 0,
      };
    case "lettuce":
      return {
        type: "choice",
        options: [
          { ing: iVEG.lettuce, amount: amount, replaceable: true },
          { ing: iVEG.lettuce_butter, amount: amount, replaceable: true },
          { ing: iVEG.lettuce_iceberg, amount: amount, replaceable: true },
          { ing: iVEG.lettuce_romaine, amount: amount, replaceable: true },
          { ing: iVEG.arugula, amount: amount, replaceable: true },
        ],
        selected: 0,
      };
  }
};
