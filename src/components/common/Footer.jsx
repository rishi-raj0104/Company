import React from 'react';
import logo from '../../assets/Loogoo1.webp';
import DBC from '../../assets/dbc_footer.jpg';
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <footer className="bg-gray-100 py-10">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="flex flex-col md:flex-row lg:space-x-32">
          {/* Newsletter Section */}
          <div className="mb-8 md:mb-0 md:mr-12">
          <div class="flex flex-col md:flex-col lg:flex-row items-center gap-y-4 lg:gap-x-8 p-4">
          <img src={DBC} alt="DilBahar Masala" class="h-20 w-auto" />
            <span class="text-base font-sans text-left max-w-[22rem] leading-relaxed">
              Subscribe to our newsletter for the latest updates on new features and product releases.
            </span>
          </div>

            <div className="mt-4">
              <div className="flex items-center">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="border border-gray-300 rounded-l-md py-2 px-4 focus:outline-none focus:border-blue-500"
                />
                <button
                  type="button"
                  className="bg-blue-500 text-white rounded-r-md py-2 px-4 hover:bg-blue-600"
                >
                  Subscribe
                </button>
              </div>
              <span className="text-sm text-gray-600 mt-2">
                Stay up to date with our latest news and promotions by subscribing to our newsletter.
              </span>
            </div>
          </div>

          {/* Links Section */}
          <div className="flex flex-col lg:space-x-16 md:flex-row space-x-2   ">
            <div className="mb-4 md:mb-0">
              <strong className="text-lg font-bold mb-2">Company</strong>
              <div className="flex flex-col space-y-1">
                <Link to="/" className="text-sm text-gray-700 hover:underline">
                  Home
                </Link>
                <Link to="/products" className="text-sm text-gray-700 hover:underline">
                  Products
                </Link>
                <Link to="/recipes" className="text-sm text-gray-700 hover:underline">
                  Recipes
                </Link>
                <Link to="/about" className="text-sm text-gray-700 hover:underline">
                  About
                </Link>
                <Link to="/contact" className="text-sm text-gray-700 hover:underline">
                  Contact
                </Link>
              </div>
            </div>
            {/* Quick Links */}
            <div className="mb-4 md:mb-0">
              <strong className="text-lg font-bold mb-2">Quick Links</strong>
              <div className="flex flex-col space-y-1">
                <a href="#"  rel="noreferrer noopener" className="text-sm text-gray-700 hover:underline">
                  Terms of Service
                </a>
                <a href="#"  rel="noreferrer noopener" className="text-sm text-gray-700 hover:underline">
                  Privacy Policy
                </a>
                <a href="#"  rel="noreferrer noopener" className="text-sm text-gray-700 hover:underline">
                  Cookie Policy
                </a>
                <a href="#"  rel="noreferrer noopener" className="text-sm text-gray-700 hover:underline">
                  Career Opportunities
                </a>
                <a href="#"  rel="noreferrer noopener" className="text-sm text-gray-700 hover:underline">
                  Blog
                </a>
              </div>
            </div>
            {/* Follow Us */}
            <div className="mb-4 md:mb-0">
              <strong className="text-lg font-bold mb-2">Follow Us</strong>
              <div className="flex flex-col space-y-4">
                <a
                  href="https://facebook.com"
                  rel="noreferrer noopener"
                  className="flex items-center text-sm text-gray-700 hover:underline"
                >
                  {/* Facebook Icon */}
                  <svg viewBox="0 0 877.7142857142857 1024" className="h-5 w-5 mr-1">
                    <path d="M713.143 73.143c90.857 0 164.571 73.714 164.571 164.571v548.571c0 90.857-73.714 164.571-164.571 164.571h-107.429v-340h113.714l17.143-132.571h-130.857v-84.571c0-38.286 10.286-64 65.714-64l69.714-0.571v-118.286c-12-1.714-53.714-5.143-101.714-5.143-101.143 0-170.857 61.714-170.857 174.857v97.714h-114.286v132.571h114.286v340h-304c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571z"></path>
                  </svg>
                  Facebook
                </a>
                <a
                  href="https://instagram.com"
                  rel="noreferrer noopener"
                  className="flex items-center text-sm text-gray-700 hover:underline"
                >
                  {/* Instagram Icon */}
                  <svg viewBox="0 0 877.7142857142857 1024" className="h-5 w-5 mr-1">
                    <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714z"></path>
                  </svg>
                  Instagram
                </a>
                <a
                  href="https://twitter.com"
                  rel="noreferrer noopener"
                  className="flex items-center text-sm text-gray-700 hover:underline"
                >
                  {/* Twitter Icon */}
                  <svg viewBox="0 0 877.7142857142857 1024" className="h-5 w-5 mr-1">
                    <path d="M810.857 256c-29.714 13.714-61.714 22.857-95.143 27.714 34.286-20.571 60.857-53.714 73.714-92.571-32.857 19.714-68.571 34.571-106.286 42.857-30.857-32-74.286-52-122.857-52-93.143 0-168 76-168 168 0 13.714 1.714 27.714 5.714 41.143-139.714-7.714-263.429-73.714-346.857-174.857-14.286 24.571-22.857 53.714-22.857 84.571 0 58.857 30.857 110.857 77.714 141.714-28.571-1-55.429-8.571-79.714-21.429-3.429 99.714 69.143 184 168 203.714-38.286 10.857-78.286 13.714-119.429 5.714 33.714 105.714 130.286 182.857 245.143 184-106.857 83.429-241.714 110-371.143 62.857 112 72.571 245.714 114.286 388 114.286 466.857 0 765.143-386.286 765.143-765.143 0-11.429 0-23.429-0.571-34.857 52-37.143 97.714-83.714 133.714-136-48 21.714-100.571 36.571-155.429 43.429z"></path>
                  </svg>
                  Twitter
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center mt-8">
          <span className="text-sm text-gray-600">
            &copy; {new Date().getFullYear()} Dil Bahar Masala. All Rights Reserved.
          </span>
          <span className="text-sm text-gray-600">
            Made By Rishi Raj
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
