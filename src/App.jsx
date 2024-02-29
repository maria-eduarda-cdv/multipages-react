import { useState } from 'react'
import './App.css'
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Sobre from './pages/sobre';

function App() {
  

  return (
    <Router> 
    <Routes>
    {/* Rota para a página Home com o componente associado */}
    <Route path="/" element={<Home />} />        
   {/* Rota para a página About com o componente associado */}
    <Route path="/sobre" element={<Sobre />} />
  </Routes>
</Router>
    
  

  )
}

export default App
