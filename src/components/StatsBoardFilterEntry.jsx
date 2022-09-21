import React from "react";
import { Fade } from "react-reveal";

export function StatsBoardFilterEntry({
  svg,
  label,
  defaultChecked,
  onClick,
  delay,
}) {
  return (
    <Fade bottom duration={delay}>
      <div className="home__stats__board__filter__entry ">
        <input
          type="radio"
          defaultChecked={defaultChecked}
          className="home__stats__board__filter__entry__input"
          name="home__stats__board__filter__entry"
          onChange={onClick}
        />
        <div className="home__stats__board__filter__entry__content">
          {svg}
          <span> {label}</span>
        </div>
      </div>
    </Fade>
  );
}
