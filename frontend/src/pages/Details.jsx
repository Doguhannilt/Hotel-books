import React, { useState } from 'react';
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

const Details = () => {
  
  const navigation = useNavigate()
  const { showTooltip, setShowTooltip, showTooltip_2, setShowTooltip_2 } = useStateForViews();
  const toast = useToast()

  const Save = () => {
    toast_info_saved(toast)
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
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </span>
      </div>

          { /* CHILD AND ADULT COUNT*/}
      <div>
        <div className='grid grid-cols-5 gap-10 font-bold font-arial mt-10 opacity-80 hover:text-black'>
          <div className="" onMouseEnter={() => setShowTooltip_2(true)} onMouseLeave={() => setShowTooltip_2(false)}>
            <span>A - 23 C - 23</span>
            {showTooltip_2 && (
              <div className="absolute text-gray-500 opacity-80">
                Adult - 23 Child - 23
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
          <span> Turkey,<a href="https://www.google.com/maps?q=Ankara" target="_blank" ><u>Ankara</u></a></span>
          </div>

              { /* PRICE PER NIGHT */}
          <div className="" onMouseEnter={() => setShowTooltip(true)} onMouseLeave={() => setShowTooltip(false)}>
            <span>PPR: 12 €</span>
            {showTooltip && (
              <div className="absolute text-gray-500 opacity-80">
                Currency: Euro<br></br>
                Price Per Night: 12
              </div>
            )}
          </div>
        </div>

              { /* TYPE */}
        <span>Budget</span>
       
              { /* SAVE BUTTON*/}
        <div className='flex justify-end '>
          <button 
          onClick={Save}
          className=' bg-blue-600 text-white h-10 mt-16 w-20 font-arial hover:bg-blue-800 rounded hover:rounded-none duration-500 hover:duration-500'>
            Save it!
          </button>
        </div>
      </div>
    </div>

  );
};

export default Details;
