import Head from "next/head";
import Image from "next/image";
import Card from "../../UI/Card/Card";
import myPhoto from "../../assets/me.jpg";
import styles from "./Me.module.css";
import photo0 from "../../assets/hobbies/0.jpg";
import photo1 from "../../assets/hobbies/1.jpg";
import PhotoSlider from "../../UI/PhotoSlider/PhotoSlider";
import Slider from "../../components/Slider/Slider";

const Me = () => {
  return (
    <>
      <Head>
        <title>About Jakub Wiraszka</title>
        <meta name="description" content="Information about Jakub Wiraszka" />
      </Head>
      <main className="main">
        <h1>Hi! I am Jakub Wiraszka.</h1>

        <div className={styles.description}>
          <p>
            I have been programming <b>since I was 14</b>. However,{" "}
            <b>for a year</b> now, I have been{" "}
            <b>intensively developing my skills</b> and taking part in
            <b> various projects</b>. Now, I am actively increasing my{" "}
            <b>React</b> and <b>Next.js</b> skills.
          </p>
          <Card className={styles.photo}>
            <Image src={myPhoto} alt="Jakub Wiraszka" layout="responsive" />
          </Card>
        </div>

        <h1>MY HOBBIES</h1>
        <div className={styles.description}>
          <p>
            In addition to programming, I professionally deal with horse riding.
            I am a member of the National Team in the eventing discipline.
            Furthermore, I am amateurly interested in photography and cooking as
            well as technological innovations of various kinds, mainly robotics,
            automation, computers, cryptocurrencies and NFT.
          </p>
          <div className={styles.slider}>
            <Slider
              frames={[
                <Image src={photo0} alt="0" layout="responsive" key="0"/>,
                <Image src={photo1} alt="1" layout="responsive" key="1"/>,
              ]}
              frame={{ width: "27vw", aspectRatio: 1 }}
            />
          </div>
        </div>
      </main>
    </>
  );
};

export default Me;
