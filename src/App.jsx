import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Footer from "./components/Footer";
import { Header } from "./components/Header";
import Login from "./components/Login";
import StartGame from "./components/StartGame";
import Game from "./screens/Game";
import Home from "./screens/Home";
import Stake from "./screens/Stake";
import { ethers } from "ethers";
import NFT from "./screens/NFT";
import Rewards from "./screens/Rewards";
import { socket } from "./utils/socket";
import EmailLogin from "./components/EmailLogin";
import ScoreCard from "./components/ScoreCard";

function App() {
  const [user, setUser] = useState(null);
  const [isStartGame, setIsStartGame] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [isScoreCard, setIsScoreCard] = useState(true);
  const [isEmailLogin, setIsEmailLogin] = useState(false);
  const [dataFromApi, setDataFromApi] = useState([]);

  const [data, setdata] = useState({
    address: "",
    Balance: null,
  });
  // Button handler button for handling a
  // request event for metamask
  const btnhandler = () => {
    // Asking if metamask is already present or not
    if (window.ethereum) {
      // res[0] for fetching a first wallet
      window.ethereum
        .request({ method: "eth_requestAccounts" })
        .then((res) => accountChangeHandler(res[0]));
    } else {
      alert("install metamask extension!!");
    }
  };

  // getbalance function for getting a balance in
  // a right format with help of ethers
  const getbalance = (address) => {
    // Requesting balance method
    window.ethereum
      .request({
        method: "eth_getBalance",
        params: [address, "latest"],
      })
      .then((balance) => {
        // Setting balance
        setdata({
          Balance: ethers.utils.formatEther(balance),
        });
      });
  };

  // Function for getting handling all events
  const accountChangeHandler = (account) => {
    // Setting an address data
    setdata({
      address: account,
    });

    // Setting a balance
    getbalance(account);
  };

  socket.addEventListener("message", function (event) {
    const js = JSON.parse(event.data);
    setDataFromApi(js);
  });

  return (
    <>
      {isScoreCard ? (
        <ScoreCard onClose={setIsScoreCard} FirstPosition={true} />
      ) : null}
      {isEmailLogin ? <EmailLogin onClose={setIsEmailLogin} /> : null}
      {isStartGame ? (
        <StartGame setIsStartGame={setIsStartGame} email={user?.email} />
      ) : null}
      {isLogin ? <Login setUser={setUser} setIsLogin={setIsLogin} /> : null}
      <Header
        connectWallet={btnhandler}
        setIsLogin={setIsLogin}
        user={user}
        setUser={setUser}
        dataWallet={data}
      />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              setIsStartGame={setIsStartGame}
              user={user}
              setIsLogin={setIsLogin}
            />
          }
        />
        <Route
          path="/stake"
          element={
            <Stake
              setIsStartGame={setIsStartGame}
              user={user}
              setIsLogin={setIsLogin}
            />
          }
        />
        <Route
          path="/nft"
          element={
            <NFT
              setIsStartGame={setIsStartGame}
              user={user}
              setIsLogin={setIsLogin}
            />
          }
        />
        <Route
          path="/rewards"
          element={
            <Rewards
              setIsStartGame={setIsStartGame}
              user={user}
              setIsLogin={setIsLogin}
            />
          }
        />
        <Route
          path="/game"
          element={
            <Game
              ssetIsStartGame={setIsStartGame}
              user={user}
              setIsLogin={setIsLogin}
              dataFromApi={dataFromApi}
              setUser={setUser}
            />
          }
        />
      </Routes>
      <div style={{ height: 50 }} />
      <Footer />
    </>
  );
}

export default App;
