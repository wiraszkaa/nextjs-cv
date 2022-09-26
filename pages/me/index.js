import Head from "next/head";

const Me = () => {
  return (
    <>
      <Head>
        <title>About Jakub Wiraszka</title>
        <meta name="description" content="Information about Jakub Wiraszka" />
      </Head>
      <main className="main">
        <h1>Hi, I am Jakub Wiraszka.</h1>
        
        <div className="longText">
          <p>
            I have been programming since I was 14. However, for a year now, I
            have been intensively developing my skills and taking part in
            various projects. Now, I am actively increasing my Java skills and
            learning React.
          </p>
        </div>

        <h1>MY HOBBIES</h1>
        <div className="longText">
          <p>
            In addition to programming, I professionally deal with horse riding.
            I am a member of the National Team in the eventing discipline.
            Furthermore, I am amateurly interested in photography and cooking as
            well as technological innovations of various kinds, mainly robotics,
            automation, computers, cryptocurrencies and NFT.
          </p>
        </div>
      </main>
    </>
  );
};

export default Me;
