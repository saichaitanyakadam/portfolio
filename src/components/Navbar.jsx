import React, { useContext, useState } from 'react'
import { AppContext } from '../context/AppContext'
import { FiSun,FiMoon } from "react-icons/fi";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import { Link } from 'react-router-dom';

const Navbar = () => {
    const {nightMode,setNightMode}=useContext(AppContext)
    const [isOpen,setIsOpen]=useState(false)
    const handleMode=()=>{
        setNightMode(prev=>!prev)
    }
    const handleNavbar=()=>{
        setIsOpen(prev=>!prev)
    }
  return (
    <>
    <header className={`h-[6vh] fixed bg-[#4a4948] w-full flex items-center px-5 text-white `}>
        <nav className='flex justify-between items-center w-full'>
            <Link to="/">
            <h1>Sai Chaitanya</h1>
            </Link>
            <div onClick={handleMode} className='cursor-pointer ml-auto'>
                    {nightMode?<FiSun />:<FiMoon />}
                </div>
            <ul className='items-center hidden lg:flex gap-5 ml-5'>
                
                <li><Link to="/about">About</Link></li>
                <li><Link to="/skills">Skills</Link></li>
                <li><Link to="/projects">Projects</Link></li>
               
            </ul>
            <GiHamburgerMenu className='ml-5 lg:hidden' onClick={handleNavbar} />
            
        </nav>
        <div className={`w-[60vw] flex flex-col absolute top-0 ${isOpen?"right-[0]":"right-[-100%]"} min-h-[100vh] text-black bg-slate-300 ease-in-out duration-1000`}>
          <RxCross2 className='self-end mt-5 mr-5' onClick={handleNavbar}/>
          <ul className=' px-5 font-[600] flex flex-col gap-5'>
                <li onClick={()=>{setIsOpen(false)}}><Link to="/about">About</Link></li>
                <li  onClick={()=>{setIsOpen(false)}}><Link to="/skills">Skills</Link></li>
                <li  onClick={()=>{setIsOpen(false)}}><Link to="/projects">Projects</Link></li>
          </ul>
       </div>
    </header>
   
       </>
  )
}

export default Navbar