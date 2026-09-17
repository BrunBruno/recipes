import { iBAK } from "../../ingredients/ingBakery";
import { iDIR } from "../../ingredients/ingDairy";
import { iHRB } from "../../ingredients/ingHerb";
import { iLIQ } from "../../ingredients/ingLiquid";
import { iMET } from "../../ingredients/ingMeat";
import { iSPC } from "../../ingredients/ingSpice";
import { iVEG } from "../../ingredients/ingVegetable";
import type { Recipe } from "../../types";

const barszczBialy: Recipe = {
  name: "Barszcz Biały",
  type: "soup",
  country: "POL",
  images: [""],
  time: 50,
  portions: 4,
  taste: null,
  difficulty: null,
  ingredients: [
    {
      title: "Barszcz",
      items: [
        { ing: iLIQ.white_borscht_sourdough, amount: 0.5, unit: "l" },
        { ing: iLIQ.water, amount: 1, unit: "l" },
        { ing: iMET.white_sausage, amount: 400 },
        { ing: iVEG.potato, amount: 500 },
        { ing: iVEG.carrot, amount: 1, unit: "szt" },
        { ing: iDIR.cream_30, amount: 50, unit: "ml" },
        { ing: iHRB.marjoram, amount: 1, unit: "lz" },
        { ing: iSPC.salt, amount: 1.5, unit: "lzi" },
        { ing: iSPC.black_pepper, amount: 0.5, unit: "lzi" },
      ],
    },
    {
      title: "Do podania",
      items: [
        { ing: iBAK.wheat_bread, amount: 4, unit: "krom" },
        { ing: iMET.egg, amount: 4, unit: "szt" },
        { ing: iHRB.parsley },
      ],
    },
  ],

  steps: [
    {
      title: "Ziemniaki",
      steps: [
        "Ziemniaki obierz i pokrój w niewielką kostkę.",
        "Umieść ziemniaki w garnku, zalej 500 ml wody i dodaj około 1 płaską łyżeczkę soli.",
        "Gotuj pod przykryciem przez około 10-15 minut, aż ziemniaki będą prawie miękkie.",
        "Odstaw ziemniaki razem z wodą, w której się gotowały.",
      ],
    },
    {
      title: "Kiełbasa",
      steps: [
        "Białą kiełbasę przepłucz pod zimną wodą, rozdziel pętka i lekko nakłuj każde w kilku miejscach.",
        "Umieść kiełbasę w dużym garnku i zalej 500 ml wody.",
        "Gotuj pod przykryciem. Po około 5 minutach od zagotowania wyjmij kiełbasę.",
        "Jeśli osłonka łatwo odchodzi, zdejmij ją z kiełbasy i pokrój mięso na kawałki o grubości około 2 cm.",
        "Włóż kiełbasę z powrotem do garnka.",
        "Dodaj startą na dużych oczkach lub cienko pokrojoną marchew.",
        "Gotuj pod przykryciem na małym ogniu przez około 10 minut.",
      ],
    },
    {
      title: "Barszcz",
      steps: [
        "Zakwas dokładnie wymieszaj, aby mąka i dodatki nie pozostały na dnie butelki.",
        "Wlej zakwas do garnka z kiełbasą i marchewką.",
        "Dodaj ugotowane prawie do miękkości ziemniaki wraz z wodą, w której się gotowały.",
        "Dodaj majeranek oraz pozostałą sól i pieprz.",
        "Doprowadź barszcz do wrzenia, następnie zmniejsz ogień.",
        "Gotuj bez przykrycia przez około 5 minut, cały czas delikatnie mieszając, aż barszcz lekko zgęstnieje.",
      ],
    },
    {
      title: "Śmietanka",
      steps: [
        "Wlej śmietankę 30% i dokładnie wymieszaj.",
        "Podgrzewaj jeszcze chwilę, ale nie doprowadzaj barszczu do mocnego wrzenia.",
        "Spróbuj i w razie potrzeby dopraw solą lub pieprzem.",
      ],
    },
    {
      title: "Podanie",
      steps: [
        "Jajka ugotuj na twardo, obierz i przekrój na połówki.",
        "Barszcz podawaj z kawałkami białej kiełbasy i jajkiem na twardo.",
        "Posyp świeżą natką pietruszki.",
        "Podawaj ze świeżym pieczywem.",
      ],
    },
  ],

  keyWords: ["zupa", "jajko"],
};

export default barszczBialy;
