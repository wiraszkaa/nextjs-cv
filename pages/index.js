import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Head>
        <title>Jakub Wiraszka</title>
        <meta name="description" content="Welcome to Jakub Wiraszka about me page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="main">
        <h1>Welcome to my CV</h1>
        <p>Check navigation</p>
      </main>
    </>
  )
}
