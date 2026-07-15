import "./statistics.css";
import { useEffect, useRef } from "react";
import type { CookingMethod, IngredientType, MealType } from "../../types";
import {
  interpolateKcalColor,
  kcalTopColors,
  MealTypesData,
  countDoneRecipes,
  countIngredientTypes,
  countIngredientUsage,
  countRecipeCalories,
  countRecipeKcalPer100g,
  countRecipesTypes,
  IngredientTypeData,
  ingredientCollections,
  countUsedIngredients,
  countRecipeWeightPerPortion,
  countRecipePreparationTime,
  allIngredients,
  countCookingMethodUsages,
  getCookingMethodLabel,
  countRecipePricePerPortion,
  kcalLowColors,
  othTopColors,
  othLowColors,
} from "../../utils";
import {
  ArcElement,
  BarController,
  BarElement,
  CategoryScale,
  Legend,
  LinearScale,
  Tooltip,
  Chart,
} from "chart.js";
import { recipes } from "../../recipes";

Chart.register(
  BarController,
  BarElement,
  ArcElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
);

type StatisticsProps = {};

const okRecipes = recipes.filter(
  (r) => r.steps.length > 0 && r.ingredients.length > 0,
);
const recipeTypeCount = countRecipesTypes(okRecipes);
const ingredientTypeCount = countIngredientTypes();
const doneRecipeCount = countDoneRecipes(okRecipes);
const ingredientUsage = countIngredientUsage(okRecipes);
const recipeCalories = countRecipeCalories(okRecipes);
const recipeKcalPer100g = countRecipeKcalPer100g(okRecipes);
const usedIngredients = countUsedIngredients(ingredientUsage);
const recipeWeightsPerPortion = countRecipeWeightPerPortion(okRecipes);
const recipesPrepTimes = countRecipePreparationTime(okRecipes);
const cookingMethodUsages = countCookingMethodUsages(okRecipes);
const recipePrices = countRecipePricePerPortion(okRecipes);

function Statistics({}: StatisticsProps) {
  const canvasRefs = {
    recipeTypes: useRef<HTMLCanvasElement | null>(null),
    doneRecipes: useRef<HTMLCanvasElement | null>(null),

    ingredientTypes: useRef<HTMLCanvasElement | null>(null),
    ingredientUsage: useRef<HTMLCanvasElement | null>(null),
    usedIngredients: useRef<HTMLCanvasElement | null>(null),
    ingredientPrice: useRef<HTMLCanvasElement | null>(null),
    kcalDistributionRef: useRef<HTMLCanvasElement | null>(null),

    calories: useRef<HTMLCanvasElement | null>(null),
    tCalories: useRef<HTMLCanvasElement | null>(null),
    bCalories: useRef<HTMLCanvasElement | null>(null),

    kcalDensity: useRef<HTMLCanvasElement | null>(null),
    tKcalDensity: useRef<HTMLCanvasElement | null>(null),
    bKcalDensity: useRef<HTMLCanvasElement | null>(null),

    weightsPerPortion: useRef<HTMLCanvasElement | null>(null),
    tWeightsPerPortion: useRef<HTMLCanvasElement | null>(null),
    bWeightsPerPortion: useRef<HTMLCanvasElement | null>(null),

    preparationTime: useRef<HTMLCanvasElement | null>(null),
    tPreparationTime: useRef<HTMLCanvasElement | null>(null),
    bPreparationTime: useRef<HTMLCanvasElement | null>(null),

    recipePrice: useRef<HTMLCanvasElement | null>(null),
    tRecipePrice: useRef<HTMLCanvasElement | null>(null),
    bRecipePrice: useRef<HTMLCanvasElement | null>(null),

    unitChartRef: useRef<HTMLCanvasElement | null>(null),
    cookingMethods: useRef<HTMLCanvasElement | null>(null),
  };
  const chartRefs = {
    recipeTypes: useRef<Chart | null>(null),
    doneRecipes: useRef<Chart | null>(null),

    ingredientTypes: useRef<Chart | null>(null),
    ingredientUsage: useRef<Chart | null>(null),
    usedIngredients: useRef<Chart | null>(null),
    ingredientPrice: useRef<Chart | null>(null),
    kcalDistributionRef: useRef<Chart | null>(null),

    calories: useRef<Chart | null>(null),
    tCalories: useRef<Chart | null>(null),
    bCalories: useRef<Chart | null>(null),

    kcalDensity: useRef<Chart | null>(null),
    tKcalDensity: useRef<Chart | null>(null),
    bKcalDensity: useRef<Chart | null>(null),

    weightsPerPortion: useRef<Chart | null>(null),
    tWeightsPerPortion: useRef<Chart | null>(null),
    bWeightsPerPortion: useRef<Chart | null>(null),

    preparationTime: useRef<Chart | null>(null),
    tPreparationTime: useRef<Chart | null>(null),
    bPreparationTime: useRef<Chart | null>(null),

    recipePrice: useRef<Chart | null>(null),
    tRecipePrice: useRef<Chart | null>(null),
    bRecipePrice: useRef<Chart | null>(null),

    unitChartRef: useRef<Chart | null>(null),
    cookingMethods: useRef<Chart | null>(null),
  };

  const createChart = (
    canvas: HTMLCanvasElement | null,
    chartRef: React.RefObject<Chart | null>,
    labels: string[],
    data: number[],
    colors: string[],
    unit: string,
  ) => {
    if (!canvas) return;

    if (chartRef.current) {
      chartRef.current.destroy();
    }

    chartRef.current = new Chart(canvas, {
      type: "bar",
      data: {
        labels: labels,
        datasets: [
          {
            data,
            backgroundColor:
              colors ?? labels.map((_, i) => (i % 2 === 0 ? "#666" : "#ccc")),
            borderRadius: 0,
            borderSkipped: false,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false,
          },
          datalabels: {
            display: false,
          },
          tooltip: {
            callbacks: {
              title: (tooltipItems) => tooltipItems[0].label,
              label: (tooltipItem) => `${tooltipItem.raw} ${unit}`,
            },
            bodyFont: {
              size: 14,
            },
            backgroundColor: "#333",
            padding: 10,
          },
        },

        scales: {
          x: {
            ticks: {
              callback: function (value) {
                const label = this.getLabelForValue(value as number);
                return label.length > 12 ? label.slice(0, 9) + "..." : label;
              },
            },
            grid: {
              display: true,
              color: "#333",
              lineWidth: 1,
            },
          },
          y: {
            grid: {
              display: true,
              color: "#333",
              lineWidth: 1,
            },
          },
        },
      },
    });
  };

  const renderCharts = () => {
    const topN = (obj: Record<string, number>, n: number) =>
      Object.entries(obj)
        .sort((a, b) => b[1] - a[1])
        .slice(0, n);

    const bottomN = (obj: Record<string, number>, n: number) =>
      Object.entries(obj)
        .sort((a, b) => a[1] - b[1])
        .slice(0, n);

    const sorted = (obj: Record<string, number>) =>
      Object.entries(obj).sort((a, b) => b[1] - a[1]);

    let data: [string, number][];
    let colors: string[];
    let min: number;
    let max: number;

    //// CHART KCAL PER PORTION ////
    data = sorted(recipeCalories);
    // data = Object.entries(recipeCalories);
    min = Math.min(...data.map(([, v]) => v));
    max = Math.max(...data.map(([, v]) => v));
    colors = data.map(([, v]) =>
      interpolateKcalColor(v, min, max, "#087f5b", "#c92a2a"),
    );
    createChart(
      canvasRefs.calories.current,
      chartRefs.calories,
      data.map(([k]) => k),
      data.map(([, v]) => v),
      colors,
      "kcal",
    );

    data = topN(recipeCalories, 10);
    createChart(
      canvasRefs.tCalories.current,
      chartRefs.tCalories,
      data.map(([k]) => k),
      data.map(([, v]) => v),
      kcalTopColors,
      "kcal",
    );

    data = bottomN(recipeCalories, 10);
    createChart(
      canvasRefs.bCalories.current,
      chartRefs.bCalories,
      data.map(([k]) => k),
      data.map(([, v]) => v),
      kcalLowColors,
      "kcal",
    );

    //// CHART KCAL DENSITY ////
    // data = Object.entries(recipeKcalPer100g);
    data = sorted(recipeKcalPer100g);
    min = Math.min(...data.map(([, v]) => v));
    max = Math.max(...data.map(([, v]) => v));
    colors = data.map(([, v]) =>
      interpolateKcalColor(v, min, max, "#087f5b", "#c92a2a"),
    );
    createChart(
      canvasRefs.kcalDensity.current,
      chartRefs.kcalDensity,
      data.map(([k]) => k),
      data.map(([, v]) => v),
      colors,
      "kcal / 100g",
    );

    data = topN(recipeKcalPer100g, 10);
    createChart(
      canvasRefs.tKcalDensity.current,
      chartRefs.tKcalDensity,
      data.map(([k]) => k),
      data.map(([, v]) => v),
      kcalTopColors,
      "kcal / 100g",
    );

    data = bottomN(recipeKcalPer100g, 10);
    createChart(
      canvasRefs.bKcalDensity.current,
      chartRefs.bKcalDensity,
      data.map(([k]) => k),
      data.map(([, v]) => v),
      kcalLowColors,
      "kcal / 100g",
    );

    //// CHART ING USAGES ////
    const ingredientTypeMap: Record<string, IngredientType> = {};
    const ingredientColorMap: Record<string, string> = {};
    ingredientCollections.forEach((col) => {
      Object.values(col).forEach((i) => {
        ingredientTypeMap[i.name] = i.type;
        ingredientColorMap[i.name] =
          i.color ?? IngredientTypeData[i.type].color;
      });
    });

    data = topN(ingredientUsage, 10);
    colors = data.map(([k]) => ingredientColorMap[k]);
    createChart(
      canvasRefs.ingredientUsage.current,
      chartRefs.ingredientUsage,
      data.map(([k]) => k),
      data.map(([, v]) => v),
      colors,
      "razy",
    );

    //// CHART RECIPE TYPES ////
    const recipeTypesData = Object.entries(recipeTypeCount);
    data = recipeTypesData.map(([k, v]) => [
      MealTypesData[k as MealType].label,
      v,
    ]);
    colors = recipeTypesData.map(([k]) => MealTypesData[k as MealType].color);
    createChart(
      canvasRefs.recipeTypes.current,
      chartRefs.recipeTypes,
      data.map(([k]) => k),
      data.map(([, v]) => v),
      colors,
      "przepisów",
    );

    //// CHART ING TYPES ////
    const ingredientTypesData = Object.entries(ingredientTypeCount);
    data = ingredientTypesData.map(([k, v]) => [
      IngredientTypeData[k as IngredientType].label,
      v,
    ]);
    colors = ingredientTypesData.map(
      ([k]) => IngredientTypeData[k as IngredientType].color,
    );

    createChart(
      canvasRefs.ingredientTypes.current,
      chartRefs.ingredientTypes,
      data.map(([k]) => k),
      data.map(([, v]) => v),
      colors,
      "składników",
    );

    //// CHART DONE RECIPES ////
    data = [
      ["Zrobione", doneRecipeCount.yes],
      ["Nie zrobione", doneRecipeCount.no],
    ];
    createChart(
      canvasRefs.doneRecipes.current,
      chartRefs.doneRecipes,
      data.map(([k]) => k),
      data.map(([, v]) => v),
      ["#0ca678", "#f03e3e"],
      "przepisów",
    );

    //// CHART USED INGREDIENTS ////
    data = [
      ["Wszystkie", usedIngredients.all],
      ["Użyte", usedIngredients.used],
      ["Używane >3 razy", usedIngredients.mult],
      ["Zweryfikowane", usedIngredients.verified],
      ["Z ceną", usedIngredients.priced],
    ];
    colors = ["#666666", "#0ca678", "#3b5bdb", "#f59f00", "#ae3ec9"];
    createChart(
      canvasRefs.usedIngredients.current,
      chartRefs.usedIngredients,
      data.map(([k]) => k),
      data.map(([, v]) => v),
      colors,
      "składników",
    );

    //// CHART WEIGHT PER PORTION ////
    // data = Object.entries(recipeWeightsPerPortion);
    data = sorted(recipeWeightsPerPortion);
    min = Math.min(...data.map(([, v]) => v));
    max = Math.max(...data.map(([, v]) => v));
    colors = data.map(([, v]) =>
      interpolateKcalColor(v, min, max, "#3b5bdb", "#f76707"),
    );

    createChart(
      canvasRefs.weightsPerPortion.current,
      chartRefs.weightsPerPortion,
      data.map(([k]) => k),
      data.map(([, v]) => v),
      colors,
      "g / porc.",
    );

    data = topN(recipeWeightsPerPortion, 10);
    createChart(
      canvasRefs.tWeightsPerPortion.current,
      chartRefs.tWeightsPerPortion,
      data.map(([k]) => k),
      data.map(([, v]) => v),
      othTopColors,
      "g / porc.",
    );

    data = bottomN(recipeWeightsPerPortion, 10);
    createChart(
      canvasRefs.bWeightsPerPortion.current,
      chartRefs.bWeightsPerPortion,
      data.map(([k]) => k),
      data.map(([, v]) => v),
      othLowColors,
      "g / porc.",
    );

    //// CHART PRICE PER PORTION ////
    // data = Object.entries(recipePrices);
    data = sorted(recipePrices);
    min = Math.min(...data.map(([, v]) => v));
    max = Math.max(...data.map(([, v]) => v));
    colors = data.map(([, v]) =>
      interpolateKcalColor(v, min, max, "#087f5b", "#c92a2a"),
    );

    createChart(
      canvasRefs.recipePrice.current,
      chartRefs.recipePrice,
      data.map(([k]) => k),
      data.map(([, v]) => v),
      colors,
      "zł / porcję",
    );

    data = topN(recipePrices, 10);
    createChart(
      canvasRefs.tRecipePrice.current,
      chartRefs.tRecipePrice,
      data.map(([k]) => k),
      data.map(([, v]) => v),
      kcalTopColors,
      "zł / porcję",
    );

    data = bottomN(recipePrices, 10);
    createChart(
      canvasRefs.bRecipePrice.current,
      chartRefs.bRecipePrice,
      data.map(([k]) => k),
      data.map(([, v]) => v),
      kcalLowColors,
      "zł / porcję",
    );

    //// CHART PREPARATION TIME ////
    data = sorted(recipesPrepTimes);
    // data = Object.entries(recipesPrepTimes);
    min = Math.min(...data.map(([, v]) => v));
    max = Math.max(...data.map(([, v]) => v));
    colors = data.map(([, v]) =>
      interpolateKcalColor(v, min, max, "#3b5bdb", "#f76707"),
    );

    createChart(
      canvasRefs.preparationTime.current,
      chartRefs.preparationTime,
      data.map(([k]) => k),
      data.map(([, v]) => v),
      colors,
      "min",
    );

    data = topN(recipesPrepTimes, 10);
    createChart(
      canvasRefs.tPreparationTime.current,
      chartRefs.tPreparationTime,
      data.map(([k]) => k),
      data.map(([, v]) => v),
      othTopColors,
      "min",
    );

    data = bottomN(recipesPrepTimes, 10);
    createChart(
      canvasRefs.bPreparationTime.current,
      chartRefs.bPreparationTime,
      data.map(([k]) => k),
      data.map(([, v]) => v),
      othLowColors,
      "min",
    );

    //// CHART PRICE DISTRIBUTION ////
    const priceRanges = Array(11).fill(0);
    Object.values(allIngredients).forEach((ing) => {
      if (ing.price == null) return;
      const bucket = Math.min(Math.floor(ing.price / 10), 10);
      priceRanges[bucket]++;
    });
    data = [
      ["0-10", priceRanges[0]],
      ["10-20", priceRanges[1]],
      ["20-30", priceRanges[2]],
      ["30-40", priceRanges[3]],
      ["40-50", priceRanges[4]],
      ["50-60", priceRanges[5]],
      ["60-70", priceRanges[6]],
      ["70-80", priceRanges[7]],
      ["80-90", priceRanges[8]],
      ["90-100", priceRanges[9]],
      ["100+", priceRanges[10]],
    ];
    colors = priceRanges.map((_, i) =>
      interpolateKcalColor(i, 0, 11, "#2ecc71", "#ff6b6b"),
    );

    createChart(
      canvasRefs.ingredientPrice.current,
      chartRefs.ingredientPrice,
      data.map(([k]) => k),
      data.map(([, v]) => v),
      colors,
      "składników",
    );

    //// CHART KCAL DISTRIBUTION ////

    const kcalRanges = Array(9).fill(0);
    Object.values(allIngredients).forEach((ing) => {
      const bucket = Math.min(Math.floor(ing.kcalPer100g / 100), 8);
      kcalRanges[bucket]++;
    });
    data = [
      ["0-100", kcalRanges[0]],
      ["100-200", kcalRanges[1]],
      ["200-300", kcalRanges[2]],
      ["300-400", kcalRanges[3]],
      ["400-500", kcalRanges[4]],
      ["500-600", kcalRanges[5]],
      ["600-700", kcalRanges[6]],
      ["700-800", kcalRanges[7]],
      ["800+", kcalRanges[8]],
    ];
    colors = kcalRanges.map((_, i) =>
      interpolateKcalColor(i, 0, 8, "#2ecc71", "#ff6b6b"),
    );

    createChart(
      canvasRefs.kcalDistributionRef.current,
      chartRefs.kcalDistributionRef,
      data.map(([k]) => k),
      data.map(([, v]) => v),
      colors,
      "składników",
    );

    //// CHART UNIT USAGE ////
    const unitUsage: Record<string, number> = {};
    Object.values(allIngredients).forEach((ing) => {
      if (!ing.unitWeights) return;

      Object.keys(ing.unitWeights).forEach((u) => {
        unitUsage[u] = (unitUsage[u] ?? 0) + 1;
      });
    });
    const unitLabels = Object.keys(unitUsage).sort();
    data = unitLabels.map((u) => [u, unitUsage[u]]);
    min = Math.min(...data.map(([, v]) => v));
    max = Math.max(...data.map(([, v]) => v));
    colors = data.map(([_, v]) =>
      interpolateKcalColor(v, min, max, "#666666", "#ffffff"),
    );

    createChart(
      canvasRefs.unitChartRef.current,
      chartRefs.unitChartRef,
      data.map(([k]) => k),
      data.map(([, v]) => v),
      colors,
      "składników",
    );

    //// CHART COOKING METHODS ////
    const cookingMethodsData = Object.entries(cookingMethodUsages);
    data = cookingMethodsData.map(([k, v]) => [
      getCookingMethodLabel(k as CookingMethod),
      v,
    ]);
    min = Math.min(...data.map(([, v]) => v));
    max = Math.max(...data.map(([, v]) => v));
    colors = data.map(([_, v]) =>
      interpolateKcalColor(v, min, max, "#666666", "#ffffff"),
    );

    createChart(
      canvasRefs.cookingMethods.current,
      chartRefs.cookingMethods,
      data.map(([k]) => k),
      data.map(([, v]) => v),
      colors,
      "razy",
    );
  };

  useEffect(() => {
    requestAnimationFrame(() => {
      renderCharts();
    });
  }, []);

  return (
    <div className="statistics">
      <div className="page-title">
        <div className="page-title-background"></div>

        <h1 className="page-title-h1">
          <div className="page-title-h1-indicator">
            {8 * 3}
            <span>Wykresów</span>
          </div>
          <span className="h1-text">Statystki</span>
        </h1>
      </div>

      <div className="statistics-element">
        <h2>Rodzaje przepisów</h2>
        <div className="chart-wrapper">
          <canvas ref={canvasRefs.recipeTypes}></canvas>
        </div>
      </div>

      <div className="statistics-element">
        <h2>Rodzaje składników</h2>
        <div className="chart-wrapper">
          <canvas ref={canvasRefs.ingredientTypes}></canvas>
        </div>
      </div>

      <div className="statistics-element">
        <h2>Najczęściej używane składniki</h2>
        <div className="chart-wrapper">
          <canvas ref={canvasRefs.ingredientUsage}></canvas>
        </div>
      </div>

      <div className="statistics-element">
        <h2>Statystyki składników</h2>
        <div className="chart-wrapper">
          <canvas ref={canvasRefs.usedIngredients}></canvas>
        </div>
      </div>

      <div className="statistics-element">
        <h2>Składniki w przedziałach cenowych</h2>
        <div className="chart-wrapper">
          <canvas ref={canvasRefs.ingredientPrice} />
        </div>
      </div>

      <div className="statistics-element">
        <h2>Składniki w przedziałach kalorii</h2>
        <div className="chart-wrapper">
          <canvas ref={canvasRefs.kcalDistributionRef} />
        </div>
      </div>

      <div className="statistics-element">
        <h2>Metody przygotowania posiłków</h2>
        <div className="chart-wrapper">
          <canvas ref={canvasRefs.cookingMethods}></canvas>
        </div>
      </div>

      <div className="statistics-element">
        <h2>Użycia jednostek</h2>
        <div className="chart-wrapper">
          <canvas ref={canvasRefs.unitChartRef} />
        </div>
      </div>

      <div className="statistics-element">
        <h2>
          Wykonane przepisy{" "}
          {((100 * doneRecipeCount.yes) / recipes.length).toFixed(1)}%
        </h2>
        <div className="chart-wrapper">
          <canvas ref={canvasRefs.doneRecipes}></canvas>
        </div>
      </div>

      <div className="statistics-element">
        <h2>Cena w przeliczniu na porcję</h2>
        <div className="chart-wrapper">
          <canvas ref={canvasRefs.recipePrice}></canvas>
        </div>
      </div>
      <div className="statistics-element">
        <h2>Najdroższe posiłki</h2>
        <div className="chart-wrapper">
          <canvas ref={canvasRefs.tRecipePrice}></canvas>
        </div>
      </div>
      <div className="statistics-element">
        <h2>Najtańsze posiłki</h2>
        <div className="chart-wrapper">
          <canvas ref={canvasRefs.bRecipePrice}></canvas>
        </div>
      </div>

      <div className="statistics-element">
        <h2>Kaloryczność w przeliczeniu na 100 g</h2>
        <div className="chart-wrapper">
          <canvas ref={canvasRefs.kcalDensity}></canvas>
        </div>
      </div>
      <div className="statistics-element">
        <h2>Najwyższa gęstość kaloryczna</h2>
        <div className="chart-wrapper">
          <canvas ref={canvasRefs.tKcalDensity}></canvas>
        </div>
      </div>
      <div className="statistics-element">
        <h2>Najmniejsza gęstość kaloryczna</h2>
        <div className="chart-wrapper">
          <canvas ref={canvasRefs.bKcalDensity}></canvas>
        </div>
      </div>

      <div className="statistics-element">
        <h2>Kaloryczność w przeliczeniu na porcję</h2>
        <div className="chart-wrapper">
          <canvas ref={canvasRefs.calories}></canvas>
        </div>
      </div>
      <div className="statistics-element">
        <h2>Najbardziej kaloryczne posiłki</h2>
        <div className="chart-wrapper">
          <canvas ref={canvasRefs.tCalories}></canvas>
        </div>
      </div>
      <div className="statistics-element">
        <h2>Najmniej kaloryczne posiłki</h2>
        <div className="chart-wrapper">
          <canvas ref={canvasRefs.bCalories}></canvas>
        </div>
      </div>

      {/* time */}
      <div className="statistics-element">
        <h2>Czas przygotowania posiłku</h2>
        <div className="chart-wrapper">
          <canvas ref={canvasRefs.preparationTime}></canvas>
        </div>
      </div>
      <div className="statistics-element">
        <h2>Najdłuższe posiłki</h2>
        <div className="chart-wrapper">
          <canvas ref={canvasRefs.tPreparationTime}></canvas>
        </div>
      </div>
      <div className="statistics-element">
        <h2>Najszybsze posiłki</h2>
        <div className="chart-wrapper">
          <canvas ref={canvasRefs.bPreparationTime}></canvas>
        </div>
      </div>

      {/* weight */}
      <div className="statistics-element">
        <h2>Masy posiłków</h2>
        <div className="chart-wrapper">
          <canvas ref={canvasRefs.weightsPerPortion}></canvas>
        </div>
      </div>
      <div className="statistics-element">
        <h2>Najcięższe posiłki</h2>
        <div className="chart-wrapper">
          <canvas ref={canvasRefs.tWeightsPerPortion}></canvas>
        </div>
      </div>
      <div className="statistics-element">
        <h2>Najlżejsze posiłki</h2>
        <div className="chart-wrapper">
          <canvas ref={canvasRefs.bWeightsPerPortion}></canvas>
        </div>
      </div>
    </div>
  );
}

export default Statistics;
