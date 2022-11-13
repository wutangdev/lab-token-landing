import React, { useEffect } from 'react';

function About() {

      return (
        <>
        <div id='about'>
            <div className="container px-4 py-5">

                {/* <div className="text-center">
                    <img className="d-block mx-auto mb-4" src="/favicon.ico" alt="" width="72" height="72"/>
                    <h1 className="display-5 fw-bold">What is Lab Reserve?</h1>
                    <div className="col-lg-12 mx-auto">
                    <p className="lead mb-4">LAB, driven and governed by community consensus, is a decentralized peer to peer DeFi lending ecosystem. The purpose of Lab Reserve is to remove centralized oversight and control and provide the growing Web3 ecosystem with an ecosystem that maintains decentralization and community power. Lab Reserve is backed by our treasury of growing assets. </p>
                    </div>
                </div> */}
                
                <div className="row align-items-center g-5 py-5">
                    <div className="col-lg-6">
                        <img src="/graphics/testTubes.png" className="d-block m-auto about-image" alt="flasks" loading="lazy"/>
                    </div>
                    <div className="col-lg-6">
                        <h1 className="display-5 fw-bold lh-1 mb-3">What is Lab Reserve?</h1>
                        <p className="lead">LAB, driven and governed by community consensus, is a decentralized peer to peer DeFi lending ecosystem. The purpose of Lab Reserve is to remove centralized oversight and control and provide the growing Web3 ecosystem with an ecosystem that maintains decentralization and community power. Lab Reserve is backed by our treasury of growing assets.</p>
                        <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                        </div>
                    </div>
                </div>

                <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                    <div className="col-lg-6">
                        <img src="/graphics/investments.png" className="d-block m-auto about-image" alt="flasks" loading="lazy"/>
                    </div>
                    <div className="col-lg-6">
                        <h1 className="display-5 fw-bold lh-1 mb-3">How does it Work?</h1>
                        <p className="lead">Lab Token{"'"}s initial supply will be 20% of the max supply. The remaining supply will be protocol governed and used to grow our decentralized ecosystem. Users will be able to borrow, lend, and trade their assets within the Lab Reserve platform without worry of centralized oversight. Investors of Lab token will be able to wrap their LAB into gLAB to vote on and propose changes to the protocol. </p>
                        <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
      );
    }
export default About;
