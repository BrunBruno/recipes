import { Bar } from "react-chartjs-2";
import type { DayRecord } from "../user-page/user-page-data";
import "./history-page.css";
import { DAILY_NUTRIENTS, interpolateColor } from "../../utils";
import MacroIcon from "../../assets/macroIcon";
import UtilsIcon from "../../assets/utilsIcon";

type HistoryPageProps = {
  history: DayRecord[];
};

export default function HistoryPage({ history }: HistoryPageProps) {
  const createChartData = (
    key: "kcal" | "fat" | "carbs" | "protein",
    label: string,
    lightColor: string,
    darkColor: string,
    target: number,
  ) => {
    const chartData = Array.from({ length: 30 }, (_, i) => {
      const date = new Date();
      date.setHours(0, 0, 0, 0);
      date.setDate(date.getDate() - (29 - i));

      const dateKey = date.toISOString().split("T")[0];
      const record = history.find((d) => d.date === dateKey);

      return {
        date: dateKey.slice(5),
        value: record?.[key] ?? 0,
      };
    });

    return {
      labels: chartData.map((d) => d.date),
      datasets: [
        {
          label,
          data: chartData.map((d) => d.value),
          backgroundColor: chartData.map((d) =>
            interpolateColor(d.value, target, lightColor, darkColor),
          ),
          borderRadius: 2,
          borderSkipped: false,
        },
      ],
    };
  };

  const createTargetPlugin = (target: number, label: string) => ({
    id: `${label}Target`,
    afterDraw(chart: any) {
      const { ctx, chartArea, scales } = chart;

      const y = scales.y.getPixelForValue(target);

      ctx.save();

      ctx.beginPath();
      ctx.moveTo(chartArea.left, y);
      ctx.lineTo(chartArea.right, y);
      ctx.lineWidth = 2;
      ctx.strokeStyle = "red";
      ctx.stroke();

      ctx.fillStyle = "red";
      ctx.font = "bold 12px Arial";
      ctx.fillText(`${target} ${label}`, chartArea.right - 70, y - 8);

      ctx.restore();
    },
  });

  const kcalData = createChartData(
    "kcal",
    "Calories",
    "#e6fcf5",
    "#087f5b",
    DAILY_NUTRIENTS[0],
  );

  const fatData = createChartData(
    "fat",
    "Fat",
    "#fff4e6",
    "#d9480f",
    DAILY_NUTRIENTS[1],
  );

  const carbsData = createChartData(
    "carbs",
    "Carbs",
    "#e3fafc",
    "#0b7285",
    DAILY_NUTRIENTS[2],
  );

  const proteinData = createChartData(
    "protein",
    "Protein",
    "#fff5f5",
    "#c92a2a",
    DAILY_NUTRIENTS[3],
  );

  const kcalPlugin = createTargetPlugin(DAILY_NUTRIENTS[0], "kcal");
  const fatPlugin = createTargetPlugin(DAILY_NUTRIENTS[1], "g");
  const carbsPlugin = createTargetPlugin(DAILY_NUTRIENTS[2], "g");
  const proteinPlugin = createTargetPlugin(DAILY_NUTRIENTS[3], "g");

  const createOptions = (data: number[], target: number) => ({
    responsive: true,
    maintainAspectRatio: false,

    plugins: {
      legend: {
        display: false,
      },
      datalabels: {
        display: false,
      },
    },

    scales: {
      x: {
        display: false,
        grid: {
          display: false,
        },
      },
      y: {
        beginAtZero: true,
        max: Math.round(Math.max(target, Math.max(...data, 0)) * 1.1),
        ticks: {
          color: "#ccc",
        },
        grid: {
          color: "#333",
        },
      },
    },
  });

  const getChartStats = (data: number[], target: number) => {
    const daysWithData = data.filter((v) => v > 0);

    const avg =
      daysWithData.length > 0
        ? daysWithData.reduce((a, b) => a + b, 0) / daysWithData.length
        : 0;

    const ok = data.filter((v) => v >= target).length;

    return {
      avg: avg.toFixed(2),
      ok,
    };
  };

  const kcalStats = getChartStats(
    kcalData.datasets[0].data,
    DAILY_NUTRIENTS[0],
  );

  const fatStats = getChartStats(fatData.datasets[0].data, DAILY_NUTRIENTS[1]);

  const carbsStats = getChartStats(
    carbsData.datasets[0].data,
    DAILY_NUTRIENTS[2],
  );

  const proteinStats = getChartStats(
    proteinData.datasets[0].data,
    DAILY_NUTRIENTS[3],
  );

  return (
    <div className="history-page">
      <div className="page-title">
        <div className="page-title-background"></div>

        <h1 className="page-title-h1">
          <span className="h1-text">Historia Dni</span>
        </h1>

        <div className="history-summary">
          {kcalData.datasets[0].data.map((record, i) => (
            <div
              className="dot"
              key={`dot${i}`}
              style={{
                backgroundColor:
                  record >= DAILY_NUTRIENTS[0]
                    ? "#087f5b"
                    : record === 0
                      ? "#666666"
                      : "#c92a2a",
              }}
            >
              <span>{kcalData.labels[i]}</span>
            </div>
          ))}
        </div>
      </div>

      {history.length === 0 ? (
        <p>Brak zapisanych dni</p>
      ) : (
        <div className="history-list">
          {history
            .slice()
            .sort((a, b) => b.date.localeCompare(a.date))
            .map((day) => (
              <div key={day.date} className="history-card">
                <p
                  className="hist-card-ind"
                  style={{
                    background: `conic-gradient(
                      from -90deg at 50% 50%,
                      #ffffff ${Math.max(0, 2 * ((100 * (DAILY_NUTRIENTS[0] / 2 + day.kcal)) / DAILY_NUTRIENTS[0] - 50)) / 2}%,
                      #666666 ${Math.max(0, 2 * ((100 * (DAILY_NUTRIENTS[0] / 2 + day.kcal)) / DAILY_NUTRIENTS[0] - 50)) / 2}%,
                      #666666 ${Math.min(100, (2 * (100 * (DAILY_NUTRIENTS[0] / 2 + day.kcal))) / DAILY_NUTRIENTS[0])}%

                    )`,
                  }}
                />
                <p className="hist-card-check">
                  {day.kcal / DAILY_NUTRIENTS[0] >= 1 && (
                    <UtilsIcon name="check" color="#fff" />
                  )}
                </p>

                <h3>
                  <span>{day.date}</span>
                  <span>
                    {((100 * day.kcal) / DAILY_NUTRIENTS[0]).toFixed(2)}%
                  </span>
                </h3>

                <div className="history-macros">
                  <span style={{ color: "#63e6be" }}>
                    <MacroIcon type="kcal" /> {day.kcal} kcal
                  </span>
                  <span style={{ color: "#ffa94d" }}>
                    <MacroIcon type="fats" /> {day.fat} g
                  </span>
                  <span style={{ color: "#99e9f2" }}>
                    <MacroIcon type="carb" /> {day.carbs} g
                  </span>
                  <span style={{ color: "#ff8787" }}>
                    <MacroIcon type="prot" /> {day.protein} g
                  </span>
                  <span style={{ color: "#c0eb75" }}>
                    <MacroIcon type="veg" /> {day.veg} g
                  </span>
                </div>
              </div>
            ))}
        </div>
      )}

      <div className="history-chart">
        <div className="bar-chart">
          <h3>
            Kalorie (30dni){" "}
            <span>
              średnia: {kcalStats.avg} kcal, wypełniono: {kcalStats.ok}/30
            </span>
          </h3>
          <Bar
            data={kcalData}
            options={createOptions(
              kcalData.datasets[0].data,
              DAILY_NUTRIENTS[0],
            )}
            plugins={[kcalPlugin]}
          />
        </div>

        <div className="bar-chart">
          <h3>
            Tłuszcze (30dni){" "}
            <span>
              średnia: {fatStats.avg} g, wypełniono: {fatStats.ok}/30
            </span>
          </h3>
          <Bar
            data={fatData}
            options={createOptions(
              fatData.datasets[0].data,
              DAILY_NUTRIENTS[1],
            )}
            plugins={[fatPlugin]}
          />
        </div>

        <div className="bar-chart">
          <h3>
            Węglowodany (30dni){" "}
            <span>
              średnia: {carbsStats.avg} g, wypełniono: {carbsStats.ok}/30
            </span>
          </h3>
          <Bar
            data={carbsData}
            options={createOptions(
              carbsData.datasets[0].data,
              DAILY_NUTRIENTS[2],
            )}
            plugins={[carbsPlugin]}
          />
        </div>

        <div className="bar-chart">
          <h3>
            Białka (30dni){" "}
            <span>
              średnia: {proteinStats.avg} g, wypełniono: {proteinStats.ok}/30
            </span>
          </h3>
          <Bar
            data={proteinData}
            options={createOptions(
              proteinData.datasets[0].data,
              DAILY_NUTRIENTS[3],
            )}
            plugins={[proteinPlugin]}
          />
        </div>
      </div>
    </div>
  );
}
