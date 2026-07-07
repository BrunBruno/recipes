import { dinnerSides } from "../../dinnerSides";
import { iDIR } from "../../ingredients/ingDairy";
import { iHRB } from "../../ingredients/ingHerb";
import { iMET } from "../../ingredients/ingMeat";
import { iOTH } from "../../ingredients/ingOther";
import { iSPC } from "../../ingredients/ingSpice";
import { iVEG } from "../../ingredients/ingVegetable";
import type { Recipe } from "../../types";

const portions = 2;
const schabAlaStroganoff: Recipe = {
  name: "Schab a'la Stroganoff",
  description:
    "Kawałki schabu z pieczarkami i cebulą w kremowym sosie a'la stroganoff na bazie Fix Knorr.",
  type: "dinner",
  images: ["schab-ala-stroganoff.jpg", "schab-ala-stroganoff-2.jpg"],
  time: 25,
  portions: portions,
  executionDifficulty: 1,
  ingredients: [
    {
      title: "",
      items: [
        { ing: iMET.pork_ham, amount: 400 },
        { ing: iVEG.mushrooms, amount: 150 },
        { ing: iVEG.onion, amount: 1, unit: "szt" },
        { ing: iDIR.cream_18, amount: 100, unit: "ml" },
        { ing: iOTH.water, amount: 250, unit: "ml" },
        { ing: iSPC.knorr_pork_ala_stroganoff_fix, amount: 1, unit: "opak" },
        { ing: iHRB.parsley },
      ],
    },
  ],
  extrasMain: {
    options: [
      dinnerSides("rice", portions),
      dinnerSides("boiled-potatoes-dry", portions),
    ],
    selected: 0,
  },
  extrasVeg: {
    options: [
      dinnerSides("green-beans-boiled", portions),
      dinnerSides("beets-whole-vinegar", portions),
    ],
    selected: 0,
  },
  steps: [
    {
      title: "",
      steps: [
        "Schab pokrój w cienkie paski, cebulę w piórka, a pieczarki w plastry.",
        "Na rozgrzanej patelni podsmaż mięso, następnie dodaj cebulę i pieczarki. Smaż, aż warzywa zmiękną, a mięso się zarumieni.",
        "W misce wymieszaj zawartość opakowania Fix a'la Stroganoff z wodą i śmietaną.",
        "Wlej przygotowany sos na patelnię i dokładnie wymieszaj.",
        "Gotuj całość przez około 8 minut na średnim ogniu, regularnie mieszając, aż sos zgęstnieje.",
        "Podawaj posypane świeżą natką pietruszki.",
      ],
    },
  ],
  keyWords: ["wieprzowina"],
};

export default schabAlaStroganoff;
