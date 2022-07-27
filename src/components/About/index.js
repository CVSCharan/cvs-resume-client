import React, {Component} from "react";

import './index.css';

class About extends Component {
    render(){
    return (
        <>
        <div className="about">
            <div className="about-heading">
                <h1 className="about-heading1">About Me</h1>
                <h2 className="about-heading2"><i className="about-dash bi bi-dash-lg"></i>who i am<i className="about-dash bi bi-dash-lg"></i></h2>
            </div>
            <div className="about-cards1">
                <div className="about-card3">
                    <h1 className="about-card3-heading">I'm <span className="about-card3-heading-span1">CVS</span> <span className="about-card3-heading-span2">CHARAN</span> and I'm a <span className="about-card3-heading-span1">Web</span> <span className="about-card3-heading-span2">Developer</span></h1>
                    <div className="about-card3-items">
                        <p className="about-card3-para"><span className="about-card3-para-span1">Able</span>. I am able to handle multiple tasks on a daily basis.</p>
                        <p className="about-card3-para"><span className="about-card3-para-span2">Creative</span>. I use a creative approach to problem solve.</p>
                        <p className="about-card3-para"><span className="about-card3-para-span1">Dependable</span>. I am a dependable person who is great at time management.</p>
                        <p className="about-card3-para"><span className="about-card3-para-span2">Energitic</span>. I am always energetic and eager to learn new skills.</p>
                    </div>
                </div>
                <div className="about-card4">
                    <div className="about-person-details">
                        <i className="person-icon bi bi-person"></i>
                        <div className="about-person">
                            <p className="about-person-contact">Contact :<br />7337525111</p>
                        </div>
                    </div>
                    <div className="about-address-details">
                        <i className="address-icon bi bi-geo-alt"></i>
                        <div className="about-address">
                            <p className="about-address-route">Address :<br />Nellore, A.P.</p>
                        </div>
                    </div>
                    <div className="about-email-details">
                        <i className="email-icon bi bi-envelope"></i>
                        <div className="about-email">
                            <p className="about-email-address">E-mail :<br />charan.cvs@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="about-cards">
                <div className="about-card-wrap">
                    <label className="about-card1-label" htmlFor="about-card1"><span className="about-card2-label-span">Q</span>ual<span className="about-card2-label-span">i</span>f<span className="about-card2-label-span">i</span>cat<span className="about-card2-label-span">i</span>on:</label>
                    <div className="about-card1" id="about-card1">
                    <table className="table table-borderless">
                        <thead>
                            <tr>
                            <th className="about-table-contents-heading" scope="col">Institute</th>
                            <th className="about-table-contents-heading" scope="col">Degree</th>
                            <th className="about-table-contents-heading" scope="col">Grade</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <th className="about-table-contents" scope="row">VIT University, Vellore</th>
                            <td className="about-table-contents">MSc - Physics</td>
                            <td className="about-table-contents">7.2 CGPA</td>
                            </tr>
                            <tr>
                            <th className="about-table-contents" scope="row">VR College, Nellore</th>
                            <td className="about-table-contents">BSc - MPC</td>
                            <td className="about-table-contents">7.4 CGPA</td>
                            </tr>
                        </tbody>
                    </table>
                    </div>
                </div>
                <div className="about-card-wrap">
                    <label className="about-card2-label" htmlFor="about-card2">M<span className="about-card2-label-span">y</span> Ski<span className="about-card2-label-span">ll</span>s:</label>
                    <div className="about-card2" id="about-card2">
                        <img className="about-logos" src="https://img.icons8.com/ios-filled/344/html-5--v1.png" alt="html" />
                        <img className="about-logos" src="https://img.icons8.com/color/344/css.png" alt="css" />
                        <img className="about-logos" src="https://img.icons8.com/color/344/bootstrap.png" alt="bootstrap" />
                        <img className="about-logos" src="https://img.icons8.com/color/344/python--v1.png" alt="python" />
                        <img className="about-logos" src="https://img.icons8.com/color/344/javascript--v1.png" alt="javascript" />
                        <img className="about-logos" src="https://img.icons8.com/fluency/344/node-js.png" alt="node" />
                        <img className="about-logos" src="https://assets.website-files.com/61ca3f775a79ec5f87fcf937/6202fcdee5ee8636a145a41b_1234.png" alt="express" />
                        <img className="about-logos" src="https://img.icons8.com/officel/344/react.png" alt="react" />
                        <img className="about-logos" src="https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/344/external-mongodb-a-cross-platform-document-oriented-database-program-logo-shadow-tal-revivo.png" alt="mongodb" />
                    </div>
                </div>
            </div>
        </div>
        </>
        
    )
    }
}

export default About;
