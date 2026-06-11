import Btn from "../../Btn/Btn";
import "./TextPicDisplay.css";

const TextPicDisplay = ({ title, description, img, btns }) => {
  return (
    <div className="textPic">
      <h2 className="textPic__title">{title}</h2>
      <div className="textPic__container">
        <p className="textPic__description ">{description}</p>
        {/* make this an image */}
        <div className="textPic__img-container">Image</div>
      </div>
      <div className="textPic__btn-container">
        {btns &&
          btns.map((btn, i) => {
            return <Btn follow={0.5}>{btn}</Btn>;
          })}
      </div>
    </div>
  );
};
export default TextPicDisplay;
