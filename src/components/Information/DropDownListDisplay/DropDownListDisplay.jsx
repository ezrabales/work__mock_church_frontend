import { useState } from "react";
import "./DropDownListDisplay.css";

const DropDownListDisplay = ({ title, dropDowns }) => {
  const [dropDownOpen, setDropDownOpen] = useState();

  function toggleDropDownOpen(i) {
    if (dropDownOpen === i) {
      return setDropDownOpen(null);
    }
    setDropDownOpen(i);
  }

  return (
    <div className="drop">
      <h2 className="drop__title">{title}</h2>
      <div className="drop__drop-container">
        {dropDowns.map((drop, i) => (
          <div className="drop__drop">
            <button
              onClick={() => toggleDropDownOpen(i)}
              className="drop__drop-title-container"
            >
              <h3 className="drop__drop-title">{drop.title}</h3>
              <div
                className={`drop__icon-container ${dropDownOpen === i ? "drop__icon-container_open" : ""}`}
              >
                <span />
                <span />
              </div>
            </button>
            <div
              className={`drop__drop-content ${
                dropDownOpen === i ? "drop__drop-content_open" : ""
              }`}
            >
              <p className="drop__drop-description">{drop.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default DropDownListDisplay;
