import React from "react";
import styles from "../Swiper.module.css";

const Frame = (props) => {
  let styleObj = {
    minWidth: props.width ? (props.width + "px") : (Math.floor(99 / props.framesVisible) + "vw"),
    height: props.height ? props.height : "fit-content",
  };

  return (
    <div id={props.id} style={styleObj} className={styles.frame}>
      {props.children}
    </div>
  );
};

export default Frame;
