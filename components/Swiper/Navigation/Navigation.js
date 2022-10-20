import styles from "../Swiper.module.css";

const Navigation = (props) => {
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

  return (
    <div className={`${styles.navigation} ${props.navigation ? "" : styles.defaultNavigation}`}>
      {navigation}
    </div>
  );
};

export default Navigation;
