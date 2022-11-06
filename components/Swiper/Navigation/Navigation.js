import styles from "../Swiper.module.css";

const Navigation = (props) => {
  if (props.framesVisible === 0) {
    return;
  }

  let navigation;
  if (props.navigation) {
    navigation = props.navigation.map((button, index) => (
      <button
        onClick={() => props.scrollTo(index * props.framesVisible)}
        key={index}
      >
        {button}
      </button>
    ));
  } else {
    navigation = [];
    for (let i = 0; i < props.pages; i++) {
      navigation.push(
        <button
          onClick={() => {
            props.scrollTo(i * props.framesVisible);
          }}
          key={i}
        >
          {props.selected == i ? "●" : "○"}
        </button>
      );
    }
  }

  let styleObj = { position: "relative" };
  if (props.position === "top") {
    styleObj = { position: "absolute" };
  } else if (props.position === "bottom") {
    styleObj = { position: "absolute", bottom: "0" };
  }

  return (
    <div
      style={styleObj}
      className={`${styles.navigation} ${
        props.navigation ? "" : styles.defaultNavigation
      }`}
    >
      {navigation}
    </div>
  );
};

export default Navigation;
