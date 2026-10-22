import { iFAT } from "../../ingredients/ingFat";
import { iGRN } from "../../ingredients/ingGrain";
import { iMET } from "../../ingredients/ingMeat";
import { iOTH } from "../../ingredients/ingOther";
import { iSNK } from "../../ingredients/ingSnack";
import type { Recipe } from "../../types";

const portions = 18;
const ciastkaAmerykanskie: Recipe = {
  name: "Ciastka Amerykańskie",
  type: "dessert",
  images: ["ciastka-amerykanskie"],
  time: 40,
  portions: portions,
  taste: null,
  difficulty: null,
  ingredients: [
    {
      title: "",
      items: [
        { ing: iGRN.wheat_flour, amount: 160 },
        {
          type: "choice",
          options: [
            { ing: iOTH.baking_soda, amount: 0.3, unit: "lzi" },
            { ing: iOTH.baking_powder, amount: 0.3, unit: "lzi" },
          ],
          selected: 0,
        },
        {
          type: "choice",
          options: [
            { ing: iOTH.vanilla_sugar, amount: 2, unit: "lz" },
            { ing: iOTH.vanilla_flavor, amount: 1, unit: "lzi" },
          ],
          selected: 0,
        },
        { ing: iFAT.butter, amount: 100 },
        { ing: iOTH.brown_sugar, amount: 80 },
        { ing: iOTH.sugar, amount: 80 },
        { ing: iMET.egg, amount: 1, unit: "szt" },
        { ing: iSNK.chocolate_dark, amount: 100 },
        { ing: iSNK.chocolate_milk, amount: 100 },
        { ing: iSNK.chocolate_white, amount: 100 },
      ],
    },
  ],
  steps: [
    {
      title: "",
      steps: [
        "Piekarnik nagrzać do 160°C. Przygotować 2 duże blaszki do pieczenia i wyłożyć je papierem do pieczenia.",
        "Mąkę przesiać do miski, dodać szczyptę soli, sodę lub proszek do pieczenia, cukier wanilinowy i wymieszać.",
        "W drugiej misce ubijać masło z dodatkiem cukru białego i trzcinowego przez około 5 minut. Dodać jajko i ubijać jeszcze przez około 5 minut.",
        "Dodać sypkie składniki i zmiksować lub wymieszać.",
        "Czekoladę posiekać (każdą kosteczkę pokroić na 4 kawałeczki), dodać do masy i wymieszać łyżką.",
        "Nabierać po około 2 łyżki masy, uformować 18 kulek i ułożyć je na blaszkach do pieczenia, odrobinę spłaszczając wierzch palcami.",
        "Wstawić do piekarnika i piec przez 15 minut, aż brzegi ciastek zaczną się rumienić (ciastka wyjmujemy, gdy są jeszcze miękkie - zastygają po ostudzeniu).",
      ],
    },
  ],
  keyWords: ["ciasto", "deser", "jajka"],
};

export default ciastkaAmerykanskie;
