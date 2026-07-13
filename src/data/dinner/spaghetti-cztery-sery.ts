import { iDIR } from "../../ingredients/ingDairy";
import { iGRN } from "../../ingredients/ingGrain";
import { iJAR } from "../../ingredients/ingJar";
import { iLIQ } from "../../ingredients/ingLiquid";
import { iNUT } from "../../ingredients/ingNut";
import { iSPC } from "../../ingredients/ingSpice";
import { iVEG } from "../../ingredients/ingVegetable";
import type { Recipe } from "../../types";

const spaghettiCzterySery: Recipe = {
  name: "Spaghetti Cztery Sery",
  type: "dinner",
  images: [
    "spaghetti-cztery-sery.jpg",
    "spaghetti-cztery-sery-2.jpg",
    "spaghetti-cztery-sery-3.jpg",
  ],
  time: 35,
  portions: 3,
  taste: 3,
  difficulty: 1,
  ingredients: [
    {
      title: "",
      items: [
        { ing: iGRN.spaghetti_pasta, amount: 300 },
        { ing: iDIR.cream_18, amount: 50, unit: "ml" },
        {
          type: "choice",
          options: [
            { ing: iVEG.broccoli, amount: 250 },
            { ing: iJAR.frozen_broccoli, amount: 250 },
          ],
          selected: 0,
        },
        { ing: iDIR.parmesan, amount: 50 },
        { ing: iNUT.peanuts, amount: 20 },
        { ing: iLIQ.water, amount: 250, unit: "ml" },
        { ing: iSPC.knorr_four_cheese_spaghetti_fix, amount: 1, unit: "opak" },
      ],
    },
  ],
  steps: [
    {
      title: "",
      steps: [
        "Ugotuj makaron spaghetti al dente zgodnie z instrukcją na opakowaniu.",
        "Brokuły podziel na małe różyczki i ugotuj na parze do miękkości.",
        "W rondelku wymieszaj zawartość opakowania Fix Spaghetti Cztery Sery z wodą i śmietaną.",
        "Gotuj sos przez 3-5 minut na małym ogniu, cały czas mieszając, aż zgęstnieje.",
        "Wodę możesz zastąpić w całości śmietaną, aby uzyskać bardziej kremowy sos.",
        "Ugotowane brokuły pokrój na mniejsze kawałki i dodaj do sosu.",
        "Połącz sos z ugotowanym makaronem i dokładnie wymieszaj.",
        "Podawaj od razu po przygotowaniu ze startym parmezanem lub z dodatkiem orzeszków ziemnych.",
      ],
    },
  ],
  keyWords: ["makaron", "ser", "sos", "warzywa"],
};

export default spaghettiCzterySery;
