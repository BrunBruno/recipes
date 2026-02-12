import { iDIR } from "../ingredients/ingDairy";
import { iFAT } from "../ingredients/ingFat";
import { iGRN } from "../ingredients/ingGrain";
import { iMET } from "../ingredients/ingMeat";
import { iOTH } from "../ingredients/ingOther";
import { iSPC } from "../ingredients/ingSpice";
import type { Recipe } from "../types";

const faworki: Recipe = {
  name: "Faworki",
  type: "dessert",
  images: ["faworki.jpg"],
  time: 90,
  portions: 4,
  ingredients: [
    { ingredient: iGRN.flour, amount: 320, unit: "g" },
    { ingredient: iMET.egg, amount: 4 },
    { ingredient: iOTH.powdered_sugar, amount: 1, unit: "łyżka" },
    { ingredient: iDIR.cream, amount: 5, unit: "łyżka" },
    { ingredient: iOTH.spirit, amount: 2, unit: "łyżeczka" },
    { ingredient: iFAT.lard, amount: 2, unit: "kostka" },
    { ingredient: iSPC.salt },
  ],
  steps: [
    {
      title: "",
      steps: [
        "Mąkę przesiać na stolnicę i uformować kopczyk. Zrobić w nim dołek.",
        "W dołku wbić żółtka, dodać cukier puder, śmietanę, sól i spirytus (opcjonalnie).",
        "Zagarniać mąkę do środka i mieszać składniki, połączyć w kulę.",
        "Wyrabiać ciasto przez około 5 minut, aż będzie jednolite i zwarte.",
        "Rozwałkowywać ciasto wałkiem, składać na pół i ponownie wałkować przez 10-15 minut, tłukąc ciasto wałkiem, aby wtłoczyć powietrze.",
        "Podzielić ciasto na 2 części, każdą rozwałkować na możliwie cienkie placki.",
        "Resztę ciasta przechowywać zawiniętą w folię, aby nie wysychało.",
        "Nożem lub radełkiem wycinać paski szerokie na około 3 cm i długości ok. 10 cm, końce ścięte na ukos.",
        "W środku każdego paska zrobić nacięcie i przewlec przez nie jeden koniec ciasta, nadając kształt faworka.",
        "Odkładać gotowe faworki na bok.",
        "Rozgrzać smalec lub olej do 180°C w szerokim garnku.",
        "Wkładać po kilka faworków jednocześnie, smażyć na złoty kolor po 30-60 sekund z każdej strony.",
        "Wyławiać łyżką cedzakową i układać na ręcznikach papierowych.",
        "Posypać cukrem pudrem i podawać.",
      ],
    },
  ],
  keyWords: ["ciasto", "słodkie", "smażone"],
};

export default faworki;
