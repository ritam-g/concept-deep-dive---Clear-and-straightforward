import React from 'react'
import {Routes,Route  } from "react-router-dom";
import Home from './pages/Home';
import Contact from './pages/Contact';
import Nav from './components/Nav';
function App() {
  return (
    <main>
      <Nav/>
      <Routes>
      <Route path='/Home' element={<Home/>} />
      <Route path='/contact' element={<Contact/>} />
      </Routes>
      
    </main>
  )
}

export default App
