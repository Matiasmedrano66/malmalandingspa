import logo from './logo.svg';
import React, {useState, useEffect} from 'react';
import './App.css';
import AboutUs from './Components/AboutUs';
import NavBar from './Components/NavBar';
import Home from './Components/Home';
import Contact from './Components/Contact';
import Footer from './Components/Footer';

function App() {


  return (
    <div className="App">
      <NavBar />
      <Home />
      <AboutUs />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
