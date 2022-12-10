import React, { useEffect } from 'react';
import { FaGlobe, FaRocket, FaBriefcase, FaMobile } from 'react-icons/fa';

function Roadmap() {

      return (
        <>
        <div id='roadmap'>
          <div className="container px-4 py-5">
            <h1 className="display-5 fw-bold text-center pb-4">Roadmap</h1>
              <div className="row">
                  <div className="col-md-12">
                      <div className="main-timeline">
                          <div className="timeline">
                              <div className="timeline-icon"><h1 className='m-auto'>Q4</h1></div>
                              <div className="timeline-content">
                                  <h3 className="title">Q4 2022</h3>
                                  <div className="description">
                                    <ul className="description-list">
                                        <li>Initial conception of Mellow Finance</li>
                                        <li>Whitepaper created</li>
                                        <li>Investor pooling for Private Sales</li>
                                        <li>Partnership Outreach begins</li>
                                    </ul>                                         
                                  </div>
                              </div>
                          </div>
                          <div className="timeline">
                              <div className="timeline-icon"><h1 className='m-auto'>Q1</h1></div>
                              <div className="timeline-content">
                                  <h3 className="title">Q1 2023</h3>
                                  <div className="description">
                                    <ul className="description-list">
                                        <li>Launch of LAB token on BSC</li>
                                        <li>Launch of Mellow Finance BETA platform</li>
                                        <li>User Optimization and Presence</li>
                                        <li>Partnership Adoption</li>
                                        <li>DAO Governance introduction</li>
                                        <li>Introduction and Implementation of LUSD</li>
                                    </ul>                                         
                                  </div>
                              </div>
                          </div>
                          <div className="timeline">
                              <div className="timeline-icon"><h1 className='m-auto'>Q2</h1></div>
                              <div className="timeline-content">
                                  <h3 className="title">Q2 2023</h3>
                                  <div className="description">
                                    <ul className="description-list">
                                        <li>Refinement of Mellow Finance Lending protocol with Full Release</li>
                                        <li>Mellow Finance Swap</li>
                                        <li>Multi-chain integration</li>
                                        <li>Ecosystem expansion</li>
                                    </ul>                                         
                                  </div>
                              </div>
                          </div>
                          <div className="timeline">
                              <div className="timeline-icon"><h1 className='m-auto'>Q3</h1></div>
                              <div className="timeline-content">
                                  <h3 className="title">Q3 2023</h3>
                                  <div className="description">
                                    <ul className="description-list">
                                        <li>Coming Soon</li>
                                    </ul>                                         
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
        </div>
        </>
      );
    }
export default Roadmap;
