import React, { Component } from 'react';
import $ from 'jquery';
import project1 from '../img/project1.png';
import project2 from '../img/project2.png';
import project3 from '../img/project3.png';
import project4 from '../img/project4.png';
import project5 from '../img/project5.jpg';
import project6 from '../img/project6.jpg';
import project7 from '../img/project7.jpg';
import project8 from '../img/project8.jpg';


class Portfolio extends Component {

    render() {


        return (
            <div className="condiv">
                <h1 className="subtopic">My Work</h1>
                <div className="hr_line line2 glass"><div className="inner2 inner3"></div></div>
                <div className="port_out port1 glass"><a href="https://github.com/vikalp2502/AlgoSort-Sorting-Visualiser"><img src={project5} className="po1"></img></a></div>
            </div>


        )
    }
}

export default Portfolio
