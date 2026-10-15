import { iDIR } from "../../ingredients/ingDairy";
import { iFAT } from "../../ingredients/ingFat";
import { iGRN } from "../../ingredients/ingGrain";
import { iMET } from "../../ingredients/ingMeat";
import { iOTH } from "../../ingredients/ingOther";
import { iSPC } from "../../ingredients/ingSpice";
import type { Recipe } from "../../types";

const portions = 4;
const gofry: Recipe = {
  name: "Gofry",
  type: "dessert",
  images: [""],
  time: 25,
  portions: portions,
  taste: null,
  difficulty: null,
  ingredients: [
    {
      title: "",
      items: [
        { ing: iGRN.wheat_flour, amount: 1.5, unit: "szk" },
        { ing: iOTH.baking_powder, amount: 1.5, unit: "lzi" },
        { ing: iOTH.powdered_sugar, amount: 2, unit: "lzi" },
        { ing: iOTH.vanilla_sugar, amount: 1, unit: "lz" },
        { ing: iDIR.milk, amount: 350, unit: "ml" },
        { ing: iMET.egg, amount: 2, unit: "szt" },
        { ing: iFAT.oil, amount: 0.5, unit: "szk" },
        { ing: iSPC.salt },
      ],
    },
  ],
  steps: [
    {
      title: "",
      steps: [
        "Mąkę wsypać do miski, dodać proszek do pieczenia, szczyptę soli, cukier oraz cukier wanilinowy. Wszystko wymieszać.",
        "Dodać mleko, jajka oraz olej roślinny i zmiksować mikserem lub wymieszać rózgą na gładką masę. Ciasto można odstawić, aby odpoczęło na około 15 minut.",
        "Rozgrzać gofrownicę. Gofry piec na złoty kolor przez około 3-3,5 minuty lub zgodnie z instrukcją urządzenia, nakładając ciasto chochlą i rozprowadzając je po powierzchni.",
        "Gofry po upieczeniu odkładać na metalową kratkę, a przed podaniem posypać cukrem pudrem lub ulubionymi dodatkami.",
      ],
    },
  ],
  keyWords: ["deser", "jajka"],
  link: "https://www.kwestiasmaku.com/dania_dla_dwojga/gofry/gofry/przepis.html",
};

export default gofry;
