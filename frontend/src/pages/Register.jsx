import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';


const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
      console.log(response)
      navigation("/login")
    }).catch(err => {
      console.log(err)
    })
  }
  return (
    <div>
      <form onSubmit={handleSubmit} className="mx-auto max-w-md flex flex-col gap-5 mt-10">
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
        <span>
          <button
            type="submit"
            className="bg-blue-600 text-white p-2 font-bold hover:bg-blue-500 txt-xl"
          >
            Create an account
          </button>
        </span>
      </form>
    </div>
  );
};

export default Register;
