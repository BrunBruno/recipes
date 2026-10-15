import { iFAT } from "../../ingredients/ingFat";
import { iGRN } from "../../ingredients/ingGrain";
import { iHRB } from "../../ingredients/ingHerb";
import { iLIQ } from "../../ingredients/ingLiquid";
import { iMET } from "../../ingredients/ingMeat";
import { iSAU } from "../../ingredients/ingSauce";
import { iSPC } from "../../ingredients/ingSpice";
import { iVEG } from "../../ingredients/ingVegetable";
import type { Recipe } from "../../types";

const portions = 4;
const mineFrite: Recipe = {
  name: "Mine Frite",
  type: "dinner",
  country: "MUS",
  images: [""],
  time: 35,
  portions: portions,
  taste: null,
  difficulty: null,
  ingredients: [
    {
      title: "Makaron i mięso",
      items: [
        { ing: iGRN.egg_noodles, amount: 400, kw: true },
        { ing: iMET.chicken_breast, amount: 400, kw: true },
        { ing: iMET.egg, amount: 3, unit: "szt" },
        { ing: iFAT.oil, amount: 3, unit: "lz" },
      ],
    },
    {
      title: "Warzywa",
      items: [
        { ing: iVEG.cabbage, amount: 150 },
        { ing: iVEG.carrot, amount: 2, unit: "szt" },
        { ing: iVEG.garlic, amount: 4, unit: "zbk" },
        { ing: iHRB.chives, amount: 50 },
        { ing: iHRB.bean_sprouts, amount: 100 },
      ],
    },
    {
      title: "Sosy i przyprawy",
      items: [
        { ing: iLIQ.soy_sauce, amount: 3, unit: "lz" },
        { ing: iSAU.oyster_sauce, amount: 2, unit: "lz" },
        { ing: iSAU.fish_sauce, amount: 1, unit: "lz" },
        { ing: iSPC.black_pepper },
        { ing: iSPC.salt },
      ],
    },
  ],
  steps: [
    {
      title: "Przygotowanie składników",
      steps: [
        "Kurczaka pokrój w cienkie paski, dopraw odrobiną sosu sojowego, soli i pieprzu.",
        "Makaron jajeczny ugotuj krótko al dente (według instrukcji), odcedź, przepłucz zimną wodą i wymieszaj z kilkoma kroplami oleju, aby się nie sklejał.",
        "Warzywa (kapustę, marchewkę) pokrój w słupki (julienne), czosnek posiekaj, a szczypiorek pokrój na mniejsze kawałki.",
      ],
    },
    {
      title: "Smażenie",
      steps: [
        "Rozgrzej patelnię lub wok z odrobiną oleju, wlej roztrzepane jajka i usmaż cienki omlet, a następnie zdejmij go, ostudź i pokrój w paski.",
        "Na mocno rozgrzanym oleju podsmaż kurczaka na złoty kolor, po czym zdejmij go z patelni.",
        "Wrzuć na patelnię czosnek oraz poszatkowane warzywa (kapustę, marchewkę) i smaż krótko na dużym ogniu, aby pozostały chrupiące.",
        "Dodaj na patelnię ugotowany makaron, usmażonego kurczaka, sos sojowy, sos ostrygowy oraz sos rybny.",
        "Całość energicznie mieszaj na dużym ogniu przez 2-3 minuty, na koniec wrzucając kiełki fasoli mung oraz szczypiorek.",
      ],
    },
    {
      title: "Podanie",
      steps: [
        "Przełóż gotowy makaron na talerze i udekoruj z wierzchu paskami domowego omletu.",
      ],
    },
  ],
  keyWords: ["makaron", "kurczak", "jajka", "warzywa", "smażone", "sos"],
};

export default mineFrite;