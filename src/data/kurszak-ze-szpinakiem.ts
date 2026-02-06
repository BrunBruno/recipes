import type { Recipe } from "../types";

const kurczakZeSzpinakiem: Recipe = {
  name: "Kurczak ze Szpinakiem",
  type: "dinner",
  image: "",
  ingredients: [
    { name: "pierś z kurczaka", amount: 500, unit: "g" },
    { name: "kostka rosołowa Knorr", amount: 2, unit: "szt" },
    { name: "mrożony szpinak", amount: 1, unit: "opakowanie" },
    { name: "cebula", amount: 1, unit: "szt" },
    { name: "śmietana 22%", amount: 200, unit: "ml" },
    { name: "żółty ser", amount: 100, unit: "g" },
    { name: "olej roślinny", amount: 3, unit: "łyżki" },
    { name: "czosnek", amount: 1, unit: "ząbek" },
    { name: "pieprz cayenne" },
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
