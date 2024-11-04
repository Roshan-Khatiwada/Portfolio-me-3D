import React from 'react';
import "./developer.css";
import { FaArrowLeft } from "react-icons/fa";
import UTurnArrow from "/src/components/icons/UTurnArrow";
import { FaUser, FaInfoCircle, FaBriefcase, FaTools, FaProjectDiagram, FaEnvelope, FaExclamationTriangle, FaHandPeace, FaQuestionCircle, FaCheckCircle} from 'react-icons/fa';
import { FaGithub, FaLinkedin, FaFacebook, FaInstagram } from 'react-icons/fa';
import { FaUpwork } from "react-icons/fa6";
const About = ({ command }) => {
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
              <FaInfoCircle style={{ marginRight: '5px' }} />
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
     
       <div id='lower_about'>
           <div id='about_first_div'>
                 <div id='profile_pic' className='shine-border'>
                    <img src='/projects/me.png'/>
                 </div>
                  <div id='name_and_post'>
                        <div id='about_name'>
                         Roshan Khatiwada
                         <FaCheckCircle style={{ marginLeft: '5px' }} color='green' id='logo1'/>
                        </div>
                          <div id='about_post'>
                          Web & Android developer
                        </div>
                 </div>
           </div>
           <div id='about_second_div'>
            Hii there! I'm Roshan Khatiwada, a passionate full-stack developer eager to build innovative web and android applications.
           </div>
           <div id='about_third_div'>
                <a href="https://github.com/Roshan-Khatiwada" target="_blank" rel="noopener noreferrer">
                <FaGithub size={30} />
                 <p>@github</p> 
            </a>
            <a href="https://www.linkedin.com/in/roshan-khatiwada-144a77307/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin size={30} />
                <p>@linkedin</p>
            </a>
            <a href="https://www.upwork.com/freelancers/~016ecd378bff17945a" target="_blank" rel="noopener noreferrer">
                <FaUpwork size={30} />
                <p>@upwork</p>
            </a>
            <a href="https://www.facebook.com/profile.php?id=100085853364426" target="_blank" rel="noopener noreferrer">
                <FaFacebook size={30} />
               <p>@facebook</p>
            </a>
            <a href="https://www.instagram.com/roshan2005.8.19/" target="_blank" rel="noopener noreferrer">
                <FaInstagram size={30} />
                <p>@instagram</p>
            </a>
           </div>
      </div>
    </div>
  );
};

export default About;
