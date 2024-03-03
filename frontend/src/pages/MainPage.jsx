import React, { useEffect, useState } from 'react';
import axios from 'axios';

const MainPage = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:7000/hotels/search'); 

        setPosts(response.data);
        console.log(posts) 
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;
 

  return (
    <div>
      {posts.map(post => (
        <div key={post.id} className="grid grid-cols-1 xl:grid-cols-[2fr_3fr] border border-slate-300 rounded-lg p-8 gap-8">
          <div className="w-full h-[250px]">
            <img src={post.imageUrls} alt={post.title} className="w-full h-full object-cover object-center" />
          </div>
          <div className="flex flex-col justify-between">
            {/* Burada post detayları gösterilebilir */}
                detaylar
          </div>
        </div>
      ))}
    </div>
  );
};

export default MainPage;