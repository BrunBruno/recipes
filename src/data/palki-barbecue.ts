import { iMET } from "../ingredients/ingMeat";
import { iSAU } from "../ingredients/ingSauce";
import { iSPC } from "../ingredients/ingSpice";
import type { Recipe } from "../types";

const palkiBarbecue: Recipe = {
  name: "Pałki Barbecue",
  type: "dinner",
  image: "palki-barbecue.jpg",
  kcal: 550,
  time: 60,
  portions: 3,
  ingredients: [
    { ingredient: iMET.chicken_drums, amount: 2, unit: "opak" },
    { ingredient: iSAU.barbecue_sauce },
    { ingredient: iSPC.sweet_paprika },
    { ingredient: iSPC.hot_paprika },
    { ingredient: iSPC.smoked_paprika },
    { ingredient: iSPC.granulated_garlic },
  ],

  steps: [
    "Ułóż pałki w naczyniu żaroodpornym.",
    "Posyp kurczaka mieszanką przypraw: słodką, ostrą i wędzoną papryką oraz czosnkiem granulowanym.",
    "Przykryj naczynie i piecz w piekarniku przez około 40 minut w 220°C.",
    "Wyjmij naczynie i otwórz je, odlej nadmiar tłuszczu z kurczaka.",
    "Polej pałki sosem barbecue.",
    "Wstaw naczynie ponownie do piekarnika, tym razem otwarte, i piecz w 160°C aż sos się skarmelizuje.",
  ],
  keyWords: ["mięso", "kurczak", "pieczone", "sos"],
};

export default palkiBarbecue;
