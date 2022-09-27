import Head from "next/head";
import SkillList from "../../components/SkillList/SkillList";
import Slider from "../../components/Slider/Slider";
import styles from "./Skills.module.css";

import Image from "next/image";
import photo0 from "../../assets/hobbies/0.jpg";
import photo1 from "../../assets/hobbies/1.jpg";

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
  <SkillList title="Frontend" skills={frontendSkills} />,
  <SkillList title="Backend" skills={backendSkills} />,
  <SkillList title="Query" skills={[{ name: "mySQL", progress: "60%" }]} />,
  <SkillList title="Software" skills={softwareSkills} />,
  <SkillList title="Languages" skills={languages} />,
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
          <Slider frames={frames} />
          {/* <SkillList title="Frontend" skills={frontendSkills} />
          <SkillList title="Backend" skills={backendSkills} />
          <SkillList
            title="Query"
            skills={[{ name: "mySQL", progress: "60%" }]}
          />
          <SkillList title="Software" skills={softwareSkills} />
          <SkillList title="Languages" skills={languages} /> */}
        </div>
      </main>
    </>
  );
};

export default Skills;
