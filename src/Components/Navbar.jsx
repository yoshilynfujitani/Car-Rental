import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { BsList } from "react-icons/bs";
import { BsXLg } from "react-icons/bs";
import { BsFillHouseFill } from "react-icons/bs";
import { BsFillChatRightFill } from "react-icons/bs";
import { FaCar } from "react-icons/fa";



const Navbar = () => {
  const [active, setactive] = useState(false);


  
  return (
    
    <div className="container px-4 py-4  bg-white/30 backdrop-blur-md sticky top-0 shadow-sm">

    <div className="relative hidden md:flex justify-between items-center">
      <div className="flex ">
      <Link to="/"> <h1 className='font-bold text-2xl'>Rent<span className='text-purple-700'>Easy</span></h1></Link>
      </div>
      <div className="flex items-center space-x-4">
      <Link to="/"> <h1 className='transition text-md hover:text-transparent  bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 '>Home</h1></Link>
      <Link to="/cars"> <h1 className='transition text-md hover:text-transparent  bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600  '>Cars</h1></Link>
      <Link to="/contact"> <h1 className='transition text-md hover:text-transparent  bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600  '>Contact Us</h1></Link>
      </div>
    </div>



      {/* Mobile */}
      <div className="w-full flex items-center  justify-between md:hidden">
        <div className="">
          <h1>Logo</h1>
        </div>
          <div className="text-center">
           <Link to="/"> <h1 className='font-bold text-2xl'>Rent<span className='text-purple-700'>Easy</span></h1></Link>
          </div>
          <div className="">
            <button onClick={() =>setactive(prevactive => !prevactive)}>{ active ? <BsXLg className='w-6 h-6'/> : <BsList className='w-6 h-6'/>}</button>
          </div>
      </div>
      {active && 
      <div className="absolute right-4   mt-6 border border-purple-400 bg-white rounded-md z-10 w-40">
        <ul className='flex flex-col text-md text-purple-400 font-bold '>
          <Link to="/" onClick={() =>setactive(prevactive => !prevactive)} className='transition gap-1 flex items-center  hover:bg-purple-700 px-4 py-4 rounded-tl-md rounded-tr-md hover:text-white'><BsFillHouseFill className=''/>Home</Link>
          <Link to="/cars" onClick={() =>setactive(prevactive => !prevactive)} className='transition gap-1 flex items-center hover:bg-purple-700 px-4 py-4 hover:text-white'><FaCar className=''/>Cars</Link>
          <Link to="/contact" onClick={() =>setactive(prevactive => !prevactive)} className='transition  gap-1 flex items-center hover:bg-purple-700 px-4 py-4  rounded-bl-md rounded-br-md hover:text-white'><BsFillChatRightFill className=''/>Contact</Link>
        </ul>
      </div>}
    </div>
  )
}

export default Navbar