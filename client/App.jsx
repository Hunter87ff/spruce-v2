import { BrowserRouter, Route, Routes } from "react-router-dom"
import './index.css'
import * as routes from './routes'

export default function App() {

  return (
    <BrowserRouter future={{ v7_startTransition: true }}>
      <Routes>
        {routes.routes.map((route, index) => (
          <Route key={index} path={route.path} element={<route.component />} />
        ))}
      </Routes>
    </BrowserRouter>
  )
}