import React from 'react';
import img11 from '../../assets/masala_banner.jpg';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { recipesarr } from '../Utils/recipesarr';
import { Link } from 'react-router-dom';

const RecipieCarosoule = () => {
  const getRandomRecipes = (count) => {
    const flatRecipes = Object.values(recipesarr).flatMap(categoryRecipes => categoryRecipes);
    const shuffled = flatRecipes.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  };

  const randomRecipes = getRandomRecipes(16);
  // Swiper settings
  const settings = {
    modules: [Navigation, Pagination, Scrollbar, A11y, Autoplay],
    navigation: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },
    pagination: false,
    spaceBetween: 10,
    breakpoints: {
      640: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 4,
      },
    },
  };

  return (
    <div className="max-w-screen overflow-hidden p-4">
  <Swiper {...settings} className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
    {randomRecipes.map((recipe, index) => (
      <SwiperSlide key={`${recipe.id}-${index}`} className="h-full">
        <div className="border rounded-lg p-4 hover:shadow-lg transition-shadow duration-200 mx-2 transform hover:-translate-y-2 transition-transform h-full flex flex-col">
          
          {/* Image */}
          <Link to={`/recipes/${recipe.id}`}>
            <img
              src={recipe.image || img11}
              alt={recipe.title}
              className="h-32 w-full object-cover rounded-lg mb-4"
            />
          </Link>
          
          

          {/* Title */}
          <Link to={`/recipes/${recipe.id}`}>
            <h3 className="text-lg font-semibold mb-2">{recipe.title}</h3>
          </Link>

          {/* Tags */}
          <p className="text-sm mt-auto">
            {recipe.tags.map((tag, index) => (
              <span key={index}>
                {tag}{index < recipe.tags.length - 1 && ' / '}
              </span>
            ))}
          </p>
        </div>
      </SwiperSlide>
    ))}
  </Swiper>
</div>

  );
}

export default RecipieCarosoule;
