import "./TextDisplay.css";

const TextDisplay = ({ title, description, img, btns }) => {
  return (
    <div className="text">
      <h2 className="text__title">{title}</h2>
      <div className="text__container">
        <p className="text__description ">{description}</p>
      </div>
      <div className="text__btn-container">
        {btns &&
          btns.map((btn, i) => {
            return <Btn follow={0.5}>{btn}</Btn>;
          })}
      </div>
    </div>
  );
};
export default TextDisplay;
