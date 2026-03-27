import { iFAT } from "../ingredients/ingFat";
import { iFRT } from "../ingredients/ingFruit";
import { iGRN } from "../ingredients/ingGrain";
import { iOTH } from "../ingredients/ingOther";
import { iSPC } from "../ingredients/ingSpice";
import type { Recipe } from "../types";

const ryzZJablkami: Recipe = {
  name: "Ryż z Jabłkami",
  description:
    "Delikatny deser z ryżu i jabłek, podsmażanych na maśle z dodatkiem cynamonu, idealny na ciepłą i słodką przekąskę.",
  type: "dessert",
  images: ["ryz-z-jablkami.jpg"],
  time: 30,
  portions: 1,
  ingredients: [
    {
      title: "Lista składników",
      items: [
        { ingredient: iGRN.rice, amount: 100 },
        { ingredient: iFRT.apple, amount: 2, unit: "szt" },
        { ingredient: iOTH.sugar, amount: 2, unit: "lzi" },
        { ingredient: iFAT.butter, amount: 3 },
        { ingredient: iSPC.cinnamon },
        { ingredient: iSPC.salt },
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
  keyWords: ["ryż", "owoce", "xxx"],
};

export default ryzZJablkami;
