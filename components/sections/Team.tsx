import React, { useEffect } from 'react';
import { Card  } from 'react-bootstrap';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { FaTwitter, FaDiscord, FaTelegram, FaInstagram } from 'react-icons/fa';


const teamMembers = [
  {id:0,
  name : "Noah",
  title : "CEO/Co-Founder",
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
  {id:2,
  name : "Andrew",
  title : "Head of Growth",
  desc : "",
  twitter : true,
  twitterHref : "https://twitter.com/_AndrewForte",
  img : "/team/andrew.jpg",
  },
  {id:3,
  name : "Mal",
  title : "Community Manager",
  desc : "Personal development coach (7+) Community Manager in web3 (2) Marketing background (5+) I combine my strong feelings about crypto and DeFi with leadership skills to bring out the best within the community",
  twitter : true,
  twitterHref : "https://twitter.com/MaleksWorlds",
  img : "/team/mal.jpg",
  },
  {id:4,
  name : "Dan",
  title : "Marketing Specialist",
  desc : "Been investing in crypto since 2018, 7 figure affiliate marketer, Web3 investor, NFT Enthusiast, BSC Degen, Content creator.",
  twitter : true,
  twitterHref : "https://twitter.com/DansRoadToRichs",
  img : "/team/dan.png",
  },  
  {id:5,
  name : "Asteau",
  title : "Creative Director",
  desc : "",
  twitter : true,
  twitterHref : "https://twitter.com/madebyastreau",
  img : "/team/astreau.jpg",
  }, 
];


function Team() {

      return (
        <>
        <div id='team'>
          <div className='container'>
            <div className="px-4 py-5">
              <h1 className="display-5 fw-bold ga-section-title text-center">Team</h1>
                <div className="row team-row justify-content-center">

                  {teamMembers.map(member => (
                    <div  key={member.id} className="col-sm-6 col-lg-4 team-container pt-4">
                    <Card className='custom-card mellow-card'>
                      <Card.Img variant="top" src={member.img} />
                      <Card.Body>
                        <Card.Title className='fw-bold mb-0 text-center'>{member.name}</Card.Title>
                        <Card.Text className='text-center mb-0'>
                          {member.title}
                        </Card.Text>
                        <p className='team-description text-left mb-0'>{member.desc}</p>
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
