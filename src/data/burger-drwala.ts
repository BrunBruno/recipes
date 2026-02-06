import type { Recipe } from "../types";

const burgerDrwala: Recipe = {
  name: "Burger Drwala",
  type: "snack",
  image: "burger-drwala.ts.jpeg",
  ingredients: [
    { name: "mięso mielone wołowe", amount: 400, unit: "g" },
    { name: "ser Liliput", amount: 350, unit: "g" },
    { name: "boczek", amount: 100, unit: "g" },
    { name: "bułki hamburgerowe", amount: 4, unit: "szt" },
    { name: "chrupki serowe", amount: 1, unit: "paczka" },
    { name: "jajka", amount: "2-3", unit: "szt" },
    { name: "cebula", amount: 1, unit: "szt" },
    { name: "sałata" },
    { name: "pomidor" },
    { name: "ogórek kiszony" },
    { name: "musztarda", amount: 3, unit: "łyżki" },
    { name: "ketchup", amount: 1, unit: "łyżka" },
    { name: "majonez", amount: 1, unit: "łyżka" },
    { name: "olej" },
    { name: "masło" },
    { name: "bułka tarta" },
    { name: "pieprz" },
    { name: "sól" },
  ],
  steps: [
    "Do kubka dodaj łyżkę majonezu, łyżkę ketchupu oraz 2 łyżki musztardy. Wymieszaj sos i odstaw do przegryzienia.",
    "Połowę cebuli podsmaż na maśle i odstaw do ostygnięcia.",
    "Do mięsa mielonego dodaj podsmażoną cebulę, jajko, łyżeczkę musztardy, sól i pieprz. Dokładnie wymieszaj.",
    "Uformuj kotlety wołowe.",
    "Ser Liliput pokrój na 4 równe kawałki.",
    "Chrupki serowe rozetrzyj w moździerzu i wsyp do miski. W razie potrzeby dodaj bułkę tartą.",
    "Do drugiej miski wbij 1-2 jajka i rozbełtaj.",
    "Kawałki sera wielokrotnie maczaj w jajku i obtaczaj w chrupkach, aż uzyskasz solidną panierkę.",
    "Plastry boczku usmaż na patelni i odstaw.",
    "Na patelni z dodatkiem oleju usmaż panierowany ser, uważając, aby się nie rozpłynął.",
    "Na tej samej patelni usmaż kotlety wołowe.",
    "Umyj i pokrój pozostałe warzywa.",
    "Złóż burgera z przygotowanych składników: bułka, sos, kotlet, ser, boczek i warzywa.",
  ],
};

export default burgerDrwala;
