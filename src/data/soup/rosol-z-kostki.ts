import { iGRN } from "../../ingredients/ingGrain";
import { iLIQ } from "../../ingredients/ingLiquid";
import { iSPC } from "../../ingredients/ingSpice";
import type { Recipe } from "../../types";

const rosolZKostki: Recipe = {
  name: "Rosół z Kostki",
  type: "soup",
  cookingMethods: ["boiled"],
  images: [""],
  time: 15,
  portions: 4,
  taste: 3,
  difficulty: 1,
  ingredients: [
    {
      title: "",
      items: [
        { ing: iLIQ.water, amount: 1500, unit: "ml" },
        { ing: iSPC.knorr_bouillon_cube, amount: 2, unit: "szt" },
        { ing: iGRN.thin_pasta, amount: 150 },
      ],
    },
  ],
  steps: [
    {
      title: "",
      steps: [
        "W garnku zagotuj wodę i dodaj kostki rosołowe.",
        "Dokładnie wymieszaj, aż kostki całkowicie się rozpuszczą.",
        "Makaron ugotuj osobno zgodnie z instrukcją na opakowaniu.",
        "Przełóż ugotowany makaron do talerzy i zalej gorącym rosołem.",
        "Podawaj od razu.",
      ],
    },
  ],
  keyWords: ["zupa", "makaron"],
};

export default rosolZKostki;
