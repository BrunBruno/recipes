import { iDIR } from "../ingredients/ingDairy";
import { iGRN } from "../ingredients/ingGrain";
import { iMET } from "../ingredients/ingMeat";
import { iSPC } from "../ingredients/ingSpice";
import type { Recipe } from "../types";

const spaghettiCarbonara: Recipe = {
  name: "Spaghetti Carbonara",
  type: "dinner",
  images: [""],
  time: 30,
  portions: 5,
  ingredients: [
    {
      title: "",
      items: [
        { ingredient: iGRN.spaghetti_pasta, amount: "5 × 100" },
        { ingredient: iDIR.parmigiano_reggiano, amount: 100 },
        { ingredient: iMET.bacon_block, amount: 300 },
        { ingredient: iMET.egg, amount: 8 },
        { ingredient: iSPC.black_pepper },
        { ingredient: iSPC.salt },
      ],
    },
  ],
  steps: [
    {
      title: "",
      steps: [
        "Pokrój boczek w drobną kostkę lub paseczki.",
        "Umieść mięso na zimnej patelni, włącz średni ogień i podsmaż, aż tłuszcz się wytopi, a mięso zarumieni. Odstaw patelnię z palnika.",
        "Oddziel białka od żółtek. Białka możesz wykorzystać do bezy. Żółtka wymieszaj dokładnie w jednolitą masę.",
        "Zetrzyj ser Parmigiano Reggiano na drobnych oczkach. Część sera wymieszaj z masą jajeczną, dodaj świeżo zmielony pieprz. Jeśli używasz surowego boczku - dodaj szczyptę soli.",
        "Ugotuj makaron spaghetti al dente w dużej ilości osolonej wody (ok. 5 litrów wody na 500 g makaronu). Zachowaj szklankę wody z gotowania.",
        "Odcedź makaron i przełóż od razu na patelnię z boczkiem i tłuszczem. Makaron powinien być mokry.",
        "Zamieszaj makaron z boczkiem, a następnie wlej masę jajeczną z serem, energicznie mieszając. Nie podgrzewaj patelni, aby jajka się nie ścięły.",
        "Podawaj natychmiast, każdą porcję posyp resztą startego sera i świeżo zmielonym pieprzem. W razie potrzeby dodaj odrobinę wody z gotowania makaronu, aby sos był kremowy.",
      ],
    },
  ],
  keyWords: ["makaron", "spaghetti", "mięso"],
};

export default spaghettiCarbonara;
