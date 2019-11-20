import React from 'react';
import './assets/scss/App.scss';
import {About, Home, Skills} from "./component/page-body";
import {Footer, Header} from "./component/header-footer";
import {ProfileSummary} from "./component/profile-summary";
import {ContactInfo} from "./component/contact-info";
import {Resume} from "./component/resume";
import {ONO} from "./component/ono";

export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            p: 0
        };
    }

    componentDidMount() {
        this.getProfileData();
    }

    getProfileData() {
        fetch('https://raw.githubusercontent.com/mohammad-amir/mohammad-amir.github.io/ProfileDataServer/db.json')
            .then(result => result.json())
            .then(profileJson => this.setState({...profileJson}, () => this.setDisplayValues()));
    }

    setDisplayValues() {
        let {position, p, f} = this.state;
        f = (p === 0) ? 1 : (p === position.length) ? -1 : f;
        p += f;
        let displayPosition = position.substr(0, p);
        this.setState({displayPosition, p, f}, () => setTimeout(() => this.setDisplayValues(), 100));
    }

    render() {
        return (
            <div>
                <Home {...this.state}/>
                <Header {...this.state}/>
                <About {...this.state}/>
                <Skills {...this.state}/>
                <Resume {...this.state}/>
                <ProfileSummary {...this.state}/>
                <ONO {...this.state}/>
                <ContactInfo {...this.state}/>
                <Footer {...this.state}/>
            </div>
        );
    }
}
