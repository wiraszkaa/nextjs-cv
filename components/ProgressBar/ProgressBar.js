import styles from "./ProgressBar.module.css";

const ProgressBar = (props) => {
  return (
    <div className={styles.progressBar}>
      <div className={styles.annotation}>
        <p>LOW</p>
        <p>MODERATE</p>
        <p>HIGH</p>
      </div>
      <div className={styles.bar}>
        <div className={styles.progress} style={{ width: props.progress }} />
      </div>
    </div>
  );
};

export default ProgressBar;
