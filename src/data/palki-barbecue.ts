import { iMET } from "../ingredients/ingMeat";
import { iSAU } from "../ingredients/ingSauce";
import { iSPC } from "../ingredients/ingSpice";
import { iVEG } from "../ingredients/ingVegetable";
import type { Recipe } from "../types";

const portions = 3;
const palkiBarbecue: Recipe = {
  name: "Pałki Barbecue",
  description:
    "Soczyste pałki z kurczaka pieczone w aromatycznych przyprawach i sosie barbecue. Podawane z frytkami i ogórkiem kiszonym jako klasyczne danie obiadowe.",
  type: "dinner",
  images: ["palki-barbecue.jpg"],
  time: 60,
  portions: portions,
  ingredients: [
    {
      title: "Składniki na kurczaka",
      items: [
        { ingredient: iMET.chicken_drums, amount: 2, unit: "opak" },
        { ingredient: iSAU.barbecue_sauce, amount: 10 * 0.5, unit: "lzi" },
        { ingredient: iSPC.sweet_paprika },
        { ingredient: iSPC.hot_paprika },
        { ingredient: iSPC.smoked_paprika },
        { ingredient: iSPC.granulated_garlic },
      ],
    },
    {
      title: "Przykładowe dodatki",
      items: [
        { ingredient: iVEG.frozen_fries, amount: portions * 150 },
        {
          ingredient: iVEG.pickled_cucumber,
          amount: portions * 2,
          unit: "szt",
        },
        { ingredient: iSPC.salt },
      ],
    },
  ],
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
    {
      title: "Przykładowe podanie",
      steps: [
        "Upiecz frytki w piekarniku zgodnie z instrukcją na opakowaniu.",
        "Podawaj pałki barbecue na talerzu z porcją frytek.",
        "Obok dodaj ogórka kiszonego jako dodatek.",
      ],
    },
  ],
  keyWords: ["kurczak", "xxx"],
};

export default palkiBarbecue;
