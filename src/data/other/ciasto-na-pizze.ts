import { iFAT } from "../../ingredients/ingFat";
import { iGRN } from "../../ingredients/ingGrain";
import { iOTH } from "../../ingredients/ingOther";
import { iSPC } from "../../ingredients/ingSpice";
import type { Recipe } from "../../types";

const ciastoNaPizze: Recipe = {
  name: "Ciasto na Pizze",
  description:
    "Sprężyste i aromatyczne ciasto na pizzę, łatwe do formowania i idealne jako baza pod ulubione dodatki.",
  type: "other",
  images: [""],
  time: 60,
  portions: 1,
  ingredients: [
    {
      title: "",
      items: [
        { ingredient: iGRN.flour, amount: 250 },
        { ingredient: iFAT.olive, amount: "1-2", unit: "lz" },
        { ingredient: iOTH.water, amount: 150, unit: "ml" },
        { ingredient: iOTH.instant_yeast, amount: 6 },
        { ingredient: iSPC.salt },
      ],
    },
  ],
  steps: [
    {
      title: "",
      steps: [
        "Przesiej mąkę przez sitko do miski.",
        "Drożdże dodaj do letniej wody i wymieszaj, odstaw na kilka minut, aby się rozpuściły.",
        "Do mąki dodaj szczyptę soli, oliwę oraz wodę z drożdżami i wymieszaj wszystko łyżką.",
        "Wyrob ciasto dłońmi przez około 10 minut, aż będzie miękkie, sprężyste i nie będzie lepiło się do rąk.",
        "Podsyp ciasto odrobiną mąki i przykryj. Odstaw na około 30 minut, aby podrosło.",
        "Po wyrośnięciu lekko posyp mąką i uformuj kształt pizzy.",
        "Ułóż ciasto na formie do pizzy i rozciągnij na całej powierzchni.",
        "Rozłóż ulubione składniki na cieście.",
        "Nagrzej piekarnik do 250°C (grzanie górne i dolne).",
        "Włóż pizzę na najniższą półkę piekarnika i piecz przez około 6 minut.",
      ],
    },
  ],
  keyWords: ["ciasto"],
};

export default ciastoNaPizze;
