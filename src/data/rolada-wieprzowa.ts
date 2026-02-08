import type { Recipe } from "../types";

const roladaWieprzowa: Recipe = {
  name: "Rolada Wieprzowa",
  type: "dinner",
  image: "",
  kcal: 680,
  time: 90,
  portions: 4,
  ingredients: [
    { name: "szynka ze schabu", amount: 1, unit: "opak", type: "met" },
    { name: "boczek w kostce", amount: 0.5, unit: "opak", type: "met" },
    { name: "kiełbasa", amount: 0.5, unit: "pęto", type: "met" },
    { name: "ogórek kiszony", amount: 2, unit: "szt", type: "veg" },
    { name: "cebula", amount: 1, unit: "szt", type: "veg" },
    { name: "musztarda sarepska", amount: null, unit: null, type: "sau" },
    { name: "sól", amount: null, unit: null, type: "spc" },
    { name: "pieprz", amount: null, unit: null, type: "spc" },
    { name: "margaryna lub olej", amount: null, unit: null, type: "fat" },
    { name: "masło", amount: null, unit: null, type: "fat" },
    { name: "mąka", amount: null, unit: null, type: "grn" },
    { name: "śmietana", amount: null, unit: null, type: "dir" },
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
