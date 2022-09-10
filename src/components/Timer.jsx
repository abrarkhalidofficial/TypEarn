import React, { useEffect } from "react";

export default function Timer({ value, setIsTimerOpen, noJoin }) {
  useEffect(() => {
    if (value <= 0) {
      setIsTimerOpen(false);
    }
  }, [value]);
  console.log(noJoin);
  return (
    <div className="popup">
      <div
        className="popup__start__game__form"
        style={{ maxWidth: 400, padding: "3em" }}
      >
        <div
          style={{
            fontSize: 25,
            marginBottom: noJoin ? 0 : 20,
            color: "white",
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          {noJoin ? "Room not available" : "Game will start in"}
        </div>
        {noJoin ? null : (
          <div
            style={{
              fontSize: 50,
              color: "white",
              fontWeight: "bold",
            }}
          >
            {parseInt(value).toFixed(2)}s
          </div>
        )}
      </div>
    </div>
  );
}
