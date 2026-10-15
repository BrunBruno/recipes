import { iBAK } from "../../ingredients/ingBakery";
import { iDIR } from "../../ingredients/ingDairy";
import { iFAT } from "../../ingredients/ingFat";
import { iHRB } from "../../ingredients/ingHerb";
import { iLIQ } from "../../ingredients/ingLiquid";
import { iMET } from "../../ingredients/ingMeat";
import { iSPC } from "../../ingredients/ingSpice";
import { iVEG } from "../../ingredients/ingVegetable";
import type { Recipe } from "../../types";

const portions = 2;
const kebabGemuse: Recipe = {
  name: "Kebab Gemüse",
  type: "snack",
  country: "DEU",
  images: [""],
  time: 35,
  portions: portions,
  taste: null,
  difficulty: null,
  ingredients: [
    {
      title: "Mięso i pieczywo",
      items: [
        { ing: iMET.chicken_breast, amount: 400, kw: true },
        { ing: iBAK.pita, amount: 2, unit: "szt", kw: true },
        { ing: iFAT.oil, amount: 2, unit: "lz" },
        { ing: iSPC.gyros_spice, amount: 1, unit: "lz" },
      ],
    },
    {
      title: "Warzywa",
      items: [
        { ing: iVEG.red_bell_pepper, amount: 1, unit: "szt" },
        { ing: iVEG.zucchini, amount: 0.5, unit: "szt" },
        { ing: iVEG.carrot, amount: 1, unit: "szt" },
        { ing: iVEG.lettuce, amount: 2, unit: "lst" },
        { ing: iVEG.red_onion, amount: 0.5, unit: "szt" },
        { ing: iDIR.feta, amount: 100, kw: true },
        { ing: iLIQ.lemon_juice, amount: 1, unit: "lzi" },
      ],
    },
    {
      title: "Sosy",
      items: [
        { ing: iDIR.yogurt_natural, amount: 150, kw: true },
        { ing: iVEG.garlic, amount: 3, unit: "zbk", kw: true },
        { ing: iHRB.parsley, amount: 1, unit: "lz" },
        { ing: iHRB.fresh_mint, amount: 0.5, unit: "lz" },
        { ing: iLIQ.lemon_juice, amount: 1, unit: "lzi" },
        { ing: iSPC.black_pepper },
        { ing: iSPC.salt },
      ],
    },
  ],
  steps: [
    {
      title: "Przygotowanie sosów",
      steps: [
        "Podziel naturalny jogurt na dwie równe porcje w osobnych miseczkach.",
        "Do pierwszej miski dodaj przeciśnięty przez praskę czosnek (2 ząbki), odrobinę soli oraz pieprzu, a następnie dokładnie wymieszaj, tworząc sos czosnkowy.",
        "Do drugiej miski dodaj posiekaną natkę pietruszki, miętę, sok z limonki/cytryny oraz ostatni ząbek czosnku, tworząc orzeźwiający sos ziołowy.",
      ],
    },
    {
      title: "Przygotowanie mięsa i warzyw",
      steps: [
        "Piersi z kurczaka pokrój w cienkie paski, dopraw przyprawą gyros i odstaw na 10 minut.",
        "Marchewkę, cukinię oraz czerwoną paprykę pokrój w podłużne słupki.",
        "Czerwoną cebulę pokrój w piórka, sałatę poszatkuj, a ser feta pokrój w kostkę lub pokrusz.",
      ],
    },
    {
      title: "Smażenie",
      steps: [
        "Na patelni rozgrzej odrobinę oleju i podsmaż przygotowane warzywa (marchewkę, cukinię, paprykę), aż lekko zmiękną, ale pozostaną chrupiące. Na koniec skrop je sokiem z cytryny.",
        "Na drugiej patelni lub w woku mocno rozgrzej olej i usmaż zamarynowane paski kurczaka na złoty i chrupiący kolor.",
      ],
    },
    {
      title: "Składanie kebaba",
      steps: [
        "Bułki do kebaba lekko podpiecz, a następnie natnij wzdłuż, tworząc kieszonkę.",
        "Wnętrze bułek posmaruj przygotowanym domowym sosem czosnkowym oraz ziołowym.",
        "Wypełnij wnętrze chrupiącym kurczakiem, opiekanymi warzywami, sałatą oraz czerwoną cebulą.",
        "Na wierzch wyłóż pokruszony ser feta i opcjonalnie posyp dodatkowymi świeżymi ziołami.",
      ],
    },
  ],
  keyWords: [
    "kurczak",
    "mięso",
    "warzywa",
    "ser",
    "pieczywo",
    "sos",
    "fast food",
    "smażone",
  ],
};

export default kebabGemuse;
