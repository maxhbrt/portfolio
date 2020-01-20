import React, {Component} from 'react';
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import me from "./me.JPG"
import './Landing.css';
import Sidebar from './Sidebar';
import {FaReact} from "react-icons/fa"
import {FaNode} from "react-icons/fa"
import {DiPostgresql} from "react-icons/di"
import {FaGit} from "react-icons/fa"
import {IoLogoJavascript} from "react-icons/io"
import {FaSass} from "react-icons/fa"
import {FaHtml5} from "react-icons/fa"
import {FaCss3} from "react-icons/fa"




class Landing extends Component{

  render(){
      return(
        <div className="whole">
          <div>
         <Sidebar/>
         </div>
          <div className="landing-back">
            <div className='intro'>
            <div className="hi">Hi, I'm Max.</div>
            <div className="im">I'm a full-stack web developer.</div>
            </div>
            <div className="tech-container">
            <div className="all-icons">
                     <div className="tech-icons"style={{color: "white"}}>
          <FaReact size={70}/>
          <FaNode size={80}/>
          <DiPostgresql size={80}/>
          </div>
          <div className="middle-icons"style={{color: "white"}}>
          <FaHtml5 size={58}/>
          <FaCss3 size={55}/>
         
          </div>
          <div className="tech-icons"style={{color: "white"}}>
          <FaGit size={65}/>
          <IoLogoJavascript size={63}/>
          <FaSass size={70}/>
          </div>
          </div>
          </div>
   
          </div>
  
          </div>
      )
  }
  
  
  }
  export default Landing;