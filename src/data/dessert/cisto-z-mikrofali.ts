import { iDIR } from "../../ingredients/ingDairy";
import { iFAT } from "../../ingredients/ingFat";
import { iGRN } from "../../ingredients/ingGrain";
import { iMET } from "../../ingredients/ingMeat";
import { iNUT } from "../../ingredients/ingNut";
import { iOTH } from "../../ingredients/ingOther";
import { iSNK } from "../../ingredients/ingSnack";
import type { Recipe } from "../../types";

const portions = 1;
const ciastoZMikrofali: Recipe = {
  name: "Ciasto z Mikrofali",
  type: "dessert",
  images: [""],
  time: 5,
  portions: portions,
  taste: null,
  difficulty: null,
  ingredients: [
    {
      title: "",
      items: [
        { ing: iGRN.flour_type_450, amount: 60 },
        { ing: iOTH.sugar, amount: 20 },
        { ing: iNUT.cocoa, amount: 15 },
        { ing: iOTH.baking_powder, amount: 0.5, unit: "lzi" },
        { ing: iFAT.oil, amount: 1, unit: "lz" },
        { ing: iMET.egg, amount: 1, unit: "szt" },
        { ing: iDIR.milk, amount: 70, unit: "ml" },
        { ing: iSNK.nutella, amount: 1, unit: "lzi" },
        { ing: iOTH.powdered_sugar, amount: 0.5, unit: "lzi" },
      ],
    },
  ],
  steps: [
    {
      title: "",
      steps: [
        "Wymieszaj w misce mąkę, cukier, kakao oraz proszek do pieczenia.",
        "Do suchych składników dodaj jajko, mleko oraz olej. Dokładnie wymieszaj.",
        "Do kubeczka przełóż 1/3 czekoladowej masy, dodaj łyżeczkę nutelli i przykryj ją pozostałą ilością ciasta.",
        "Kubek wstaw do mikrofalówki ustawionej na najwyższą moc i piecz przez około 2-3 minuty (w zależności od mocy mikrofalówki).",
      ],
    },
  ],
  keyWords: ["ciasto", "deser"],
  link: "https://wszystkiegoslodkiego.pl/przepisy/ciasta-czekoladowe/czekoladowe-ciasto-z-mikrofali",
};

export default ciastoZMikrofali;
