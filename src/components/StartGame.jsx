import React from "react";
import { useNavigate } from "react-router-dom";
import { socket } from "../utils/socket";
import { StartGameFormEntry } from "./StartGameFormEntry";

export default function StartGame({ setIsStartGame, email }) {
  const navigate = useNavigate();
  socket.send("7" + " " + email);

  function join_random() {
    grecaptcha.ready(() => {
      grecaptcha
        .execute("6LcdwvEhAAAAAON3SVQvV3NFVGwu1jEtabNPKKsu", {
          action: "submit",
        })
        .then(() => {
          if (email !== undefined) {
            socket.send("2" + " " + email + " " + 6 + " silver");
            navigate("/game");
            setIsStartGame(false);
          }
        });
    });
  }

  return (
    <div className="popup">
      <div className="popup__start__game__form" style={{ maxWidth: "500px" }}>
        <div className="popup__start__game__form__content">
          <StartGameFormEntry
            onClick={join_random}
            smaller
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="81.67"
                height="81.67"
                viewBox="0 0 81.67 81.67"
              >
                <defs>
                  <linearGradient
                    id="linear-gradient"
                    x1="0.5"
                    x2="0.5"
                    y2="1"
                    gradientUnits="objectBoundingBox"
                  >
                    <stop offset="0" stopColor="#59db69" />
                    <stop offset="1" stopColor="#59db69" />
                  </linearGradient>
                </defs>
                <path
                  id="Icon_awesome-user-alt"
                  data-name="Icon awesome-user-alt"
                  d="M40.835,45.94a22.97,22.97,0,1,0-22.97-22.97A22.976,22.976,0,0,0,40.835,45.94Zm20.418,5.1H52.464a27.767,27.767,0,0,1-23.257,0H20.418A20.416,20.416,0,0,0,0,71.462v2.552A7.659,7.659,0,0,0,7.657,81.67H74.014a7.659,7.659,0,0,0,7.657-7.657V71.462A20.416,20.416,0,0,0,61.253,51.044Z"
                  fill="url(#linear-gradient)"
                />
              </svg>
            }
            iconActive={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="81.67"
                height="81.67"
                viewBox="0 0 81.67 81.67"
              >
                <path
                  id="Icon_awesome-user-alt"
                  data-name="Icon awesome-user-alt"
                  d="M40.835,45.94a22.97,22.97,0,1,0-22.97-22.97A22.976,22.976,0,0,0,40.835,45.94Zm20.418,5.1H52.464a27.767,27.767,0,0,1-23.257,0H20.418A20.416,20.416,0,0,0,0,71.462v2.552A7.659,7.659,0,0,0,7.657,81.67H74.014a7.659,7.659,0,0,0,7.657-7.657V71.462A20.416,20.416,0,0,0,61.253,51.044Z"
                  fill="#fff"
                />
              </svg>
            }
            label={
              <>
                Join <span>Random</span>
              </>
            }
          />
        </div>
        <button
          className="popup__start__game__form__button"
          onClick={() => {
            setIsStartGame(false);
          }}
        >
          Close
        </button>
      </div>
    </div>
  );
}
