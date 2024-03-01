import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'


const MyHotels = () => {
    axios.defaults.withCredentials = true
    const [hotels, setHotels] = useState([]);

    useEffect(() => {
        
      axios.get('http://localhost:7000/my-hotels', {
        headers: {
            
          },
      })
      .then(response => {
        setHotels(response.data);
        console.log(hotels) 
      })
      .catch(error => {
        // Hata durumunda burası çalışacak
        console.error('Error fetching hotels:', error);
      });
    }, []); 

  return (
    <div>
    <div className='space-y-5'>
      <span className='flex justify-between'>
        <h1 className = "text-3xl font-bold">My Hotels</h1>
        <Link to= "add-hotel" className = "flex bg-blue-600 text-white text-xl font-bold p-2 hover:bg-blue-500">Add Hotel</Link>
      </span>
    </div>
    </div>
  )
}

export default MyHotels
