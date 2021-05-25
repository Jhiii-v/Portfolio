import React, { Component } from 'react';
import Social from '../components/Social';
import Map from '../img/Rambouillet.png';

class Contact extends Component {
    render() {
        return (
            <div className="condiv contact">
            <h1 className="subtopic">Contactez-Moi</h1>
            <div className="hr_line line2 glass"><div className="inner2 inner3"></div></div>
            <div class="con_out glass"><img src={Map} class="co1"></img></div>
            <a href="#"><div className="back3 glass">Cv &nbsp<i class="fas fa-file-download"></i></div></a>
            <a href="mailto:edouard.vieux@me.com"><div className="back3 back4 glass">Contactez-Moi</div></a>
            <div className="hr_line line3 glass"><div className="inner3"></div></div>
            <Social />
            </div>
            )
        }
    }

    export default Contact
