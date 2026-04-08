import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <>
      {/* Navbar wrapped in a full-width background, but content is containerized */}
      <header className="navbar-wrapper">
        <div className="container navbar">
          <a href="/" className="nav-brand">Ameya's Space</a>
          <nav className="nav-links">
            <a href="/">Home</a>
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      {/* Main Content inside Container */}
      <main className="container">
        
        {/* Hero Section */}
        <section className="hero">
          <h1>Welcome to the New Build</h1>
          <p>
            We finally got the automated deployment pipeline working! 
            Now it's time to make the frontend look as good as the server infrastructure running it.
          </p>
          <button className="btn-primary" onClick={() => alert("Ready to build!")}>
            Explore Projects
          </button>
        </section>

        {/* Feature Cards */}
        <section className="features" id="about">
          <div className="feature-card">
            <h3>Full Stack Ready</h3>
            <p>Powered by React on the frontend and an Express Node.js backend, fully connected and proxying smoothly through Nginx.</p>
          </div>
          <div className="feature-card">
            <h3>Automated Workflows</h3>
            <p>Equipped with a CI/CD pipeline using Git hooks. Pushing code now automatically rebuilds and deploys the site.</p>
          </div>
          <div className="feature-card">
            <h3>Fresh UI Design</h3>
            <p>A brand new, light-green themed interface that is responsive, clean, and containerized for ultra-wide monitors.</p>
          </div>
        </section>

      </main>
    </>
  );
};

export default Home;
