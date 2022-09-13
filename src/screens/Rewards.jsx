import React from "react";
import rewards from "../assets/rewards.png";

export default function Rewards() {
  return (
    <>
      <div className="home__banner" style={{ background: "transparent" }}>
        <div className="home__banner__content">
          <div className="home__banner__content__left">
            <div className="home__banner__content__left__heading">Rewards</div>
            <div className="home__banner__content__left__info">
              In publishing and graphic design, Lorem ipsum is a placeholder
              text commonly used to demonstrate the visual form of a document or
              a typeface without relying on meaningful content. Lorem ipsum may
              be used as a placeholder before final copy is available. Wikipedia
            </div>
            <button className="home__banner__content__left__button">
              Let's Get Rewards
            </button>
          </div>
          <div className="home__banner__content__right">
            <img
              style={{ mixBlendMode: "screen" }}
              src={rewards}
              alt="rewards"
              className="home__banner__content__right__img"
            />
          </div>
        </div>
      </div>
      <div className="reward__entry">
        <div className="reward__entry__left">
          <img
            src={rewards}
            alt="rewards"
            className="reward__entry__left__img"
          />
        </div>
        <div className="reward__entry__right">
          <div className="reward__entry__right__heading">Reward Entry</div>
          <div className="reward__entry__right__info">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde quod
            deserunt aut ratione porro, veniam minima quisquam quae magni,
            perferendis quasi quos debitis accusantium expedita vitae sunt,
            facere cum quibusdam animi repellat eligendi iusto doloribus beatae.
            Praesentium nostrum eius dolore minus quas, maxime qui vel eos ab.
            Quis, reiciendis aliquid?
          </div>
        </div>
      </div>
      <div className="reward__entry reward__entry__reverse reward__entry__reverse1">
        <div className="reward__entry__left">
          <img src={rewards} alt="" className="reward__entry__left__img" />
        </div>
        <div className="reward__entry__right">
          <div className="reward__entry__right__heading">Reward Entry</div>
          <div className="reward__entry__right__info">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde quod
            deserunt aut ratione porro, veniam minima quisquam quae magni,
            perferendis quasi quos debitis accusantium expedita vitae sunt,
            facere cum quibusdam animi repellat eligendi iusto doloribus beatae.
            Praesentium nostrum eius dolore minus quas, maxime qui vel eos ab.
            Quis, reiciendis aliquid?
          </div>
        </div>
      </div>
      <div className="reward__entry">
        <div className="reward__entry__left">
          <img src={rewards} alt="" className="reward__entry__left__img" />
        </div>
        <div className="reward__entry__right">
          <div className="reward__entry__right__heading">Reward Entry</div>
          <div className="reward__entry__right__info">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde quod
            deserunt aut ratione porro, veniam minima quisquam quae magni,
            perferendis quasi quos debitis accusantium expedita vitae sunt,
            facere cum quibusdam animi repellat eligendi iusto doloribus beatae.
            Praesentium nostrum eius dolore minus quas, maxime qui vel eos ab.
            Quis, reiciendis aliquid?
          </div>
        </div>
      </div>
      <div className="reward__entry reward__entry__reverse reward__entry__reverse2">
        <div className="reward__entry__left">
          <img
            src={rewards}
            alt="reward__entry__left__img"
            className="reward__entry__left__img"
          />
        </div>
        <div className="reward__entry__right">
          <div className="reward__entry__right__heading">Reward Entry</div>
          <div className="reward__entry__right__info">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde quod
            deserunt aut ratione porro, veniam minima quisquam quae magni,
            perferendis quasi quos debitis accusantium expedita vitae sunt,
            facere cum quibusdam animi repellat eligendi iusto doloribus beatae.
            Praesentium nostrum eius dolore minus quas, maxime qui vel eos ab.
            Quis, reiciendis aliquid?
          </div>
        </div>
      </div>
      <div className="reward__entry">
        <div className="reward__entry__left">
          <img src={rewards} alt="" className="reward__entry__left__img" />
        </div>
        <div className="reward__entry__right">
          <div className="reward__entry__right__heading">Reward Entry</div>
          <div className="reward__entry__right__info">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde quod
            deserunt aut ratione porro, veniam minima quisquam quae magni,
            perferendis quasi quos debitis accusantium expedita vitae sunt,
            facere cum quibusdam animi repellat eligendi iusto doloribus beatae.
            Praesentium nostrum eius dolore minus quas, maxime qui vel eos ab.
            Quis, reiciendis aliquid?
          </div>
        </div>
      </div>
    </>
  );
}
