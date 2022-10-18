import { useCallback, useEffect, useRef, useState } from "react";
import Frame from "./Frame/Frame";
import styles from "./Swiper.module.css";

const Swiper = (props) => {
  const [selected, setSelected] = useState(0);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [framesVisible, setFramesVisible] = useState(props.framesVisible);
  const swiper = useRef();
  let startX;
  let scrollLeft;

  const mouseMoveHandler = useCallback(
    (e) => {
      const x = e.pageX - swiper.current.offsetLeft;
      const walk = (x - startX) * (props.scrollSpeed ? props.scrollSpeed : 3);
      swiper.current.scrollLeft = scrollLeft - walk;
    },
    [props.scrollSpeed, startX, scrollLeft]
  );

  const mouseDownHandler = useCallback(
    (e) => {
      setIsMouseDown(true);
      startX = e.pageX - swiper.current.offsetLeft;
      scrollLeft = swiper.current.scrollLeft;
      swiper.current.addEventListener("mousemove", mouseMoveHandler);
    },
    [mouseMoveHandler]
  );

  const mouseUpHandler = useCallback(
    (e) => {
      setIsMouseDown(false);
      swiper.current.removeEventListener("mousemove", mouseMoveHandler);
    },
    [mouseMoveHandler]
  );

  useEffect(() => {
    swiper.current.addEventListener("mousedown", mouseDownHandler);
    swiper.current.addEventListener("mouseup", mouseUpHandler);
  }, [mouseDownHandler, mouseUpHandler]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (window.innerWidth < 1000) {
        setFramesVisible(2);
      }
      if (window.innerWidth < 600) {
        setFramesVisible(1);
      }
    }
  }, []);

  const scrollTo = (index) => {
    let element = document.getElementById("frame" + index);
    element.scrollIntoView();
  };

  const frames = props.frames.map((frame, index) => (
    <Frame
      id={"frame" + index}
      key={index}
      width={props.width}
      height={props.height}
      framesVisible={framesVisible}
    >
      {frame}
    </Frame>
  ));

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
    width:
      framesVisible && props.width
        ? framesVisible * props.width + "px"
        : "99vw",
    height: props.height ? props.height : "fit-content",
  };

  return (
    <div className={styles.container}>
      <div className={styles.navigation}>{navigation}</div>
      <div
        ref={swiper}
        style={styleObj}
        className={`${styles.swiper} ${isMouseDown ? styles.grab : ""}`}
      >
        {frames}
      </div>
    </div>
  );
};

export default Swiper;
