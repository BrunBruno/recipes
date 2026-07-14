import { iSPC } from "../../ingredients/ingSpice";
import { iVEG } from "../../ingredients/ingVegetable";
import { iMET } from "../../ingredients/ingMeat";
import { iGRN } from "../../ingredients/ingGrain";
import { iHRB } from "../../ingredients/ingHerb";
import { iLIQ } from "../../ingredients/ingLiquid";
import type { Recipe } from "../../types";

const rosolZMakaronem: Recipe = {
  name: "Rosół z Makaronem",
  type: "soup",
  cookingMethods: [["boiled", 25]],
  images: ["rosol-z-makaronem.jpg", "rosol-z-makaronem-2.jpg"],
  time: 25,
  portions: 2,
  taste: 4,
  difficulty: 1,
  ingredients: [
    {
      title: "",
      items: [
        { ing: iLIQ.rosol, amount: 1000 },
        { ing: iGRN.thin_pasta, amount: 100 },
        { ing: iVEG.carrot, amount: 2, unit: "szt" },
        { ing: iMET.chicken_soup_portion, amount: 100 },
        { ing: iLIQ.maggi },
        { ing: iHRB.dill },
        { ing: iSPC.black_pepper },
        { ing: iSPC.salt },
      ],
    },
  ],
  steps: [
    {
      title: "",
      steps: [
        "Podgrzej wcześniej przygotowany rosół.",
        "Wyjmij z rosołu marchewkę i mięso, pokrój na mniejsze kawałki.",
        "W osobnym garnku ugotuj makaron według instrukcji na opakowaniu i odcedź.",
        "Do talerzy nałóż makaron, marchewkę oraz kawałki mięsa.",
        "Zalej gorącym rosołem.",
        "Dopraw do smaku solą, pieprzem i kilkoma kroplami maggi.",
        "Posyp świeżym koperkiem przed podaniem.",
      ],
    },
  ],
  keyWords: ["zupa", "makaron"],
};

export default rosolZMakaronem;
