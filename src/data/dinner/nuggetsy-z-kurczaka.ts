import { iFAT } from "../../ingredients/ingFat";
import { iGRN } from "../../ingredients/ingGrain";
import { iMET } from "../../ingredients/ingMeat";
import { iSPC } from "../../ingredients/ingSpice";

import type { Recipe } from "../../types";
import { fryingFat } from "../../utils";

const nuggetsyZKurczaka: Recipe = {
  name: "Nuggetsy z Kurczaka",
  type: "dinner",
  images: [""],
  time: 30,
  portions: 3,
  taste: null,
  difficulty: null,
  ingredients: [
    {
      title: "Kurczak",
      items: [
        { ing: iMET.chicken_breast, amount: 400 },
        { ing: iGRN.flour, amount: 50 },
        { ing: iMET.egg, amount: 2, unit: "szt" },
        { ing: iGRN.breadcrumbs, amount: 100 },
        ...fryingFat(iFAT.oil, 500, "g", 0.2),
        { ing: iSPC.sweet_paprika },
        { ing: iSPC.black_pepper },
        { ing: iSPC.salt },
      ],
    },
  ],
  steps: [
    {
      title: "",
      steps: [
        "Pierś z kurczaka oczyść i pokrój na niewielkie, podobnej wielkości kawałki.",
        "Dopraw kurczaka solą, pieprzem oraz słodką papryką.",
        "Przygotuj trzy naczynia: jedno z mąką, drugie z roztrzepanymi jajkami, a trzecie z bułką tartą wymieszaną ze słodką papryką i odrobiną soli.",
        "Każdy kawałek kurczaka obtocz kolejno w mące, jajku i bułce tartej.",
        "Dokładnie dociśnij panierkę do mięsa.",
        "Rozgrzej olej na patelni lub w garnku.",
        "Smaż nuggetsy partiami przez około 3-4 minuty z każdej strony, aż panierka będzie złocista, a mięso całkowicie ugotowane.",
        "Usmażone nuggetsy odkładaj na papierowy ręcznik, aby odsączyć nadmiar tłuszczu.",
      ],
    },
  ],

  keyWords: ["kurczak"],
};

export default nuggetsyZKurczaka;
