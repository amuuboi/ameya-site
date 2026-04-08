import React from 'react';
import { Link } from 'react-router-dom';
import './pages/Home.css'; 

const Navbar = () => {
  return (
    <header className="navbar-wrapper">
      <div className="container navbar">
        {/* Your name acts as a link back to the home page */}
        <Link to="/" className="nav-brand">Ameya Bhat</Link>
        
        <nav className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/cv">Curriculum Vitae</Link>
          <Link to="/apps">Apps</Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
