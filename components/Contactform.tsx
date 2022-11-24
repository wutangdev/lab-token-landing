import React from 'react';

function Contactform() {

      return (
        <>
        <div id="contact" className="m-auto">
            <div className="contact-container m-auto">
                <div className="m-3 p-3 contact-inner">
                    <h2>
                        Contact Us
                    </h2>
                    <p>
                        {
                        "For more direct communication submit this form and we will get back to you ASAP."
                        }
                    </p>
                    <form id="contact-form" method="POST" action="https://public.herotofu.com/v1/be250e90-6b87-11ed-a377-655c67143cec">                
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="form-group mt-3">
                                    <label>
                                        Name
                                        <span className="text-danger">*</span>
                                    </label>
                                    <input required name='Name' type="text" className="form-control" id="name" aria-describedby="name"></input>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="form-group mt-3">
                                    <label>
                                        Email
                                        <span className="text-danger">*</span>
                                    </label>
                                    <input required name='Email' type="email" className="form-control" id="email"></input>
                                </div>
                            </div>
                        </div>
                        <div className="form-group mt-3">
                            <label>
                                Message
                                <span className="text-danger">*</span>
                            </label>
                            <textarea required className="form-control" id="message"></textarea>
                        </div>
                        <button type="submit" className="btn btn-lab mt-3">Submit</button>
                    </form>
                </div>
            </div>
        </div>
        </>
      );
    }
export default Contactform;
