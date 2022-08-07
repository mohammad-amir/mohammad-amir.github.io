import React from 'react';

export const Home = ({name, position, intro, socialLinks, displayPosition}) =>
    <section id="home" className="tt-fullHeight" data-stellar-vertical-offset="50" data-stellar-background-ratio="0.8">
        <div className="intro">
            <div className="intro-sub">{name}</div>
            <h1>
                <span>
                    {position}
                </span>
            </h1>
            <p>
                {
                    intro ? intro.map((text, key) => <span {...{key}}>{text}<br/></span>) : null
                }
            </p>
            <div className="social-icons">
                <ul className="list-inline">
                    {
                        socialLinks ? socialLinks.map((socialLink, key) =>
                            <li  {...{key}}>
                                <a href={socialLink.url} target="_blank" rel="noopener noreferrer">
                                    <i className={socialLink.iconClass}/>
                                </a>
                            </li>
                        ) : null
                    }
                </ul>
            </div>
        </div>
        <div className="mouse-icon"><div className="wheel"/></div>
    </section>
;

export const About = ({profileImageId, name, nationality, emailId, mobileNo, careerObjective, profileSummary, profileSummarySkills, signatureImageId, resumePdfId}) =>
    <section id="about" className="about-section section-padding">
        <div className="container">
            <h2 className="section-title wow fadeInUp">About Me</h2>

            <div className="row">
                <div className="col-md-4 col-md-push-8">
                    <div className="biography">
                        <div className="myphoto">
                            <img src={"https://drive.google.com/uc?id="+profileImageId} alt=""/>
                        </div>
                        <ul>
                            <li><strong>Name: </strong>{name}</li>
                            <li><strong>Nationality: </strong>{nationality}</li>
                            <li><strong>Email: </strong>{emailId}</li>
                        </ul>
                    </div>
                </div>

                <div className="col-md-8 col-md-pull-4">
                    <div className="short-info wow fadeInUp">
                        <h3>Objective</h3>
                        <p>{careerObjective}</p>
                    </div>

                    <div className="short-info wow fadeInUp">
                        <h3>What I Do ?</h3>
                        <p>
                            {
                                profileSummary ? profileSummary.map((text, key) =>
                                    <span {...{key}}>{text}<br/></span>
                                ) : null
                            }
                        </p>

                        <ul className="list-check">
                            {
                                profileSummarySkills ? profileSummarySkills.map((skill, key) =>
                                    <li {...{key}}>{skill}</li>
                                ) : null
                            }
                        </ul>
                    </div>

                    <div className="my-signature">
                        <img src={"https://drive.google.com/uc?id="+signatureImageId} alt=""/>
                    </div>

                    <div className="download-button">
                        <a className="btn btn-info btn-lg" href="#contact">
                            <i className="fa fa-paper-plane"/>Send me message
                        </a>
                        <a className="btn btn-primary btn-lg"
                           href={"https://drive.google.com/uc?export=download&id="+resumePdfId}>
                            <i className="fa fa-download"/>Download My Resume
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
;

export const Skills = ({mainSkills, otherSkills}) =>
    <section id="skills" className="skills-section section-padding">
        <div className="container">
            <h2 className="section-title wow fadeInUp">Skills</h2>

            <div className="row">
                <div className="col-md-6">
                    {
                        mainSkills ? mainSkills.map((skill, key) => key < mainSkills.length/2 ?
                            <div {...{key}} className="skill-progress">
                                <div className="skill-title"><h3>{skill.name}</h3></div>
                                <div className="progress">
                                    <div className="progress-bar six-sec-ease-in-out" role="progressbar" aria-valuenow={skill.score} aria-valuemin="0" aria-valuemax="100">
                                        <span>{skill.score}%</span>
                                    </div>
                                </div>
                            </div> : null
                        ) : null
                    }
                </div>

                <div className="col-md-6">
                    {
                        mainSkills ? mainSkills.map((skill, key) => key < mainSkills.length/2 ? null :
                            <div {...{key}} className="skill-progress">
                                <div className="skill-title"><h3>{skill.name}</h3></div>
                                <div className="progress">
                                    <div className="progress-bar six-sec-ease-in-out" role="progressbar" aria-valuenow={skill.score} aria-valuemin="0" aria-valuemax="100">
                                        <span>{skill.score}%</span>
                                    </div>
                                </div>
                            </div>
                        ) : null
                    }
                </div>
                <div className="skill-progress"/>
            </div>

            <div className="skill-chart text-center"><h3>More skills</h3></div>

            <div className="row more-skill text-center">
                {
                    otherSkills ? otherSkills.map((skill, key) =>
                        <div {...{key}} className="col-xs-12 col-sm-4 col-md-2">
                            <div className="chart" data-percent={skill.score} data-color="3498db">
                                <span className="percent"></span>
                                <div className="chart-text">
                                    <span>{skill.name}</span>
                                </div>
                            </div>
                        </div>
                    ) : null
                }
            </div>
        </div>
    </section>
;
