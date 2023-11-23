import React from "react";
import Logo from "../components/assets/logo.jpg";
import "../components/styles/Header.css";

function Header() {
  return (
    <header className="header">
      <img src={Logo} alt="Litle Lemon logo" className="logo-img"></img>
      <nav className="nav">
        <ul>
          <li>
            <a href="/">HOME</a>
          </li>
          <li>
            <a href="/">ABOUT</a>
          </li>
          <li>
            <a href="/">MENU</a>
          </li>
          <li>
            <a href="/reservations">RESERVATIONS</a>
          </li>
          <li>
            <a href="/">ORDER ONLINE</a>
          </li>
          <li>
            <a href="/">LOGIN</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default Header;
