import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { hotelFacilities, hotelTypes } from '../config/hotel-options-congif';

const EditHotel = () => {
    axios.defaults.withCredentials = true;
    const { id } = useParams();
    const [hotel, setHotel] = useState(null);
  
    useEffect(() => {
      axios.get(`http://localhost:7000/my-hotels/edit-hotel/${id}`)
        .then(res => {
          setHotel(res.data);
        })
        .catch(err => {
          console.error(err);
        });
    }, [id]);
  
    if (!hotel) {
      return <div>Loading...</div>;
    }
  return (
    
        <div className='flex flex-col gap-4 pl-60 pr-60'>
          <h1 className="text-3xl font-bold mb-3 mt-10">Edit Your Hotel</h1>
    
          {/* Name field */}
          <label className="text-gray-700 text-sm font-bold flex-1">
            Name
            <input
              type="text"
              className="border rounded w-full py-1 px-2 font-normal"
              defaultValue={hotel.name}
            />
    
          </label>
    
          <div className="flex gap-4">
    
            {/* City field*/}
            <label className="text-gray-700 text-sm font-bold flex-1">
              City
              <input
                type="text"
                className="border rounded w-full py-1 px-2 font-normal"
                defaultValue={hotel.city}
              />
    
            </label>
    
            {/* Country field */}
            <label className="text-gray-700 text-sm font-bold flex-1">
              Country
              <input
                type="text"
                className="border rounded w-full py-1 px-2 font-normal"
                defaultValue={hotel.country}
              />
            </label>
          </div>
    
          <div>
    
            {/* Description field */}
            <label className="text-gray-700 text-sm font-bold flex-1">
              Description
              <textarea
                rows={10}
                className="border rounded w-full py-1 px-2 font-normal"
                defaultValue={hotel.description}
              />
            </label>
          </div>
    
          {/* Per Night field */}
          <label className="text-gray-700 text-sm font-bold max-w-[50%]">
            Price Per Night
            <input
              type="number"
              min={1}
              className="border rounded w-full py-1 px-2 font-normal"
              defaultValue={hotel.pricePerNight}
            />
          </label>
    
    
          {/* Star Rating field */}
          <label className="text-gray-700 text-sm font-bold max-w-[50%]">
            Star Rating
            <select
              className="border rounded w-full p-2 text-gray-700 font-normal"
              defaultValue={hotel.starRating}
            >
              <option value="" className="text-sm font-bold">
                Select as Rating
              </option>
              {[1, 2, 3, 4, 5].map((num) => {
                return (
                  <option key={num} value={num}>
                    {num}
                  </option>
                );
              })}
            </select>
          </label>

          <h2 className = "text-2xl font-bold mb-6 mt-4">Type</h2>
          <div className="grid grid-cols-5 gap-2">
        {hotelTypes.map((type, index) => (
            <label key= {index} >
                <input type="radio"  value = {type}
                className="hidden"/>
                <span>{type}</span>
            </label>))}
        </div>
        
        <h2 className="text-2xl font-bold mb-3 mt-6">Facilities</h2>
        <div className="grid grid-cols-5 gap-3">
            {hotelFacilities.map((facility, index) => (
                <label key={index} className="text-sm felx gap-1 text-gray-500 cursor-pointer">
                    <input type="checkbox" value={facility} />
                    {facility}</label>))}
        </div>

        <h2 className = "text-2xl font-bold mb-3 mt-6">Guests</h2>
        <div className='grid grid-cols-2 gap-5 p-6 '>
        <label className='text-gray-700 text-sm font-semibold'> Adults
        <input 
        type="number" 
        className='border rounded w-full py-2 px-3 font-normal' 
        min={1}/>
        </label>

        <label className='text-gray-700 text-sm font-semibold'> Children
        <input 
        type="number" 
        className='border rounded w-full py-2 px-3 font-normal' 
        min={0}/>
        </label>

    </div>
    <span className='flex justify-end'>                 
     <button type="submit" className='bg-blue-600 text-white p-2 font-bold hover:bg-blue-500 cursor-pointer text-2xl mb-10'>Update!</button>
    </span>
    </div>
      )
    }
    

export default EditHotel;
