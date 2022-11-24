import React from 'react';
import {GiPartyPopper} from 'react-icons/gi';

function Thankyou() {

      return (
        <>
        <div id="contact" className="m-auto">
            <div className="contact-container m-auto">
                <div className="m-3 p-5 contact-inner text-center">                    
                    <div className="bounce">
                    <GiPartyPopper size={'4rem'}/>
                    </div>
                    <h2 className='mt-5'>
                        Success!
                    </h2>
                    <p>
                        {
                        "Talk to you soon!"
                        }
                    </p>
                    
                </div>
            </div>
        </div>
        </>
      );
    }
export default Thankyou;
