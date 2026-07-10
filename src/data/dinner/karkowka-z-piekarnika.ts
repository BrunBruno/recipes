import { iJAR } from "../../ingredients/ingJar";
import { iMET } from "../../ingredients/ingMeat";
import { iSPC } from "../../ingredients/ingSpice";
import { iVEG } from "../../ingredients/ingVegetable";
import type { Recipe } from "../../types";

const portions = 2;
const karkowkaZPiekarnika: Recipe = {
  name: "Karkowka z Piekarnika",
  type: "dinner",
  images: ["karkowka-z-piekarnika.jpg", "karkowka-z-piekarnika-2.jpg"],
  time: 70,
  portions: portions,
  taste: 5,
  difficulty: 1,
  ingredients: [
    {
      title: "",
      items: [
        { ing: iMET.pork_neck, amount: 1, unit: "opak" },
        { ing: iVEG.potato, amount: 600 },
        { ing: iVEG.carrot, amount: 200 },
        { ing: iJAR.beets_whole_vinegar, amount: portions * 200 },
        { ing: iSPC.winiary_pork_neck_fix, amount: 1, unit: "opak" },
      ],
    },
  ],
  steps: [
    {
      title: "",
      steps: [
        "Karkówkę pokrój na cztery cienkie plastry (po około 100g każdy).",
        "Obierz surowe ziemniaki i marchewkę. Ziemniaki pokrój w ćwiartki, a marchewkę w talarki.",
        "Rozgrzej piekarnik do 200°C. Nie używaj funkcji grill!",
        "Włóż wszystkie składniki do folii do pieczenia i dodaj przyprawę do karkówki.",
        "Woreczek zamknij zapinką  odległości 6-8 cm od górnej części worka.",
        "Delikatnie obracając woreczek, równomiernie rozprowadź przyprawę na składnikach.",
        "Worek ułóż w naczyniu żaroodpornym, nie przykrywaj.",
        "Włóż do rozgrzanego piekarnika i piecz na najniższym poziomie przez około 60 min.",
        "Po wyjęciu z piekarnika, odetnij końcówkę woreczka z zapinką i przenieś zawartość do naczynia.",
      ],
    },
  ],
};

export default karkowkaZPiekarnika;
