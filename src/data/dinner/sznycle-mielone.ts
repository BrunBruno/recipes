import { iDIR } from "../../ingredients/ingDairy";
import { iFAT } from "../../ingredients/ingFat";
import { iGRN } from "../../ingredients/ingGrain";
import { iMET } from "../../ingredients/ingMeat";
import { iOTH } from "../../ingredients/ingOther";
import { iSPC } from "../../ingredients/ingSpice";
import { iVEG } from "../../ingredients/ingVegetable";
import type { Recipe } from "../../types";

const portions = 3;
const sznycleMielone: Recipe = {
  name: "Sznycle Mielone",
  description:
    "Klasyczne kotlety mielone z wieprzowiny z dodatkiem namoczonej bułki, cebuli i czosnku. Soczyste w środku, chrupiące na zewnątrz.",
  type: "dinner",
  images: ["sznycle-mielone.jpg", "sznycle-mielone-2.jpg"],
  time: 30,
  portions: portions,
  executionDifficulty: 2,
  ingredients: [
    {
      title: "Kotlety",
      items: [
        { ing: iMET.ground_pork, amount: 1, unit: "opak" },
        { ing: iGRN.kaiser_roll, amount: 1, unit: "szt" },
        { ing: iVEG.onion, amount: 1, unit: "szt" },
        { ing: iVEG.garlic, amount: 2, unit: "zbk" },
        { ing: iMET.egg, amount: 1, unit: "szt" },
        { ing: iGRN.breadcrumbs, amount: 100 },
        { ing: iFAT.oil, amount: 8, unit: "lz" },
        { ing: iOTH.maggi },
        { ing: iSPC.black_pepper },
        { ing: iSPC.salt },
      ],
    },
    {
      title: "Przykładowe dodatki",
      items: [
        { ing: iVEG.potato, amount: portions * 200 },
        { ing: iFAT.butter, amount: portions, unit: "lzi" },
        { ing: iDIR.milk, amount: portions * 10, unit: "ml" },
        { ing: iDIR.cream_18, amount: portions * 2, unit: "lz" },
        { ing: iVEG.cucumber, amount: portions * 0.5, unit: "szt" },
        { ing: iVEG.spring_onion, alt: true },
        { ing: iSPC.black_pepper },
        { ing: iSPC.salt },
      ],
    },
  ],
  steps: [
    {
      title: "",
      steps: [
        "Bułkę namocz w wodzie, a następnie dokładnie odciśnij.",
        "Cebulę drobno posiekaj, czosnek przeciśnij przez praskę.",
        "W dużej misce wymieszaj mięso mielone, odciśniętą bułkę, cebulę, czosnek i jajko.",
        "Dopraw solą, pieprzem oraz opcjonalnie odrobiną maggi.",
        "Masę dokładnie wyrób ręką, aż składniki dobrze się połączą.",
        "Jeśli masa jest zbyt luźna, dodaj trochę bułki tartej, aby uzyskać odpowiednią konsystencję.",
        "Formuj kotlety (lekko spłaszczone kulki) i obtaczaj je w bułce tartej.",
        "Na patelni rozgrzej olej i smaż kotlety na średnim ogniu z obu stron na złoty kolor (ok. 4-5 minut z każdej strony).",
      ],
    },
    {
      title: "Przykładowe podanie",
      steps: [
        "Obierz ziemniaki i ugotuj je w osolonej wodzie do miękkości.",
        "Ubij ziemniaki z masłem i ciepłym mlekiem na puree.",
        "Pokrój ogórka w cienkie plasterki i dodaj zieloną cebulkę.",
        "Dodaj śmietanę, sól i pieprz, a następnie wymieszaj.",
        "Podawaj danie z porcją ziemniaków i przygotowaną mizerią.",
      ],
    },
  ],
};

export default sznycleMielone;
