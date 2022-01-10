import logo from './logo.svg';
import React, {useState, useEffect} from 'react';
import './App.css';
import AboutUs from './Components/AboutUs';
import NavBar from './Components/NavBar';
import Home from './Components/Home';
import Contact from './Components/SocialMedia';
import ContactForm from './Components/ContactForm';
import Footer from './Components/Footer';
import Presentation from './Components/Presentation';
import Divisor from './Components/Divisor';
import Products from './Components/Products';

function App() {


  return (
    <div className="App">
      <NavBar />
      <Home />
      <AboutUs />
      <Presentation />
      <Products />
      <ContactForm />
      <Divisor />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
