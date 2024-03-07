import React from 'react';

const Footer = () => {
  return (
    <div className='absolute'>
     <div className="absolute bottom-0 w-full bg-sky-500/90 py-3 ">
     <div className="container mx-auto flex justify-between items-center">
       <span className="text-3xl text-white font-bold tracking-tight">
         LunaHolidays.com
       </span>
       <span className="text-white font-bold tracking-tight flex gap-4">
         <p className="cursor-pointer">Privacy Policy</p>
         <p className="cursor-pointer">Terms of Service</p>
       </span>
     </div>
   </div>
   </div>

   
  );
};

export default Footer;
