import { useEffect, useState } from "react";
import { Menu, X } from "react-feather";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { logout } from "../services/auth";

export function Header({
  dataWallet,
  setUser,
  setIsLogin,
  user,
  connectWallet,
}) {
  const [isOpen, setIsOpen] = useState(true);
  useEffect(() => {
    if (window.innerWidth < 768) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
    window.addEventListener("resize", () => {
      if (window.innerWidth < 768) {
        setIsOpen(false);
      } else {
        setIsOpen(true);
      }
    });
  }, []);

  return (
    <div className="header">
      <Link to="/" className="header__logo">
        <img src={logo} alt="logo" className="header__logo__img" />
      </Link>
      <button
        className="header__nav__menu"
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        {isOpen ? (
          <X size={20} color="#fff" />
        ) : (
          <Menu size={20} color="#fff" />
        )}
      </button>
      {isOpen ? (
        <div className="header__nav">
          <Link to="/stake" className="header__nav__link">
            Stake
          </Link>
          <Link to="/" className="header__nav__link">
            Rewards
          </Link>
          <a href="#" className="header__nav__link">
            About Us
          </a>
          {user === null ? (
            <>
              <a
                href="#"
                onClick={() => {
                  setIsLogin(true);
                }}
                className="header__nav__button"
              >
                Login
              </a>
            </>
          ) : (
            <>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  fontSize: 14,
                }}
              >
                <img
                  src={user.photoURL}
                  alt={user.displayName}
                  style={{
                    width: 50,
                    height: 50,
                    borderRadius: 50,
                  }}
                />
                {/* {user.displayName} */}
              </div>
              {dataWallet.Balance === null ? (
                <a
                  href="#"
                  onClick={connectWallet}
                  className="header__nav__button"
                >
                  Connect Wallet
                </a>
              ) : (
                <a
                  href="#"
                  className="header__nav__button"
                  style={{ background: "black" }}
                >
                  Connected Wallet
                </a>
              )}

              <a
                href="#"
                onClick={() => {
                  logout(setUser);
                  setUser(null);
                }}
                className="header__nav__button"
                style={{ background: "black" }}
              >
                Logout
              </a>
            </>
          )}
        </div>
      ) : null}
    </div>
  );
}
