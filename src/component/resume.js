import React from 'react';

export const Resume = ({experiences, educations}) =>
    <section id="resume" className="resume-section section-padding">
        <div className="container">
            <h2 className="section-title wow fadeInUp">Resume</h2>
            <div className="row">
                <div className="col-md-12">
                    <div className="resume-title">
                        <h3>Experience</h3>
                    </div>
                    <div className="resume">
                        <ul className="timeline">
                            {
                                experiences ? experiences.map((experience, key) =>
                                    <li {...{key}} className={key%2 === 0 ? "" : "timeline-inverted"}>
                                        <div className="posted-date">
                                            <span className="month">{experience.duration}</span>
                                        </div>
                                        <div className="timeline-panel wow fadeInUp">
                                            <div className="timeline-content">
                                                <div className="timeline-heading">
                                                    <h3>{experience.title}</h3>
                                                    <span>{experience.organisation}</span>
                                                </div>
                                                <div className="timeline-body">
                                                    <b>Technologies and Tools:</b>
                                                    <p>{experience.technologies}</p>
                                                    {
                                                        experience.responsibilities ? <b>Responsibilities:</b> : null
                                                    }
                                                    <p>
                                                    {
                                                        experience.responsibilities ?
                                                            experience.responsibilities.map((resp, i) =>
                                                                <span key={i}>
                                                                    {resp}<br/>
                                                                </span>
                                                            ) : null
                                                    }
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                ) : null
                            }
                        </ul>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-md-12">
                    <div className="resume-title">
                        <h3>Education</h3>
                    </div>
                    <div className="resume">
                        <ul className="timeline">
                            {
                                educations ? educations.map((education, key) =>
                                    <li {...{key}} className={key%2 === 0 ? "" : "timeline-inverted"}>
                                        <div className="posted-date">
                                            <span className="month">{education.duration}</span>
                                        </div>
                                        <div className="timeline-panel wow fadeInUp">
                                            <div className="timeline-content">
                                                <div className="timeline-heading">
                                                    <h3>{education.title}</h3>
                                                    <span>{education.instituteUniversity}</span>
                                                </div>
                                                <div className="timeline-body">
                                                    <p>{education.details}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                ) : null
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
;