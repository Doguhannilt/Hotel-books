import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';

// useState
import { useStatesForMainPage } from '../Hooks/Hooks';
import { Link, useNavigate, useParams } from 'react-router-dom';


const MainPage = () => {
  
  const { posts, setPosts, loading, setLoading, filters, setFilters, isOpen, setIsOpen} = useStatesForMainPage()
  const navigation = useNavigate()
     {/* useState */}
  const [ hotel, setHotel] = useState()

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

  const { id } = useParams();



  // Tıklanan otelin ID'sini alarak detayları getiren fonksiyon
  const viewHotelDetails = async (hotelId) => {
    try {
      const response = await axios.get(`http://localhost:7000/views/${hotelId}`);
      console.log(response)
      setHotel(response.data)
      console.log(hotel._id)
      console.log(hotelId)
      navigation()
      
    } catch (error) {
      console.error("Otel bilgisini getirirken bir hata oluştu:", error);
    }
  };

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
              <img src={post.imageUrls} alt={post.name} className=" rounded w-full h-full object-cover object-center hover:transform hover:translate-x-2 hover:translate-y-2 duration-300" />
            </div>
            <div className="flex flex-col justify-start mt-12 " key={post.id}>
              <div className='text-3xl font-bold font-serif flex flex-col'>
                <div className='flex '>
                <h1>{post.name}</h1>
                <span className='ml-6'>-</span>
                      <button onClick={() => viewHotelDetails(post._id)} 
                      className="ml-8 bg-blue-600 text-white font-thin rounded text-xl  hover:bg-blue-500 mb-2">
                        View Details
                      </button>
           
                </div>
               <div className='flex gap-4'>
                <span className = "text-xl font-normal">
                 <b>Adult Count:</b> {post.adultCount} -  <b>Child Count:</b> {post.childCount}
                 </span>
                <span className = "text-xl font-normal">
                  <i>{post.city}</i>,{post.country}
                </span>
                <span className="text-xl font-normal">
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
