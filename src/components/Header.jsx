import { useEffect, useState } from "react";
import { Menu, X } from "react-feather";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import logoLight from "../assets/logoLight.png";
import { logout } from "../services/auth";
import OutsideClickHandler from "react-outside-click-handler";
import { Fade } from "react-reveal";

export function Header({
  dataWallet,
  setUser,
  setIsLogin,
  user,
  connectWallet,
}) {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    if (window.innerWidth < 1000) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
    window.addEventListener("resize", () => {
      if (window.innerWidth < 1000) {
        setIsOpen(false);
      } else {
        setIsOpen(true);
      }
    });
  }, []);

  return (
    <div
      className="header__wrapper"
      style={
        isOpen && window.innerWidth < 1000 ? { background: "white" } : null
      }
    >
      <div className="header">
        <Fade top>
          <Link to="/" className="header__logo">
            <img
              src={isOpen && window.innerWidth < 1000 ? logo : logoLight}
              alt="logo"
              className="header__logo__img"
            />
          </Link>
        </Fade>
        <button
          className={
            isOpen
              ? "header__nav__menu header__nav__menu__active"
              : "header__nav__menu"
          }
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          {isOpen ? (
            <X size={20} color="currentColor" />
          ) : (
            <Menu size={20} color="currentColor" />
          )}
        </button>
        {isOpen ? (
          <div className="header__nav">
            <OutsideClickHandler
              display="flex"
              onOutsideClick={() => {
                if (window.innerWidth < 1000) {
                  setIsOpen(false);
                }
              }}
            >
              <div className="header__nav " style={{ top: 0 }}>
                <Fade top>
                  <Link to="/stake" className="header__nav__link">
                    Stake
                  </Link>
                </Fade>
                <Fade top>
                  <Link to="/staked" className="header__nav__link">
                    Staked
                  </Link>
                </Fade>
                {/* <Fade top>
                  <Link to="/rewards" className="header__nav__link">
                    Rewards
                  </Link>
                </Fade> */}
                {user === null ? null : (
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      fontSize: 14,
                    }}
                  >
                    <img
                      src={"data:image/png;base64," + user?.photo}
                      alt={user?.name}
                      style={{
                        width: 50,
                        height: 50,
                        borderRadius: 50,
                      }}
                    />
                  </div>
                )}
                {dataWallet.Balance === null ? (
                  <a onClick={connectWallet} className="header__nav__button">
                    Connect Wallet
                  </a>
                ) : (
                  <>
                    <a className="header__nav__button">Wallet Connected</a>
                  </>
                )}
              </div>
            </OutsideClickHandler>
          </div>
        ) : null}
      </div>
    </div>
  );
}
