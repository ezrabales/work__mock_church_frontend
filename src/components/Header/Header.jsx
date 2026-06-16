import { NavLink } from "react-router-dom";
import "./Header.css";
import { useEffect, useRef, useState } from "react";

const Header = () => {
  const transitionSpanRef = useRef(null);
  const headerOpenContainerRef = useRef(null);
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [menuIsOpening, setMenuIsOpening] = useState(false);
  const [menuIsClosing, setMenuIsClosing] = useState(false);
  const menuOpenTime = 0.8;

  function toggleMenuOpen() {
    if (!menuIsOpen && !menuIsOpening) {
      setMenuIsOpening(true);
      setTimeout(() => {
        setMenuIsOpening(false);
        setMenuIsOpen(true);
      }, menuOpenTime * 1000);
    } else {
      setMenuIsOpen(false);
      setMenuIsOpening(false);
      setMenuIsClosing(true);
      setTimeout(() => {
        setMenuIsClosing(false);
      }, menuOpenTime * 1000);
    }
  }

  // animate menu button
  useEffect(() => {
    const el = transitionSpanRef.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();

    // center of the circle
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;

    // distance to the farthest viewport corner
    const distances = [
      Math.hypot(cx, cy), // top-left
      Math.hypot(window.innerWidth - cx, cy), // top-right
      Math.hypot(cx, window.innerHeight - cy), // bottom-left
      Math.hypot(window.innerWidth - cx, window.innerHeight - cy), // bottom-right
    ];

    const maxDistance = Math.max(...distances);

    // circle radius before scaling
    const radius = rect.width / 2;

    const scale = maxDistance / radius + 7;

    if (menuIsOpening) {
      // opening
      el.style.transform = `scale(${scale})`;
      el.style.opacity = "1";
    } else if (menuIsOpen) {
      // menu is open, hide element
      el.style.opacity = "0";
    } else if (menuIsClosing) {
      // closing
      el.style.transform = "scale(1)";
      el.style.opacity = "1";
    } else {
      // menu is closed
      el.style.opacity = "0";
    }
  }, [menuIsOpening, menuIsOpen, menuIsClosing]);

  // animate open header
  useEffect(() => {
    const el = headerOpenContainerRef.current;
    if (!el) return;

    if (menuIsOpening) {
      // opening
      el.className = "header__open-container header__open-container_opening";
    } else if (menuIsOpen) {
      // open
      el.className = "header__open-container header__open-container_open";
    } else if (menuIsClosing) {
      // closing
      el.className = "header__open-container header__open-container_closing";
    } else {
      // closed
      el.className = "header__open-container";
    }
  }, [menuIsOpening, menuIsOpen, menuIsClosing]);

  return (
    <>
      <div
        className={`header ${menuIsOpen || menuIsOpening ? "header_open" : ""}`}
      >
        <NavLink
          to={"/"}
          className={`header__logo-container glass ${menuIsOpen || menuIsOpening ? "header__logo-container_open" : ""}`}
        >
          Church
        </NavLink>
        <span
          ref={transitionSpanRef}
          className={`header__transition`}
          style={{
            transition:
              "transform 0.8s cubic-bezier(.76,0,.24,1), opacity 0.2s cubic-bezier(.76,0,.24,1)",
          }}
        />
        <button
          className={`glass header__menu-container`}
          onClick={() => toggleMenuOpen()}
        >
          <div
            className={`header__menu-text-container ${menuIsOpen || menuIsOpening ? "header__menu-text-container_open" : ""}`}
          >
            <p className="header__menu-text-menu">MENU</p>
            <p className="header__menu-text-close">CLOSE</p>
          </div>
          <div
            className={`header__menu-btn ${menuIsOpen || menuIsOpening ? "header__menu-btn_open" : ""}`}
            aria-label="menu button"
          >
            <span className="header__menu-btn-line" />
            <span className="header__menu-btn-line" />
            <span className="header__menu-btn-line" />
          </div>
        </button>
      </div>
      <div className="header__spacer" />
      <div ref={headerOpenContainerRef} className="header__open-container">
        <div className="header__open-left">
          <span className="header__open-divider" />
        </div>
        <div className="header__open-right">right</div>
      </div>
    </>
  );
};
export default Header;
