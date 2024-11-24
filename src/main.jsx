import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import './index.css'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about/" element={<About />} />
        {/* 404 page */}
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
