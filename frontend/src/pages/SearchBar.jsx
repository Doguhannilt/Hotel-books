import React, { useState } from 'react';

// ICONS
import { MdAirlineSeatReclineExtra, MdAirlineStops, MdGppGood, MdTravelExplore } from 'react-icons/md';

// src/toasts/SearchBarToast
import {toast_info_search_b} from '../toast/Toast.js';

// useToast - Chakra UI
import { useToast } from '@chakra-ui/react';

// Custom Hooks
import { useStatesForSearchBar } from '../Hooks/Hooks.jsx';


const SearchBar = ({ onSearch }) => {
  
  const { name, setName, city, setCity, country, setCountry, starRating, setStarRating } = useStatesForSearchBar();
  const toast = useToast();

  const handleSearch = () => {
    onSearch({ name, city,country,starRating})
    toast_info_search_b(toast);}
  


  return (
    <form className="-mt-4 p-3 bg-orange-400 rounded shadow-md grid grid-cols-4 lg:grid-cols-3 2xl:grid-cols-7 items-center gap-4 pl-80">
      <div className="flex items-center flex-1 justify-center bg-white p-2 rounded">
       
         {/* NAME */}
        <MdTravelExplore size={25} className="mr-2" />
        <input
          placeholder="Where are you going?"
          className="text-md w-full focus:outline-none"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

         {/* CITY */}
      <div className="flex items-center flex-1 justify-center bg-white p-2 rounded">
        <MdAirlineSeatReclineExtra size={25} className="mr-2" />
        <input
          placeholder="Which City?"
          className="text-md w-full focus:outline-none"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
      </div>

         {/* COUNTRY */}
      <div className="flex items-center flex-1 justify-center bg-white p-2 rounded">
        <MdAirlineStops size={25} className="mr-2" />
        <input
          placeholder="Which Country?"
          className="text-md w-full focus:outline-none"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        />
      </div>
      
        {/* STAR RATING */}
      <div className="flex items-center flex-1 justify-center bg-white p-2 rounded">
        <MdGppGood size={25} className="mr-2" />
        <input
          type='range'
          placeholder="Star Rating"
          min={1}
          max={10}
          className="text-md w-full focus:outline-none"
          value={starRating}
          onChange={(e) => setStarRating(e.target.value)}
        />
      </div>

        {/* BUTTONS */}
      <div className='flex gap-1 justify-center'>
        <button
          type="button"
          onClick={handleSearch} 
          className='w-2/3 bg-blue-600 text-white h-full p-2 font-bold text-xl hover:bg-blue-500'>
          Search
        </button>
        {/* I don't want to add any function for Clear Button, because when user click it, the button will refresh the page so it's working */}
        <button 
        className='bg-red-600 text-white h-full p-2 font-bold text-xl lg:w-full md:w-full hover:bg-red-500'>
          Clear
        </button>

      </div>
    </form>
  );
}

export default SearchBar;
