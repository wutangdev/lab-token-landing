import React, { useEffect } from 'react';
import { Card  } from 'react-bootstrap';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { FaTwitter, FaDiscord, FaTelegram, FaInstagram } from 'react-icons/fa';


const teamMembers = [
  {id:0,
  name : "Noah",
  title : "Co-Founder",
  desc : '7+ years crypto space experience. 5+ years development experience. Fullstack web3 developer. Involved in every aspect of Mellow Finance.',  
  twitter : true,
  twitterHref : "https://twitter.com/ElderPyke",
  img : "/team/noah.png",
  }, 
  {id:1,
  name : "Alec",
  title : "Co-Founder",
  desc : "8+ years development experience. 5+ years marketing experience. Fullstack web3 developer. Involved in every aspect of Mellow Finance.",
  twitter : true,
  twitterHref : "https://twitter.com/wutangdev",
  img : "/team/alec.png",
  }, 
];


function Team() {

      return (
        <>
        <div id='team'>
          <div className='container'>
            <div className="px-4 py-5 text-center">
              <h1 className="display-5 fw-bold ga-section-title">Team</h1>
                <div className="row team-row justify-content-center">

                  {teamMembers.map(member => (
                    <div  key={member.id} className="col-sm-6 col-lg-4 team-container pt-4">
                    <Card className='custom-card'>
                      <Card.Img variant="top" src={member.img} />
                      <Card.Body>
                        <Card.Title className='fw-bold'>{member.name}</Card.Title>
                        <Card.Text>
                          {member.title}
                        </Card.Text>
                        <ul className="nav col-md-4 justify-content-center list-unstyled d-flex" style={{margin:'auto'}}>
                        { member.twitter == true ? (
                        <li><a href={member.twitterHref}><FaTwitter  size={"1.5rem"} color={"#69c396"}/></a></li>
                        ) : (
                          
                        <li style={{width:0}}></li> 
                        ) }
                        </ul>
                      </Card.Body>
                    </Card>
                    </div>
                  ))}
                  
                </div>
              
              {/* <Tabs
                defaultActiveKey="team1"
                id="justify-tab-example"
                className="mb-3"
                justify
              >
              <Tab eventKey="team1" title="Executive">
                <div className="row team-row">

                {teamMembers.map(member => (
                  <div  key={member.id} className="col-sm-6 col-lg-4 team-container pt-4">
                  <Card className='custom-card'>
                    <Card.Img variant="top" src={member.img} />
                    <Card.Body>
                      <Card.Title className='fw-bold'>{member.name}</Card.Title>
                      <Card.Text>
                        {member.title} <br></br>
                        {member.desc}
                      </Card.Text>
                      <ul className="nav col-md-4 justify-content-center list-unstyled d-flex" style={{margin:'auto'}}>
                      { member.twitter == true ? (
                      <li><a href={member.twitterHref}><FaTwitter  size={"1.5rem"} color={"#69c396"}/></a></li>
                      ) : (
                        
                      <li style={{width:0}}></li> 
                      ) }
                      </ul>
                    </Card.Body>
                  </Card>
                  </div>
                ))}
                
              </div>
              </Tab>
              
              <Tab eventKey="team2" title="Core">
                <div className="row team-row">

                {teamMembers.map(member => (
                  <div  key={member.id} className="col-sm-6 col-lg-4 team-container pt-4">
                  <Card className='custom-card'>
                    <Card.Img variant="top" src={member.img} />
                    <Card.Body>
                      <Card.Title className='fw-bold'>{member.name}</Card.Title>
                      <Card.Text>
                        {member.title} <br></br>
                        {member.desc}
                      </Card.Text>
                      <ul className="nav col-md-4 justify-content-center list-unstyled d-flex" style={{margin:'auto'}}>
                      { member.twitter == true ? (
                      <li><a href={member.twitterHref}><FaTwitter  size={"1.5rem"} color={"#69c396"}/></a></li>
                      ) : (
                        
                      <li style={{width:0}}></li> 
                      ) }
                      </ul>
                    </Card.Body>
                  </Card>
                  </div>
                ))}
                
              </div>
              </Tab>
              </Tabs> */}
            </div>
          </div>            
        </div>
        </>
      );
    }
export default Team;
