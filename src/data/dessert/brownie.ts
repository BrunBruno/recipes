import { iFAT } from "../../ingredients/ingFat";
import { iGRN } from "../../ingredients/ingGrain";
import { iMET } from "../../ingredients/ingMeat";
import { iOTH } from "../../ingredients/ingOther";
import { iSNK } from "../../ingredients/ingSnack";
import { iSPC } from "../../ingredients/ingSpice";
import type { Recipe } from "../../types";

const portions = 12;
const brownie: Recipe = {
  name: "Brownie",
  type: "dessert",
  images: [""],
  time: 45,
  portions: portions,
  taste: null,
  difficulty: null,
  ingredients: [
    {
      title: "",
      items: [
        { ing: iSNK.chocolate_dark, amount: 250, kw: true },
        { ing: iFAT.butter, amount: 1, unit: "kst" },
        { ing: iMET.egg, amount: 3, unit: "szt" },
        { ing: iOTH.sugar, amount: 250 },
        { ing: iGRN.wheat_flour, amount: 135 },
        { ing: iSPC.salt },
      ],
    },
  ],
  steps: [
    {
      title: "",
      steps: [
        "Piekarnik nagrzać do 160°C. Przygotować małą prostokątną foremkę o wymiarach ok. 21 cm x 28 cm, posmarować ją masłem i wyłożyć papierem do pieczenia.",
        "Masło pokroić w kostkę i włożyć do rondelka, dodać połamaną na kosteczki większą część czekolady (200 g) i cały czas mieszając roztopić na małym ogniu, następnie odstawić z palnika.",
        "W oddzielnej misce rozmiksować lub wymieszać rózgą jajka z cukrem, a potem dodać do nich roztopioną czekoladę z masłem i wymieszać na gładką masę.",
        "Dodać mąkę oraz szczyptę soli i zmiksować na jednolite ciasto, po czym wyłożyć je do przygotowanej blaszki i wyrównać powierzchnię.",
        "Pozostałą część czekolady (50 g) pokroić na kawałki i posypać po wierzchu ciasta.",
        "Wstawić do piekarnika i piec przez ok. 35 minut, aż ciasto lekko urośnie i na wierzchu utworzy się skorupka.",
        "Po upieczeniu i ostudzeniu pokroić na małe kawałeczki.",
      ],
    },
  ],
  keyWords: ["ciasto", "deser"],
  link: "https://www.kwestiasmaku.com/desery/ciasta/czekoladowe_brownie/przepis.html",
};

export default brownie;
