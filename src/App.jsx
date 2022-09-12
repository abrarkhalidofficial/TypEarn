import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { ethers } from "ethers";
import { socket } from "./utils/socket";
import { Header } from "./components/Header";
import Footer from "./components/Footer";
import Login from "./components/Login";
import StartGame from "./components/StartGame";
import Game from "./screens/Game";
import Home from "./screens/Home";
import Stake from "./screens/Stake";
import Staked from "./screens/Staked";
import Rewards from "./screens/Rewards";
import EmailLogin from "./components/EmailLogin";
import ScoreCard from "./components/ScoreCard";
import "./App.scss";

function App() {
  const [user, setUser] = useState(null);
  const [isStartGame, setIsStartGame] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [isScoreCard, setIsScoreCard] = useState(false);
  const [isEmailLogin, setIsEmailLogin] = useState(false);
  const [dataFromApi, setDataFromApi] = useState([]);
  const [winners, setWinners] = useState([]);

  const [data, setdata] = useState({
    address: "",
    Balance: null,
  });

  const btnhandler = () => {
    if (window.ethereum) {
      window.ethereum
        .request({ method: "eth_requestAccounts" })
        .then((res) => accountChangeHandler(res[0]));
    } else {
      alert("install metamask extension!!");
    }
  };

  const getbalance = (address) => {
    window.ethereum
      .request({
        method: "eth_getBalance",
        params: [address, "latest"],
      })
      .then((balance) => {
        setdata({
          address: address,
          Balance: ethers.utils.formatEther(balance),
        });
      });
  };

  const accountChangeHandler = (account) => {
    getbalance(account);
  };

  socket.addEventListener("message", function (event) {
    const js = JSON.parse(event.data);
    setDataFromApi(js);
  });

  useEffect(() => {
    setTimeout(() => {
      socket.send("8" + " " + data?.address);
    }, 3000);
  }, [data]);

  useEffect(() => {
    if (dataFromApi?.auth?.exists === "yes") {
      socket.send("1" + " " + user?.email);
    } else if (
      dataFromApi?.auth?.exists === "no" &&
      dataFromApi?.auth?.address !== ""
    ) {
      setIsEmailLogin(true);
    }
  }, [data]);

  useEffect(() => {
    if (dataFromApi?.auth?.exists === "yes") {
      setUser(dataFromApi?.auth?.data);
      setTimeout(() => {
        socket.send("1" + " " + user?.email);
      }, 3000);
    }
  }, [dataFromApi]);

  return (
    <>
      {isScoreCard ? (
        <ScoreCard
          onClose={setIsScoreCard}
          FirstPosition={true}
          winners={winners}
          user={user}
        />
      ) : null}
      {isEmailLogin ? (
        <EmailLogin onClose={setIsEmailLogin} data={data} />
      ) : null}
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
          path="/staked"
          element={
            <Staked
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
              setIsScoreCard={setIsScoreCard}
              setWinners={setWinners}
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
