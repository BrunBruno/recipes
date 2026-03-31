import { iFAT } from "../ingredients/ingFat";
import { iGRN } from "../ingredients/ingGrain";
import { iMET } from "../ingredients/ingMeat";
import { iOTH } from "../ingredients/ingOther";
import { iSPC } from "../ingredients/ingSpice";
import { iVEG } from "../ingredients/ingVegetable";
import type { Recipe } from "../types";

const portions = 3;
const kurczakPoChinsku: Recipe = {
  name: "Kurczak po Chińsku",
  description:
    "Szybki kurczak po chińsku z warzywami w aromatycznym sosie, podawany z ryżem. Idealny na lekki i kolorowy obiad.",
  type: "dinner",
  images: ["./kurczak-po-chinsku.jpg"],
  time: 30,
  portions: portions,
  ingredients: [
    {
      title: "",
      items: [
        { ingredient: iMET.chicken_breast, amount: 400 },
        { ingredient: iVEG.carrot, amount: 120 },
        { ingredient: iVEG.bell_pepper, amount: 100 },
        { ingredient: iVEG.leek, amount: 120 },
        { ingredient: iOTH.water, amount: 250, unit: "ml" },
        { ingredient: iGRN.rice, amount: portions * 100 },
        { ingredient: iFAT.oil, amount: 2, unit: "lz" },
        { ingredient: iSPC.knorr_chinese_fix, amount: 1, unit: "opak" },
      ],
    },
  ],
  steps: [
    {
      title: "",
      steps: [
        "Pokrój piersi kurczaka w kostkę.",
        "Mięso usmaż na niewielkiej ilości oleju.",
        "Pokrój warzywa w paski i dodaj do mięsa.",
        "Rozmieszaj przyprawę w 250 ml wody i wlej na patelnię.",
        "Gotuj pod przykryciem przez około 10 minut, aż warzywa będą miękkie.",
        "Podawaj z ugotowanym ryżem.",
      ],
    },
  ],
  keyWords: ["kurczak", "ryż", "xxx"],
};

export default kurczakPoChinsku;
