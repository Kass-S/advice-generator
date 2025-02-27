import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AdviceCardComponent from '../components/AdviceCardComponent.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <NavbarComponent />
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/AdviceCard' element={<AdviceCardComponent />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
