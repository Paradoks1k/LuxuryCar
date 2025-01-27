import React from "react";
import "./style.css";
import logoIcon from "../../images/logo.png";

export const Headerr = () => {
  return (
    <div className="header py-11 px-0">
      <div className="container max-w-5xl my-0 mx-auto  flex items-center ">
        <div className="logo">
          <img className="logo-img " src={logoIcon} alt="logo" />
        </div>
        <nav className="menu ">
          <ul className="menu-list">
            <li className="menu-item">
              <a className="menu-link " href="#">
                НАШ автопаркaa
              </a>
            </li>
            <li className="menu-item">
              <a className="menu-link" href="#">
                Забронировать
              </a>
            </li>
          </ul>
        </nav>
        <a className="phone " href="tel:+971523898989">
          +971 52 389 89 89
        </a>
      </div>
    </div>
  );
};
