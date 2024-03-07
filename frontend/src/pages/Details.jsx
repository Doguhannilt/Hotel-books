import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

// ICONS
import { BiArrowFromRight } from "react-icons/bi";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationArrow } from "react-icons/fa";

// useState
import { useStateForViews } from '../Hooks/Hooks';
import { useToast } from '@chakra-ui/react';

// Toast
import { toast_info_saved } from '../toast/Toast';

// Redux
import { useSelector } from 'react-redux';
import Loading from './Loading';

const Details = () => {

  // Redux
  const hotel = useSelector(state => state.hotel.hotels[0]);

  // useState
  const { showTooltip, setShowTooltip, showTooltip_2, setShowTooltip_2, loading, setLoading } = useStateForViews();
  
  // Toast
  const toast = useToast()
  const Save = () => {
    toast_info_saved(toast)
  }
  
  useEffect(() => {
    setTimeout(() => setLoading(false), 3300);
  }, []);

    // Loading
  if (loading) {
    return <Loading />;
  }

  return (
    <div className='pl-80 pr-80'>
      <div className='grid grid-cols-2'>
          
          { /* NAME */}
        <h1 className='text-3xl font-bold font-arial pt-14 opacity-90'>H<span className='text-sky-400'>O</span>T<span className='text-sky-400'>E</span>L<span className='text-sky-400'>S</span></h1>
         
          { /* HOME BUTTON */}
        <div className='flex justify-end mt-12'>
          <Link to={"/"}>
            <button className='bg-green-600 text-white h-10 w-20 font-arial duration-300 hover:bg-green-800 rounded hover:-translate-x-2 hover:duration-300'>
              <BiArrowFromRight className='w-16 h-6' />
            </button>
          </Link>
        </div>
      </div>

          { /* DESCRIPTION */}
      <div className='border  h-full w-full bg-gradient-to-r from-blue-100 to-sky-200 opacity-90 shadow-md transition-all font-medium  rounded-lg font-arial pt-12 hover:text-black hover:rounded-none'>
        <span className='text-xl'>
        {hotel.description}
        </span>
      </div>

          { /* CHILD AND ADULT COUNT*/}
      <div>
        <div className='grid grid-cols-4 gap-10 font-bold font-arial mt-10 opacity-80 hover:text-black'>
          <div className="" onMouseEnter={() => setShowTooltip_2(true)} onMouseLeave={() => setShowTooltip_2(false)}>
            <span>A - {hotel.adultCount} C - {hotel.childCount}</span>
            {showTooltip_2 && (
              <div className="absolute text-gray-500 opacity-80">
                Adult - {hotel.adultCount} Child - {hotel.childCount}
              </div>
            )}
          </div>

            { /* PHONE NUMBER */}
          <div className='flex items-center'>
            <span className='mr-2'><FaPhoneAlt /></span>
            <span><a href="tel:+1234567890">123-456-7890</a></span>
          </div>

              { /* LOCATION - COUNTRY AND CITY */}
          <div className='flex items-center'>
          <span  className='mr-2'><FaLocationArrow/></span>
          <span> {hotel.country},<a href={`https://www.google.com/maps?q=${hotel.city}`} target="_blank" ><u>{hotel.city}</u></a></span>
          </div>

              { /* PRICE PER NIGHT */}
          <div className="" onMouseEnter={() => setShowTooltip(true)} onMouseLeave={() => setShowTooltip(false)}>
            <span>PPR: 12 €</span>
            {showTooltip && (
              <div className="absolute text-gray-500 opacity-80">
                Currency: Euro<br></br>
                Price Per Night: {hotel.pricePerNight}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>

  );
};

export default Details;
