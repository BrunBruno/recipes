import { iFAT } from "../../ingredients/ingFat";
import { iGRN } from "../../ingredients/ingGrain";
import { iLIQ } from "../../ingredients/ingLiquid";
import { iMET } from "../../ingredients/ingMeat";
import { iSPC } from "../../ingredients/ingSpice";
import { iVEG } from "../../ingredients/ingVegetable";
import type { Recipe } from "../../types";
import { fryingFat } from "../../utils";

const portions = 3;
const kurczakPoChinsku: Recipe = {
  name: "Kurczak po Chińsku",
  type: "dinner",
  country: "CHN",
  images: [
    "kurczak-po-chinsku",
    "kurczak-po-chinsku-2",
    "kurczak-po-chinsku-3",
  ],
  time: 30,
  portions: portions,
  taste: 4,
  difficulty: 1,
  ingredients: [
    {
      title: "",
      items: [
        { ing: iMET.chicken_breast, amount: 400, kw: true },
        { ing: iGRN.rice, amount: portions * 100, kw: true },
        { ing: iVEG.carrot, amount: 120 },
        { ing: iVEG.pepper_bell, amount: 100 },
        { ing: iVEG.leek, amount: 120 },
        { ing: iLIQ.water, amount: 250, unit: "ml" },
        ...fryingFat(iFAT.oil, 2, "lz", 0.3),
        { ing: iSPC.knorr_chinese_fix, amount: 1, unit: "opak" },
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
  keyWords: ["mięso", "kurczak", "sos", "fix", "ryż"],
};

export default kurczakPoChinsku;
