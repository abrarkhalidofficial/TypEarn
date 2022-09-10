import axios from "axios";
import React, { useEffect } from "react";
import car from "../assets/car.png";
import { StatsBoardFilterEntry } from "../components/StatsBoardFilterEntry";
import { StatsBoardTableList } from "../components/StatsBoardTableList";
import { Fade } from "react-reveal";

export default function Home({ setIsStartGame, user, setIsLogin }) {
  const [limit, setLimit] = React.useState(10);
  const [stats, setStats] = React.useState([]);
  function getScores() {
    axios.get("http://54.242.116.71:8000/scores").then((res) => {
      setStats(res.data.data);
    });
  }
  function getLatest() {
    axios.get("http://54.242.116.71:8000/latest").then((res) => {
      setStats(res.data.data);
    });
  }
  function getMyScore() {
    axios.get("http://54.242.116.71:8000/scores").then((res) => {
      setStats(res.data.data.filter((item) => item.email === user?.email));
    });
  }
  useEffect(() => {
    getLatest();
  }, []);

  console.log(window.scrollY);

  return (
    <>
      <div className="home__banner">
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
                  user === null ? setIsLogin(true) : setIsStartGame(true);
                }}
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
      </div>
      <div className="home__stats__board__filter">
        <StatsBoardFilterEntry
          defaultChecked
          delay={1000}
          onClick={getLatest}
          svg={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="65.815"
              height="58.502"
              viewBox="0 0 65.815 58.502"
            >
              <path
                id="Icon_awesome-trophy"
                data-name="Icon awesome-trophy"
                d="M63.073,7.313H51.189V2.742A2.736,2.736,0,0,0,48.447,0H17.368a2.736,2.736,0,0,0-2.742,2.742v4.57H2.742A2.736,2.736,0,0,0,0,10.055v6.4c0,4.079,2.571,8.273,7.073,11.506a26.769,26.769,0,0,0,12.569,4.765,25.275,25.275,0,0,0,7.781,8.41v8.227H21.938c-4.033,0-7.313,2.365-7.313,6.4v1.371A1.375,1.375,0,0,0,16,58.5H49.818a1.375,1.375,0,0,0,1.371-1.371V55.76c0-4.033-3.279-6.4-7.313-6.4H38.392V41.134a25.275,25.275,0,0,0,7.781-8.41A26.676,26.676,0,0,0,58.742,27.96c4.491-3.234,7.073-7.427,7.073-11.506v-6.4A2.736,2.736,0,0,0,63.073,7.313ZM11.346,22.03c-2.788-2.011-4.033-4.251-4.033-5.576V14.626h7.336a41.039,41.039,0,0,0,1.463,9.849A18.414,18.414,0,0,1,11.346,22.03ZM58.5,16.454c0,1.84-2.022,4.125-4.033,5.576a18.486,18.486,0,0,1-4.776,2.445,41.039,41.039,0,0,0,1.463-9.849H58.5Z"
                fill="currentColor"
              />
            </svg>
          }
          label="Latest High Scores"
        />
        <StatsBoardFilterEntry
          onClick={getMyScore}
          delay={1200}
          svg={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48.869"
              height="48.869"
              viewBox="0 0 48.869 48.869"
            >
              <path
                id="Icon_awesome-user-alt"
                data-name="Icon awesome-user-alt"
                d="M24.435,27.489A13.744,13.744,0,1,0,10.69,13.744,13.748,13.748,0,0,0,24.435,27.489Zm12.217,3.054H31.393a16.615,16.615,0,0,1-13.916,0H12.217A12.216,12.216,0,0,0,0,42.76v1.527a4.583,4.583,0,0,0,4.581,4.581H44.288a4.583,4.583,0,0,0,4.581-4.581V42.76A12.216,12.216,0,0,0,36.652,30.543Z"
                fill="currentColor"
              />
            </svg>
          }
          label="My Score"
        />
        <StatsBoardFilterEntry
          onClick={getScores}
          delay={1400}
          svg={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="44.227"
              height="58"
              viewBox="0 0 44.227 58"
            >
              <path
                id="Icon_map-city-hall"
                data-name="Icon map-city-hall"
                d="M6.426,25.853h4.211V52.92h6.318V29.72h6.318v23.2h6.317V29.72h6.32v23.2h6.318V25.853h4.21a2.026,2.026,0,0,0,2.107-1.933,1.88,1.88,0,0,0-.878-1.564l0,0-.031-.018-.054-.033-20.1-10.4V8.852c3.712,1.706,6.768-1.233,11.582.534V2.655C34.25.888,31.2,3.824,27.485,2.119V1.687a1.056,1.056,0,0,0-2.1,0V11.9L5.281,22.3l-.054.033-.03.021v0a1.884,1.884,0,0,0-.875,1.564,2.024,2.024,0,0,0,2.1,1.933Zm2.1,29L4.32,58.72H48.547l-4.213-3.865Z"
                transform="translate(-4.32 -0.72)"
                fill="currentColor"
              />
            </svg>
          }
          label="Hall of Fame"
        />
        <StatsBoardFilterEntry
          onClick={getScores}
          delay={1600}
          svg={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="38.859"
              height="36.084"
              viewBox="0 0 38.859 36.084"
            >
              <path
                id="Icon_awesome-paragraph"
                data-name="Icon awesome-paragraph"
                d="M38.334,3.638V6.413A1.388,1.388,0,0,1,36.946,7.8H32.782v31.92a1.388,1.388,0,0,1-1.388,1.388H28.619a1.388,1.388,0,0,1-1.388-1.388V7.8H24.455v31.92a1.388,1.388,0,0,1-1.388,1.388H20.292A1.388,1.388,0,0,1,18.9,39.721V30.007H16.128a13.878,13.878,0,1,1,0-27.757H36.946A1.388,1.388,0,0,1,38.334,3.638Z"
                transform="translate(41.109 -2.25) rotate(90)"
                fill="currentColor"
              />
            </svg>
          }
          label="Competitions"
        />
      </div>
      <div className="home__stats__board__table">
        <Fade bottom>
          <div className="home__stats__board__table__header">
            <div className="home__stats__board__table__header__entry" />
            <div className="home__stats__board__table__header__entry">Name</div>
            <div className="home__stats__board__table__header__entry">
              Speed
            </div>
            <div className="home__stats__board__table__header__entry">Time</div>
          </div>
        </Fade>
        {stats
          .filter((stat, i) => i < limit)
          .map((stat, index) => (
            <StatsBoardTableList index={index} key={index} data={stat} />
          ))}
        <section
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <button
            onClick={() => {
              setLimit(limit + 10);
            }}
            className="header__nav__button"
            style={{ margin: "0em auto", marginTop: "2em" }}
          >
            Load more
          </button>
        </section>
      </div>
    </>
  );
}
