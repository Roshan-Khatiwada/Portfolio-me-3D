import React from 'react';
import "./developer.css";
import { FaArrowLeft } from "react-icons/fa";
import { motion } from 'framer-motion';
import UTurnArrow from "/src/components/icons/UTurnArrow";
import { FaUser, FaInfoCircle, FaBriefcase, FaTools, FaProjectDiagram, FaEnvelope, FaExclamationTriangle, FaHandPeace, FaQuestionCircle } from 'react-icons/fa';
import { FaReact, FaCube, FaNodeJs, FaCode, FaGithub, FaCss3,FaJava,FaHtml5} from 'react-icons/fa';
import AnimatedPercent from './AnimatedPercent';
const skills = [
  {
    level: 80,
    icon: <FaReact size={40} className="text-blue-500" />,
  },
  {
    level: 60,
    icon: <FaJava size={40} className="text-green-500" />,
  },
  {
    level: 75,
    icon: <FaNodeJs size={40} className="text-green-600" />,
  },
  {
    level: 50,
    icon: <FaHtml5 size={40} className="text-blue-600" />,
  },
  {
    level: 85,
    icon: <FaGithub size={40} className="text-gray-800" color='#b3be62' />,
  },
  {
    level: 90,
    icon: <FaCss3 size={40} className="text-blue-500" />,
  },
];


const Skills = ({ command }) => {
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
              <FaTools style={{ marginRight: '5px' }} />
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
            {/* Skill Levels Section */}
        <div id='skills_lower_div'>
          {skills.map((skill, index) => (
            <motion.div
              className="skill-container flex justify-between items-center"
              key={index}
              initial={{ opacity: 0, y: 0 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0, delay: index * 0 }}
            >
              <div className="flex items-center space-x-2 pt-5">
                {skill.icon}

              </div>

              {/* Skill Level Bar */}
              <div className="skill-level w-full  rounded-full mt-2 ml-4"
              style={{ backgroundColor:'#c0c0c0'}}
              >
                <motion.div
                  className="h-3 bg-green rounded-full"
                  style={{ width: `${skill.level}%`, backgroundColor:'#6773ff'}}
                  initial={{ scaleX: 0, originX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 1, delay: index * 0.1}}
                />
              </div>
              <div className="percentage text-white font-bold ml-4">
                <AnimatedPercent level={skill.level} /> {/* Pass skill.level here */}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
