import Btn from "../../Btn/Btn";
import "./TextPicDisplay.css";

const TextPicDisplay = ({
  borderRadius = "0 0 50px 50px",
  backgroundColor = "rgb(255, 255, 255)",
  subtitle,
  subtitleClassName,
  title,
  titleClassName,
  description,
  descriptionClassName,
  img,
  imgClassName,
  btns,
  reverse = false,
}) => {
  return (
    <div className="textPic" style={{ borderRadius, backgroundColor }}>
      <div className="textPic__section">
        <p className={"textPic__subtitle " + (subtitleClassName || "")}>
          {subtitle}
        </p>
        <h2 className={"textPic__title " + (titleClassName || "")}>{title}</h2>
        <div className={`textPic__container${reverse ? "_reverse" : ""}`}>
          <p className={"textPic__description " + (descriptionClassName || "")}>
            {description}
          </p>
        </div>
        <div className="textPic__btn-container">
          {btns &&
            btns.map((btn, i) => {
              return (
                <Btn
                  className={btn.className}
                  follow={0.5}
                  handleClick={btn.onClick}
                >
                  {btn.text}
                </Btn>
              );
            })}
        </div>
      </div>
      <div className="textPic__section">
        <div className="textPic__img-container">
          <img className={"textPic__img " + (imgClassName || "")} src={img} />
        </div>
      </div>
    </div>
  );
};
export default TextPicDisplay;
