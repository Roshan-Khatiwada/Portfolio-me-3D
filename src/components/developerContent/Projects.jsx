import React from 'react';
import "./developer.css";
import { FaArrowLeft, FaJs, FaNode } from "react-icons/fa";
import UTurnArrow from "/src/components/icons/UTurnArrow";
import { FaUser, FaInfoCircle, FaBriefcase, FaTools, FaProjectDiagram, FaEnvelope, FaExclamationTriangle, FaHandPeace, FaQuestionCircle } from 'react-icons/fa';
import { FaReact, FaCube, FaNodeJs, FaCode, FaGithub, FaCss3,FaJava,FaHtml5,FaFileCode} from 'react-icons/fa';
import { SiTailwindcss } from 'react-icons/si';
import { SiJquery } from "react-icons/si";
import { DiCode } from 'react-icons/di';
const Projects = ({ command }) => {
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
              <FaProjectDiagram style={{ marginRight: '5px' }} />
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
     
       <div id='projects_lower'>
       
        <div id='projects_row'>
          
             <div id='projects_ui'>
                     <img src='/projects/chatbox.png'/>
             </div>
              <a href='https://github.com/SumanShrestha14/ChatBox' target="_blank" rel="noopener noreferrer">
             <div id='projects_info'>
                    <div id='project_name'>
                        ChatBox
                    </div>
                     <div id='project_details'>
                       It is a chatting applictaion with features of audio calling, video calling and reels.
                    </div>
                     <div id='language_used'>
                     <FaFileCode size={25} color='#b3be62'/>
                     <FaJava size={30} color='#75ba75'/>
                     
                    </div>
             </div>
            </a>
        </div>
        <div id='projects_row'>
          
             <div id='projects_ui'>
                     <img src='/projects/quiz.png'/>
             </div>
             <a href='https://github.com/Roshan-Khatiwada/Quiz-App-Android' target="_blank" rel="noopener noreferrer">
             <div id='projects_info'>
               
                    <div id='project_name'>
                        Quiz
                    </div>
                    
                     <div id='project_details'>
                        It is a quiz game Android application that offers a seamless experience.
                    </div>
                     <div id='language_used'>
                     <FaFileCode size={25} color='#b3be62'/>
                     <FaJava size={30} color='#75ba75'/>
                     
                    </div>
             </div>
             </a>
        </div>
         <div id='projects_row'>
          
             <div id='projects_ui'>
                     <img src='/projects/portfolio1.png'/>
             </div>
            <a href='https://roshankhatiwada.vercel.app/' target="_blank" rel="noopener noreferrer">
             <div id='projects_info'>
               
                    <div id='project_name'>
                        Portfoio
                    </div>
                   
                     <div id='project_details'>
                       This is my portfolio which you have currently viewing.
                    </div>
                     <div id='language_used'>
                     <FaReact size={25} color='#b3be62'/>
                     <FaNodeJs size={25} color='#75ba75'/>
                     <SiTailwindcss size={25} color='#fec76f'/>
                    </div>
             </div>
              </a>
        </div>
        <div id='projects_row'>
          
             <div id='projects_ui'>
                     <img src='/projects/wordscramble.png'/>
             </div>
             <a href='https://react-word-scramble-game.vercel.app/' target="_blank" rel="noopener noreferrer">
             <div id='projects_info'>
               
                    <div id='project_name'>
                        Word Scramble
                    </div>
                   
                     <div id='project_details'>
                       It is a word scramble game that enhances vocabulary and problem-solving skills.
                    </div>
                     <div id='language_used'>
                     <FaReact size={25} color='#b3be62'/>
                     
                    </div>
             </div>
              </a>
        </div>
        <div id='projects_row'>
          
             <div id='projects_ui'>
                     <img src='/projects/voicetonote.png'/>
             </div>
                <a href='https://voice-to-text-note.vercel.app/' target="_blank" rel="noopener noreferrer">
             <div id='projects_info'>
               
                    <div id='project_name'>
                        Voice-Text Converter
                    </div>
                   
                     <div id='project_details'>
                       It is a web application in which you can make a text by speaking.
                    </div>
                     <div id='language_used'>
                     <FaReact size={25} color='#b3be62'/>
                     <FaNodeJs size={25} color='#75ba75'/>
                    </div>
             </div>
              </a>
        </div>
        <div id='projects_row'>
          
             <div id='projects_ui'>
                     <img src='/projects/youtube.png'/>
             </div>
             <a href='https://youtube-clone-rouge-seven.vercel.app/' target="_blank" rel="noopener noreferrer">
             <div id='projects_info'>
               
                    <div id='project_name'>
                        Youtube Clone
                    </div>
                   
                     <div id='project_details'>
                       It is a frontend of youtube. You will enjoy using it.
                    </div>
                     <div id='language_used'>
                     <FaHtml5 size={25} color='#b3be62'/>
                     <FaCss3 size={25} color='#75ba75'/>
                     <FaNodeJs size={25} color='#fec76f'/>
                    </div>
             </div>
              </a>
        </div>
        <div id='projects_row'>
          
          <div id='projects_ui'>
                  <img src='/projects/tudocuments1.png'/>
          </div>
           <a href='https://tudocuments.com' target="_blank" rel="noopener noreferrer">
          <div id='projects_info'>
                 <div id='project_name'>
                     TU Documents
                 </div>
                  <div id='project_details'>
                    It is a official website of TU documents Pvt. Ltd. Created by me.
                 </div>
                  <div id='language_used'>
                  <FaHtml5 size={25} color='#b3be62'/>
                  <FaCss3 size={25} color='#75ba75'/>
                  <FaJs size={25} color='#75ba75'/>
                  
                 </div>
          </div>
         </a>
     </div>
        <div id='projects_row'>
          
             <div id='projects_ui'>
                     <img src='/projects/baghchaal.png'/>
             </div>
            <a href='https://bagh-chaal-six.vercel.app/' target="_blank" rel="noopener noreferrer">
             <div id='projects_info'>
               
                    <div id='project_name'>
                        Tigers moving
                    </div>
                   
                     <div id='project_details'>
                       It is a tiger moving game which is more popular by name 'Bagh Chaal' in nepal.
                    </div>
                     <div id='language_used'>
                     <FaHtml5 size={25} color='#b3be62'/>
                     <FaCss3 size={25} color='#75ba75'/>
                     <FaNodeJs size={25} color='#fec76f'/>
                    </div>
             </div>
              </a>
        </div>
        <div id='projects_row'>
          
          <div id='projects_ui'>
                  <img src='/projects/typemore.png'/>
          </div>
           <a href='https://type-more.vercel.app' target="_blank" rel="noopener noreferrer">
          <div id='projects_info'>
                 <div id='project_name'>
                     TypeMore
                 </div>
                  <div id='project_details'>
                    It is an advanced typing web app to test your english typing speed.
                 </div>
                  <div id='language_used'>
                  <FaHtml5 size={25} color='#b3be62'/>
                  <FaCss3 size={25} color='#75ba75'/>
                  <FaJs size={25} color='#75ba75'/>
                  <SiJquery size={25} color="#0769ad" />
                  
                 </div>
          </div>
         </a>
     </div>
      </div>
    </div>
  );
};

export default Projects;
