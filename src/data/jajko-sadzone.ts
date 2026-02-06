import type { Recipe } from "../types";

const jajkoSadzone: Recipe = {
  name: "Jajko Sadzone",
  type: "dinner",
  image: "jajko-sadzone.jpg",
  ingredients: [
    { name: "jajka", amount: "2-3", unit: "szt" },
    { name: "masło" },
    { name: "sól" },
    { name: "pieprz" },
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
