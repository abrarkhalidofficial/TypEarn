import React from "react";

export function StakeBoardFilterEntry({ item, setSelectedCategory }) {
  return (
    <div
      className="home__stats__board__filter__entry"
      style={{ transform: "skewX(.1rad)" }}
    >
      <input
        type="radio"
        defaultChecked={item.defaultChecked}
        className="home__stats__board__filter__entry__input"
        name="tiers"
        onChange={() => {
          setSelectedCategory(item);
        }}
      />
      <div className="home__stats__board__filter__entry__content">
        <img
          src={item.image}
          alt={item.title}
          style={{ marginBottom: 20, width: 100 }}
        />
        {item.title}
      </div>
    </div>
  );
}
