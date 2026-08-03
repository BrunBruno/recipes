import { iDIR } from "../../ingredients/ingDairy";
import { iFAT } from "../../ingredients/ingFat";
import { iHRB } from "../../ingredients/ingHerb";
import { iMET } from "../../ingredients/ingMeat";
import { iSPC } from "../../ingredients/ingSpice";
import { iVEG } from "../../ingredients/ingVegetable";
import type { Recipe } from "../../types";

const szaszlyki: Recipe = {
  name: "Szaszłyki",
  type: "snack",
  cookingMethods: [["grilled", 30]],
  images: ["szaszlyki.jpg"],
  time: 30,
  portions: 4,
  taste: null,
  difficulty: null,
  ingredients: [
    {
      title: "Szaszłyki",
      items: [
        { ing: iMET.chicken_breast, amount: 200, unit: "g" },
        { ing: iMET.pork_neck, amount: 200, unit: "g" },
        { ing: iDIR.halloumi, amount: 100, unit: "g" },
        { ing: iVEG.mushrooms, amount: 100, unit: "g" },
        { ing: iVEG.zucchini, amount: 1, unit: "szt" },
        { ing: iVEG.onion, amount: 1, unit: "szt" },
        { ing: iVEG.red_bell_pepper, amount: 1, unit: "szt" },
      ],
    },
    {
      title: "Marynata",
      items: [
        { ing: iFAT.olive, amount: 4, unit: "lz" },
        { ing: iDIR.yogurt_natural, amount: 2, unit: "lz" },
        { ing: iVEG.garlic, amount: 2, unit: "zbk" },
        { ing: iHRB.oregano, amount: 0.5, unit: "lzi" },
        { ing: iSPC.marinade_prymat, amount: 2, unit: "lzi" },
        { ing: iSPC.sweet_paprika, amount: 1, unit: "lzi" },
        { ing: iSPC.black_pepper },
        { ing: iSPC.salt },
      ],
    },
  ],
  steps: [
    {
      title: "",
      steps: [
        "Pokrój mięso, ser oraz warzywa na kawałki podobnej wielkości.",
        "Wymieszaj kurczaka z liwią, jogurtem i przyprawami, a następnie odstaw na kilka minut.",
        "Karkówkę obtocz w klasycznej marynacie Prymat.",
        "Nabijaj składniki naprzemiennie na patyczki do szaszłyków.",
        "Grilluj szaszłyki, obracając je co kilka minut, aż mięso będzie gotowe, a warzywa lekko przypieczone.",
        "Podawaj od razu po przygotowaniu.",
      ],
    },
  ],
  keyWords: ["wieprzowina", "kurczak", "warzywa"],
};

export default szaszlyki;
