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
        <title>Mellow Finance</title>
        <meta name="description" content="Mellow Finance - community driven, DAO governed, fully decentralized peer to peer lending protocol" />
        <link rel="icon" href="/MLogo.png" />

        <meta property="og:type" content="website"/>
        <meta property="og:url" content="https://mellowlabs.finance/"/>
        <meta property="og:title" content="Mellow Finance"/>
        <meta property="og:description" content="Mellow Finance - community driven, DAO governed, fully decentralized peer to peer lending protocol"/>       
        <meta property="og:image" content="https://mellowlabs.finance/metaImg.png"/>

        <meta property="twitter:card" content="summary_large_image"/>
        <meta property="twitter:url" content="https://mellowlabs.finance/"/>
        <meta property="twitter:title" content="Mellow Finance"/>
        <meta property="twitter:description" content="Mellow Finance - community driven, DAO governed, fully decentralized peer to peer lending protocol"/>
        <meta property="twitter:image" content="https://mellowlabs.finance/metaImg.png"/> 
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
