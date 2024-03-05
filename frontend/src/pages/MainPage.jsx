import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';


const MainPage = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({});


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
          <div key={post.id} className="grid grid-cols-1 xl:grid-cols-[2fr_3fr] border border-slate-300 rounded-lg p-8 gap-8">
            <div className="w-full h-[250px]">
              <img src={post.imageUrls} alt={post.name} className="w-full h-full object-cover object-center" />
            </div>
            <div className="flex flex-col justify-between" key={post.id}>
              details
            </div>
          </div>
        ))}
    </div>
  );
};

export default MainPage;
