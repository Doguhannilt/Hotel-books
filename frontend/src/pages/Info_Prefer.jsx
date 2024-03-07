import React from 'react';

import checkmark from '../Images/About Us/check.png';
import hand_shaking from '../Images/About Us/hand_shaking.jpg'

const Info_Prefer = () => {
  return (
    <div className=''>
      <div className='mt-20 text-center ml-4 text-3xl font-arial font-bold mb-4'>
      <span className=''>WHY US?</span>
      </div>
      <div className='grid grid-cols-2'>
      <ul className='list-none'>
        <li className='list-none ml-4'>
          <img src={checkmark} alt='Checkmark' className='w-5 h-5 inline-block mr-2 ' />
          At Luna Hotel, we pride ourselves on offering an unparalleled experience of elegance and comfort. From meticulously designed rooms to luxurious amenities, every detail is crafted to ensure your stay is nothing short of extraordinary.
          <br/><br/>
          <img src={checkmark} alt='Checkmark' className='w-5 h-5 inline-block mr-2' />
          Indulge in a culinary journey like no other at Luna Hotel. Our world-class restaurants and bars offer a diverse range of flavors, from gourmet dishes to local specialties. Discover a symphony of tastes that will tantalize your senses.
          <br/><br/>
          <img src={checkmark} alt='Checkmark' className='w-5 h-5 inline-block mr-2' />
          Our dedicated team is committed to providing you with the highest level of personalized service. From the moment you arrive to the time of your departure, we are here to cater to your every need, ensuring a seamless and memorable stay.         
          <br/><br/>
          <img src={checkmark} alt='Checkmark' className='w-5 h-5 inline-block mr-2' />
          Escape the hustle and bustle of everyday life at our serene spa. Immerse yourself in a world of relaxation and rejuvenation with our curated selection of treatments, designed to refresh both body and mind.
        </li>
      </ul>
      <img src={hand_shaking} className='mt-2 h-80 rounded ml-52 animate-slide-left'/>
      </div>
    </div>
  );
};

export default Info_Prefer;
