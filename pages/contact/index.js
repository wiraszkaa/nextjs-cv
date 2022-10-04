import Head from "next/head";
import Image from "next/image";
import phoneIcon from "../../assets/phone.png";
import mailIcon from "../../assets/mail.png";
import linkedInIcon from "../../assets/linkedin.png";
import styles from "./Contact.module.css";

const Contact = () => {
  return (
    <>
      <Head>
        <title>Wiraszka Contact</title>
        <meta name="description" content="Contact to Jakub Wiraszka" />
      </Head>
      <div className={styles.typewriter}>
        <h1>I like where this is headed.</h1>
      </div>
      <main className="main">
        <h1>Contact</h1>
        <div className="description">
          <div className="icon">
            <Image src={linkedInIcon} alt="LinkedIn" layout="fill" />
          </div>
          <a
            href="https://www.linkedin.com/in/wiraszkaa/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p>wiraszkaa</p>
          </a>
        </div>
        <div className="description">
          <div className="icon">
            <Image src={mailIcon} alt="E-Mail" layout="fill" />
          </div>
          <a
            href="mailto:jakub.wiraszka@wp.pl"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p>jakub.wiraszka@wp.pl</p>
          </a>
        </div>
        <div className="description">
          <div className="icon">
            <Image src={phoneIcon} alt="Telefon" layout="fill" />
          </div>
          <a href="tel:+48609600509" target="_blank" rel="noopener noreferrer">
            <p>+48 609 600 509</p>
          </a>
        </div>
      </main>
    </>
  );
};

export default Contact;
