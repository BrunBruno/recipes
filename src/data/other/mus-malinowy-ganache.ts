import { iDIR } from "../../ingredients/ingDairy";
import { iFRT } from "../../ingredients/ingFruit";
import { iGRN } from "../../ingredients/ingGrain";
import { iJAR } from "../../ingredients/ingJar";
import { iOTH } from "../../ingredients/ingOther";
import type { Recipe } from "../../types";

const musMalinowyGanache: Recipe = {
  name: "Mus Malinowy Ganache",
  description:
    "Delikatny mus malinowy z białą czekoladą na bazie śmietanki 36%, idealny do tortów i deserów. Połączenie owoców i kremowej ganache tworzy elegancki, owocowy krem.",
  type: "other",
  images: [""],
  time: 25,
  portions: 1,
  executionDifficulty: null,
  ingredients: [
    {
      title: "",
      items: [
        { ingredient: iDIR.cream_36, amount: 170 },
        { ingredient: iFRT.raspberries, amount: 200 },
        { ingredient: iJAR.lemon_juice, amount: 5, unit: "ml" },
        { ingredient: iGRN.white_chocolate, amount: 100 },
        { ingredient: iOTH.gelatin, amount: 6 },
        { ingredient: iOTH.water, amount: 30, unit: "ml" },
      ],
    },
  ],
  steps: [
    {
      title: "",
      steps: [
        "Żelatynę zalej zimną wodą i odstaw na około 10 minut do napęcznienia.",
        "Maliny umieść w garnku i zagotuj, cały czas mieszając, aż zaczną się rozpadać.",
        "Zdejmij maliny z ognia.",
        "Do gorących malin dodaj napęczniałą żelatynę i mieszaj do całkowitego rozpuszczenia.",
        "Gdy żelatyna się rozpuści, dodaj białą czekoladę.",
        "Odczekaj około 2 minuty, następnie dokładnie wymieszaj do jej rozpuszczenia.",
        "Masę malinowo-czekoladową wystudź do około 30°C.",
        "Schłodzoną śmietankę ubij na 3/4 - nie do całkowitej sztywności.",
        "Delikatnie połącz masę malinową z ubitą śmietanką, mieszając do uzyskania jednolitego musu.",
        "Mus wylej na blat biszkoptu i przykryj drugim blatem.",
        "Złożony tort schładzaj w lodówce przez minimum 6 godzin.",
      ],
    },
  ],
  keyWords: ["krem", "owoce"],
};

export default musMalinowyGanache;
