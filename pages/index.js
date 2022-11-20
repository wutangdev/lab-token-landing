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
        <meta name="description" content="Lab Reserve - community driven, DAO governed, fully decentralized peer to peer lending protocol" />
        <link rel="icon" href="/favicon.ico" />

        <meta property="og:type" content="website"/>
        <meta property="og:url" content="/metaImg.png"/>
        <meta property="og:title" content="Lab Reserve"/>
        <meta property="og:description" content="Lab Reserve - community driven, DAO governed, fully decentralized peer to peer lending protocol"/>       
        <meta property="og:image" content="/metaImg.png"/>

        <meta property="twitter:card" content="summary_large_image"/>
        <meta property="twitter:url" content="https://labreserve.xyz/"/>
        <meta property="twitter:title" content="Lab Reserve"/>
        <meta property="twitter:description" content="Lab Reserve - community driven, DAO governed, fully decentralized peer to peer lending protocol"/>
        <meta property="twitter:image" content="/metaImg.png"/> 
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
