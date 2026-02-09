import { iDIR } from "../ingredients/ingDairy";
import { iFAT } from "../ingredients/ingFat";
import { iGRN } from "../ingredients/ingGrain";
import { iMET } from "../ingredients/ingMeat";
import { iSAU } from "../ingredients/ingSauce";
import { iSPC } from "../ingredients/ingSpice";
import { iVEG } from "../ingredients/ingVegetable";
import type { Recipe } from "../types";

const zapiekankaBolognese: Recipe = {
  name: "Zapiekanka Bolognese",
  type: "dinner",
  image: "zapiekanka-bolognese.jpg",
  kcal: 550,
  time: 50,
  portions: 4,
  ingredients: [
    { ingredient: iMET.ground_pork, amount: 400 },
    { ingredient: iGRN.fusilli_pasta, amount: 400 },
    { ingredient: iVEG.mushrooms, amount: 250 },
    { ingredient: iVEG.tomato, amount: "1-2", unit: "szt" },
    { ingredient: iVEG.onion, amount: 1, unit: "szt" },
    { ingredient: iVEG.bell_pepper, amount: 1, unit: "szt" },
    { ingredient: iDIR.yellow_cheese, amount: 200 },
    { ingredient: iSAU.tomato_paste, amount: 2, unit: "łyżeczka" },
    { ingredient: iFAT.oil },
    { ingredient: iSPC.knorr_bolognese_fix },
    { ingredient: iSPC.allspice },
    { ingredient: iSPC.bay_leaf },
  ],
  steps: [
    "Podsmaż mięso mielone na oleju.",
    "Dodaj pokrojoną cebulę i smaż razem z mięsem.",
    "Dodaj pokrojone pieczarki i smaż, aż będą miękkie.",
    "Dodaj pokrojonego pomidora i smaż kilka minut.",
    "Dodaj koncentrat pomidorowy i dokładnie wymieszaj.",
    "Rozmieszaj przyprawę bolognese z wodą i dodaj do patelni wraz z zielem angielskim i liściem laurowym.",
    "Gotuj całość przez około 15 minut.",
    "Ugotuj makaron według instrukcji na opakowaniu.",
    "Wsyp połowę ugotowanego makaronu do naczynia żaroodpornego.",
    "Wlej zawartość patelni na makaron.",
    "Dodaj pozostały makaron i posyp startym serem.",
    "Zapiekaj w piekarniku przez 15 minut.",
  ],
  keyWords: ["makaron", "mięso", "sos", "pieczone"],
};

export default zapiekankaBolognese;
