import React from "react";
import { useNavigate } from "react-router-dom";
import { socket } from "../utils/socket";
import { StartGameFormEntry } from "./StartGameFormEntry";

export default function StartGame({ setIsStartGame, email }) {
  const navigate = useNavigate();
  const [isJoinOrCreate, setIsJoinOrCreate] = React.useState(false);
  const [isJoinById, setIsJoinById] = React.useState(false);
  const [isCreateGame, setIsCreateGame] = React.useState(false);
  const [noOfParticipants, setNoOfParticipants] = React.useState(6);
  const [idOfGame, setIdOfGame] = React.useState(0);

  function join_random() {
    socket.send("2" + " " + email + " " + noOfParticipants + " silver");
    navigate("/game");
    setIsStartGame(false);
  }
  function create_game() {
    socket.send(
      "3" + " " + email + " " + noOfParticipants.toString() + " silver"
    );
    navigate("/game");
    setIsStartGame(false);
  }

  function join_id() {
    socket.send("4" + " " + email + " " + idOfGame + " silver");
    navigate("/game");
    setIsStartGame(false);
  }

  return (
    <div className="popup">
      <div className="popup__start__game__form" style={{ maxWidth: "500px" }}>
        {isJoinOrCreate ? (
          <>
            <input
              id="input"
              type="number"
              style={{
                width: "50%",
                height: 40,
                padding: "0em 1.5em",
                borderRadius: 5,
                border: "1px solid #ccc",
                marginBottom: 15,
              }}
              min="1"
              max="6"
              value={noOfParticipants}
              onChange={(e) => {
                setNoOfParticipants(e.target.value);
              }}
              disabled
              placeholder="Enter no of players"
            />
            <div style={{ display: "flex", justifyContent: "center" }}>
              <button
                className="popup__start__game__form__button"
                style={{ backgroundColor: "#88cb90", border: "none" }}
                onClick={isCreateGame ? create_game : join_random}
              >
                Next
              </button>
              <button
                className="popup__start__game__form__button"
                style={{
                  backgroundColor: "#000000",
                  border: "none",
                  marginRight: "1em",
                  marginLeft: "1em",
                }}
                onClick={() => {
                  setIsJoinOrCreate(false);
                }}
              >
                Back
              </button>
              <button
                className="popup__start__game__form__button"
                onClick={() => {
                  setIsStartGame(false);
                }}
              >
                Close
              </button>
            </div>
          </>
        ) : isJoinById ? (
          <>
            <input
              id="input"
              type="number"
              style={{
                width: "50%",
                height: 40,
                padding: "0em 1.5em",
                borderRadius: 5,
                border: "1px solid #ccc",
                marginBottom: 15,
              }}
              min="1"
              max="6"
              onChange={(e) => {
                setIdOfGame(e.target.value);
              }}
              placeholder="Enter id of game"
            />
            <div style={{ display: "flex", justifyContent: "center" }}>
              <button
                className="popup__start__game__form__button"
                style={{ backgroundColor: "#88cb90", border: "none" }}
                onClick={join_id}
              >
                Next
              </button>
              <button
                className="popup__start__game__form__button"
                style={{
                  backgroundColor: "#000000",
                  border: "none",
                  marginRight: "1em",
                  marginLeft: "1em",
                }}
                onClick={() => {
                  setIsJoinById(false);
                }}
              >
                Back
              </button>
              <button
                className="popup__start__game__form__button"
                onClick={() => {
                  setIsStartGame(false);
                }}
              >
                Close
              </button>
            </div>
          </>
        ) : (
          <>
            <div className="popup__start__game__form__content">
              <StartGameFormEntry
                onClick={isCreateGame ? create_game : join_random}
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
                        <stop offset="0" stopColor="#88cb90" />
                        <stop offset="1" stopColor="#446648" />
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
              {/* <StartGameFormEntry
                onClick={() => {
                  setIsJoinById(true);
                }}
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
                        <stop offset="0" stopColor="#88cb90" />
                        <stop offset="1" stopColor="#446648" />
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
                    Join <span>By Id</span>
                  </>
                }
              /> */}
              {/* <StartGameFormEntry
                onClick={() => {
                  setIsJoinOrCreate(true);
                  setIsCreateGame(true);
                }}
                smaller
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="114.67"
                    height="81.67"
                    viewBox="0 0 114.67 81.67"
                  >
                    <defs>
                      <linearGradient
                        id="linear-gradient"
                        x1="0.5"
                        x2="0.5"
                        y2="1"
                        gradientUnits="objectBoundingBox"
                      >
                        <stop offset="0" stopColor="#88cb90" />
                        <stop offset="1" stopColor="#446648" />
                      </linearGradient>
                    </defs>
                    <g
                      id="Group_66"
                      data-name="Group 66"
                      transform="translate(-1098.165 -616.361)"
                    >
                      <path
                        id="Icon_awesome-user-alt"
                        data-name="Icon awesome-user-alt"
                        d="M40.835,45.94a22.97,22.97,0,1,0-22.97-22.97A22.976,22.976,0,0,0,40.835,45.94Zm20.418,5.1H52.464a27.767,27.767,0,0,1-23.257,0H20.418A20.416,20.416,0,0,0,0,71.462v2.552A7.659,7.659,0,0,0,7.657,81.67H74.014a7.659,7.659,0,0,0,7.657-7.657V71.462A20.416,20.416,0,0,0,61.253,51.044Z"
                        transform="translate(1098.165 616.361)"
                      />
                      <path
                        id="Icon_awesome-user-alt-2"
                        data-name="Icon awesome-user-alt"
                        d="M40.835,45.94a22.97,22.97,0,1,0-22.97-22.97A22.976,22.976,0,0,0,40.835,45.94Zm20.418,5.1H52.464a27.767,27.767,0,0,1-23.257,0H20.418A20.416,20.416,0,0,0,0,71.462v2.552A7.659,7.659,0,0,0,7.657,81.67H74.014a7.659,7.659,0,0,0,7.657-7.657V71.462A20.416,20.416,0,0,0,61.253,51.044Z"
                        transform="translate(1131.165 616.361)"
                        fill="url(#linear-gradient)"
                      />
                    </g>
                  </svg>
                }
                iconActive={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="114.67"
                    height="81.67"
                    viewBox="0 0 114.67 81.67"
                  >
                    <g
                      id="Group_66"
                      data-name="Group 66"
                      transform="translate(-1098.165 -616.361)"
                    >
                      <path
                        id="Icon_awesome-user-alt"
                        data-name="Icon awesome-user-alt"
                        d="M40.835,45.94a22.97,22.97,0,1,0-22.97-22.97A22.976,22.976,0,0,0,40.835,45.94Zm20.418,5.1H52.464a27.767,27.767,0,0,1-23.257,0H20.418A20.416,20.416,0,0,0,0,71.462v2.552A7.659,7.659,0,0,0,7.657,81.67H74.014a7.659,7.659,0,0,0,7.657-7.657V71.462A20.416,20.416,0,0,0,61.253,51.044Z"
                        transform="translate(1098.165 616.361)"
                      />
                      <path
                        id="Icon_awesome-user-alt-2"
                        data-name="Icon awesome-user-alt"
                        d="M40.835,45.94a22.97,22.97,0,1,0-22.97-22.97A22.976,22.976,0,0,0,40.835,45.94Zm20.418,5.1H52.464a27.767,27.767,0,0,1-23.257,0H20.418A20.416,20.416,0,0,0,0,71.462v2.552A7.659,7.659,0,0,0,7.657,81.67H74.014a7.659,7.659,0,0,0,7.657-7.657V71.462A20.416,20.416,0,0,0,61.253,51.044Z"
                        transform="translate(1131.165 616.361)"
                        fill="#fff"
                      />
                    </g>
                  </svg>
                }
                label={
                  <>
                    Create <span>Game</span>
                  </>
                }
              /> */}
            </div>
            <button
              className="popup__start__game__form__button"
              onClick={() => {
                setIsStartGame(false);
              }}
            >
              Close
            </button>
          </>
        )}
      </div>
    </div>
  );
}
