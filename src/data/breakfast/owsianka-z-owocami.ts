import { iDIR } from "../../ingredients/ingDairy";
import { iFRT } from "../../ingredients/ingFruit";
import { iGRN } from "../../ingredients/ingGrain";
import { iLIQ } from "../../ingredients/ingLiquid";
import type { Recipe } from "../../types";

const owsianaZOwocami: Recipe = {
  name: "Owsianka z Owocami",
  type: "breakfast",
  cookingMethods: [
    ["boiled", 20],
    ["microwaved", 1.5],
  ],
  images: ["owsianka-z-owocami.jpg", "owsianka-z-owocami-2.jpg"],
  time: 25,
  portions: 1,
  taste: 4,
  difficulty: 1,
  ingredients: [
    {
      title: "",
      items: [
        { ing: iGRN.oat_flakes, amount: 60 },
        {
          type: "choice",
          options: [
            { ing: iDIR.milk, amount: 250, unit: "ml" },
            { ing: iLIQ.water, amount: 250, unit: "ml" },
          ],
          selected: 0,
        },
        {
          type: "choice",
          selected: 0,
          options: [
            { ing: iFRT.blueberry, amount: 80 },
            { ing: iFRT.banana, amount: 1, unit: "szt" },
            { ing: iFRT.strawberry, amount: 100 },
            { ing: iFRT.raspberries, amount: 80 },
            { ing: iFRT.blackberry, amount: 80 },
            { ing: iFRT.peach, amount: 0.5, unit: "szt" },
            { ing: iFRT.pear, amount: 0.5, unit: "szt" },
          ],
        },
      ],
    },
    {
      title: "Opcjonalne owoce",
      isAdd: true,
      items: [
        { ing: iFRT.banana, exclude: true },
        { ing: iFRT.strawberry, exclude: true },
        { ing: iFRT.raspberries, exclude: true },
        { ing: iFRT.blackberry, exclude: true },
        { ing: iFRT.peach, unit: "szt", exclude: true },
        { ing: iFRT.pear, unit: "szt", exclude: true },
      ],
    },
  ],
  steps: [
    {
      title: "",
      steps: [
        "Wlej mleko do garnka i doprowadź do lekkiego wrzenia.",
        "Wsyp płatki owsiane i gotuj przez około 5 minut, mieszając.",
        "Przełóż owsiankę do miski.",
        "Na wierzchu ułóż świeże borówki i podawaj.",
      ],
    },
  ],
  keyWords: ["owoce"],
};

export default owsianaZOwocami;
