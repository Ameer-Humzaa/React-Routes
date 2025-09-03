import React from 'react'

const Register = () => {
  return (
    <div>
       
       <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-gray-400 via-purple-200 to-gray-100">
      <div className="bg-white shadow-2xl rounded-2xl w-full max-w-md p-8">
        
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Create Account 
        </h2>
        <p className="text-center text-gray-500 mb-8">
          Join us and explore awesome features
        </p>

       
        <form className="space-y-6">
          
          <div>
            <label className="block text-gray-700 font-medium mb-2">Full Name</label>
            <input
              type="text"
              placeholder="Enter your full name"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-pink-400 focus:outline-none"
            />
          </div>

         
          <div>
            <label className="block text-gray-700 font-medium mb-2">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-pink-400 focus:outline-none"
            />
          </div>

          
          <div>
            <label className="block text-gray-700 font-medium mb-2">Password</label>
            <input
              type="password"
              placeholder="Create a password"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-pink-400 focus:outline-none"
            />
          </div>

          

          
          <button
            type="submit"
            className="w-full py-3 mt-4 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition duration-300"
          >
            Sign Up
          </button>
        </form>

        
      </div>
    </div>


   </div>
  )
}

export default Register
