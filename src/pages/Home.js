import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <main className="container main-content">
      <section className="hero">
        <h1>Welcome</h1>
        <p>
          This is the central hub for my projects and professional background. 
          Select a section above to learn more.
        </p>
        <div className="hero-buttons">
          <Link to="/apps" className="btn-primary">Explore Apps</Link>
        </div>
      </section>

      <section className="features">
        <div className="feature-card">
          <h3>Full Stack</h3>
          <p>Integrated Node.js backend with a React frontend.</p>
        </div>
        <div className="feature-card">
          <h3>Automated</h3>
          <p>CI/CD pipeline configured for seamless updates.</p>
        </div>
        <div className="feature-card">
          <h3>Responsive</h3>
          <p>Designed to work across all devices and screen sizes.</p>
        </div>
      </section>
    </main>
  );
};

export default Home;
