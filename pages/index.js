import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import styles from "./Home.module.css";
import meIcon from "../assets/me.jpg";

export default function Home() {
  return (
    <>
      <Head>
        <title>Jakub Wiraszka</title>
        <meta
          name="description"
          content="Welcome to Jakub Wiraszka about me page"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.home}>
        <div className={styles.typewriter}>
          <h1>WELCOME!</h1>
        </div>
        <div className={styles.image}>
          <Image src={meIcon} alt="Jakub Wiraszka" layout="responsive" />
        </div>
        <h1>Check out:</h1>
        <div className={styles.grid}>
          <Link href="/skills">
            <h1>Skills</h1>
          </Link>
          <Link href="/projects">
            <h1>Projects</h1>
          </Link>
          <Link href="/me">
            <h1>About me</h1>
          </Link>
          <Link href="/contact">
            <h1>Contact</h1>
          </Link>
        </div>
      </main>
    </>
  );
}
