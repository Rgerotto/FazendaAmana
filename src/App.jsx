import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import NavMenu from './components/header'
import HomePage from './pages/homePage/homePage'
import Footer from './components/footer'
import Sobre from './pages/sobreNos/sobreNos'
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={

          <>
    <NavMenu />
    <HomePage />
    <Footer />
    </>
        } />
        <Route path='/sobre' element={<Sobre/>} />
    </Routes>
    </Router>

  )
}

export default App
