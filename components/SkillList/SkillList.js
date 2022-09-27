import ProgressBar from "../ProgressBar/ProgressBar";
import styles from "./SkillList.module.css";

const SkillList = (props) => {
  return (
    <div className={styles.skillList}>
      <h1>{props.title}</h1>
      {props.skills.map((skill) => (
        <div className={styles.skill}>
          <span>{skill.name}</span>
          <ProgressBar progress={skill.progress} />
        </div>
      ))}
    </div>
  );
};

export default SkillList;
