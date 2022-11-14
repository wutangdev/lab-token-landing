import React, { useEffect } from 'react';
import { Accordion  } from 'react-bootstrap';

const faqs = [
  {id:0,
  question : "What is the Total Supply?",
  answer : "Lab Token will have a maximum supply of 200m.",
  eventKey :"0",
  }, 
  {id:1,
  question : "What can users do within the Lab Reserve ecosystem?",
  answer : "Users will be able to borrow, lend, and earn without the worry of having a centralized entity controlling their funds.",
  eventKey :"1",
  }, 
  {id:2,
  question : "What network is Lab Reserve built on?",
  answer : "Lab Reserve is built on the Binance Smart Chain but has plans of expanding to different blockchains, ultimately creating a cross chain ecosystem.",
  eventKey :"2",
  }, 
  {id:3,
  question : "Why is Lab Reserve needed?",
  answer : "After numerous CeFi entities have exploited and mishandled investor funds, the Team behind Lab Reserve realized the need for an easy and safe decentralized platform for investors to utilize without worry their funds would be handled inappropriately.",
  eventKey :"3",
  }, 
  {id:4,
  question : "How is Lab Reserve decentralized?",
  answer : "Lab Reserve utilizes a series of smart contracts which governs and controls the events on site. The Lab Reserve team does not, and will not be able to access your funds. ",
  eventKey :"4",
  }, 
];


function FAQ() {
      return (
        <>
        <div id='faq'>          
            <div className="container px-4 py-5">          
              <h1 className="display-5 fw-bold text-center">Have any Questions?</h1>
              <div className="row">
                <div className="col-md-8 m-auto">
                {faqs.map(faq => (
                  <Accordion  key={faq.id} defaultActiveKey="0">
                    <Accordion.Item eventKey={faq.eventKey} style={{marginBottom: '0.5rem'}}>
                      <Accordion.Header>{faq.question}</Accordion.Header>
                      <Accordion.Body>{faq.answer}</Accordion.Body>
                    </Accordion.Item>            
                  </Accordion>
                  ))}
              </div>
            </div>
          </div>
        </div>
        </>
      );
    }
export default FAQ;
