import React from "react";
import { Fade } from "react-reveal";
import stake from "../assets/stake.png";

export default function Staked() {
  return (
    <>
      <div className="home__banner" style={{ background: "transparent" }}>
        <div className="home__banner__content">
          <div className="home__banner__content__left">
            <div className="home__banner__content__left__heading">Staked</div>
            <div className="home__banner__content__left__info">
              In publishing and graphic design, Lorem ipsum is a placeholder
              text commonly used to demonstrate the visual form of a document or
              a typeface without relying on meaningful content. Lorem ipsum may
              be used as a placeholder before final copy is available. Wikipedia
            </div>
          </div>
          <div className="home__banner__content__right">
            <img
              src={stake}
              alt="stake"
              className="home__banner__content__right__img"
            />
          </div>
        </div>
      </div>
      {/* <div className="home__search">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24.994"
          height="25"
          viewBox="0 0 24.994 25"
        >
          <path
            id="Icon_ionic-ios-search"
            data-name="Icon ionic-ios-search"
            d="M29.2,27.684l-6.951-7.016a9.906,9.906,0,1,0-1.5,1.523l6.906,6.971a1.07,1.07,0,0,0,1.51.039A1.077,1.077,0,0,0,29.2,27.684ZM14.465,22.275A7.822,7.822,0,1,1,20,19.984,7.774,7.774,0,0,1,14.465,22.275Z"
            transform="translate(-4.5 -4.493)"
            fill="#fff"
          />
        </svg>
        <input
          type="text"
          placeholder="Search here"
          className="home__search__field"
        />
      </div> */}
      <div className="home__stats__board__table">
        <Fade bottom>
          <div className="home__stats__board__table__header">
            <div className="home__stats__board__table__header__entry" />
            <div className="home__stats__board__table__header__entry">Name</div>
            <div className="home__stats__board__table__header__entry">
              Speed
            </div>
            <div className="home__stats__board__table__header__entry">Time</div>
            <div className="home__stats__board__table__header__entry">
              Stake
            </div>
          </div>
        </Fade>
        <Fade bottom>
          <a className="home__stats__board__table__list">
            <div className="home__stats__board__table__list__entry">
              {/* <span></span> {index + 1} */}
            </div>
            <div className="home__stats__board__table__list__entry">
              <span>Name</span>
              <img
                // src={"https://www.gravatar.com/" + getImage(data.email)}
                // src={user}
                alt="user"
              />
              {/* {data.email} */}
            </div>
            <div className="home__stats__board__table__list__entry">
              {/* <span>Speed</span> {data.score} wpm */}
            </div>
            <div className="home__stats__board__table__list__entry">
              <span>Time</span>
              {/* {getTime(parseInt(Date.now() / 1000) - data.time) === "now"
            ? "now"
            : getTime(parseInt(Date.now() / 1000) - data.time) + "ago"} */}
            </div>
            <div className="home__stats__board__table__list__entry">
              <button className="home__nfts__card__button">Stake</button>
            </div>
          </a>
        </Fade>
      </div>
    </>
  );
}
