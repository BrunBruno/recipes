import { iVEG } from "../../ingredients/ingVegetable";
import { iSPC } from "../../ingredients/ingSpice";
import type { Recipe } from "../../types";
import { iFAT } from "../../ingredients/ingFat";
import { iHRB } from "../../ingredients/ingHerb";

const marchewkaZTymiankiem: Recipe = {
  name: "Marchewka z Tymiankiem",
  type: "salad",
  cookingMethods: ["roasted"],
  images: [""],
  time: 40,
  portions: 4,
  taste: null,
  difficulty: null,
  ingredients: [
    {
      title: "",
      items: [
        { ing: iVEG.carrot, amount: 4, unit: "szt" },
        { ing: iFAT.olive, amount: 1, unit: "lz" },
        { ing: iHRB.thyme, amount: 0.5, unit: "lzi" },
        { ing: iHRB.herbes_de_provence, amount: 1, unit: "lzi" },
        { ing: iSPC.curry, amount: 0.5, unit: "lzi" },
        { ing: iSPC.black_pepper },
        { ing: iSPC.salt },
      ],
    },
  ],
  steps: [
    {
      title: "",
      steps: [
        "Obierz marchewki i pokrój ukośnie na grube plastry.",
        "Przełóż marchewki do naczynia żaroodpornego.",
        "Dodaj sól, pieprz, curry, zioła prowansalskie oraz drobno posiekany świeży tymianek.",
        "Wlej oliwę z oliwek i dokładnie wymieszaj, aby marchewki równomiernie pokryły się przyprawami.",
        "Piecz w piekarniku z termoobiegiem w 200°C przez około 30 minut, aż marchewki będą miękkie.",
        "W trakcie pieczenia raz przemieszaj marchewki, aby równomiernie się upiekły.",
      ],
    },
  ],
};

export default marchewkaZTymiankiem;
