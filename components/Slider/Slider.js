import { useState } from "react";
import styles from "./Slider.module.css";

const Slider = (props) => {
  const [current, setCurrent] = useState(0);
  const [isTransition, setIsTransition] = useState(false);

  if (props.changeCurrent) {
    props.changeCurrent(setCurrent);
  }

  if (!props.frames) {
    return;
  }

  const prev = current === 0 ? props.frames.length - 1 : current - 1;
  const next = (current + 1) % props.frames.length;

  const nextSlide = () => {
    setIsTransition("next");
    setTimeout(() => {
      setIsTransition(false);
      setCurrent((current + 1) % props.frames.length);
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
      <div
        style={props.frame}
        className={[styles.mainFrame, transitionClass].join(" ")}
      >
        <div className={styles.frames}>
          <div style={props.frame} className={styles.prevFrame}>
            {props.frames[prev]}
          </div>
          <div style={props.frame}>{props.frames[current]}</div>
          <div style={props.frame} className={styles.nextFrame}>
            {props.frames[next]}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
