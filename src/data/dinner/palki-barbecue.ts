import { dinnerSides } from "../../dinnerSides";
import { iMET } from "../../ingredients/ingMeat";
import { iSAU } from "../../ingredients/ingSauce";
import { iSPC } from "../../ingredients/ingSpice";
import type { Recipe } from "../../types";

const portions = 3;
const palkiBarbecue: Recipe = {
  name: "Pałki Barbecue",
  type: "dinner",
  cookingMethods: ["roasted"],
  images: ["palki-barbecue.jpg"],
  time: 60,
  portions: portions,
  taste: 4,
  difficulty: 3,
  ingredients: [
    {
      title: "",
      items: [
        { ing: iMET.chicken_drums, amount: 2, unit: "opak" },
        { ing: iSAU.barbecue_sauce, amount: 10 * 0.5, unit: "lzi" },
        { ing: iSPC.sweet_paprika },
        { ing: iSPC.hot_paprika },
        { ing: iSPC.smoked_paprika },
        { ing: iSPC.granulated_garlic },
      ],
    },
  ],
  extrasMain: {
    options: [dinnerSides("oven-fries", portions)],
    selected: 0,
  },
  extrasVeg: {
    options: [dinnerSides("pickled-cucumber", portions)],
    selected: 0,
  },
  steps: [
    {
      title: "",
      steps: [
        "Ułóż pałki w naczyniu żaroodpornym.",
        "Posyp kurczaka mieszanką przypraw: słodką, ostrą i wędzoną papryką oraz czosnkiem granulowanym.",
        "Przykryj naczynie i piecz w piekarniku przez około 40 minut w 220°C.",
        "Wyjmij naczynie i otwórz je, odlej nadmiar tłuszczu z kurczaka.",
        "Polej pałki sosem barbecue.",
        "Wstaw naczynie ponownie do piekarnika, tym razem otwarte, i piecz w 160°C aż sos się skarmelizuje.",
      ],
    },
  ],
  keyWords: ["mięso", "kurczak", "sos"],
};

export default palkiBarbecue;
