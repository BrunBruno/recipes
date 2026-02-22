import { iDIR } from "../ingredients/ingDairy";
import { iFAT } from "../ingredients/ingFat";
import { iMET } from "../ingredients/ingMeat";
import { iSAU } from "../ingredients/ingSauce";
import { iSPC } from "../ingredients/ingSpice";
import { iVEG } from "../ingredients/ingVegetable";
import type { Recipe } from "../types";

const kurczakZPomidorem: Recipe = {
  name: "Kurczak z Pomidorami",
  type: "dinner",
  images: ["kurczak-z-pomidorem.jpg"],
  time: 65,
  portions: 3,
  ingredients: [
    {
      title: "Kurczak z pomidorami",
      items: [
        { ingredient: iMET.chicken_breast, amount: 400 },
        { ingredient: iVEG.tomato, amount: 1, unit: "szt" },
        { ingredient: iVEG.onion, amount: 0.5, unit: "szt" },
        { ingredient: iDIR.yellow_cheese, amount: 0.5, unit: "kostka" },
        { ingredient: iDIR.cream, amount: 1, unit: "łyżka" },
        { ingredient: iSAU.mayonnaise, amount: 1, unit: "łyżka" },
        { ingredient: iFAT.olive, amount: 2, unit: "łyżka" },
        { ingredient: iSPC.herbes_de_provence },
        { ingredient: iSPC.wild_garlic },
        { ingredient: iSPC.sweet_paprika },
        { ingredient: iSPC.black_pepper },
        { ingredient: iSPC.salt },
      ],
    },
    {
      title: "Dodatki",
      excludeFromCalc: true,
      items: [
        { ingredient: iVEG.potato, amount: "3 × 150" },
        { ingredient: iFAT.butter, amount: 0.5, unit: "łyżeczka" },
        { ingredient: iDIR.milk, amount: 100, unit: "ml" },
        { ingredient: iVEG.beets_whole_vinegar, amount: "3 × 100" },
      ],
    },
  ],
  steps: [
    {
      title: "Kurczak z pomidorami",
      steps: [
        "Natłuść naczynie żaroodporne oliwą lub olejem i ułóż paski cebuli.",
        "Pokrój mięso z kurczaka w duże i cienkie plastry a następnie rozłóż je równomiernie w naczyniu.",
        "Przypraw mięso solą, pieprzem, papryką oraz czosnkiem.",
        "W miseczce wymieszaj majonez ze śmietaną i ziołami.",
        "Posmaruj kurczaka przygotowaną mieszanką.",
        "Pokrój pomidory i ułóż je na mięsie.",
        "Posyp całość startym serem.",
        "Piecz przez około 60 minut (lub dłużej, aż mięso będzie miękkie).",
      ],
    },
    {
      title: "Przykładowe podanie",
      steps: [
        "Obierz ziemniaki i ugotuj je w osolonej wodzie do miękkości.",
        "Odcedź ziemniaki, dodaj masło oraz ciepłe mleko i dokładnie ubij.",
        "Dopraw puree solą do smaku.",
        "Buraki z octu odsącz z zalewy i podawaj w całości jako dodatek.",
        "Kurczaka podawaj z ziemniakami ubijanymi i burakami.",
      ],
    },
  ],
  keyWords: ["mięso", "kurczak", "pieczone", "xxx"],
};

export default kurczakZPomidorem;
