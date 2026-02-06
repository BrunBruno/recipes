import type { Recipe } from "../types";

const ciastoMurzyn: Recipe = {
  name: "Ciasto Murzyn",
  type: "dessert",
  image: "ciasto-murzyn.jpg",
  ingredients: [
    { name: "masło", amount: 1, unit: "kostka" },
    { name: "kakao", amount: 3, unit: "łyżki" },
    { name: "mleko", amount: 0.5, unit: "szklanki" },
    { name: "cukier", amount: 1, unit: "szklanka" },
    { name: "jaja", amount: 3, unit: "szt" },
    { name: "mąka", amount: 2, unit: "szklanki" },
    { name: "proszek do pieczenia", amount: 1, unit: "płaska łyżeczka" },
  ],
  steps: [
    "Masło, kakao, cukier i mleko podgrzewaj w garnku do zagotowania.",
    "Odlej niewielką ilość masy i odstaw ją na polewę.",
    "Do pozostałej masy dodaj jajka, mąkę oraz proszek do pieczenia.",
    "Całość dokładnie wymieszaj mikserem.",
    "Wlej ciasto do małej formy.",
    "Piecz przez około 30 minut.",
    "Sprawdź patyczkiem, czy ciasto jest upieczone.",
    "Po upieczeniu polej ciasto przygotowaną wcześniej polewą.",
  ],
};

export default ciastoMurzyn;
