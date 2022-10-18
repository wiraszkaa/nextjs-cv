import React from "react";
import styles from "../Swiper.module.css";

const Frame = (props) => {
  let styleObj = {
    width: props.width ? props.width + "px" : 100 / props.framesVisible + "%",
  };
  if (props.height) {
    styleObj = {
      ...styleObj,
      height: props.height,
    };
  }

  return (
    <div style={styleObj} className={styles.frame}>
      {props.children}
    </div>
  );
};

export default Frame;
