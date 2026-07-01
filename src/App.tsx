import { useEffect, useRef, useState } from "react";
import "./app.css";
import RecipesPage from "./components/recipes-page/RecipesPage";
import UserPage from "./components/user-page/UserPage";
import Ingredients from "./components/ingredients/Ingredients";
import Statistics from "./components/statistics/Statistics";
import type { DayIngredients } from "./types";
import {
  STORAGE_KEY,
  type DayRecord,
} from "./components/user-page/user-page-data";
import HistoryPage from "./components/history-page/HistoryPage";

type Page = "user" | "recipes" | "ingredients" | "history" | "stats";

function App() {
  const [dayIngredients, setDayIngredients] = useState<DayIngredients>({
    breakfast: [],
    lunch: [],
    dinner: [],
  });
  const [page, setPage] = useState<Page>("recipes");
  const [history, setHistory] = useState<DayRecord[]>(() => loadDayRecords());

  const prevRef = useRef(dayIngredients);

  useEffect(() => {
    const prev = prevRef.current;

    const nowEmpty =
      dayIngredients.breakfast.length === 0 &&
      dayIngredients.lunch.length === 0 &&
      dayIngredients.dinner.length === 0;

    const changed = JSON.stringify(prev) !== JSON.stringify(dayIngredients);

    if (!nowEmpty && changed) {
      setPage("user");
    }

    prevRef.current = dayIngredients;
  }, [dayIngredients]);

  function loadDayRecords(): DayRecord[] {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  }

  return (
    <main>
      {page === "user" && (
        <UserPage
          dayIngredients={dayIngredients}
          setDayIngredients={setDayIngredients}
          loadDayRecords={loadDayRecords}
          setHistory={setHistory}
        />
      )}
      {page === "history" && <HistoryPage history={history} />}
      {page === "recipes" && (
        <RecipesPage setDayIngredients={setDayIngredients} />
      )}
      {page === "ingredients" && <Ingredients />}
      {page === "stats" && <Statistics />}
      <nav>
        <div
          className="nav-item"
          onClick={() => {
            setPage("user");
          }}
        >
          <svg
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            fill="#eee"
          >
            <g>
              <path fill="none" d="M0 0h24v24H0z" />
              <path d="M3 4.995C3 3.893 3.893 3 4.995 3h14.01C20.107 3 21 3.893 21 4.995v14.01A1.995 1.995 0 0 1 19.005 21H4.995A1.995 1.995 0 0 1 3 19.005V4.995zM6.357 18h11.49a6.992 6.992 0 0 0-5.745-3 6.992 6.992 0 0 0-5.745 3zM12 13a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z" />
            </g>
          </svg>
        </div>
        <div
          className="nav-item"
          onClick={() => {
            setPage("history");
          }}
        >
          <svg
            fill="#eee"
            viewBox="-1 0 19 19"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M16.417 9.583A7.917 7.917 0 1 1 8.5 1.666a7.917 7.917 0 0 1 7.917 7.917zm-2.787.06a5.076 5.076 0 0 0-7.6-4.401 5.11 5.11 0 0 0-1.252 1.015V5.57a.396.396 0 0 0-.792 0v1.66a.396.396 0 0 0 .396.395H6.04a.396.396 0 0 0 0-.791h-.717A4.274 4.274 0 0 1 8.556 5.36a4.282 4.282 0 1 1-4.283 4.283.396.396 0 0 0-.792 0 5.074 5.074 0 1 0 10.15 0zm-4.763-.099V6.872a.396.396 0 0 0-.791 0v2.841a.395.395 0 0 0 .153.313l1.537 1.536a.396.396 0 1 0 .56-.56z" />
          </svg>
        </div>
        <div
          className="nav-item"
          onClick={() => {
            setPage("recipes");
          }}
        >
          <svg
            fill="#eee"
            viewBox="0 0 50 50"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12,39h32V2H12C8.691,2,6,4.691,6,8v34.417C6,45.496,8.691,48,12,48h32v-2H12c-2.168,0-4-1.641-4-3.583C8,40.501,9.757,39,12,39z M36.709,31.706C36.514,31.902,36.257,32,36,32c-0.255,0-0.511-0.097-0.705-0.292l-6.523-6.494l-1.76,1.76l-1.846-1.879l3.153-3.153l8.387,8.349C37.097,30.681,37.099,31.314,36.709,31.706z M16.286,10.007l7.733,7.781l-3.044,3.044L16.23,16C14.568,14.338,14.594,11.637,16.286,10.007z M14.329,30.293l13.024-13.024c-0.034-0.085-0.083-0.163-0.107-0.252c-0.399-1.509-0.322-3.426,1.045-4.777c2.031-2.094,5.497-2.989,6.998-1.505c1.501,1.571,0.596,4.909-1.435,6.916c-1.444,1.428-3.298,1.545-4.8,1.16c-0.104-0.027-0.196-0.081-0.294-0.122L14.743,31.707C14.548,31.902,15.292,32,15.036,32s-0.512-0.098-0.707-0.293C13.938,31.316,13.938,30.684,14.329,30.293z" />
          </svg>
        </div>
        <div
          className="nav-item"
          onClick={() => {
            setPage("ingredients");
          }}
        >
          <svg
            fill="#eee"
            viewBox="0 0 50 50"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M29 0C27.894531 0 27 0.898438 27 2L27 4C27 5.101563 27.894531 6 29 6L39 6C40.105469 6 41 5.101563 41 4L41 2C41 0.898438 40.105469 0 39 0 Z M 28.09375 7.875C27.164063 9.613281 26.363281 11.855469 25.78125 13.65625L40.53125 22L44 22L44 21.8125C44 19.492188 42.09375 12.074219 39.84375 7.90625C39.574219 7.964844 39.285156 8 39 8L29 8C28.6875 8 28.382813 7.941406 28.09375 7.875 Z M 14.625 13.78125C9.632813 13.78125 5.6875 17.167969 4.65625 22L12.25 22L19.59375 15.0625C18.089844 14.222656 16.398438 13.78125 14.625 13.78125 Z M 23.1875 14.6875C22.980469 14.710938 22.785156 14.816406 22.625 14.96875L15.15625 22L36.46875 22L23.8125 14.8125C23.621094 14.703125 23.394531 14.664063 23.1875 14.6875 Z M 2.84375 24C1.273438 24 0 25.273438 0 26.84375L0 30.15625C0 31.726563 1.273438 33 2.84375 33L47.15625 33C48.726563 33 50 31.726563 50 30.15625L50 26.84375C50 25.273438 48.726563 24 47.15625 24 Z M 3 35L3 36C3 36.195313 3.007813 36.304688 6.4375 47.4375C6.457031 47.503906 6.527344 47.65625 6.5625 47.71875C7.160156 48.789063 7.816406 50 9.21875 50L40.78125 50C42.519531 50 43.117188 48.507813 43.5625 47.4375C46.988281 36.304688 47 36.195313 47 36L47 35L37 35L37 45L34 45L34 35L30 35L30 45L27 45L27 35L23 35L23 45L20 45L20 35L16 35L16 45L13 45L13 35Z" />
          </svg>
        </div>
        <div
          className="nav-item"
          onClick={() => {
            setPage("stats");
          }}
        >
          <svg
            fill="#eee"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M20,2H4A2,2,0,0,0,2,4V20a2,2,0,0,0,2,2H20a2,2,0,0,0,2-2V4A2,2,0,0,0,20,2ZM9,17a1,1,0,0,1-2,0V15a1,1,0,0,1,2,0Zm4,0a1,1,0,0,1-2,0V11a1,1,0,0,1,2,0Zm4,0a1,1,0,0,1-2,0V7a1,1,0,0,1,2,0Z"></path>
          </svg>
        </div>
      </nav>
    </main>
  );
}

export default App;
