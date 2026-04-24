import { iDIR } from "../../ingredients/ingDairy";
import { iFAT } from "../../ingredients/ingFat";
import { iGRN } from "../../ingredients/ingGrain";
import { iJAR } from "../../ingredients/ingJar";
import { iMET } from "../../ingredients/ingMeat";
import { iSPC } from "../../ingredients/ingSpice";
import { iVEG } from "../../ingredients/ingVegetable";
import type { Recipe } from "../../types";

const zapiekankaBolognese: Recipe = {
  name: "Zapiekanka Bolognese",
  description:
    "Aromatyczna zapiekanka Bolognese z makaronem, mięsem mielonym, warzywami i roztopionym serem - idealny obiad dla całej rodziny.",
  type: "dinner",
  images: ["zapiekanka-bolognese.jpg", "zapiekanka-bolognese-2.jpg"],
  time: 70,
  portions: 4,
  executionDifficulty: 3,
  ingredients: [
    {
      title: "Farsz",
      items: [
        { ing: iMET.ground_pork, amount: 400 },
        { ing: iVEG.mushrooms, amount: 250 },
        { ing: iVEG.tomato, amount: "1-2", unit: "szt" },
        { ing: iVEG.onion, amount: 1, unit: "szt" },
        { ing: iVEG.bell_pepper, amount: 1, unit: "szt" },
        { ing: iJAR.tomato_paste, amount: 2, unit: "lzi" },
        { ing: iFAT.oil, amount: 3, unit: "lz" },
        { ing: iSPC.knorr_bolognese_fix, amount: 1, unit: "opak" },
        { ing: iSPC.allspice, amount: 3, unit: "ziar" },
        { ing: iSPC.bay_leaf, amount: 2, unit: "lst" },
      ],
    },
    {
      title: "Zapiekanka",
      items: [
        { ing: iGRN.fusilli_pasta, amount: 400 },
        { ing: iDIR.yellow_cheese, amount: 200 },
        { ing: iSPC.salt },
      ],
    },
  ],
  steps: [
    {
      title: "",
      steps: [
        "Ugotuj makaron według instrukcji na opakowaniu.",
        "Podsmaż mięso mielone na oleju.",
        "Dodaj pokrojoną cebulę i smaż razem z mięsem.",
        "Dodaj pokrojone pieczarki i smaż, aż będą miękkie.",
        "Dodaj pokrojonego pomidora i paprykę oraz smaż jeszcze kilka minut.",
        "Dodaj koncentrat pomidorowy i dokładnie wymieszaj.",
        "Rozmieszaj przyprawę bolognese z wodą i dodaj do patelni wraz z zielem angielskim i liściem laurowym.",
        "Gotuj całość przez około 15 minut pod przykryciem.",
        "Wsyp połowę ugotowanego makaronu do naczynia żaroodpornego.",
        "Wlej zawartość patelni na makaron.",
        "Dodaj pozostały makaron i posyp startym serem.",
        "Zapiekaj w piekarniku przez 15 minut.",
      ],
    },
  ],
  keyWords: ["makaron", "sos"],
};

export default zapiekankaBolognese;
