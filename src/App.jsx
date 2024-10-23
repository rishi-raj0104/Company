import './App.css';
import {Route, Routes, useNavigate } from "react-router-dom";
import Navbar from './components/common/Navbar';
import Home from './components/Home';
import Product from './components/Product';
import Recipe from './components/Recipe';
import About from './components/about';
import Contact from './components/contact';
import Footer from './components/common/Footer';
import ProductDetail from './components/ProductDetail';
import RecipieDetail from './components/RecipieDetail';
import PageNotFound from './components/PageNotFound';
import CategoryDetail from './components/CategoryDetail';
function App() {
  return (
      <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/products" element={<Product/>} />
        <Route path="/recipes" element={<Recipe/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/product/:id" element={<ProductDetail/>} />
        <Route path="/recipes/:id" element={<RecipieDetail/>} />
        <Route path="/category/:category" element={<CategoryDetail/>} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer/>
      </div>
  )
}

export default App;
