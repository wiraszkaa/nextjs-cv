import { useState } from "react";
import Image from "next/image";
import styles from "./PhotoSlider.module.css";

const PhotoSlider = (props) => {
  const [current, setCurrent] = useState(0);
  const prev = current === 0 ? props.photos.length - 1 : current - 1;
  const next = current === props.photos.length - 1 ? 0 : current + 1;
  const [isTransition, setIsTransition] = useState(false);

  const nextSlide = () => {
    setIsTransition("next");
    setTimeout(() => {
      setIsTransition(false);
      setCurrent(current === props.photos.length - 1 ? 0 : current + 1);
    }, 500);
  };

  const prevSlide = () => {
    setIsTransition("prev");
    setTimeout(() => {
      setIsTransition(false);
      setCurrent(current === 0 ? props.photos.length - 1 : current - 1);
    }, 500);
  };

  const transitionClass = isTransition === "next" ? styles.slideRight : isTransition === "prev" ? styles.slideLeft : "";

  return (
    <div className={styles.slider}>
      <button className={styles.previous} onClick={prevSlide}>
        ❰
      </button>
      <button className={styles.next} onClick={nextSlide}>
        ❱
      </button>
      <div className={`${styles.mainPhoto} ${transitionClass}`}>
        <div className={styles.photos}>
          <div className={styles.prevPhoto}>
            <Image
              src={props.photos[prev].src}
              alt={props.photos[prev].index}
              layout="responsive"
            />
          </div>
          <div className={styles.photo}>
            <Image
              src={props.photos[current].src}
              alt={props.photos[current].index}
              layout="responsive"
            />
          </div>
          <div className={styles.nextPhoto}>
            <Image
              src={props.photos[next].src}
              alt={props.photos[next].index}
              layout="responsive"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoSlider;
