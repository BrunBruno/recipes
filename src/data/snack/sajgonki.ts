import { iFAT } from "../../ingredients/ingFat";
import { iGRN } from "../../ingredients/ingGrain";
import { iHRB } from "../../ingredients/ingHerb";
import { iLIQ } from "../../ingredients/ingLiquid";
import { iMET } from "../../ingredients/ingMeat";
import { iOTH } from "../../ingredients/ingOther";
import { iSAU } from "../../ingredients/ingSauce";
import { iVEG } from "../../ingredients/ingVegetable";
import type { Recipe } from "../../types";
import { fryingFat } from "../../utils";

const portions = 4;
const sajgonki: Recipe = {
  name: "Sajgonki",
  type: "snack",
  country: "VNM",
  images: [""],
  time: 60,
  portions: portions,
  taste: null,
  difficulty: null,
  ingredients: [
    {
      title: "Sajgonki",
      items: [
        { ing: iGRN.rice_paper, amount: 140, kw: true },
        { ing: iMET.pork_ground_with_beef, amount: 350, kw: true },
        { ing: iGRN.thin_rice_noodles, amount: 60 },
        { ing: iFAT.oil, amount: 2, unit: "lz" },
        { ing: iVEG.onion, amount: 0.5, unit: "szt" },
        { ing: iVEG.carrot, amount: 0.5, unit: "szt" },
        { ing: iVEG.dried_mun_mushrooms, amount: 10 },
        { ing: iVEG.ginger, amount: 20 },
        { ing: iVEG.garlic, amount: 2, unit: "zbk" },
        { ing: iLIQ.soy_sauce, amount: 2, unit: "lz" },
        { ing: iSAU.fish_sauce, amount: 2, unit: "lz" },
        { ing: iMET.egg, amount: 1, unit: "szt" },
        ...fryingFat(iFAT.oil, 250, "ml", 0.3),
        { ing: iHRB.fresh_coriander },
        { ing: iHRB.parsley },
        { ing: iHRB.chives },
        { ing: iHRB.fresh_mint },
      ],
    },
    {
      title: "Sos",
      items: [
        { ing: iLIQ.water, amount: 3, unit: "lz" },
        { ing: iOTH.sugar, amount: 3, unit: "lz" },
        { ing: iVEG.chili_pepper, amount: 1, unit: "szt" },
        { ing: iVEG.garlic, amount: 1, unit: "zbk" },
        { ing: iLIQ.lime_juice, amount: 3, unit: "lz" },
        { ing: iLIQ.soy_sauce, amount: 2, unit: "lz" },
      ],
    },
  ],
  steps: [
    {
      title: "Przygotowanie farszu",
      steps: [
        "Grzyby mun zalej wrzątkiem, przykryj i odstaw na 20 minut, a następnie odcedź i drobno posiekaj[cite: 1].",
        "Cienki makaron ryżowy ugotuj zgodnie z instrukcją na opakowaniu, odcedź dokładnie i posiekaj[cite: 1].",
        "Na patelni z dwiema łyżkami oleju podsmaż posiekaną cebulę przez około 5 minut, dodaj startą marchewkę i smaż kolejne 5 minut[cite: 1].",
        "Dodaj mielone mięso i rozbijaj je widelcem lub łyżką przez 5-7 minut[cite: 1].",
        "Dodaj przeciśnięty czosnek, starty imbir, posiekane grzyby mun, ugotowany makaron ryżowy, sos sojowy oraz sos rybny, po czym smaż jeszcze przez 10 minut na małym ogniu[cite: 1].",
        "Przed wyłączeniem ognia wmieszaj posiekaną kolendrę, natkę pietruszki, szczypiorek oraz listki mięty[cite: 1].",
        "Do całkowicie przestudzonego farszu możesz wbić jajko, aby stał się bardziej zwarty[cite: 1].",
      ],
    },
    {
      title: "Zawijanie sajgonek",
      steps: [
        "Pojedyncze arkusze papieru ryżowego namaczaj przez chwilę w szerokiej misce z bardzo ciepłą wodą, aż staną się elastyczne i przezroczyste[cite: 1].",
        "Układaj namoczony papier na wilgotnej desce, nakładaj porcję farszu, zagnij boki do środka i zwiń ciasno w rulonik[cite: 1].",
        "Gotowe sajgonki odkładaj na natłuszczoną deskę w odstępach, aby się nie sklejały[cite: 1].",
      ],
    },
    {
      title: "Smażenie i sos",
      steps: [
        "Rozgrzej patelnię z dużą ilością oleju (do około 175°C) i smaż sajgonki partiami po 1,5-2 minuty z każdej strony na złoty kolor[cite: 1].",
        "Przygotuj sos: w miseczce wymieszaj gorącą wodę z cukrem, aż się rozpuści, a następnie dodaj sos sojowy, sok z limonki, przeciśnięty czosnek oraz bardzo drobno posiekaną papryczkę chili[cite: 1].",
        "Podawaj gorące lub przestudzone sajgonki, maczając je w przygotowanym sosie[cite: 1].",
      ],
    },
  ],
  keyWords: ["mięso", "smażone", "sos"],
  link: "https://aniagotuje.pl/przepis/sajgonki",
};

export default sajgonki;
