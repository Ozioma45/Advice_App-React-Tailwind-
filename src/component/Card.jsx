// components/Card.jsx
import React from "react";
import { pattern1 } from "../assets";

function Card({ advice, adviceId, onClick }) {
  return (
    <div className="font-manrope bg-dark-grayish w-2/6 h-3/6 flex justify-between items-center flex-col rounded-xl p-10 shadow-md">
      <p className="advice-id text-neon-green">Advice # {adviceId}</p>
      <h1 className="text-center font-bold text-light-cyan text-2xl">
        " {advice} "
      </h1>

      <img src={pattern1} alt="pattern Divider" />

      <button className="button" onClick={onClick}>
        <span>MORE ADVICE</span>
      </button>
    </div>
  );
}

export default Card;
