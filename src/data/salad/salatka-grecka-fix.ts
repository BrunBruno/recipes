import { iDIR } from "../../ingredients/ingDairy";
import { iFAT } from "../../ingredients/ingFat";
import { iFRT } from "../../ingredients/ingFruit";
import { iLIQ } from "../../ingredients/ingLiquid";
import { iSPC } from "../../ingredients/ingSpice";
import { iVEG } from "../../ingredients/ingVegetable";
import type { Recipe } from "../../types";

const salatkaGrecka: Recipe = {
  name: "Sałatka Grecka",
  type: "salad",
  images: [""],
  time: 15,
  portions: 2,
  taste: null,
  difficulty: null,
  ingredients: [
    {
      title: "",
      items: [
        { ing: iVEG.lettuce, amount: 100 },
        { ing: iVEG.cherry_tomato, amount: 250 },
        { ing: iVEG.cucumber, amount: 1, unit: "szt" },
        { ing: iVEG.red_onion, amount: 0.5, unit: "szt" },
        { ing: iVEG.bell_pepper, amount: 1, unit: "szt" },
        { ing: iDIR.feta, amount: 100 },
        { ing: iFRT.black_olives, amount: 50 },
        { ing: iFAT.oil, amount: 3, unit: "lz" },
        { ing: iLIQ.water, amount: 3, unit: "lz" },
        { ing: iSPC.knorr_greek_salad_fix, amount: 1, unit: "opak" },
      ],
    },
  ],
  steps: [
    {
      title: "",
      steps: [
        "Wsyp zawartość saszetki sosu greckiego do szklanki.",
        "Dodaj 3 łyżki stołowe wody i 3 łyżki stołowe oleju roślinnego. Dokładnie wymieszaj.",
        "Sałatę umyj, osusz i porwij na mniejsze kawałki.",
        "Pomidory i ogórka umyj, a następnie pokrój na kawałki.",
        "Cebulę obierz i pokrój w cienkie piórka.",
        "Paprykę umyj, usuń gniazdo nasienne i pokrój w paski.",
        "Oliwki odsącz z zalewy, a fetę pokrój w kostkę.",
        "Ułóż warzywa na talerzu, dodaj oliwki i fetę.",
        "Polej sałatkę przygotowanym sosem tuż przed podaniem.",
      ],
    },
  ],
  keyWords: [],
};

export default salatkaGrecka;
