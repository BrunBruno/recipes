import { iFAT } from "../../ingredients/ingFat";
import { iSPC } from "../../ingredients/ingSpice";
import { iVEG } from "../../ingredients/ingVegetable";
import type { Recipe } from "../../types";

const ziemniakiZPiekarnika: Recipe = {
  name: "Ziemniaki z Piekarnika",
  description:
    "Złociste i aromatyczne ziemniaki pieczone w piekarniku lub air fryerze z czosnkiem, tymiankiem i mieszanką przypraw - idealna chrupiąca przekąska.",
  type: "snack",
  images: [""],
  time: 40,
  portions: 4,
  executionDifficulty: 1,
  ingredients: [
    {
      title: "",
      items: [
        { ing: iVEG.potato, amount: 1000 },
        { ing: iFAT.oil, amount: 3, unit: "lz" },
        { ing: iVEG.garlic, amount: 2, unit: "zbk" },
        { ing: iSPC.caraway, amount: 0.5, unit: "lzi" },
        { ing: iSPC.thyme, amount: 1, unit: "lzi" },
        { ing: iSPC.potato_seasoning, amount: 1, unit: "lz" },
        { ing: iSPC.sweet_paprika, amount: 2, unit: "lzi" },
        { ing: iSPC.hot_paprika, amount: 0.5, unit: "lzi" },
        { ing: iSPC.black_pepper, amount: 0.5, unit: "lzi" },
        { ing: iSPC.salt, amount: 1, unit: "lzi" },
      ],
    },
  ],
  steps: [
    {
      title: "Piekarnik",
      steps: [
        "Ziemniaki obierz, umyj i pokrój na ćwiartki.",
        "W misce połącz olej z przyprawami, kminkiem oraz drobno posiekanym czosnkiem.",
        "Dokładnie obtocz ziemniaki w marynacie.",
        "Ułóż ziemniaki na blasze wyłożonej papierem do pieczenia i dodaj gałązki świeżego tymianku.",
        "Piecz w piekarniku nagrzanym do 180 - 200°C przez około 30 minut, 1 - 2 razy przewracając ziemniaki w trakcie pieczenia.",
        "Podawaj gorące, bezpośrednio po upieczeniu.",
      ],
    },
    {
      title: "Air fryer",
      steps: [
        "Ziemniaki obierz, umyj i pokrój na ćwiartki.",
        "Włóż ziemniaki do zimnej wody z lodem na 15 minut, następnie dokładnie osusz.",
        "W misce połącz olej z przyprawami, kminkiem oraz posiekanym czosnkiem.",
        "Obtocz ziemniaki w marynacie i ułóż w koszu air fryera w odstępach.",
        "Piecz w 180°C przez 10 minut, następnie odwróć ziemniaki i piecz kolejne 10 minut.",
        "Opcjonalnie zwiększ temperaturę do 200°C i dopiecz ziemniaki kilka minut, aż będą złociste i chrupiące.",
      ],
    },
  ],
  keyWords: ["ziemniak"],
};

export default ziemniakiZPiekarnika;
