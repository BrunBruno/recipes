import { iBAK } from "../../ingredients/ingBakery";
import { iDIR } from "../../ingredients/ingDairy";
import { iFAT } from "../../ingredients/ingFat";
import { iLIQ } from "../../ingredients/ingLiquid";
import { iMET } from "../../ingredients/ingMeat";
import { iSAU } from "../../ingredients/ingSauce";
import { iSPC } from "../../ingredients/ingSpice";
import { iVEG } from "../../ingredients/ingVegetable";
import type { Recipe } from "../../types";

const portions = 2;
const salatkaCezar: Recipe = {
  name: "Sałatka Cezar",
  type: "salad",
  country: "MEX",
  images: [""],
  time: 25,
  portions: portions,
  taste: null,
  difficulty: null,
  ingredients: [
    {
      title: "Kurczak i grzanki",
      items: [
        { ing: iMET.chicken_breast, amount: 300, kw: true },
        { ing: iBAK.wheat_bread, amount: 2, unit: "krom", kw: true },
        { ing: iFAT.olive_oil, amount: 2, unit: "lz" },
        { ing: iSPC.granulated_garlic, amount: 0.5, unit: "lzi" },
        { ing: iSPC.black_pepper },
        { ing: iSPC.salt },
      ],
    },
    {
      title: "Sałatka",
      items: [
        { ing: iVEG.lettuce_romaine, amount: 1, unit: "szt", kw: true },
        { ing: iDIR.parmesan, amount: 50, kw: true },
      ],
    },
    {
      title: "Sos",
      items: [
        { ing: iSAU.mayonnaise, amount: 3, unit: "lz" },
        { ing: iVEG.garlic, amount: 1, unit: "zbk" },
        { ing: iLIQ.lemon_juice, amount: 1, unit: "lzi" },
        { ing: iSAU.worcestershire_sauce, amount: 1, unit: "lzi" },
        { ing: iDIR.parmesan, amount: 20 },
      ],
    },
  ],
  steps: [
    {
      title: "Przygotowanie grzanek i kurczaka",
      steps: [
        "Piersi z kurczaka oczyść, dopraw solą, pieprzem oraz odrobiną oliwy, a następnie usmaż na patelni na złoty kolor z obu stron i pokrój w paski.",
        "Chleb pokrój w kostkę, wymieszaj z odrobiną oliwy, solą i granulowanym czosnkiem, a następnie podpiecz na suchej patelni lub w piekarniku na chrupkie grzanki.",
      ],
    },
    {
      title: "Przygotowanie sosu",
      steps: [
        "W miseczce wymieszaj majonez, przeciśnięty przez praskę czosnek, sok z cytryny, sos Worcestershire oraz starty drobno parmezan, tworząc gładki sos.",
      ],
    },
    {
      title: "Składanie sałatki",
      steps: [
        "Umytą i osuszoną sałatę rzymską pokrój lub połam na mniejsze kawałki i ułóż na półmisku.",
        "Na sałacie rozłóż przygotowane paski kurczaka oraz chrupiące grzanki.",
        "Całość polej sosem i obficie posyp startym parmezanem.",
      ],
    },
  ],
  keyWords: ["kurczak", "ser", "pieczywo", "sos"],
};

export default salatkaCezar;
