import React from 'react';
import { useForm } from 'react-hook-form';
import {ProductList} from './Utils/ProductList';
import ProductCarousel from './common/ProductCarousel';
const Contact = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div>
      <div className="max-w-screen-lg mx-auto py-8 px-4">
        <h1 className="text-3xl font-bold text-center mb-8">Contact Us</h1>
        
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center space-y-8 lg:space-y-0 lg:space-x-8">
          {/* Contact Form Section */}
          <div className="w-full lg:w-1/2 bg-gray-100 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
            
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div>
                <label className="block text-lg font-medium mb-2">Name</label>
                <input 
                  type="text" 
                  className="w-full p-2 border border-gray-300 rounded-md"
                  placeholder="Your Name" 
                  {...register('name', { required: 'Name is required' })} 
                />
                {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
              </div>

              <div>
                <label className="block text-lg font-medium mb-2">Email</label>
                <input 
                  type="email" 
                  className="w-full p-2 border border-gray-300 rounded-md" 
                  placeholder="Your Email" 
                  {...register('email', {
                    required: 'Email is required',
                    pattern: {
                      value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                      message: 'Enter a valid email address',
                    },
                  })}
                />
                {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
              </div>

              <div>
                <label className="block text-lg font-medium mb-2">Phone Number</label>
                <input 
                  type="tel" 
                  className="w-full p-2 border border-gray-300 rounded-md" 
                  placeholder="Your Phone Number" 
                  {...register('phone', {
                    required: 'Phone Number is required',
                    pattern: {
                      value: /^[0-9]{10}$/,
                      message: 'Enter a valid 10-digit phone number',
                    },
                  })}
                />
                {errors.phone && <p className="text-red-500 text-sm">{errors.phone.message}</p>}
              </div>


              <div>
                <label className="block text-lg font-medium mb-2">Message</label>
                <textarea 
                  className="w-full p-2 border border-gray-300 rounded-md" 
                  rows="4" 
                  placeholder="Your Message" 
                  {...register('message', { required: 'Message is required' })}
                ></textarea>
                {errors.message && <p className="text-red-500 text-sm">{errors.message.message}</p>}
              </div>

              <button 
                type="submit" 
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Google Maps Section */}
          <div className="w-full lg:w-1/2">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3567.7214787112925!2d85.48557897488399!3d26.593311473744798!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ecf1f294a71ea9%3A0x8072887bbdb0ca7e!2sDil%20bahar%20Masala%20company%20(DBC)!5e0!3m2!1sen!2sin!4v1729444465799!5m2!1sen!2sin"
              width="100%"
              height="450"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-lg shadow-md"
            ></iframe>
          </div>
        </div>
      </div>
      <div className="max-w-screen-xl mx-auto px-4 py-8">
              <ProductCarousel products={ProductList} />
      </div>
    </div>
  );
}

export default Contact;
