import Btn from "../../Btn/Btn";
import "./GridCardsDisplay.css";

const GridCardsDisplay = ({ cards, title }) => {
  return (
    <div className="grids">
      <h2 className="grids__title">{title}</h2>
      {cards.map((card, i) => (
        <div className="grids__card">
          <div className="grids__card-img-container">Image</div>
          <h3 className="grids__card-title">{card.title}</h3>
          <p className="grids__card-date">{card.date}</p>
          <p className="grids__card-time">{card.time}</p>
          <p className="grids__card-description">{card.description}</p>
          <div className="grids__card-btn-container">
            <Btn follow="0.2" className="grids__card-btn">
              {card.btn}
            </Btn>
          </div>
        </div>
      ))}
    </div>
  );
};
export default GridCardsDisplay;
