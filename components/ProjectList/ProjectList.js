import { useState } from "react";
import Image from "next/image";
import Project from "./Project/Project";
import styles from "./ProjectList.module.css";
import { CSSTransition } from "react-transition-group";

const ProjectList = (props) => {
  let initialState = false;
  if (props.open) {
    initialState = true;
  }
  const [show, setShow] = useState(initialState);

  const projects = props.projects.map((project) => (
    <li key={project.name}>
      <Project
        name={project.name}
        url={project.url}
        logo={project.logo}
        description={project.description}
      />
    </li>
  ));

  const toogleHandler = () => {
    setShow((prevState) => !prevState);
  };

  return (
    <div style={{ color: props.color }} className={styles.projectList}>
      <div className="description">
        {props.logo && (
          <div className="icon">
            <Image src={props.logo} alt={props.title} layout="fill" />
          </div>
        )}
        <h1>{props.title}</h1>
      </div>
      <button style={{ color: props.color }} onClick={toogleHandler}>
        {show ? "Hide" : "Show"}
      </button>
      <CSSTransition
        mountOnEnter
        unmountOnExit
        in={show}
        timeout={300}
        classNames={{
          enterActive: styles.appear,
          exitActive: styles.disappear,
        }}
      >
        <div className={styles.projects}>
          <ul>{projects}</ul>
        </div>
      </CSSTransition>
    </div>
  );
};

export default ProjectList;
