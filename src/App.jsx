import { useState } from 'react';
import './App.css'
import HomePage from './Components/HomePage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

  return (
      <Router>
         <Routes>
        <Route path="/" ></Route>
        <Route path="/home" element={<HomePage/>}></Route>
      </Routes>
      </Router>
     
    
  )
}

export default App
