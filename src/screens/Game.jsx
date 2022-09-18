import React, { useEffect, useLayoutEffect } from "react";
import banner from "../assets/banner.png";
import icon from "../assets/icon.svg";
import lightRed from "../assets/lightRed.png";
import lightYellow from "../assets/lightYellow.png";
import lightGreen from "../assets/lightGreen.png";
import { GamePlayerEntry } from "./GamePlayerEntry";
import { socket } from "../utils/socket";
import Timer from "../components/Timer";
import { useNavigate } from "react-router-dom";

export default function Game({
  dataFromApi,
  user,
  setIsScoreCard,
  setWinners,
}) {
  const navigate = useNavigate();
  useLayoutEffect(() => {
    // if (user === null) {
    //   navigate("/");
    // }
    if (dataFromApi?.gameData?.timer > 0) {
      setIsTimerOpen(true);
    }
  }, [dataFromApi]);
  const [textColor, setTextColor] = React.useState(false);
  const [isTimerOpen, setIsTimerOpen] = React.useState(true);
  const [typedString, setTypedString] = React.useState("");
  const [gameStarted, setGameStarted] = React.useState(false);
  const [disable, setDisable] = React.useState(false);
  const [prev, setPrev] = React.useState(0);
  const [something, setSomething] = React.useState(false);

  // console.log(dataFromApi);

  useEffect(() => {
    setWinners(dataFromApi?.gameData?.positions);
  }, [dataFromApi?.gameData?.positions]);

  useEffect(() => {
    if (dataFromApi?.gameData?.light === 2) {
      setGameStarted(true);
    } else {
      setInterval(() => {
        socket.send("5" + " " + user?.email);
      }, 1000);
    }
  }, [dataFromApi?.gameData?.light]);

  useEffect(() => {
    if (dataFromApi?.currentWord !== prev) {
      console.log("prev", prev);
      setPrev(dataFromApi?.currentWord);
      setSomething(false);
    }
  }, [dataFromApi]);

  function showCurrentValue(event) {
    let test = 0;
    if (something) {
      test = 1;
    }

    let next = false;
    let list = dataFromApi?.gameData?.sentence?.split(" ");
    let value = event.target.value;

    console.log("66", list[dataFromApi?.currentWord + test]);
    console.log("test", test);
    setPrev(dataFromApi?.currentWord);
    setTypedString(value);
    setTextColor(false);
    if (dataFromApi?.currentWord + test < list.length) {
      if (dataFromApi?.currentWord + test + 1 < list.length) {
        if (list[dataFromApi?.currentWord + test] + " " == value) {
          socket.send("6" + " " + user?.email);
          next = true;
          setSomething(true);
          setTypedString("");
        }
      } else {
        if (list[dataFromApi?.currentWord + test] == value) {
          socket.send("6" + " " + user?.email);
          next = true;
          setSomething(true);
          setTypedString("");
          setDisable(true);
          setIsScoreCard(true);
        }
      }
    }
    if (!next) {
      if (value.length > list[dataFromApi?.currentWord + test].length) {
        setTextColor(true);
      } else if (
        list[dataFromApi?.currentWord + test].slice(0, value.length) !== value
      ) {
        setTextColor(true);
      } else {
        setTextColor(false);
      }
    }
  }
  return (
    <>
      {isTimerOpen ? (
        <Timer
          setIsTimerOpen={setIsTimerOpen}
          value={dataFromApi?.gameData?.timer}
          noJoin={dataFromApi?.gameData?.timer === undefined}
        />
      ) : null}
      <div
        className="home__banner"
        style={{
          minHeight: 200,
          width: "100%",
          maxWidth: 1440 - 64,
          marginTop: "6em",
          position: "relative",
          backgroundColor: "#6cc065",
          borderRadius: 20,
        }}
      >
        <img
          src={banner}
          alt="banner"
          style={{
            position: "absolute",
            right: 0,
            height: "150%",
            top: "-50px",
          }}
        />
        <div
          className="home__banner__overlay"
          style={{ width: "100%", padding: "3em" }}
        >
          <img src={icon} alt="icon" className="home__banner__overlay__img" />
        </div>
      </div>
      {dataFromApi.gameData !== {} ? (
        <>
          <div className="game__container">
            <div className="game__container__header">
              <div className="game__container__header__left">
                Let's Play <span>Room no({dataFromApi?.gameData?.id})</span>
              </div>
              <div className="game__container__header__right">
                <img
                  src={
                    dataFromApi?.gameData?.light === 0
                      ? lightRed
                      : dataFromApi?.gameData?.light === 1
                      ? lightYellow
                      : dataFromApi?.gameData?.light === 2
                      ? lightGreen
                      : lightRed
                  }
                  alt="traffic light"
                  className="game__container__header__right__img"
                />
              </div>
            </div>
            <div className="game__container__main">
              {dataFromApi?.gameData?.players
                ?.filter((player, i) => i === dataFromApi?.myIndex)
                .map((palyer, i) => (
                  <GamePlayerEntry key={i} data={palyer} />
                ))}
              {dataFromApi?.gameData?.players
                ?.filter((player, i) => i !== dataFromApi?.myIndex)
                .map((palyer, i) => (
                  <GamePlayerEntry key={i} data={palyer} />
                ))}
            </div>
          </div>
          <div
            style={{
              width: "100%",
              maxWidth: "1440px",
              margin: "0em auto",
              marginTop: "2em",
              padding: "0em 2em",
            }}
          >
            <h4 style={{ color: "white", wordBreak: "break-word" }}>
              {dataFromApi?.gameData?.sentence?.split(" ").map((word, i) => {
                return (
                  <span
                    style={
                      i === dataFromApi?.currentWord
                        ? { color: "#59db69", marginRight: ".5em" }
                        : { marginRight: ".5em" }
                    }
                    key={i}
                  >
                    <span
                      style={
                        i === dataFromApi?.currentWord && typedString === ""
                          ? { color: "#59db69" }
                          : i === dataFromApi?.currentWord && textColor
                          ? { color: "red" }
                          : null
                      }
                    >
                      {word}
                    </span>
                  </span>
                );
              })}
            </h4>
            <input
              id="input"
              type="text"
              style={{
                width: "100%",
                height: 40,
                padding: "0em 1.5em",
                borderRadius: 5,
                border: "1px solid #ccc",
              }}
              value={typedString}
              disabled={!gameStarted || disable}
              onChange={showCurrentValue}
              placeholder="Start writing here"
            />
          </div>
        </>
      ) : (
        <div
          style={{
            width: "100%",
            maxWidth: "1440px",
            paddingTop: 30,
            color: "white",
            fontSize: 20,
            margin: "7em auto",
            textAlign: "center",
          }}
        >
          No game found
        </div>
      )}
    </>
  );
}
