import React from "react";
import user from "../assets/user.png";
import { Fade } from "react-reveal";

export function StatsBoardTableList({ data, index }) {
  // seconds to years, months, days, hours
  function getTime(seconds) {
    let years = Math.floor(seconds / 31536000);
    let months = Math.floor((seconds % 31536000) / 2628000);
    let days = Math.floor((seconds % 2628000) / 86400);
    let hours = Math.floor((seconds % 86400) / 3600);
    let minutes = Math.floor((seconds % 3600) / 60);

    let time = "";
    let count = 0;
    if (years > 0 && count < 2) {
      time += `${years} years `;
      count++;
    }
    if (months > 0 && count < 2) {
      time += `${months} months `;
      count++;
    }
    if (days > 0 && count < 2) {
      time += `${days} days `;
      count++;
    }
    if (hours > 0 && count < 2) {
      time += `${hours} hours `;
      count++;
    }
    if (minutes > 0 && count < 2) {
      time += `${minutes} minutes `;
      count++;
    }
    if (count == 0) {
      return "now";
    } else return time;
  }
  return (
    <Fade bottom>
      <a className="home__stats__board__table__list">
        <div className="home__stats__board__table__list__entry">
          <span></span> {index + 1}
        </div>
        <div className="home__stats__board__table__list__entry">
          <span>Name</span>
          <img
            // src={"https://www.gravatar.com/" + getImage(data.email)}
            src={"data:image/png;base64," + data.photo}
            alt="user"
            style={{ borderRadius: 50, height: 40 }}
          />
          {data.email}
        </div>
        <div className="home__stats__board__table__list__entry">
          <span>Speed</span> {data.score} wpm
        </div>
        <div className="home__stats__board__table__list__entry">
          <span>Time</span>
          {getTime(parseInt(Date.now() / 1000) - data.time) === "now"
            ? "now"
            : getTime(parseInt(Date.now() / 1000) - data.time) + "ago"}
        </div>
      </a>
    </Fade>
  );
}
