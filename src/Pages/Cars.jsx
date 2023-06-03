import React, { useState } from 'react'
import { availableCars } from '../CarsData';

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
  const handlerandomcar = (car) =>{
    setselectedCar(car)
    setselectedBrand(car.brand)
  }
  const randomIndex = Math.floor(Math.random() * availableCars.length);

  const randomcar = availableCars[randomIndex];

  


  const getAvailableCarsByBrand = (brand) => {
    return availableCars.filter((car) => car.brand === brand);
  };
  return (
    <div className='px-12 '>
    <h1 className='font-extrabold text-transparent text-xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>Select your car</h1>
    <select value={selectedBrand} onChange={handleBrandChange} className='border border-slate-400 rounded-md px-2 py-1 my-2'>
      <option value="">Select Brand</option>
      <option value="Toyota"onClick={handleBrandChange}>Toyota</option>
      <option value="Ford"onClick={handleBrandChange}>Ford</option>
      <option value="Nissan"onClick={handleBrandChange}>Nissan</option>
    </select>

    {selectedBrand ? (
      <div className="">
        <h2 className='font-extrabold text-transparent text-xl bg-clip-text bg-gradient-to-r from-pink-600 to-purple-400'>Available Cars</h2>
        <div className='grid grid-cols-3 gap-1'> 
        
        {getAvailableCarsByBrand(selectedBrand).map((car) => (
          <button key={car.name} onClick={() => handleCarSelection(car)} className='border border-slate-400 rounded-md my-1 hover:text-transparent  bg-clip-text bg-gradient-to-r from-pink-600 to-purple-400 hover:border-slate-600'>
            {car.name}
          </button>
        ))}
      </div>
      </div>
    ) : (<><h1 className='font-extrabold text-transparent text-4xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 py-10 text-center'>Your Gateway to hassle-free vacation!</h1>
    <img src="../src/assets/multiple.png" alt="" />
    <p className='text-center py-10 text-slate-400 font-thin'>Easily book quality cars at the comfort of your home</p></>)}

    {selectedCar ?  (
      <div className='mx-4 my-4'>
        <img src={selectedCar.image} alt={selectedCar.name} className='pb-16 '/>
        <table className='table-auto  border-collapse w-full rounded-md'>
        <caption class="caption-bottom text-xs py-2">
          Details may change according to availability and Local Highway protocols.
        </caption>
        <thead>
          <tr >
            <th className='border border-slate-200 px-2 py-1'>Feature</th>
            <th className='border border-slate-200 px-2 py-1'>Description</th>
          </tr>
         </thead>
         <tbody>
          <tr>
            <td className='border border-slate-200 px-2 py-1'>Car Manufacturer</td>
            <td className='border border-slate-200 px-2 py-1'>{selectedCar.brand}</td>
          </tr>
          <tr>
            <td className='border border-slate-200 px-2 py-1'>Car Model</td>
            <td className='border border-slate-200 px-2 py-1'>{selectedCar.name}</td>
          </tr>
          <tr>
            <td className='border border-slate-200 px-2 py-1'>Passenger Count</td>
            <td className='border border-slate-200 px-2 py-1'>{selectedCar.pass}</td>
          </tr>
          <tr>
            <td className='border border-slate-200 px-2 py-1'>Transmission</td>
            <td className='border border-slate-200 px-2 py-1'>{selectedCar.trans}</td>
          </tr>
        </tbody>
        </table>
        {/* Recommendations */}
        <div className="cursor-pointer" onClick={() => handlerandomcar(randomcar)} >
          <h1 className='font-extrabold text-transparent text-xl bg-clip-text bg-gradient-to-r from-pink-600 to-purple-400 py-10'>You might also like</h1>
          <img src={randomcar.image} alt="" />
         <div className="flex">
         <h1 className='text-4xl'>{randomcar.brand}</h1>
         {randomcar.name}
         </div>
        </div>
      </div>
    ) : (<>
    <h1 className='text-center text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 py-10'>Click available cars to view details</h1>
    </>)}
  </div>
  )
}

export default Cars