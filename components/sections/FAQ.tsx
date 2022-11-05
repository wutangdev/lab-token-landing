import React, { useEffect } from 'react';
import { Accordion  } from 'react-bootstrap';

const faqs = [
  {id:0,
  question : "FAQ 1",
  answer : "FAQ answer forquestion 1",
  eventKey :"0",
  }, 
  {id:1,
  question : "FAQ 2",
  answer : "FAQ answer forquestion 2",
  eventKey :"1",
  }, 
  {id:2,
  question : "FAQ 3",
  answer : "FAQ answer forquestion 3",
  eventKey :"2",
  }, 
  {id:3,
  question : "FAQ 4",
  answer : "FAQ answer forquestion 4",
  eventKey :"3",
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
