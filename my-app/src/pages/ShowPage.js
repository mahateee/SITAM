import React, { useState, useEffect } from "react";
import axios from 'axios';
import Sidebar from "../component/Sidebar";
import { Link, useParams } from 'react-router-dom';
export default function ShowPage() {
    const { id } = useParams();
    const [asset, setAssets] = useState([]);
    useEffect(() => {
        axios
            .get(`/Asset/show/${id}`)
            .then((response) => {
                setAssets(response.data)
                console.log(response.data)
            })
            .catch((error) => console.error(error));
    }, []);
    return (
    
          <section class="bg-white ">
             <div>
            
    </div>
          <div class="py-8 px-4 mx-auto max-w-2xl lg:py-16">
              <h2 class="mb-4 text-xl font-bold text-gray-900">Show Asset</h2>
      
<form className="mb-4 px-10">
         <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
          <div className="w-full">
            <label
              className="block mb-2 text-sm font-medium text-gray-900"
              htmlFor="Assets"
            >
              Asset:
            </label>
            <input
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              id="Assets"
              type="text"
              name="Assets"
              value={asset.Assets}
            
            />
          </div>
          <div className="w-full">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="AssetID"
            >
              ID:
            </label>
            <input
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              id="AssetID"
              type="text"
              name="AssetID"
              value={asset.AssetID}
            />
          </div>
          <div className="w-full">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="Status"
            >
              Status:
            </label>
            <select    id="Status"  name="Status"  value={asset.Status}
             className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5">
                              <option selected="">Select Status</option>
                              <option value="Available">Available</option>
                              <option value="Disposed">Disposed</option>
                              <option value="InUse">In Use</option>
             </select>
          </div>
          <div className="w-full">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="SerialNumber"
            >
              Serial Number:
            </label>
            <input
             className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              id="SerialNumber"
              type="text"
              name="SerialNumber"
              value={asset.SerialNumber}
            />
          </div>
          <div className="w-full">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="Model"
            >
              Model:
            </label>
            <input
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              id="Model"
              type="text"
              name="Model"
              value={asset.Model}
            />
          </div>
          <div className="w-full">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="date"
            >
              Date:
            </label>
            <input
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              id="date"
              type="date"
              name="date"
              value={asset.date}
            />
          </div>
          <div className="w-full">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="Brand"
            >
              Brand:
            </label>
            <input
           className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              id="Brand"
              type="text"
              name="Brand"
              value={asset.Brand}
            />
          </div>

          <div className="w-full">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="Category"
            >
              Category:
            </label>
           
             <select    id="Category"  name="Category"  value={asset.Category}
               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5">
                              <option selected="">Select category</option>
                              <option value="TV">TV/Monitors</option>
                              <option value="PC">PC</option>
                              <option value="GA">Gaming/Console</option>
                              <option value="PH">Phones</option>
             </select>
          </div>
          
          <div className="w-full">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="Os"
            >
              Os:
            </label>
            <input
             className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              id="Os"
              type="text"
              name="Os"
              value={asset.Os}
            />
          </div>
          
          <div className="w-full">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="Description"
            >
              Description:
            </label>
          
             <textarea  id="Description"
              type="text"
              name="Description"
              value={asset.Description}
               rows="8" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 " placeholder="Your description here"></textarea>
          </div>
          </div>
        
        </form> 
        </div>
      </section>
    )
}
