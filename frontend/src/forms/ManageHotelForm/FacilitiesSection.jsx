import { useFormContext } from "react-hook-form";
import { hotelFacilities } from "../../config/hotel-options-congif";

import React from 'react'

const FacilitiesSection = () => {
    const {register, formState:{errors}} = useFormContext()
  return (
    <div>
      <h2 className="text-2xl font-bold mb-3 mt-6">Facilities</h2>
      <div className="grid grid-cols-5 gap-3">
        {hotelFacilities.map((facility, index) => (
            <label key={index} className="text-sm felx gap-1 text-gray-500 cursor-pointer">
                <input type="checkbox" value={facility} {...register("facilities", {
                    validate: (facilities) => {
                        if(facilities && facilities.length > 0 ) {true} else {return "At least one facility is required"}
                    }
                })}/>
                {facility}
            </label>
        ))}
      </div>
      {errors.facilities && (
        <span className="text-red-500 text-sm font-bold">{errors.facilities.message}</span>
      )}
    </div>
  )
}

export default FacilitiesSection

