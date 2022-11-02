import React, { useEffect } from 'react';
import { FaGlobe, FaRocket, FaBriefcase, FaMobile } from 'react-icons/fa';

function Roadmap() {

      return (
        <>
        <div id='roadmap'>
          <div className="container">
              <h4>Timeline Style : Demo-1</h4>
              <div className="row">
                  <div className="col-md-12">
                      <div className="main-timeline">
                          <a href="#" className="timeline">
                              <div className="timeline-icon"><FaGlobe/></div>
                              <div className="timeline-content">
                                  <h3 className="title">Web Designer</h3>
                                  <p className="description">
                                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate ducimus officiis quod! Aperiam eveniet nam nostrum odit quasi ullam voluptatum.
                                  </p>
                              </div>
                          </a>
                          <a href="#" className="timeline">
                              <div className="timeline-icon"><FaRocket/></div>
                              <div className="timeline-content">
                                  <h3 className="title">Web Developer</h3>
                                  <p className="description">
                                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate ducimus officiis quod! Aperiam eveniet nam nostrum odit quasi ullam voluptatum.
                                  </p>
                              </div>
                          </a>
                          <a href="#" className="timeline">
                              <div className="timeline-icon"><FaBriefcase/></div>
                              <div className="timeline-content">
                                  <h3 className="title">Web Designer</h3>
                                  <p className="description">
                                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate ducimus officiis quod! Aperiam eveniet nam nostrum odit quasi ullam voluptatum.
                                  </p>
                              </div>
                          </a>
                          <a href="#" className="timeline">
                              <div className="timeline-icon"><FaMobile/></div>
                              <div className="timeline-content">
                                  <h3 className="title">Web Developer</h3>
                                  <p className="description">
                                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate ducimus officiis quod! Aperiam eveniet nam nostrum odit quasi ullam voluptatum.
                                  </p>
                              </div>
                          </a>
                      </div>
                  </div>
              </div>
          </div>
        </div>
        </>
      );
    }
export default Roadmap;
