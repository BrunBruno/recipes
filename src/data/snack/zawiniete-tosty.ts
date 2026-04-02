import { iDIR } from "../../ingredients/ingDairy";
import { iGRN } from "../../ingredients/ingGrain";
import { iMET } from "../../ingredients/ingMeat";
import { iSPC } from "../../ingredients/ingSpice";
import type { Recipe } from "../../types";

const zawinieteTosty: Recipe = {
  name: "Zawinięte Tosty",
  description:
    "Chrupiące roladki z tostów wypełnione serem i boczkiem, z delikatnym akcentem ketchupu i majonezu - szybka i smakowita przekąska.",
  type: "snack",
  images: ["zawiniete-tosty.jpg"],
  time: 25,
  portions: 2,
  ingredients: [
    {
      title: "",
      items: [
        { ingredient: iGRN.toast_bread, amount: 8, unit: "krom" },
        { ingredient: iDIR.yellow_cheese, amount: 8, unit: "plas" },
        { ingredient: iMET.bacon_slices, amount: 8, unit: "plas" },
        { ingredient: iSPC.mayonnaise, amount: 1, unit: "lzi" },
        { ingredient: iSPC.ketchup, amount: 1, unit: "lzi" },
        { ingredient: iMET.egg, amount: 1, unit: "szt" },
      ],
    },
  ],
  steps: [
    {
      title: "",
      steps: [
        "Z kromek chleba tostowego odetnij skórki, a następnie rozwałkuj je cienko wałkiem.",
        "Każdą kromkę delikatnie posmaruj ketchupem i majonezem.",
        "Na każdej kromce ułóż plasterek żółtego sera.",
        "Zwiń kromki ciasno w roladki.",
        "Każdą roladkę owiń w plaster boczku.",
        "Wierzch roladek posmaruj niewielką ilością rozbełtanego jajka.",
        "Piecz w piekarniku nagrzanym do 180°C, aż uzyskają pożądany stopień zrumienienia.",
      ],
    },
  ],
  keyWords: ["pieczywo", "xxx"],
};

export default zawinieteTosty;
