import { iDIR } from "../../ingredients/ingDairy";
import { iFAT } from "../../ingredients/ingFat";
import { iGRN } from "../../ingredients/ingGrain";
import { iHRB } from "../../ingredients/ingHerb";
import { iMET } from "../../ingredients/ingMeat";
import { iSPC } from "../../ingredients/ingSpice";
import { iVEG } from "../../ingredients/ingVegetable";
import type { Recipe } from "../../types";

const portions = 4;

const plackiZSosemKurkowym: Recipe = {
  name: "Placki z Sosem Kurkowym",
  type: "snack",
  images: [""],
  time: 35,
  portions: portions,
  taste: null,
  difficulty: null,
  ingredients: [
    {
      title: "Placki ziemniaczane",
      items: [
        { ing: iVEG.potato, amount: 500 },
        { ing: iGRN.flour, amount: 0.5, unit: "lz" },
        { ing: iVEG.onion, amount: 0.5, unit: "szt" },
        { ing: iMET.egg, amount: 1, unit: "szt" },
        { ing: iFAT.oil, amount: 3, unit: "lz" },
        { ing: iSPC.salt },
      ],
    },
    {
      title: "Sos kurkowy",
      items: [
        { ing: iVEG.chanterelle, amount: 300 },
        { ing: iVEG.onion, amount: 0.5, unit: "szt" },
        { ing: iVEG.garlic, amount: 1, unit: "zbk" },
        { ing: iFAT.butter, amount: 1, unit: "lz" },
        { ing: iDIR.cream_30, amount: 125, unit: "ml" },
        { ing: iHRB.parsley, amount: 1, unit: "lzi" },
        { ing: iSPC.black_pepper },
        { ing: iSPC.salt },
      ],
    },
  ],
  steps: [
    {
      title: "Placki ziemniaczane",
      steps: [
        "Ziemniaki obierz i zetrzyj na tarce o małych oczkach.",
        "Odstaw starte ziemniaki na około 5-10 minut, a następnie dokładnie odciśnij je z nadmiaru soku.",
        "Do odciśniętych ziemniaków dodaj mąkę, drobno startą cebulę, jajko oraz dwie szczypty soli. Dokładnie wymieszaj.",
        "Rozgrzej patelnię o średnicy około 20-22 cm i wlej 2 łyżki oleju.",
        "Wyłóż całą masę ziemniaczaną na rozgrzany olej i rozprowadź ją równomiernie, tworząc placek.",
        "Smaż na średnim ogniu przez około 4 minuty, aż spód będzie złocisty.",
        "Przewróć placek na drugą stronę, dodaj pozostałą łyżkę oleju i smaż przez około 3 minuty.",
        "Gotowy placek przełóż na talerz.",
      ],
    },
    {
      title: "Sos kurkowy",
      steps: [
        "Kurki dokładnie umyj i osusz.",
        "Cebulę pokrój w drobną kosteczkę, a czosnek przeciśnij przez praskę.",
        "Na patelni roztop masło, dodaj cebulę i mieszając, zeszklij ją.",
        "Pod koniec smażenia dodaj drobno starty czosnek.",
        "Dodaj kurki i smaż przez około 7 minut.",
        "W międzyczasie dopraw sos solą oraz świeżo mielonym pieprzem.",
        "Wlej śmietankę, dodaj natkę pietruszki i dokładnie wymieszaj.",
        "Gotuj sos przez około 2 minuty, aż lekko zgęstnieje.",
        "Gotowy sos kurkowy wyłóż na placek ziemniaczany i podawaj na gorąco.",
      ],
    },
  ],
  keyWords: ["ziemniak", "grzyb"],
};

export default plackiZSosemKurkowym;
