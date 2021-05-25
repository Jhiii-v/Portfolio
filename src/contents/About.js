import React, { Component } from 'react';


class About extends Component {
    render() {
        return (
            <div className="condiv">
            <h1 className="subtopic">A propos</h1>
            <div className="hr_line line2 glass"><div className="inner2"></div></div>
            <h2 className="abouthead">Edouard <mark className="mark2">Vieux</mark></h2>
            <p>Front-End Developer</p>
            <br></br>
            <p className="p10">
                Interreser par la technologie<br/><br/><br/><br/><br/><br/><br/><br/>
            </p>
            <div className="Edu">
                <div class="back1 back2"><i class="fa fa-book i1 i3"></i></div>
            </div>
            <h3>Education</h3>
            <div className="vr_line glass">
                <div className="vr_inner inn1"></div>
                <div className="vr_inner inn2"></div>
            </div>
            <h4>My Digital School</h4>
            <p className="p1">Montigny le BX, France</p>
            <p className="p1"><i class="fa fa-calendar i2"></i>Sept 2020 - Juin 2021</p>
            <h4>Ecole 42</h4>
            <p className="p1">Paris 17, France</p>
            <p className="p1"><i class="fa fa-calendar i2"></i>2017</p>

            <h3 class="sk_head">Skills</h3>
            <div class="sk glass">HTML</div>
            <div class="sk s2 glass">CSS</div>
            <div class="sk s3 glass">JavaScript</div>
            <div class="sk s4 glass">React</div>
            <div class="sk s5 glass">Node</div>
            <div class="sk s6 glass">Php</div>
            </div>
            )
        }
    }

export default About
