import { useEffect, useRef, useState } from "react";
import Frame from "./Frame/Frame";
import styles from "./Swiper.module.css";

const Swiper = (props) => {
  const [selected, setSelected] = useState(0);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const swiper = useRef();
  let startX;
  let scrollLeft;

  useEffect(() => {
    swiper.current.addEventListener("mousedown", mouseDownHandler);
    swiper.current.addEventListener("mouseup", mouseUpHandler);
  }, []);

  const mouseDownHandler = (e) => {
    setIsMouseDown(true);
    startX = e.pageX - swiper.current.offsetLeft;
    scrollLeft = swiper.current.scrollLeft;
    swiper.current.addEventListener("mousemove", mouseMoveHandler);
  };

  const mouseUpHandler = (e) => {
    setIsMouseDown(false);
    swiper.current.removeEventListener("mousemove", mouseMoveHandler);
  };

  const mouseMoveHandler = (e) => {
    const x = e.pageX - swiper.current.offsetLeft;
    const walk = (x - startX) * (props.scrollSpeed ? props.scrollSpeed : 3);
    swiper.current.scrollLeft = scrollLeft - walk;
  };

  const scrollTo = (index) => {
    swiper.current.scrollLeft = index * props.width;
  };

  let navigation;
  if (props.navigation) {
    navigation = (
      <div className={styles.navigation}>
        {props.navigation.map((button, index) => (
          <button onClick={() => scrollTo(index)} key={index}>
            {button}
          </button>
        ))}
      </div>
    );
  } else {
    let buttons = [];
    for (let i = 0; i < props.frames.length; i++) {
      buttons.push(
        <button
          onClick={() => {
            scrollTo(i);
            setSelected(i);
          }}
          key={i}
        >
          {selected == i ? "●" : "○"}
        </button>
      );
    }
    navigation = (
      <div className={`${styles.navigation} ${styles.defaultNavigation}`}>
        {buttons}
      </div>
    );
  }

  let styleObj = {
    width: props.framesVisible
      ? props.framesVisible * props.width + "px"
      : "100%",
    height: props.height,
  };

  return (
    <div className={styles.container}>
      <div className={styles.navigation}>{navigation}</div>
      <div
        ref={swiper}
        style={styleObj}
        className={`${styles.swiper} ${isMouseDown ? styles.grab : ""}`}
      >
        {props.frames.map((frame, index) => (
          <Frame
            key={index}
            width={props.width}
            height={props.height}
            framesVisible={props.framesVisible}
          >
            {frame}
          </Frame>
        ))}
      </div>
    </div>
  );
};

export default Swiper;
