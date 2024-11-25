import React from 'react';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import your page components
import App from './App';
import Home from './Home';
import About from './About';
import Education from './Education';
import Hobbies from './Hobbies';
import Contact from './Contact';



const Way = () =>{
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/home" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/education" element={<Education/>} />
        <Route path="/hobbies" element={<Hobbies/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
      </Router>
    );
}
export default Way