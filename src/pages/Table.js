import React, { useState, useEffect } from "react";
import axios from 'axios';
import {Link} from 'react-router-dom';
export default function Table() {
 
    const [assets, setAssets] = useState([]);
    useEffect(() => {
        axios
          .get("/Asset")
          .then((response) => setAssets(response.data))
          .catch((error) => console.error(error));
      }, []);
      const deletePerson = async (assetToDelete) => {
        console.log("delet?");
        await fetch(`http://localhost:3000/people/${assetToDelete.id}`, {
          method: "DELETE",
          headers: {
            "Content-type": "application/json"
          }
        })
        await setAssets(assets.filter(asset => asset.id !== assetToDelete.id))
      }
  return (
    <div>   <table className="table-auto w-full">
              <button
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                <Link to="/Assests">ADD Assets</Link>
                
              </button>
    <thead>
      <tr>
        <th className="px-4 py-2">#</th>
        <th className="px-4 py-2">Assets</th>
        <th className="px-4 py-2">Type</th>
        <th className="px-4 py-2">Serial Number</th>
        <th className="px-4 py-2">Date</th>
        <th className="px-4 py-2">Actions</th>
      </tr>
    </thead>
    <tbody>
      {assets.length > 0 ? (
        assets.map((asset, i) => (
          <tr key={i}>
            <td className="border px-4 py-2">{i + 1}</td>
            <td className="border px-4 py-2">{asset.Assets}</td>
            <td className="border px-4 py-2">{asset.Type}</td>
            <td className="border px-4 py-2">{asset.SerialNumber}</td>
            <td className="border px-4 py-2">{asset.Model}</td>
            <td className="border px-4 py-2">{asset.date}</td>

            <td className="border px-4 py-2">
              <button
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                onClick={() => {deletePerson(asset);}
                }
              >
                Delete
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
  )
}
