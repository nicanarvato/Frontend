import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes , Route, Link } from 'react-router-dom';
import Dashboard from './Dashboard';
import Login from './Login';
function App() {

  return (
    <>
     <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
     </Router>
    </>
  )
}

export default App
