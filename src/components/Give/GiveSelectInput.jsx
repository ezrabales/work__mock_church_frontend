import { useState } from "react";

const GiveSelectInput = ({ setValues, values, input }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="give__fund-select-wrapper">
      <button
        type="button"
        className="give__fund-select"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <span>{values[input.name] || input.placeholder || ""}</span>

        <span
          className={
            isOpen
              ? "give__fund-select-arrow give__fund-select-arrow--open"
              : "give__fund-select-arrow"
          }
        >
          <span></span>
          <span></span>
        </span>
      </button>

      {isOpen && (
        <div className="give__fund-options">
          {input?.options?.map((option) => (
            <button
              key={option}
              type="button"
              className={
                values.fund === option
                  ? "give__fund-option give__fund-option--selected"
                  : "give__fund-option"
              }
              onClick={() => {
                setValues((prev) => ({
                  ...prev,
                  fund: option,
                }));

                setIsOpen(false);
              }}
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
export default GiveSelectInput;
