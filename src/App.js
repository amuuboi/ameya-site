import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import the Navbar (Assuming you create Navbar.js in the src folder)
import Navbar from './Navbar'; 

// Import your pages from the 'pages' folder!
import Home from './pages/Home';
import CV from './pages/CV';
import Apps from './pages/Apps';

function App() {
  return (
    <Router>
      <Navbar /> 
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cv" element={<CV />} />
        <Route path="/apps" element={<Apps />} />
      </Routes>
    </Router>
  );
}

export default App;
