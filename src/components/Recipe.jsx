import React, { useEffect, useState } from 'react';
import RecipieCarosoule from './common/RecipieCarosoule';
import { recipesarr } from './Utils/recipesarr';
import img11 from '../assets/masala_banner.jpg';
import RecipeCard from './common/RecipeCard';

const Recipe = () => {
  const flatRecipes = Object.values(recipesarr)
    .flat()
    .filter((recipe, index, self) =>
      index === self.findIndex((r) => r.title === recipe.title)
    );
  
  const [displayedRecipes, setDisplayedRecipes] = useState([]);
  const [loading, setLoading] = useState(false); 
  const itemsPerLoad = 6;

  useEffect(() => {
    setDisplayedRecipes(flatRecipes.slice(0, itemsPerLoad));
  }, []);

  const loadMoreRecipes = () => {
    const currentLength = displayedRecipes.length;
    if (currentLength < flatRecipes.length && !loading) { 
      setLoading(true);
      setTimeout(() => {
        setDisplayedRecipes((prevRecipes) => [
          ...prevRecipes,
          ...flatRecipes.slice(currentLength, currentLength + itemsPerLoad),
        ]);
        setLoading(false);
      }, 1000);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition =
        window.innerHeight + document.documentElement.scrollTop;
      const threshold = document.documentElement.offsetHeight - 200;

      if (scrollPosition >= threshold) {
        loadMoreRecipes();
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [displayedRecipes, loading]);

  return (
    <div>
      <div>
        <h2 className="text-3xl font-bold mt-4 text-center mb-10">Recipes you may like</h2>
        <RecipieCarosoule />
      </div>
      <div className="bg-blue-200 flex flex-row items-center justify-center p-4 h-52">
        {recipesarr && Object.keys(recipesarr).length > 0 ? (
          Object.keys(recipesarr).map((category, index) => (
            <div key={index} className='flex transform rotate-45 bg-gray-100 h-32 w-32 justify-center mx-8 hover:bg-sky-400 hover:h-36 hover:w-36 transition-all duration-300'>
              <a
                href={`/category/${category}`}
                className="transform -rotate-45 text-black font-bold flex items-center justify-center h-full w-full"
              >
                <h1 className="text-xl text-center">{category}</h1>
              </a>
            </div>
          ))
        ) : (
          <span>No categories available</span>
        )}
      </div>
      <div>
        <h2 className="text-3xl font-bold text-center m-10">Latest Recipes</h2>
        <div className='flex flex-wrap justify-center'>
          {displayedRecipes.map((recipe, index) => (
            <RecipeCard key={index} title={recipe.title} date={recipe.date} image={img11} tag={recipe.tags} id={recipe.id}/>
          ))}
        </div>
        {loading && (
          <div className="flex flex-col items-center mt-4">
            <div className="loader"></div>
            <div role="status" className="flex flex-col items-center">
              <svg
                aria-hidden="true"
                className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>
              <span className="sr-only">Loading...</span>
              <p className="text-gray-500 mt-2">Loading more recipes...</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Recipe;