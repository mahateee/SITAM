import React, { useState, useEffect, useRef } from "react";
import axios from 'axios';
import Sidebar from "../component/Sidebar";
import { Link, useParams } from 'react-router-dom';
//import { Barcode } from 'react-barcode';
//import JsBarcode from 'jsbarcode';
import Barcode from 'react-barcode';
import BarcodeComponent from './Barcode';

export default function ShowPage() {
  const { id } = useParams();
  const [asset, setAsset] = useState({});
  const containerRef = useRef(null);
  const assetId = asset.AssetID; //
  useEffect(() => {
    axios
      .get(`/Asset/show/${id}`)
      .then((response) => {
        setAsset(response.data);
        console.log(response.data);
      })
      .catch((error) => console.error(error));
  }, [id]);

 

  return (

    <div >
    {/* <Sidebar/> */}
      <section class="text-gray-600 body-font  overflow-hidden">
        <div class="container px-5 py-24 mx-auto">
          <div class="lg:w-4/5 mx-auto bg-gray-50 rounded-lg border border-gray-200 p-8 items-center content-center flex flex-wrap">
            <div class="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
              <h2 class="text-sm title-font text-gray-500 tracking-widest">Asset information</h2>
              <h1 class="text-gray-900 text-3xl title-font font-medium mb-4">{asset.Assets}</h1>
              <div class="flex mb-4">
                <a class="flex-grow text-teal-700 border-b-2 border-teal-700 py-2 text-lg px-1">Details</a>
                <a class="flex-grow border-b-2 border-gray-300 py-2 text-lg px-1">Maintenance History</a>
              </div>
              <p class="leading-relaxed mb-4">{asset.Description}</p>
              <div class="flex border-t border-gray-200 py-2">
                <span class="text-gray-500">Status</span>
                <span class="ml-auto text-gray-900">
                      
              {(asset.Status ==="Available")?<span className="bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded">Available</span>:null}
              {(asset.Status ==="InUse")?<span className="bg-yellow-100 text-yellow-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded">In Use</span>:null}
              {(asset.Status ==="Disposed")?<span className="bg-red-100 text-red-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded">Disposed</span>:null}
            
                </span>
              </div>
              <div class="flex border-t border-gray-200 py-2">
                <span class="text-gray-500">Category</span>
                <span class="ml-auto bg-blue-100 hover:bg-blue-200 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded border border-blue-400">{asset.Category}</span>
              </div>
              <div class="flex border-t border-gray-200 py-2">
                <span class="text-gray-500">Serial Number</span>
                <span class="ml-auto text-gray-900">{asset.SerialNumber}</span>
              </div>
              <div class="flex border-t border-gray-200 py-2">
                <span class="text-gray-500">OS</span>
                <span class="ml-auto text-gray-900">{asset.Os}</span>
              </div>
              <div class="flex border-t border-gray-200 py-2">
                <span class="text-gray-500">Brand</span>
                <span class="ml-auto text-gray-900">{asset.Brand}</span>
              </div>
              <div class="flex border-t border-b mb-6 border-gray-200 py-2">
                <span class="text-gray-500">Model</span>
                <span class="ml-auto text-gray-900">{asset.Model}</span>
              </div>

            </div>
            <div className="content-center">
              <BarcodeComponent value={asset.AssetID} />
            </div>

          </div>
        </div>
      </section>

    </div>


  )

}


