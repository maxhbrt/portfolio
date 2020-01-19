import React, { Component } from "react";
import me from "./me.JPG";
import "./Sidebar.css";
import { Link, withRouter } from "react-router-dom";
import { FaLinkedin, FaGithub, FaGlassMartiniAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

class Sidebar extends Component {
  render() {
    return (
      <div className="side-bar-l">
        <div>
          <Link to="/">
            <img className="me" src={me} width="100px" height="100px" />
          </Link>
        </div>
        <div className="side-title">
          <h2 className="side-name">Max Hebert</h2>
          <h3 className="dev-title">Full-Stack Web Developer</h3>
        </div>

        <div className="side-menu">
          <ul>
            <li className="list-items">
              <Link to="/" style={{ textDecoration: "none" }}>
                Home
              </Link>
            </li>
            <li className="list-items">
              <Link to="/projects" style={{ textDecoration: "none" }}>
                {" "}
                Projects
              </Link>
            </li>

            <li className="list-items">About</li>
          </ul>
        </div>
        <div>
          <h3>GET IN TOUCH</h3>
        </div>
        <div className="contact-icons" style={{ color: "white" }}>
          <a href="https://github.com/maxhbrt" target="_blank">
            <FaGithub size={25} />
          </a>
          <a href="https://www.linkedin.com/in/max-hebert" target="_blank">
            <FaLinkedin size={25} />
          </a>
          <a href="mailto:maxhbrt@gmail.com" target="_blank">
            <MdEmail size={29} />
          </a>
        </div>
      </div>
    );
  }
}

export default Sidebar;
