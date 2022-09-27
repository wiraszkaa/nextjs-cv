import Head from "next/head";
import SkillList from "../../components/SkillList/SkillList";
import Slider from "../../components/Slider/Slider";
import styles from "./Skills.module.css";

const frontendSkills = [
  { name: "JavaScript", progress: "60%" },
  { name: "React", progress: "60%" },
  { name: "Next.js", progress: "50%" },
  { name: "HTML", progress: "50%" },
  { name: "CSS", progress: "45%" },
];

const backendSkills = [
  { name: "Java", progress: "60%" },
  { name: "Python", progress: "50%" },
];

const softwareSkills = [
  { name: "Office", progress: "80%" },
  { name: "Adobe", progress: "60%" },
  { name: "AutoCAD", progress: "40%" },
];

const languages = [
  { name: "Polish", progress: "100%" },
  { name: "English", progress: "80%" },
  { name: "German", progress: "40%" },
];

const frames = [
  <SkillList title="Frontend" skills={frontendSkills} key="Frontend"/>,
  <SkillList title="Backend" skills={backendSkills} key="Backend"/>,
  <SkillList title="Query" skills={[{ name: "mySQL", progress: "60%" }]} key="Query" />,
  <SkillList title="Software" skills={softwareSkills} key="Software"/>,
  <SkillList title="Languages" skills={languages} key="Languages"/>,
];

const Skills = () => {
  return (
    <>
      <Head>
        <title>Wiraszka Skills</title>
        <meta name="description" content="Jakub Wiraszka Skills" />
      </Head>
      <main className="main">
        <h1>Skills</h1>
        <div className={styles.skills}>
          <Slider frames={frames} frame={{width: "31vw", aspectRatio: 0.7}}/>
        </div>
      </main>
    </>
  );
};

export default Skills;
