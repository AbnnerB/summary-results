import React, { useEffect, useState } from "react";

import "./style.css";

import ImgReaction from "../assets/icon-reaction.svg";
import ImgMemory from "../assets/icon-memory.svg";
import ImgVerbal from "../assets/icon-verbal.svg";
import ImgVisual from "../assets/icon-visual.svg";
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
  const [imgIcon, setImgIcon] = useState("");

  useEffect(() => {
    if (icon === "./assets/images/icon-reaction.svg") {
      setImgIcon(ImgReaction);
    } else if (icon === "./assets/images/icon-memory.svg") {
      setImgIcon(ImgMemory);
    } else if (icon === "./assets/images/icon-verbal.svg") {
      setImgIcon(ImgVerbal);
    } else if (icon === "./assets/images/icon-visual.svg") {
      setImgIcon(ImgVisual);
    }
  }, []);

  return (
    <div
      className="summaryInfo"
      style={{
        backgroundColor:
          categorie === "Reaction"
            ? "hsla(0, 100%, 67%, 0.07)"
            : categorie === "Memory"
            ? "hsla(39, 100%, 56%, 0.07)"
            : categorie === "Verbal"
            ? "hsl(166, 100%, 37%, 0.07)"
            : "hsl(234, 85%, 45%, 0.07)",
        color:
          categorie === "Reaction"
            ? "hsl(0, 100%, 67%)"
            : categorie === "Memory"
            ? "hsl(39, 100%, 56%)"
            : categorie === "Verbal"
            ? "hsl(166, 100%, 37%)"
            : "hsl(234, 85%, 45%)",
      }}
    >
      <div className="iconAndNameDetail">
        <img src={imgIcon} alt={categorie} />
        <span>{categorie}</span>
      </div>
      <div className="score">
        <span>{score}</span>
        /100
      </div>
    </div>
  );
}
