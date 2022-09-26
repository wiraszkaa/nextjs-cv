import Head from "next/head";
import Image from "next/image";
import phoneIcon from "../../assets/phone.png";
import mailIcon from "../../assets/mail.png";

const Contact = () => {
  return (
    <>
      <Head>
        <title>Wiraszka Contact</title>
        <meta name="description" content="Contact to Jakub Wiraszka" />
      </Head>
      <main className="main">
        <h1>Contact</h1>
        <div className="description">
          <div className="icon">
            <Image src={mailIcon} alt="E-Mail" layout="fill" />
          </div>
          <p>jakub.wiraszka@wp.pl</p>
        </div>
        <div className="description">
          <div className="icon">
            <Image src={phoneIcon} alt="Telefon" layout="fill" />
          </div>
          <p>+48 609 600 509</p>
        </div>
      </main>
    </>
  );
};

export default Contact;
