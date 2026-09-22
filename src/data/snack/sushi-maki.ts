import { iDIR } from "../../ingredients/ingDairy";
import { iFSH } from "../../ingredients/ingFish";
import { iGRN } from "../../ingredients/ingGrain";
import { iLIQ } from "../../ingredients/ingLiquid";
import { iOTH } from "../../ingredients/ingOther";
import { iSPC } from "../../ingredients/ingSpice";
import { iVEG } from "../../ingredients/ingVegetable";
import type { Recipe } from "../../types";

const sushiMaki: Recipe = {
  name: "Sushi Maki",
  type: "snack",
  country: "JPN",
  images: ["sushi-maki.jpg", "sushi-maki-2.jpg"],
  time: 60,
  portions: 3,
  taste: 1,
  difficulty: 5,
  ingredients: [
    {
      title: "",
      items: [
        { ing: iVEG.nori, amount: 1, unit: "opak", kw: true },
        { ing: iFSH.surimi, amount: 9, unit: "szt", kw: true },
        { ing: iFSH.smoked_salmon, amount: 100, kw: true },
        { ing: iGRN.sushi_rice, amount: 300, kw: true },
        { ing: iLIQ.water, amount: 360, unit: "ml" },
        { ing: iVEG.cucumber, amount: 100 },
        { ing: iVEG.daikon_oshinko, amount: 100 },
        { ing: iDIR.cream_cheese, amount: 50 },
        { ing: iLIQ.soy_sauce, amount: 30, unit: "ml" },
        { ing: iLIQ.rice_vinegar, amount: 4, unit: "lz" },
        { ing: iOTH.sugar, amount: 1.5, unit: "lzi" },
        { ing: iSPC.salt, amount: 0.5, unit: "lzi" },
      ],
    },
  ],
  steps: [
    {
      title: "Przygotowanie ryżu",
      steps: [
        "Ryż do sushi dokładnie wypłucz w zimnej wodzie, aż woda będzie prawie przejrzysta.",
        "Przełóż ryż do garnka, zalej wodą i pozostaw na około 10 minut.",
        "Przykryj garnek, zagotuj ryż, następnie zmniejsz ogień i gotuj pod przykryciem około 15 minut.",
        "Wyłącz ogień i pozostaw ryż pod przykryciem na około 10 minut.",
        "Wymieszaj ocet ryżowy z cukrem i solą.",
        "Przełóż ugotowany ryż do szerokiego naczynia i delikatnie wymieszaj z przygotowaną zaprawą octową.",
        "Pozostaw ryż do ostygnięcia do temperatury pokojowej.",
      ],
    },
    {
      title: "Przygotowanie składników",
      steps: [
        "Ogórka pokrój w cienkie, długie paski.",
        "Rzodkiew japońską oshinko pokrój w cienkie paski.",
        "Paluszki surimi pokrój wzdłuż na mniejsze kawałki.",
        "Wędzonego łososia pokrój w paski odpowiednie do nadzienia.",
      ],
    },
    {
      title: "Zawijanie sushi",
      steps: [
        "Na macie do sushi ułóż arkusz nori.",
        "Wilgotnymi dłońmi rozprowadź cienką warstwę ryżu na około 2/3 powierzchni nori.",
        "Na środku ryżu rozsmaruj niewielką ilość serka śmietankowego.",
        "Na serku ułóż wybrane składniki, np. łososia, surimi, ogórka i oshinko.",
        "Zwiń sushi przy pomocy maty, mocno dociskając rulon podczas zawijania.",
        "Gotowy rulon pokrój ostrym, lekko zwilżonym nożem na równe kawałki.",
        "Podawaj od razu z sosem sojowym.",
      ],
    },
  ],
  keyWords: ["ryba", "morskie", "ryż"],
  link: "https://www.doradcasmaku.pl/przepis-sushi-maki-363638",
};

export default sushiMaki;
