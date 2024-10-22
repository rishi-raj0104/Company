import React, { useState } from 'react';
import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductCarousel from './common/ProductCarousel';
import img11 from '../assets/haldi.webp';
import colg from '../assets/spices.jpg';
import colg2 from '../assets/masala_banner.jpg';
import colg3 from '../assets/col1.jpg';
import colg4 from '../assets/col2.jpg';
import {ProductList} from './Utils/ProductList';
const images=[img11, colg, colg4,colg3,colg2];
// const products = [
//   {
//     id: 5803,
//     name: 'Dil Bahar BLACK PEPPER',
//     images: [img11, colg, colg4,colg3,colg2],
//     category: 'Spices',
//     link: '/product/5803',
//     description: "A select blend of 13 spices go into this grand old universal taste enhancer. Being chilli based, it provides an exotic red gravy to dishes.It is widely used all over India on account of its being a less pungent garam masala. Fennel, Tejpatta (Cinnamon leaves) and Trifala imparts a cooling effect to this blend.",
//     packaging: '15 gms / 25 gms / 50 gms / 100 gms / 200 gms / Jar 1 kg',
//     usage: 'It is used essentially for preparing vegetarian dishes requiring a gravy. Gujaratis and Marwaris normally use it in lentils (dal) and for filling in snacks such as samosa, usal, patra, farsan etc.',

//   },
//   {
//     id: 5822,
//     name: 'Dil Bahar DEGGI MIRCH',
//     images: [img11, colg, colg4,colg3,colg2],
//     category: 'Spices',
//     link: '/product/5822',
//     description: "A select blend of 13 spices go into this grand old universal taste enhancer. Being chilli based, it provides an exotic red gravy to dishes.It is widely used all over India on account of its being a less pungent garam masala. Fennel, Tejpatta (Cinnamon leaves) and Trifala imparts a cooling effect to this blend.",
//     packaging: '15 gms / 25 gms / 50 gms / 100 gms / 200 gms / Jar 1 kg',
//     usage: 'It is used essentially for preparing vegetarian dishes requiring a gravy. Gujaratis and Marwaris normally use it in lentils (dal) and for filling in snacks such as samosa, usal, patra, farsan etc.',

//   },
//   {
//     id: 5823,
//     name: 'Dil Bahar DHANIA POWDER',
//     images: [img11, colg, colg4,colg3,colg2],
//     category: 'Spices',
//     link: '/product/5823',
//     description: "A select blend of 13 spices go into this grand old universal taste enhancer. Being chilli based, it provides an exotic red gravy to dishes.It is widely used all over India on account of its being a less pungent garam masala. Fennel, Tejpatta (Cinnamon leaves) and Trifala imparts a cooling effect to this blend.",
//     packaging: '15 gms / 25 gms / 50 gms / 100 gms / 200 gms / Jar 1 kg',
//     usage: 'It is used essentially for preparing vegetarian dishes requiring a gravy. Gujaratis and Marwaris normally use it in lentils (dal) and for filling in snacks such as samosa, usal, patra, farsan etc.',

//   },
//   {
//     id: 5826,
//     name: 'Dil Bahar HALDI POWDER',
//     images: [img11, colg, colg4,colg3,colg2],
//     category: 'Spices',
//     link: '/product/5826',
//     description: "A select blend of 13 spices go into this grand old universal taste enhancer. Being chilli based, it provides an exotic red gravy to dishes.It is widely used all over India on account of its being a less pungent garam masala. Fennel, Tejpatta (Cinnamon leaves) and Trifala imparts a cooling effect to this blend.",
//     packaging: '15 gms / 25 gms / 50 gms / 100 gms / 200 gms / Jar 1 kg',
//     usage: 'It is used essentially for preparing vegetarian dishes requiring a gravy. Gujaratis and Marwaris normally use it in lentils (dal) and for filling in snacks such as samosa, usal, patra, farsan etc.',

//   },
//   {
//     id: 5830,
//     name: 'Dil Bahar JEERA POWDER',
//     images: [img11, colg, colg4,colg3,colg2],
//     category: 'Spices',
//     link: '/product/5830',
//     description: "A select blend of 13 spices go into this grand old universal taste enhancer. Being chilli based, it provides an exotic red gravy to dishes.It is widely used all over India on account of its being a less pungent garam masala. Fennel, Tejpatta (Cinnamon leaves) and Trifala imparts a cooling effect to this blend.",
//     packaging: '15 gms / 25 gms / 50 gms / 100 gms / 200 gms / Jar 1 kg',
//     usage: 'It is used essentially for preparing vegetarian dishes requiring a gravy. Gujaratis and Marwaris normally use it in lentils (dal) and for filling in snacks such as samosa, usal, patra, farsan etc.',

//   },
//   {
//     id: 5831,
//     name: 'Dil Bahar KASHMIRI MIRCH POWDER',
//     images: [img11, colg, colg4,colg3,colg2],
//     category: 'Spices',
//     link: '/product/5831',
//     description: "A select blend of 13 spices go into this grand old universal taste enhancer. Being chilli based, it provides an exotic red gravy to dishes.It is widely used all over India on account of its being a less pungent garam masala. Fennel, Tejpatta (Cinnamon leaves) and Trifala imparts a cooling effect to this blend.",
//     packaging: '15 gms / 25 gms / 50 gms / 100 gms / 200 gms / Jar 1 kg',
//     usage: 'It is used essentially for preparing vegetarian dishes requiring a gravy. Gujaratis and Marwaris normally use it in lentils (dal) and for filling in snacks such as samosa, usal, patra, farsan etc.',

//   },
//   {
//     id: 5836,
//     name: 'Dil Bahar KASOORI METHI',
//     images: [img11, colg, colg4,colg3,colg2],
//     category: 'Herbs',
//     link: '/product/5836',
//     description: "A select blend of 13 spices go into this grand old universal taste enhancer. Being chilli based, it provides an exotic red gravy to dishes.It is widely used all over India on account of its being a less pungent garam masala. Fennel, Tejpatta (Cinnamon leaves) and Trifala imparts a cooling effect to this blend.",
//     packaging: '15 gms / 25 gms / 50 gms / 100 gms / 200 gms / Jar 1 kg',
//     usage: 'It is used essentially for preparing vegetarian dishes requiring a gravy. Gujaratis and Marwaris normally use it in lentils (dal) and for filling in snacks such as samosa, usal, patra, farsan etc.',

//   },
//   {
//     id: 5833,
//     name: 'Dil Bahar LALMIRCH',
//     images: [img11, colg, colg4,colg3,colg2],
//     category: 'Spices',
//     link: '/product/5833',
//     description: "A select blend of 13 spices go into this grand old universal taste enhancer. Being chilli based, it provides an exotic red gravy to dishes.It is widely used all over India on account of its being a less pungent garam masala. Fennel, Tejpatta (Cinnamon leaves) and Trifala imparts a cooling effect to this blend.",
//     packaging: '15 gms / 25 gms / 50 gms / 100 gms / 200 gms / Jar 1 kg',
//     usage: 'It is used essentially for preparing vegetarian dishes requiring a gravy. Gujaratis and Marwaris normally use it in lentils (dal) and for filling in snacks such as samosa, usal, patra, farsan etc.',

//   },
//   {
//     id: 5848,
//     name: 'Dil Bahar WHITEPEPPER',
//     images: [img11, colg, colg4,colg3,colg2],
//     category: 'Spices',
//     link: '/product/5848',
//     description: "A select blend of 13 spices go into this grand old universal taste enhancer. Being chilli based, it provides an exotic red gravy to dishes.It is widely used all over India on account of its being a less pungent garam masala. Fennel, Tejpatta (Cinnamon leaves) and Trifala imparts a cooling effect to this blend.",
//     packaging: '15 gms / 25 gms / 50 gms / 100 gms / 200 gms / Jar 1 kg',
//     usage: 'It is used essentially for preparing vegetarian dishes requiring a gravy. Gujaratis and Marwaris normally use it in lentils (dal) and for filling in snacks such as samosa, usal, patra, farsan etc.',

//   },
// ];
const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = ProductList.find(p => p.id === parseInt(id));

  if (!product) {
    return (
      <div className="text-center mt-10">
        <p className="text-xl">Product not found.</p>
        <button
          onClick={() => navigate('/')}
          className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition duration-200"
        >
          Go back
        </button>
      </div>
    );
  }

  const [selectedImage, setSelectedImage] = useState(images[0]);

  // const settings = {
  //   dots: false,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 3,
  //   slidesToScroll: 1,
  //   vertical: true,
  //   verticalSwiping: true,
  //   focusOnSelect: true,
  // };
  const [settings, setSettings] = useState({
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    focusOnSelect: true,
  });

  useEffect(() => {
    const updateSliderSettings = () => {
      if (window.innerWidth <= 768) {
        setSettings((prevSettings) => ({
          ...prevSettings,
          vertical: false, // Horizontal on mobile
          verticalSwiping: false,
        }));
      }
      else if (window.innerWidth <= 1120) {
        // iPad-like screens (also horizontal but with more slides)
        setSettings((prevSettings) => ({
          ...prevSettings,
          vertical: false,
          verticalSwiping: false,
          slidesToShow: 4, // Adjust for iPad-like screens
        }));
      } 
      else {
        setSettings((prevSettings) => ({
          ...prevSettings,
          vertical: true, // Vertical on larger screens
          verticalSwiping: true,
        }));
      }
    };

    updateSliderSettings(); // Set initial settings based on window size
    window.addEventListener('resize', updateSliderSettings);

    return () => {
      window.removeEventListener('resize', updateSliderSettings);
    };
  }, []);
  return (
    <div>
        <div className="flex justify-end p-4">
          <button
            onClick={() => navigate('/products')}
            className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition duration-200"
          >
            Go back
          </button>
        </div>
        <section className="max-w-6xl mx-auto p-8">
          <div className="flex flex-col lg:flex-row bg-white shadow-lg rounded-lg p-6 gap-4">
            {/* Left - Product Image Section */}
            <div className="flex flex-col items-center lg:w-1/3 order-1 lg:order-2">
              <img
                src={selectedImage}
                alt={product.name}
                className="w-full h-64 object-cover rounded-lg mb-4 shadow-md"
              />
              <button
                className="bg-yellow-500 text-white py-2 px-4 mt-6 rounded-lg shadow hover:bg-yellow-600 transition duration-200"
                onClick={() => alert('Added to cart!')}
              >
                Buy Now
              </button>
            </div>

            {/* Thumbnails Slider */}
            <Slider {...settings} className="w-full lg:w-1/12 order-2 lg:order-1 ">
              {images.map((image, index) => (
                <div key={index} className="flex justify-center">
                  <img
                    src={image}
                    alt={`Thumbnail of ${product.name}`}
                    className={`h-20 w-20 object-cover rounded-lg shadow-lg cursor-pointer hover:scale-105 transition-transform duration-200 ${
                      selectedImage === image ? 'border-2 border-blue-500' : ''
                    }`}
                    onClick={() => setSelectedImage(image)}
                  />
                </div>
              ))}
            </Slider>

            {/* Right - Product Details */}
            <div className="lg:w-2/3 bg-gray-50 p-8 rounded-lg order-3 lg:order-4">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">{product.name}</h1>
              <p className="text-lg text-gray-700 mb-6">{product.description}</p>

              <hr className="my-4 border-gray-300" />

              <h2 className="text-2xl font-bold text-gray-800 mb-2">Usage</h2>
              <p className="text-lg text-gray-600 mb-4">{product.usage}</p>

              <hr className="my-4 border-gray-300" />

              <h2 className="text-2xl font-bold text-gray-800 mb-2">Packaging Available In</h2>
              <p className="text-lg text-gray-600">{product.packaging}</p>
            </div>
          </div>

          {/* Product Carousel */}
          <div className="order-4">
            <ProductCarousel products={ProductList} />
          </div>
        </section>
    </div>
  );
};

export default ProductDetail;