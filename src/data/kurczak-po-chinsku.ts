import { iFAT } from "../ingredients/ingFat";
import { iGRN } from "../ingredients/ingGrain";
import { iMET } from "../ingredients/ingMeat";
import { iOTH } from "../ingredients/ingOther";
import { iSPC } from "../ingredients/ingSpice";
import { iVEG } from "../ingredients/ingVegetable";
import type { Recipe } from "../types";

const kurczakPoChinsku: Recipe = {
  name: "Kurczak po Chińsku",
  type: "dinner",
  images: ["./kurczak-po-chinsku.jpg"],
  time: 30,
  portions: 3,
  ingredients: [
    {
      title: "",
      items: [
        { ingredient: iMET.chicken_breast, amount: 400 },
        { ingredient: iVEG.carrot, amount: 120,  },
        { ingredient: iVEG.bell_pepper, amount: 100,  },
        { ingredient: iVEG.leek, amount: 120,  },
        { ingredient: iGRN.rice, amount: "3 × 100" },
        { ingredient: iFAT.oil },
        { ingredient: iSPC.knorr_chinese_fix },
        { ingredient: iOTH.water, amount: 250, unit: "ml" },
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
  keyWords: ["mięso", "kurczak", "ryż", "azjatyckie", "sos", "xxx"],
};

export default kurczakPoChinsku;
