import React from 'react';

export const ProfileSummary = ({totalYearsOfExperience, totalProjects, awardsWon}) =>
    <section id="facts" className="facts-section text-center" data-stellar-vertical-offset="50" data-stellar-background-ratio="0.2">
        <div className="tt-overlay-bg">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="count-wrap">
                            <div className="col-sm-4 col-xs-4">
                                <i className="fa fa-flask"></i>
                                <h3 className="timer">{totalYearsOfExperience}</h3>
                                <p>Years of Experience</p>
                            </div>
                            <div className="col-sm-4 col-xs-4">
                                <i className="fa fa-thumbs-up"></i>
                                <h3 className="timer">{totalProjects}</h3>
                                <p>Projects Delivered</p>
                            </div>
                            <div className="col-sm-4 col-xs-4">
                                <i className="fa fa-trophy"></i>
                                <h3 className="timer">{awardsWon}</h3>
                                <p>Awards Won</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
;