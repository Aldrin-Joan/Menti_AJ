"use client";

import React, { useState } from 'react';

const References = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedType, setSelectedType] = useState('');
  const [referenceName, setReferenceName] = useState('');

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!referenceName || !selectedType || !selectedFile) {
      alert('Please fill out all fields and upload a file before submitting.');
      return;
    }
    alert('Reference submitted successfully!');
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-[#f8e4d9] to-[#ffe1b6] p-8">
      <div className="bg-gradient-to-r from-[#FFDEE9] to-[#B5FFFC] p-8 rounded-xl shadow-xl max-w-md w-full hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105">
        <h1 className="text-3xl font-extrabold text-center text-[#1F316F] mb-8 tracking-wide drop-shadow-lg">
          Submit Your Reference
        </h1>
        <form className="space-y-6" onSubmit={handleSubmit}>
          {/* Reference Name */}
          <div className="relative">
            <label className="block text-lg font-medium text-gray-700 mb-2">Reference Name</label>
            <input
              type="text"
              value={referenceName}
              onChange={(e) => setReferenceName(e.target.value)}
              className="w-full px-4 py-3 border border-transparent rounded-lg shadow-sm bg-gradient-to-r from-[#e0eafc] to-[#cfdef3] focus:outline-none focus:ring-2 focus:ring-[#1F316F] focus:border-transparent transition duration-300"
              placeholder="Enter reference name"
            />
          </div>

          {/* Type Selector */}
          <div className="relative">
            <label className="block text-lg font-medium text-gray-700 mb-2">Type</label>
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="w-full px-4 py-3 border border-transparent rounded-lg shadow-sm bg-gradient-to-r from-[#e0eafc] to-[#cfdef3] focus:outline-none focus:ring-2 focus:ring-[#1F316F] focus:border-transparent transition duration-300"
            >
              <option value="" disabled>Select type</option>
              <option value="flipped-recordings">Flipped Recordings</option>
              <option value="flipped-materials">Flipped Materials</option>
              <option value="reference">Add-On Materials</option>
            </select>
          </div>

          {/* File Upload */}
          <div className="relative">
            <label className="block text-lg font-medium text-gray-700 mb-2">Upload File</label>
            <div className="flex items-center space-x-3">
              <input
                type="file"
                id="file-upload"
                onChange={handleFileChange}
                className="hidden"
              />
              <label
                htmlFor="file-upload"
                className="px-6 py-3 bg-gradient-to-r from-gray-400 to-gray-500 text-white font-bold rounded-lg shadow-md cursor-pointer hover:from-gray-500 hover:to-gray-600 transition duration-300"
              >
                Choose File
              </label>
              <span className="text-sm text-gray-600">
                {selectedFile ? selectedFile.name : 'No file chosen'}
              </span>
            </div>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="w-full px-6 py-3 bg-[#1F316F] text-white font-bold text-lg rounded-lg shadow-lg transition-all duration-300 hover:bg-[#1A4870] hover:shadow-xl transform hover:scale-105"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default References;
