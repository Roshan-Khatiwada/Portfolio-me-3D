import CoolMode from "./CoolMode";
import { FaUser, FaLaptopCode, FaProjectDiagram, FaEnvelope } from "react-icons/fa";

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
          className={`z-10 fixed inset-0 overflow-hidden
          ${menuOpened ? "pointer-events-auto" : "pointer-events-none"}`}
        >
          <div
            className={`absolute top-0 right-0 w-screen h-screen
            md:top-1/2 md:-translate-y-1/2 md:w-[88vw] md:max-w-xs md:h-[60%]
            bg-slate-900/45 backdrop-blur-md shadow-2xl
            md:rounded-l-2xl border border-white/20
            transition-transform duration-300 ease-out overflow-y-auto menu-scrollbar flex flex-col
            ${menuOpened ? "translate-x-0 md:mr-2" : "translate-x-full md:mr-0"}`}
          >
            <div className="h-full w-full flex flex-col items-center justify-center gap-3 p-4 md:p-5 text-white">
            <MenuButton 
              icon={<FaUser />} 
              label="About" 
              onClick={() => onSectionChange(0)}
            />
            <MenuButton 
              icon={<FaLaptopCode />} 
              label="Skills" 
              onClick={() => onSectionChange(1)}
            />
            <MenuButton 
              icon={<FaProjectDiagram />} 
              label="Projects" 
              onClick={() => onSectionChange(2)}
            />
            <MenuButton 
              icon={<FaEnvelope />} 
              label="Contact" 
              onClick={() => onSectionChange(3)}
            />
            </div>
          </div>
        </div>
      </CoolMode>
    </>
  );
};

const MenuButton = (props) => {
  const { label, onClick, icon } = props;
  
  return (
    <button
      onClick={onClick}
      className={`w-auto text-center text-lg md:text-lg font-semibold cursor-pointer flex items-center justify-center gap-3
      rounded-xl px-3 py-2 text-white/95 hover:text-white
      bg-white/0 hover:bg-white/15 border border-transparent hover:border-white/20
      transition-all duration-200
       `}
    >
      {icon}
      {label}
    </button>
    
  );
};

