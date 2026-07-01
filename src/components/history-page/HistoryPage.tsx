import type { DayRecord } from "../user-page/user-page-data";
import "./history-page.css";

type HistoryPageProps = {
  history: DayRecord[];
};

export default function HistoryPage({ history }: HistoryPageProps) {
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
    </div>
  );
}