// src/components/PantsPage.js (or .tsx for TypeScript)

import React from 'react';

function PantsPage() {
  return (
    <div className="container mx-auto py-6">
      <h1 className="text-3xl font-semibold mb-8 text-center">Shop Pants</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {/* Placeholder for displaying pants */}
        <div className="bg-white p-4 rounded-lg shadow-md">
          {/* Image */}
          <img
            src="https://via.placeholder.com/200x200"
            alt="Pant"
            className="w-full h-40 object-cover mb-4"
          />
          {/* Title */}
          <h2 className="text-lg font-semibold mb-2">Pant Name</h2>
          {/* Price */}
          <p className="text-gray-600 text-lg">$XX.XX</p>
          {/* Add to Cart button */}
          <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-full transition duration-300 transform hover:scale-105">
            Add to Cart
          </button>
        </div>

        {/* Repeat this placeholder for each pant */}
      </div>
    </div>
  );
}

export default PantsPage;