import { useRef, useCallback } from "react";
import Btn from "../../Btn/Btn";
import "./CardSlider.css";

const CardSlider = ({ title, cards = [] }) => {
  const sliderRef = useRef(null);
  const dragState = useRef({
    isDown: false,
    startX: 0,
    scrollLeft: 0,
    hasDragged: false,
  });

  const handleMouseDown = useCallback((e) => {
    const el = sliderRef.current;
    if (animFrameRef.current) {
      cancelAnimationFrame(animFrameRef.current);
      animFrameRef.current = null;
    }
    dragState.current = {
      isDown: true,
      startX: e.pageX - el.offsetLeft,
      scrollLeft: el.scrollLeft,
      hasDragged: false,
    };
    el.style.scrollSnapType = "none";
  }, []);

  const handleMouseLeave = useCallback(() => {
    if (!dragState.current.isDown) return;
    dragState.current.isDown = false;
    snapToNearest();
  }, []);

  const handleMouseUp = useCallback(() => {
    if (!dragState.current.isDown) return;
    dragState.current.isDown = false;
    snapToNearest();
  }, []);

  const handleMouseMove = useCallback((e) => {
    if (!dragState.current.isDown) return;
    e.preventDefault();
    const el = sliderRef.current;
    const x = e.pageX - el.offsetLeft;
    const walk = (x - dragState.current.startX) * 1;
    if (Math.abs(walk) > 5) dragState.current.hasDragged = true;
    el.scrollLeft = dragState.current.scrollLeft - walk;
  }, []);

  // Touch support
  const handleTouchStart = useCallback((e) => {
    const el = sliderRef.current;
    if (animFrameRef.current) {
      cancelAnimationFrame(animFrameRef.current);
      animFrameRef.current = null;
    }
    dragState.current = {
      isDown: true,
      startX: e.touches[0].pageX - el.offsetLeft,
      scrollLeft: el.scrollLeft,
      hasDragged: false,
    };
    el.style.scrollSnapType = "none";
  }, []);

  const handleTouchMove = useCallback((e) => {
    if (!dragState.current.isDown) return;
    const el = sliderRef.current;
    const x = e.touches[0].pageX - el.offsetLeft;
    const walk = (x - dragState.current.startX) * 1;
    if (Math.abs(walk) > 5) dragState.current.hasDragged = true;
    el.scrollLeft = dragState.current.scrollLeft - walk;
  }, []);

  const handleTouchEnd = useCallback(() => {
    dragState.current.isDown = false;
    snapToNearest();
  }, []);

  const animFrameRef = useRef(null);

  const snapToNearest = () => {
    const el = sliderRef.current;
    if (!el) return;

    const marginLeft = 200;
    const cardWidth = el.querySelector(".cardSlider__card")?.offsetWidth ?? 300;
    const gap = 20;
    const unit = cardWidth + gap;
    const offset = parseFloat(getComputedStyle(el).paddingLeft) || 0;
    const index = Math.round((el.scrollLeft - offset) / unit);
    const clamped = Math.max(0, Math.min(index, cards.length - 1));
    const target = offset - marginLeft + clamped * unit;

    if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);

    const duration = 380;
    const start = el.scrollLeft;
    const distance = target - start;
    const startTime = performance.now();

    // ease-out cubic
    const ease = (t) => 1 - Math.pow(1 - t, 3);

    const step = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      el.scrollLeft = start + distance * ease(progress);
      if (progress < 1) {
        animFrameRef.current = requestAnimationFrame(step);
      } else {
        el.scrollLeft = target;
        // el.style.scrollSnapType = "x mandatory";
      }
    };

    animFrameRef.current = requestAnimationFrame(step);
  };

  return (
    <div className="cardSlider">
      <h2 className="cardSlider__title">{title}</h2>

      <div
        ref={sliderRef}
        className="cardSlider__card-container"
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {cards.map((card, i) => (
          <div key={i} className="cardSlider__card">
            <h3 className="cardSlider__card-title">{card.title}</h3>
            <p className="cardSlider__card-description">{card.description}</p>
            <Btn className="cardSlider__card-btn" follow={0.2}>
              {card.btn}
            </Btn>
          </div>
        ))}
        <div className="cardSlider__card-invis" />
        <div className="cardSlider__card-invis" />
      </div>
    </div>
  );
};

export default CardSlider;
