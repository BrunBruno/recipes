import { iDIR } from "../ingredients/ingDairy";
import { iFAT } from "../ingredients/ingFat";
import { iGRN } from "../ingredients/ingGrain";
import { iMET } from "../ingredients/ingMeat";
import { iSAU } from "../ingredients/ingSauce";
import type { Recipe } from "../types";

const wywinieteTosty: Recipe = {
  name: "Wywinięte Tosty",
  type: "snack",
  images: [""],
  time: 25,
  portions: 2,
  ingredients: [
    {
      title: "",
      items: [
        { ingredient: iGRN.toast_bread, amount: 8, unit: "kromka" },
        { ingredient: iDIR.yellow_cheese, amount: 8, unit: "plaster" },
        { ingredient: iMET.bacon_slices, amount: 8, unit: "plaster" },
        { ingredient: iSAU.mayonnaise, amount: 1, unit: "łyżeczka" },
        { ingredient: iSAU.ketchup, amount: 1, unit: "łyżeczka" },
        { ingredient: iFAT.oil, amount: 0.5, unit: "łyżeczka" },
      ],
    },
  ],
  steps: [
    {
      title: "",
      steps: [
        "Z kromek chleba tostowego odetnij skórki, a następnie rozwałkuj je cienko wałkiem.",
        "Każdą kromkę delikatnie posmaruj ketchupem i majonezem.",
        "Na każdej kromce ułóż plaster żółtego sera.",
        "Zwiń kromki ciasno w roladki.",
        "Każdą roladkę owiń w plaster boczku.",
        "Wierzch roladek posmaruj niewielką ilością oleju.",
        "Piecz w piekarniku nagrzanym do 180°C, aż uzyskają pożądany stopień zrumienienia.",
      ],
    },
  ],
  keyWords: ["pieczywo"],
};

export default wywinieteTosty;
