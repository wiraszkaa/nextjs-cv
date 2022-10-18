import styles from './Card.module.css';

export default function Card(props) {
  return <div className={`${styles.card} ${props.className} ${props.noMargin ? "" : styles.margin}`} style={props.style}>{props.children}</div>;
}
