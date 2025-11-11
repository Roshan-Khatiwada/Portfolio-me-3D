import React from 'react';
import "./developer.css";
import { FaArrowLeft } from "react-icons/fa";
import UTurnArrow from "/src/components/icons/UTurnArrow";
import { FaUser, FaInfoCircle, FaBriefcase, FaTools, FaProjectDiagram, FaEnvelope, FaExclamationTriangle, FaHandPeace, FaQuestionCircle,FaCheckCircle } from 'react-icons/fa';
import { FaGithub, FaLinkedin, FaFacebook, FaInstagram,FaPhoneAlt } from 'react-icons/fa';
import { FaUpwork } from "react-icons/fa6";
import { FaMobileAlt } from 'react-icons/fa'; // Mobile icon
import { MdEmail } from 'react-icons/md'; // Email icon

const Contact = ({ command }) => {
  return (
    <div id='main'>
      <div id='upper'>
        <div id='div_commands'>
          <div id='div1'>
              <FaUser style={{ marginRight: '5px' }} />
              roshan
          </div>
          <div id='div2'>
              <FaBriefcase style={{ marginRight: '5px' }} />
              portfolio
          </div>
          <div id='div3'>
              <FaEnvelope style={{ marginRight: '5px' }} />
              {command}
          </div>
          </div>
           <div id='command_entered'>
              <div id='icon'>
                  <UTurnArrow size={20} color="#4284fb" rotation={270} flip={true}/>
              </div>
              <div id='command'>
                 {command}
              </div>
          </div>
      </div>
     
       <div id='contact_lower'>
           <a style={{}}>
              <FaMobileAlt size={40}  color='#6dbfb8' />
              <p style={{ margin: 0 }}>+977 9776776254</p>
            </a>
            <a  style={{ }}>
              <MdEmail size={40}  color='#fec76f' />
              <p style={{ margin: 0 }}>riteshrooson@gmail.com</p>
            </a>
            <a href="https://github.com/Roshan-Khatiwada" target="_blank" rel="noopener noreferrer">
                <FaGithub size={40} color='#75ba75' />
                 <p>@github/roshankhatiwada</p> 
            </a>
            <a href="https://www.linkedin.com/in/roshan-khatiwada-144a77307/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin size={40} color='#be95be'/>
                <p>@linkedin/roshankhatiwada</p>
            </a>
            <a href="https://www.upwork.com/freelancers/~016ecd378bff17945a" target="_blank" rel="noopener noreferrer">
                <FaUpwork size={40} color='#9c96de'/>
                <p>@upwork/roshankhatiwada</p>
            </a>
            <a href="https://www.facebook.com/roshan.khatiwada.134417" target="_blank" rel="noopener noreferrer">
                <FaFacebook size={40} color='#4284fb'/>
               <p>@facebook/roshankhatiwada</p>
            </a>
            <a href="https://www.instagram.com/roshan2005.8.19/" target="_blank" rel="noopener noreferrer">
                <FaInstagram size={40} color='#f64d58'/>
                <p>@instagram/roshankhatiwada</p>
            </a>
      </div>
    </div>
  );
};

export default Contact;
