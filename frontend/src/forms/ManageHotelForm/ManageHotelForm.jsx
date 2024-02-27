import React from 'react'
import { FormProvider, useForm } from 'react-hook-form'

// Sections
import DetailsSection from './DetailsSection'
import TypeSection from './TypeSection'
import FacilitiesSection from './FacilitiesSection'
import GuestsSection from './GuestsSection'

const ManageHotelForm = () => {
    const formMethods = useForm()

  return (
   <FormProvider {...formMethods}>
    <form>
        <DetailsSection/>
        <TypeSection/>
        <FacilitiesSection/>
        <GuestsSection/>
    </form>
    </FormProvider>
  )
}

export default ManageHotelForm
