import React, { useEffect,useState } from 'react'

import {MdTravelExplore} from 'react-icons/md'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css"
const SearchBar = () => {

    const [destination, setDestination] = useState("")
    const [checkIn, setCheckIn] = useState("")
    const [checkOut, setCheckOut] = useState("")
    const [adultCount, setAdultCount] = useState("")
    const [childCount, setchildCount] = useState("")

    const minDate = new Date()
    const maxDate = new Date()
    maxDate.setFullYear(maxDate.getFullYear() + 1)
  return (
<form className="-mt-4 p-3 bg-orange-400 rounded shadow-md grid grid-cols-4 lg:grid-cols-3 2xl:grid-cols-7  items-center gap-4 pl-60">


<div className="flex items-center flex-1 justify-center bg-white p-2">
  <MdTravelExplore size={25} className="mr-2" />
  <input
    placeholder="Where are you going?"
    className="text-md w-full focus:outline-none"
  />
</div>

<div className="flex bg-white px-2 py-1 gap-2">
  <label className="justify-center flex">
    Adults:
    <input
      className="w-full p-1 focus:outline-none font-bold"
      type="number"
      min={1}
      max={20}
    />
  </label>
  <label className="justify-center flex">
    Children:
    <input
      className="w-full p-1 focus:outline-none font-bold"
      type="number"
      min={0}
      max={20}
    />
  </label>
</div>

<div className="flex bg-white px-2 py-1 justify-center">
  <DatePicker
    selected={checkIn}
    onChange={(date) => setCheckIn(date)}
    selectsStart
    startDate={checkIn}
    endDate={checkOut}
    minDate={minDate}
    maxDate={maxDate}
    placeholderText="Check-in Date"
    className="w-full p-2 focus:outline-none"
  />
</div>

<div className="flex bg-white justify-center px-2 py-1">
  <DatePicker
    selected={checkOut}
    onChange={(date) => setCheckOut(date)}
    selectsEnd
    startDate={checkIn}
    endDate={checkOut}
    minDate={minDate}
    maxDate={maxDate}
    placeholderText="Check-out Date"
    className="w-full p-2 focus:outline-none" />
</div>
    <div className='flex gap-1 justify-center'>
        <button className='w-2/3 bg-blue-600 text-white h-full p-2 font-bold text-xl hover:bg-blue-500'>
            Search
        </button>
        <button className='w-1/3 bg-red-600 text-white h-full p-2 font-bold text-xl hover:bg-red-500'>
            Clear
        </button>
    </div>
</form>

  
  )
}

export default SearchBar