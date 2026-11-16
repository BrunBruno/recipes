import { iFAT } from "../../ingredients/ingFat";
import { iHRB } from "../../ingredients/ingHerb";
import { iJAR } from "../../ingredients/ingJar";
import { iLIQ } from "../../ingredients/ingLiquid";
import { iOTH } from "../../ingredients/ingOther";
import { iSPC } from "../../ingredients/ingSpice";
import { iVEG } from "../../ingredients/ingVegetable";
import type { Recipe } from "../../types";

const portions = 6;
const kapustaZGrzybami: Recipe = {
  name: "Kapusta z Grzybami",
  type: "salad",
  images: [""],
  time: 90,
  portions: portions,
  taste: null,
  difficulty: null,
  ingredients: [
    {
      title: "",
      items: [
        { ing: iJAR.sauerkraut, amount: 1000, kw: true },
        { ing: iVEG.dried_mushrooms, amount: 50, kw: true },
        { ing: iVEG.onion, amount: 300, unit: "g" },
        { ing: iVEG.carrot, amount: 100, unit: "g" },
        { ing: iFAT.oil, amount: 5, unit: "lz" },
        { ing: iLIQ.water, amount: 875, unit: "ml" },
        { ing: iHRB.bay_leaf, amount: 2, unit: "szt" },
        { ing: iSPC.allspice, amount: 3, unit: "szt" },
        { ing: iSPC.black_pepper, amount: 0.5, unit: "lzi" },
        { ing: iOTH.sugar, amount: 1, unit: "lzi" },
      ],
    },
  ],
  steps: [
    {
      title: "Przygotowanie składników",
      steps: [
        "Suszone grzyby zalej wodą i pozostaw do namoczenia.",
        "Cebulę obierz i pokrój w kostkę.",
        "Marchewkę obierz i zetrzyj na tarce o grubych oczkach.",
        "Kapustę kiszoną odciśnij z nadmiaru soku i w razie potrzeby pokrój na mniejsze kawałki.",
      ],
    },
    {
      title: "Przygotowanie kapusty",
      steps: [
        "W dużym garnku rozgrzej olej.",
        "Dodaj cebulę i smaż, aż się zeszkli.",
        "Dodaj marchewkę i smaż przez kilka minut.",
        "Dodaj kapustę kiszoną oraz namoczone grzyby.",
        "Wlej wodę, dodaj liście laurowe, ziele angielskie i pieprz.",
        "Całość dokładnie wymieszaj.",
      ],
    },
    {
      title: "Gotowanie",
      steps: [
        "Gotuj kapustę pod przykryciem na małym ogniu przez około 60-75 minut, od czasu do czasu mieszając.",
        "W razie potrzeby dolej odrobinę wody, aby kapusta się nie przypaliła.",
        "Pod koniec gotowania dodaj cukier i dokładnie wymieszaj.",
        "Gotuj jeszcze chwilę, aż wszystkie składniki będą miękkie, a smaki dobrze się połączą.",
        "Podawaj gorącą jako samodzielne danie lub dodatek do innych potraw.",
      ],
    },
  ],
  keyWords: ["grzyby"],
};

export default kapustaZGrzybami;
