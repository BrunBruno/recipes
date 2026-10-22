import { iBAK } from "../../ingredients/ingBakery";
import { iDIR } from "../../ingredients/ingDairy";
import { iFAT } from "../../ingredients/ingFat";
import { iFRT } from "../../ingredients/ingFruit";
import { iJAR } from "../../ingredients/ingJar";
import { iMET } from "../../ingredients/ingMeat";
import { iSAU } from "../../ingredients/ingSauce";
import { iSPC } from "../../ingredients/ingSpice";
import { iVEG } from "../../ingredients/ingVegetable";
import type { Recipe } from "../../types";

const portions = 6;

const chimichangi: Recipe = {
  name: "Chimichangi",
  type: "snack",
  country: "MEX",
  images: [""],
  time: 45,
  portions: portions,
  taste: null,
  difficulty: null,
  ingredients: [
    {
      title: "Chimichangi",
      items: [
        { ing: iMET.beef_ground, amount: 500, kw: true },
        { ing: iDIR.cheddar_cheese, amount: 250, kw: true },
        { ing: iVEG.red_onion, amount: 0.5, unit: "szt" },
        { ing: iJAR.pinto_beans, amount: 400 },
        { ing: iBAK.tortilla, amount: 6, unit: "szt", kw: true },
        { ing: iFAT.oil, amount: 2, unit: "lz" },
        { ing: iSPC.cumin, amount: 0.5, unit: "lzi" },
        { ing: iSPC.granulated_garlic, amount: 0.5, unit: "lzi" },
        { ing: iSPC.granulated_onion, amount: 0.5, unit: "lzi" },
        { ing: iSPC.cayenne_pepper, amount: 0.5, unit: "lzi" },
        { ing: iSPC.chilli, amount: 0.5, unit: "lzi" },
        { ing: iSPC.black_pepper, amount: 0.3, unit: "lzi" },
        { ing: iSPC.salt, amount: 0.5, unit: "lzi" },
      ],
    },
    {
      title: "Guacamole",
      items: [
        { ing: iFRT.avocado, amount: 2, unit: "szt" },
        { ing: iFRT.lime, amount: 1, unit: "szt" },
        { ing: iVEG.red_onion, amount: 0.25, unit: "szt" },
        { ing: iSPC.chilli },
        { ing: iSPC.black_pepper },
        { ing: iSPC.salt },
      ],
    },
    {
      title: "Majonez chipotle",
      items: [
        { ing: iSAU.mayonnaise, amount: 150 },
        { ing: iJAR.chipotle_peppers, amount: 30 },
        { ing: iFRT.lime, amount: 0.5, unit: "szt" },
        { ing: iSPC.granulated_garlic },
        { ing: iSPC.salt },
      ],
    },
  ],
  steps: [
    {
      title: "Chimichangi",
      steps: [
        "Przygotować mieszankę przypraw: wymieszać kumin, granulowany czosnek, granulowaną cebulę, sól, pieprz, pieprz cayenne oraz chilli.",
        "Ser cheddar zetrzeć na grubych oczkach tarki, a czerwoną cebulę pokroić w drobną kostkę.",
        "Na patelni z łyżką oleju podsmażyć cebulę, dodać mieloną wołowinę i smażyć przez około 2-3 minuty, ciągle mieszając.",
        "Dodać przygotowane przyprawy do mięsa z cebulą, wymieszać i smażyć kolejne 3-4 minuty, aż mięso będzie całkowicie usmażone.",
        "Dodać odsączoną fasolę pinto i podgrzewać przez około 5-6 minut, rozgniatając ją częściowo tłuczkiem.",
        "Na każdej tortilli ułożyć porcję farszu i starty ser cheddar, a następnie szczelnie zwinąć w kształt burrito.",
        "Rozgrzać olej na patelni lub we frytownicy do około 175-180°C i smażyć chimichangi z każdej strony przez około 2-3 minuty, aż staną się złociste i chrupiące.",
        "Po usmażeniu odsączyć z nadmiaru tłuszczu i podawać z guacamole oraz majonezem chipotle.",
      ],
    },
    {
      title: "Guacamole",
      steps: [
        "Awokado przekroić na pół, usunąć pestki i przełożyć miąższ do miski.",
        "Rozgnieść awokado widelcem na lekko grudkowatą pastę.",
        "Czerwoną cebulę pokroić w bardzo drobną kostkę i dodać do awokado.",
        "Dodać sok z limonki, sól, pieprz oraz chilli. Dokładnie wymieszać i doprawić do smaku.",
      ],
    },
    {
      title: "Majonez chipotle",
      steps: [
        "Papryczki chipotle drobno posiekać lub zblendować na pastę.",
        "W miseczce wymieszać majonez z papryczkami chipotle.",
        "Dodać sok z limonki, granulowany czosnek oraz sól.",
        "Dokładnie wymieszać i odstawić na 10-15 minut, aby smaki się połączyły.",
      ],
    },
  ],
  keyWords: ["mięso", "wołowina", "ser", "smażone", "sos"],
};

export default chimichangi;
