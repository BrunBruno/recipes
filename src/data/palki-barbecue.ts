import type { Recipe } from "../types";

const palkiBarbecue: Recipe = {
  name: "Pałki Barbecue",
  type: "dinner",
  image: "palki-barbecue.jpg",
  ingredients: [
    { name: "pałki z kurczaka", amount: 2, unit: "paczki" },
    { name: "słodka papryka" },
    { name: "ostra papryka" },
    { name: "wędzona papryka" },
    { name: "czosnek granulowany" },
    { name: "sos barbecue" },
  ],
  steps: [
    "Ułóż pałki w naczyniu żaroodpornym.",
    "Posyp kurczaka mieszanką przypraw: słodką, ostrą i wędzoną papryką oraz czosnkiem granulowanym.",
    "Przykryj naczynie i piecz w piekarniku przez około 40 minut w 220°C.",
    "Wyjmij naczynie i otwórz je, odlej nadmiar tłuszczu z kurczaka.",
    "Polej pałki sosem barbecue.",
    "Wstaw naczynie ponownie do piekarnika, tym razem otwarte, i piecz w 160°C aż sos się skarmelizuje.",
  ],
};

export default palkiBarbecue;
