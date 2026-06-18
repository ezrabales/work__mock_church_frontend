import { useEffect } from "react";
import "./DeckDisplay.css";
import Btn from "../../Btn/Btn";

const DeckDisplay = ({ title, cards }) => {
  useEffect(() => {
    const cards = document.querySelectorAll(".deck__card");

    const updateScale = () => {
      cards.forEach((card, i) => {
        const rect = card.getBoundingClientRect();

        const start = window.innerHeight * 0.8; // begins scaling
        const end = 32; // top sticky position (2rem)

        const progress = Math.min(
          Math.max((start - rect.top) / (start - end), 0),
          1,
        );

        const scale = Math.min(1, 1 - progress * 0.15 + i * 0.02);
        const brightness = 1 - progress * 0.04 + i * 0.03;

        card.style.transform = `scale(${scale})`;
        card.style.filter = `brightness(${brightness})`;
      });
    };

    updateScale();
    window.addEventListener("scroll", updateScale);

    return () => {
      window.removeEventListener("scroll", updateScale);
    };
  }, []);
  return (
    <div className="deck">
      <h2 className="deck__title">{title}</h2>
      <div
        className="deck-container"
        style={{ paddingBottom: `${cards.length * 50 + 100}px` }}
      >
        {cards.map((card, i) => (
          <div
            key={i}
            style={{
              marginBottom: `-${10 + 1.8 * i}vh`,
              top: `${10 + 1.8 * i}vh`,
            }}
            className="deck__card"
          >
            <div className="deck__card-text">
              <h3 className="deck__card-title">{card.title}</h3>
              <p className="deck__card-description">{card.description}</p>
              <div className="deck__card-btn-container">
                {card?.btns?.map((btn, j) => (
                  <Btn className={btn.className} follow={btn.follow}>
                    {btn.content}
                  </Btn>
                ))}
              </div>
            </div>
            <div className="deck__card-pic-container">
              <img className={card.imgClassName} src={card.img} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default DeckDisplay;
