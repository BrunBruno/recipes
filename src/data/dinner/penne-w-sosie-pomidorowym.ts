import { iDIR } from "../../ingredients/ingDairy";
import { iGRN } from "../../ingredients/ingGrain";
import { iJAR } from "../../ingredients/ingJar";
import { iSPC } from "../../ingredients/ingSpice";
import type { Recipe } from "../../types";

const penneWSosiePomidorowym: Recipe = {
  name: "Penne w Sosie Pomidorowym",
  description: "",
  type: "dinner",
  images: [""],
  time: 0,
  portions: 0,
  executionDifficulty: null,
  ingredients: [
    {
      title: "",
      items: [
        { ing: iGRN.penne_pasta, amount: 300 },
        { ing: iJAR.tomato_passata, amount: 500 },
        { ing: iDIR.cream_30, amount: 200, unit: "ml" },
        { ing: iDIR.mozzarella, amount: 125 },
        { ing: iSPC.kamis_penne_fix, amount: 1, unit: "opak" },
      ],
    },
  ],
  steps: [],
};

export default penneWSosiePomidorowym;
