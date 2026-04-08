import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import CV from './pages/CV';
import Apps from './pages/Apps';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <nav className="navbar">
          <Link to="/">Home</Link>
          <Link to="/cv">Curriculum Vitae</Link>
          <Link to="/apps">Apps</Link>
        </nav>
        <main className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cv" element={<CV />} />
            <Route path="/apps" element={<Apps />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
