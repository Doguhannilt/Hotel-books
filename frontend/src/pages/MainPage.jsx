import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';
import { addHotel } from '../redux/features/counter/viewData';

// useState
import { useStatesForMainPage } from '../Hooks/Hooks';
import { Link, useNavigate, useParams } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';


const MainPage = () => {
  
  // Redux
  const dispatch = useDispatch();
  const { errorLogs } = useSelector(state => state.hotel);
  
  // useState
  const { posts, setPosts, loading, setLoading, filters, setFilters, isOpen, setIsOpen, hotel, setHotel} = useStatesForMainPage()
  
  // Navigation
  const navigation = useNavigate()
     
 

  // Search Form
  const handleSearch = (searchFilters) => {
    setFilters(searchFilters);
  };
  
    // Close Up POPUP
  const handleClosePopup = () => {
    setIsOpen(false);
  };

    // Fetching Data Using Axios
  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:7000/hotels/search', { params: filters });
      setPosts(response.data);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };


  useEffect(() => { 
    fetchData();
  }, [filters]); 

  axios.defaults.withCredentials = true;

  // id
  const { id } = useParams();

  // View Hotel and Redux app
  const viewHotelDetails = async (hotelId) => {
    try {
        const response = await axios.get(`http://localhost:7000/views/${hotelId}`);
        const hotel = response.data;
        dispatch(addHotel(hotel)); 
       
        navigation("/view/")
    } catch (error) {
        console.error("Hotel Error", error);
    }
};

      // Loading
  if (loading) return <div>Loading...</div>;

  return (
    <div>
    {isOpen && (
      <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center  z-50">
        <div className="bg-gray-300  border border-gray-400 p-8 rounded-lg shadow">
          <h2 className="text-2xl font-bold mb-4">Welcome to Lunahotel.com</h2>
          <p className="text-lg mb-4">Don't forget to visit <a href = "https://github.com/doguhannilt"><span className='text-blue-400 hover:text-blue-600'>github.com/Doguhannilt</span></a></p>
          <button onClick={handleClosePopup} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Close
          </button>
        </div>
      </div>
    )}
    <div>
      <SearchBar onSearch={handleSearch} />
      {posts
        // Filter && Search 
        .filter(post => {
          if (!Object.keys(filters).length) {
            return true;
          }
          return post.name === filters.name ||
                  post.city === filters.city ||
                  post.country === filters.country ||
                  post.starRating == filters.starRating;
        })
        .map(post => (
          // Post
          <div key={post.id} className="grid grid-cols-1 xl:grid-cols-[1fr_3fr] border  rounded-lg p-10 gap-8 pl-60 ">
            <div className="w-[500px] h-[240px] mt-10 ">
              <img src={post.imageUrls} alt={post.name} className="rounded w-full h-full object-cover object-center hover:transform hover:translate-x-2 hover:translate-y-2 duration-300" />
            </div>
            <div className="flex flex-col justify-start mt-12 " key={post.id}>
              <div className='text-3xl font-bold font-serif flex flex-col'>
                <div className='flex '>
                <h1>{post.name}</h1>
                <span className='ml-6'>-</span>
                      <button onClick={() => viewHotelDetails(post._id)} 
                      className="ml-8 bg-blue-600 text-white w-28 rounded text-base hover:w-40 hover:rounded-none hover:duration-500 duration-500 font-arial hover:bg-blue-500 ">
                        View Details
                      </button>
           
                </div>
               <div className='flex gap-4 mt-2'>
                <span className = "text-base font-normal">
                 <b>Adult Count:</b> {post.adultCount} -  <b>Child Count:</b> {post.childCount}
                 </span>
                <span className = "text-base font-normal">
                  <i>{post.city}</i>,{post.country}
                </span>
                <span className="text-base font-normal">
                  <b>Price Per Night:</b> <a>{post.pricePerNight}</a>
                </span>
              </div></div> 
              <span className='font-thin font-serif hover:text-gray-600'>
                  {post.description}
                </span>
              </div>
              <div>
            </div>
          </div>
        ))}
    </div>
    </div>
  );
};

export default MainPage;
