import { iFAT } from "../../ingredients/ingFat";
import { iFRT } from "../../ingredients/ingFruit";
import { iHRB } from "../../ingredients/ingHerb";
import { iJAR } from "../../ingredients/ingJar";
import { iLIQ } from "../../ingredients/ingLiquid";
import { iMET } from "../../ingredients/ingMeat";
import { iSPC } from "../../ingredients/ingSpice";
import { iVEG } from "../../ingredients/ingVegetable";
import type { Recipe } from "../../types";

const bigos: Recipe = {
  name: "Bigos",
  type: "salad",
  images: [""],
  time: 480,
  portions: 15,
  taste: null,
  difficulty: null,
  ingredients: [
    {
      title: "",
      items: [
        { ing: iMET.pork_shoulder, amount: 500 },
        { ing: iMET.beef_shoulder, amount: 300 },
        { ing: iMET.pork_loin, amount: 500 },
        { ing: iMET.sausage, amount: 180 },
        { ing: iMET.bacon_block, amount: 500 },
        { ing: iMET.smoked_bacon, amount: 150 },
        { ing: iMET.brewed_bacon, amount: 150 },
        { ing: iFAT.lard, amount: 50 },
        { ing: iVEG.cabbage, amount: 1000 },
        { ing: iJAR.sauerkraut, amount: 2000 },
        { ing: iVEG.onion, amount: 2, unit: "szt" },
        { ing: iVEG.dried_mushrooms, amount: 80 },
        { ing: iFRT.dried_plum, amount: 50 },
        { ing: iLIQ.water, amount: 500, unit: "ml" },
        { ing: iLIQ.dry_red_wine, amount: 1, unit: "szk" },
        { ing: iHRB.bay_leaf, amount: 5, unit: "szt" },
        { ing: iSPC.allspice, amount: 5, unit: "ziar" },
        { ing: iSPC.black_pepper, amount: 1, unit: "lzi" },
        { ing: iSPC.clove, amount: 1, unit: "ziar" },
        { ing: iSPC.juniper_berries, amount: 2, unit: "ziar" },
      ],
    },
  ],
  steps: [
    {
      title: "",
      steps: [
        "Suszone grzyby zalej zimną wodą i odstaw na kilka godzin, najlepiej na całą noc.",
        "Odcedź grzyby, zachowując wodę z moczenia. Grzyby posiekaj w paski.",
        "Kapustę kiszoną odciśnij z nadmiaru wody i posiekaj.",
        "Świeżą kapustę posiekaj, sparz wrzątkiem i dodaj do garnka razem z kapustą kiszoną.",
        "Dodaj wodę i gotuj kapustę pod przykryciem na małym ogniu przez około godzinę.",
        "Mięso pokrój w mniejsze kawałki.",
        "Na smalcu podsmaż wszystkie rodzaje mięsa przez około 40 minut, mieszając od czasu do czasu.",
        "Do ugotowanej kapusty dodaj przyprawy, posiekane grzyby oraz wodę z moczenia grzybów.",
        "Dodaj podsmażone mięso i dokładnie wymieszaj.",
        "Boczek parzony pokrój w kostkę i podsmaż na patelni.",
        "Dodaj posiekaną cebulę, a po kilku minutach boczek wędzony i smaż jeszcze około 10 minut.",
        "Zawartość patelni dodaj do garnka z bigosem.",
        "Dodaj pokrojoną kiełbasę oraz posiekane suszone śliwki.",
        "Całość dokładnie wymieszaj i duś na bardzo małym ogniu przez około 4 godziny, mieszając co jakiś czas.",
        "Pod koniec gotowania dodaj czerwone wino i gotuj jeszcze przez chwilę.",
        "Bigos najlepiej smakuje po ponownym podgrzaniu następnego dnia.",
      ],
    },
  ],
  keyWords: ["kiełbasa", "boczek", "mięso"],
};

export default bigos;
