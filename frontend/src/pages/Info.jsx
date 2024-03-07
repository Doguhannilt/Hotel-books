import React from 'react'



import Dou from '../Images/dou.jpg'
import introduction from '../Images/About Us/introduction.jpg'
import second_photo from '../Images/About Us/second_photo.jpg'

const Info = () => {
  return (
    <div>
      
      <div className='pl-60 pr-80'>
        <div className='grid grid-cols-2  mt-40'>
          <img src={introduction} className='mt-4 h-80 rounded animate-slide-right'/>
          <div className='ml-20 flex flex-col'>
            <span className='font-arial text-2xl '>
              Escape to a world of tranquility and luxury at  <a class="underline decoration-sky-500">Luna Hotel</a>, where every moment is designed to enchant and delight. Nestled in the heart of breathtaking landscapes, Luna offers a sanctuary of comfort and sophistication.
            </span>
            <span className='font-arial text-2xl  mt-6'>
            Step into a realm of timeless elegance where modern design meets classic charm. Our meticulously <a class="underline decoration-pink-500">designed rooms and suites offer unparalleled comfort</a>, each thoughtfully crafted to create a serene retreat.
            </span>
          </div>
        </div>

        <div className='grid grid-cols-2  gap-4 mt-40'>
         
          <div className='ml-48 flex flex-col'>
            <span className='font-arial text-2xl '>
              Escape to a world of tranquility and luxury at  <a class="underline decoration-sky-500">Luna Hotel</a>, where every moment is designed to enchant and delight. Nestled in the heart of breathtaking landscapes, Luna offers a sanctuary of comfort and sophistication.
            </span>
            <span className='font-arial text-2xl  mt-6'>
            Step into a realm of timeless elegance where modern design meets classic charm. Our meticulously <a class="underline decoration-pink-500">designed rooms and suites offer unparalleled comfort</a>, each thoughtfully crafted to create a serene retreat.
            </span>
          </div>
          <img src={second_photo} className='h-80 rounded animate-slide-left ml-40 pl-10 mt-20'/>
      </div>

    </div>
    </div>
  )
}

export default Info
