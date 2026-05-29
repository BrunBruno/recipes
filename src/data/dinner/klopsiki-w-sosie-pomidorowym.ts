import { iFAT } from "../../ingredients/ingFat";
import { iGRN } from "../../ingredients/ingGrain";
import { iMET } from "../../ingredients/ingMeat";
import { iOTH } from "../../ingredients/ingOther";
import { iSPC } from "../../ingredients/ingSpice";
import type { Recipe } from "../../types";

const portions = 4;

const klopsikiWSosiePomidorowym: Recipe = {
  name: "Klopsiki w Sosie Pomidorowym",
  description:
    "Delikatne klopsiki w aromatycznym sosie pomidorowym Winiary - prosty i domowy obiad idealny do ziemniaków, ryżu lub makaronu.",
  type: "dinner",
  images: ["klopsiki-w-sosie-pomidorowym.jpg"],
  time: 45,
  portions: portions,
  executionDifficulty: 2,
  ingredients: [
    {
      title: "Klopsiki",
      items: [
        { ing: iMET.ground_pork, amount: 500 },
        { ing: iGRN.breadcrumbs, amount: 4, unit: "lz" },
        { ing: iFAT.oil, amount: 2, unit: "lz" },
        { ing: iOTH.water, amount: 300, unit: "ml" },
        { ing: iSPC.winiary_tomato_sauce, amount: 1, unit: "opak" },
        { ing: iSPC.black_pepper },
        { ing: iSPC.salt },
      ],
    },
  ],
  steps: [
    {
      title: "",
      steps: [
        "Przełóż mięso mielone do miski.",
        "Dodaj bułkę tartą, sól oraz pieprz i dokładnie wymieszaj.",
        "Uformuj niewielkie klopsiki.",
        "Rozgrzej olej na patelni.",
        "Podsmaż klopsiki z każdej strony na złoty kolor.",
        "Przyprawę winiary rozprowadź w 300 ml zimnej wody.",
        "Postaw na ogniu i mieszaj do chwili zagotowania.",
        "Gotuj na małym ogniu przez 3 minuty, często mieszając.",
        "Dodaj klopsiki do gotowego sosu.",
        "Duś całość na małym ogniu przez około 15 minut.",
      ],
    },
  ],
  keyWords: ["sos", "wieprzowina"],
};

export default klopsikiWSosiePomidorowym;
