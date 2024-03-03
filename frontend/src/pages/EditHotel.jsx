import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { hotelFacilities, hotelTypes } from '../config/hotel-options-congif';

const EditHotel = () => {
    axios.defaults.withCredentials = true;
    const { id } = useParams();

    // useState
    const [hotel, setHotel] = useState(null);

    useEffect(() => {
        // my-hotels/edit-hotel/:id
        axios.get(`http://localhost:7000/my-hotels/edit-hotel/${id}`)
            .then(res => {
                setHotel(res.data);
            })
            .catch(err => {
                console.error(err);
            });
    }, [id]);

    const handleSubmit = (event) => {
        event.preventDefault();
        // Form submit && my-hotels/update-hotel/:id
        axios.put(`http://localhost:7000/my-hotels/update-hotel/${id}`, hotel)
            .then(res => {
                console.log(res.data);
            })
            .catch(err => {
                console.error(err);
            });
    };

        // Loading 
    if (!hotel) {
        return <div>Loading...</div>;
    }

    return (
      
        <div className='flex flex-col gap-4 pl-60 pr-60'>
           {/* These field comes from src/pages/MyHotels.jsx */}
            <h1 className="text-3xl font-bold mb-3 mt-10">Edit Your Hotel</h1>
            <form onSubmit={handleSubmit}>
                {/* Name field */}
                <label className="text-gray-700 text-sm font-bold flex-1">
                    Name
                    <input
                        type="text"
                        className="border rounded w-full py-1 px-2 font-normal"
                        defaultValue={hotel.name}
                        onChange={(e) => setHotel({ ...hotel, name: e.target.value })}
                    />
                </label>
                <div className="flex gap-4">
                    {/* City field*/}
                    <label className="text-gray-700 text-sm font-bold flex-1">
                        City
                        <input
                            type="text"
                            className="border rounded w-full py-1 px-2 font-normal"
                            defaultValue={hotel.city}
                            onChange={(e) => setHotel({ ...hotel, city: e.target.value })}/>
                    </label>
                    {/* Country field */}
                    <label className="text-gray-700 text-sm font-bold flex-1">
                        Country
                        <input
                            type="text"
                            className="border rounded w-full py-1 px-2 font-normal"
                            defaultValue={hotel.country}
                            onChange={(e) => setHotel({ ...hotel, country: e.target.value })}/>
                    </label>
                </div>
                <div>
                    {/* Description field */}
                    <label className="text-gray-700 text-sm font-bold flex-1">
                        Description
                        <textarea
                            rows={10}
                            className="border rounded w-full py-1 px-2 font-normal"
                            defaultValue={hotel.description}
                            onChange={(e) => setHotel({ ...hotel, description: e.target.value })}/>
                    </label>
                </div>
                {/* Per Night field */}
                <label className="text-gray-700 text-sm font-bold max-w-[50%]">
                    Price Per Night
                    <input
                        type="number"
                        min={1}
                        className="border rounded w-full py-1 px-2 font-normal"
                        defaultValue={hotel.pricePerNight}
                        onChange={(e) => setHotel({ ...hotel, pricePerNight: e.target.value })}/>
                </label>
                {/* Star Rating field */}
                <label className="text-gray-700 text-sm font-bold max-w-[50%]">
                    Star Rating
                    <select
                        className="border rounded w-full p-2 text-gray-700 font-normal"
                        defaultValue={hotel.starRating}
                        onChange={(e) => setHotel({ ...hotel, starRating: e.target.value })}
                    >
                        <option value="" className="text-sm font-bold">
                            Select as Rating
                        </option>
                        {[1, 2, 3, 4, 5].map((num) => {
                            return (
                                <option key={num} value={num}>
                                    {num}
                                </option>
                            );
                        })}
                    </select>
                </label>
                {/* Submit button */}
                <button type="submit" className='bg-blue-600 text-white p-2 font-bold hover:bg-blue-500 cursor-pointer text-2xl mb-10'>Update!</button>
            </form>
        </div>
    );
};

export default EditHotel;
