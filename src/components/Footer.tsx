import React from "react";
import "../components/styles/Footer.css";
import Logo from "../components/assets/logo.png";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <img src={Logo} alt="logo" className="logo" />
        <div className="footer-open">
          <h4>Opening Hours</h4>
          <ul>
            <li>Mon - Wed: 10:30AM - 12:00AM</li>
            <li>Fri: 12:00PM - 1:00AM</li>
            <li>Sat - Sun: 10:30AM - 12:00AM</li>
          </ul>
        </div>
        <div className="footer-contact">
          <h4>Contact</h4>
          <ul>
            <li>DownTown Road 123</li>
            <li>9012 Los Angelses</li>
            <li>555 555 555</li>
            <li>little@lemon.com</li>
          </ul>
        </div>

        <div className="footer-socials">
          <h4>Socials</h4>
          <ul>
            <li>
              <a href="https://www.facebook.com/">Facebook</a>
            </li>
            <li>
              <a href="https://twitter.com/">Twitter</a>
            </li>
            <li>
              <a href="https://www.instagram.com/">Instagram</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="copyright">
        <p>© 2023 Little Lemon Ltd. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
