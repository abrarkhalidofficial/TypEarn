import React from "react";
import { ethers } from "ethers";

export function NFTCard({ item, onStake }) {
  return (
    <button className="home__nfts__card">
      <div className="home__nfts__card__img">
        <img src={item[2]} alt={item[1]} />
      </div>
      <div className="home__nfts__card__heading">Name: {item[0]}</div>
      <div className="home__nfts__card__heading" style={{ marginTop: 10 }}>
        Staking Duration:{" "}
        {parseInt(ethers.utils.formatUnits(item[5], 0)) === 0
          ? "45"
          : parseInt(ethers.utils.formatUnits(item[5], 0)) === 1
          ? "90"
          : parseInt(ethers.utils.formatUnits(item[5], 0)) === 2
          ? "180"
          : null}{" "}
        days
      </div>
      <div className="home__nfts__card__heading" style={{ marginTop: 10 }}>
        Staking Amount: {parseInt(ethers.utils.formatUnits(item[6], 0))}
      </div>
      <button
        className="home__nfts__card__button"
        onClick={() => {
          onStake(
            parseInt(ethers.utils.formatUnits(item[6], 0)),
            parseInt(ethers.utils.formatUnits(item[10], 0))
          );
        }}
      >
        Stake
      </button>
    </button>
  );
}
