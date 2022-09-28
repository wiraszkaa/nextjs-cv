import Head from "next/head";
import reactScoresIcon from "../../assets/react_scores.ico";
import wiraszkaIcon from "../../assets/wiraszka.ico";
import styles from "./Projects.module.css";
import ProjectList from "../../components/ProjectList/ProjectList";

const nextProjects = [
  {
    name: "CV Wiraszka",
    url: "https://cv-wiraszka.vercel.app/",
    logo: wiraszkaIcon,
    description: "Project of a website for CV, which is still in progress.",
  },
  {
    name: "Wiraszka",
    url: "https://wiraszka.vercel.app/",
    logo: wiraszkaIcon,
    description: "Website for a Wiraszka company.",
  },
];

const minorProjects = [
  {
    name: "JavaFX Adventure Game",
    url: "https://github.com/wiraszkaa/AdventureGame/",
    description:
      "Final game project designed for educational purpose programmed in Java.",
  },
  {
    name: "Python Snake",
    url: "https://github.com/wiraszkaa/python_snake/",
    description:
      "Application based on a popular Snake game programmed in Python.",
  },
];

const Projects = () => {
  return (
    <>
      <Head>
        <title>Wiraszka Projects</title>
        <meta name="description" content="Jakub Wiraszka Projects" />
      </Head>
      <main className="main">
        <h1>Projects</h1>
        <ProjectList title="Next.js" projects={nextProjects} open />
        <ProjectList
          title="React"
          projects={[
            {
              name: "React Scores",
              url: "https://react-scores.vercel.app/",
              logo: reactScoresIcon,
              description:
                "Project of a website to display match scores programmed in React.",
            },
          ]}
        />
        <ProjectList title="Minor Projects" projects={minorProjects} color="rgba(255, 255, 255, 0.6)"/>
      </main>
    </>
  );
};

export default Projects;
