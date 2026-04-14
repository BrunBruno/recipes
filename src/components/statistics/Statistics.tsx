import "./statistics.css";
import { useEffect, useRef } from "react";
import UtilsIcon from "../../assets/utilsIcon";
import type { IngredientType, MealType } from "../../types";
import {
  interpolateColor,
  kcalTopColors,
  kcalLowColors,
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
  countRecipeWeight,
  countRecipeWeightPerPortion,
  countRecipePreparationTime,
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

type StatisticsProps = {
  showStatistics: boolean;
  setShowStatistics: React.Dispatch<React.SetStateAction<boolean>>;
};

const recipeTypeCount = countRecipesTypes(recipes);
const ingredientTypeCount = countIngredientTypes();
const doneRecipeCount = countDoneRecipes(recipes);
const ingredientUsage = countIngredientUsage(recipes);
const recipeCalories = countRecipeCalories(recipes);
const recipeKcalPer100g = countRecipeKcalPer100g(recipes);
const usedIngredients = countUsedIngredients(ingredientUsage);
const recipeWeights = countRecipeWeight(recipes);
const recipeWeightsPerPortion = countRecipeWeightPerPortion(recipes);
const recipesPrepTimes = countRecipePreparationTime(recipes);

function Statistics({ showStatistics, setShowStatistics }: StatisticsProps) {
  const canvasRefs = {
    calories: useRef<HTMLCanvasElement | null>(null),
    kcalDensity: useRef<HTMLCanvasElement | null>(null),
    recipeTypes: useRef<HTMLCanvasElement | null>(null),
    ingredientTypes: useRef<HTMLCanvasElement | null>(null),
    doneRecipes: useRef<HTMLCanvasElement | null>(null),
    ingredientUsage: useRef<HTMLCanvasElement | null>(null),
    topCalories: useRef<HTMLCanvasElement | null>(null),
    bottomCalories: useRef<HTMLCanvasElement | null>(null),
    topKcalDensity: useRef<HTMLCanvasElement | null>(null),
    bottomKcalDensity: useRef<HTMLCanvasElement | null>(null),
    usedIngredients: useRef<HTMLCanvasElement | null>(null),
    weights: useRef<HTMLCanvasElement | null>(null),
    weightsPerPortion: useRef<HTMLCanvasElement | null>(null),
    preparationTime: useRef<HTMLCanvasElement | null>(null),
  };
  const chartRefs = {
    calories: useRef<Chart | null>(null),
    kcalDensity: useRef<Chart | null>(null),
    recipeTypes: useRef<Chart | null>(null),
    ingredientTypes: useRef<Chart | null>(null),
    doneRecipes: useRef<Chart | null>(null),
    ingredientUsage: useRef<Chart | null>(null),
    topCalories: useRef<Chart | null>(null),
    bottomCalories: useRef<Chart | null>(null),
    topKcalDensity: useRef<Chart | null>(null),
    bottomKcalDensity: useRef<Chart | null>(null),
    usedIngredients: useRef<Chart | null>(null),
    weights: useRef<Chart | null>(null),
    weightsPerPortion: useRef<Chart | null>(null),
    preparationTime: useRef<Chart | null>(null),
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
              color: "#222",
              lineWidth: 1,
            },
          },
          y: {
            grid: {
              display: true,
              color: "#222",
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

    //// CHART ////
    const allKcal = sorted(recipeCalories);
    const minKcal = Math.min(...allKcal.map(([, v]) => v));
    const maxKcal = Math.max(...allKcal.map(([, v]) => v));

    const allKcalColors = allKcal.map(([, v]) =>
      interpolateColor(v, minKcal, maxKcal),
    );
    createChart(
      canvasRefs.calories.current,
      chartRefs.calories,
      allKcal.map(([k]) => k),
      allKcal.map(([, v]) => v),
      allKcalColors,
      "kcal",
    );

    //// CHART ////
    const allKcalDensity = sorted(recipeKcalPer100g);
    const minKcalDen = Math.min(...allKcalDensity.map(([, v]) => v));
    const maxKcalDen = Math.max(...allKcalDensity.map(([, v]) => v));
    const allKcalDenColors = allKcalDensity.map(([, v]) =>
      interpolateColor(v, minKcalDen, maxKcalDen),
    );
    createChart(
      canvasRefs.kcalDensity.current,
      chartRefs.kcalDensity,
      allKcalDensity.map(([k]) => k),
      allKcalDensity.map(([, v]) => v),
      allKcalDenColors,
      "kcal / 100g",
    );

    //// CHART ////
    const topKcal = topN(recipeCalories, 10);
    createChart(
      canvasRefs.topCalories.current,
      chartRefs.topCalories,
      topKcal.map(([k]) => k),
      topKcal.map(([, v]) => v),
      kcalTopColors,
      "kcal",
    );

    //// CHART ////
    const lowKcal = bottomN(recipeCalories, 10);
    createChart(
      canvasRefs.bottomCalories.current,
      chartRefs.bottomCalories,
      lowKcal.map(([k]) => k),
      lowKcal.map(([, v]) => v),
      kcalLowColors,
      "kcal",
    );

    //// CHART ////
    const topKcalDensity = topN(recipeKcalPer100g, 10);
    createChart(
      canvasRefs.topKcalDensity.current,
      chartRefs.topKcalDensity,
      topKcalDensity.map(([k]) => k),
      topKcalDensity.map(([, v]) => v),
      kcalTopColors,
      "kcal / 100g",
    );

    //// CHART ////
    const lowKcalDensity = bottomN(recipeKcalPer100g, 10);
    createChart(
      canvasRefs.bottomKcalDensity.current,
      chartRefs.bottomKcalDensity,
      lowKcalDensity.map(([k]) => k),
      lowKcalDensity.map(([, v]) => v),
      kcalLowColors,
      "kcal / 100g",
    );

    //// CHART ////
    const ingredientTypeMap: Record<string, IngredientType> = {};
    const ingredientColorMap: Record<string, string> = {};

    ingredientCollections.forEach((col) => {
      Object.values(col).forEach((i) => {
        ingredientTypeMap[i.name] = i.type;
        ingredientColorMap[i.name] =
          i.color ?? IngredientTypeData[i.type].color;
      });
    });

    const topIng = topN(ingredientUsage, 10);
    createChart(
      canvasRefs.ingredientUsage.current,
      chartRefs.ingredientUsage,
      topIng.map(([k]) => k),
      topIng.map(([, v]) => v),
      topIng.map(([k]) => ingredientColorMap[k]),
      "",
    );

    //// CHART ////
    const recipeLabels = Object.keys(recipeTypeCount);
    const recipeValues = Object.values(recipeTypeCount);
    createChart(
      canvasRefs.recipeTypes.current,
      chartRefs.recipeTypes,
      recipeLabels.map((k) => MealTypesData[k as MealType].label),
      recipeValues,
      recipeLabels.map((k) => MealTypesData[k as MealType].color),
      "",
    );

    //// CHART ////
    const itcSorted = Object.entries(ingredientTypeCount);
    const ingLabels = itcSorted.map(([k]) => k as IngredientType);
    const ingValues = itcSorted.map(([, v]) => v);
    createChart(
      canvasRefs.ingredientTypes.current,
      chartRefs.ingredientTypes,
      ingLabels.map((k) => IngredientTypeData[k as IngredientType].label),
      ingValues,
      ingLabels.map((k) => IngredientTypeData[k as IngredientType].color),
      "",
    );

    //// CHART ////
    createChart(
      canvasRefs.doneRecipes.current,
      chartRefs.doneRecipes,
      ["Zrobione", "Nie zrobione"],
      [doneRecipeCount.yes, doneRecipeCount.no],
      ["#0ca678", "#f03e3e"],
      "",
    );

    //// CHART ////
    createChart(
      canvasRefs.usedIngredients.current,
      chartRefs.usedIngredients,
      ["Użyte", "Nie użyte"],
      [usedIngredients.yes, usedIngredients.no],
      ["#0ca678", "#f03e3e"],
      "",
    );

    //// CHART ////
    const allWeights = sorted(recipeWeights);
    const minWeight = Math.min(...allWeights.map(([, v]) => v));
    const maxWeight = Math.max(...allWeights.map(([, v]) => v));
    const allWeightColors = allWeights.map(([, v]) =>
      interpolateColor(v, minWeight, maxWeight, "#3b5bdb", "#f76707"),
    );
    createChart(
      canvasRefs.weights.current,
      chartRefs.weights,
      allWeights.map(([k]) => k),
      allWeights.map(([, v]) => v),
      allWeightColors,
      "g",
    );

    //// CHART ////
    const allWeightsPerPortion = sorted(recipeWeightsPerPortion);
    const minWeightsPerPortion = Math.min(
      ...allWeightsPerPortion.map(([, v]) => v),
    );
    const maxWeightsPerPortion = Math.max(
      ...allWeightsPerPortion.map(([, v]) => v),
    );
    const allWeightsPerPortionColors = allWeightsPerPortion.map(([, v]) =>
      interpolateColor(
        v,
        minWeightsPerPortion,
        maxWeightsPerPortion,
        "#3b5bdb",
        "#f76707",
      ),
    );
    createChart(
      canvasRefs.weightsPerPortion.current,
      chartRefs.weightsPerPortion,
      allWeightsPerPortion.map(([k]) => k),
      allWeightsPerPortion.map(([, v]) => v),
      allWeightsPerPortionColors,
      "g / porc.",
    );

    //// CHART ////
    const allPrepTime = sorted(recipesPrepTimes);
    const minPrepTime = Math.min(...allPrepTime.map(([, v]) => v));
    const maxPrepTime = Math.max(...allPrepTime.map(([, v]) => v));
    const allPrepTimeColors = allPrepTime.map(([, v]) =>
      interpolateColor(v, minPrepTime, maxPrepTime, "#ae3ec9", "#f59f00"),
    );
    createChart(
      canvasRefs.preparationTime.current,
      chartRefs.preparationTime,
      allPrepTime.map(([k]) => k),
      allPrepTime.map(([, v]) => v),
      allPrepTimeColors,
      "min",
    );
  };

  useEffect(() => {
    if (!showStatistics) return;

    requestAnimationFrame(() => {
      renderCharts();
    });
  }, [showStatistics]);

  return (
    <div className="statistics">
      <div
        className="close-statistics"
        onClick={() => {
          setShowStatistics(false);
        }}
      >
        <UtilsIcon name="close" color="#fff" />
      </div>

      <div className="statistics-element">
        <h2>Dziesięć najbardziej kalorycznych przepisów na 100g</h2>
        <div className="chart-wrapper">
          <canvas ref={canvasRefs.topKcalDensity}></canvas>
        </div>
      </div>

      <div className="statistics-element">
        <h2>Dziesięć najmniej kalorycznych przepisów na 100g</h2>
        <div className="chart-wrapper">
          <canvas ref={canvasRefs.bottomKcalDensity}></canvas>
        </div>
      </div>

      <div className="statistics-element">
        <h2>Dziesięć najbardziej kalorycznych przepisów na porcję</h2>
        <div className="chart-wrapper">
          <canvas ref={canvasRefs.topCalories}></canvas>
        </div>
      </div>

      <div className="statistics-element">
        <h2>Dziesięć najmniej kalorycznych przepisów na porcję</h2>
        <div className="chart-wrapper">
          <canvas ref={canvasRefs.bottomCalories}></canvas>
        </div>
      </div>

      <div className="statistics-element">
        <h2>Najczęściej używane składniki</h2>
        <div className="chart-wrapper">
          <canvas ref={canvasRefs.ingredientUsage}></canvas>
        </div>
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
        <h2>Wykonane przepisy</h2>
        <div className="chart-wrapper">
          <canvas ref={canvasRefs.doneRecipes}></canvas>
        </div>
      </div>

      <div className="statistics-element">
        <h2>Nieużyte składniki</h2>
        <div className="chart-wrapper">
          <canvas ref={canvasRefs.usedIngredients}></canvas>
        </div>
      </div>

      <div className="statistics-element">
        <h2>Czas przygotowania posiłku</h2>
        <div className="chart-wrapper">
          <canvas ref={canvasRefs.preparationTime}></canvas>
        </div>
      </div>

      <div className="statistics-element">
        <h2>Całkowita masa posiłku</h2>
        <div className="chart-wrapper">
          <canvas ref={canvasRefs.weights}></canvas>
        </div>
      </div>

      <div className="statistics-element">
        <h2>Masa posiłku w przeliczeniu na porcję</h2>
        <div className="chart-wrapper">
          <canvas ref={canvasRefs.weightsPerPortion}></canvas>
        </div>
      </div>

      <div className="statistics-element">
        <h2>Kaloryczność w przeliczeniu na porcję</h2>
        <div className="chart-wrapper">
          <canvas ref={canvasRefs.calories}></canvas>
        </div>
      </div>

      <div className="statistics-element">
        <h2>Kaloryczność w przeliczeniu na 100 g</h2>
        <div className="chart-wrapper">
          <canvas ref={canvasRefs.kcalDensity}></canvas>
        </div>
      </div>
    </div>
  );
}

export default Statistics;
