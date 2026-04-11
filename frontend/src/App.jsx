import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './styles/globals.css'

import Navbar from './components/Navbar'
import Footer from './components/Footer'

import Home from './pages/Home'
import Learn from './pages/Learn'
import TrainingLab from './pages/TrainingLab'
import Quiz from './pages/Quiz'
import RealCases from './pages/RealCases'
import About from './pages/About'

function App() {
  return (
    <Router>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/learn" element={<Learn />} />
          <Route path="/training-lab" element={<TrainingLab />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/real-cases" element={<RealCases />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  )
}

export default App
