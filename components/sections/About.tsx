import React, { useEffect } from 'react';
import { RiNumber1, RiNumber2, RiNumber3 } from 'react-icons/ri';

function About() {

      return (
        <>
        <div id='about'>
            <div className="container px-4 py-5">

                {/* <div className="text-center">
                    <img className="d-block mx-auto mb-4" src="/MLogo.png" alt="" width="72" height="72"/>
                    <h1 className="display-5 fw-bold">What is Mellow Finance?</h1>
                    <div className="col-lg-12 mx-auto">
                    <p className="lead mb-4">LAB, driven and governed by community consensus, is a decentralized peer to peer DeFi lending ecosystem. The purpose of Mellow Finance is to remove centralized oversight and control and provide the growing Web3 ecosystem with an ecosystem that maintains decentralization and community power. Mellow Finance is backed by our treasury of growing assets. </p>
                    </div>
                </div> */}
                
                <div className="row g-4 py-5 row-cols-1 row-cols-lg-3 m-auto align-items-center">
                    <div className="col-lg-6">
                        <img src="/graphics/testTubes.png" className="d-block m-auto about-image" alt="flasks" loading="lazy"/>
                    </div>
                    <div className="mellow-card col-lg-6">
                        <div className="text-left">
                            <h2 className="display-6 fw-bold lh-1 my-3">What is Mellow Finance?</h2>
                            <p className="lead">LAB, driven and governed by community consensus, is a decentralized peer to peer DeFi lending ecosystem. The purpose of Mellow Finance is to remove centralized oversight and control and provide the growing Web3 community with an ecosystem that maintains decentralization and community power. Mellow Finance is backed by our treasury of growing assets.</p>
                        </div>
                    </div>
                </div>

                {/* <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                    <div className="col-lg-6">
                        <img src="/graphics/investments.png" className="d-block m-auto about-image" alt="flasks" loading="lazy"/>
                    </div>
                    <div className="col-lg-6">
                        <h1 className="display-5 fw-bold lh-1 mb-3">How does it Work?</h1>
                        <p className="lead">Lab Token{"'"}s initial supply will be 20% of the max supply. The remaining supply will be protocol governed and used to grow our decentralized ecosystem. Users will be able to borrow, lend, and trade their assets within the Mellow Finance platform without worry of centralized oversight. Investors of Lab token will be able to wrap their LAB into gLAB to vote on and propose changes to the protocol. </p>
                        <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                        </div>
                    </div>
                </div> */}
                <div className="row g-4 py-5 row-cols-1 row-cols-lg-3 text-center mellow-card mt-5">
                    <div className="col">
                        <div className="goal-icon">
                            <RiNumber1 color='#69c396'  size={"3rem"}/>
                        </div>
                        <h2 className='fw-bold'>Choose a Strategy</h2>
                        <p>Deposit collateral into a strategy vault.</p>
                    </div>
                    <div className="col">
                        <div className="goal-icon">
                            <RiNumber2 color='#69c396'  size={"3rem"}/>
                        </div>
                        <h2 className='fw-bold'>Earn Yield</h2>
                        <p>Let your deposited collateral earn for you.</p>
                    </div>
                    <div className="col">
                        <div className="goal-icon">
                            <RiNumber3 color='#69c396'  size={"3rem"}/>
                        </div>
                        <h2 className='fw-bold'>Choose Your Path</h2>
                        <p>Borrow future yield, Spend earned credit, or save. The choice is yours</p>
                    </div>
                </div>

            </div>
        </div>
        </>
      );
    }
export default About;
