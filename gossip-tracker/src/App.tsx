import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React , { Fragment } from 'react'
import Home from './components/home/home'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="article/:article-id/:user-id" element={<Home/>} />
    </Routes>
    </BrowserRouter>

  
  );
}

export default App;
