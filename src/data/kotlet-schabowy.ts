import type { Recipe } from "../types";

const kotletSchabowy: Recipe = {
  name: "Kotlety Schabowe",
  type: "dinner",
  image: "kotlet-schabowy.jpg",
  ingredients: [
    { name: "schab", amount: 10, unit: "plastry" },
    { name: "jajka", amount: 2, unit: "szt" },
    { name: "mąka" },
    { name: "bułka tarta" },
    { name: "olej" },
    { name: "sól" },
    { name: "pieprz" },
    { name: "papryka" },
    { name: "czosnek granulowany" },
    { name: "tymianek" },
    { name: "majeranek" },
    { name: "zioła prowansalskie" },
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
