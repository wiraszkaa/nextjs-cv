import Head from "next/head";
import Image from "next/image";
import Card from "../../UI/Card/Card";
import reactScoresIcon from "../../assets/react_scores.ico";
import wiraszkaIcon from "../../assets/wiraszka.ico";
import styles from "./Projects.module.css";

const Projects = () => {
  return (
    <>
      <Head>
        <title>Wiraszka Projects</title>
        <meta name="description" content="Jakub Wiraszka Projects" />
      </Head>
      <main className="main">
        <h1>Projects</h1>
        <a
          href="https://react-scores.vercel.app/"
          title="react-scores"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Card className={styles.project}>
            <div className="description">
              <div className="icon">
                <Image src={reactScoresIcon} alt="React Scores" layout="fill" />
              </div>
              <p>React Scores</p>
            </div>
            <p>
              Project of a website to display match scores programmed in React.
            </p>
          </Card>
        </a>
        <a
          href="https://wiraszka.vercel.app/"
          title="nextjs-wiraszka"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Card className={styles.project}>
            <div className="description">
              <div className="icon">
                <Image src={wiraszkaIcon} alt="Wiraszka" layout="fill" />
              </div>
              <p>Wiraszka Coal Page</p>
            </div>
            <p>Website for a coal storage company.</p>
          </Card>
        </a>
      </main>
    </>
  );
};

export default Projects;
