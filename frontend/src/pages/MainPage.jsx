import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';

// useState
import { useStatesForMainPage } from '../Hooks/Hooks';


const MainPage = () => {
  
  const { posts, setPosts, loading, setLoading, filters, setFilters} = useStatesForMainPage()

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
  }, [filters]); // filters değiştiğinde fetchData() fonksiyonunu çalıştır

  const handleSearch = (searchFilters) => {
    setFilters(searchFilters);
  };

  if (loading) return <div>Loading...</div>;

  return (
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
            <div className="flex flex-col justify-end " key={post.id}>
              <div className='text-3xl font-bold font-serif flex flex-col'>
                <div className='flex '>
                <h1>{post.name}</h1>
                <span className='ml-6'>-</span>
                <button className = "ml-8 bg-blue-600 text-white font-thin rounded text-xl w-1/5 hover:bg-blue-500 mb-2">View Details</button>
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
              <span className='text-xl font-normal font-serif hover:text-gray-600'>
                  {post.description}
                </span>
              </div>
              <div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default MainPage;
