import React, { useEffect } from 'react';
import { FaTwitter, FaDiscord, FaTelegram, FaInstagram } from 'react-icons/fa';

function Features() {

      return (
        <>
        <div id='features'>
            <div className='container px-4 py-5'>
                <div className="row align-items-md-center">
                    <div className="d-flex flex-column align-items-start gap-2">
                        <h3 className="fw-bold">Our Goal for Lab Reserve</h3>
                        <p className="text-muted">Our goal is to build a trusted decentralized reserve protocol that preserves purchasing power through long term price stability and a growing treasury to back liquidity for Lab Token across decentralized and centralized platforms. </p>
                        {/* <a href="#" className="btn btn-primary btn-lg">Primary button</a> */}
                    </div>
                    <div className="row row-cols-1 row-cols-sm-2 g-4">
                        <div className="d-flex flex-column gap-2">
                        {/* <div className="feature-icon-small d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-4 rounded-3">
                            <FaDiscord/>
                        </div> */}
                        <img src="/graphics/blockchain.png" className="d-block mx-lg-auto img-fluid features-image" alt="flask" loading="lazy"/>

                        <h4 className="fw-semibold mb-0">How it Works</h4>
                        <p className="text-muted">Lab Token{"'"}s initial supply will only be that of those who purchased Lab token during our Private investment rounds, Public Presale, and the initial liquidity pairing. Investors of Lab token will then be able to stake their Lab to mint and generate income through asset to asset staking. This staking pool will have a fixed APY for all stakers. If dilution occurs, Lab Reserve will purchase and burn excess tokens to restore stability. </p>
                        </div>

                        <div className="d-flex flex-column gap-2">
                        {/* <div
                            className="feature-icon-small d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-4 rounded-3">                        
                            <FaDiscord/>
                        </div> */}
                        
                        <img src="/graphics/strength.png" className="d-block mx-lg-auto img-fluid features-image" alt="flask" loading="lazy"/>
                        <h4 className="fw-semibold mb-0">Our Strengths</h4>
                        <p className="text-muted">The team behind Lab Reserve has a diverse background in crypto and provides a strong expertise to help us identify and seize opportunities early on.</p>
                        </div>

                        <div className="d-flex flex-column gap-2">
                        {/* <div
                            className="feature-icon-small d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-4 rounded-3">                        
                            <FaDiscord/>
                        </div> */}
                        
                        <img src="/graphics/strategy.png" className="d-block mx-lg-auto img-fluid features-image" alt="flask" loading="lazy"/>
                        <h4 className="fw-semibold mb-0">Our Strategy</h4>
                        <p className="text-muted">Our Strategy for growing the Lab Reserve ecosystem is based through our staff{"'"}s expertise in securing partnerships and secure early adoption of accepting Lab Token as a form of payment. The Lab Reserve Team is dedicated to enabling and optimizing Lab token for mass adoption. </p>
                        </div>

                        <div className="d-flex flex-column gap-2">
                        {/* <div
                            className="feature-icon-small d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-4 rounded-3">
                            <FaDiscord/>

                        </div> */}
                        
                        <img src="/graphics/investments.png" className="d-block mx-lg-auto img-fluid features-image" alt="flask" loading="lazy"/>
                        <h4 className="fw-semibold mb-0">Our Investments</h4>
                        <p className="text-muted">Lab Reserve, powered with Lab Token, will utilize it{"'"}s treasury to invest into new and promising protocols, tokens, and high return yield strategies across the DeFi ecosystem.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>  
        </>
      );
    }
export default Features;
