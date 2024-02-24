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

  // Logout 
const handleLogout = async () => {
  try {
    const response = await Axios.post(
      'http://localhost:7000/logout',
      {},
      {
        withCredentials: true
      }
    );
    console.log(response.data.message); // Success message
    
    // If it's succesful
    setIsLoggedIn(false);
  } catch (error) {
    console.error('Logout failed:', error);
  }
};



  return (
    <div>
      <span className="">
        {isLoggedIn ? (
          <>
          <div className = "flex bg-sky-500/90">
            <Link 
            to="/bookings" 
            className="flex bg-sky-500/90 items-center  px-3 font-bold hover:bg-gray-100">
              My Bookings
            </Link>
            <Link 
            to="/hotels" 
            className="flex bg-sky-500/90 items-center  px-3 font-bold hover:bg-gray-100">
              My Hotels
            </Link>
            <button  to={"users/register"}
             onClick={handleLogout}
            className="flex bg-sky-500/90 items-center px-3 font-bold hover:bg-gray-100">
              Log out
            </button></div>
          </>
        ) : (
          <Link 
          to={"users/register"} 
         
          className="flex bg-sky-500/90 items-center px-3 font-bold hover:bg-gray-100">
            Sign In
          </Link>
        )}
      </span>
    </div>
  );
};

export default Header;
