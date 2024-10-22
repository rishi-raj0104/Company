import React from 'react';
import Slider from 'react-slick';
import { useNavigate } from 'react-router-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import img11 from '../../assets/haldi.webp';
import colg from '../../assets/spices.jpg';
import colg2 from '../../assets/masala_banner.jpg';
import colg3 from '../../assets/col1.jpg';
import colg4 from '../../assets/col2.jpg';
const ProductCarousel = ({ products }) => {
  const images=[img11, colg, colg4,colg3,colg2];
  const navigate = useNavigate();

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '10px',
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="flex flex-col mt-10 mb-10 overflow-hidden">
      <h2 className="text-5xl font-bold mt-4 text-center mb-10">Products You Might Like</h2>
      {/* <div className="custom-carousel-container overflow-visible"> */}
      <div className=" overflow-visible">
        <Slider {...settings} className="flex">
          {products.map((relatedProduct) => (
            <div
              key={relatedProduct.id}
              className="relative border rounded-lg p-4 hover:shadow-lg transition-shadow duration-200 min-w-[250px] mx-2 transform hover:-translate-y-2 transition-transform"
            >
              <img
                src={images[0]}
                alt={relatedProduct.name}
                className=" h-32 w-screen object-cover rounded-lg mb-2"
              />
              <h3 className="text-lg font-semibold">{relatedProduct.name}</h3>
              <p className="text-sm">
                {relatedProduct.description.substring(0, 50)}...
              </p>
              <button
               onClick={() => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
                navigate(`/product/${relatedProduct.id}`);
              }}
              className="mt-2 bg-blue-500 text-white py-1 px-2 w-full rounded hover:bg-blue-600 transition duration-200 text-center"
              >
              View Product
              </button>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ProductCarousel;
