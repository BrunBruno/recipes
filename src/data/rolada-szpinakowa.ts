import { iDIR } from "../ingredients/ingDairy";
import { iFAT } from "../ingredients/ingFat";
import { iGRN } from "../ingredients/ingGrain";
import { iMET } from "../ingredients/ingMeat";
import { iSPC } from "../ingredients/ingSpice";
import { iVEG } from "../ingredients/ingVegetable";
import type { Recipe } from "../types";

const roladaSzpinakowa: Recipe = {
  name: "Rolada Szpinakowa",
  type: "snack",
  images: [""],
  time: 0,
  portions: 0,
  ingredients: [
    { ingredient: iVEG.frozen_spinach, amount: 1, unit: "opak" },
    { ingredient: iMET.egg, amount: 4 },
    { ingredient: iMET.smoked_salmon, amount: 250, unit: "g" },
    { ingredient: iDIR.cream_cheese_horseradish, amount: 200, unit: "g" },
    { ingredient: iGRN.flour, amount: 2, unit: "łyżka" },
    { ingredient: iVEG.garlic, amount: 2, unit: "ząbek" },
    { ingredient: iFAT.olive, amount: "2-3", unit: "łyżka" },
    { ingredient: iSPC.nutmeg },
    { ingredient: iSPC.black_sesame },
    { ingredient: iSPC.salt },
    { ingredient: iSPC.black_pepper },
  ],
  steps: [
    {
      title: "",
      steps: [
        "Szpinak podsmaż na patelni z oliwą, aż odparuje nadmiar wody.",
        "Dodaj przeciśnięty przez praskę czosnek oraz sól i pieprz do smaku, następnie odstaw do wystygnięcia.",
        "Oddziel białka od żółtek.",
        "Do wystudzonego szpinaku dodaj żółtka, mąkę oraz szczyptę gałki muszkatołowej i dokładnie wymieszaj.",
        "Białka ubij na sztywną pianę i delikatnie wmieszaj ją do masy szpinakowej.",
        "Masę wylej na dużą prostokątną blachę wyłożoną papierem do pieczenia, rozprowadzając ją na wysokość około 1,5–2 cm.",
        "Piecz w piekarniku nagrzanym do 200°C przez około 10 minut.",
        "Po upieczeniu wyjmij i pozostaw do całkowitego ostudzenia – masa powinna być elastyczna.",
        "Ostudzoną masę posmaruj serkiem śmietankowym z chrzanem.",
        "Posyp czarnym sezamem i równomiernie ułóż plastry wędzonego łososia (opcjonalnie skropione sokiem z cytryny).",
        "Zwiń całość ciasno w roladę, owiń folią spożywczą i wstaw do lodówki na kilka godzin.",
        "Podawaj roladę pokrojoną w plastry.",
      ],
    },
  ],
  keyWords: ["ciasto", "tortilla"],
};

export default roladaSzpinakowa;
