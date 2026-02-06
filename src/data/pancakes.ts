import type { Recipe } from "../types";

const pancakes: Recipe = {
  name: "Pancakes",
  type: "snack",
  image: "pancakes.jpg",
  ingredients: [
    { name: "mąka", amount: 1.25, unit: "szklanki" },
    { name: "jajko", amount: 1, unit: "szt" },
    { name: "maślanka", amount: 1.25, unit: "szklanki" },
    { name: "cukier puder", amount: 0.25, unit: "szklanki" },
    { name: "proszek do pieczenia", amount: 1, unit: "łyżeczka" },
    { name: "soda", amount: 1, unit: "łyżeczka" },
    { name: "olej roślinny", amount: 0.25, unit: "szklanki" },
    { name: "sól", unit: "szczypta" },
  ],
  steps: [
    "W blenderze zmiksuj wszystkie składniki na gładką masę o konsystencji gęstej śmietany.",
    "Rozgrzej patelnię na średnim ogniu.",
    "Smaż pancakes z obu stron aż będą złociste.",
    "Podawaj z syropem klonowym, masłem lub cukrem pudrem według uznania.",
  ],
};

export default pancakes;
