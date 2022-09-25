import React from "react";

export function StakeTableListEntry({}) {
  return (
    <a
      href="#"
      className="home__stats__board__table__list"
      style={{
        padding: ".8em 1em",
      }}
    >
      <div className="home__stats__board__table__list__entry">
        <span /> 1
      </div>
      <div className="home__stats__board__table__list__entry">
        <span>Staking Date</span>
        10/12/2022
      </div>
      <div className="home__stats__board__table__list__entry">
        <span>Amount</span> $50
      </div>
      <div className="home__stats__board__table__list__entry">
        <span>Remaining Days</span> 29 days
      </div>
    </a>
  );
}
