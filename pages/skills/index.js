import Head from "next/head";
import SkillList from "../../components/SkillList/SkillList";
import styles from "./Skills.module.css";
import Swiper from "../../components/Swiper/Swiper";

const frontendSkills = [
  { name: "JavaScript", progress: "50%" },
  { name: "React", progress: "50%" },
  { name: "Next.js", progress: "50%" },
  { name: "HTML", progress: "40%" },
  { name: "CSS", progress: "40%" },
];

const backendSkills = [
  { name: "Java", progress: "50%" },
  { name: "Python", progress: "40%" },
];

const softwareSkills = [
  { name: "Office", progress: "70%" },
  { name: "Adobe", progress: "50%" },
  { name: "AutoCAD", progress: "30%" },
];

const languages = [
  { name: "Polish", progress: "100%" },
  { name: "English", progress: "70%" },
  { name: "German", progress: "40%" },
];

const frames = [
  <SkillList title="Frontend" skills={frontendSkills} key="Frontend" />,
  <SkillList title="Backend" skills={backendSkills} key="Backend" />,
  <SkillList
    title="Query"
    skills={[{ name: "mySQL", progress: "45%" }]}
    key="Query"
  />,
  <SkillList title="Software" skills={softwareSkills} key="Software" />,
  <SkillList title="Languages" skills={languages} key="Languages" />,
];

const navigation = [
  <span className={styles.skillButton}>Frontend</span>,
  <span className={styles.skillButton}>Backend</span>,
  <span className={styles.skillButton}>Query</span>,
  <span className={styles.skillButton}>Software</span>,
  <span className={styles.skillButton}>Languages</span>,
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
          <Swiper
            frames={frames}
            navigation={navigation}
            width={440}
            height={"fit-content"}
            framesVisible={3}
            scrollSpeed={3}
          />
        </div>
      </main>
    </>
  );
};

export default Skills;
