import React from "react";
import Head from 'next/head'
import Thankyoucomp from "../components/Thankyou";
import Nav from '../components/Nav';
import Footer from '../components/Footer';

const Thankyou = () => {
  return (
    <>
      <Head>
        <title>Lab Reserve</title>
        <meta name="description" content="Lab Reserve - community driven, DAO governed, fully decentralized peer to peer lending protocol" />
        <link rel="icon" href="/favicon.ico" />

        <meta property="og:type" content="website"/>
        <meta property="og:url" content="https://labreserve.xyz/"/>
        <meta property="og:title" content="Lab Reserve"/>
        <meta property="og:description" content="Lab Reserve - community driven, DAO governed, fully decentralized peer to peer lending protocol"/>       
        <meta property="og:image" content="https://labreserve.xyz/metaImg.png"/>

        <meta property="twitter:card" content="summary_large_image"/>
        <meta property="twitter:url" content="https://labreserve.xyz/"/>
        <meta property="twitter:title" content="Lab Reserve"/>
        <meta property="twitter:description" content="Lab Reserve - community driven, DAO governed, fully decentralized peer to peer lending protocol"/>
        <meta property="twitter:image" content="https://labreserve.xyz/metaImg.png"/> 
      </Head>
        <Nav/>
        <Thankyoucomp/>
        <Footer/>
    </>
  );
};

export default Thankyou;
