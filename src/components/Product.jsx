import React from 'react';
import { Link } from 'react-router-dom';
import img11 from '../assets/haldi.webp';
import { useState } from 'react';

import { ProductList } from './Utils/ProductList';
const ProductGallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProducts = selectedCategory === 'All'
    ? ProductList
    : ProductList.filter(product => product.category === selectedCategory);

  return (
    <div className="max-w-screen-xl mx-auto px-4 py-8">
      {/* Filter Dropdown */}
      <div className="mb-6">
        <label htmlFor="category" className="mr-4 text-lg font-semibold">
          Filter by Category:
        </label>
        <select
          id="category"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="border border-gray-300 p-2 rounded-lg"
        >
          <option value="All">All</option>
          <option value="Spices">Spices</option>
          <option value="Herbs">Herbs</option>
          {/* Add more categories if needed */}
        </select>
      </div>

      {/* Product Count */}
      <p className="woocommerce-result-count mb-4">
        Showing {filteredProducts.length} results
      </p>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.map(product => (
          <div
            key={product.id}
            className="bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden transition-transform duration-300 transform hover:scale-105 flex flex-col"
          >
            <Link to={product.link} className="flex-grow">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover"
              />
              <h3 className="text-lg font-semibold text-center p-4 text-gray-800">
                {product.name}
              </h3>
            </Link>
            <Link
              to={product.link}
              rel="nofollow"
              className="block text-center bg-blue-600 text-white py-2 rounded-b-lg hover:bg-blue-700 transition-colors"
            >
              Read More
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};
export default ProductGallery;
