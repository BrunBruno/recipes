import { iDIR } from "../../ingredients/ingDairy";
import { iFAT } from "../../ingredients/ingFat";
import { iGRN } from "../../ingredients/ingGrain";
import { iMET } from "../../ingredients/ingMeat";
import { iSPC } from "../../ingredients/ingSpice";
import type { Recipe } from "../../types";

const portions = 2;
const macAndCheeseFix: Recipe = {
  name: "Mac'n Cheese FIX",
  description:
    "Kremowy mac'n cheese na bazie Fix Knorr z dodatkiem ciągnącego się sera cheddar - szybki i sycący obiad dla miłośników serowych smaków.",
  type: "dinner",
  images: ["macncheese.jpg"],
  time: 25,
  portions: portions,
  executionDifficulty: 1,
  ingredients: [
    {
      title: "",
      items: [
        { ing: iGRN.macaroni_pasta, amount: portions * 100 },
        {
          type: "choice",
          options: [
            { ing: iDIR.yellow_cheese, amount: portions * 50 },
            { ing: iDIR.cheddar_cheese, amount: portions * 50 },
          ],
          selected: 0,
        },
        { ing: iMET.ham_canned, amount: portions * 50 },
        { ing: iDIR.milk, amount: 200, unit: "ml" },
        {
          type: "choice",
          options: [
            { ing: iFAT.butter, amount: 50 },
            { ing: iFAT.margarine, amount: 50 },
          ],
          selected: 0,
        },
        { ing: iFAT.butter, amount: 50 * 0.5, invisible: true },
        { ing: iSPC.knorr_mac_and_cheese_fix, amount: 1, unit: "opak" },
      ],
    },
  ],
  steps: [
    {
      title: "",
      steps: [
        "Ugotuj makaron na sposób al dente według instrukcji na opakowaniu.",
        "W rondlu rozpuść masło i wlej mleko.",
        "Dodaj Fix Knorr Mac'n Cheese i dokładnie wymieszaj.",
        "Gotuj sos przez kilka minut na małym ogniu, cały czas mieszając.",
        "Dodaj starty cheddar oraz pokrojoną w małą kostkę szynkę i mieszaj aż ser się rozpuści.",
        "Dodaj ugotowany makaron do sosu i dokładnie wymieszaj.",
        "Podawaj od razu po przygotowaniu lub gotowe danie przełóż do naczynia żaroodpornego i zapiecz w piekarniku przez 15 min.",
      ],
    },
  ],
  keyWords: ["makaron", "ser"],
};

export default macAndCheeseFix;
