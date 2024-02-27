import React from 'react'
import { FormProvider, useForm } from 'react-hook-form'

// Sections
import DetailsSection from './DetailsSection'
import TypeSection from './TypeSection'

const ManageHotelForm = () => {
    const formMethods = useForm()

  return (
   <FormProvider {...formMethods}>
    <form>
        <DetailsSection/>
        <TypeSection/>
    </form>
    </FormProvider>
  )
}

export default ManageHotelForm
