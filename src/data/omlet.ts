import type { Recipe } from "../types";

const omlet: Recipe = {
  name: "Omlet",
  type: "snack",
  image: "",
  ingredients: [
    {
      name: "jajka",
      amount: 3,
      unit: "szt",
      type: "egg",
    },
    {
      name: "papryka",
      amount: 0.5,
      unit: "szt",
      type: "veg",
    },
    {
      name: "olej lub masło",
      amount: null,
      unit: null,
      type: "fat",
    },
    {
      name: "sól",
      amount: null,
      unit: null,
      type: "spc",
    },
    {
      name: "pieprz",
      amount: null,
      unit: null,
      type: "spc",
    },
  ],
  steps: [
    "Paprykę umyj, usuń gniazdo nasienne i pokrój w drobną kostkę lub paski.",
    "Na patelni rozgrzej niewielką ilość oleju lub masła i podsmaż paprykę przez 2-3 minuty.",
    "Jajka wbij do miski, dopraw solą i pieprzem, a następnie dokładnie roztrzep.",
    "Wlej jajka na patelnię z papryką i smaż na małym ogniu.",
    "Gdy spód omletu się zetnie, przykryj patelnię i smaż do momentu, aż całość będzie ścięta.",
    "Złóż omlet na pół lub podawaj w całości.",
  ],
};

export default omlet;
