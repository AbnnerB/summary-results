import "./App.css";
import SummaryInfo from "./components/SummaryInfo";

import Data from "./data.json";

import { Oval } from "react-loader-spinner";
import { useEffect, useState } from "react";

function App() {
  const infoData = Data;

  const [showLoading, setShowLoading] = useState(true);

  function loading() {
    setTimeout(() => {
      setShowLoading(false);
    }, 2500);
  }

  useEffect(() => {
    loading();
  }, []);

  return (
    <main className="app">
      {showLoading ? (
        <div className="loadingDiv">
          <Oval
            height={80}
            width={80}
            color="#131a85"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
            ariaLabel="oval-loading"
            secondaryColor="#4d72a9"
            strokeWidth={2}
            strokeWidthSecondary={2}
          />
        </div>
      ) : (
        <div className="containerContent">
          <div
            className="results"
            style={{ backgroundColor: "hsl(241, 81%, 54%)" }}
          >
            <h3 className="resultTitle">Your Result</h3>
            <div className="scoreResult">
              <span className="value">76</span>
              <span className="loremInCircle"> of 100</span>
            </div>
            <h3>Great</h3>
            <p>
              You scored higher than 65% of the peole who have taken these
              tests.
            </p>
          </div>
          <div className="summary">
            <h3>Summary</h3>

            {infoData.map((item) => (
              <SummaryInfo
                key={item.category}
                categorie={item.category}
                score={item.score}
                icon={item.icon}
              />
            ))}
            <button>Continue</button>
          </div>
        </div>
      )}
    </main>
  );
}

export default App;
