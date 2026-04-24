import { iDIR } from "../../ingredients/ingDairy";
import { iFAT } from "../../ingredients/ingFat";
import { iGRN } from "../../ingredients/ingGrain";
import { iMET } from "../../ingredients/ingMeat";
import { iSPC } from "../../ingredients/ingSpice";
import { iVEG } from "../../ingredients/ingVegetable";
import type { Recipe } from "../../types";

const portions = 5;
const kotletSchabowy: Recipe = {
  name: "Kotlety Schabowe",
  description:
    "Klasyczne kotlety schabowe - cienko rozbite plastry schabu panierowane w mące, jajku i bułce tartej, smażone na złoty kolor. Podawane z ziemniakami i mizerią ze świeżego ogórka, cebuli i śmietany.",
  type: "dinner",
  images: ["kotlet-schabowy.jpg", "kotlet-schabowy-2.jpg"],
  time: 50,
  portions: portions,
  executionDifficulty: 3,
  ingredients: [
    {
      title: "Kotlety",
      items: [
        { ing: iMET.pork_loin, amount: 10, unit: "plas" },
        { ing: iMET.egg, amount: 2, unit: "szt" },
        { ing: iGRN.flour, amount: 3, unit: "lz" },
        { ing: iGRN.breadcrumbs, amount: 150 },
        { ing: iFAT.oil, amount: 10, unit: "lz" },
        { ing: iSPC.thyme },
        { ing: iSPC.marjoram },
        { ing: iSPC.herbes_de_provence },
        { ing: iSPC.sweet_paprika },
        { ing: iSPC.granulated_garlic },
        { ing: iSPC.black_pepper },
        { ing: iSPC.salt },
      ],
    },
    {
      title: "Przykładowe dodatki",
      items: [
        { ing: iVEG.potato, amount: portions * 200 },
        { ing: iDIR.cream_18, amount: portions * 2, unit: "lz" },
        { ing: iVEG.cucumber, amount: portions * 0.5, unit: "szt" },
        { ing: iVEG.spring_onion },
        { ing: iSPC.black_pepper },
        { ing: iSPC.salt },
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
        "Pokrój ogórka w cienkie plasterki i dodaj zieloną cebulkę.",
        "Dodaj śmietanę, sól i pieprz, a następnie wymieszaj.",
        "Podawaj danie z porcją ziemniaków i przygotowaną mizerią.",
      ],
    },
  ],
  keyWords: ["wieprzowina"],
};

export default kotletSchabowy;
