import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { ethers } from "ethers";
import { socket } from "./utils/socket";
import { Header } from "./components/Header";
import Footer from "./components/Footer";
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
  const [isScoreCard, setIsScoreCard] = useState(false);
  const [isEmailLogin, setIsEmailLogin] = useState(false);
  const [isEditEmailLogin, setIsEditEmailLogin] = useState(false);
  const [dataFromApi, setDataFromApi] = useState([]);
  const [winners, setWinners] = useState([]);
  const [data, setdata] = useState({
    address: "",
    Balance: null,
  });

  socket.addEventListener("message", function (event) {
    setDataFromApi(JSON.parse(event.data));
  });

  const btnhandler = () => {
    if (window.ethereum) {
      window.ethereum.request({ method: "eth_requestAccounts" }).then((res) =>
        window.ethereum
          .request({
            method: "eth_getBalance",
            params: [res[0], "latest"],
          })
          .then((balance) => {
            setdata({
              address: res[0],
              Balance: ethers.utils.formatEther(balance),
            });
            socket.send("8" + " " + res[0]);
          })
      );
    } else {
      alert("install metamask extension!!");
    }
  };

  useEffect(() => {
    setTimeout(() => {
      if (dataFromApi?.auth?.exists === "yes") {
        socket.send("1" + " " + user?.email);
      } else if (
        dataFromApi?.auth?.exists === "no" &&
        dataFromApi?.auth?.address !== ""
      ) {
        setIsEmailLogin(true);
      } else {
        setIsEmailLogin(false);
      }
    }, 3000);
  }, [dataFromApi]);

  useEffect(() => {
    if (dataFromApi?.auth?.exists === "yes") {
      setUser(dataFromApi?.auth?.data);
      setTimeout(() => {
        socket.send("1" + " " + dataFromApi?.auth?.data?.email);
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
      {isEditEmailLogin ? (
        <EmailLogin
          onClose={setIsEditEmailLogin}
          isEdit
          data={data}
          dataFromApi={dataFromApi}
        />
      ) : null}
      {isStartGame ? (
        <StartGame setIsStartGame={setIsStartGame} email={user?.email} />
      ) : null}
      <Header
        connectWallet={btnhandler}
        user={user}
        setUser={setUser}
        dataFromApi={dataFromApi}
        dataWallet={data}
        setdata={setdata}
        setIsEditEmailLogin={setIsEditEmailLogin}
      />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              setIsStartGame={setIsStartGame}
              user={user}
              dataFromApi={dataFromApi}
            />
          }
        />
        <Route
          path="/stake"
          element={<Stake setIsStartGame={setIsStartGame} user={user} />}
        />
        <Route
          path="/staked"
          element={<Staked setIsStartGame={setIsStartGame} user={user} />}
        />
        <Route
          path="/rewards"
          element={<Rewards setIsStartGame={setIsStartGame} user={user} />}
        />
        <Route
          path="/game"
          element={
            <Game
              ssetIsStartGame={setIsStartGame}
              user={user}
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
