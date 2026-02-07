import type { Recipe } from "../types";

const gulaszPoWegiersku: Recipe = {
  name: "Gulasz po Węgiersku",
  type: "dinner",
  image: "",
  ingredients: [
    {
      name: "mięso wołowe",
      amount: 500,
      unit: "g",
      type: "met",
    },
    {
      name: "olej",
      amount: 5,
      unit: "łyżka",
      type: "fat",
    },
    {
      name: "woda",
      amount: 500,
      unit: "ml",
      type: "wat",
    },
    {
      name: "Fix Knorr gulasz węgierski",
      amount: 1,
      unit: "opak",
      type: "spc",
    },
  ],
  steps: [
    "Mięso wołowe pokrój w kostkę.",
    "Na patelni lub w garnku rozgrzej niewielką ilość oleju i podsmaż mięso, aż się zarumieni.",
    "W osobnym garnku wymieszaj Fix Knorr z 500 ml wody.",
    "Dodaj podsmażone mięso do garnka z sosem i całość zagotuj.",
    "Duś gulasz na małym ogniu przez około 1 godzinę, mieszając od czasu do czasu.",
    "Podawaj z ziemniakami, kopytkami lub kluskami.",
  ],
};

export default gulaszPoWegiersku;
