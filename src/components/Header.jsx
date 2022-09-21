import { useEffect, useState } from "react";
import OutsideClickHandler from "react-outside-click-handler";
import { Link, useNavigate } from "react-router-dom";
import logoLight from "../assets/logo.svg";
import { Menu, X } from "react-feather";
import logo from "../assets/logo.svg";
import { Fade } from "react-reveal";

export function Header({ dataWallet, setUser, user, connectWallet, setdata }) {
  const navigate = useNavigate();
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
                {user === null ? (
                  <>
                    <Fade top>
                      <a href="#home" className="header__nav__link">
                        Home
                      </a>
                    </Fade>
                    <Fade top>
                      <a href="#about" className="header__nav__link">
                        About Us
                      </a>
                    </Fade>
                    <Fade top>
                      <a href="#roadmap" className="header__nav__link">
                        Raodmap
                      </a>
                    </Fade>
                    <Fade top>
                      <a href="#partners" className="header__nav__link">
                        Partners
                      </a>
                    </Fade>
                    <Fade top>
                      <a href="#teams" className="header__nav__link">
                        Teams
                      </a>
                    </Fade>
                  </>
                ) : (
                  <>
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
                  </>
                )}

                <a
                  onClick={
                    dataWallet.Balance === null
                      ? connectWallet
                      : () => {
                          setUser(null);
                          setdata({
                            address: "",
                            Balance: null,
                          });
                          navigate("/");
                        }
                  }
                  className="header__nav__link__btn"
                >
                  <span>
                    {dataWallet.Balance === null
                      ? "Connect Wallet"
                      : "Wallet Connected"}
                  </span>
                  <div className="liquid"></div>
                </a>
              </div>
            </OutsideClickHandler>
          </div>
        ) : null}
      </div>
    </div>
  );
}
