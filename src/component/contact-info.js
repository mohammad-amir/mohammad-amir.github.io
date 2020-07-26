import React from 'react';

export const ContactInfo = ({mainApiUrl, addressLineOne, addressLineTwo, locationMapUrl, mobileNo}) =>
    <section id="contact" className="contact-section section-padding">
        <div className="container">
            <h2 className="section-title wow fadeInUp">Get in touch</h2>

            <div className="row">
                <div className="col-md-6">
                    <div className="contact-form">
                        <form name="contact-form" id="contactForm" action={mainApiUrl} method="POST">
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input type="text" name="name" className="form-control" id="name" required="true"/>
                            </div>

                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input type="email" name="email" className="form-control" id="email" required="true"/>
                            </div>

                            <div className="form-group">
                                <label htmlFor="subject">Subject</label>
                                <input type="text" name="subject" className="form-control" id="subject" required="true"/>
                            </div>

                            <div className="form-group">
                                <label htmlFor="message">Message</label>
                                <textarea name="message" className="form-control" id="message" rows="5" required="true"/>
                            </div>

                            <button type="submit" name="submit" className="btn btn-primary">Send Message</button>
                        </form>
                    </div>
                </div>

                <div className="col-md-6">
                    <div className="row center-xs">
                        <div className="col-sm-6 col-xs-6">
                            <i className="fa fa-map-marker"/>
                            <address>
                                <strong>Address/Street</strong>
                                {addressLineOne},<br/>
                                {addressLineTwo}
                            </address>
                        </div>

                        <div className="col-sm-6 col-xs-6">
                            <i className="fa fa-mobile"/>
                            <div className="contact-number">
                                <strong>Phone Number</strong>
                                {
                                    mobileNo ? mobileNo.split(",").map(mobile =>
                                        <span key={mobile}>{mobile}<br/></span>
                                    ): null
                                }
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-sm-12">
                            <div className="location-map">
                                <iframe src={locationMapUrl} title="locationMapUrl" width="100%" height="350" frameBorder="0" style={{border:"0"}} allowFullScreen=""/>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </section>
;
