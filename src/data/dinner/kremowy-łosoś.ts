import { iDIR } from "../../ingredients/ingDairy";
import { iFAT } from "../../ingredients/ingFat";
import { iFSH } from "../../ingredients/ingFish";
import { iHRB } from "../../ingredients/ingHerb";
import { iLIQ } from "../../ingredients/ingLiquid";
import { iSPC } from "../../ingredients/ingSpice";
import type { Recipe } from "../../types";

const kremowyLosos: Recipe = {
  name: "Kremowy Łosoś",
  type: "dinner",
  images: [""],
  time: 0,
  portions: 3,
  taste: null,
  difficulty: null,
  ingredients: [
    {
      title: "",
      items: [
        { ing: iFSH.salmon_fillet, amount: 400 },
        { ing: iDIR.cream_18, amount: 125, unit: "ml" },
        { ing: iLIQ.water, amount: 125, unit: "ml" },
        { ing: iFAT.liquid_butter, amount: 25 },
        { ing: iLIQ.lemon_juice, amount: 15, unit: "ml" },
        { ing: iSPC.knorr_creamy_salmon_fix, amount: 1, unit: "opak" },
        { ing: iHRB.parsley },
      ],
    },
  ],
  steps: [
    {
      title: "",
      steps: [
        "Nagrzej piekarnik do 180°C z termoobiegiem lub 200°C bez termoobiegu.",
        "W garnku wymieszaj 125 ml wody, 25g roztopionego masła, 125 ml śmietany i zawartość fixu.",
        "Dla orzeźwiającego smaku dodaj odrobinę soku z cytryny do sosu.",
        "Zagotuj sos i gotuj mieszając przez dwie minuty.",
        "Połóż łososia w naczyniu żaroodpornym, zalej sosem i piecz przez 20-25 minut.",
        "Danie serwuj posypane świeżą natką pietruszki.",
      ],
    },
  ],
  keyWords: ["ryba", "pieczone"],
};

export default kremowyLosos;
