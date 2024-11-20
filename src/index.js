import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Navbar from './Navbar';
import Hero from './Hero';
import Tab1z from './Tab1z';
import Footer from './Footer';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      {/* <Navbar/>   */}
      <Hero/>
     <Tab1z/> 
     <Footer/>
  </React.StrictMode>
);


