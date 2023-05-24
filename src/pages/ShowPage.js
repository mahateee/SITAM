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
    <>
         

<section className="bg-white ">
<div className="py-8 my-8 bg-white border border-gray-200 rounded-lg shadow px-4 mx-auto max-w-2xl lg:py-16">

    <h2 className="mb-8 text-xl font-extrabold leading-none text-gray-900 md:text-2xl ">Asset information</h2>
    <dl>
        <dt className="mb-2 font-semibold leading-none text-gray-900 ">Asset Name</dt>
        <dd className="mb-4 font-light text-gray-500 sm:mb-5 ">
          {asset.Assets}  
                </dd>

    </dl>
    <dl>
        <dt className="mb-2 font-semibold leading-none text-gray-900 ">Status</dt>
        <dd className="mb-4 font-light text-gray-500 sm:mb-5 ">   {(asset.Status ==="Available")?<span className="bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded">Available</span>:null}
              {(asset.Status ==="InUse")?<span className="bg-purple-100 text-purple-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-purple-900 dark:text-purple-300">In Use</span>:null}
              {(asset.Status ==="Disposed")?<span className="bg-red-100 text-red-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded">Disposed</span>:null}
              </dd>
    </dl>
    <dl>
        <dt className="mb-2 font-semibold leading-none text-gray-900 ">Serial Number</dt>
        <dd className="mb-4 font-light text-gray-500 sm:mb-5 ">{asset.SerialNumber}</dd>
    </dl>

    <dl>
        <dt className="mb-2 font-semibold leading-none text-gray-900 ">Description</dt>
        <dd className="mb-4 font-light text-gray-500 sm:mb-5 ">{asset.Description}</dd>
    </dl>
    <dl className="flex items-center space-x-6">
        <div className="block max-w-sm  p-6 bg-white border border-gray-200 rounded-lg shadow">
            <dt className="mb-2 font-semibold leading-none text-gray-900 ">Category</dt>
            <dd className="mb-4 font-light text-gray-500 sm:mb-5 ">{asset.Category}</dd>
        </div>
       
        <div className=" block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow">
            <dt className="mb-2 font-semibold leading-none text-gray-900 ">Os</dt>
            <dd className="mb-4 font-light text-gray-500 sm:mb-5 ">{asset.Os}</dd>
        </div>
        <div className="block max-w-sm  p-6 bg-white border border-gray-200 rounded-lg shadow">
            <dt className="mb-2 font-semibold leading-none text-gray-900 ">Model</dt>
            <dd className="mb-4 font-light text-gray-500 sm:mb-5 ">{asset.Model}</dd>
        </div>
        <div className=" block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow">
            <dt className="mb-2 font-semibold leading-none text-gray-900 ">Brand</dt>
            <dd className="mb-4 font-light text-gray-500 sm:mb-5 ">{asset.Brand}</dd>
        </div>

    </dl>
   
</div>
</section>
</>
    )
}
