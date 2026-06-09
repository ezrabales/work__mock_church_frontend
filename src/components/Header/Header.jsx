import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header__logo-container glass">Church</div>
      <div className="header__menu-container glass">
        <p className="header__menu-text">MENU</p>
        <button class="header__menu-btn" aria-label="menu button">
          <span class="header__menu-btn-line" />
          <span class="header__menu-btn-line" />
          <span class="header__menu-btn-line" />
        </button>
      </div>
    </div>
  );
};
export default Header;
