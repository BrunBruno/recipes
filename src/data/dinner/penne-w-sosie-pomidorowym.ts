import { iDIR } from "../../ingredients/ingDairy";
import { iGRN } from "../../ingredients/ingGrain";
import { iJAR } from "../../ingredients/ingJar";
import { iSPC } from "../../ingredients/ingSpice";
import type { Recipe } from "../../types";

const penneWSosiePomidorowym: Recipe = {
  name: "Penne w Sosie Pomidorowym",
  type: "dinner",
  cookingMethods: [["boiled", 20], ["stewed", 20]],
  images: [""],
  time: 20,
  portions: 2,
  taste: null,
  difficulty: null,
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
  steps: [
    {
      title: "",
      steps: [
        "Ugotuj makaron penne al dente zgodnie z instrukcją na opakowaniu.",
        "Na patelni lub w rondlu wymieszaj passatę pomidorową, śmietanę oraz zawartość opakowania Fix Penne Kamis.",
        "Doprowadź sos do wrzenia i gotuj przez około 3 minuty, cały czas mieszając.",
        "Dodaj ugotowany makaron do sosu i dokładnie wymieszaj, aby równomiernie pokrył się sosem.",
        "Mozzarellę podziel na niewielkie kawałki i ułóż na gorącym makaronie.",
        "Podawaj od razu, gdy mozzarella zacznie się delikatnie roztapiać.",
      ],
    },
  ],
  keyWords: ["makaron"],
};

export default penneWSosiePomidorowym;
