import React from 'react';
import { Image  } from 'react-bootstrap';
import { FaTwitter, FaDiscord } from 'react-icons/fa';

function Footer() {


      return (
        <>
          <div className='footer-container'>
            <div className="container">
                <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 border-top">
                <div className="col-md-4 d-flex align-items-center">
                    {/* <a href="#hero" className="mb-3 me-2 mb-md-0 lh-1">                  
                    <Image className="d-block mx-auto mb-4" src="/images/sample.png" alt="" width="72" height="57"/>
                    </a> */}
                    <span>&copy; {new Date().getFullYear()} Lab Reserve</span>
                </div>

                <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
                    <li className="ms-3"><a href=""><FaTwitter  size={"2.5rem"}/></a></li>
                    <li className="ms-3"><a href=""><FaDiscord  size={"2.5rem"}/></a></li>                
                </ul>
                </footer>
            </div>
          </div>
        </>
      );
    }
export default Footer;
