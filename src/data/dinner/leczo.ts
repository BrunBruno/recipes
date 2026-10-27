import { iBAK } from "../../ingredients/ingBakery";
import { iFAT } from "../../ingredients/ingFat";
import { iJAR } from "../../ingredients/ingJar";
import { iMET } from "../../ingredients/ingMeat";
import { iSPC } from "../../ingredients/ingSpice";
import { iVEG } from "../../ingredients/ingVegetable";
import type { Recipe } from "../../types";

const portions = 3;
const leczo: Recipe = {
  name: "Leczo",
  type: "dinner",
  country: "HUN",
  images: ["leczo"],
  time: 45,
  portions: portions,
  taste: 3,
  difficulty: 1,
  ingredients: [
    {
      title: "",
      items: [
        { ing: iMET.sausages, amount: 400, kw: true },
        { ing: iFAT.oil, amount: 2, unit: "lz" },
        { ing: iVEG.pepper_bell_red, amount: 1, unit: "szt" },
        { ing: iVEG.pepper_bell_yellow, amount: 1, unit: "szt" },
        { ing: iVEG.zucchini, amount: 1, unit: "szt" },
        { ing: iVEG.onion, amount: 2, unit: "szt" },
        { ing: iVEG.garlic, amount: 2, unit: "zbk" },
        { ing: iJAR.canned_tomatoes, amount: 400 },
        { ing: iBAK.baguette, amount: 1, unit: "szt" },
        { ing: iSPC.sweet_paprika, amount: 1, unit: "lz" },
        { ing: iSPC.chilli, amount: 0.5, unit: "lzi" },
        { ing: iSPC.black_pepper },
        { ing: iSPC.salt },
      ],
    },
  ],
  steps: [
    {
      title: "",
      steps: [
        "Parówki pokrój w plasterki, a cebulę w piórka lub kostkę.",
        "Papryki oczyść z gniazd nasiennych i pokrój w paski lub grubszą kostkę.",
        "Cukinię umyj, a jeśli jest duża, obierz i pokrój w kostkę (w razie potrzeby usuń miękki środek z pestkami).",
        "W dużym garnku lub głębokiej patelni rozgrzej olej i podsmaż kiełbasę wraz z cebulą, aż cebula się zeszkli, a kiełbasa lekko zarumieni.",
        "Dodaj przeciśnięty przez praskę czosnek oraz słodką paprykę w proszku i chilli, wymieszaj energicznie.",
        "Wrzuć pokrojoną paprykę oraz cukinię, podsmażaj całość przez około 5 minut, od czasu do czasu mieszając.",
        "Wlej pomidory z puszki, dopraw solą oraz pieprzem, przykryj garnek i duś na małym ogniu przez około 20-25 minut, aż wszystkie warzywa będą miękkie, a sos odpowiednio zgęstnieje.",
        "Podawaj z świeżą, pokrojoną bagietką.",
      ],
    },
  ],
  keyWords: ["warzywa", "kiełbasa", "duszone", "sos"],
};

export default leczo;
