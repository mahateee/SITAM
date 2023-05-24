import React, { useState, useEffect } from "react";
import axios from 'axios';
import Sidebar from "../component/Sidebar";
import {Link} from 'react-router-dom';
function Assets() {
  const [asset, setAsset] = useState({
    id:'',
    Assets: '',
    ID: '',
    SerialNumber: '',
    Model:'',
    Brand:'',
    Category:'',
    Os:'',
    Description:'',
    Status:'',
    date: ''
  });
  const [assets, setAssets] = useState([]);
 
  const handleChange = (event) => {
    setAsset({ ...asset, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("/Asset", asset)
      .then((response) => {
        setAssets([...assets, response.data]);
        setAsset({
          id:'',
          Assets: "",
          ID: "",
          SerialNumber: "",
          Model:"",
          Brand:"",
          Category:"",
          Os:"",
          Description:'',
          Status:'',
          date: "",
        });
      })
      .catch((error) => console.error(error));
  };


  useEffect(() => {
    axios
      .get("/Asset")
      .then((response) => setAssets(response.data))
      .catch((error) => console.error(error));
  }, []);

  const handleDelete = (assetToDelete) => {
    axios
      .delete(`http://localhost:3000/Asset/${assetToDelete.ID}`)
      .then(() =>{
        setAssets(assets.filter((asset) => asset.ID !== assetToDelete.ID))
        window.location.reload();
      }
 
        
      ).catch((error) => console.error(error));
  };
  
  const deleteAsset = async (assetToDelete) => {
    console.log("delet?");
    await fetch(`http://localhost:3000/Asset/${assetToDelete.id}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json"
      }
    })
    await setAssets(assets.filter(asset => asset.id !== assetToDelete.id))
  }
  const [showModal, setShowModal] = useState(false);
  const setID=(id)=>{
    console.log(id)
  }
  return (
    <div>
       <button type="button"   className="flex items-center justify-center  bg-green-700  text-white hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 py-2  focus:outline-none ">
       <Link to={`/Asset/add`}> <svg className="h-3.5 w-3.5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path clipRule="evenodd" fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" />
                        </svg>
                        
                        Add Asset
                        </Link>
                    </button>
      {/* Content */}
      <>
      {/* toggle form */}
      {showModal ? (<>
        <div className="flex justify-center  items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative  w-auto mt-10 mx-auto max-w-7xl">
              <div className="border-0  rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-1 border-b border-solid border-gray-300 rounded-t ">
                  <h3 className="text-xl font=semibold">Asset</h3>
                  <button
                    className="bg-transparent border-0 text-black float-right"
                    onClick={() => setShowModal(false)}
                  >
                    
                    <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                   
                  </button>
                </div>
             

                <div className="mt-2 flex flex-col flex-grow">
  
           <form onSubmit={handleSubmit} method="post" action="/Server"  className="mb-4 px-10">
           <div className="grid gap-4 sm:grid-cols-3 sm:gap-6">
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
                onChange={handleChange}
              />
            </div>
            <div className="w-full">
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="ID"
              >
                ID:
              </label>
              <input
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                id="ID"
                type="text"
                name="ID"
                value={asset.ID}
                onChange={handleChange}
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
                onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5">
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
                onChange={handleChange}
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
                onChange={handleChange}
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
                onChange={handleChange}
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
                onChange={handleChange}
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
                onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5">
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
                onChange={handleChange}
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
                onChange={handleChange} rows="8" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 " placeholder="Your description here"></textarea>
            </div>
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold my-5 py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Add Asset
                
              </button>

            </div>
          </form> 
        
        </div>
      </div>
    
              </div>
            </div>
      </>) : null}
    </>

{/* table */}
<section className="bg-gray-50  p-3 sm:p-5">

<div className="mx-auto max-w-screen-xl px-4 lg:px-12">
<div className="bg-white relative shadow-md sm:rounded-lg overflow-hidden">
<div className="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
                <div className="w-full md:w-1/2">
                    <form className="flex items-center">
                        <label htmlFor="simple-search" className="sr-only">Search</label>
                        <div className="relative w-full">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <svg aria-hidden="true" className="w-5 h-5 text-gray-500 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <input type="text" id="simple-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2 " placeholder="Search" required=""/>
                        </div>
                    </form>
                </div>
                <div className="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0">
                    <button type="button"  onClick={() => setShowModal(true)} className="flex items-center justify-center  bg-green-700  text-white hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 py-2  focus:outline-none ">
                        <svg className="h-3.5 w-3.5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path clipRule="evenodd" fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" />
                        </svg>
                        
                        Add Asset
                    </button>
                    <div className="flex items-center space-x-3 w-full md:w-auto">
                        <button id="actionsDropdownButton" data-dropdown-toggle="actionsDropdown" className="w-full md:w-auto flex items-center justify-center py-2 px-4 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200" type="button">
                            <svg className="-ml-1 mr-1.5 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                <path clipRule="evenodd" fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                            </svg>
                            Actions
                        </button>
                        <div id="actionsDropdown" className="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
                            <ul className="py-1 text-sm text-gray-700 " aria-labelledby="actionsDropdownButton">
                                <li>
                                    <a href="#" className="block py-2 px-4 hover:bg-gray-100 ">Mass Edit</a>
                                </li>
                            </ul>
                            <div className="py-1">
                                <a href="#" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Delete all</a>
                            </div>
                        </div>
                        <button id="filterDropdownButton" data-dropdown-toggle="filterDropdown" className="w-full md:w-auto flex items-center justify-center py-2 px-4 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 " type="button">
                            <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="h-4 w-4 mr-2 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z" clipRule="evenodd" />
                            </svg>
                            Filter
                            <svg className="-mr-1 ml-1.5 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                <path clipRule="evenodd" fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                            </svg>
                        </button>
                        <div id="filterDropdown" className="z-10 hidden w-48 p-3 bg-white rounded-lg shadow dark:bg-gray-700">
                            <h6 className="mb-3 text-sm font-medium text-gray-900 dark:text-white">Choose brand</h6>
                            <ul className="space-y-2 text-sm" aria-labelledby="filterDropdownButton">
                                <li className="flex items-center">
                                    <input id="apple" type="checkbox" value="" className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
                                    <label htmlFor="apple" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100">Apple (56)</label>
                                </li>
                                <li className="flex items-center">
                                    <input id="fitbit" type="checkbox" value="" className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
                                    <label htmlFor="fitbit" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100">Microsoft (16)</label>
                                </li>
                                <li className="flex items-center">
                                    <input id="razor" type="checkbox" value="" className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
                                    <label htmlFor="razor" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100">Razor (49)</label>
                                </li>
                                <li className="flex items-center">
                                    <input id="nikon" type="checkbox" value="" className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
                                    <label htmlFor="nikon" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100">Nikon (12)</label>
                                </li>
                                <li className="flex items-center">
                                    <input id="benq" type="checkbox" value="" className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
                                    <label htmlFor="benq" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100">BenQ (74)</label>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
      <div className="overflow-x-auto">   
        <table className="w-full text-sm text-left text-gray-500 ">
        
    <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
      <tr>
        <th scope="col" className="px-4 py-3">#</th>
        <th scope="col" className="px-4 py-3">Assets</th>
        <th scope="col" className="px-4 py-3">Status</th>
        <th scope="col" className="px-4 py-3">Serial Number</th>
        <th scope="col" className="px-4 py-3">Model</th>
        <th scope="col" className="px-4 py-3">Description</th>
        <th scope="col" className="px-4 py-3">Category</th>
        <th scope="col" className="px-4 py-3">Date</th>
        <th scope="col" className="px-4 py-3">Actions</th>
      </tr>
    </thead>
    <tbody>
      {assets.length > 0 ? (
        assets.map((asset, i) => (
          <tr className="border-b" key={i}>
            <td className="px-4 py-3" >{i + 1}
            	

            </td>

            <td className="px-4 py-3">{asset.Assets}
            {/* <Link to={`/Asset/show/${asset.id}`}>XXXXXXXXXXXXxxx</Link> */}
            </td>
            <td className="px-4 py-3">
              
              {(asset.Status ==="Available")?<span className="bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded">Available</span>:null}
              {(asset.Status ==="InUse")?<span className="bg-purple-100 text-purple-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-purple-900 dark:text-purple-300">In Use</span>:null}
              {(asset.Status ==="Disposed")?<span className="bg-red-100 text-red-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded">Disposed</span>:null}
            
            </td>
            <td className="px-4 py-3">{asset.SerialNumber}</td>
            <td className="px-4 py-3">{asset.Model}</td>
            <td className="px-4 py-3">{asset.Description}</td>
            <td className="px-4 py-3">{asset.Category}</td>
            
            <td className="px-4 py-3">{asset.date}</td>

            <td className="border px-4 py-2">
              <button
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                onClick={() => {deleteAsset(asset);}
                }
              >
                Delete
              </button>
            </td>
            <td className="border px-4 py-2">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                onClick={()=>setID(asset.id)}
              >
                <Link to={`/Asset/show/${asset.id}`}> 
                show
                </Link>
              </button>
            </td>
            <td className="border px-4 py-2">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                onClick={()=>setID(asset.id)}
              >
                <Link to={`/Asset/edit/${asset.id}`}> 
                Edit
                </Link>
              </button>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td className="border px-4 py-2" colSpan={7}>
            No Assets
          </td>
        </tr>
      )}
    </tbody>
  </table>
  </div>
  <nav className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-3 md:space-y-0 p-4" aria-label="Table navigation">
                <span className="text-sm font-normal text-gray-500 ">
                    Showing
                    <span className="font-semibold text-gray-900 ">1-10</span>
                    of
                    <span className="font-semibold text-gray-900 ">1000</span>
                </span>
                <ul className="inline-flex items-stretch -space-x-px">
                    <li>
                        <a href="#" className="flex items-center justify-center h-full py-1.5 px-3 ml-0 text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 ">
                            <span className="sr-only">Previous</span>
                            <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700">1</a>
                    </li>
                    <li>
                        <a href="#" className="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 ">2</a>
                    </li>
                    <li>
                        <a href="#" aria-current="page" className="flex items-center justify-center text-sm z-10 py-2 px-3 leading-tight text-primary-600 bg-primary-50 border border-primary-300 hover:bg-primary-100 hover:text-primary-700 ">3</a>
                    </li>
                    <li>
                        <a href="#" className="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 ">...</a>
                    </li>
                    <li>
                        <a href="#" className="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 ">100</a>
                    </li>
                    <li>
                        <a href="#" className="flex items-center justify-center h-full py-1.5 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 ">
                            <span className="sr-only">Next</span>
                            <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                            </svg>
                        </a>
                    </li>
                </ul>
            </nav>
  </div>
  </div>
    
</section>
      {/* Content */}
    </div>
  );
}

export default Assets;