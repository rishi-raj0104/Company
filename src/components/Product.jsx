import React from 'react';
import { Link } from 'react-router-dom';
import img11 from '../assets/haldi.webp';
import { useState } from 'react';
// const products = [
//   {
//     id: 5803,
//     name: 'Dil Bahar BLACK PEPPER',
//     image: img11,
//     category: 'Spices',
//     link: '/product/5803',
//     description: "A select blend of 13 spices go into this grand old universal taste enhancer. Being chilli based, it provides an exotic red gravy to dishes.It is widely used all over India on account of its being a less pungent garam masala. Fennel, Tejpatta (Cinnamon leaves) and Trifala imparts a cooling effect to this blend.",
//     packaging: '15 gms / 25 gms / 50 gms / 100 gms / 200 gms / Jar 1 kg',
//     usage: 'It is used essentially for preparing vegetarian dishes requiring a gravy. Gujaratis and Marwaris normally use it in lentils (dal) and for filling in snacks such as samosa, usal, patra, farsan etc.',

//   },
//   {
//     id: 5822,
//     name: 'Dil Bahar DEGGI MIRCH',
//     image: img11,
//     category: 'Spices',
//     link: '/product/5822',
//     description: "A select blend of 13 spices go into this grand old universal taste enhancer. Being chilli based, it provides an exotic red gravy to dishes.It is widely used all over India on account of its being a less pungent garam masala. Fennel, Tejpatta (Cinnamon leaves) and Trifala imparts a cooling effect to this blend.",
//     packaging: '15 gms / 25 gms / 50 gms / 100 gms / 200 gms / Jar 1 kg',
//     usage: 'It is used essentially for preparing vegetarian dishes requiring a gravy. Gujaratis and Marwaris normally use it in lentils (dal) and for filling in snacks such as samosa, usal, patra, farsan etc.',

//   },
//   {
//     id: 5823,
//     name: 'Dil Bahar DHANIA POWDER',
//     image: img11,
//     category: 'Spices',
//     link: '/product/5823',
//     description: "A select blend of 13 spices go into this grand old universal taste enhancer. Being chilli based, it provides an exotic red gravy to dishes.It is widely used all over India on account of its being a less pungent garam masala. Fennel, Tejpatta (Cinnamon leaves) and Trifala imparts a cooling effect to this blend.",
//     packaging: '15 gms / 25 gms / 50 gms / 100 gms / 200 gms / Jar 1 kg',
//     usage: 'It is used essentially for preparing vegetarian dishes requiring a gravy. Gujaratis and Marwaris normally use it in lentils (dal) and for filling in snacks such as samosa, usal, patra, farsan etc.',

//   },
//   {
//     id: 5826,
//     name: 'Dil Bahar HALDI POWDER',
//     image: img11,
//     category: 'Spices',
//     link: '/product/5826',
//     description: "A select blend of 13 spices go into this grand old universal taste enhancer. Being chilli based, it provides an exotic red gravy to dishes.It is widely used all over India on account of its being a less pungent garam masala. Fennel, Tejpatta (Cinnamon leaves) and Trifala imparts a cooling effect to this blend.",
//     packaging: '15 gms / 25 gms / 50 gms / 100 gms / 200 gms / Jar 1 kg',
//     usage: 'It is used essentially for preparing vegetarian dishes requiring a gravy. Gujaratis and Marwaris normally use it in lentils (dal) and for filling in snacks such as samosa, usal, patra, farsan etc.',

//   },
//   {
//     id: 5830,
//     name: 'Dil Bahar JEERA POWDER',
//     image: img11,
//     category: 'Spices',
//     link: '/product/5830',
//     description: "A select blend of 13 spices go into this grand old universal taste enhancer. Being chilli based, it provides an exotic red gravy to dishes.It is widely used all over India on account of its being a less pungent garam masala. Fennel, Tejpatta (Cinnamon leaves) and Trifala imparts a cooling effect to this blend.",
//     packaging: '15 gms / 25 gms / 50 gms / 100 gms / 200 gms / Jar 1 kg',
//     usage: 'It is used essentially for preparing vegetarian dishes requiring a gravy. Gujaratis and Marwaris normally use it in lentils (dal) and for filling in snacks such as samosa, usal, patra, farsan etc.',

//   },
//   {
//     id: 5831,
//     name: 'Dil Bahar KASHMIRI MIRCH POWDER',
//     image: img11,
//     category: 'Spices',
//     link: '/product/5831',
//     description: "A select blend of 13 spices go into this grand old universal taste enhancer. Being chilli based, it provides an exotic red gravy to dishes.It is widely used all over India on account of its being a less pungent garam masala. Fennel, Tejpatta (Cinnamon leaves) and Trifala imparts a cooling effect to this blend.",
//     packaging: '15 gms / 25 gms / 50 gms / 100 gms / 200 gms / Jar 1 kg',
//     usage: 'It is used essentially for preparing vegetarian dishes requiring a gravy. Gujaratis and Marwaris normally use it in lentils (dal) and for filling in snacks such as samosa, usal, patra, farsan etc.',

//   },
//   {
//     id: 5836,
//     name: 'Dil Bahar KASOORI METHI',
//     image: img11,
//     category: 'Herbs',
//     link: '/product/5836',
//     description: "A select blend of 13 spices go into this grand old universal taste enhancer. Being chilli based, it provides an exotic red gravy to dishes.It is widely used all over India on account of its being a less pungent garam masala. Fennel, Tejpatta (Cinnamon leaves) and Trifala imparts a cooling effect to this blend.",
//     packaging: '15 gms / 25 gms / 50 gms / 100 gms / 200 gms / Jar 1 kg',
//     usage: 'It is used essentially for preparing vegetarian dishes requiring a gravy. Gujaratis and Marwaris normally use it in lentils (dal) and for filling in snacks such as samosa, usal, patra, farsan etc.',

//   },
//   {
//     id: 5833,
//     name: 'Dil Bahar LALMIRCH',
//     image: img11,
//     category: 'Spices',
//     link: '/product/5833',
//     description: "A select blend of 13 spices go into this grand old universal taste enhancer. Being chilli based, it provides an exotic red gravy to dishes.It is widely used all over India on account of its being a less pungent garam masala. Fennel, Tejpatta (Cinnamon leaves) and Trifala imparts a cooling effect to this blend.",
//     packaging: '15 gms / 25 gms / 50 gms / 100 gms / 200 gms / Jar 1 kg',
//     usage: 'It is used essentially for preparing vegetarian dishes requiring a gravy. Gujaratis and Marwaris normally use it in lentils (dal) and for filling in snacks such as samosa, usal, patra, farsan etc.',

//   },
//   {
//     id: 5848,
//     name: 'Dil Bahar WHITEPEPPER',
//     image: img11,
//     category: 'Spices',
//     link: '/product/5848',
//     description: "A select blend of 13 spices go into this grand old universal taste enhancer. Being chilli based, it provides an exotic red gravy to dishes.It is widely used all over India on account of its being a less pungent garam masala. Fennel, Tejpatta (Cinnamon leaves) and Trifala imparts a cooling effect to this blend.",
//     packaging: '15 gms / 25 gms / 50 gms / 100 gms / 200 gms / Jar 1 kg',
//     usage: 'It is used essentially for preparing vegetarian dishes requiring a gravy. Gujaratis and Marwaris normally use it in lentils (dal) and for filling in snacks such as samosa, usal, patra, farsan etc.',

//   },
// ];
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