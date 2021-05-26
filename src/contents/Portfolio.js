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
    function MyComponent(props) {

      //...

      const mySpecialFunction = () => {
        console.log('you clicked the button!')
      }

      const onClickHandler = (e) => {
        mySpecialFunction();
      }

    render() {

        return (
            <div className="condiv">
                <h1 className="subtopic">My Work</h1>
                <div className="hr_line line2 glass"><div className="inner2 inner3"></div></div>
                <div id="div1" className="cards">
                    <div className="port_out port1 glass"><a href="https://github.com/vikalp2502/AlgoSort-Sorting-Visualiser"><img src={project1} className="po1"></img></a></div>
                    <div className="port_out port2 glass"><a href="https://github.com/vikalp2502/Shoes-Nike-Landing-page"><img src={project2} className="po1"></img></a></div>
                    <div className="port_out port3 glass"><a href="https://github.com/vikalp2502/To-do-list-v2"><img src={project3} className="po1"></img></a></div>
                    <div className="port_out port4 glass"><a href="https://github.com/vikalp2502/Tribute-to-msd"><img src={project4} className="po1"></img></a></div>
                </div>
                <div id="div2" className="cards">
                    <div className="port_out port1 glass"><a href="https://github.com/vikalp2502/AlgoSort-Sorting-Visualiser"><img src={project5} className="po1"></img></a></div>
                    <div className="port_out port2 glass"><a href="https://github.com/vikalp2502/Shoes-Nike-Landing-page"><img src={project6} className="po1"></img></a></div>
                    <div className="port_out port3 glass"><a href="https://github.com/vikalp2502/To-do-list-v2"><img src={project7} className="po1"></img></a></div>
                    <div className="port_out port4 glass"><a href="https://github.com/vikalp2502/Tribute-to-msd"><img src={project8} className="po1"></img></a></div>
                </div>
                <button cible="div1" className="dot btn"></button>
                <button onClick={onClickHandler} className="dot btn"> CLICK</button>
            </div>


        )
    }
}

export default Portfolio
