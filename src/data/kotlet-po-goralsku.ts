import type { Recipe } from "../types";

const kotletPoGoralsku: Recipe = {
  name: "Kotlet po Góralsku",
  type: "snack",
  image: "kotlet-po-goralsku.jpg",
  kcal: 850,
  time: 40,
  portions: 4,
  ingredients: [
    {
      name: "schab",
      amount: 10,
      unit: "plaster",
      type: "met",
    },
    {
      name: "boczek wędzony",
      amount: 100,
      unit: "g",
      type: "met",
    },
    {
      name: "ser żółty",
      amount: 10,
      unit: "plaster",
      type: "che",
    },
    {
      name: "jajka",
      amount: 2,
      unit: "szt",
      type: "egg",
    },
    {
      name: "bułka tarta",
      amount: null,
      unit: null,
      type: "grn",
    },
    {
      name: "mąka",
      amount: null,
      unit: null,
      type: "grn",
    },
    {
      name: "olej lub smalec",
      amount: null,
      unit: null,
      type: "fat",
    },
    {
      name: "sól",
      amount: null,
      unit: null,
      type: "spc",
    },
    {
      name: "pieprz",
      amount: null,
      unit: null,
      type: "spc",
    },
  ],
  steps: [
    "Plastry schabu rozbij tłuczkiem na cienkie kotlety. Oprósz solą i pieprzem z obu stron.",
    "Każdy kotlet obtocz kolejno w mące, roztrzepanym jajku oraz bułce tartej.",
    "Na rozgrzanym oleju lub smalcu smaż kotlety na złoty kolor z obu stron. Następnie zdejmij je z patelni.",
    "Na tej samej patelni podsmaż boczek, aż stanie się chrupiący.",
    "Na usmażone kotlety połóż boczek, a na wierzch plaster sera.",
    "Przykryj patelnię i podgrzewaj na małym ogniu, aż ser się rozpuści.",
    "Podawaj od razu, najlepiej z ziemniakami i surówką.",
  ],
};

export default kotletPoGoralsku;
