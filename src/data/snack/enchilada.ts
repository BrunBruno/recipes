import { iBAK } from "../../ingredients/ingBakery";
import { iDIR } from "../../ingredients/ingDairy";
import { iFAT } from "../../ingredients/ingFat";
import { iFRT } from "../../ingredients/ingFruit";
import { iGRN } from "../../ingredients/ingGrain";
import { iHRB } from "../../ingredients/ingHerb";
import { iJAR } from "../../ingredients/ingJar";
import { iLIQ } from "../../ingredients/ingLiquid";
import { iMET } from "../../ingredients/ingMeat";
import { iOTH } from "../../ingredients/ingOther";
import { iSPC } from "../../ingredients/ingSpice";
import { iVEG } from "../../ingredients/ingVegetable";
import type { Recipe } from "../../types";

const portions = 6;
const enchilada: Recipe = {
  name: "Enchiladas",
  type: "snack",
  country: "MEX",
  images: [""],
  time: 55,
  portions: portions,
  taste: null,
  difficulty: null,
  ingredients: [
    {
      title: "Główne",
      items: [
        {
          type: "choice",
          options: [
            { ing: iBAK.tortilla_mini, amount: 12, unit: "szt" },
            { ing: iBAK.taco_shell_corn, amount: 12, unit: "szt" },
          ],
          selected: 0,
        },
        { ing: iMET.chicken_breast, amount: 500, kw: true },
        { ing: iJAR.canned_red_beans, amount: 500 },
        { ing: iDIR.cheddar_cheese, amount: 200, kw: true },
        { ing: iDIR.mozzarella, amount: 100, kw: true },
        { ing: iJAR.canned_corn, amount: 200 },
        { ing: iVEG.onion, amount: 1, unit: "szt" },
        { ing: iHRB.oregano, amount: 0.5, unit: "lzi" },
        { ing: iSPC.black_pepper, amount: 0.5, unit: "lzi" },
        { ing: iSPC.salt, amount: 0.5, unit: "lzi" },
      ],
    },
    {
      title: "Sos",
      items: [
        { ing: iLIQ.chicken_broth, amount: 250, unit: "ml" },
        {
          type: "choice",
          options: [
            { ing: iFAT.olive_oil, amount: 2, unit: "lz" },
            { ing: iFAT.avocado_oil, amount: 2, unit: "lz" },
          ],
          selected: 0,
        },
        { ing: iGRN.wheat_flour, amount: 2, unit: "lz" },
        { ing: iSPC.chilli, amount: 1, unit: "lzi" },
        { ing: iSPC.sweet_paprika, amount: 1, unit: "lzi" },
        { ing: iOTH.sugar, amount: 1, unit: "lzi" },
        { ing: iVEG.dried_garlic, amount: 0.5, unit: "lzi" },
        { ing: iHRB.oregano, amount: 0.5, unit: "lzi" },
        { ing: iSPC.cumin, amount: 0.5, unit: "lzi" },
      ],
    },
    {
      title: "Dodatki",
      items: [
        { ing: iVEG.pepper_chili },
        { ing: iHRB.fresh_coriander },
        { ing: iVEG.tomato_cherry },
        { ing: iDIR.sour_cream },
        { ing: iFRT.avocado },
        { ing: iVEG.onion_red },
      ],
    },
  ],
  steps: [
    {
      title: "Przygotowanie sosu",
      steps: [
        "W małym rondelku rozgrzej olej z mąką pszenną, aż zacznie się pienić i powstanie jasna zasmażka.",
        "Dodaj chili w proszku, słodką paprykę, cukier, suszony czosnek, oregano oraz kumin, a następnie powoli wlewaj bulion, cały czas mieszając.",
        "Zredukuj ogień i gotuj sos przez 5-10 minut, aż zgęstnieje i lekko odparuje, po czym dopraw go w razie potrzeby i odstaw do przestudzenia.",
      ],
    },
    {
      title: "Przygotowanie farszu i składanie",
      steps: [
        "Pierś z kurczaka oczyść i pokrój w drobną kostkę, dopraw solą, pieprzem oraz oregano, a następnie podsmaż na oleju przez około 10 minut i odstaw do przestudzenia.",
        "Na tej samej patelni podsmaż posiekaną cebulę, aż się zeszkli.",
        "Każdy placek tortilli posmaruj przygotowanym sosem, wyłóż na środek porcję kurczaka, zeszkloną cebulę, odsączoną fasolę, kukurydzę oraz starty ser cheddar i mozzarellę.",
        "Zawiń ciasno placki w rulony i ułóż je obok siebie w nasmarowanej wcześniej formie do zapiekania.",
        "Wierzch posmaruj resztą sosu i posyp pozostałą częścią sera.",
      ],
    },
    {
      title: "Pieczenie",
      steps: [
        "Wstaw formę do piekarnika rozgrzanego do 185°C (grzanie góra-dół) na środkową półkę i piecz przez około 20 minut, aż ser ładnie się roztopi i zarumieni.",
        "Podawaj udekorowane świeżą kolendrą, pomidorkami i ulubionymi dodatkami.",
      ],
    },
  ],
  keyWords: ["kurczak", "mięso", "ser", "pieczone"],
  link: "https://aniagotuje.pl/przepis/enchilada",
};

export default enchilada;
