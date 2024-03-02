import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';


import React from 'react'

const EditHotel = () => {
    const { id } = useParams();
    const [hotel, setHotel] = useState({
      name: '',
      description: '',
      city:'',
      country:'',
      type:'',
      pricePerNight: '',
      adultCount:'',
      childCount:'',
      starRating:''
    });
  
    useEffect(() => {
      axios.get(`http://localhost:7000/my-hotels/${id}`)
        .then(response => {
          setHotel(response.data);
        })
        .catch(error => {
          console.error('Error fetching hotel:', error);
        });
    }, [id]);
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setHotel({
        ...hotel,
        [name]: value,
      });
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        await axios.put(`http://localhost:7000/my-hotels/${id}`, hotel);
        alert('Hotel updated successfully!');
      } catch (error) {
        console.error('Update hotel error ->', error);
      }
    };
  return (
    <div>
      
    </div>
  )
}

export default EditHotel
