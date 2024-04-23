// components/Card.jsx
import React from "react";
import { icon, pattern1 } from "../assets";

function Card({ advice, adviceId, onClick }) {
  return (
    <div className="font-manrope bg-dark-grayish max-container rounded-xl p-10 shadow-md flex justify-center h-2/5">
      <div className="flex justify-between items-center flex-col w-full h-full">
        <p className="advice-id text-neon-green font-semibold">
          Advice # {adviceId}
        </p>
        <h1 className="text-center font-bold text-light-cyan text-2xl">
          " {advice} "
        </h1>

        <img src={pattern1} alt="pattern Divider" className="pb-3" />
      </div>
      <div
        className="bg-neon-green absolute p-2 rounded-full bottom-[11rem] hover:shadow-neon-green"
        onClick={onClick}>
        <img src={icon} alt="icon dice" />
      </div>
      {/* min-w-full sm:w-2/6 h-2/5 sm:min-w-full rounded-xl p-10 shadow-md flex flex-col justify-center items-center  */}
    </div>
  );
}

export default Card;
