import { iMET } from "../../ingredients/ingMeat";
import { iVEG } from "../../ingredients/ingVegetable";
import { iDIR } from "../../ingredients/ingDairy";
import { iBAK } from "../../ingredients/ingBakery";
import { iSAU } from "../../ingredients/ingSauce";
import { iFAT } from "../../ingredients/ingFat";
import { iSPC } from "../../ingredients/ingSpice";
import type { Recipe } from "../../types";

const zapiekankiDomowe: Recipe = {
  name: "Zapiekanki Domowe",
  type: "snack",
  images: [""],
  time: 30,
  portions: 2,
  taste: null,
  difficulty: null,
  ingredients: [
    {
      title: "Zapiekanki",
      items: [
        { ing: iBAK.baguette, amount: 1, unit: "szt" },
        { ing: iVEG.mushrooms, amount: 250 },
        { ing: iVEG.onion, amount: 0.5, unit: "szt" },
        { ing: iMET.ham_slices, amount: 100 },
        { ing: iDIR.yellow_cheese, amount: 150 },
        { ing: iFAT.butter, amount: 1, unit: "lz" },
        { ing: iSAU.ketchup, amount: 4, unit: "lz" },
        { ing: iSPC.black_pepper },
        { ing: iSPC.salt },
      ],
    },
  ],
  steps: [
    {
      title: "Przygotowanie",
      steps: [
        "Pieczarki oczyść i pokrój w cienkie plasterki.",
        "Cebulę drobno posiekaj.",
        "Na patelni rozgrzej masło, dodaj cebulę i pieczarki.",
        "Smaż na średnim ogniu, aż pieczarki odparują większość wody i lekko się zarumienią.",
        "Dopraw solą i pieprzem.",
        "Bagietkę przekrój wzdłuż na dwie części.",
      ],
    },
    {
      title: "Zapiekanki",
      steps: [
        "Na każdej połówce bagietki rozłóż podsmażone pieczarki z cebulą.",
        "Dodaj pokrojoną w paski lub kostkę szynkę.",
        "Całość obficie posyp startym serem.",
        "Ułóż zapiekanki na blasze wyłożonej papierem do pieczenia.",
        "Piecz w piekarniku rozgrzanym do 200°C przez około 10-12 minut, aż bagietka będzie chrupiąca, a ser się roztopi i lekko zarumieni.",
        "Podawaj od razu z ketchupem.",
      ],
    },
  ],

  keyWords: ["szynka", "ser", "pieczywo"],
};

export default zapiekankiDomowe;
