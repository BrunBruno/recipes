import { iDIR } from "../../ingredients/ingDairy";
import { iFAT } from "../../ingredients/ingFat";
import { iGRN } from "../../ingredients/ingGrain";
import { iHRB } from "../../ingredients/ingHerb";
import { iJAR } from "../../ingredients/ingJar";
import { iLIQ } from "../../ingredients/ingLiquid";
import { iMET } from "../../ingredients/ingMeat";
import { iSPC } from "../../ingredients/ingSpice";
import type { Recipe } from "../../types";

const chickenPasta: Recipe = {
  name: "Chicken Pasta",
  description:
    "Makaron penne z kurczakiem w kremowym sosie z suszonymi pomidorami i bazylią.",
  type: "dinner",
  images: [""],
  time: 20,
  portions: 2,
  executionDifficulty: 1,
  ingredients: [
    {
      title: "",
      items: [
        { ing: iMET.chicken_breast, amount: 360 },
        { ing: iGRN.penne_pasta, amount: 200 },
        { ing: iFAT.olive, amount: 30, unit: "ml" },
        { ing: iJAR.sun_dried_tomatoes, amount: 20 },
        { ing: iDIR.cream_18, amount: 20 },
        { ing: iLIQ.water, amount: 200, unit: "ml" },
        { ing: iHRB.fresh_basil, amount: 10 },
        { ing: iSPC.knorr_chicken_pasta_fix, amount: 1, unit: "opak" },
      ],
    },
  ],
  steps: [
    {
      title: "",
      steps: [
        "Pokrój kurczaka na kawałki.",
        "Makaron ugotuj al dente zgodnie z instrukcją na opakowaniu.",
        "Rozgrzej oliwę i usmaż kurczaka.",
        "Dodaj śmietanę, wodę, suszone pomidory oraz zawartość saszetki Knorr Chicken Pasta Fix.",
        "Dokładnie wymieszaj do rozpuszczenia i gotuj 2–3 minuty, aż sos zgęstnieje.",
        "Dodaj ugotowany makaron i dokładnie wymieszaj z sosem.",
        "Przed podaniem posyp posiekaną świeżą bazylią.",
      ],
    },
  ],
};

export default chickenPasta;
