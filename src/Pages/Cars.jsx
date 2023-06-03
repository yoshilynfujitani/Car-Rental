import React, { useState } from 'react'

const Cars = () => {
  const[selectedCar, setselectedCar] = useState('');
  const[selectedBrand, setselectedBrand] = useState(null);  


  const handleBrandChange = (event) => {
    setselectedBrand(event.target.value);
    setselectedCar(null);
  };

  const handleCarSelection = (car) => {
    setselectedCar(car);
  };

  const availableCars = [
    {
      brand: 'Toyota',
      name: 'Fortuner',
      image: '../src/assets/toyota1.png',
      // Add other car details here
    },
    {
      brand: 'Toyota',
      name: 'Corrola',
      image: '../src/assets/toyota3.png',
      // Add other car details here
    },
    {
      brand: 'Toyota',
      name: 'Hiace',
      image: '../src/assets/toyota4.png',
      // Add other car details here
    },
    
    {
      brand: 'Ford',
      name: 'Everest',
      image: '../src/assets/Ford2.png',
      // Add other car details here
    },
    // Add more cars here
  ];

  const getAvailableCarsByBrand = (brand) => {
    return availableCars.filter((car) => car.brand === brand);
  };
  return (
    <div className='px-12 h-screen'>
    <h1 className='font-extrabold text-transparent text-xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>Select your car</h1>
    <select value={selectedBrand} onChange={handleBrandChange} className='border border-slate-400 rounded-md px-2 py-1 my-2'>
      <option value="">Select Brand</option>
      <option value="Toyota"onClick={handleBrandChange}>Toyota</option>
    </select>

    {selectedBrand ? (
      <div className="">
        <h2 className='font-extrabold text-transparent text-xl bg-clip-text bg-gradient-to-r from-pink-600 to-purple-400'>Available Cars</h2>
        <div className='flex flex-col'> 
        
        {getAvailableCarsByBrand(selectedBrand).map((car) => (
          <button key={car.name} onClick={() => handleCarSelection(car)} className='border border-slate-400 rounded-md my-1'>
            {car.name}
          </button>
        ))}
      </div>
      </div>
    ) : (<><h1 className='font-extrabold text-transparent text-4xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 py-10 text-center'>Your Gateway to hassle-free vacation!</h1>
    <img src="../src/assets/multiple.png" alt="" />
    <p className='text-center py-10 text-slate-400 font-thin'>Easily book quality cars at the comfort of your home</p></>)}

    {selectedCar && (
      <div className='mx-4 my-4'>
        <h2>About:</h2>
        <img src={selectedCar.image} alt={selectedCar.name} className='pb-16 '/>
        <p>Brand: {selectedCar.brand}</p>
        <p>Name: {selectedCar.name}</p>
        {/* Add other car details here */}
      </div>
    )}
  </div>
  )
}

export default Cars