{
  user === null ? (
    <>
      <a
        href="#"
        onClick={() => {
          setIsLogin(true);
          if (window.innerWidth < 1000) {
            setIsOpen(false);
          }
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

      <a
        href="#"
        onClick={() => {
          logout(setUser);
          setUser(null);
        }}
        className="header__nav__button"
        style={{
          background: "#242424",
          color: "white",
          borderColor: "white",
        }}
      >
        Logout
      </a>
    </>
  );
}
