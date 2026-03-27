import { iDIR } from "../ingredients/ingDairy";
import { iFAT } from "../ingredients/ingFat";
import { iGRN } from "../ingredients/ingGrain";
import { iMET } from "../ingredients/ingMeat";
import { iOTH } from "../ingredients/ingOther";
import type { Recipe } from "../types";

const biszkoptCzekoladowy: Recipe = {
  name: "Biszkopt Czekoladowy",
  description:
    "Lekki i puszysty biszkopt czekoladowy o intensywnym smaku kakao, idealny jako baza do tortów i ciast przekładanych kremem.",
  type: "other",
  images: [""],
  time: 50,
  portions: 1,
  ingredients: [
    {
      title: "Lista składników",
      items: [
        { ingredient: iGRN.flour, amount: 75 },
        { ingredient: iMET.egg, amount: 3, unit: "szt" },
        { ingredient: iFAT.oil, amount: 30 },
        { ingredient: iDIR.milk, amount: 40 },
        { ingredient: iOTH.sugar, amount: 90 },
        { ingredient: iOTH.cocoa, amount: 15 },
      ],
    },
  ],
  steps: [
    {
      title: "",
      steps: [
        "Jajka rozdziel na żółtka i białka.",
        "Białka ubij na sztywną pianę, dodaj 1/3 cukru i dalej miksuj.",
        "Dodaj resztę cukru i miksuj do uzyskania gładkiej, lśniącej konsystencji.",
        "Dodawaj żółtka jedno po drugim, dokładnie mieszając.",
        "Mąkę przesiej przez sito i delikatnie wmieszaj ręcznie od dołu do góry.",
        "W osobnej misce wymieszaj olej, zimne mleko i kakao.",
        "Dodaj niewielką ilość ciasta do mieszanki kakaowej i wymieszaj.",
        "Przełóż całość do reszty ciasta i mieszaj do uzyskania jednolitego koloru.",
        "Formę wyłóż papierem do pieczenia i wlej ciasto.",
        "Uderz formą o blat, aby usunąć pęcherzyki powietrza.",
        "Piecz w nagrzanym piekarniku w 170°C przez 30 minut.",
        "Po upieczeniu natychmiast wyjmij biszkopt z formy.",
      ],
    },
  ],
  keyWords: ["ciasto", "biszkopt"],
};

export default biszkoptCzekoladowy;
