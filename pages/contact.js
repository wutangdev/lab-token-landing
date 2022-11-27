import React from "react";
import Head from 'next/head'
import Contactform from "../components/Contactform";
import Nav from '../components/Nav';
import Footer from '../components/Footer';

const Contact = () => {
  return (
    <>
      <Head>
        <title>Mellow Finance</title>
        <meta name="description" content="Mellow Finance - community driven, DAO governed, fully decentralized peer to peer lending protocol" />
        <link rel="icon" href="/favicon.ico" />

        <meta property="og:type" content="website"/>
        <meta property="og:url" content="https://labreserve.xyz/"/>
        <meta property="og:title" content="Mellow Finance"/>
        <meta property="og:description" content="Mellow Finance - community driven, DAO governed, fully decentralized peer to peer lending protocol"/>       
        <meta property="og:image" content="https://labreserve.xyz/metaImg.png"/>

        <meta property="twitter:card" content="summary_large_image"/>
        <meta property="twitter:url" content="https://labreserve.xyz/"/>
        <meta property="twitter:title" content="Mellow Finance"/>
        <meta property="twitter:description" content="Mellow Finance - community driven, DAO governed, fully decentralized peer to peer lending protocol"/>
        <meta property="twitter:image" content="https://labreserve.xyz/metaImg.png"/> 
      </Head>
        <Nav/>
        <Contactform/>
        <Footer/>
    </>
  );
};

export default Contact;
