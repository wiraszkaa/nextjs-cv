import { useState } from "react";
import Project from "./Project/Project";
import styles from "./ProjectList.module.css";

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
    <div style={{color: props.color}} className={styles.projectList}>
      <h1>{props.title}</h1>
      <button style={{color: props.color}} onClick={toogleHandler}>{show ? "Hide" : "Show"}</button>
      {show && <ul>{projects}</ul>}
    </div>
  );
};

export default ProjectList;
