import React from "react";
import homeBanner from "../assets/homeBanner.png";
import roadmap from "../assets/roadmap.png";
import logomin from "../assets/logomin.svg";
import { HomeCommunity } from "./HomeCommunity";
import { ScoreBoard } from "./ScoreBoard";

export default function Home({ setIsStartGame, user, dataFromApi }) {
  return (
    <>
      <div className="home__section">
        <img src={homeBanner} alt="homeBanner" className="home__section__img" />
        <div className="home__section__overlay">
          <div className="home__section__overlay__content">
            <img
              src={logomin}
              alt="logomin"
              className="home__section__overlay__content__icon"
            />
            <div className="home__section__overlay__content__heading">
              WELCOME
              <br />
              TO The TYPEARN
            </div>
            <div className="home__section__overlay__content__info">
              Cars, Garages, Gas Stations, Racetrack Land!
              <br />
              Now you can win crypto prizes and own part of the game you love to
              play
            </div>
            <button
              className="home__section__overlay__content__button home__section__buttons__btn home__section__buttons__btn__secondary"
              onClick={() => {
                setIsStartGame(true);
              }}
              disabled={
                dataFromApi.hasOwnProperty("email") && dataFromApi?.email !== ""
                  ? false
                  : true
              }
            >
              Start game
            </button>
          </div>
        </div>
      </div>
      {/* <div className="home__banner">
        <div className="home__banner__content">
          <div className="home__banner__content__left">
            <Fade bottom>
              <div className="home__banner__content__left__heading">
                TypEarn
              </div>
            </Fade>
            <Fade bottom>
              <div className="home__banner__content__left__info">
                In publishing and graphic design, Lorem ipsum is a placeholder
                text commonly used to demonstrate the visual form of a document
                or a typeface without relying on meaningful content. Lorem ipsum
                may be used as a placeholder before final copy is available.
                Wikipedia
              </div>
            </Fade>
            <Fade bottom>
              <button
                className="home__banner__content__left__button"
                onClick={() => {
                  setIsStartGame(true);
                }}
                disabled={
                  dataFromApi.hasOwnProperty("email") &&
                  dataFromApi?.email !== ""
                    ? false
                    : true
                }
              >
                Start the game
              </button>
            </Fade>
          </div>
          <div className="home__banner__content__right">
            <Fade bottom distance="30%">
              <img
                src={car}
                alt="car"
                className="home__banner__content__right__img"
              />
            </Fade>
          </div>
        </div>
      </div> */}
      {user === null ? null : <ScoreBoard user={user} />}
      <img src={roadmap} alt="roadmap" style={{ width: "100%" }} />
      <HomeCommunity />
    </>
  );
}
