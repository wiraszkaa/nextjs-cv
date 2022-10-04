import { useState } from "react";
import styles from "./InfoDropDown.module.css";

const InfoDropDown = (props) => {
  const [showInfo, setShowInfo] = useState(false);

  const toogleHandler = () => {
    setShowInfo((prevState) => !prevState);
  };

  return (
    <div className={styles.infoDropDown}>
      <button onClick={toogleHandler}>{showInfo ? "Hide Information" : "More Information"}</button>
      {showInfo && <div className={styles.info}>{props.children}</div>}
    </div>
  );
};

export default InfoDropDown;
