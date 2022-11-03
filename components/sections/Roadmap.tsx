import React, { useEffect } from 'react';
import { FaGlobe, FaRocket, FaBriefcase, FaMobile } from 'react-icons/fa';

function Roadmap() {

      return (
        <>
        <div id='roadmap'>
          <div className="container px-4 py-5">
              <h4 className='text-center'>Roadmap</h4>
              <div className="row">
                  <div className="col-md-12">
                      <div className="main-timeline">
                          <div className="timeline">
                              <div className="timeline-icon"><h1 className='m-auto'>Q4</h1></div>
                              <div className="timeline-content">
                                  <h3 className="title">Web Designer</h3>
                                  {/* <ul  className="description">
                                    <li>item 1</li>
                                    <li>item 2</li>
                                    <li>item 3</li>
                                    <li>item 4</li>
                                    <li>item 5</li>
                                  </ul> */}
                                  <div className="description">
                                    <ul className="description-list">
                                        <li>item 1</li>
                                        <li>item 2</li>
                                        <li>item 3</li>
                                        <li>item 4</li>
                                        <li>item 5</li>
                                    </ul>                                         
                                  </div>
                              </div>
                          </div>
                          <div className="timeline">
                              <div className="timeline-icon"><h1 className='m-auto'>Q4</h1></div>
                              <div className="timeline-content">
                                  <h3 className="title">Web Designer</h3>
                                  <p className="description">
                                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate ducimus officiis quod! Aperiam eveniet nam nostrum odit quasi ullam voluptatum.
                                  </p>
                              </div>
                          </div>
                          <div className="timeline">
                              <div className="timeline-icon"><h1 className='m-auto'>Q4</h1></div>
                              <div className="timeline-content">
                                  <h3 className="title">Web Designer</h3>
                                  <p className="description">
                                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate ducimus officiis quod! Aperiam eveniet nam nostrum odit quasi ullam voluptatum.
                                  </p>
                              </div>
                          </div>
                          <div className="timeline">
                              <div className="timeline-icon"><h1 className='m-auto'>Q4</h1></div>
                              <div className="timeline-content">
                                  <h3 className="title">Web Designer</h3>
                                  <p className="description">
                                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate ducimus officiis quod! Aperiam eveniet nam nostrum odit quasi ullam voluptatum.
                                  </p>
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
