import Link from "next/link";
import styles from "./LiquidButton.module.css";

export default function Button(props) {
  return (
    <Link href={props.href}>
      <div className={`${styles.button} ${props.active ? styles.active : ""}`}>
        <span>{props.children}</span>
        <div className={styles.liquid}/>
      </div>
    </Link>
  );
}
