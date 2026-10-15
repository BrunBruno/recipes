import { iDIR } from "../../ingredients/ingDairy";
import { iFAT } from "../../ingredients/ingFat";
import { iMET } from "../../ingredients/ingMeat";
import { iSPC } from "../../ingredients/ingSpice";
import { iVEG } from "../../ingredients/ingVegetable";
import type { Recipe } from "../../types";

const portions = 2;
const jajecznicaPoWlosku: Recipe = {
  name: "Jajecznica po Włosku",
  type: "breakfast",
  country: "ITA",
  images: [""],
  time: 15,
  portions: portions,
  taste: null,
  difficulty: null,
  ingredients: [
    {
      title: "",
      items: [
        { ing: iMET.egg, amount: 4, unit: "szt", kw: true },
        { ing: iDIR.hard_cheese, amount: 20, kw: true },
        { ing: iVEG.spinach, amount: 50 },
        { ing: iVEG.sun_dried_tomatoes, amount: 20 },
        { ing: iFAT.clarified_butter, amount: 1, unit: "lzi" },
        { ing: iSPC.black_pepper },
        { ing: iSPC.salt },
      ],
    },
  ],
  steps: [
    {
      title: "",
      steps: [
        "Suszone pomidory pokroić na mniejsze paski, a szpinak w razie potrzeby umyć i osuszyć.",
        "Na patelni rozgrzać masło klarowane, wrzucić szpinak i smażyć przez około 1-2 minuty, aż lekko zwiędnie.",
        "Dodać pokrojone suszone pomidory i krótko podsmażyć całość.",
        "W miseczce roztrzepać jajka widelcem, doprawić solą oraz pieprzem, a następnie wlać na patelnię do warzyw.",
        "Smażyć na małym ogniu, delikatnie mieszając, aż jajka osiągną ulubiony stopień ścięcia.",
        "Przed podaniem posypać startym twardym serem.",
      ],
    },
  ],
  keyWords: ["jajka", "ser", "warzywa"],
};

export default jajecznicaPoWlosku;
