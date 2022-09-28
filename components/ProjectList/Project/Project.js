import Image from "next/image";
import styles from "./Project.module.css";
import Card from "../../../UI/Card/Card";

const Project = (props) => {
  return (
    <a
      href={props.url}
      title={props.name}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Card className={styles.project}>
        <div className="description">
          {props.logo && <div className="icon">
            <Image src={props.logo} alt={props.name} layout="fill" />
          </div>}
          <p>{props.name}</p>
        </div>
        <p>{props.description}</p>
      </Card>
    </a>
  );
};

export default Project;
