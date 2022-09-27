import Head from "next/head";
import SkillList from "../../components/SkillList/SkillList";
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

const Skills = () => {
  return (
    <>
      <Head>
        <title>Wiraszka Skills</title>
        <meta name="description" content="Jakub Wiraszka Skills" />
      </Head>
      <main className="main">
        <div className={styles.skills}>
          <SkillList title="Frontend" skills={frontendSkills} />
          <SkillList title="Backend" skills={backendSkills} />
        </div>
      </main>
    </>
  );
};

export default Skills;
