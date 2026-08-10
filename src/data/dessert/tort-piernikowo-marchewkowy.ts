import { iDIR } from "../../ingredients/ingDairy";
import { iFAT } from "../../ingredients/ingFat";
import { iGRN } from "../../ingredients/ingGrain";
import { iLIQ } from "../../ingredients/ingLiquid";
import { iMET } from "../../ingredients/ingMeat";
import { iOTH } from "../../ingredients/ingOther";
import { iSNK } from "../../ingredients/ingSnack";
import { iSPC } from "../../ingredients/ingSpice";
import { iVEG } from "../../ingredients/ingVegetable";
import type { Recipe } from "../../types";

const tortPiernikowoMarchewkowy: Recipe = {
  name: "Tort Piernikowo Marchewkowy",
  type: "dessert",
  cookingMethods: [["baked", 45, 200]],
  images: [""],
  time: 180,
  portions: 12,
  taste: null,
  difficulty: null,
  ingredients: [
    {
      title: "Ciasto",
      items: [
        { ing: iVEG.carrot, amount: 300 },
        { ing: iMET.egg, amount: 4, unit: "szt" },
        { ing: iFAT.butter, amount: 175 },
        { ing: iOTH.sugar, amount: 250 },
        { ing: iLIQ.honey, amount: 2, unit: "lz" },
        { ing: iGRN.flour, amount: 300 },
        { ing: iOTH.baking_powder, amount: 2, unit: "lzi" },
        { ing: iOTH.baking_soda, amount: 2, unit: "lzi" },
        { ing: iSPC.cinnamon, amount: 1, unit: "lzi" },
        { ing: iSPC.gingerbread_seasoning, amount: 2.5, unit: "lzi" },
      ],
    },
    {
      title: "Krem",
      items: [
        { ing: iDIR.mascarpone, amount: 500 },
        { ing: iDIR.cream_36, amount: 400 },
        { ing: iOTH.sugar, amount: 100 },
        { ing: iSNK.chocolate_white, amount: 100 },
        { ing: iSNK.vanilla_halva, amount: 100 },
      ],
    },
    {
      title: "Do dekoracji",
      items: [
        { ing: iOTH.refined_sugar, amount: 2, unit: "lz" },
        { ing: iSNK.gingerbread_with_icing, amount: 100 },
      ],
    },
  ],
  steps: [
    {
      title: "Masa czekoladowo-chałwowa",
      steps: [
        "Z całości śmietany odlej około 80 g i umieść ją w szklanej lub metalowej misce nad kąpielą wodną.",
        "Dodaj posiekaną lub drobno połamaną białą czekoladę i pozostaw do roztopienia, od czasu do czasu delikatnie mieszając.",
        "Dodaj pokruszoną chałwę i mieszaj aż do jej całkowitego roztopienia. Utrzymuj możliwie najniższą temperaturę, aby nie przegrzać białej czekolady.",
        "Wymieszaj masę do uzyskania jednolitej i gładkiej konsystencji, a następnie dobrze schłodź ją w lodówce.",
      ],
    },
    {
      title: "Ciasto",
      steps: [
        "Marchewkę zmiel w malakserze lub zetrzyj na drobne wiórki.",
        "Jajka zmiksuj z cukrem na jasną i puszystą masę.",
        "Wymieszaj mąkę, proszek do pieczenia, sodę, cynamon oraz przyprawę piernikową.",
        "Dodaj suche składniki do masy jajecznej i ponownie zmiksuj.",
        "Dodaj marchewkę oraz miód, a następnie masło. Zmiksuj całość na wolniejszych obrotach do połączenia składników.",
        "Dwie tortownice o średnicy 21 cm wyłóż papierem do pieczenia, zarówno na dnie, jak i na bokach.",
        "Rozdziel ciasto równo pomiędzy obie tortownice i dokładnie wyrównaj powierzchnię. Jeśli masz tylko jedną tortownicę, upiecz ciasto w dwóch partiach.",
        "Piecz w 200°C przez 20 minut, następnie zmniejsz temperaturę do 180°C i piecz przez około 25 minut, aż do suchego patyczka.",
        "Po upieczeniu wyjmij ciasta z piekarnika i pozostaw do ostygnięcia. Po około 15-20 minutach możesz wyjąć je z form.",
        "Pozostaw ciasta do całkowitego wystudzenia, a następnie każde przekrój poziomo na dwa równe blaty. W sumie powinny powstać cztery blaty.",
        "Blaty krój na pół, biorąc pod uwagę całkowitą wysokość ciasta, aż do najbardziej wybrzuszonego punktu, zamiast wyznaczać połowę na podstawie wysokości samego boku.",
      ],
    },
    {
      title: "Krem",
      steps: [
        "Ubij pozostałą śmietanę kremówkę na sztywno.",
        "Cały czas ubijając, dodaj cukier i dokładnie zmiksuj.",
        "Dodaj około 2 łyżki ubitej śmietany do schłodzonej masy śmietanowo-czekoladowo-chałwowej i zmiksuj, aby ją rozluźnić.",
        "Do ubitej śmietany dodaj mascarpone oraz masę śmietanowo-czekoladowo-chałwową.",
        "Zmiksuj krótko na niskich obrotach, tylko do połączenia składników. Nie miksuj zbyt długo, ponieważ mascarpone może się zwarzyć.",
      ],
    },
    {
      title: "Składanie i dekorowanie",
      steps: [
        "Pierwszy blat ułóż na paterze i rozsmaruj na nim 1/5 kremu.",
        "Połóż drugi blat i rozsmaruj na nim kolejną 1/5 kremu.",
        "Połóż trzeci blat i rozsmaruj następną 1/5 kremu.",
        "Przykryj czwartym blatem.",
        "Pozostałe 2/5 kremu rozsmaruj najpierw na bokach, a następnie na wierzchu tortu. Wyrównaj powierzchnię kremu.",
        "Wierzch tortu oraz boki posyp gdzieniegdzie grubą rafinadą.",
        "Na wierzchu ułóż pierniczki ozdobione lukrem, delikatnie wtykając je w krem.",
        "Tort schłodź w lodówce przez minimum 3 godziny.",
        "Przechowuj tort w lodówce i podawaj schłodzony.",
      ],
    },
  ],
  keyWords: ["ciasto"],
};
export default tortPiernikowoMarchewkowy;
