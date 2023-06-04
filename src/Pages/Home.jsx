import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='text-center py-10 px-12 min-h-screen'>
      <h1 className='font-extrabold text-transparent text-4xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>
      Rent Top-Quality Cars for the Lowest Possible Price
      </h1>
      <p className='py-4 text-slate-600'>RentEasy makes it quick for you to rent a car on the go!</p>
      <div className="">
        <Link to="/cars"><button className='bg-gradient-to-r from-purple-400 to-pink-600 px-4 py-2 text-white rounded-full font-semibold hover:bg-transparent'>Browse Cars</button></Link>
      </div>
      {/* Hero Section */}
      <div className="py-2">
        <div className="">
            <img src="../src/assets/toyota3.png" alt="" />
        </div>
      </div>
    {/* First Sub Hero */}
      <div className="">
        <div className="">

        </div>
        <h1 className='font-extrabold text-transparent text-2xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>Lowest Possible Price in Town</h1>
        <p>Pick from a variety of quality cars that are regularly maintained</p>
        <img src="../src/assets/home1.png" alt="" />
      </div>

      {/* Contact form */}

      <div className=" shadow-lg flex flex-col items-center justify-center rounded-md py-4 my-4">
        <h1 className='text-transparent  bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 font-bold text-xl'>Want to stay Updated?</h1>
        <div className="flex py-4 gap-x-2">
            <input type="email" className='rounded-md text-md px-2 py-1 border border-slate-200' placeholder='Enter your Email' />
            <button className='text-white bg-gradient-to-r from-purple-400 to-pink-600 px-2 py-2 rounded-md'>Subscribe</button>
        </div>
        <p className='text-xs text-slate-400'>The subscription is free and can be cancelled anytime</p>
      </div>
    </div>
  )
}

export default Home