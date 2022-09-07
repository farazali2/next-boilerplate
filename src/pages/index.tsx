import type { NextPage } from 'next';
import Head from 'next/head';
import Header from '../components/header/header';
import Footer from '../components/footer/footer';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
      <main>
        <h1>Home Page</h1>
      </main>
      <Footer />
    </div>
  );
};

export default Home;