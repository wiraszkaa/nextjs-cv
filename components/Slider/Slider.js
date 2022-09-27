import { useState } from "react";
import styles from "./Slider.module.css";

const Slider = (props) => {
  const [current, setCurrent] = useState(0);
  const [isTransition, setIsTransition] = useState(false);
  
  if (!props.frames) {
    return;
  }

  const prev = current === 0 ? props.frames.length - 1 : current - 1;
  const next = current === props.frames.length - 1 ? 0 : current + 1;

  const nextSlide = () => {
    setIsTransition("next");
    setTimeout(() => {
      setIsTransition(false);
      setCurrent(current === props.frames.length - 1 ? 0 : current + 1);
    }, 500);
  };

  const prevSlide = () => {
    setIsTransition("prev");
    setTimeout(() => {
      setIsTransition(false);
      setCurrent(current === 0 ? props.frames.length - 1 : current - 1);
    }, 500);
  };

  const transitionClass =
    isTransition === "next"
      ? styles.slideRight
      : isTransition === "prev"
      ? styles.slideLeft
      : "";

  return (
    <div className={styles.slider}>
      <button className={styles.previous} onClick={prevSlide}>
        ❰
      </button>
      <button className={styles.next} onClick={nextSlide}>
        ❱
      </button>
      <div className={[styles.frame, styles.mainFrame, transitionClass].join(" ")}>
        <div className={styles.frames}>
          <div className={[styles.prevFrame, styles.frame].join(" ")}>{props.frames[prev]}</div>
          <div className={styles.frame}>{props.frames[current]}</div>
          <div className={[styles.nextFrame, styles.frame].join(" ")}>{props.frames[next]}</div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
