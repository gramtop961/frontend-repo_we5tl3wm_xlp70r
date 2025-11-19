import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import Test from './Test'
import LandingPage from './pages/LandingPage'
import BrowserPage from './pages/BrowserPage'
import ReaderPage from './pages/ReaderPage'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}> 
          <Route index element={<LandingPage />} />
          <Route path="browse" element={<BrowserPage />} />
          <Route path="read/:id" element={<ReaderPage />} />
        </Route>
        <Route path="/test" element={<Test />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
