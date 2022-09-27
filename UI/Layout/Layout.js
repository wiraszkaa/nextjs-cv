import Navigation from "../Navigation/Navigation";
import styles from "./Layout.module.css";

const Layout = (props) => {
  return (
    <div className={styles.background}>
      <Navigation />
      <main className="main">{props.children}</main>
    </div>
  );
};

export default Layout;
