import styles from "./ProgressBar.module.css";

const getR = (progress) => {
  return Math.round(235 - (3.6 * (progress - 50)));
};

const getG = (progress) => {
  return Math.round(55 + (3.6 * progress));
};

const getColor = (progress) => {
  if (progress > 50) {
    return `rgb(${getR(progress)}, 235, 52)`;
  } else {
    return `rgb(235, ${getG(progress)}, 52)`;
  }
};

const ProgressBar = (props) => {
  const color = getColor(+props.progress.substring(0, props.progress.length - 1));

  return (
    <div className={styles.progressBar}>
      <div className={styles.bar}>
        <div
          className={styles.progress}
          style={{ width: props.progress, backgroundColor: color }}
        />
      </div>
    </div>
  );
};

export default ProgressBar;
