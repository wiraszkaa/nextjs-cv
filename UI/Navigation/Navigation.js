import Link from "next/link";
import styles from "./Navigation.module.css";
import LiquidButton from "../LiquidButton/LiquidButton";

const Navigation = () => {
  return (
    <header className={styles.navigation}>
      <div className={styles.logo}>
        <Link href="/">
          <span>Jakub Wiraszka</span>
        </Link>
      </div>

      <ul>
        <li>
          <LiquidButton href="/skills">Skills</LiquidButton>
        </li>
        <li>
          <LiquidButton href="/projects">Projects</LiquidButton>
        </li>
        <li>
          <LiquidButton href="/me">About Me</LiquidButton>
        </li>
        <li>
          <LiquidButton href="/contact">Contact</LiquidButton>
        </li>
      </ul>
    </header>
  );
};

export default Navigation;
