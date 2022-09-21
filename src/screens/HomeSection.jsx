import React from "react";
import homeBanner from "../assets/homeBanner.png";
import logomin from "../assets/logomin.svg";

export function HomeSection({ setIsStartGame, dataFromApi }) {
  return (
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
  );
}
