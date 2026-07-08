import { iDIR } from "./ingredients/ingDairy";
import { iFAT } from "./ingredients/ingFat";
import { iGRN } from "./ingredients/ingGrain";
import { iHRB } from "./ingredients/ingHerb";
import { iJAR } from "./ingredients/ingJar";
import { iLIQ } from "./ingredients/ingLiquid";
import { iOTH } from "./ingredients/ingOther";
import { iSPC } from "./ingredients/ingSpice";
import { iVEG } from "./ingredients/ingVegetable";
import type { ExtrasIngredientGroup } from "./types";

export type DinnerSidesNames =
  | "oven-potatoes"
  | "boiled-potatoes"
  | "boiled-potatoes-dry"
  | "mashed-potatoes"
  | "oven-fries"
  | "rice"
  | "buckwheat"
  | "bulgur"
  | "penne-pasta"
  | "spaghetti-pasta"
  | "kopytka-ready"
  | "silesian-dumplings-ready"
  ////
  | "carrot-and-peas"
  | "steamed-vegetables"
  | "stir-fry-vegetables"
  | "green-beans-boiled"
  | "sauteed-cabbage"
  | "sauerkraut-salad"
  | "cream-cucumber-salad"
  | "peas-and-beets"
  | "beets-shredded-ready"
  | "beets-fried-ready"
  | "beets-whole-vinegar"
  | "sauerkraut"
  | "pickled-cucumber"
  | "pickled-cucumber-vinegar"
  | "canned-peas"
  | "coleslaw-ready"
  | "corn-salad-ready"
  | "cucumber-salad-ready"
  | "red-cabbage-ready";

export const dinnerSides = (
  name: DinnerSidesNames,
  portions: number,
): ExtrasIngredientGroup => {
  switch (name) {
    case "oven-potatoes":
      return {
        title: "Ziemniaki z piekarnika",
        sideName: name,
        items: [
          { ing: iVEG.potato, amount: portions * 250 },
          { ing: iFAT.oil, amount: portions * 0.8, unit: "lz" },
          { ing: iVEG.garlic, amount: portions * 0.5, unit: "zbk" },
          { ing: iHRB.caraway, amount: portions * 0.25, unit: "lzi" },
          { ing: iHRB.thyme, amount: portions * 0.25, unit: "lzi" },
          { ing: iSPC.potato_seasoning, amount: portions * 0.25, unit: "lz" },
          { ing: iSPC.sweet_paprika, amount: portions * 0.5, unit: "lzi" },
          { ing: iSPC.hot_paprika, amount: portions * 0.25, unit: "lzi" },
          { ing: iSPC.black_pepper, amount: portions * 0.25, unit: "lzi" },
          { ing: iSPC.salt, amount: portions * 0.25, unit: "lzi" },
        ],
      };
    case "boiled-potatoes":
      return {
        title: "Ziemniaki gotowane",
        sideName: name,
        items: [
          { ing: iVEG.potato, amount: portions * 200 },
          { ing: iHRB.dill },
          { ing: iSPC.black_pepper },
          { ing: iSPC.salt },
        ],
      };
    case "boiled-potatoes-dry":
      return {
        title: "Ziemniaki gotowane",
        sideName: name,
        items: [
          { ing: iVEG.potato, amount: portions * 200 },
          { ing: iSPC.salt },
        ],
      };
    case "mashed-potatoes":
      return {
        title: "Purée ziemniaczane",
        sideName: name,
        items: [
          { ing: iVEG.potato, amount: portions * 200 },
          { ing: iFAT.butter, amount: portions, unit: "lzi" },
          { ing: iDIR.milk, amount: portions * 10, unit: "ml" },
          { ing: iSPC.black_pepper },
          { ing: iSPC.salt },
        ],
      };
    case "oven-fries":
      return {
        title: "Frytki z piekarnika",
        sideName: name,
        items: [
          { ing: iJAR.frozen_fries, amount: portions * 200 },
          { ing: iSPC.potato_seasoning },
        ],
      };
    case "rice":
      return {
        title: "Ryż gotowany",
        sideName: name,
        items: [{ ing: iGRN.rice, amount: portions * 100 }, { ing: iSPC.salt }],
      };
    case "buckwheat":
      return {
        title: "Kasza gryczana",
        sideName: name,
        items: [
          { ing: iGRN.buckwheat, amount: portions * 100 },
          { ing: iSPC.salt },
        ],
      };
    case "bulgur":
      return {
        title: "Kasza bulgur",
        sideName: name,
        items: [
          { ing: iGRN.bulgur, amount: portions * 80 },
          { ing: iSPC.salt },
        ],
      };
    case "penne-pasta":
      return {
        title: "Makaron penne",
        sideName: name,
        items: [
          { ing: iGRN.penne_pasta, amount: portions * 100 },
          { ing: iSPC.salt },
        ],
      };
    case "spaghetti-pasta":
      return {
        title: "Makaron spaghetti",
        sideName: name,
        items: [
          { ing: iGRN.spaghetti_pasta, amount: portions * 100 },
          { ing: iSPC.salt },
        ],
      };
    case "kopytka-ready":
      return {
        title: "Kopytka",
        sideName: name,
        items: [
          { ing: iGRN.kopytka, amount: portions * 250 },
          { ing: iFAT.oil, amount: 1, unit: "lzi" },
          { ing: iSPC.salt },
        ],
      };
    case "silesian-dumplings-ready":
      return {
        title: "Kluski śląskie",
        sideName: name,
        items: [
          { ing: iGRN.silesian_dumplings, amount: portions * 250 },
          { ing: iFAT.oil, amount: 1, unit: "lzi" },
          { ing: iSPC.salt },
        ],
      };

    //// ////

    case "carrot-and-peas":
      return {
        title: "Marchewka z groszkiem",
        sideName: name,
        items: [
          { ing: iVEG.carrot, amount: portions, unit: "szt" },
          { ing: iJAR.canned_peas, amount: portions * 100, unit: "g" },
          { ing: iFAT.butter, amount: portions * 0.25, unit: "lzi" },
          { ing: iGRN.flour, amount: portions * 0.25, unit: "lz" },
          { ing: iOTH.sugar },
          { ing: iSPC.salt },
        ],
      };
    case "steamed-vegetables":
      return {
        title: "Warzywa na parze",
        sideName: name,
        items: [
          { ing: iJAR.frozen_vegetable_mix, amount: 150 * portions },
          { ing: iFAT.olive, amount: portions, unit: "lzi" },
          { ing: iSPC.salt },
        ],
      };
    case "stir-fry-vegetables":
      return {
        title: "Warzywa na patelnie",
        sideName: name,
        items: [
          { ing: iJAR.frozen_stir_fry, amount: 150 * portions },
          { ing: iFAT.oil, amount: portions * 0.5, unit: "lzi" },
        ],
      };
    case "green-beans-boiled":
      return {
        title: "Fasolka szparagowa",
        sideName: name,
        items: [
          { ing: iJAR.frozen_green_beans, amount: 150 * portions },
          { ing: iFAT.butter, amount: 0.5, unit: "lzi" },
          { ing: iGRN.breadcrumbs, amount: 1, unit: "lzi" },
          { ing: iSPC.salt },
        ],
      };
    case "sauteed-cabbage":
      return {
        title: "Kapusta zasmażana",
        sideName: name,
        items: [
          { ing: iJAR.sauerkraut, amount: portions * 120 },
          { ing: iFAT.clarified_butter, amount: portions * 0.25, unit: "lzi" },
          { ing: iSPC.black_pepper },
          { ing: iSPC.salt },
        ],
      };
    case "sauerkraut-salad":
      return {
        title: "Surówka z koszonej kapusty",
        sideName: name,
        items: [
          { ing: iJAR.sauerkraut, amount: portions * 100 },
          { ing: iVEG.carrot, amount: portions * 50 },
          { ing: iFAT.oil, amount: portions * 0.5, unit: "lzi" },
          { ing: iLIQ.lemon_juice, amount: portions * 0.25, unit: "lz" },
          { ing: iSPC.black_pepper },
          { ing: iSPC.salt },
        ],
      };
    case "cream-cucumber-salad":
      return {
        title: "Mizeria",
        sideName: name,
        items: [
          { ing: iDIR.cream_18, amount: portions * 2, unit: "lz" },
          { ing: iVEG.cucumber, amount: portions * 0.5, unit: "szt" },
          { ing: iHRB.spring_onion },
          { ing: iSPC.black_pepper },
          { ing: iSPC.salt },
        ],
      };
    case "peas-and-beets":
      return {
        title: "Buraczki z groszkiem",
        sideName: name,
        items: [
          { ing: iJAR.beets_whole_vinegar, amount: portions * 120 },
          { ing: iJAR.canned_peas, amount: portions * 80 },
          { ing: iSPC.salt },
        ],
      };
    case "beets-shredded-ready":
      return {
        title: "Buraczki wiórki",
        sideName: name,
        items: [
          { ing: iJAR.beets_shredded, amount: portions * 150 },
          { ing: iSPC.salt },
        ],
      };
    case "beets-fried-ready":
      return {
        title: "Buraczki zasmażane",
        sideName: name,
        items: [
          { ing: iJAR.fried_beets, amount: portions * 150 },
          { ing: iSPC.salt },
        ],
      };
    case "beets-whole-vinegar":
      return {
        title: "Buraczki z octu",
        sideName: name,
        items: [
          { ing: iJAR.beets_whole_vinegar, amount: portions * 200 },
          { ing: iSPC.salt },
        ],
      };
    case "sauerkraut":
      return {
        title: "Kapusta kiszona",
        sideName: name,
        items: [{ ing: iJAR.sauerkraut, amount: portions * 150 }],
      };
    case "pickled-cucumber":
      return {
        title: "Ogórki kiszone",
        sideName: name,
        items: [
          {
            ing: iJAR.pickled_cucumber,
            amount: portions * 2,
            unit: "szt",
          },
        ],
      };
    case "pickled-cucumber-vinegar":
      return {
        title: "Ogórki konserwowe",
        sideName: name,
        items: [
          {
            ing: iJAR.pickled_cucumber_vinegar,
            amount: portions * 2,
            unit: "szt",
          },
        ],
      };
    case "canned-peas":
      return {
        title: "Groszek",
        sideName: name,
        items: [{ ing: iJAR.canned_peas, amount: 100 * portions }],
      };

    case "coleslaw-ready":
      return {
        title: "Colesław",
        sideName: name,
        items: [{ ing: iJAR.coleslaw, amount: portions * 180 }],
      };
    case "corn-salad-ready":
      return {
        title: "Sałatka z kukurydzą",
        sideName: name,
        items: [{ ing: iJAR.corn_salad, amount: portions * 180 }],
      };
    case "cucumber-salad-ready":
      return {
        title: "Sałatka z ogórka",
        sideName: name,
        items: [{ ing: iJAR.cucumber_salad, amount: portions * 180 }],
      };
    case "red-cabbage-ready":
      return {
        title: "Modra kapusta",
        sideName: name,
        items: [{ ing: iJAR.red_cabbage, amount: portions * 180 }],
      };
  }
};

export const dinnerSidesSteps = (name: DinnerSidesNames): string[] => {
  switch (name) {
    case "oven-potatoes":
      return [
        "Ziemniaki obierz, umyj i pokrój na ćwiartki.",
        "W misce połącz olej z przyprawami, kminkiem oraz drobno posiekanym czosnkiem.",
        "Dokładnie obtocz ziemniaki w marynacie.",
        "Ułóż ziemniaki na blasze wyłożonej papierem do pieczenia i dodaj gałązki świeżego tymianku.",
        "Piecz w piekarniku nagrzanym do 180-200°C przez około 30 minut, 1-2 razy przewracając ziemniaki w trakcie pieczenia.",
        "Podawaj gorące, bezpośrednio po upieczeniu.",
      ];
    case "boiled-potatoes":
      return [
        "Obierz ziemniaki i ugotuj je w osolonej wodzie do miękkości.",
        "Odcedź i posyp świeżym koperkiem.",
      ];
    case "boiled-potatoes-dry":
      return [
        "Ugotuj ziemniaki w osolonej wodzie do miękkości.",
        "Polej ziemniaki sosem z przygotowanego dania.",
      ];
    case "mashed-potatoes":
      return [
        "Obierz ziemniaki i ugotuj je w osolonej wodzie do miękkości.",
        "Odcedź i ubij z masłem oraz ciepłym mlekiem na gładkie puree.",
        "Dopraw solą i pieprzem do smaku.",
      ];
    case "oven-fries":
      return [
        "Rozgrzej piekarnik do 180°C.",
        "Piecz frytki w piekarniku przez około 20 minut.",
        "Opcjonalnie dopraw przyprawą do ziemniaków lub solą.",
      ];
    case "rice":
      return ["Ugotuj ryż w osolonej wodzie"];
    case "buckwheat":
      return ["Ugotuj kaszę gryczaną w osolonej wodzie do miękkości."];
    case "bulgur":
      return ["Ugotuj kaszę bulgur w osolonej wodzie."];
    case "penne-pasta":
      return ["Makaron penne ugotuj al dente w osolonej wodzie."];
    case "spaghetti-pasta":
      return ["Makaron spaghetti ugotuj al dente w osolonej wodzie."];
    case "kopytka-ready":
      return [
        "Zagotuj osoloną wodę i dodaj łyżkę oleju.",
        "Wrzuć kopytka i gotuj przez około 10 minut.",
        "Po wypłynięciu i ugotowaniu odcedź.",
      ];

    case "silesian-dumplings-ready":
      return [
        "Zagotuj osoloną wodę i dodaj łyżkę oleju.",
        "Wrzuć kluski śląskie i gotuj przez około 10 minut.",
        "Po wypłynięciu i ugotowaniu odcedź.",
      ];
    ////

    case "carrot-and-peas":
      return [
        "Marchewkę obierz, umyj i pokrój w kostkę.",
        "Następnie wrzuć marchewkę do garnka i zalej wodą tylko tyle by zakrywała marchewkę.",
        "Dodaj odrobinę soli i gotuj do miękkości pod przykryciem.",
        "Kiedy marchew już zmięknie dodaj odsączony z zalewy groszek.",
        "Na patelni rozpuść masło, dodajemy mąkę i mieszając smaż aż się spieni.",
        "Zasmażką zapraw marchewkę z groszkiem.",
        "Gotuj aż powstanie kremowy gęsty sos otaczający marchewkę.",
        "Dopraw cukrem i solom.",
      ];
    case "steamed-vegetables":
      return [
        "Ugotuj warzywa na parze przez około 15-20 minut, aż będą miękkie.",
        "Po ugotowaniu przypraw odrobiną soli i oliwy.",
      ];
    case "stir-fry-vegetables":
      return [
        "Rozgrzej patelnię z łyżką oleju.",
        "Wrzuć mrożone warzywa bez rozmrażania.",
        "Smaż na średnim ogniu przez 8-12 minut, często mieszając.",
        "Smaż do momentu aż warzywa będą miękkie, ale lekko chrupiące.",
      ];
    case "green-beans-boiled":
      return [
        "Zagotuj osoloną wodę w garnku.",
        "Wrzuć fasolkę szparagową (świeżą lub mrożoną) do wrzątku.",
        "Gotuj 6-10 minut, aż będzie miękka, ale nadal lekko jędrna.",
        "Odcedź fasolkę i opcjonalnie dodaj odrobinę masła lub oliwy.",
        "Dopraw solą do smaku.",
      ];
    case "sauteed-cabbage":
      return [
        "Na patelni rozpuść masło i podsmaż kapustę kiszoną.",
        "Dopraw solą i pieprzem i smaż, aż będzie miękka i lekko zrumieniona.",
      ];
    case "sauerkraut-salad":
      return [
        "Zetrzyj marchewkę na tarce.",
        "Wymieszaj z kapustą kiszoną.",
        "Dodaj olej, sok z cytryny, sól i pieprz.",
      ];
    case "cream-cucumber-salad":
      return [
        "Pokrój ogórka w cienkie plasterki i dodaj posiekaną zieloną cebulkę.",
        "Dodaj śmietanę, sól i pieprz, a następnie wymieszaj.",
      ];
    case "peas-and-beets":
      return ["Podaj buraki z octu wraz z groszkiem jako dodatek."];
    case "beets-shredded-ready":
      return ["Dodaj buraczki w wiórkach jako dodatek warzywny."];
    case "beets-fried-ready":
      return [
        "Podgrzej buraczki zasmażane na patelni lub w garnku.",
        "W razie potrzeby dopraw odrobiną soli lub cukru.",
      ];
    case "beets-whole-vinegar":
      return ["Podaj buraki z octu jako dodatek."];
    case "sauerkraut":
      return ["Podaj lub lekko podgrzej kapustę kiszoną."];
    case "pickled-cucumber":
      return [
        "Podaj ogórki kiszone, opcjonalnie pokrojone w plasterki lub ćwiartki.",
      ];
    case "pickled-cucumber-vinegar":
      return [
        "Pokrój ogórka konserwowego w plasterki lub ćwiartki i podaj jako dodatek.",
      ];
    case "canned-peas":
      return ["Podgrzej groszek konserwowy i odcedź z zalewy."];
    case "coleslaw-ready":
      return ["Podaj surówkę colesław jako dodatek."];
    case "corn-salad-ready":
      return ["Podaj surówkę z kukurydzą jako dodatek."];
    case "cucumber-salad-ready":
      return ["Podaj surówkę z ogórka jako dodatek."];
    case "red-cabbage-ready":
      return ["Podaj modrą kapustę jako dodatek."];
  }
};
