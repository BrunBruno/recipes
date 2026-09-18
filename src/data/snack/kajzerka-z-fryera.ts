import { iBAK } from "../../ingredients/ingBakery";
import { iDIR } from "../../ingredients/ingDairy";
import { iJAR } from "../../ingredients/ingJar";
import { iMET } from "../../ingredients/ingMeat";
import { iSAU } from "../../ingredients/ingSauce";
import { iSPC } from "../../ingredients/ingSpice";
import { iVEG } from "../../ingredients/ingVegetable";
import type { Recipe } from "../../types";

const kajzerkaZFryera: Recipe = {
  name: "Kajzerki z Fryera",
  type: "snack",
  images: [""],
  time: 25,
  portions: 4,
  taste: null,
  difficulty: null,
  ingredients: [
    {
      title: "Kajzerki z kurczakiem",
      items: [
        { ing: iBAK.kaiser_roll, amount: 2, unit: "szt" },
        { ing: iMET.chicken_breast, amount: 150 },
        { ing: iJAR.canned_corn, amount: 70 },
        { ing: iDIR.yellow_mozzarella, amount: 60 },
        { ing: iSPC.gyros_spice, amount: 5 },
      ],
    },
    {
      title: "Kajzerki z szynką",
      items: [
        { ing: iBAK.kaiser_roll, amount: 2, unit: "szt" },
        { ing: iMET.ham_slices, amount: 80 },
        { ing: iVEG.mushrooms, amount: 120 },
        { ing: iDIR.yellow_mozzarella, amount: 60 },
      ],
    },
    {
      title: "Sos czosnkowy",
      items: [
        { ing: iDIR.yogurt_natural, amount: 100 },
        { ing: iSAU.mayonnaise, amount: 40 },
        { ing: iVEG.garlic, amount: 1, unit: "zbk" },
      ],
    },
  ],
  steps: [
    {
      title: "Kajzerki z kurczakiem",
      steps: [
        "Kurczaka pokrój w drobną kostkę, wymieszaj z przyprawą gyros i usmaż.",
        "Dodaj kukurydzę i wymieszaj.",
        "Kajzerki przekrój od góry i lekko wydrąż środek.",
        "Wypełnij kajzerki farszem z kurczaka i kukurydzy.",
        "Posyp startym serem.",
      ],
    },
    {
      title: "Kajzerki z szynką",
      steps: [
        "Pieczarki pokrój w plasterki i podsmaż, aż odparuje z nich nadmiar wody.",
        "Dodaj pokrojoną szynkę i smaż jeszcze chwilę.",
        "Kajzerki przekrój od góry i lekko wydrąż środek.",
        "Wypełnij kajzerki farszem z szynki i pieczarek.",
        "Posyp startym serem.",
      ],
    },
    {
      title: "Sos czosnkowy",
      steps: [
        "Wymieszaj jogurt z majonezem.",
        "Dodaj przeciśnięty czosnek i dokładnie wymieszaj.",
      ],
    },
    {
      title: "Frytkownica beztłuszczowa",
      steps: [
        "Umieść wszystkie kajzerki w koszu frytkownicy.",
        "Piecz w temperaturze 180°C przez około 6-8 minut, aż kajzerki będą chrupiące, a ser się roztopi.",
        "Podawaj z sosem czosnkowym.",
      ],
    },
  ],
  keyWords: ["pieczywo", "air fryer", "mięso", "bułki"],
};

export default kajzerkaZFryera;
