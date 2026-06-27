import { dinnerSides } from "../../dinnerSides";
import { iFAT } from "../../ingredients/ingFat";
import { iMET } from "../../ingredients/ingMeat";
import { iSPC } from "../../ingredients/ingSpice";
import type { Recipe } from "../../types";

const portions = 1;
const jajkoSadzone: Recipe = {
  name: "Jajka Sadzone",
  description:
    "Proste jajka sadzone smażone na maśle klarowanym, podawane z ziemniakami i groszkiem konserwowym, doprawione solą, pieprzem i koperkiem.",
  type: "dinner",
  images: ["jajko-sadzone.jpg"],
  time: 10,
  portions: portions,
  executionDifficulty: 1,
  ingredients: [
    {
      title: "",
      items: [
        { ing: iMET.egg, amount: 3 * portions, unit: "szt" },
        { ing: iFAT.clarified_butter, amount: 1, unit: "lz" },
        { ing: iSPC.salt },
      ],
    },
  ],
  extrasMain: {
    options: [
      dinnerSides("boiled-potatoes", portions),
      dinnerSides("mashed-potatoes", portions),
    ],
    selected: 0,
  },
  extrasVeg: {
    options: [
      dinnerSides("canned-peas", portions),
      dinnerSides("beets-whole-vinegar", portions),
    ],
    selected: 0,
  },
  steps: [
    {
      title: "",
      steps: [
        "Rozgrzej patelnię na średnim ogniu i dodaj masło.",
        "Wbij jajka na patelnię, uważając, aby nie uszkodzić żółtka.",
        "Smaż 2-3 minuty, aż białko się zetnie, a żółtko pozostanie płynne (lub dłużej, jeśli wolisz bardziej ścięte).",
        "Delikatnie posól i popieprz według smaku.",
      ],
    },

  ],
  keyWords: ["jajko"],
};

export default jajkoSadzone;
