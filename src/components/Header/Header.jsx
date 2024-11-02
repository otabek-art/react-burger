import React, { useState } from "react";
import "./Header.scss";

const Header = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleBurger = () => {
    setIsActive(!isActive);
  };

  return (
    <>
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <img
              src="https://imgpng.ru/d/google_PNG19642.png"
              alt=""
              className="logo"
            />

            <div className={`header__menu ${isActive ? "active" : ""}`}>
              <a href="">Catalog</a>
              <a href="">Portfolio</a>
              <a href="">Contacts</a>
            </div>

            <div onClick={toggleBurger} className={`burger ${isActive ? "active" : ""}`}>
              <div></div>
              <div></div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
