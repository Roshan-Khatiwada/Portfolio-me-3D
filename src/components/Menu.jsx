import CoolMode from "./CoolMode";
import { FaUser, FaLaptopCode, FaProjectDiagram, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

export const Menu = (props) => {
  const { onSectionChange, menuOpened, setMenuOpened } = props;

  return (
    <>
      <CoolMode>
        <button
          onClick={() => setMenuOpened(!menuOpened)}
          className="z-20 fixed top-2 right-4 md:top-12 md:right-12 p-3 bg-purple-500 w-11 h-11 rounded-md"
        >
          <div
            className={`bg-white h-0.5 rounded-md w-full transition-all ${
              menuOpened ? "rotate-45  translate-y-0.5" : ""
            }`}
          />
          <div
            className={`bg-white h-0.5 rounded-md w-full my-1 ${
              menuOpened ? "hidden" : ""
            }`}
          />
          <div
            className={`bg-white h-0.5 rounded-md w-full transition-all ${
              menuOpened ? "-rotate-45" : ""
            }`}
          />
        </button>
      </CoolMode>
      <CoolMode>
        <div
          className={`z-10 fixed top-0 right-0 bottom-0 bg-slate-500 transition-all overflow-hidden flex flex-col
          ${menuOpened ? " w-full md:w-80" : "w-0"}`}
        >
          <motion.div className="flex-1 flex items-start justify-center flex-col gap-6 p-8 text-white"
            key={menuOpened}
            initial={{ opacity: 0, x: 65 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.1 }}
          >
            <MenuButton 
              icon={<FaUser />} 
              label="About" 
              onClick={() => onSectionChange(0)} 
              menuOpened={menuOpened}
            />
            <MenuButton 
              icon={<FaLaptopCode />} 
              label="Skills" 
              onClick={() => onSectionChange(1)} 
              menuOpened={menuOpened}
            />
            <MenuButton 
              icon={<FaProjectDiagram />} 
              label="Projects" 
              onClick={() => onSectionChange(2)} 
              menuOpened={menuOpened}
            />
            <MenuButton 
              icon={<FaEnvelope />} 
              label="Contact" 
              onClick={() => onSectionChange(3)} 
              menuOpened={menuOpened}
            />
          </motion.div>
        </div>
      </CoolMode>
    </>
  );
};

const MenuButton = (props) => {
  const { label, onClick, icon, menuOpened } = props;
  
  return (
    <button
      onClick={onClick}
      className={`text-2xl font-bold cursor-pointer hover:text-indigo-600 transition-colors flex items-center gap-3 
       `}
    >
      {icon}
      {label}
    </button>
    
  );
};

