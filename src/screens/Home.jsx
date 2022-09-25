import React from "react";
import roadmap from "../assets/roadmap.png";
import aboutImg from "../assets/aboutImg.png";
import partnerslogo from "../assets/partnerslogo.png";
import { HomeCommunity } from "../components/HomeCommunity";
import { HomeSection } from "../components/HomeSection";
import { ScoreBoard } from "../components/ScoreBoard";
import { Partners } from "../components/Partners";
import { Teams } from "../components/Teams";
import { About } from "../components/About";

export default function Home({ setIsStartGame, user, dataFromApi }) {
  return (
    <>
      <HomeSection setIsStartGame={setIsStartGame} dataFromApi={dataFromApi} />
      {user === null ? null : <ScoreBoard user={user} />}
      <About partnerslogo={partnerslogo} aboutImg={aboutImg} />
      <section id="roadmap">
        <img src={roadmap} alt="roadmap" style={{ width: "100%" }} />
      </section>
      <Partners />
      <Teams />
      <HomeCommunity />
    </>
  );
}
