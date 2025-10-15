import { motion } from "framer-motion";
import { useAtom } from "jotai";
import { currentProjectAtom, projects } from "./Projects";
import { useState } from "react";
import emailjs from "emailjs-com";
import toast, { Toaster } from "react-hot-toast";
import { FaEye } from "react-icons/fa";
import { FaEnvelope,FaCode } from "react-icons/fa";
import DynamicIconCloud from "./DynamicIconCloud";
import './MobileResponsive.css';
import TypingText from './TypingText';
import { BsDisplay } from "react-icons/bs";
import { FaPaperPlane } from 'react-icons/fa'; 
import CoolMode from "./CoolMode";
import { SocialMedia } from './SocialMedia';
const Section = (props) => {
  const { children, mobileTop } = props;

  return (
    <motion.section
      className={`
  h-screen w-screen p-8 max-w-screen-2xl mx-auto
  flex flex-col items-start 
  ${mobileTop ? "justify-start md:justify-center" : "justify-center"}
  `}
      initial={{
        opacity: 0,
        y: 50,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          duration: 1,
          delay: 0.6,
        },
      }}
    >
      {children}
    </motion.section>
  );
};

export const Interface = (props) => {
  const { setSection } = props;
  // Initialize based on detected pointer capability so the first click doesn't change wrapper
  const [enableCoolMode, setEnableCoolMode] = useState(() => {
    if (typeof navigator !== "undefined") {
      const hasTouchPoints = navigator.maxTouchPoints && navigator.maxTouchPoints > 0;
      const isTouchCapable = ("ontouchstart" in window) || hasTouchPoints;
      // enable cool mode for non-touch (usually mouse) devices by default
      return !isTouchCapable;
    }
    return false;
  });

  // helper to ignore events that originate from interactive controls (buttons, links, inputs, etc.)
  const isInteractiveTarget = (target) => {
    try {
      return !!(target && target.closest && target.closest("button, a, input, textarea, select, label"));
    } catch {
      return false;
    }
  };

  const handlePointerDown = (e) => {
    // ignore interactions that originate from form controls or links to avoid accidental remounts/submits
    if (isInteractiveTarget(e.target)) return;

    // React's PointerEvent provides pointerType ('mouse' | 'touch' | 'pen')
    // Add small fallback checks in case pointerType is not available from the event
    const pointerType =
      e.pointerType ||
      (e.nativeEvent && e.nativeEvent.pointerType) ||
      (e.type === "mousedown" ? "mouse" : e.type === "touchstart" ? "touch" : undefined);

    if (pointerType === "mouse" && !enableCoolMode) {
      // only update when value actually changes to avoid unnecessary remounts
      setEnableCoolMode(true);
    } else if (pointerType === "touch" && enableCoolMode) {
      setEnableCoolMode(false);
    }
  };

  const content = (
    <div
      className="flex flex-col items-center w-screen"
      onPointerDown={handlePointerDown}
    >
      <div className="socialmediaicons">
        <SocialMedia />
      </div>
      <br />
      <AboutSection setSection={setSection} />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  );

  return enableCoolMode ? <CoolMode>{content}</CoolMode> : content;
};

const AboutSection = (props) => {
  const { setSection } = props;
  const handleViewCV = () => {
    // Replace 'CV_URL' with the direct URL to your CV file
    const cvUrl = "https://resume-roshan-khatiwada.vercel.app/";
    window.open(cvUrl, "_blank");
  };
  return (
    <Section mobileTop>
    

      <h4 id="helwol" className="flex flex-col text-xl md:text-2xl  text-gray-500 font-bold leading-snug">
        Hello world 👋,
        <p className="flex flex-row py-2">
          <span className="text-2xl md:text-3xl bg-purple-500 rounded-lg rounded-tr-none rounded-br-none text-white  px-2">
            I'm
          </span>

          <span className="bg-white text-purple-500 px-2 text-3xl md:text-4xl  rounded-lg rounded-tl-none rounded-bl-none font-[700]  uppercase">
            Roshan Khatiwada
          </span>
        </p>
      </h4>
     <motion.p
      className="text-lg text-gray-100 mt-4 md:w-[44%] bg-[rgba(0,28,48,.4)] rounded-lg py-4 max-h-[370px] overflow-y-auto"
      initial={{
        opacity: 0,
        y: 25,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 1,
        delay: 1.5,
      }}
      style={{
        scrollbarWidth: 'thin', // Firefox
      }}
    >
      <div
        style={{
          height: '100%', // Ensure the div takes the full height
          overflowY: 'auto', // Enable vertical scrolling
          scrollbarWidth: 'thin', // Firefox
        }}
        className="custom-scrollbar"
      >
        <TypingText text="  I am a Full Stack Developer from Nepal, passionate 
        about turning ideas into dynamic websites and applications. With expertise 
        in both front-end and back-end technologies, I craft seamless user experiences 
        and efficient systems. I thrive on continuous learning and embrace new challenges
         in the ever-evolving tech landscape. Let's connect and collaborate to create something 
         extraordinary together!
         "/>

      </div>

      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px; /* Width of the scrollbar */
        }

        .custom-scrollbar::-webkit-scrollbar-thumb {
          background-color: #d1d5db; /* Tailwind's gray-300 */
          border-radius: 10px; /* Round corners */
        }

        .custom-scrollbar::-webkit-scrollbar-track {
          background-color: #1f2937; /* Tailwind's gray-800 */
        }
      `}</style>
    </motion.p>




      <section className="flex gap-8">
        <motion.button
          onClick={() => setSection(3)}
          className={`bg-purple-500 text-white py-4 px-8 flex space-x-2 justify-center items-center
      rounded-lg font-bold text-lg  mt-8 hover:bg-purple-400  transition-all duration-300 ease-in-out`}
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
            delay: 2,
          }}
          id="buttonAboutSec"
        >
        <FaEnvelope  className="mr-2" />
          Contact
        </motion.button>
        <motion.button
          onClick={handleViewCV}
          className={`bg-purple-500 text-white py-4 px-8 
      rounded-lg font-bold text-lg mt-8 flex space-x-2 justify-center items-center text-center hover:bg-purple-400  transition-all duration-300 ease-in-out`}
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
            delay: 2,
          }}

          id="buttonAboutSec"
        >
          <FaEye />
          <span> Resume</span>
        </motion.button>
      </section>
    </Section>
  );
};



const SkillsSection = () => {
  return (
    <Section>
      <motion.div className="w-full flex flex-col md:flex-row gap-8" whileInView={"visible"}>
        {/* Left Section: Skills Text */}
<div className="w-full md:w-1/2 px-4 " id="div1">
  <h2 className="text-[40px] font-bold uppercase text-white">Skills</h2>
  <motion.p  className="text-lg text-gray-100 mt-4 md:w-[90%] bg-[rgba(0,28,48,.4)] rounded-lg px-4  py-4 max-h-[300px] overflow-y-auto custom-scrollbar"
       initial={{
          opacity: 0,
          y: 25,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 1,
          delay: 1.5,
        }}
  >
  <TypingText text="    As a Full Stack Developer, I’m skilled in both front-end and back-end development, 
  with expertise in JavaScript, React, Node.js, and Android app development using Java and Kotlin. I build 
  dynamic, responsive web and mobile applications, while efficiently managing databases like Firebase and SQL.
   With a strong foundation in HTML, CSS, and modern frameworks like Next.js and Tailwind CSS, I create visually 
   appealing, user-friendly interfaces that deliver seamless experiences. 
I focus on delivering seamless, high-performance user experiences."> 
 
    </TypingText> 
  </motion.p>

  <style jsx>{`
    .custom-scrollbar {
      scrollbar-width: thin; /* Firefox */
      scrollbar-color: #a5b5c9 transparent; /* Firefox */
    }

    .custom-scrollbar::-webkit-scrollbar {
      width: 8px; /* Width of the scrollbar */
    }

    .custom-scrollbar::-webkit-scrollbar-track {
      background: transparent; /* Background of the scrollbar track */
    }

    .custom-scrollbar::-webkit-scrollbar-thumb {
      background-color: #a5b5c9; /* Color of the scrollbar thumb */
      border-radius: 10px; /* Rounded corners of the scrollbar thumb */
    }

    .custom-scrollbar::-webkit-scrollbar-thumb:hover {
      background-color: #7b8a9b; /* Darker color on hover */
    }
  `}</style>
</div>

        {/* Right Section: Icon Cloud Animation */}
        <div className="w-full md:w-1/2 flex items-center justify-center" id="iconcloud" >
          <DynamicIconCloud>

          </DynamicIconCloud>
        </div>
      </motion.div>
    </Section>
  );
};

const ProjectsSection = () => {
  const [currentProject, setCurrentProject] = useAtom(currentProjectAtom);

  const nextProject = () => {
    setCurrentProject((currentProject + 1) % projects.length);
  };

  const previousProject = () => {
    setCurrentProject((currentProject - 1 + projects.length) % projects.length);
  };

  return (
    <Section>
      <div className="flex w-full h-full gap-8 items-center justify-center">
        <button
          className="hover:text-indigo-600 transition-colors text-white"
          onClick={previousProject}
        >
          ← Previous
        </button>
        <h2 className="text-3xl font-bold uppercase text-white">Projects</h2>
        <button
          className="hover:text-indigo-600 transition-colors text-white"
          onClick={nextProject}
        >
          Next →
        </button>
      </div>
    </Section>
  );
};

const ContactSection = () => {
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!message || !name || !email) {
      toast.error("Please fill all fields");
      return;
    }

      if (!emailPattern.test(email)) {
    toast.error("Please enter a valid email address");
    return;
  }
  const loadingToastId = toast.loading("Sending email...");
    emailjs
      .send(
        "service_1z64r0a",
        "template_x8pseep",
        {
          from_name: name,
          from_email: email,
          to_name: "Roshan",
          message: message,
        },
        "oRrBFmZ_seCJ5wyXM"
      )
      .then((response) => {
        toast.success("Email sent successfully:", {  id: loadingToastId });

         setName("");
        setEmail("");
        setMessage("");
      })
      .catch((error) => {
        toast.error(`Error sending email: ${error}`, { id: loadingToastId });
        console.error("Error sending email:", error);
      })
  };
  return (
    <Section>
      <Toaster />
      <h2 className="text-3xl font-bold uppercase text-white">Contact me</h2>
      <div className="shine-border mt-8 p-8 rounded-md bg-white bg-opacity-40 w-96 max-w-full" id="contactSec">
        <form
        >
          <label
            htmlFor="name"
            className="font-medium text-gray-900 block mb-1"
          >
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            value={name} // Controlled input
            onChange={(e) => setName(e.target.value)}
            required
            placeholder="Enter your name"
            className="block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#a755f7] p-3 bg-white outline-none"
          />
          <label
            htmlFor="email"
            className="font-medium text-gray-900 block mb-1 mt-8"
          >
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Enter your email"
            className="block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#a755f7] p-3 bg-white outline-none"
          />
          <label
            htmlFor="email"
            className="font-medium text-gray-900 block mb-1 mt-8"
          >
            Message
          </label>
          <textarea
            name="message"
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            placeholder="Enter your message here"
            className="resize-none h-32 block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#a755f7] p-3 bg-white outline-none"
          />
          <button
          type="submit"
            onClick={(e) => {
              handleSubmit(e);
            }}
             className="bg-purple-500 text-white py-4 px-8 rounded-lg font-bold text-lg mt-10 flex justify-center items-center space-x-2 hover:bg-purple-400 transition-all duration-300 ease-in-out"
>
  <FaPaperPlane /> 
  <span>Submit</span> 
</button>
        </form>
      </div>
    </Section>
  );
};



