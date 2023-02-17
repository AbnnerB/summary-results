import { useState } from "react";
import "./App.css";
import SummaryInfo from "./components/SummaryInfo";

import Data from "./data.json";

function App() {
  const [count, setCount] = useState(0);

  const [infoData, setInfoData] = useState(Data);

  return (
    <main className="app">
      <div className="containerContent">
        <div
          className="results"
          style={{ backgroundColor: "hsl(241, 81%, 54%)" }}
        >
          <h3>Your Results</h3>
          <span>Value</span>
          <h3>Great</h3>
          <p>
            You scored higher than 65% of the peole who have taken these tests.
          </p>
        </div>
        <div className="summary">
          <h3>Summary</h3>

          {infoData.map((item) => (
            <SummaryInfo
              categorie={item.category}
              score={item.score}
              icon={item.icon}
            />
          ))}
          <button>Continue</button>
        </div>
      </div>
    </main>
  );
}

export default App;
