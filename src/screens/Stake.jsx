import React, { useEffect, useState } from "react";
import bronze from "../assets/game_tiers/bronz.png";
import diamond from "../assets/game_tiers/dimond.png";
import gold from "../assets/game_tiers/gold.png";
import platinium from "../assets/game_tiers/platinum.png";
import silver from "../assets/game_tiers/silver.png";
import noData from "../assets/noData.svg";
import stake from "../assets/stake.png";
import local from "../assets/local.json";
import { ethers } from "ethers";
import { StatsBoardFilterEntry } from "./StatsBoardFilterEntry";
import { NFTCard } from "./NFTCard";

export default function Stake() {
  const provider = new ethers.providers.Web3Provider(window.ethereum, "any");
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState({
    image: bronze,
    title: "Bronze",
  });
  const tabs = [
    {
      value: "0",
      image: bronze,
      title: "Bronze",
      defaultChecked: true,
    },
    { value: "1", image: silver, title: "Silver" },
    { value: "2", image: gold, title: "Gold" },
    { value: "3", image: platinium, title: "Platanium" },
    { value: "4", image: diamond, title: "Diamond" },
  ];

  async function getDataLength() {
    await provider.send("eth_requestAccounts", []);
    const signer = provider.getSigner();

    const usdcContract = new ethers.Contract(
      local.nftManager.address,
      local.nftManager.abi,
      signer
    );
    let query = await usdcContract.getNFTData();
    //query = ethers.utils.formatUnits(query, 0);
    setData(query);
  }

  async function onEarnNFT(index) {
    await provider.send("eth_requestAccounts", []);
    const signer = provider.getSigner();

    const nftManager = new ethers.Contract(
      local.nftManager.address,
      local.nftManager.abi,
      signer
    );
    const tx = await nftManager.earnNFT(index, {
      gasPrice: 20e9,
    });
    console.log(`Transaction hash: ${tx.hash}`);

    const receipt = await tx.wait();
    console.log(`Transaction confirmed in block ${receipt.blockNumber}`);
    console.log(`Gas used: ${receipt.gasUsed.toString()}`);
    getDataLength();
  }

  async function onStake(amount, index) {
    await provider.send("eth_requestAccounts", []);
    const signer = provider.getSigner();

    const nftManager = new ethers.Contract(
      local.token.address,
      local.token.abi,
      signer
    );
    const tx = await nftManager.increaseAllowance(
      local.nftManager.address,
      amount,
      {
        gasPrice: 20e9,
      }
    );
    console.log(`Transaction hash: ${tx.hash}`);

    const receipt = await tx.wait();
    console.log(`Transaction confirmed in block ${receipt.blockNumber}`);
    console.log(`Gas used: ${receipt.gasUsed.toString()}`);
    onEarnNFT(index);
  }

  useEffect(() => {
    getDataLength();
  }, []);

  useEffect(() => {
    setFilteredData(
      data.filter(
        (item) =>
          ethers.utils.formatUnits(item[7], 0) === selectedCategory.value
      )
    );
  }, [data, selectedCategory]);

  return (
    <>
      <div className="home__banner" style={{ background: "transparent" }}>
        <div className="home__banner__content">
          <div className="home__banner__content__left">
            <div className="home__banner__content__left__heading">Staking</div>
            <div className="home__banner__content__left__info">
              In publishing and graphic design, Lorem ipsum is a placeholder
              text commonly used to demonstrate the visual form of a document or
              a typeface without relying on meaningful content. Lorem ipsum may
              be used as a placeholder before final copy is available. Wikipedia
            </div>
            <button className="home__banner__content__left__button">
              Let's Stake
            </button>
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
      <div className="home__stats__board__filter home__stats__board__filter__special">
        {tabs.map((item, index) => (
          <StatsBoardFilterEntry
            item={item}
            key={index}
            setSelectedCategory={setSelectedCategory}
          />
        ))}
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
      <div className="home__nfts">
        {filteredData.length === 0 ? (
          <div
            style={{ width: "100%", display: "flex", justifyContent: "center" }}
          >
            <img src={noData} alt="noData" />
          </div>
        ) : (
          filteredData.map((item, index) => (
            <NFTCard item={item} key={index} onStake={onStake} />
          ))
        )}
      </div>
    </>
  );
}
