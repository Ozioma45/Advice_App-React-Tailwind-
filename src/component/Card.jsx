// components/Card.jsx
import React from "react";

function Card({ advice, adviceId, onClick }) {
  return (
    <div className="card bg-grayish-blue w-2/5 h-1/10  flex justify-center items-center flex-col rounded-xl p-2 shadow-md">
      <p className="advice-id">Advice # {adviceId}</p>
      <h1 className="heading text-center">{advice}</h1>

      <button className="button" onClick={onClick}>
        <span>MORE ADVICE</span>
      </button>
    </div>
  );
}

export default Card;
