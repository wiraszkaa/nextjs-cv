import styles from "./ProgressBar.module.css";

const ProgressBar = (props) => {
  let color = "rgb(1, 133, 1)";
  if (+props.progress.substring(0, props.progress.length - 1) < 50) {
    color = "rgb(182, 179, 2)";
  } else if (+props.progress.substring(0, props.progress.length - 1) < 30) {
    color = "rgb(126, 10, 10)";
  }

  return (
    <div className={styles.progressBar}>
      <div className={styles.annotation}>
        <p>LOW</p>
        <p>MODERATE</p>
        <p>HIGH</p>
      </div>
      <div className={styles.bar}>
        <div
          className={styles.progress}
          style={{ width: props.progress, "background-color": color }}
        />
      </div>
    </div>
  );
};

export default ProgressBar;
