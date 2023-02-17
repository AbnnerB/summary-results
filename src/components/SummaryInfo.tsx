import React from "react";

import "./style.css";

interface SummaryInfoProps {
  categorie: string;
  score: number;
  icon: string;
}

export default function SummaryInfo({
  categorie,
  score,
  icon,
}: SummaryInfoProps) {
  return (
    <div className="summaryInfo">
      <div className="iconAndNameDetail">
        {/* <img src={icon} alt="alternativoProps" /> */}
        <img src="../assets/icon-reaction.svg" alt="ww" />
        <span>{categorie}</span>
      </div>
      <div className="score">
        <span>
          <b>{score}</b>/100
        </span>
      </div>
    </div>
  );
}
