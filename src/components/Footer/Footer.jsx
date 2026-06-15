import { NavLink } from "react-router-dom";
import "./Footer.css";
import FooterForm from "../FooterForm/FooterForm";
import { useLocation } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { useGlobal } from "../GlobalState/GlobalState";

const Footer = () => {
  const { footerBackgroundColor } = useGlobal();
  const [backgroundColor, setBackgroundColor] = useState(footerBackgroundColor);
  const links = [
    { name: "Homepage", to: "/" },
    { name: "Connect", to: "/connect" },
    { name: "Give", to: "/give" },
    { name: "About", to: "/about" },
    { name: "Life In Church", to: "/lifeInChurch" },
    { name: "Plan Your Visit", to: "/planYourVisit" },
    { name: "Beliefs", to: "/beliefs" },
    { name: "Leadership", to: "/leadership" },
    { name: "Groups", to: "/groups" },
    { name: "Teams", to: "/teams" },
  ];
  const media = [
    { name: "YouTube", href: "https://www.youtube.com" },
    { name: "FaceBook", href: "https://www.facebook.com/" },
    { name: "Twitter", href: "https://x.com/" },
    { name: "Instagram", href: "https://www.instagram.com/" },
    { name: "Podcast", href: "https://podcasts.apple.com/us" },
  ];

  const footerRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setBackgroundColor(footerBackgroundColor);
  }, [footerBackgroundColor]);

  useEffect(() => {
    setVisible(false);
    setBackgroundColor(footerBackgroundColor);
  }, [location.pathname]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.7 },
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => observer.disconnect();
  }, [location.pathname]);

  return (
    <div
      ref={footerRef}
      className={`footer ${visible ? "footer--visible" : ""}`}
      style={{ backgroundColor }}
    >
      <div className="footer__left">
        <div className="footer__logo-container"></div>

        {/* CONTACT US */}
        <div className="footer__column">
          <h3 className="footer__title">CONTACT US</h3>
          <p className="footer__text">
            SOUL CHURCH <br /> 4 Mason Rd, NR6 6RF
            <br />
            info@soulchurch.com
            <br />
            01234 567890
          </p>
          <p className="footer__text">
            Made by: <br />
            <a
              className="footer__creater-link"
              href="https://www.solidrockwebsites.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ezra Bales
            </a>
          </p>
        </div>

        {/* links */}
        <div className="footer__column">
          <h3 className="footer__title">LINKS</h3>
          {links.map((link, i) => (
            <NavLink key={i} to={link.to} className={"footer__link"}>
              {link.name}
            </NavLink>
          ))}
        </div>

        {/* media */}
        <div className="footer__column">
          <h3 className="footer__title">MEDIA</h3>
          {media.map((link, i) => (
            <a
              key={i}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={"footer__link"}
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
      <div className="footer__right">
        <div className="footer__column">
          <h3 className="footer__title">STAY TUNED</h3>
          <p className="footer__text">
            Sign up for our newsletter to find out more about what's happening
            at SOUL Church!
          </p>
          <FooterForm
            inputs={[
              {
                name: "firstName",
                type: "text",
                placeholder: "First Name * ",
                required: true,
              },
              {
                name: "lastName",
                type: "text",
                placeholder: "Last Name * ",
                required: true,
              },
              {
                name: "email",
                type: "text",
                placeholder: "Email Address * ",
                required: true,
              },
            ]}
          />
        </div>
      </div>
      <div className="footer__gradient" />
    </div>
  );
};
export default Footer;
