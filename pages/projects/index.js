import Head from "next/head";
import reactScoresIcon from "../../assets/projects/react_scores.ico";
import wiraszkaIcon from "../../assets/projects/wiraszka.ico";
import nextIcon from "../../assets/projects/next.ico";
import reactIcon from "../../assets/projects/react.ico";
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
    url: "https://phumaja.pl/",
    logo: wiraszkaIcon,
    description: "Website for a Wiraszka company.",
  },
];

const reactProjects = [
  {
    name: "React Scores",
    url: "https://react-scores.vercel.app/",
    logo: reactScoresIcon,
    description: "Project of a website to display match scores.",
  },
  {
    name: "React Meals",
    url: "https://github.com/wiraszkaa/react-meals",
    logo: reactIcon,
    description: "Project of a website to order food.",
  },
];

const minorProjects = [
  {
    name: "JavaFX Adventure Game",
    url: "https://github.com/wiraszkaa/AdventureGame/",
    description: "Final game project designed for educational purpose.",
  },
  {
    name: "Python Snake",
    url: "https://github.com/wiraszkaa/python_snake/",
    description: "Application based on a popular Snake game.",
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
        <div className="centered slideUp">
          <ProjectList
            logo={nextIcon}
            title="Next.js"
            projects={nextProjects}
            open
          />
          <ProjectList
            logo={reactIcon}
            title="React"
            projects={reactProjects}
          />
          <ProjectList title="Minor Projects" projects={minorProjects} minor />
        </div>
      </main>
    </>
  );
};

export default Projects;
