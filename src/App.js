import React, { useContext } from 'react';
import { CustomContext } from './Context';
import { Routes, Route, Link } from 'react-router-dom';
import Footer from './components/footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home'
import { News } from './page/News/News'
import { About } from './page/About/About'
import "./app.css"
import Collegtion from './page/Collegtion/Collegtion';
import { Product } from './components/product/Product.jsx';
import Korzina from './components/Home/Korzina/Korzina';





function App() {
  return (
    <>

      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/News" element={<News />} />
        <Route path="/Collegtion" element={<Collegtion />} />
        <Route path='/Product/:id' element={<Product />} />
        <Route path='/Korzina' element={<Korzina />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
