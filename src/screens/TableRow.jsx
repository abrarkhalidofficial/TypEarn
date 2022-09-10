import React from "react";
import { Fade } from "react-reveal";
import { ethers } from "ethers";
import { getValueOfDate } from "../utils/getValue";

export function TableRow({ item, unStake }) {
  let claim_allowed_time =
    getValueOfDate(item[5]._hex) - (Date.now() / 1000).toFixed();
  if (claim_allowed_time < 0) {
    claim_allowed_time = 0;
  }
  let days = 0;
  let hours = 0;
  let minutes = 0;
  let seconds = 0;
  if (claim_allowed_time >= 3600 * 24) {
    days = Math.floor(claim_allowed_time / (3600 * 24));
  } else if (claim_allowed_time >= 3600) {
    hours = Math.floor(claim_allowed_time / 3600);
  } else if (claim_allowed_time >= 60) {
    minutes = Math.floor(claim_allowed_time / 60);
  } else {
    seconds = Math.floor(claim_allowed_time);
  }
  function getMonthFunc(value) {
    return new Date(getValueOfDate(value) * 1000).getMonth() + 1;
  }
  return (
    <Fade bottom>
      <a className="home__stats__board__table__list">
        <div
          className="home__stats__board__table__list__entry"
          style={{ maxWidth: 100 }}
        />
        <div className="home__stats__board__table__list__entry">
          {new Date(getValueOfDate(item[2]._hex) * 1000).getDate() +
            "-" +
            getMonthFunc(item[2]._hex) +
            "-" +
            new Date(getValueOfDate(item[2]._hex) * 1000).getFullYear()}
        </div>
        <div className="home__stats__board__table__list__entry">
          {parseInt(ethers.utils.formatUnits(item[1], 0))}
        </div>
        <div className="home__stats__board__table__list__entry">
          {days != 0
            ? days + " Days"
            : hours != 0
            ? hours + " Hours"
            : minutes != 0
            ? minutes + " Minutes"
            : seconds + " Seconds"}
        </div>
        <div className="home__stats__board__table__list__entry">
          {parseInt(ethers.utils.formatUnits(item[6], 0))}
        </div>
        <div className="home__stats__board__table__list__entry">
          {parseInt(ethers.utils.formatUnits(item[7], 0))}
        </div>
        <div className="home__stats__board__table__list__entry">
          <button
            className="home__nfts__card__button"
            style={{ marginTop: "0px" }}
            onClick={() => {
              unStake(parseInt(ethers.utils.formatUnits(item[0], 0)));
            }}
            disabled={claim_allowed_time > 0}
          >
            {claim_allowed_time > 0 ? "Unstake" : "Claim"}
          </button>
        </div>
      </a>
    </Fade>
  );
}
