import React, { useEffect, useState } from "react";
import { ethers } from "ethers";
import { Fade } from "react-reveal";
import stake from "../assets/stake.png";
import local from "../assets/local.json";
import { TableRow } from "../components/TableRow";

export default function Staked() {
  const [tableData, setTableData] = useState([]);
  const provider = new ethers.providers.Web3Provider(window.ethereum, "any");

  async function unStake(value) {
    await provider.send("eth_requestAccounts", []);
    const signer = provider.getSigner();

    const usdcContract = new ethers.Contract(
      local.nftManager.address,
      local.nftManager.abi,
      signer
    );

    const tx = await usdcContract.unstake(value, {
      gasPrice: 20e9,
    });
    console.log(`Transaction hash: ${tx.hash}`);

    const receipt = await tx.wait();
    console.log(`Transaction confirmed in block ${receipt.blockNumber}`);
    console.log(`Gas used: ${receipt.gasUsed.toString()}`);
    onStakeQuery();
  }

  async function onStakeQuery() {
    await provider.send("eth_requestAccounts", []);
    const signer = provider.getSigner();
    let userAddress = await signer.getAddress();

    const usdcContract = new ethers.Contract(
      local.nftManager.address,
      local.nftManager.abi,
      signer
    );

    let query = await usdcContract.userData(userAddress);
    setTableData(query[1]);
  }

  useEffect(() => {
    onStakeQuery();
  }, []);

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
      <div className="home__stats__board__table">
        <Fade bottom>
          <div className="home__stats__board__table__header">
            <div
              className="home__stats__board__table__header__entry"
              style={{ maxWidth: 100 }}
            />
            <div className="home__stats__board__table__header__entry">
              Staking Date
            </div>
            <div className="home__stats__board__table__header__entry">
              Amount
            </div>
            <div className="home__stats__board__table__header__entry">
              Unstaking Allowed After <span>(Remaining Days)</span>
            </div>
            <div className="home__stats__board__table__header__entry">
              Reward earned
            </div>
            <div className="home__stats__board__table__header__entry">APR</div>
            <div className="home__stats__board__table__header__entry">
              Unstake
            </div>
          </div>
        </Fade>
        {tableData.map((item, index) => (
          <TableRow item={item} key={index} unStake={unStake} />
        ))}
      </div>
    </>
  );
}
