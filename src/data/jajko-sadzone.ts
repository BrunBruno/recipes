import type { Recipe } from "../types";

const jajkoSadzone: Recipe = {
  name: "Jajko Sadzone",
  type: "dinner",
  image: "jajko-sadzone.jpg",
  kcal: 220,
  time: 10,
  portions: 1,
  ingredients: [
    { name: "jajka", amount: "2-3", unit: "szt", type: "egg" },
    { name: "masło", amount: null, unit: null, type: "fat" },
    { name: "sól", amount: null, unit: null, type: "spc" },
    { name: "pieprz", amount: null, unit: null, type: "spc" },
  ],
  steps: [
    "Rozgrzej patelnię na średnim ogniu i dodaj kawałek masła.",
    "Wbij jajka na patelnię, uważając, aby nie uszkodzić żółtka.",
    "Smaż 2-3 minuty, aż białko się zetnie, a żółtko pozostanie płynne (lub dłużej, jeśli wolisz bardziej ścięte).",
    "Delikatnie posól i popieprz według smaku.",
    "Podawaj od razu na talerzu.",
  ],
};

export default jajkoSadzone;
