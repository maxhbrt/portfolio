import React, {Component} from 'react';
import Sidebar from './Sidebar';
import './About.css';
import Bike from './bike.jpg';
import Dev from './dev.jpg';
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
                    <img className="insta" src={Bike}/>
                    <img className="insta" src={Dev}/>
                    <img className="insta" src={Coffee}/>
                    </div>
                    <div className="bottom">
                        <div className="about-me">
                            <p className="top-about">
                                I'm web developer specializing in React, Nodejs, and PostgreSQL. 
                                I have a passion for learning and creating. 
                            </p>
                            <p className="bottom-about">
                                I took my first coding class while completing my associates degree in computer tech. and immedietly fell in love.
                                I had been a barista for almost ten years before deciding to switch careers. 
                            </p>
                                <p className="bottom-about">
                                During my time as a barista I developed interpersonal, communication and leadership skills
                                that are applicaple in any field of work.  
                                </p>
                                <p className="bottom-about">
                                    To take my skills to the next level, I completed DevMountain's immersive web development coding bootcamp and flourished into the developer I am today.
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