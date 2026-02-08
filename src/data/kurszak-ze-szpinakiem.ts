import type { Recipe } from "../types";

const kurczakZeSzpinakiem: Recipe = {
  name: "Kurczak ze Szpinakiem",
  type: "dinner",
  image: "",
  kcal: 620,
  time: 40,
  portions: 6,
  ingredients: [
    { name: "pierś z kurczaka", amount: 500, unit: "g", type: "met" },
    { name: "kostka rosołowa Knorr", amount: 2, unit: "szt", type: "spc" },
    { name: "mrożony szpinak", amount: 1, unit: "opak", type: "veg" },
    { name: "cebula", amount: 1, unit: "szt", type: "veg" },
    { name: "śmietana 22%", amount: 200, unit: "ml", type: "dir" },
    { name: "żółty ser", amount: 100, unit: "g", type: "che" },
    { name: "olej roślinny", amount: 3, unit: "łyżka", type: "fat" },
    { name: "czosnek", amount: 1, unit: "ząbek", type: "veg" },
    { name: "pieprz cayenne", amount: null, unit: null, type: "spc" },
  ],
  steps: [
    "Pierś z kurczaka rozetnij wzdłuż na cienkie płaty, aby uzyskać 6 porcji.",
    "Jedną kostkę rosołową wymieszaj z olejem i natrzyj nią mięso.",
    "Na patelni zeszklij pokrojoną w kostkę cebulę, dodaj odsączony szpinak, śmietanę i drugą kostkę Knorr.",
    "Dokładnie wymieszaj i gotuj, aż śmietana zgęstnieje. Opcjonalnie dodaj czosnek i szczyptę pieprzu cayenne.",
    "Farsz nałóż na piersi kurczaka i posyp żółtym serem.",
    "Piecz w piekarniku nagrzanym do 190°C przez 15 minut.",
  ],
};

export default kurczakZeSzpinakiem;
