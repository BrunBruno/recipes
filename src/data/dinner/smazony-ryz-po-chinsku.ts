import { iFAT } from "../../ingredients/ingFat";
import { iGRN } from "../../ingredients/ingGrain";
import { iLIQ } from "../../ingredients/ingLiquid";
import { iMET } from "../../ingredients/ingMeat";
import { iSPC } from "../../ingredients/ingSpice";
import { iVEG } from "../../ingredients/ingVegetable";
import type { Recipe } from "../../types";

const smazonyRyzPoChinsku: Recipe = {
  name: "Smażony Ryż po Chińsku",
  type: "dinner",
  cookingMethods: ["fried"],
  images: [""],
  time: 30,
  portions: 3,
  taste: null,
  difficulty: null,
  ingredients: [
    {
      title: "",
      items: [
        { ing: iMET.chicken_breast, amount: 400 },
        { ing: iGRN.rice, amount: 100 },
        { ing: iVEG.carrot, amount: 2, unit: "szt" },
        { ing: iVEG.leek, amount: 50 },
        { ing: iLIQ.water, amount: 50, unit: "ml" },
        { ing: iFAT.oil, amount: 2, unit: "lz" },
        { ing: iSPC.knorr_chinese_fired_rice_fix, amount: 1, unit: "opak" },
      ],
    },
  ],
  steps: [
    {
      title: "",
      steps: [
        "Ryż ugotuj z odrobiną soli zgodnie z instrukcją na opakowaniu.",
        "Kurczaka oraz warzywa pokrój w paseczki.",
        "Na rozgrzanym oleju podsmaż kurczaka i warzywa.",
        "Przesuń składniki na brzeg patelni, zostawiając wolne miejsce na środku.",
        "Wbij jajko w wolne miejsce i smaż, mieszając, aż się zetnie.",
        "Połącz jajko z pozostałymi składnikami i dokładnie wymieszaj.",
        "Dodaj ugotowany ryż i wymieszaj całość.",
        "Fix wymieszaj z zimną wodą, dodaj do dania i dokładnie połącz składniki.",
        "Gotuj jeszcze około 5 minut, od czasu do czasu mieszając.",
      ],
    },
  ],
  keyWords: ["mięso", "kurczak", "ryż", "warzywa"],
};

export default smazonyRyzPoChinsku;
