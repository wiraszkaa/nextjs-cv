import { useRouter } from "next/router";
import Link from "next/link";
import styles from "./Navigation.module.css";
import LiquidButton from "../LiquidButton/LiquidButton";

const Navigation = () => {
  const { asPath } = useRouter();

  return (
    <header className={styles.navigation}>
      <div className={styles.logo}>
        <Link href="/">
          <span>Jakub Wiraszka</span>
        </Link>
      </div>

      <ul>
        <li>
          <LiquidButton href="/skills" active={asPath === "/skills"}>
            Skills
          </LiquidButton>
        </li>
        <li>
          <LiquidButton href="/projects" active={asPath === "/projects"}>
            Projects
          </LiquidButton>
        </li>
        <li>
          <LiquidButton href="/me" active={asPath === "/me"}>
            About Me
          </LiquidButton>
        </li>
        <li>
          <LiquidButton href="/contact" active={asPath === "/contact"}>
            Contact
          </LiquidButton>
        </li>
      </ul>
    </header>
  );
};

export default Navigation;
