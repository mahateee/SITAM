
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Link } from 'react-router-dom'

function SignUp() {
  return (
    
    <div class="w-full  max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 ">
      <form class="space-y-6" action="#">
        <h5 class="text-xl font-medium text-gray-900 ">Sign UP to our platform</h5>
        <div>
          <label for="name" class="block mb-2 text-sm font-medium text-gray-900 ">Name <span className="text-red-600">*</span></label>
          <input type="name" name="name" id="name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Enter your name" required />
        </div>
        <div>
          <label for="email" class="block mb-2 text-sm font-medium text-gray-900 ">Email <span className="text-red-600">*</span></label>
          <input type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  " placeholder="name@company.com" required />
        </div>
        <div>
          <label for="password" class="block mb-2 text-sm font-medium text-gray-900 ">Password <span className="text-red-600">*</span></label>
          <input type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " required />
        </div>

        <button type="submit" class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Sign Up</button>
    
      </form>
      <div className="text-gray-600 text-center mt-6">
        Already using SITAM? <Link to="/signin" className="text-blue-600 hover:underline transition duration-150 ease-in-out">Sign In</Link>
      </div>
    </div>



  );
}

export default SignUp;


