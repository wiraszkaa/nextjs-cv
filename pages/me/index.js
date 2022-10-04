import Head from "next/head";
import Image from "next/image";
import myPhoto from "../../assets/me.jpg";
import styles from "./Me.module.css";
import photo0 from "../../assets/hobbies/0.jpg";
import photo1 from "../../assets/hobbies/1.jpg";
import Slider from "../../components/Slider/Slider";
import InfoDropDown from "../../components/InfoDropDown/InfoDropDown";

const Me = () => {
  return (
    <>
      <Head>
        <title>About Jakub Wiraszka</title>
        <meta name="description" content="Information about Jakub Wiraszka" />
      </Head>
      <main className={styles.me}>
        <div className={styles.typewriter}>
          <h1>Hi! I am Jakub Wiraszka.</h1>
        </div>

        <div className={`${styles.description} ${styles.slideLeft}`}>
          <p>
            I have been programming <b>since I was 14</b>. However,{" "}
            <b>for a year</b> now, I have been{" "}
            <b>intensively developing my skills</b> and taking part in
            <b> various projects</b>. Now, I am actively increasing my{" "}
            <b>React</b> and <b>Next.js</b> skills.
          </p>
          <div className={styles.photo}>
            <Image src={myPhoto} alt="Jakub Wiraszka" layout="responsive" />
          </div>
        </div>

        <div className={styles.career}>
          <h1>CAREER</h1>
          <div className={styles.description}>
            <p>
              I have been working as a <b>web developer</b> for{" "}
              <b>Wiraszka Transport and Spedition</b> for a year now. I have
              been responsible for the company&apos;s website and its maintenance.
            </p>
          </div>
        </div>

        <div className={styles.education}>
          <h1>EDUCATION</h1>
          <div className={styles.description}>
            <p>
              Currently, I am studying Applied Computer Science at the{" "}
              <b>Wrocław University of Science and Technology</b>. I am at the
              second year of my studies. Also, I have finished last year with{" "}
              <b>high grade average</b>.
            </p>
          </div>
        </div>

        <div className={styles.hobbies}>
          <h1>MY HOBBIES</h1>
          <div className={styles.description}>
            <p>
              In addition to programming, I professionally deal with horse
              riding. I am a member of the National Team in the eventing
              discipline. Furthermore, I am amateurly interested in photography
              and cooking as well as technological innovations of various kinds,
              mainly robotics, automation, computers, cryptocurrencies and NFT.
            </p>
            <div className={styles.slider}>
              <Slider
                frames={[
                  <Image src={photo0} alt="0" layout="responsive" key="0" />,
                  <Image src={photo1} alt="1" layout="responsive" key="1" />,
                ]}
                frame={{ width: "calc(12rem + 14vw)", aspectRatio: 1 }}
              />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Me;
