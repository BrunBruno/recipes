import { iFAT } from "../../ingredients/ingFat";
import { iFRT } from "../../ingredients/ingFruit";
import { iGRN } from "../../ingredients/ingGrain";
import { iOTH } from "../../ingredients/ingOther";
import { iSPC } from "../../ingredients/ingSpice";
import type { Recipe } from "../../types";

const ryzZJablkami: Recipe = {
  name: "Ryż z Jabłkami",
  type: "dessert",
  cookingMethods: [
    ["fried", 20],
    ["boiled", "22-27"],
  ],
  images: ["ryz-z-jablkami.jpg"],
  time: 30,
  portions: 1,
  taste: 3,
  difficulty: 2,
  ingredients: [
    {
      title: "",
      items: [
        { ing: iGRN.rice, amount: 100 },
        { ing: iFRT.apple, amount: 2, unit: "szt" },
        { ing: iOTH.sugar, amount: 2, unit: "lzi" },
        { ing: iFAT.butter, amount: 3 },
        { ing: iSPC.cinnamon },
        { ing: iSPC.salt },
      ],
    },
  ],
  steps: [
    {
      title: "",
      steps: [
        "Ryż przepłucz pod bieżącą wodą, a następnie ugotuj go.",
        "W międzyczasie obierz jabłka, usuń gniazda nasienne i pokrój w kostkę.",
        "Na patelni rozpuść odrobinę masło, dodaj jabłka, smaż po przykryciem kilka minut, aż staną się w miarę jednolitą papą.",
        "Podczas, należy wlewać co jakiś czas niewielką ilość wody na patelnie, aby jabłka się nie przypaliły.",
        "Można również usmażyć jabłka bez dodatku tłuszczu.",
        "Podawaj na ciepło, opcjonalnie posypane cynamonem lub odrobiną cukru.",
      ],
    },
  ],
  keyWords: ["ryż", "owoce", "deser"],
};

export default ryzZJablkami;
