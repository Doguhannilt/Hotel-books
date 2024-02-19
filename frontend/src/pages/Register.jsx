import React from 'react'

import {useForm} from 'react-hook-form'
import {useMutation} from 'react-query'
import * as apiClient from '../api-client'
import { useToast } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'

const Register = () => {
  console.log("Register page loaded");

  const navigate = useNavigate()

  const {register, watch, handleSubmit, formState: {errors}} = useForm();
  const toast = useToast()
  const mutation = useMutation(apiClient.register, {
  onSuccess: () => {
    // Success

    toast({
      title: 'Account created.',
      description: "We've created your account for you.",
      status: 'success',
      duration: 9000,
      isClosable: true,
    })
    navigate("/")
  },
  onError: (err) => {
    
    // Error 
    toast({
      title: 'Account is not created.',
      description: "Something went wrong :(.",
      status: 'error',
      duration: 9000,
      isClosable: true,
    })
  
  }});

  const onSubmit = handleSubmit((data)=>{
    mutation.mutate(data)
  })

  return (
    <div>
      <form action="" className="mx-auto max-w-md flex flex-col gap-5 mt-10" onSubmit = {onSubmit}>

        <h2 className = "text-3xl font-bold">Create an Account</h2>
        <div className = "flex flex-col md:flex-row gap-5">

          {/* // ! First Name */}
          <label className="text-gray-700 text-sm font-bold flex-1">
            First Name
            <input
              className="border rounded w-full py-1 px-2 font-normal"
              {...register("firstName", { required: "This field is required" })}
            />
            {errors.firstName && (
              <span className="text-red-500">{errors.firstName.message}</span>
            )}
          </label>

           {/* // ! Last Name */}
          <label className = "text-gray-700 text-sm font-bold">
            Last Name
            <input className = "border rounded w-full py-1 px-2 font-normal"
            {...register("lastName", {required:"This field is required"})}>
            </input>
          </label>
        </div>

           {/* // ! Email */}
        <label className = "text-gray-700 text-sm font-bold flex-1">
          Email
        <input 
        type="email"
        className = "border rounded w-full py-1 px-2 font-norma"
        {...register("email", {required: "This field is required"})}></input>
        {errors.email && (
        <span className="text-red-500">{errors.email.message}</span>
         )}
        </label>
        

         {/* // ! Password */}
        <label className = "text-gray-700 text-sm font-bold ">
          Password
        <input 
        type="password"
        className = "border rounded w-full py-1 px-2 font-normal "
        {...register("password", {required: "This field is required", minLength: {value:6, message: "Password must be at least 6 characters"}})}></input>
         {errors.password && (
        <span className="text-red-500">{errors.password.message}</span>
         )}      
        </label>


         {/* // ! Confirm Password */}
         <label className = "text-gray-700 text-sm font-bold ">
          Confirm Password
        <input 
        type="password"
        className = "border rounded w-full py-1 px-2 font-norma"
        {...register("confirmPassword", {validate:(val) => {
          if(!val){return "This field is required"}
          else if(watch("password") != val){return "Your passwords do not match"}
        }})}></input>
        {errors.confirmPassword && (
        <span className="text-red-500">{errors.confirmPassword.message}</span>
         )}
        </label>

        <span>
          <button 
          type = "submit"
          className = "bg-blue-600 text-white p-2 font-bold hover:bg-blue-500 txt-xl">Create an account</button>
        </span>


        
      </form>
    </div>
  )
}

export default Register