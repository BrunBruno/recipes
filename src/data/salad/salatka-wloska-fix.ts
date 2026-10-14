import { iDIR } from "../../ingredients/ingDairy";
import { iFAT } from "../../ingredients/ingFat";
import { iHRB } from "../../ingredients/ingHerb";
import { iLIQ } from "../../ingredients/ingLiquid";
import { iSPC } from "../../ingredients/ingSpice";
import { iVEG } from "../../ingredients/ingVegetable";
import type { Recipe } from "../../types";

const salatkaWloska: Recipe = {
  name: "Sałatka Włoska",
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
        { ing: iVEG.cherry_tomato, amount: 250 },
        { ing: iDIR.mozzarella, amount: 125 },
        { ing: iHRB.fresh_basil, amount: 15 },
        { ing: iFAT.oil, amount: 3, unit: "lz" },
        { ing: iLIQ.water, amount: 3, unit: "lz" },
        { ing: iSPC.knorr_italian_salad_fix, amount: 1, unit: "opak" },
      ],
    },
  ],
  steps: [
    {
      title: "",
      steps: [
        "Wsyp zawartość saszetki sosu włoskiego do szklanki.",
        "Dodaj 3 łyżki stołowe wody i 3 łyżki stołowe oleju roślinnego. Dokładnie wymieszaj.",
        "Pomidorki koktajlowe umyj i przekrój na połówki.",
        "Mozzarellę odsącz z zalewy i pokrój na mniejsze kawałki.",
        "Listki bazylii opłucz i osusz.",
        "Wymieszaj pomidorki z mozzarellą i bazylią.",
        "Polej sałatkę przygotowanym sosem i delikatnie wymieszaj.",
      ],
    },
  ],
  keyWords: [],
};

export default salatkaWloska;
