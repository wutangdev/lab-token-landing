import React, { useEffect } from 'react';
import { Card  } from 'react-bootstrap';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { FaTwitter, FaDiscord, FaTelegram, FaInstagram } from 'react-icons/fa';


const teamMembers = [
  {id:0,
  name : "Team Member 1",
  title : "Position",
  desc : "Description of team member",
  twitter : true,
  twitterHref : "",
  img : "/team/alec.png",
  }, 
  {id:1,
  name : "Team Member 2",
  title : "Position",
  desc : "Description of team member",
  twitter : true,
  twitterHref : "",
  img : "/team/noah.png",
  }, 
  {id:2,
  name : "Team Member 3",
  title : "Position",
  desc : "Description of team member",
  twitter : true,
  twitterHref : "",
  img : "/team/alec.png",
  }, 
  {id:3,
  name : "Team Member 4",
  title : "Position",
  desc : "Description of team member",
  twitter : true,
  twitterHref : "",
  img : "/team/noah.png",
  }, 
  {id:4,
  name : "Team Member 5",
  title : "Position",
  desc : "Description of team member",
  twitter : true,
  twitterHref : "",
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
              
              <Tabs
                defaultActiveKey="team1"
                id="justify-tab-example"
                className="mb-3"
                justify
              >
              <Tab eventKey="team1" title="team1">
                <div className="row team-row">

                {teamMembers.map(member => (
                  <div  key={member.id} className="col-sm-6 col-lg-4 team-container">
                  <Card className='custom-card'>
                    <Card.Img variant="top" src={member.img} />
                    <Card.Body>
                      <Card.Title>{member.name}</Card.Title>
                      <Card.Text>
                        {member.title} <br></br>
                        {member.desc}
                      </Card.Text>
                      <ul className="nav col-md-4 justify-content-center list-unstyled d-flex" style={{margin:'auto'}}>
                      { member.twitter == true ? (
                      <li><a href={member.twitterHref}><FaTwitter  size={"1.5rem"} color={"#01d437"}/></a></li>
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
              
              <Tab eventKey="team2" title="team2">
                <div className="row team-row">

                {teamMembers.map(member => (
                  <div  key={member.id} className="col-sm-6 col-lg-4 team-container">
                  <Card className='custom-card'>
                    <Card.Img variant="top" src={member.img} />
                    <Card.Body>
                      <Card.Title>{member.name}</Card.Title>
                      <Card.Text>
                        {member.title} <br></br>
                        {member.desc}
                      </Card.Text>
                      <ul className="nav col-md-4 justify-content-center list-unstyled d-flex" style={{margin:'auto'}}>
                      { member.twitter == true ? (
                      <li><a href={member.twitterHref}><FaTwitter  size={"1.5rem"} color={"#01d437"}/></a></li>
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
              </Tabs>
            </div>
          </div>            
        </div>
        </>
      );
    }
export default Team;
