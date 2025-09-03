import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div>
      {/* <div className='flex justify-center items-center bg-gray-300' >
        <h1>Welcome To Login</h1>
      <input type="email" name="email" id="email" placeholder='Enter Your Name' />
      <input type="password" name="password" id="password" placeholder='Enter Your Password' />
      <button>Login</button>
      Dont have Account <Link to={'/Register'}>Create Account</Link></div> */}

    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-gray-400 via-purple-100 to-gray-200">
      <div className="bg-white shadow-2xl rounded-2xl w-full max-w-md p-8">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Welcome Back ! 
        </h2>
        <p className="text-center text-gray-500 mb-8">
          Please login to your account
        </p>

        {/* Form */}
        <form className="space-y-6">
          {/* Email */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-400 focus:outline-none"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-400 focus:outline-none"
            />
          </div>

          

          {/* Button */}
          <button
            type="submit"
            className="w-full py-3 mt-4 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition duration-300"
          >
            Login
          </button>
        </form>

        {/* Footer */}
        <p className="text-center text-gray-600 mt-6">
          Don’t have an account?{" "}
          <Link to={'/Register'} className="text-indigo-600 font-medium hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
      
     </div>
  )
}

export default Login
