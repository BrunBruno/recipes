import { iGRN } from "../../ingredients/ingGrain";
import { iHRB } from "../../ingredients/ingHerb";
import { iJAR } from "../../ingredients/ingJar";
import { iLIQ } from "../../ingredients/ingLiquid";
import { iSPC } from "../../ingredients/ingSpice";
import type { Recipe } from "../../types";

const portions = 3;
const pomidorowa: Recipe = {
  name: "Pomidorowa",
  type: "soup",
  images: ["pomidorowa", "pomidorowa-2", "pomidorowa-3"],
  time: 15,
  portions: portions,
  taste: 4,
  difficulty: 2,
  ingredients: [
    {
      title: "",
      items: [
        { ing: iGRN.thin_pasta, amount: portions * 50, kw: true },
        { ing: iLIQ.rosol, amount: 700, kw: true },
        { ing: iJAR.tomato_puree, amount: 200, kw: true },
        { ing: iHRB.parsley, amount: 10 },
        { ing: iHRB.basil },
        { ing: iSPC.black_pepper },
        { ing: iSPC.salt },
      ],
    },
  ],
  steps: [
    {
      title: "",
      steps: [
        "Ugotuj makaron nitki osobno według instrukcji na opakowaniu.",
        "Zagotuj rosół w garnku.",
        "Dodaj przecier pomidorowy i dokładnie wymieszaj.",
        "Dodaj łyżkę masła i gotuj kilka minut na małym ogniu.",
        "Jeśli zupa jest za gęsta, dolej trochę rosołu.",
        "Dopraw do smaku solą i pieprzem.",
        "Na koniec dodaj posiekaną pietruszkę lub koper oraz odrobinę bazylii i ugotowany makaron.",
      ],
    },
  ],
  keyWords: ["zupa", "makaron"],
};

export default pomidorowa;
