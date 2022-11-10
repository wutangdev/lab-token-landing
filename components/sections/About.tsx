import React, { useEffect } from 'react';

function About() {

      return (
        <>
        <div id='about'>
            <div className="container px-4 py-5">

                <div className="text-center">
                    <img className="d-block mx-auto mb-4" src="/favicon.ico" alt="" width="72" height="72"/>
                    <h1 className="display-5 fw-bold">What is LabReserve?</h1>
                    <div className="col-lg-12 mx-auto">
                    <p className="lead mb-4">LAB, driven by community consensus, is a decentralized reserve currency. The purpose of Lab Token is to provide the growing Web3 ecosystem with a currency that maintains purchasing power. Lab Reserve is backed by our treasury of growing assets. </p>
                    <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                        <button type="button" className="btn btn-primary btn-lg px-4 gap-3">Primary button</button>
                    </div>
                    </div>
                </div>
                
                <div className="row align-items-center g-5 py-5">
                <div className="col-10 col-sm-8 col-lg-6">
                    <img src="/graphics/flasks.png" className="d-block mx-lg-auto img-fluid" alt="flasks" width="700" height="500" loading="lazy"/>
                </div>
                <div className="col-lg-6">
                    <h1 className="display-5 fw-bold lh-1 mb-3">Our Goal for Lab Reserve</h1>
                    <p className="lead">Our goal is to build a trusted decentralized reserve protocol that preserves purchasing power through long term price stability and a growing treasury to back liquidity for Lab Token across decentralized and centralized platforms. </p>
                    <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                    <button type="button" className="btn btn-primary btn-lg px-4 me-md-2">Primary</button>
                    <button type="button" className="btn btn-outline-secondary btn-lg px-4">Default</button>
                    </div>
                </div>
                </div>
            </div>
        </div>
        </>
      );
    }
export default About;
