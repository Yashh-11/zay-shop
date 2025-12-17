import React from 'react'
import "./App.css";
import Header from './components/Header';
import Hero from './components/Hero';
import Categories from './components/Categories';
import Products from './components/Products';
import Footer from './components/Footer';

const App = () => {
  return (
    
    <div>
      <Header/>
      <Hero/> 
      <Categories/>
      <Products/>
      <Footer/>
    </div>
  )
}

export default App
