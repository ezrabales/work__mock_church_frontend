import { NavLink } from "react-router-dom";
import "./Header.css";
import { useEffect, useRef, useState } from "react";

const Header = () => {
  const transitionSpanRef = useRef(null);
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  function toggleMenuOpen() {
    setMenuIsOpen((prev) => !prev);
  }

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

    if (menuIsOpen) {
      el.style.transform = `scale(${scale})`;
      el.style.opacity = "1";
    } else {
      el.style.transform = "scale(1)";

      setTimeout(() => {
        el.style.opacity = "0";
      }, 650);
    }
  }, [menuIsOpen]);

  return (
    <>
      <div className={`header ${menuIsOpen ? "header_open" : ""}`}>
        <NavLink to={"/"} className="header__logo-container glass">
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
            className={`header__menu-text-container ${menuIsOpen ? "header__menu-text-container_open" : ""}`}
          >
            <p className="header__menu-text-menu">MENU</p>
            <p className="header__menu-text-close">CLOSE</p>
          </div>
          <div
            className={`header__menu-btn ${menuIsOpen ? "header__menu-btn_open" : ""}`}
            aria-label="menu button"
          >
            <span className="header__menu-btn-line" />
            <span className="header__menu-btn-line" />
            <span className="header__menu-btn-line" />
          </div>
        </button>
      </div>
      <div className="header__spacer" />
      {/* {menuIsOpen && <div className="header_open"></div>} */}
    </>
  );
};
export default Header;
