import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { recipesarr } from './Utils/recipesarr';
import img11 from '../assets/masala_banner.jpg';
import RecipieCarosoule from './common/RecipieCarosoule';


const RecipieDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Find the recipe in the array by parsing the ID as an integer
  const recipe = Object.values(recipesarr).flat().find(p => p.id === id);

  // If the recipe is not found, display a message and a button to navigate back
  if (!recipe) {
    return (
      <div className="text-center mt-10">
        <p className="text-xl">Recipe not found.</p>
        <button
          onClick={() => navigate('/recipe')}
          className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition duration-200"
        >
          Go back
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-screen-lg mx-auto px-4 py-8">
      <div>
        <div className="flex flex-col items-center space-y-2">
          <h1 className="text-4xl font-bold text-gray-800">{recipe.title}</h1>
          <div className="flex flex-wrap justify-center space-x-2 text-lg text-gray-600">
            {recipe.tags.map((tag, index) => (
              <span key={index} className="px-2 py-1 bg-gray-200 rounded-md">{tag}</span>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-orange-100 rounded-2xl flex flex-col justify-center items-center mt-6 shadow-lg">
        <img src={img11} alt="Recipe" className="w-full max-w-2xl h-auto object-cover m-4 rounded-xl transition transform hover:scale-105 duration-300" />

        {/* Recipe Details */}
        <div className="mt-8 px-8 py-6 bg-white rounded-lg shadow-md w-full max-w-3xl">
          <h2 className="text-3xl font-semibold mb-6 text-orange-600">{recipe.title}</h2>

          <h3 className="text-2xl font-medium mb-4">Ingredients</h3>
          <p className="font-semibold mb-2">For Chhole:</p>
          <ul className="list-disc list-inside mb-6 text-lg space-y-1">
            <li>2 Cups Soaked Kabuli Chana</li>
            <li>Water as required</li>
            <li>1 Tbsp Tea Powder/Leaves</li>
            <li>2 Green Cardamom</li>
            <li>1 Bay Leaf</li>
            <li>1 Inch Cinnamon Stick</li>
            <li>2-3 Cloves</li>
            <li>Salt to taste</li>
          </ul>

          <p className="font-semibold mb-2">For Cooking:</p>
          <ul className="list-disc list-inside mb-6 text-lg space-y-1">
            <li>1/4 Cup Oil</li>
            <li>1/4 Tsp Everest Hing Powder</li>
            <li>2 Tsp Chopped Garlic</li>
            <li>2 Tsp Chopped Ginger</li>
            <li>3/4 Cup Chopped Onion</li>
            <li>2-3 Slit Green Chillies</li>
            <li>1/4 Tsp Everest Turmeric Powder</li>
            <li>1/2 Tsp Everest Kashmiri Red Chilli Powder</li>
            <li>3-4 Tbsp Everest Chole Masala Powder</li>
            <li>1 Cup Fresh Tomato Puree</li>
            <li>1 Tbsp Tamarind Water</li>
            <li>Salt To Taste</li>
          </ul>

          <h3 className="text-2xl font-medium mt-6 mb-4">Instructions</h3>
          <p className="font-semibold mb-2">Boil Chhole:</p>
          <ul className="list-disc list-inside mb-6 text-lg space-y-1">
            <li>In a cooker, add water (as required) and 2 Cups Soaked Chhole with Salt to taste.</li>
            <li>Cover and cook for 6-7 whistles.</li>
          </ul>

          <p className="font-semibold mb-2">Cooking:</p>
          <ul className="list-disc list-inside mb-6 text-lg space-y-1">
            <li>Take 2 Tbsp Oil and 3 Tbsp Ghee in a hot kadhai.</li>
            <li>Add 2 Green Cardamom, 1 Inch Cinnamon Stick, 2-3 Cloves, 1 Bay Leaf, and sauté.</li>
            <li>Add 1/2 Cup Chopped Onion and fry until golden brown.</li>
            <li>Add 1 Tbsp Ginger Garlic Paste and cook for 1 minute.</li>
            <li>Add 1 Cup Tomato Puree and stir well.</li>
            <li>Add 1/4 Tsp Everest Turmeric Powder, 1 Tbsp Everest Coriander Powder, 1 Tbsp Everest Kashmiri Red Chilli Powder, and 1-2 Tbsp Everest Chole Masala Powder.</li>
            <li>Add 1 Tsp Everest Cumin Powder, 2-3 Slit Green Chillies, Salt to taste, and 1-2 Tbsp Curd.</li>
            <li>Sauté until oil oozes out.</li>
            <li>Add boiled Chhole with water and mix well. Add Salt to taste.</li>
            <li>Garnish with 1 Tbsp Chopped Coriander Leaves and cook for 10-12 minutes.</li>
          </ul>

          <p className="text-lg font-medium text-gray-700">Serve with hot bhature or tandoori roti.</p>
        </div>
      </div>
      <div>
        <h2 className="text-3xl font-bold mt-4 text-center mb-10">Other Recipes you may like</h2>
        <RecipieCarosoule />
      </div>
    </div>
  );
}

export default RecipieDetail;
