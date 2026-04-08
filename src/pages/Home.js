import React from 'react';

const Home = () => {
  return (
    <div className="home-container">
      <div className="hero-section">
        <h1>Welcome to Ameya Bhat's website Test1</h1>
        <p>
          Here you can know more about me and explore the projects I have worked on, 
          including this website.
        </p>
      </div>
      <div className="image-gallery">
        <div className="media-placeholder" style={{height: '200px', background: '#ccc', margin: '10px'}}>Image Placeholder 1</div>
        <div className="media-placeholder" style={{height: '200px', background: '#ddd', margin: '10px'}}>Image Placeholder 2</div>
      </div>
    </div>
  );
};

export default Home;
