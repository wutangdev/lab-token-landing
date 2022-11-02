import React, { useEffect } from 'react';
import { Accordion  } from 'react-bootstrap';

const faqs = [
  {id:0,
  question : "What is Grandma Ape Spa Club project ?",
  answer : "The project  is a collection of 7,777 uniquely generated NFTs stored in the Ethereum chain. Each Grandma NFT is based on 7+ attributes with different rarities. A Grandma NFT is not simply a PFP, but it provides its holder with an exclusive access to the Grandma Ape Spa Club ecosystem. Owning a Grandma will give you access to an exclusive community, perks,  future airdrops, and much more.",
  eventKey :"0",
  }, 
  {id:1,
  question : "What is the Total Supply?",
  answer : "Total Supply is 7,777 Grandmas , of which 13 are 1:1 legendaries. 3 of these legendaries will be auctioned post mint , and the whole proceeds of the auction will be donated to  breast cancer charity .",
  eventKey :"1",
  }, 
  {id:2,
  question : "Mint Price",
  answer : "Whitelist price: 0.05eth. Public sale: 0.06eth.",
  eventKey :"2",
  }, 
  {id:3,
  question : "Where Can we mint?",
  answer : "Minting will be on a dedicated portal on our website.",
  eventKey :"3",
  }, 
  {id:4,
  question : "Wen Mint?",
  answer : "-White List mint: 5/18/2022. -Public mint: 5/19/2022.",
  eventKey :"4",
  }, 
  {id:5,
  question : "How many NFT’s can be minted",
  answer : "-White List: max 10 per wallet. -Public sale: Max 25 per transaction.",
  eventKey :"5",
  }, 
  {id:6,
  question : "How Can I get a White List?",
  answer : "By doing what it takes to own a Grandma, through joining our Discord, being active , and attending our twitter spaces. We continuously monitor the activity of our members on discord , and  reward our active members.",
  eventKey :"6",
  }, 
  {id:7,
  question : "How Can I buy a Grandma?",
  answer : "Download Metamask, buy Ethereum, and wait for mint.",
  eventKey :"7",
  }, 
  {id:8,
  question : "Are you affiliated with any other  NFT project?",
  answer : "Grandma Ape Spa Club is a unique forward-thinking project, and currently has no affiliation with any other NFT project.",
  eventKey :"8",
  }, 
  {id:9,
  question : "Which marketplaces will Grandma Ape Spa Club be listed on?",
  answer : "-OpenSea. -LooksRare. -MemeNFT.",
  eventKey :"9",
  }, 
  {id:10,
  question : "Wen Reveal?",
  answer : "24 Hours after full mint out.",
  eventKey :"10",
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
