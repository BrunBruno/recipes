import { Bar } from "react-chartjs-2";
import type { DayRecord } from "../user-page/user-page-data";
import "./history-page.css";
import { DAILY_NUTRIENTS } from "../../utils";

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
      <h1>Historia dni</h1>

      {history.length === 0 ? (
        <p>Brak zapisanych dni</p>
      ) : (
        <div className="history-list">
          {history
            .slice()
            .sort((a, b) => b.date.localeCompare(a.date))
            .map((day) => (
              <div key={day.date} className="history-card">
                <h3>{day.date}</h3>

                <div className="history-macros">
                  <span>🔥 {day.kcal} kcal</span>
                  <span>🥩 {day.protein} g</span>
                  <span>🍞 {day.carbs} g</span>
                  <span>🧈 {day.fat} g</span>
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
