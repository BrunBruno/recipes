import { iDIR } from "../../ingredients/ingDairy";
import { iFAT } from "../../ingredients/ingFat";
import { iFRT } from "../../ingredients/ingFruit";
import { iLIQ } from "../../ingredients/ingLiquid";
import { iNUT } from "../../ingredients/ingNut";
import { iSPC } from "../../ingredients/ingSpice";
import { iVEG } from "../../ingredients/ingVegetable";
import type { Recipe } from "../../types";

const salatkaFrancuska: Recipe = {
  name: "Sałatka Francuska",
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
        { ing: iVEG.arugula, amount: 40 },
        { ing: iFRT.pear, amount: 1, unit: "szt" },
        { ing: iDIR.blue_cheese, amount: 60 },
        { ing: iNUT.walnuts, amount: 30 },
        { ing: iFAT.oil, amount: 3, unit: "lz" },
        { ing: iLIQ.water, amount: 3, unit: "lz" },
        { ing: iSPC.knorr_french_salad_fix, amount: 1, unit: "opak" },
      ],
    },
  ],
  steps: [
    {
      title: "",
      steps: [
        "Wsyp zawartość saszetki sosu francuskiego do szklanki.",
        "Dodaj 3 łyżki stołowe wody i 3 łyżki stołowe oleju roślinnego. Dokładnie wymieszaj.",
        "Liście sałaty i rukolę umyj i osusz.",
        "Gruszkę umyj, usuń gniazdo nasienne i pokrój w cienkie plasterki.",
        "Ser pleśniowy pokrusz na mniejsze kawałki.",
        "Na talerzach rozłóż sałatę i rukolę. Dodaj gruszkę, ser pleśniowy i orzechy włoskie.",
        "Polej sałatkę przygotowanym sosem tuż przed podaniem.",
      ],
    },
  ],
  keyWords: [],
};

export default salatkaFrancuska;
