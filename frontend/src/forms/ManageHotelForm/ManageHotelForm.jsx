import React from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import axios from 'axios';

// Sections
import DetailsSection from './DetailsSection'
import TypeSection from './TypeSection'
import FacilitiesSection from './FacilitiesSection'
import GuestsSection from './GuestsSection'
import ImagesSection from './ImagesSection'

import { Link, useNavigate } from 'react-router-dom';
import { toast_info_hotel_created, toast_info_hotel_not_created } from '../../toast/Toast';
import { useToast } from '@chakra-ui/react';

const ManageHotelForm = () => {
    const navigation = useNavigate()
    const formMethods = useForm()
    const toast = useToast()
    const { handleSubmit } = formMethods
    axios.defaults.withCredentials = true
    const onSubmit = handleSubmit(async (formDataJson) => {
        
        try {
            const formData = new FormData()
            formData.append("name", formDataJson.name)
            formData.append("city", formDataJson.city.toString())
            formData.append("country", formDataJson.country)
            formData.append("type", formDataJson.type)
            formData.append("description", formDataJson.description)
            formData.append("pricePerNight", formDataJson.pricePerNight.toString())
            formData.append("starRating", formDataJson.starRating.toString())
            formData.append("adultCount", formDataJson.adultCount.toString())
            formData.append("childCount", formDataJson.childCount.toString())

            if (formDataJson.facilities && formDataJson.facilities.length > 0) {
                formDataJson.facilities.forEach((facility, index) => {
                    formData.append(`facilities[${index}]`, facility)
                })
            }
                Array.from(formDataJson.imageFiles).forEach((imageFile) => {
                    formData.append(`imageFiles`, imageFile)
                })                                   
            const response = await axios.post("http://localhost:7000/my-hotels", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",            
                }         
            });
            toast_info_hotel_created(toast)
            navigation("/")
        } catch (error) {
            toast_info_hotel_not_created(toast, error)
        }
    })

    return (
        <FormProvider {...formMethods}>
            <form onSubmit={onSubmit}>
                <div className='pl-60 pr-60'>

                    <DetailsSection />
                    <TypeSection />
                    <FacilitiesSection />
                    <GuestsSection />
                    <ImagesSection />

                    <span className='flex justify-end'>
                      
                        <button type="submit" className='bg-blue-600 text-white h-full mb-10 w-40 rounded hover:rounded-md hover:duration-300 duration-300 p-2 font-bold hover:bg-blue-500 cursor-pointer text-2xl'>
                            Save
                        </button>
                       
                    </span>
                </div>
            </form>
        </FormProvider>
    )
}

export default ManageHotelForm
