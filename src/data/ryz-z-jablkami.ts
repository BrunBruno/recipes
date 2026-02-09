import { iDIR } from "../ingredients/ingDairy";
import { iFAT } from "../ingredients/ingFat";
import { iFRT } from "../ingredients/ingFruit";
import { iGRN } from "../ingredients/ingGrain";
import { iOTH } from "../ingredients/ingOther";
import { iSPC } from "../ingredients/ingSpice";
import type { Recipe } from "../types";

const ryzZJablkami: Recipe = {
  name: "Ryż z Jabłkami",
  type: "dessert",
  image: "ryz-z-jablkami.jpg",
  kcal: 320,
  time: 25,
  portions: 1,
  ingredients: [
    { ingredient: iGRN.rice, amount: 100 },
    { ingredient: iFRT.apple, amount: 2, unit: "szt" },
    { ingredient: iDIR.milk, amount: 250, unit: "ml" },
    { ingredient: iOTH.sugar, amount: 2, unit: "łyżka" },
    { ingredient: iFAT.butter },
    { ingredient: iSPC.cinnamon },
    { ingredient: iSPC.salt },
  ],
  steps: [
    "Ryż przepłucz pod bieżącą wodą, aż woda stanie się przezroczysta.",
    "W garnku zagotuj mleko z odrobiną soli i cukrem.",
    "Dodaj ryż do gotującego się mleka, zmniejsz ogień i gotuj pod przykryciem około 15 minut, aż ryż wchłonie większość mleka.",
    "W międzyczasie obierz jabłka, usuń gniazda nasienne i pokrój w kostkę.",
    "Na patelni rozpuść masło, dodaj jabłka i cynamon, smaż kilka minut, aż lekko zmiękną.",
    "Połącz ugotowany ryż z jabłkami i delikatnie wymieszaj.",
    "Podawaj na ciepło, opcjonalnie posypane dodatkowym cynamonem lub odrobiną cukru.",
  ],
};

export default ryzZJablkami;
