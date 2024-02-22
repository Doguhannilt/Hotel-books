import { Link } from 'react-router-dom';
import Axios from 'axios';
import React, { useEffect, useState } from 'react';



const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const checkTokenValidity = async () => {
      try {
        const response = await Axios.post(
          'http://localhost:7000/check',
          {},
          {
            withCredentials: true
          }
        );
        if (response.data.valid) {
          setIsLoggedIn(true);
        }
      } catch (error) {
        console.error('Token validity check failed:', error);
      }
    };

    checkTokenValidity();
  }, []);
  return (
    <div>
      <span className="">
        {isLoggedIn ? (
          <>
          <div className = "flex bg-sky-500/90">
            <Link 
            to="/profile" 
            className="flex bg-sky-500/90 items-center  px-3 font-bold hover:bg-gray-100">
              Profile
            </Link>
            <Link 
            to="/settings" 
            className="flex bg-sky-500/90 items-center  px-3 font-bold hover:bg-gray-100">
              Settings
            </Link>
            <button  
            className="flex bg-sky-500/90 items-center px-3 font-bold hover:bg-gray-100">
              Logouts
            </button></div>
          </>
        ) : (
          <Link 
          to="/sign-in" 
          className="flex bg-sky-500/90 items-center px-3 font-bold hover:bg-gray-100">
            Sign In
          </Link>
        )}
      </span>
    </div>
  );
};

export default Header;
