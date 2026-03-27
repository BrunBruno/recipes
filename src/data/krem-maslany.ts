import { iDIR } from "../ingredients/ingDairy";
import { iFAT } from "../ingredients/ingFat";
import { iOTH } from "../ingredients/ingOther";
import type { Recipe } from "../types";

const kremMaslany: Recipe = {
  name: "Krem Maślany z Mlekiem Skondensowanym",
  description:
    "Puszysty krem maślany przygotowany z miękkiego masła i mleka skondensowanego, aromatyzowany wanilią i opcjonalnie barwiony. Idealny do tortów i dekoracji ciast.",
  type: "other",
  images: [""],
  time: 30,
  portions: 1,
  ingredients: [
    {
      title: "Lista składników",
      items: [
        { ingredient: iFAT.butter, amount: 200 },
        { ingredient: iDIR.condensed_milk, amount: 200 },
        { ingredient: iOTH.vanilla_extract, amount: "1-2", unit: "lzi" },
        { ingredient: iOTH.food_coloring },
      ],
    },
  ],
  steps: [
    {
      title: "",
      steps: [
        "Miękkie masło umieść w misie miksera i ucieraj na najwyższych obrotach przez około 15 minut, aż stanie się jasne i puszyste.",
        "Nie przerywając miksowania, wlewaj cienką strużką mleko skondensowane i ubijaj jeszcze kilka minut do uzyskania gładkiego kremu.",
        "Jeśli krem ma służyć do tynkowania tortu, zmniejsz obroty miksera na najniższe i ucieraj krem przez 10 - 15 minut, aby go odpowietrzyć.",
        "Na końcu dodaj ekstrakt waniliowy lub inny ulubiony aromat oraz ewentualnie kilka kropel barwnika spożywczego i krótko wymieszaj.",
      ],
    },
  ],
  keyWords: ["krem"],
};

export default kremMaslany;
