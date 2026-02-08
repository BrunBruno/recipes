import type { Recipe } from "../types";

const kotletSchabowy: Recipe = {
  name: "Kotlety Schabowe",
  type: "dinner",
  image: "kotlet-schabowy.jpg",
  kcal: 720,
  time: 35,
  portions: 4,
  ingredients: [
    { name: "schab", amount: 10, unit: "plaster", type: "met" },
    { name: "jajka", amount: 2, unit: "szt", type: "egg" },
    { name: "mąka", amount: null, unit: null, type: "grn" },
    { name: "bułka tarta", amount: null, unit: null, type: "grn" },
    { name: "olej", amount: null, unit: null, type: "fat" },
    { name: "sól", amount: null, unit: null, type: "spc" },
    { name: "pieprz", amount: null, unit: null, type: "spc" },
    { name: "papryka", amount: null, unit: null, type: "spc" },
    { name: "czosnek granulowany", amount: null, unit: null, type: "spc" },
    { name: "tymianek", amount: null, unit: null, type: "spc" },
    { name: "majeranek", amount: null, unit: null, type: "spc" },
    { name: "zioła prowansalskie", amount: null, unit: null, type: "spc" },
  ],
  steps: [
    "Rozbij plastry schabu na cienkie kotlety.",
    "Przypraw każdy kotlet wybranymi przyprawami.",
    "Obtocz każdy kotlet w mące, następnie w rozbełtanym jajku, a na końcu w bułce tartej.",
    "Na patelni rozgrzej olej na średnim ogniu.",
    "Smaż kotlety z obu stron na złoty kolor, aż będą dobrze usmażone.",
    "Odsącz z nadmiaru tłuszczu na papierowym ręczniku i podawaj od razu.",
  ],
};

export default kotletSchabowy;
