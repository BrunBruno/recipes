import type { Recipe } from "../types";

const ryzZJablkami: Recipe = {
  name: "Ryż z Jabłkami",
  type: "dessert",
  image: "ryz-z-jablkami.jpg",
  kcal: 320,
  time: 25,
  portions: 1,
  ingredients: [
    { name: "ryż", amount: "100", unit: "g", type: "grn" },
    { name: "jabłka", amount: "2", unit: "szt", type: "frt" },
    { name: "mleko", amount: "250", unit: "ml", type: "dir" },
    { name: "cukier", amount: "2", unit: "łyżka", type: "oth" },
    { name: "cynamon", amount: null, unit: null, type: "spc" },
    { name: "masło", amount: null, unit: null, type: "fat" },
    { name: "sól", amount: null, unit: null, type: "spc" },
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
