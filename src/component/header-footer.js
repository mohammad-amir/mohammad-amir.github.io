import React from "react";

export const Header = ({name}) =>
    <header className="header">
        <nav className="navbar navbar-custom" role="navigation">
            <div className="container">
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle" data-toggle="collapse"
                            data-target="#custom-collapse">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"/>
                        <span className="icon-bar"/>
                        <span className="icon-bar"/>
                    </button>
                    <a className="navbar-brand" href="/"><h1>{name}</h1></a>
                </div>

                <div className="collapse navbar-collapse" id="custom-collapse">
                    <ul className="nav navbar-nav navbar-right">
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#skills">Skills</a></li>
                        <li><a href="#resume">Resume</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
;

export const Footer = ({name, position}) =>
    <footer className="footer-wrapper">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="copyright text-center">
                        <p>Design and Developed by {name} - {position}</p>
                    </div>
                </div>
            </div>
        </div>
    </footer>
;