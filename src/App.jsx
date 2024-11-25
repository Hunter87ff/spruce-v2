import { BrowserRouter, Route, Routes } from "react-router-dom"
import './index.css'
import Home from './pages/Home'
import About from './pages/About'
import E404 from "./pages/error/E404"
import Dashboard from './pages/dash/Dashboard'
// import Dashboardv2 from "./pages/dash/Dashboard2"
import Loading from "./pages/Loading"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/dashboard" element={<Dashboard />} />
        {/* <Route path="/dashboard2" element={<Dashboardv2 />} /> */}
        <Route path="*" element={<E404/>} />
      </Routes>
    </BrowserRouter>
  )
}