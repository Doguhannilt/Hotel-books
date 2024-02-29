import React from 'react'
import { useFormContext } from 'react-hook-form'

const GuestsSection = () => {
    const {register, formState: {errors}} = useFormContext()
  return (
    <div>
      <h2 className = "text-2xl font-bold mb-3 mt-6">Guests</h2>
      <div className='grid grid-cols-2 gap-5 p-6 '>
        <label className='text-gray-700 text-sm font-semibold'> Adults
        <input 
        type="number" 
        className='border rounded w-full py-2 px-3 font-normal' 
        min={1}
        {...register("adultCount",{
            required: "This field is required"
        })}/>
        </label>

        <label className='text-gray-700 text-sm font-semibold'> Children
        <input 
        type="number" 
        className='border rounded w-full py-2 px-3 font-normal' 
        min={0}
        {...register("childCount",{
            required: "This field is required"
        })}/>
        </label>
    </div>
    </div>
  )
}

export default GuestsSection
