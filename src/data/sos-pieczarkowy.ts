import type { Recipe } from "../types";

const sosPieczarkowy: Recipe = {
  name: "Sos Pieczarkowy",
  type: "sauce",
  image: "",
  ingredients: [
    {
      name: "pieczarki",
      amount: 0.5,
      unit: "opak",
      type: "veg",
    },
    {
      name: "cebula",
      amount: 0.5,
      unit: "szt",
      type: "veg",
    },
    {
      name: "mąka",
      amount: 1,
      unit: "łyżka",
      type: "grn",
    },
    {
      name: "śmietana 18%",
      amount: null,
      unit: null,
      type: "dir",
    },
    {
      name: "masło",
      amount: null,
      unit: null,
      type: "fat",
    },
    {
      name: "woda",
      amount: null,
      unit: null,
      type: "wat",
    },
    {
      name: "Maggi",
      amount: null,
      unit: null,
      type: "sau",
    },
    {
      name: "jarzynka",
      amount: null,
      unit: null,
      type: "spc",
    },
  ],
  steps: [
    "Cebulę pokrój i podsmaż na maśle.",
    "Pieczarki pokrój i dodaj do cebuli.",
    "Przełóż wszystko do garnka i dodaj kilka łyżek wody.",
    "Dopraw jarzynką i Maggi.",
    "Gotuj na małym ogniu, pilnując aby sos się nie przypalił (w razie potrzeby dodaj wodę).",
    "W kubku rozrób mąkę z wodą.",
    "Dodaj śmietanę oraz odrobinę masła i dokładnie wymieszaj.",
    "Wlej mieszankę do sosu i gotuj jeszcze chwilę, cały czas mieszając.",
  ],
};

export default sosPieczarkowy;
