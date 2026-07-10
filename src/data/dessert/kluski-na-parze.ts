import { iDIR } from "../../ingredients/ingDairy";
import { iGRN } from "../../ingredients/ingGrain";
import type { Recipe } from "../../types";

const kluskiNaParze: Recipe = {
  name: "Kluski na Parze",
  type: "dessert",
  images: ["kluski-na-parze.jpg"],
  time: 10,
  portions: 2,
  taste: 3,
  difficulty: 1,
  ingredients: [
    {
      title: "",
      items: [
        { ing: iGRN.steamed_dumplings, amount: 400 },
        { ing: iDIR.strawberry_yogurt, amount: 300 },
      ],
    },
  ],
  steps: [
    {
      title: "",
      steps: [
        "Podgrzej kluski zgodnie z instrukcją na opakowaniu (np. na parze lub w mikrofalówce).",
        "Przełóż kluski na talerz.",
        "Polej je jogurtem, na przykład truskawkowym.",
        "Podawaj od razu na ciepło.",
      ],
    },
  ],
  keyWords: ["deser"],
};

export default kluskiNaParze;
