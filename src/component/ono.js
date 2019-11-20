import React from 'react';

export const ONO = ({ono, emailId}) => !ono ? null :
    <section className="hire-section text-center" data-stellar-vertical-offset="50" data-stellar-background-ratio="0.2">
        <div className="hire-section-bg">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h2>I am open for new opportunities</h2>
                        <a href={"mailto:"+emailId} className="btn btn-default btn-lg">
                            <i className="fa fa-envelope-o"/> Hire Me
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
;