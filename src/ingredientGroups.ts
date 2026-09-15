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
          { ing: iDIR.hard_cheese, amount: amount },
          { ing: iDIR.parmesan, amount: amount },
          { ing: iDIR.parmigiano_reggiano, amount: amount },
        ],
        selected: 0,
      };
    case "yellow_cheese":
      return {
        type: "choice",
        options: [
          { ing: iDIR.yellow_cheese, amount: amount },
          { ing: iDIR.gouda_cheese, amount: amount },
          { ing: iDIR.edam_cheese, amount: amount },
          { ing: iDIR.tylzycki_cheese, amount: amount },
        ],
        selected: 0,
      };
    case "oil":
      return {
        type: "choice",
        options: [
          { ing: iFAT.oil, amount: amount },
          { ing: iFAT.rapeseed_oil, amount: amount },
          { ing: iFAT.sunflower_oil, amount: amount },
        ],
        selected: 0,
      };
    case "broccoli":
      return {
        type: "choice",
        options: [
          { ing: iVEG.broccoli, amount: amount },
          { ing: iJAR.frozen_broccoli, amount: amount },
        ],
        selected: 0,
      };
    case "pineapple":
      return {
        type: "choice",
        options: [
          { ing: iJAR.canned_pineapple, amount: amount },
          { ing: iFRT.pineapple, amount: amount },
        ],
        selected: 0,
      };
    case "roll":
      return {
        type: "choice",
        options: [
          { ing: iBAK.kaiser_roll, amount: amount },
          { ing: iBAK.multigrain_kaiser_roll, amount: amount },
          { ing: iBAK.morning_roll, amount: amount },
          { ing: iBAK.graham_roll, amount: amount },
        ],
        selected: 0,
      };
    case "meat_spread":
      return {
        type: "choice",
        options: [
          { ing: iMET.meat_spread, amount: amount },
          { ing: iMET.liver_sausage, amount: amount },
        ],
        selected: 0,
      };
    case "steak":
      return {
        type: "choice",
        options: [
          { ing: iMET.beef_steak, amount: amount },
          { ing: iMET.sirloin_steak, amount: amount },
        ],
        selected: 0,
      };
    case "onion":
      return {
        type: "choice",
        options: [
          { ing: iVEG.onion, amount: amount },
          { ing: iVEG.red_onion, amount: amount },
          { ing: iVEG.shallot, amount: amount },
        ],
        selected: 0,
      };
    case "tomato":
      return {
        type: "choice",
        options: [
          { ing: iVEG.tomato, amount: amount },
          { ing: iVEG.tomato_raspberry, amount: amount },
          { ing: iVEG.tomato_roma, amount: amount },
        ],
        selected: 0,
      };
    case "lettuce":
      return {
        type: "choice",
        options: [
          { ing: iVEG.lettuce, amount: amount },
          { ing: iVEG.lettuce_butter, amount: amount },
          { ing: iVEG.lettuce_iceberg, amount: amount },
          { ing: iVEG.lettuce_romaine, amount: amount },
          { ing: iVEG.arugula, amount: amount },
        ],
        selected: 0,
      };
  }
};
