import React, {Component} from 'react';
import Sidebar from './Sidebar';
import './About.css';
import Bike from './bike.jpg';
import Dev from './dvmtncompressed.jpg';
import Coffee from './coffee.jpg';



class About extends Component{
    render(){
        return(
            <div className="about-whole">
                <div>
                    <Sidebar/>
                </div>
                <div className="about-back">
                    <div className="top" >
                    <img className="insta" src="https://res.cloudinary.com/dl79laoab/image/upload/v1579829558/Portfolio/75426198_183631986156896_9038551036718974548_n_r8r2ek.jpg"/>
                    <img className="insta" src="https://res.cloudinary.com/dl79laoab/image/upload/v1579829561/Portfolio/31198371_1890294211262083_7517874118847365120_n_dns10u.jpg"/>
                    <img className="insta" src="https://res.cloudinary.com/dl79laoab/image/upload/v1579829562/Portfolio/12976151_1701991580050638_1815517527_n_j16qgp.jpg"/>
                    </div>
                    <div className="bottom">
                        <div className="about-me">
                            <p className="top-about">
                                I am a web developer specializing in React, Nodejs, and PostgreSQL. 
                                My passion for all things web grew through many years of digital music production.
                            </p>
                            <p className="bottom-about">
                                For almost ten years I worked as a barista before deciding to pursue my aspirations within coding and development. 
                                While completing my degree in computer technology I took a class in Python and immediately knew I needed to fully commit to learning more.
                                After graduating, I signed up for a coding bootcamp and never looked back.
                            </p>
                                <p className="bottom-about">
                                I am currently working on web applications to help local farmers connect with restaurants through user friendly order forms and thoughtfully curated websites. 
                                </p>
                        </div>
                        <div className="end-about">
                            <div className="education">
                                <h2>EDUCATION</h2>
                                <div>
                                    <div className="ed-title">Associate of Science in Computer Technology</div>
                                    <h4>Coconino Community College</h4>
                                </div>
                                <div>
                                    <div className="ed-title">Immersive Web Development Coding Bootcamp</div>
                                    <h4>DevMountain</h4>
                                </div>
                            </div>
                            <div className="interests">
                                <h2>INTERESTS</h2>
                                <div className="ed-title">Technology</div>
                                <div className="ed-title">Mountain Biking</div>
                                <div className="ed-title">Music Production</div>
                                <div className="ed-title">Farming</div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        )
    }
    
}

export default About;