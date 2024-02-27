import React from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import DetailsSection from './DetailsSection'

const ManageHotelForm = () => {
    const formMethods = useForm()

  return (
   <FormProvider {...formMethods}>
    <form>
        <DetailsSection/>
    </form>
    </FormProvider>
  )
}

export default ManageHotelForm
