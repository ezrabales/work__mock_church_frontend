import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <>
      <div className="header">
        <NavLink to={"/"} className="header__logo-container glass">
          Church
        </NavLink>
        <button className="glass header__menu-container">
          <p className="header__menu-text">MENU</p>
          <div className="header__menu-btn" aria-label="menu button">
            <span className="header__menu-btn-line" />
            <span className="header__menu-btn-line" />
            <span className="header__menu-btn-line" />
          </div>
        </button>
      </div>
      <div className="header__spacer" />
    </>
  );
};
export default Header;
