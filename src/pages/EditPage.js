import React, { useState, useEffect } from "react";
import axios from 'axios';
import Sidebar from "../component/Sidebar";
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { useParams } from 'react-router-dom';

export default function EditPage() {

  const navigate = useNavigate();
  const { id } = useParams();

  const [asset, setAsset] = useState({
    Assets: '',
    AssetID: '',
    SerialNumber: '',
    Model: '',
    Brand: '',
    Category: '',
    Os: '',
    Description: '',
    Status: '',
    date: ''
  });

  const handleChange = (event) => {
    setAsset({ ...asset, [event.target.name]: event.target.value });
  };

  const [validation, setValidation] = useState({
    Assets: '',
    AssetID: '',
    Model: '',
    Os: '',
    Brand: ''
  });

  const checkValidation = () => {
    let errors = { ...validation };
    let isValid = true;

    // Assets name validation
    if (!asset.Assets.trim()) {
      errors.Assets = "Assets name is required";
      isValid = false;
    } else if (!asset.Assets.match(/[A-Za-z]/)) {
      errors.Assets = "Please enter only alphabets.";
      isValid = false;
    } else {
      errors.Assets = "";
    }

    // Assets ID validation
    if (!asset.AssetID.trim()) {
      errors.AssetID = "Assets ID is required";
      isValid = false;
    } else if (!asset.AssetID.match(/[0-9]/)) {
      errors.AssetID = "Please enter only numbers.";
      isValid = false;
    } else {
      errors.AssetID = "";
    }

    // Assets Model validation
    if (!asset.Model.trim()) {
      errors.Model = "Assets Model is required";
      isValid = false;
    } else if (!asset.Model.match(/[a-zA-Z]/)) {
      errors.Model = "Please enter only alphabets and numbers.";
      isValid = false;
    } else {
      errors.Model = "";
    }

    // Assets OS validation
    if (!asset.Os.trim()) {
      errors.Os = "Assets Os is required";
      isValid = false;
    } else if (!asset.Os.match(/[a-zA-Z]/)) {
      errors.Os = "Please enter only alphabets and numbers";
      isValid = false;
    } else {
      errors.Os = "";
    }

    // Assets Brand validation
    if (!asset.Brand.trim()) {
      errors.Brand = "Assets Brand is required";
      isValid = false;
    } else if (!asset.Brand.match(/[a-zA-Z]/)) {
      errors.Brand = "Please enter only alphabets.";
      isValid = false;
    } else {
      errors.Brand = "";
    }

    setValidation(errors);
    return isValid;
  };

  useEffect(() => {
    axios
      .get(`/Asset/edit/${id}`)
      .then((response) => {
        setAsset(response.data);
        console.log(response.data);
      })
      .catch((error) => console.error(error));

  }, [id]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const isValid = checkValidation();
    if (isValid) {
      axios
        .put(`/Asset/edit/${id}`, asset)
        .then(() => navigate("/Asset"))
        .catch((error) => console.error(error));
    }
  };

  return (
    <section className="bg-white">
      <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
        <h2 className="mb-4 text-xl font-bold text-gray-900">Edit Asset</h2>

        <form onSubmit={handleSubmit} action="/Server" className="mb-4 px-10">
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
            <div className="w-full">
              <label className="block mb-2 text-sm font-medium text-gray-900" htmlFor="Assets">
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
              {/* validate */}
              {validation.Assets && <p className="mt-2 text-sm text-red-600">{validation.Assets}</p>}
            </div>
            <div className="w-full">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="AssetID">
                ID:
              </label>
              <input
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                id="AssetID"
                type="text"
                name="AssetID"
                value={asset.AssetID}
                onChange={handleChange}
              />
              {/* validate */}
              {validation.AssetID && <p className="mt-2 text-sm text-red-600">{validation.AssetID}</p>}
            </div>
            <div className="w-full">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="Status">
                Status:
              </label>
              <select
                id="Status"
                name="Status"
                value={asset.Status}
                onChange={handleChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
              >
                <option>Select Status</option>
                <option value="Available">Available</option>
                <option value="Disposed">Disposed</option>
                <option value="InUse">In Use</option>
              </select>
            </div>
            <div className="w-full">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="SerialNumber">
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
              <label className="block text-gray-700 font-bold mb-2" htmlFor="Model">
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
              {/* validate */}
              {validation.Model && <p className="mt-2 text-sm text-red-600">{validation.Model}</p>}
            </div>
            <div className="w-full">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="date">
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
              <label className="block text-gray-700 font-bold mb-2" htmlFor="Brand">
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
              {/* validate */}
              {validation.Brand && <p className="mt-2 text-sm text-red-600">{validation.Brand}</p>}
            </div>
            <div className="w-full">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="Category">
                Category:
              </label>
              <select
                id="Category"
                name="Category"
                value={asset.Category}
                onChange={handleChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
              >
                <option>Select category</option>
                <option value="TV">TV/Monitors</option>
                <option value="PC">PC</option>
                <option value="GA">Gaming/Console</option>
                <option value="PH">Phones</option>
              </select>
            </div>
            <div className="w-full">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="Os">
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
              {/* validate */}
              {validation.Os && <p className="mt-2 text-sm text-red-600">{validation.Os}</p>}
            </div>
            <div className="w-full">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="Description">
                Description:
              </label>
              <textarea
                id="Description"
                type="text"
                name="Description"
                value={asset.Description}
                onChange={handleChange}
                rows="8"
                className="block p-2.5 border w-full h-full focus:ring-primary-500 focus:border-primary-500 text-gray-900 text-sm rounded-lg"
              ></textarea>
            </div>
          </div>

          <div className="mt-6">
            <button
              // type="submit"
              // className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
              className="bg-teal-700 hover:bg-teal-900 text-white font-bold my-5 py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Update Asset
            </button>
            <Link
              to={`/Asset`}
              className="ml-2 inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-gray-900 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
            >
              Cancel
            </Link>
          </div>
        </form>
      </div>
    </section>
  );
}
