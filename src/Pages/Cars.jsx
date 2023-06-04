import React, { useState } from 'react'
import { availableCars } from '../CarsData';
import { Link } from 'react-router-dom';

const Cars = () => {
  const [selectedCar, setSelectedCar] = useState('');
const [selectedBrand, setSelectedBrand] = useState('');

const handleBrandChange = (event) => {
  setSelectedBrand(event.target.value);
  setSelectedCar(null);
};

const handleCarSelection = (car) => {
  setSelectedCar(car);
};

const generateRandomCar = () => {
  let randomIndex;
  let randomCar;
  do {
    randomIndex = Math.floor(Math.random() * availableCars.length);
    randomCar = availableCars[randomIndex];
  } while (randomCar === selectedCar);
  return randomCar;
};

const [handleRandomCar, setHandleRandomCar] = useState(generateRandomCar());

console.log(handleRandomCar);

const handlerandomcar = (car) => {
  setSelectedBrand(car.brand);
  setSelectedCar(car);
  setHandleRandomCar(generateRandomCar());
};

const getAvailableCarsByBrand = (brand) => {
  return availableCars.filter((car) => car.brand === brand);
};




  return (
    <div className='px-12 min-h-screen container'>
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
        <div className='grid grid-cols-4 gap-1 lg:grid-flow-row'> 
        
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
        <div className="flex justify-center py-4">
        <Link to="/contact"><button className='bg-gradient-to-r from-purple-400 to-pink-600 px-4 py-2 text-white rounded-full font-semibold hover:bg-transparent'>Interested? Contact Us!</button></Link>
        </div>
       
        {/* Recommendations */}
        <div className="cursor-pointer pb-10" onClick={() => handlerandomcar(handleRandomCar)} >
          <h1 className='font-extrabold text-transparent text-xl bg-clip-text bg-gradient-to-r from-pink-600 to-purple-400 py-10'>You might also like</h1>
        <div className="transition shadow-md rounded-md px-4 py-2 hover:shadow-xl">
        <img src={handleRandomCar.image} alt="" />
         <div className="flex gap-1 ">
         <h1 className='text-transparent text-xl bg-clip-text bg-gradient-to-r from-pink-600 to-purple-400'>{handleRandomCar.brand}</h1>
         <p className='self-end'>{handleRandomCar.name}</p>
         </div>
         <p className='text-md'>{handleRandomCar.trans} Transmission</p>
        </div>
        </div>
        <div className="hidden lg:block">Hello</div>
      </div>
    ) : (<>
    <h1 className='text-center text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 py-10'>Click available cars to view details</h1>
    </>)}
  </div>
  )
}

export default Cars