import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import { FiSun, FiMoon } from "react-icons/fi";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { nightMode, setNightMode } = useContext(AppContext);
  const [isOpen, setIsOpen] = useState(false);
  const handleMode = () => {
    setNightMode((prev) => !prev);
  };
  const handleNavbar = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <>
      <header
        className={`h-[6vh] fixed bg-[#4a4948] w-full flex items-center px-5 text-white z-10`}
      >
        <nav className="flex justify-between items-center w-full h-full">
          <Link to="/">
            <h1 className="font-bold">Sai Chaitanya</h1>
          </Link>
          <div onClick={handleMode} className="cursor-pointer ml-auto">
            {nightMode ? <FiSun /> : <FiMoon />}
          </div>
          <ul className="items-center hidden lg:flex ml-5 h-full">
            <Link
              to="/about"
              className="hover:bg-gray-600 h-full flex items-center px-3"
            >
              <li>About</li>
            </Link>
            <Link
              to="/skills"
              className="hover:bg-gray-600 h-full flex items-center px-3"
            >
              <li>Skills</li>
            </Link>
            <Link
              to="/projects"
              className="hover:bg-gray-600 h-full flex items-center px-3"
            >
              <li>Projects</li>
            </Link>
          </ul>
          <GiHamburgerMenu
            className="ml-5 lg:hidden cursor-pointer"
            onClick={handleNavbar}
          />
        </nav>
        <div
          className={`w-[60vw] flex flex-col absolute top-0 ${
            isOpen ? "right-[0]" : "right-[-100%]"
          } min-h-[100vh] text-black bg-slate-300 ease-in-out duration-1000 lg:hidden`}
        >
          <RxCross2
            className="self-end mt-5 mr-5 cursor-pointer"
            onClick={handleNavbar}
          />
          <ul className=" px-5 font-[600] flex flex-col gap-5 w-full mt-3">
            <Link to="/about" className="w-full hover:bg-gray-600 py-1 px-3">
              <li
                onClick={() => {
                  setIsOpen(false);
                }}
                className="w-full"
              >
                About
              </li>
            </Link>
            <Link to="/skills" className="w-full hover:bg-gray-600 py-1 px-3">
              <li
                onClick={() => {
                  setIsOpen(false);
                }}
                className="w-full"
              >
                Skills
              </li>
            </Link>
            <Link to="/projects" className="w-full hover:bg-gray-600 py-1 px-3">
              <li
                onClick={() => {
                  setIsOpen(false);
                }}
                className="w-full"
              >
                Projects
              </li>
            </Link>
          </ul>
        </div>
      </header>
    </>
  );
};

export default Navbar;
