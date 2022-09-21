import React from "react";

export function About({ partnerslogo, aboutImg }) {
  return (
    <div className="about">
      <div className="about__left">
        <img
          src={partnerslogo}
          alt="partnerslogo"
          className="about__left__img"
        />
        <div className="about__left__heading">ABOUT TYPEARN</div>
        <div className="about__left__info">
          World's first Type-to-Earn self-sustainable economy supercharged using
          blockchain.{" "}
        </div>
        <button className="home__section__buttons__btn home__section__buttons__btn__secondary">
          Start game
        </button>
      </div>
      <img src={aboutImg} alt="aboutImg" className="about__right" />
    </div>
  );
}
