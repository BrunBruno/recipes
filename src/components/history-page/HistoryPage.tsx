import { Bar } from "react-chartjs-2";
import type { DayRecord } from "../user-page/user-page-data";
import "./history-page.css";
import { DAILY_NUTRIENTS } from "../../utils";
import MacroIcon from "../../assets/macroIcon";

type HistoryPageProps = {
  history: DayRecord[];
};

export default function HistoryPage({ history }: HistoryPageProps) {
  const chartData = Array.from({ length: 30 }, (_, i) => {
    const date = new Date();
    date.setHours(0, 0, 0, 0);
    date.setDate(date.getDate() - (29 - i));

    const key = date.toISOString().split("T")[0];

    const record = history.find((d) => d.date === key);

    return {
      date: key.slice(5),
      kcal: record?.kcal ?? 0,
    };
  });

  const kcalTargetPlugin = {
    id: "kcalTarget",
    afterDraw(chart: any) {
      const { ctx, chartArea, scales } = chart;

      const y = scales.y.getPixelForValue(DAILY_NUTRIENTS[0]);

      ctx.save();

      ctx.beginPath();
      ctx.moveTo(chartArea.left, y);
      ctx.lineTo(chartArea.right, y);
      ctx.lineWidth = 2;
      ctx.strokeStyle = "red";
      ctx.stroke();

      ctx.fillStyle = "red";
      ctx.font = "bold 12px Arial";
      ctx.fillText(`${DAILY_NUTRIENTS[0]} kcal`, chartArea.right - 70, y - 8);

      ctx.restore();
    },
  };

  const valuePlugin = {
    id: "valuePlugin",
    afterDatasetsDraw(chart: any) {
      const { ctx } = chart;

      chart.data.datasets.forEach((dataset: any, i: number) => {
        const meta = chart.getDatasetMeta(i);

        meta.data.forEach((bar: any, index: number) => {
          const value = dataset.data[index];

          if (!value) return;

          ctx.save();
          ctx.fillStyle = "#fff";
          ctx.font = "bold 11px Arial";
          ctx.textAlign = "center";

          ctx.fillText(value, bar.x, bar.y - 8);

          ctx.restore();
        });
      });
    },
  };

  const data = {
    labels: chartData.map((d) => d.date),
    datasets: [
      {
        label: "Kalorie",
        data: chartData.map((d) => d.kcal),
        backgroundColor: "#099268",
        borderRadius: 2,
        borderSkipped: false,
      },
    ],
  };

  const options = {
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
        grid: {
          display: false,
        },
        ticks: {
          color: "#ccc",
        },
      },
      y: {
        beginAtZero: true,
        ticks: {
          color: "#ccc",
        },
        grid: {
          color: "#333",
        },
      },
    },
  };

  return (
    <div className="history-page">
      <div className="page-title">
        <h1 className="page-title-h1">
          <span className="h1-text">Historia Dni</span>
        </h1>
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
                      from 0deg at 50% 50%,
                      #ffffff ${Math.max(0, 2 * ((100 * (DAILY_NUTRIENTS[0] / 2 + day.kcal)) / DAILY_NUTRIENTS[0] - 50)) / 2}%,
                      #666666 ${Math.max(0, 2 * ((100 * (DAILY_NUTRIENTS[0] / 2 + day.kcal)) / DAILY_NUTRIENTS[0] - 50)) / 2}%,
                      #666666 ${Math.min(100, (2 * (100 * (DAILY_NUTRIENTS[0] / 2 + day.kcal))) / DAILY_NUTRIENTS[0])}%

                    )`,
                  }}
                />
                <h3>
                  <span>{day.date}</span>
                  <span>
                    {((100 * day.kcal) / DAILY_NUTRIENTS[0]).toFixed(2)}%
                  </span>
                </h3>

                <div className="history-macros">
                  {/* // backgroundColor: ["#099268", "#f59f00", "#1098ad", "#f03e3e"], */}
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
                </div>
              </div>
            ))}
        </div>
      )}

      <div className="history-chart">
        <Bar
          data={data}
          options={options}
          plugins={[valuePlugin, kcalTargetPlugin]}
        />
      </div>
    </div>
  );
}
