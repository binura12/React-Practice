import React from "react";
import "./Header.css";
import LogoImage from '../../assets/react.svg'

function Header(props) {
  return (
    <>
      <img src="vite.svg" alt="Vite Logo" />
      <img src={LogoImage} alt="React Logo" />
    </>
  );
}

export default Header;
