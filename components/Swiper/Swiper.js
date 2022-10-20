import { useCallback, useEffect, useRef, useState } from "react";
import useWindow from "../../hooks/use-window";
import Frame from "./Frame/Frame";
import styles from "./Swiper.module.css";

const getAmount = (scrollX, width) => {
  const amountHelper = (scrollX, width, n) => {
    if (scrollX + width * 0.1 >= width * (n + 1)) {
      return amountHelper(scrollX, width, n + 1);
    } else {
      return n;
    }
  };
  return amountHelper(scrollX, width, 0);
};

const Swiper = (props) => {
  const { width: pageWidth } = useWindow();
  const [swiperWidth, setSwiperWidth] = useState(0);
  const [selected, setSelected] = useState(0);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [framesVisible, setFramesVisible] = useState(props.framesVisible);
  const swiper = useRef();
  let pages = Math.ceil(props.frames.length / framesVisible);

  let startX;
  let scrollLeft;

  useEffect(() => {
    let foundBreakpoint = false;
    for (let i in props.breakpoints) {
      if (pageWidth < +i) {
        setFramesVisible(props.breakpoints[i]);
        foundBreakpoint = true;
        break;
      }
    }
    if (!foundBreakpoint) {
      setFramesVisible(props.framesVisible);
    }
    setSwiperWidth(swiper.current.offsetWidth);
  }, [pageWidth]);

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
    const swiperInstance = swiper.current;
    swiperInstance.addEventListener("mousedown", mouseDownHandler);
    swiperInstance.addEventListener("mouseup", mouseUpHandler);

    return () => {
      swiperInstance.removeEventListener("mousedown", mouseDownHandler);
      swiperInstance.removeEventListener("mouseup", mouseUpHandler);
    };
  }, [mouseDownHandler, mouseUpHandler]);

  const scrollTo = (index) => {
    let element = document.getElementById("frame" + index);
    swiper.current.scrollLeft = element.offsetLeft;
  };

  const scrollHandler = useCallback(
    (e) => {
      const newSelected = getAmount(
        swiper.current.scrollLeft,
        Math.round(pageWidth * 0.99)
      );
      if (newSelected !== selected) {
        setSelected(newSelected);
      }
    },
    [selected, pageWidth, pages]
  );

  const frames = props.frames.map((frame, index) => (
    <Frame
      id={"frame" + index}
      key={index}
      width={props.width ? Math.round(swiperWidth / framesVisible) : null}
      height={props.height}
      framesVisible={framesVisible}
    >
      {frame}
    </Frame>
  ));
  if (frames.length < framesVisible * pages) {
    for (let i = 0; i < framesVisible * pages - frames.length; i++) {
      frames.push(
        <Frame
          id={"frame" + (frames.length + i)}
          key={frames.length + i}
          width={props.width ? Math.round(swiperWidth / framesVisible) : null}
          height={props.height}
          framesVisible={framesVisible}
        ></Frame>
      );
    }
  }

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
    for (let i = 0; i < pages; i++) {
      buttons.push(
        <button
          onClick={() => {
            scrollTo(i * framesVisible);
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
    width: props.width ? props.width : "99vw",
    height: props.height ? props.height : "fit-content",
  };

  return (
    <div className={styles.container}>
      <div className={styles.navigation}>{navigation}</div>
      <div
        ref={swiper}
        onScroll={scrollHandler}
        style={styleObj}
        className={`${styles.swiper} ${isMouseDown ? styles.grab : ""}`}
      >
        {frames}
      </div>
    </div>
  );
};

export default Swiper;
