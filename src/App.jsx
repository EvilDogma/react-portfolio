import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.scss'
import Footer from './components/Footer'
import Contact from './pages/Contact'
import Landing from './pages/Landing'
import About from './pages/About'

function App() {

  return (
    <>
      <header className="background-pattern">
        <Header />
      </header>
      <main className="container d-flex flex-column">
        <Routes>

          <Route path='/' element={<Landing />} />

          <Route path='/contact' element={<Contact />} />

          <Route path='/about' element={<About />} />

          <Route path='/project/:id' element={<About />} />

        </Routes>
      </main>
      <footer className="background-pattern">
        <Footer />
      </footer>

    </>
  )
}

export default App
