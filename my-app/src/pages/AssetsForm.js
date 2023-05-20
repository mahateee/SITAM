import React, { Component } from 'react';

export default function AssetsForm() {
    return (

        <section class="bg-white ">
            <div class="py-8 px-4 mx-auto max-w-2xl lg:py-16">
                <h2 class="mb-4 text-xl font-bold text-gray-900">Add a New Asset</h2>
                <form action="#">
                    <div class="grid gap-4 sm:grid-cols-2 sm:gap-6">
                        <div class="sm:col-span-2">
                            <label for="name" class="block mb-2 text-sm font-medium text-gray-900 ">Asset Name</label>
                            <input type="text" name="name" id="name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " placeholder="Type Asset Name" required="" />
                        </div>
                        <div class="w-full">
                            <label for="assetId" class="block mb-2 text-sm font-medium text-gray-900 ">ID</label>
                            <input type="text" name="assetId" id="assetId" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5   " placeholder="Assets ID" required="" />
                        </div>
                        <div class="w-full">
                            <label for="brand" class="block mb-2 text-sm font-medium text-gray-900 ">Brand</label>
                            <input type="text" name="brand" id="brand" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " placeholder="Product brand" required="" />
                        </div>
                          <div class="w-full">
                            <label for="model" class="block mb-2 text-sm font-medium text-gray-900 ">Model</label>
                            <input type="text" name="model" id="model" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " placeholder="Product model" required="" />
                        </div>
                        <div class="w-full">
                            <label for="OS" class="block mb-2 text-sm font-medium text-gray-900 ">OS</label>
                            <input type="text" name="OS" id="OS" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " placeholder="Assets OS"  />
                        </div>
                        <div class="w-full">
                            <label for="serialNumber" class="block mb-2 text-sm font-medium text-gray-900 ">Serial Number</label>
                            <input type="text" name="serialNumber" id="serialNumber" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " placeholder="Serial Number" required="" />
                        </div>
                        <div class="w-full">
                            <label for="price" class="block mb-2 text-sm font-medium text-gray-900 ">Price</label>
                            <input type="number" name="price" id="price" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5   " placeholder="$2999" required="" />
                        </div>
                        <div>
                            <label for="category" class="block mb-2 text-sm font-medium text-gray-900 ">Category</label>
                            <select id="category" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5">
                                <option selected="">Select category</option>
                                <option value="TV">TV/Monitors</option>
                                <option value="PC">PC</option>
                                <option value="GA">Gaming/Console</option>
                                <option value="PH">Phones</option>
                            </select>
                        </div>
                        <div class="w-full">
                            <label for="price" class="block mb-2 text-sm font-medium text-gray-900 ">Price</label>
                            <input type="number" name="price" id="price" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="$2999" required="" />
                        </div>
                        <div>
                            <label for="status" class="block mb-2 text-sm font-medium text-gray-900 ">Status</label>
                            <select id="status" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5">
                                <option selected="">Select status</option>
                                <option value="TV">TV/Monitors</option>
                                <option value="PC">PC</option>
                                <option value="GA">Gaming/Console</option>
                                <option value="PH">Phones</option>
                            </select>
                        </div>
                        <div>
                            <label for="item-weight" class="block mb-2 text-sm font-medium text-gray-900 ">Item Weight (kg)</label>
                            <input type="number" name="item-weight" id="item-weight" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " placeholder="12" required="" />
                        </div>
                        <div class="sm:col-span-2">
                            <label for="description" class="block mb-2 text-sm font-medium text-gray-900 ">Description</label>
                            <textarea id="description" rows="8" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 " placeholder="Your description here"></textarea>
                        </div>
                    </div>
                    <button type="submit" class="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-cente bg-green-700  text-white rounded-lg focus:ring-4 focus:ring-primary-200  hover:bg-primary-800">
                        Add product
                    </button>
                </form>
            </div>
        </section>
    )
}
