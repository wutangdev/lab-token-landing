import React, { useEffect } from 'react';
import { FaTwitter, FaDiscord, FaTelegram, FaInstagram } from 'react-icons/fa';

function Goal() {

      return (
        <>
        <div id='goal'>            
            <div className="container px-4 py-5">
            <div className="row g-4 py-5 row-cols-1 row-cols-lg-3 text-center">
                <div className="col">
                    <div className="goal-icon">
                        <img src="/graphics/strength.png" className="goal-image d-block mx-lg-auto img-fluid m-auto" alt="flasks" loading="lazy"/>
                    </div>
                    <h2 className='fw-bold'>Decentralized</h2>
                    <p>Lend, Borrow, Earn and Trade in a decentralized and immutable AMM directly on-chain</p>
                </div>
                <div className="col">
                    <div className="goal-icon">
                        <img src="/graphics/blockchain.png" className="goal-image d-block mx-lg-auto img-fluid m-auto" alt="flasks" loading="lazy"/>
                    </div>
                    <h2 className='fw-bold'>Scalable</h2>
                    <p>Built on Binance Smart Chain for fast, secure, low cost transactions</p>
                </div>
                <div className="col">
                    <div className="goal-icon">
                        <img src="/graphics/strategy.png" className="goal-image d-block mx-lg-auto img-fluid m-auto" alt="flasks" loading="lazy"/>
                    </div>
                    <h2 className='fw-bold'>Governance</h2>
                    <p>Governed and decided on by the voting power of the community</p>
                </div>
            </div>
            </div>
        </div>
        </>
      );
    }
export default Goal;
