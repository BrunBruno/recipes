import type { Recipe } from "../types";

const pancakes: Recipe = {
  name: "Pancakes",
  type: "snack",
  image: "pancakes.jpg",
  kcal: 350,
  time: 20,
  portions: 3,
  ingredients: [
    { name: "mąka", amount: 1.25, unit: "szklanka", type: "grn" },
    { name: "jajko", amount: 1, unit: "szt", type: "egg" },
    { name: "maślanka", amount: 1.25, unit: "szklanka", type: "dir" },
    { name: "cukier puder", amount: 0.25, unit: "szklanka", type: "oth" },
    { name: "proszek do pieczenia", amount: 1, unit: "łyżeczka", type: "oth" },
    { name: "soda", amount: 1, unit: "łyżeczka", type: "spc" },
    { name: "olej roślinny", amount: 0.25, unit: "szklanka", type: "fat" },
    { name: "sól", amount: null, unit: null, type: "spc" },
  ],
  steps: [
    "W blenderze zmiksuj wszystkie składniki na gładką masę o konsystencji gęstej śmietany.",
    "Rozgrzej patelnię na średnim ogniu.",
    "Smaż pancakes z obu stron aż będą złociste.",
    "Podawaj z syropem klonowym, masłem lub cukrem pudrem według uznania.",
  ],
};

export default pancakes;
