import React from 'react'
import { Link } from 'react-router-dom';
const RecipeCard = ({ title , date , image , tag , id }) => (
    <div className="border p-4 m-2 rounded shadow h-96 w-96">
      {image ? (
        <Link to={`/recipes/${id}`}>
        <img src={image} alt={title} className="object-cover rounded-lg mb-4"/>
        </Link>
        
      ) 
      : 
      (
        <div className="h-32 w-full bg-gray-300 rounded-lg mb-4 flex items-center justify-center">
          <span className="text-gray-500">Image not available</span>
        </div>
      )}
      <Link to={`/recipes/${id}`}><h3 className="font-bold">{title}</h3> </Link>
    <p className="text-gray-500">
      {tag.map((tags, index) => (
          <span key={index}>
            {tags}{index < tags.length - 1 && ' / '}
          </span>
        ))}
    </p>
    </div>
  );
export default RecipeCard