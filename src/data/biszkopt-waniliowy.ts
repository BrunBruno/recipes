import { iDIR } from "../ingredients/ingDairy";
import { iFAT } from "../ingredients/ingFat";
import { iGRN } from "../ingredients/ingGrain";
import { iMET } from "../ingredients/ingMeat";
import { iOTH } from "../ingredients/ingOther";
import { iSPC } from "../ingredients/ingSpice";
import type { Recipe } from "../types";

const biszkoptWaniliowy: Recipe = {
  name: "Biszkopt Waniliowy",
  description:
    "Delikatny i puszysty biszkopt waniliowy o lekkiej strukturze, idealny jako baza do tortów, ciast przekładanych i deserów.",
  type: "other",
  images: [""],
  time: 50,
  portions: 1,
  ingredients: [
    {
      title: "Lista składników",
      items: [
        { ingredient: iGRN.flour, amount: 90 },
        { ingredient: iMET.egg, amount: 3, unit: "szt" },
        { ingredient: iFAT.oil, amount: 30 },
        { ingredient: iDIR.milk, amount: 30 },
        { ingredient: iOTH.sugar, amount: 90 },
        { ingredient: iOTH.vanilla_extract, amount: 2, unit: "ml" },
        { ingredient: iSPC.salt, amount: 1 },
      ],
    },
  ],
  steps: [
    {
      title: "",
      steps: [
        "Jajka rozdziel na żółtka i białka.",
        "Do żółtek dodaj ekstrakt waniliowy oraz sól i wymieszaj.",
        "Białka ubij na pianę, dodaj 1/3 cukru i dalej miksuj.",
        "Dodaj resztę cukru i miksuj do uzyskania gładkiej konsystencji.",
        "Wlej żółtka do masy i delikatnie wymieszaj.",
        "Mąkę przesiej przez sito i wmieszaj ręcznie od dołu do góry.",
        "W osobnej misce wymieszaj olej z mlekiem.",
        "Dodaj niewielką ilość ciasta do mieszanki płynnej i wymieszaj.",
        "Przełóż całość do reszty ciasta i dokładnie, ale delikatnie wymieszaj.",
        "Formę wyłóż papierem do pieczenia i wlej ciasto.",
        "Uderz formą o blat, aby usunąć pęcherzyki powietrza.",
        "Piecz w nagrzanym piekarniku w 170°C przez 30 minut.",
        "Po upieczeniu natychmiast wyjmij biszkopt z formy.",
      ],
    },
  ],
  keyWords: ["ciasto", "biszkopt"],
};

export default biszkoptWaniliowy;
