import type { Recipe } from "../types";

const roladaWieprzowa: Recipe = {
  name: "Rolada Wieprzowa",
  type: "dinner",
  image: "",
  ingredients: [
    { name: "szynka ze schabu", amount: 1, unit: "kawałek" },
    { name: "boczek w kostce", amount: 0.5, unit: "kawałka" },
    { name: "kiełbasa", amount: 0.5, unit: "pęta" },
    { name: "ogórek kiszony", amount: 2, unit: "szt" },
    { name: "cebula", amount: 1, unit: "szt" },
    { name: "musztarda sarepska" },
    { name: "sól" },
    { name: "pieprz" },
    { name: "margaryna lub olej" },
    { name: "masło" },
    { name: "mąka" },
    { name: "śmietana" },
  ],
  steps: [
    "Pokrój mięso na kotlety i dokładnie je rozbij.",
    "Posmaruj mięso musztardą, posól i popieprz.",
    "Pokrój kiełbasę, boczek, ogórki oraz cebulę w drobną kostkę.",
    "Wymieszaj farsz i rozłóż go równomiernie na mięsie.",
    "Zawiń mięso w roladę i zwiąż nicią lub zabezpiecz wykałaczkami.",
    "Na patelni rozgrzej margarynę lub olej z masłem i podsmaż roladę po około 5 minut z każdej strony pod przykryciem.",
    "Przełóż roladę do dużego garnka, dodaj niewielką ilość wody i duś przez około 1 godzinę.",
    "Zagęść sos, dodając mąkę i śmietanę.",
  ],
};

export default roladaWieprzowa;
