import ProgressBar from "../ProgressBar/ProgressBar";
import styles from "./SkillList.module.css";
import Card from "../../UI/Card/Card";

const SkillList = (props) => {
  return (
    <Card noMargin className={styles.skillList}>
      <h1>{props.title}</h1>
      {props.skills.map((skill) => (
        <div className={styles.skill} key={skill.name}>
          <span>{skill.name}</span>
          <ProgressBar progress={skill.progress} color={props.color} />
        </div>
      ))}
    </Card>
  );
};

export default SkillList;
