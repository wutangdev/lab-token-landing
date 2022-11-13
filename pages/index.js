import Head from 'next/head'
import Image from 'next/image'
import { FaTwitter, FaDiscord, FaTelegram, FaInstagram } from 'react-icons/fa';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Hero from '../components/sections/Hero';
import Goal from '../components/sections/Goal';
import About from '../components/sections/About';
import FAQ from '../components/sections/FAQ';
import Team from '../components/sections/Team';
import Rain from '../components/Rain';
import Roadmap from '../components/sections/Roadmap';

export default function Home() {
  return (
    <>
      <Head>
        <title>Lab Reserve</title>
        <meta name="description" content="Lab Reserve" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <Nav/>
        {/* <Rain/> */}
        <Hero/>
        <About/>
        <Goal/>
        <Roadmap/>
        <Team/>
        <FAQ/>
        <Footer/>
    </>
  )
}
