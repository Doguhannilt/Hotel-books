import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import Axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { useToast } from '@chakra-ui/react'

const Login = () => { 
  const [email, setEmail] = useState(" ");
  const [password, setPassword] = useState(" ");

  const navigation = useNavigate()

  const {
    register,
    watch,

    formState: { errors },
  } = useForm();

  const handleSubmit = (e) => {
    e.preventDefault()
    Axios.post('http://localhost:7000/auth/login', {
      email,
      password
    }).then(response => {

      console.log(response)
      navigation("/home")
    }).catch(err => {


      console.log(err)
    })
  }


  return (
    <div>
    <form onSubmit={handleSubmit} className="mx-auto max-w-md flex flex-col gap-5 mt-40">
      <h2 className="text-3xl font-bold">Log in</h2>
      

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
      <div className = "flex gap-48 ">
      <span>
        <button
          type="submit"
          className="bg-blue-600 text-white p-2 font-bold hover:bg-blue-800 txt-2xl"
        >
          Log in
        </button>
      </span> 
      <span>
            <label className = "text-blue-600 hover:text-blue-800"><Link to={"/users/register"}>Don't you sign up yet?</Link></label>
        </span>
        </div>
    </form>
  </div>
  )
}

export default Login
