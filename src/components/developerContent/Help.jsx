import React from 'react';
import "./developer.css";
import { FaArrowLeft } from "react-icons/fa";
import UTurnArrow from "/src/components/icons/UTurnArrow";
import { FaUser, FaInfoCircle, FaBriefcase, FaTools, FaProjectDiagram, FaEnvelope, FaExclamationTriangle, FaHandPeace, FaQuestionCircle } from 'react-icons/fa';
const Help = ({ command }) => {
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
              <FaQuestionCircle style={{ marginRight: '5px' }} />
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
     
       <div id='lower'>
          <div id='div_lower'>
            <div id='command_text'>about</div>
            <div id='command_details'>Show my bio information</div>
          </div>
          <div id='div_lower'>
            <div id='command_text'>skills</div>
            <div id='command_details'>List out my main skills</div>
          </div>
          <div id='div_lower'>
             <div id='command_text'>projects</div>
            <div id='command_details'>List out my all projects</div>
          </div>
          <div id='div_lower'>
            <div id='command_text'>contact</div>
            <div id='command_details'>Show my contact details</div>
          </div>
          <div id='div_lower'>
            <div id='command_text'>clear</div>
            <div id='command_details'>Clear the terminal</div>
          </div>
          <div id='div_lower'>
            <div id='command_text'>exit</div>
            <div id='command_details'>Exit the terminal mode</div>
          </div>
      </div>
    </div>
  );
};

export default Help;
