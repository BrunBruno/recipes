import { iFAT } from "../../ingredients/ingFat";
import { iGRN } from "../../ingredients/ingGrain";
import { iOTH } from "../../ingredients/ingOther";
import { iSPC } from "../../ingredients/ingSpice";
import type { Recipe } from "../../types";

const kopytkaZCukrem: Recipe = {
  name: "Kopytka z Cukrem",
  description:
    "Proste i szybkie kopytka z cukrem - delikatne kluski ziemniaczane podane z roztopionym masłem i posypane cukrem, idealne na słodki deser.",
  type: "dessert",
  images: ["kopytka-z-cukrem.jpg"],
  time: 15,
  portions: 2,
  executionDifficulty: 1,
  ingredients: [
    {
      title: "",
      items: [
        { ing: iGRN.gnocchi, amount: 500 },
        { ing: iOTH.sugar, amount: 8, unit: "lzi" },
        { ing: iFAT.butter, amount: 2, unit: "lzi" },
        { ing: iSPC.salt },
      ],
    },
  ],
  steps: [
    {
      title: "",
      steps: [
        "Zagotuj wodę z dodatkiem soli.",
        "Wrzuć gotowe kopytka do wrzątku i gotuj zgodnie z instrukcją na opakowaniu (zwykle do wypłynięcia).",
        "Odcedź kopytka.",
        "W międzyczasie rozpuść masło na patelni.",
        "Wymieszaj kopytka z masłem.",
        "Podawaj posypane cukrem.",
      ],
    },
  ],
  keyWords: ["deser"],
};

export default kopytkaZCukrem;
