import React from "react";
import styles from "../Swiper.module.css";

const Frame = (props) => {
  if (props.framesVisible === 0) {
    return;
  }

  let styleObj = {
    minWidth: props.swiperWidth ? Math.round(props.swiperWidth / props.framesVisible) + "px" : Math.round(99 / props.framesVisible) + "vw",
    height: props.height ? props.height : "fit-content",
  };

  return (
    <div id={props.id} style={styleObj} className={styles.frame}>
      {props.children}
    </div>
  );
};

export default Frame;
