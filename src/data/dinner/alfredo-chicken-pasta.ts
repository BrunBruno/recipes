import { iDIR } from "../../ingredients/ingDairy";
import { iFAT } from "../../ingredients/ingFat";
import { iGRN } from "../../ingredients/ingGrain";
import { iLIQ } from "../../ingredients/ingLiquid";
import { iMET } from "../../ingredients/ingMeat";
import { iSPC } from "../../ingredients/ingSpice";
import type { Recipe } from "../../types";

const chickenAlfredoPasta: Recipe = {
  name: "Chicken Alfredo Pasta",
  type: "dinner",
  cookingMethods: [
    ["boiled", 10],
    ["fried", 8],
    ["stewed", 2],
  ],
  images: [""],
  time: 20,
  portions: 3,
  taste: null,
  difficulty: null,
  ingredients: [
    {
      title: "",
      items: [
        { ing: iMET.chicken_breast, amount: 400 },
        {
          type: "choice",
          options: [
            { ing: iGRN.fettuccine_pasta, amount: 200 },
            { ing: iGRN.penne_pasta, amount: 200 },
          ],
          selected: 0,
        },
        { ing: iFAT.sunflower_oil, amount: 30, unit: "ml" },
        { ing: iFAT.butter, amount: 15 },
        { ing: iDIR.cream_30, amount: 200, unit: "ml" },
        { ing: iLIQ.water, amount: 200, unit: "ml" },
        { ing: iDIR.parmesan, amount: 30 },
        { ing: iSPC.knorr_alfredo_chicken_pasta_fix, amount: 1, unit: "opak" },
      ],
    },
  ],
  steps: [
    {
      title: "",
      steps: [
        "Makaron ugotuj zgodnie z instrukcją na opakowaniu.",
        "Pierś z kurczaka pokrój w kawałki.",
        "Na rozgrzanym oleju podsmaż kurczaka, aż będzie złocisty.",
        "Zdejmij kurczaka z patelni.",
        "Na tej samej patelni rozpuść masło, następnie wlej wodę oraz śmietanę.",
        "Dodaj zawartość saszetki Fix Chicken Alfredo i dokładnie wymieszaj.",
        "Doprowadź sos do wrzenia i gotuj przez około 1 minutę.",
        "Dodaj ugotowany makaron oraz usmażonego kurczaka i dokładnie wymieszaj.",
        "Gotuj jeszcze przez około 1 minutę, aż składniki połączą się z sosem.",
        "Podawaj na gorąco, posypując startym parmezanem.",
      ],
    },
  ],
  keyWords: ["makaron", "kurczak"],
};

export default chickenAlfredoPasta;
