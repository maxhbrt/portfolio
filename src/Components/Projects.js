import React, { Component } from "react";
import Sidebar from "./Sidebar";
import Fmlanding from "./fmlanding.png"
import Fmshop from "./fmshop.png"
import "./Projects.css";
import tidm from "./tidm.jpg";
import tidmproj from "./tidmproj.png";

class Projects extends Component {
  render() {
    return (
     
      <div className="projects-whole">
        <div className="sb">
        <Sidebar />
        </div>
        <div className="projects-back">
          <div className="single-project">
            <div className="project-title">Flagstaff Marketplace
          
            </div>
            <div className="fm-container">
              <div className="pics">
            <img className="fm-image" src={Fmlanding}/>
            <img className="fm-image" src={Fmshop}/>
            </div>
            <div className="project-about">
              <p >web application for finding and purchasing produce from local farms in Flagstaff, AZ</p>
              <div className="project-detail">Built with HTML/CSS, ReactJS, NodeJS, Express, and Postgres. Once the order is payed for by card, using Stripe, an email is sent to me with the order details, using Nodemailer. The user can also view the farm locations using the GoogleMaps API.</div>
              <a className="live-link" href="https://www.flagstaffmarketplace.com/#/" target="_blank">flagstaffmarketplace.com</a>
            </div>
            </div>
          </div>
          <div className="single-project">
              <div className="project-title">This is DevMountain</div>
              <div className="fm-container">
                <div className="pics">
                <img className="fm-image" src={tidm}/>
                <img className="fm-image" src={tidmproj}/>
                </div>
                <div className="project-about">
                  <p>web applications for DevMountain students to display personal projects, connect, and receive feedback</p>
                  <div className="project-detail">
                    I built the backend of this group project using PostGreSQL, Express and Nodejs. I Was responsible for database administration, authentication/ security, and server architecture. I also planned data flow and designed front-end components.
                  </div>
                    <a className="live-link" href="https://thisisdevmountain.com" target="_blank">thisisdevmountain.com</a>
                </div>
              </div>
              
              </div>
        </div>
      </div>

    );
  }
}
export default Projects;
