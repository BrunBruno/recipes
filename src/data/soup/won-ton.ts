import { iMET } from "../../ingredients/ingMeat";
import { iVEG } from "../../ingredients/ingVegetable";
import { iFAT } from "../../ingredients/ingFat";
import { iLIQ } from "../../ingredients/ingLiquid";
import { iHRB } from "../../ingredients/ingHerb";
import { iSPC } from "../../ingredients/ingSpice";

import type { Recipe } from "../../types";
import { iGRN } from "../../ingredients/ingGrain";

const portions = 6;
const zupaWonton: Recipe = {
  name: "Won Ton",
  type: "soup",
  images: [""],
  time: 195,
  portions: portions,
  taste: null,
  difficulty: null,
  ingredients: [
    {
      title: "Bulion",
      items: [
        { ing: iMET.chicken_quarters, amount: 2, unit: "szt" },
        { ing: iMET.beef_shank, amount: 150 },
        { ing: iLIQ.water, amount: 3000, unit: "ml" },
        { ing: iVEG.ginger, amount: 1, unit: "szt" },
        { ing: iVEG.carrot, amount: 2, unit: "szt" },
        { ing: iVEG.parsley_root, amount: 1, unit: "szt" },
        { ing: iVEG.celery_root, amount: 0.25, unit: "szt" },
        { ing: iVEG.leek, amount: 0.5, unit: "szt" },
        { ing: iVEG.garlic, amount: 2, unit: "zbk" },
        { ing: iLIQ.soy_sauce, amount: 3, unit: "lz" },
        { ing: iFAT.sesame_oil, amount: 2, unit: "lz" },
        { ing: iSPC.allspice, amount: 5, unit: "ziar" },
        { ing: iSPC.black_pepper, amount: 5, unit: "ziar" },
        { ing: iSPC.salt, amount: 1, unit: "lzi" },
      ],
    },

    {
      title: "Pierożki wonton",
      items: [
        { ing: iGRN.wonton_dough, amount: 30, unit: "szt" },
        { ing: iMET.ground_pork, amount: 200 },
        { ing: iVEG.carrot, amount: 70 },
        { ing: iMET.egg, amount: 1, unit: "szt" },
        { ing: iVEG.ginger, amount: 0.25, unit: "szt" },
        { ing: iVEG.garlic, amount: 2, unit: "zbk" },
        { ing: iHRB.chives, amount: 2, unit: "lz" },
        { ing: iHRB.coriander, amount: 1, unit: "lz" },
        { ing: iFAT.sesame_oil, amount: 1, unit: "lzi" },
        { ing: iLIQ.soy_sauce, amount: 1, unit: "lz" },
        { ing: iGRN.corn_flour, amount: 1, unit: "lz" },
        { ing: iSPC.black_pepper, amount: 2, unit: "lzi" },
        { ing: iSPC.salt, amount: 1, unit: "lzi" },
      ],
    },

    {
      title: "Do podania",
      items: [
        { ing: iMET.egg, amount: 3, unit: "szt" },
        { ing: iVEG.pak_choy, amount: 3, unit: "szt" },
        { ing: iHRB.chives, amount: 2, unit: "lz" },
        { ing: iHRB.coriander, amount: 2, unit: "lz" },
        { ing: iVEG.chili_pepper, amount: 1, unit: "szt" },
      ],
    },
  ],

  steps: [
    {
      title: "Bulion",
      steps: [
        "Mięso włóż do garnka i zalej wodą.",
        "Doprowadź do wrzenia, następnie zlej wodę razem z szumowinami. Opłucz garnek i mięso, po czym zalej świeżą wodą.",
        "Dodaj pieprz i ziele angielskie. Gotuj bulion na bardzo małym ogniu, tak aby delikatnie się gotował, ale mocno nie bulgotał.",
        "Po około godzinie dodaj marchewkę, pietruszkę, seler, por, imbir oraz czosnek.",
        "Gotuj całość przez około 2-4 godziny, aż wołowina będzie bardzo miękka.",
        "Wyjmij mięso i warzywa z bulionu.",
        "Dopraw bulion jasnym sosem sojowym, solą oraz olejem sezamowym. Sos sojowy i olej dodawaj stopniowo, dostosowując smak.",
      ],
    },

    {
      title: "Farsz do wontonów",
      steps: [
        "Marchewkę zetrzyj na drobnych oczkach.",
        "Imbir i czosnek drobno posiekaj lub zetrzyj.",
        "Szczypiorek i kolendrę drobno posiekaj.",
        "Wymieszaj mięso mielone, marchewkę, jajko, pieprz, imbir, czosnek, szczypiorek, kolendrę, olej sezamowy, sos sojowy i sól.",
        "Mąkę kukurydzianą wymieszaj z łyżką wody i dodaj do farszu. Całość dokładnie wymieszaj.",
      ],
    },

    {
      title: "Wontony",
      steps: [
        "Na każdy arkusz ciasta nałóż około 1 łyżeczkę farszu.",
        "Zwilż wodą brzegi ciasta i złóż wontony, dokładnie zlepiając brzegi.",
        "Zagotuj wodę w osobnym garnku.",
        "Delikatnie włóż wontony do wrzątku i zmniejsz ogień.",
        "Gotuj przez około 4-5 minut, delikatnie mieszając, aby pierożki nie przywarły do dna.",
      ],
    },

    {
      title: "Podanie",
      steps: [
        "Ugotuj jajka na półtwardo i przekrój je na pół.",
        "Pak choy ugotuj lub krótko podgotuj.",
        "Pokrój szczypiorek i posiekaj kolendrę.",
        "Nałóż wontony do misek i dodaj pak choy oraz połówki jajek.",
        "Zalej gorącym bulionem.",
        "Posyp szczypiorkiem, kolendrą i ostrą papryczką.",
        "Podawaj od razu.",
      ],
    },
  ],

  keyWords: ["zupa"],
};

export default zupaWonton;
