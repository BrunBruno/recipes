import { iDIR } from "../../ingredients/ingDairy";
import { iFAT } from "../../ingredients/ingFat";
import { iGRN } from "../../ingredients/ingGrain";
import { iJAR } from "../../ingredients/ingJar";
import { iLIQ } from "../../ingredients/ingLiquid";
import { iOTH } from "../../ingredients/ingOther";
import { iSPC } from "../../ingredients/ingSpice";
import type { Recipe } from "../../types";

const portions = 3;
const pomidorowaZabielana: Recipe = {
  name: "Pomidorowa Zabielana",
  type: "soup",
  images: ["pomidorowa-zabielana", "pomidorowa-zabielana-2"],
  time: 15,
  portions: portions,
  taste: 3,
  difficulty: 2,
  ingredients: [
    {
      title: "",
      items: [
        { ing: iGRN.bow_tie_pasta, amount: portions * 50, kw: true },
        { ing: iLIQ.rosol, amount: 700, kw: true },
        { ing: iJAR.tomato_paste, amount: 2, unit: "lzi", kw: true },
        { ing: iLIQ.water, amount: 100 },
        { ing: iFAT.butter, amount: 1, unit: "lz" },
        {
          type: "choice",
          options: [
            { ing: iDIR.cream_30, amount: 80 },
            { ing: iDIR.cream_18, amount: 80 },
          ],
          selected: 0,
        },
        { ing: iOTH.sugar, amount: 2, unit: "lzi" },
        { ing: iLIQ.maggi },
        { ing: iSPC.black_pepper },
      ],
    },
  ],
  steps: [
    {
      title: "",
      steps: [
        "Ugotuj makaron kokardki osobno według instrukcji na opakowaniu.",
        "Zagotuj rosół w garnku.",
        "Rozmieszaj koncentrat pomidorowy w 100 ml wody, a następnie dodaj do rosołu i dokładnie wymieszaj.",
        "Dodaj łyżkę masła i gotuj kilka minut na małym ogniu.",
        "Dodaj cukier oraz śmietanę 30% i wymieszaj.",
        "Jeśli zupa jest za gęsta, dolej trochę rosołu.",
        "Dopraw do smaku solą i pieprzem.",
        "Na koniec dodaj posiekaną pietruszkę lub koper, odrobinę bazylii oraz ugotowany makaron.",
      ],
    },
  ],
  keyWords: ["zupa", "makaron"],
};

export default pomidorowaZabielana;
