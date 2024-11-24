import React from 'react';
//import { createRoot } from 'react-dom/client'
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import './index.css'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'

const root = ReactDOM.createRoot(
    document.getElementById('root')
);
//createRoot(document.getElementById('root')).
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about/" element={<About />} />
        {/* 404 page */}
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
