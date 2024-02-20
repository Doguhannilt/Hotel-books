import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { useToast } from '@chakra-ui/react';


const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const toast = useToast()
  const navigation = useNavigate()

  const {
    register,
    watch,

    formState: { errors },
  } = useForm();

  const handleSubmit = (e) => {
    e.preventDefault()
    Axios.post('http://localhost:7000/users/register', {
      firstName,
      lastName,
      email,
      password
    }).then(response => {
      toast({
        title: 'Your account is created',
        description: 'Did you know that I am in love with Turkish Coffee.',
        status: 'success',
        duration: 9000,
        isClosable: true,
      }),
      console.log(response)
      navigation("/users/login")
    }).catch(err => {
      toast({
        title: 'An error occurred.',
        description: 'Unable to create user account.',
        status: 'error',
        duration: 9000,
        isClosable: true,
      }),
      console.log(err)
    })
  }
  return (
    <div>
      <form onSubmit={handleSubmit} className="mx-auto max-w-md flex flex-col gap-5 mt-16">
        <h2 className="text-3xl font-bold">Create an Account</h2>
        <div className="flex flex-col md:flex-row gap-5">
          {/* First Name */}
          <label className="text-gray-700 text-sm font-bold flex-1">
            First Name
            <input
              className="border rounded w-full py-1 px-2 font-normal"
              {...register('firstName', { required: 'This field is required' })}
              onChange={(e) => setFirstName(e.target.value)}
            />
            {errors.firstName && <span className="text-red-500">{errors.firstName.message}</span>}
          </label>
          {/* Last Name */}
          <label className="text-gray-700 text-sm font-bold">
            Last Name
            <input
              className="border rounded w-full py-1 px-2 font-normal"
              {...register('lastName', { required: 'This field is required' })}
              onChange={(e) => setLastName(e.target.value)}
            />
          </label>
        </div>
        {/* Email */}
        <label className="text-gray-700 text-sm font-bold flex-1">
          Email
          <input
            type="email"
            className="border rounded w-full py-1 px-2 font-normal"
            {...register('email', { required: 'This field is required' })}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && <span className="text-red-500">{errors.email.message}</span>}
        </label>
        {/* Password */}
        <label className="text-gray-700 text-sm font-bold ">
          Password
          <input
            type="password"
            className="border rounded w-full py-1 px-2 font-normal "
            {...register('password', {
              required: 'This field is required',
              minLength: { value: 6, message: 'Password must be at least 6 characters' },
                
            })}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errors.password && <span className="text-red-500">{errors.password.message}</span>}
        </label>
        {/* Confirm Password */}
        <label className="text-gray-700 text-sm font-bold ">
          Confirm Password
          <input
            type="password"
            className="border rounded w-full py-1 px-2 font-normal"
            {...register('confirmPassword', {
              validate: (val) => {
                if (!val) return 'This field is required';
                if (val !== watch('password')) return 'Your passwords do not match';
              },
            })}
          />
          {errors.confirmPassword && (
            <span className="text-red-500">{errors.confirmPassword.message}</span>
          )}
        </label>
        <div className = "flex gap-24 ">
        <span>
          <button
            type="submit"
            className="bg-blue-600 text-white p-2 font-bold txt-xl hover:bg-blue-800"
          >
            Create an account
          </button>
        </span>

        <span>
            <label className = "text-blue-600 hover:text-blue-800"><Link to={"/auth/login"}>Do you have an account?</Link></label>
        </span>
        </div>
      </form>
    </div>
  );
};

export default Register;
