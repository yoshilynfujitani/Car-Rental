import React from 'react'

const Home = () => {
  return (
    <div className='text-center py-10 px-12 h-screen'>
      <h1 className='font-extrabold text-transparent text-4xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>
      Rent Top-Quality Cars for the Lowest Possible Price
      </h1>
      <p className='py-4 text-slate-600'>RentEasy makes it quick for you to rent a car on the go!</p>
      <div className="">
        <button className='bg-gradient-to-r from-purple-400 to-pink-600 px-4 py-2 text-white rounded-full font-semibold hover:bg-transparent'>Browse Cars</button>
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
        <h1 className='font-extrabold text-transparent text-4xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>Lowest Possible Price in Town</h1>
      </div>
    </div>
  )
}

export default Home