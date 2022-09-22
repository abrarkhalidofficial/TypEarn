import React from "react";
import car from "../assets/car.png";
import finish from "../assets/finish.png";

export function GamePlayerEntry({ data }) {
  return (
    <div className="game__container__main__entry">
      <div className="game__container__main__entry__car">
        <div
          style={{
            marginLeft:
              data.percentageCompleted > 7
                ? data.percentageCompleted - 7 + "%"
                : data.percentageCompleted + "%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div style={{ color: "white", marginBottom: 10 }}>
            {data.email.split("@")[0].replace(".", " ")}{" "}
            {data.percentageCompleted + "%"}
          </div>
          <img
            src={data.carType ? car : car}
            alt="car"
            className="game__container__main__entry__car__img"
          />
        </div>
      </div>
      <div className="game__container__main__entry__end">
        <img
          src={finish}
          alt="finish line"
          className="game__container__main__entry__end__img"
        />
        <div className="game__container__main__entry__end__done">
          {data.speed} wpm
        </div>
      </div>
    </div>
  );
}
