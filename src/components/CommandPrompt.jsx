// CommandPrompt.jsx
import { useState } from "react";
import { FaArrowLeft,FaCode } from "react-icons/fa";
import { motion } from "framer-motion";
import CoolMode from "./CoolMode";
import "./CommandPrompt.css";
import { useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import UTurnArrow from "./icons/UTurnArrow";
import { useRef } from "react";
import { FaUser, FaBriefcase,FaInfoCircle,FaSmile} from 'react-icons/fa';
import About from "./developerContent/About";
import Help from "./developerContent/Help";
import Contact from "./developerContent/Contact";
import Invalid from "./developerContent/Invalid";
import Projects from "./developerContent/Projects";
import Skills from "./developerContent/Skills";


const CommandPrompt = () => {
const [devOpened, setDevOpened] = useState(false);
const [greetVisible, setGreetVisible] = useState(true);
const commandContainerRef = useRef(null);
 const [commands, setCommands] = useState([]);
const inputRef = useRef(null);

  const handleFullScreen = () => {
    const commandPromptElement = document.getElementById("commandPrompt");
    if (commandPromptElement) {
      if (devOpened) {
        // If the command prompt is open, request fullscreen
        commandPromptElement.requestFullscreen();
      } else {
        // If closed, exit fullscreen
        document.exitFullscreen();
      }
    }
  };

  // Effect to add and remove the event listener for the Escape key
    useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setDevOpened(false); // Close command prompt when Escape is pressed
      }
    };

    // Add event listener for Escape key
    if (devOpened) {
      window.addEventListener("keydown", handleEscape);
      handleFullScreen(); // Enter full screen when opened
    }
    
    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener("keydown", handleEscape);
      if (devOpened) {
        document.exitFullscreen(); // Exit full screen if closing
        toast.success("Initialized Normal Mode");
      }
    };
  }, [devOpened]);

    useEffect(() => {
    if (devOpened) {
      inputRef.current.focus(); // Focus the input field when opened
    }
  }, [devOpened]);

   const handleBlur = () => {
    // Refocus the input if it loses focus
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

const handleCommand = (e) => {
  if (e.key === "Enter") {
    const command = e.target.value.trim()

    // Clear command
    if (command.toLowerCase() === "clear") {
      setCommands([]); // Clear all commands
      setGreetVisible(false);
      e.target.value = "";
      return;
    }

    // Exit command
    if (command.toLowerCase() === "exit") {
      setDevOpened(false); // Close the command prompt
      setCommands([]); // Reset commands when exiting
      setGreetVisible(true);
      e.target.value = "";
      return;
    }

    if (command) {
      setCommands((prevCommands) => [...prevCommands, command]);
    }
    e.target.value = ""; // Clear input after submission

    setTimeout(() => {
      if (commandContainerRef.current) {
        commandContainerRef.current.scrollTop = commandContainerRef.current.scrollHeight;
      }
    }, 0);
  }
};


  // Render the appropriate component based on the command
  const renderCommand = (command) => {
    switch (command.toLowerCase()) {
      case "help":
        return <div key={command} ><Help command={command}/></div>;
      case "about":
        return <div key={command} ><About command={command}/></div>;
      case "skills":
        return <div key={command} ><Skills command={command}/></div>;
      case "projects":
        return <div key={command} ><Projects command={command}/></div>;
      case "contact":
        return <div key={command} ><Contact command={command}/></div>;
      default:
        return <div key={command} ><Invalid command={command}/></div>;
    } 
  };

  return (
    <>
      <CoolMode>
        <button
          onClick={() => {
          setDevOpened(!devOpened); // Toggle devOpened state
          }}
          className="z-9 fixed bottom-10 right-12 p-3   rounded-full"
          id="button"
        >  
           <FaCode size={25} color="white"/>
           <div  className="shine-border1" id="dev_mode"> Dev Mode</div>
        </button>
      </CoolMode>

      {devOpened && (
        <CoolMode>
          <div className="z-30 fixed left-0 top-0 right-0 bottom-0 bg-black flex flex-col items-center justify-center" id="commandPrompt">
            <div id="mobile_message"> 
              <h6><FaInfoCircle style={{ marginRight: '5px' }} size={20}/> Hey! mobile users, </h6>
            <p>Use desktop or laptop for better experience!</p>
            </div>
            <div
              className="text-white text-4xl"
              key={devOpened}
              id="center_div"
              >
                  <div
                  id="terminal_head"
                  >    
                       <div id="three_dots">
                          <div id="dot1">
                          </div>
                          <div id="dot2">
                          </div>
                          <div id="dot3">
                          </div>
                       </div>

                        <div id="name">
                         <p>Roshan Khatiwada/Portfolio</p>
                       </div>

                       <button
                       onClick={() => {
                        setDevOpened(false);
                        setCommands([]); // Reset commands when command prompt is exited
                        setGreetVisible(true);
                        }}
                        className="text-2xl font-bold cursor-pointer hover:text-indigo-600 transition-colors flex items-center"
                        >
                        <UTurnArrow size={20} color="white" rotation={90} flip={false}/>
                        </button>

                  </div>

                  <div
                  id="terminal_body"
                  ref={commandContainerRef}
                  >
                     <div id="contents_present">
                          
                        <div id="greet">
                        {greetVisible && (
                            <>
                          <div id="upper">
                            <div id="div1">
                              <FaUser style={{ marginRight: '5px' }} />
                               roshan
                              </div>
                              <div id="div2">
                               <FaBriefcase style={{ marginRight: '5px' }} /> 
                               portfolio
                              </div>
                              <div id="div3">
                                 <FaSmile style={{ marginRight: '5px' }} /> 
                                  greet
                              </div>
                            </div>
                            <div id="lower">
                             <UTurnArrow size={20} color="#4284fb" rotation={270} flip={true}/>
                             <p>Hii There!</p> 
                            </div>  
                            </>
                        )}
                         </div>
                         <div id="CommandItems">
                             {commands.map((command, index) => (
                             <div key={index}>{renderCommand(command)}</div>
                             ))}
                         </div>
                     </div>
                     <div id="input_command">

                        <div id="upperPart">
                             <div id="div1">
                             <FaUser style={{ marginRight: '5px' }} />
                               roshan
                             </div>
                             <div id="div2">
                             <FaBriefcase style={{ marginRight: '5px' }} /> 
                               portfolio
                             </div>
                        </div>
                        <div id="lowerPart">
                             <div id="arrow">
                             <UTurnArrow size={20} color="#4284fb" rotation={270} flip={true}/>
                             </div>

                             <input type="text" placeholder="try 'help' to see all commands" id="commandInput" 
                             autocomplete="off"
                             ref={inputRef}
                              onKeyDown={handleCommand} 
                            onBlur={handleBlur}/>
                        </div>

                     </div>

                  </div>
           
            </div>
            
          </div>
        </CoolMode>
      )}
    </>
  );
};

export default CommandPrompt;
