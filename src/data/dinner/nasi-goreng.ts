import { iFAT } from "../../ingredients/ingFat";
import { iGRN } from "../../ingredients/ingGrain";
import { iLIQ } from "../../ingredients/ingLiquid";
import { iMET } from "../../ingredients/ingMeat";
import { iSAU } from "../../ingredients/ingSauce";
import { iSPC } from "../../ingredients/ingSpice";
import { iVEG } from "../../ingredients/ingVegetable";
import type { Recipe } from "../../types";

const portions = 2;
const nasiGoreng: Recipe = {
  name: "Nasi Goreng",
  type: "dinner",
  country: "IDN",
  images: [""],
  time: 30,
  portions: portions,
  taste: null,
  difficulty: null,
  ingredients: [
    {
      title: "Główne",
      items: [
        { ing: iGRN.rice, amount: 300, kw: true },
        { ing: iMET.chicken_breast, amount: 200, kw: true },
        { ing: iMET.egg, amount: 2, unit: "szt", kw: true },
        { ing: iVEG.onion, amount: 1, unit: "szt" },
        { ing: iVEG.garlic, amount: 2, unit: "zbk" },
        { ing: iVEG.leek, amount: 0.5, unit: "szt" },
        { ing: iFAT.oil, amount: 2, unit: "lz" },
      ],
    },
    {
      title: "Sos i przyprawy",
      items: [
        { ing: iLIQ.soy_sauce, amount: 2, unit: "lz" },
        { ing: iSAU.fish_sauce, amount: 1, unit: "lz" },
        { ing: iSPC.chilli, amount: 0.5, unit: "lzi" },
        { ing: iSPC.black_pepper },
        { ing: iSPC.salt },
      ],
    },
  ],
  steps: [
    {
      title: "Przygotowanie składników",
      steps: [
        "Ugotowany wcześniej ryż najlepiej schłodzić w lodówce (najlepiej sprawdzi się ryż z poprzedniego dnia).",
        "Pierś z kurczaka oczyść i pokrój w niedużą kostkę. Cebulę posiekaj, czosnek przeciśnij przez praskę, a por pokrój w półplasterki.",
      ],
    },
    {
      title: "Smażenie",
      steps: [
        "Rozgrzej olej na patelni lub w woku i usmaż kurczaka na złoty kolor, a następnie zdejmij go z patelni.",
        "Na tę samą patelnię wrzuć cebulę oraz czosnek i podsmaż do zeszklenia.",
        "Dodaj ugotowany ryż, zwiększ ogień i smaż całość przez kilka minut, energicznie mieszając.",
        "Wlej sos sojowy oraz sos rybny, dodaj usmażonego kurczaka, por oraz chili. Wymieszaj i smaż jeszcze przez 3-4 minuty.",
        "Na osobnej patelni usmaż jajka sadzone.",
      ],
    },
    {
      title: "Podanie",
      steps: [
        "Nałóż porcję aromatycznego ryżu na talerz, a na wierzchu każdego dania ułóż jedno jajko sadzone.",
      ],
    },
  ],
  keyWords: ["ryż", "kurczak", "jajka", "smażone", "sos"],
};

export default nasiGoreng;
