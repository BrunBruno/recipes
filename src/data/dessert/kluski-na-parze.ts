import { iDIR } from "../../ingredients/ingDairy";
import { iGRN } from "../../ingredients/ingGrain";
import type { Recipe } from "../../types";

const kluskiNaParze: Recipe = {
  name: "Kluski na Parze",
  description:
    "Delikatne kluski na parze podane z jogurtem truskawkowym. Prosty i szybki deser lub słodki posiłek.",
  type: "dessert",
  images: [""],
  time: 10,
  portions: 2,
  ingredients: [
    {
      title: "",
      items: [
        { ingredient: iGRN.steamed_dumplings, amount: 400 },
        { ingredient: iDIR.strawberry_yogurt, amount: 300 },
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
