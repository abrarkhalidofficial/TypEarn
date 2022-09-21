import React from "react";
import roadmap from "../assets/roadmap.png";
import { HomeCommunity } from "./HomeCommunity";
import { ScoreBoard } from "./ScoreBoard";
import { Partners } from "./Partners";
import { Teams } from "./Teams";
import "swiper/css";
import { HomeSection } from "./HomeSection";

export default function Home({ setIsStartGame, user, dataFromApi }) {
  return (
    <>
      <HomeSection setIsStartGame={setIsStartGame} dataFromApi={dataFromApi} />
      {user === null ? null : <ScoreBoard user={user} />}
      <img src={roadmap} alt="roadmap" style={{ width: "100%" }} />
      <Partners />
      <Teams />
      <HomeCommunity />
    </>
  );
}
