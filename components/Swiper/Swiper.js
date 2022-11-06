import { useCallback, useEffect, useRef, useState } from "react";
import useWindow from "../../hooks/use-window";
import Frame from "./Frame/Frame";
import Navigation from "./Navigation/Navigation";
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

const getFramesVisible = (pageWidth, breakpoints, defaultWidth) => {
  if (pageWidth === 0) {
    return 0;
  }
  for (let i in breakpoints) {
    if (pageWidth < +i) {
      return breakpoints[i];
    }
  }
  return defaultWidth;
};

const Swiper = (props) => {
  const {
    framesVisible: defaultFramesVisible,
    frames,
    breakpoints,
    scrollSpeed,
    width,
    height,
  } = props;
  const { width: pageWidth } = useWindow();
  const [swiperWidth, setSwiperWidth] = useState(0);
  const [selected, setSelected] = useState(0);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [framesVisible, setFramesVisible] = useState(
    getFramesVisible(pageWidth, breakpoints, defaultFramesVisible)
  );
  const swiper = useRef();
  let pages = Math.ceil(frames.length / framesVisible);

  let startX;
  let scrollLeft;

  useEffect(() => {
    setFramesVisible(
      getFramesVisible(pageWidth, breakpoints, defaultFramesVisible)
    );
    setSwiperWidth(swiper.current.offsetWidth);
  }, [pageWidth, breakpoints, defaultFramesVisible]);

  const mouseMoveHandler = useCallback(
    (e) => {
      const x = e.pageX - swiper.current.offsetLeft;
      const walk = (x - startX) * (scrollSpeed ? scrollSpeed : 3);
      swiper.current.scrollLeft = scrollLeft - walk;
    },
    [scrollSpeed, startX, scrollLeft]
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
  }, [mouseDownHandler, mouseUpHandler, swiper]);

  const scrollTo = (index) => {
    let element = document.getElementById("frame" + index);
    swiper.current.scrollLeft = element.offsetLeft;
  };

  const scrollHandler = useCallback(
    (e) => {
      const newSelected = getAmount(swiper.current.scrollLeft, swiperWidth);
      if (newSelected !== selected) {
        setSelected(newSelected);
      }
    },
    [selected, pageWidth]
  );

  const framesArray = frames.map((frame, index) => (
    <Frame
      id={"frame" + index}
      key={index}
      swiperWidth={swiperWidth}
      height={height}
      framesVisible={framesVisible}
    >
      {frame}
    </Frame>
  ));
  if (framesArray.length < framesVisible * pages) {
    for (let i = 0; i < framesVisible * pages - framesArray.length; i++) {
      framesArray.push(
        <Frame
          id={"frame" + (framesArray.length + i)}
          key={framesArray.length + i}
          swiperWidth={swiperWidth}
          height={height}
          framesVisible={framesVisible}
        ></Frame>
      );
    }
  }

  let styleObj = {
    width: width ? width : "99vw",
    height: height ? height : "fit-content",
  };

  return (
    <div className={styles.container}>
      <Navigation
        selected={selected}
        pages={pages}
        framesVisible={framesVisible}
        scrollTo={scrollTo}
        navigation={props.navigation}
        position={props.navPos}
      />
      <div
        ref={swiper}
        onScroll={scrollHandler}
        style={styleObj}
        className={`${styles.swiper} ${isMouseDown ? styles.grab : ""}`}
      >
        {framesArray}
      </div>
    </div>
  );
};

export default Swiper;
