import { iDIR } from "../ingredients/ingDairy";
import { iFAT } from "../ingredients/ingFat";
import { iGRN } from "../ingredients/ingGrain";
import { iMET } from "../ingredients/ingMeat";
import { iSPC } from "../ingredients/ingSpice";
import { iVEG } from "../ingredients/ingVegetable";
import type { Recipe } from "../types";

const portions = 5;
const kotletSchabowy: Recipe = {
  name: "Kotlety Schabowe",
  description:
    "Klasyczne kotlety schabowe – cienko rozbite plastry schabu panierowane w mące, jajku i bułce tartej, smażone na złoty kolor. Podawane z ziemniakami i mizerią ze świeżego ogórka, cebuli i śmietany.",
  type: "dinner",
  images: ["kotlet-schabowy.jpg", "kotlet-schabowy-2.jpg"],
  time: 50,
  portions: portions,
  ingredients: [
    {
      title: "Składniki na kotlety",
      items: [
        { ingredient: iMET.pork_loin, amount: 10, unit: "plas" },
        { ingredient: iMET.egg, amount: 2, unit: "szt" },
        { ingredient: iGRN.flour, amount: 3, unit: "lz" },
        { ingredient: iGRN.breadcrumbs, amount: 150 },
        { ingredient: iFAT.oil, amount: 10, unit: "lz" },
        { ingredient: iSPC.thyme },
        { ingredient: iSPC.marjoram },
        { ingredient: iSPC.herbes_de_provence },
        { ingredient: iSPC.sweet_paprika },
        { ingredient: iSPC.granulated_garlic },
        { ingredient: iSPC.black_pepper },
        { ingredient: iSPC.salt },
      ],
    },
    {
      title: "Przykładowe dodatki",
      items: [
        { ingredient: iVEG.potato, amount: `${portions} × 200` },
        { ingredient: iDIR.cream_18, amount: 10, unit: "lz" },
        { ingredient: iVEG.cucumber, amount: 2.5, unit: "szt" },
        { ingredient: iVEG.onion, amount: 1.25, unit: "szt" },
        { ingredient: iVEG.spring_onion },
        { ingredient: iSPC.black_pepper },
        { ingredient: iSPC.salt },
      ],
    },
  ],
  steps: [
    {
      title: "",
      steps: [
        "Rozbij plastry schabu na cienkie kotlety.",
        "Przypraw każdy kotlet wybranymi przyprawami.",
        "Obtocz każdy kotlet w mące, następnie w rozbełtanym jajku, a na końcu w bułce tartej.",
        "Na patelni rozgrzej olej na średnim ogniu.",
        "Smaż kotlety z obu stron na złoty kolor, aż będą dobrze usmażone.",
        "Odsącz z nadmiaru tłuszczu na papierowym ręczniku i podawaj od razu.",
      ],
    },
    {
      title: "Przykładowe podanie",
      steps: [
        "Obierz ziemniaki i ugotuj je w osolonej wodzie do miękkości.",
        "Pokrój ogórka w cienkie plasterki i dodaj posiekaną cebulę.",
        "Dodaj śmietanę, koperek, sól i pieprz, a następnie wymieszaj.",
        "Podawaj danie z porcją ziemniaków i przygotowaną mizerią.",
      ],
    },
  ],
  keyWords: ["wieprzowina", "xxx"],
};

export default kotletSchabowy;
