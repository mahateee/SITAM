import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import {Link} from 'react-router-dom';
const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div className="h-screen fixed z-50 flex">
      <div className={`bg-teal-800 text-white  w-64 ${collapsed ? 'hidden' : 'block'} transition-all duration-300`}>
        <div className="p-4">
        <aside id="default-sidebar" class="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
   <div class="h-full px-3 py-4 overflow-y-auto bg-teal-800">
      <ul class="space-y-2 font-medium">

         <li>
            <a href="#" class="flex items-center p-2 rounded-lg hover:bg-teal-700">
               <svg aria-hidden="true" class="w-6 h-6  transition duration-75 text-teal-400  group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path><path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path></svg>
               <span class="ml-3">Dashboard</span>
            </a>
         </li>
         <li>
         <Link to="/Asset">
            <a href="#" class="flex items-center p-2 rounded-lg hover:bg-teal-700">
            <svg aria-hidden="true" class="w-6 h-6  transition duration-75 text-teal-400  group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path></svg>
               <span class="ml-3">Asset</span>
            </a>
            </Link>
         </li>
        <li>
            <a href="#" class="flex items-center p-2 rounded-lg hover:bg-teal-700">
            <svg aria-hidden="true" class="flex-shrink-0 w-6 h-6 text-teal-500 transition duration-75  group-hover:text-gray-900" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm-1 9v-1h5v2H5a1 1 0 01-1-1zm7 1h4a1 1 0 001-1v-1h-5v2zm0-4h5V8h-5v2zM9 8H4v2h5V8z" clip-rule="evenodd"></path></svg>
               <span class="ml-3">Maintenance</span>
            </a>
         </li>
         <li>
         <Link to="/">
            <a href="#" class="flex items-center p-2 rounded-lg hover:bg-teal-700">
            <svg aria-hidden="true" class="flex-shrink-0 w-6 h-6 text-teal-500 transition duration-75  group-hover:text-gray-900" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z" clip-rule="evenodd"></path></svg>
               <span class="ml-3">log out</span>
            </a>
            </Link>
         </li>
       
      </ul>
   </div>
</aside>
        </div>
      </div>
      <div className="flex-1 bg-teal-800 p-4">
        <button
          className="text-white p-1.5 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          onClick={toggleSidebar}
        >
          {collapsed ? <FiMenu size={20} /> : <FiX size={20} />}
        </button>
        
      </div>
    </div>
  );
};

export default Sidebar;