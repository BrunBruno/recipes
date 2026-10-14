import { iFAT } from "../../ingredients/ingFat";
import { iHRB } from "../../ingredients/ingHerb";
import { iLIQ } from "../../ingredients/ingLiquid";
import { iSPC } from "../../ingredients/ingSpice";
import { iVEG } from "../../ingredients/ingVegetable";
import type { Recipe } from "../../types";

const salatkaKoperkowoZilolowa: Recipe = {
  name: "Sałatka Koperkowo-Ziołowa",
  type: "salad",
  images: [""],
  time: 10,
  portions: 2,
  taste: null,
  difficulty: null,
  ingredients: [
    {
      title: "",
      items: [
        { ing: iVEG.lettuce, amount: 120 },
        { ing: iVEG.radish, amount: 100 },
        { ing: iVEG.cucumber, amount: 1, unit: "szt" },
        { ing: iHRB.fresh_basil, amount: 10 },
        { ing: iFAT.oil, amount: 3, unit: "lz" },
        { ing: iLIQ.water, amount: 3, unit: "lz" },
        { ing: iSPC.knorr_dill_herb_salad_fix, amount: 1, unit: "opak" },
      ],
    },
  ],
  steps: [
    {
      title: "",
      steps: [
        "Wsyp zawartość saszetki sosu koperkowo-ziołowego do szklanki.",
        "Dodaj 3 łyżki stołowe wody i 3 łyżki stołowe oleju roślinnego. Dokładnie wymieszaj.",
        "Sałatę umyj, osusz i porwij na mniejsze kawałki.",
        "Rzodkiewki umyj i pokrój w plasterki.",
        "Ogórka umyj i pokrój w półplasterki.",
        "Bazylię opłucz, osusz i oderwij listki.",
        "Wymieszaj wszystkie warzywa z bazylią.",
        "Polej sałatkę przygotowanym sosem tuż przed podaniem.",
      ],
    },
  ],
  keyWords: [],
};

export default salatkaKoperkowoZilolowa;
