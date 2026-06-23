import { NavLink } from "react-router-dom";
import "./Header.css";
import { useEffect, useRef, useState } from "react";
import { useGlobal } from "../GlobalState/GlobalState";

const Header = () => {
  const { media } = useGlobal();
  const openBackgroundRef = useRef(null);
  const headerOpenContainerRef = useRef(null);
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [menuIsOpening, setMenuIsOpening] = useState(false);
  const [menuIsClosing, setMenuIsClosing] = useState(false);
  const menuOpenTime = 0.8;
  const menuTimeoutRef = useRef(null);

  const links = [
    { name: "Home", to: "/" },
    { name: "Give", to: "/give" },
    { name: "Connect", to: "/connect" },
    { name: "About Us", to: "/about" },
    { name: "Church Life", to: "/lifeInChurch" },
    { name: "Plan Your Visit", to: "/planYourVisit" },
  ];

  function toggleMenuOpen() {
    if (menuTimeoutRef.current) {
      clearTimeout(menuTimeoutRef.current);
    }

    if (!menuIsOpen && !menuIsOpening) {
      setMenuIsClosing(false);
      setMenuIsOpening(true);

      menuTimeoutRef.current = setTimeout(() => {
        setMenuIsOpening(false);
        setMenuIsOpen(true);
        menuTimeoutRef.current = null;
      }, menuOpenTime * 1000);
    } else {
      setMenuIsOpen(false);
      setMenuIsOpening(false);
      setMenuIsClosing(true);

      menuTimeoutRef.current = setTimeout(() => {
        setMenuIsClosing(false);
        menuTimeoutRef.current = null;
      }, menuOpenTime * 1000);
    }
  }
  // animate menu button
  useEffect(() => {
    // console.log(
    //   `menuIsOpening: ${menuIsOpening}\nmenuIsOpen: ${menuIsOpen}\nenuIsClosing: ${menuIsClosing}`,
    // );
    const el = openBackgroundRef.current;
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

    const diagonal = Math.hypot(window.innerWidth, window.innerHeight);
    const scale = diagonal / Math.min(rect.width, rect.height);

    if (menuIsOpening) {
      // opening
      el.style.transform = `scale(${scale * (window.innerWidth <= 1024 ? 2 : 1.2)})`;
      el.style.opacity = "1";
      el.style.backgroundColor = "rgb(215, 200, 177)";
    } else if (menuIsOpen) {
      // menu is open
      el.style.backgroundColor = "rgb(215, 200, 177)";
      el.style.opacity = "1";
      el.style.transform = `scale(${scale * (window.innerWidth <= 1024 ? 2 : 1.2)})`;
    } else if (menuIsClosing) {
      // closing
      setTimeout(
        () => {
          el.style.transform = "scale(1)";
        },
        menuOpenTime * 1000 - 550,
      );
    } else {
      // menu is closed
      el.style.opacity = "0";
    }
  }, [menuIsOpening, menuIsOpen, menuIsClosing]);

  // handle open container
  useEffect(() => {
    const el = headerOpenContainerRef.current;
    if (!el) return;

    if (menuIsOpening) {
      setTimeout(
        () => {
          el.className =
            "header__open-container header__open-container_opening";
        },
        menuOpenTime * 1000 - 550,
      );
    } else if (menuIsOpen) {
      el.className = "header__open-container header__open-container_open";
    } else if (menuIsClosing) {
      el.className = "header__open-container header__open-container_closing";
    } else {
      el.className = "header__open-container";
    }
  }, [menuIsOpening, menuIsOpen, menuIsClosing]);

  return (
    <>
      <div className="header">
        <NavLink
          to={"/"}
          className={`glass header__logo-container ${menuIsOpening || menuIsOpen ? "header__logo-container_open" : ""}`}
        >
          DISPLAY CHURCH
        </NavLink>
      </div>
      <button
        className="glass header__menu-container"
        onClick={() => toggleMenuOpen()}
      >
        <div
          className={`header__menu-text-container ${menuIsOpening || menuIsOpen ? "header__menu-text-container_open" : ""}`}
        >
          <p className="header__menu-text-menu">MENU</p>
          <p className="header__menu-text-close">CLOSE</p>
        </div>
        <div
          className={`header__menu-btn ${
            menuIsOpen || menuIsOpening
              ? "header__menu-btn_open"
              : menuIsClosing
                ? "header__menu-btn_closing"
                : ""
          }`}
          aria-label="menu button"
        >
          <span className="header__menu-btn-line" />
          <span className="header__menu-btn-line" />
          <span className="header__menu-btn-line" />
        </div>
      </button>
      <div ref={openBackgroundRef} className="header__open-background" />
      <div className="header__spacer" />
      <div ref={headerOpenContainerRef} className="header__open-container">
        <div className="header__open-left">
          <div className="header__open-links-container">
            {links.map((link, i) => (
              <div key={i} className="header__open-link-wrapper">
                <NavLink
                  to={link.to}
                  className={"header__open-link"}
                  onClick={() => toggleMenuOpen()}
                >
                  {link.name}
                </NavLink>
              </div>
            ))}
          </div>
          {window.innerWidth > 768 && <span className="header__open-border" />}
        </div>
        {window.innerWidth > 768 ? (
          <div className="header__open-right">
            <div className="header__open-info-container">
              <div>
                <div className="header__open-info-line-wrapper">
                  <p className="header__open-info-line">Address:</p>
                </div>
                <div className="header__open-info-line-wrapper">
                  <p className="header__open-info-line">SOUL CHURCH</p>
                </div>
                <div className="header__open-info-line-wrapper">
                  <p className="header__open-info-line">4 Mason Rd, NR6 6RF</p>
                </div>
              </div>
              <div>
                <div className="header__open-info-line-wrapper">
                  <p className="header__open-info-line">Email:</p>
                </div>
                <div className="header__open-info-line-wrapper">
                  <p className="header__open-info-line">info@soulchurch.com</p>
                </div>
              </div>
              <div>
                <div className="header__open-info-line-wrapper">
                  <p className="header__open-info-line">Call:</p>
                </div>
                <div className="header__open-info-line-wrapper">
                  <p className="header__open-info-line">01603 488880</p>
                </div>
              </div>
            </div>

            <div className="header__open-links-container">
              {media.map((link, i) => (
                <div key={i} className="header__open-links-line-wrapper">
                  <div className={"header__open-links-line"}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="header__open-links-link"
                    >
                      {link.name}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="header__open-right">
            <div className="header__open-links-container-small">
              {media.map((link, i) => {
                const Icon = link.icon;
                return (
                  <div key={i} className="header__open-links-wrapper-small">
                    <div
                      className={"header__open-links-small"}
                      style={{ transition: `transform ${0.2 + i / 13}s ease` }}
                    >
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="header__open-links-link"
                        onClick={() => toggleMenuOpen()}
                      >
                        <Icon size={window.innerWidth <= 768 ? 32 : 40} />
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </>
  );
};
export default Header;
