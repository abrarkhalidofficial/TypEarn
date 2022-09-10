import React from "react";

export function StatsBoardFilterEntry({ item, setSelectedCategory }) {
  return (
    <div className="home__stats__board__filter__entry">
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
        <img src={item.image} alt={item.title} style={{ marginBottom: 20 }} />
        {item.title}
      </div>
    </div>
  );
}
