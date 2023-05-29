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
    
    <div className="container px-4 py-4  bg-white/30 backdrop-blur-sm sticky top-0">

    <div className="relative hidden md:block lg:">
      <h1>Medium</h1>
    </div>



      {/* Mobile */}
      <div className="w-full flex items-center  justify-between md:hidden">
        <div className="">
          <h1>Logo</h1>
        </div>
          <div className="text-center">
            <h1 className='font-bold text-2xl'>Rent<span className='text-purple-700'>Easy</span></h1>
          </div>
          <div className="">
            <button onClick={() =>setactive(prevactive => !prevactive)}>{ active ? <BsXLg className='w-6 h-6'/> : <BsList className='w-6 h-6'/>}</button>
          </div>
      </div>
      {active && 
      <div className="absolute right-4   mt-6 bg-purple-400 rounded-md z-10 ">
        <ul className='flex flex-col text-md text-white font-bold '>
          <Link to="/" onClick={() =>setactive(prevactive => !prevactive)} className='transition gap-1 flex items-center  hover:bg-purple-700 px-4 py-4 rounded-tl-md rounded-tr-md'><BsFillHouseFill className=''/>Home</Link>
          <Link to="/cars" onClick={() =>setactive(prevactive => !prevactive)} className='transition gap-1 flex items-center hover:bg-purple-700 px-4 py-4'><FaCar className=''/>Cars</Link>
          <Link to="/contact" onClick={() =>setactive(prevactive => !prevactive)} className='transition  gap-1 flex items-center hover:bg-purple-700 px-4 py-4  rounded-bl-md rounded-br-md'><BsFillChatRightFill className=''/>Contact</Link>
        </ul>
      </div>}
    </div>
  )
}

export default Navbar