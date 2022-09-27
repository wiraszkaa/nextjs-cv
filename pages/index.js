import Head from "next/head";
import Link from "next/link";
import styles from "./Home.module.css";

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
      <main className="main">
        <h1>Welcome to my CV</h1>
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
