import React, { useState } from 'react'
import { Link } from 'react-router-dom';


const Navbar = () => {
  const [active, setactive] = useState(false);

  
  return (
    <div className="container px-4 py-4 ">

    <div className="hidden md:block lg:">
      <h1>Medium</h1>
    </div>



      {/* Mobile */}
      <div className="flex items-center  justify-between md:hidden">
        <div className="">
          <h1>Logo</h1>
        </div>
          <div className="text-center">
            <h1 className='font-bold text-2xl'>Rent<span className='text-purple-700'>Easy</span></h1>
          </div>
          <div className="">
            <button onClick={() =>setactive(prevactive => !prevactive)}>Menu</button>
          </div>
      </div>
      {active && 
      <div className="w-48 float-right mt-6">
        <ul className='flex flex-col'>
          <Link to="/" onClick={() =>setactive(prevactive => !prevactive)}>Home</Link>
          <Link to="/cars" onClick={() =>setactive(prevactive => !prevactive)}>Cars</Link>
          <Link to="/contact" onClick={() =>setactive(prevactive => !prevactive)}>Contact</Link>
        </ul>
      </div>}
    </div>
  )
}

export default Navbar