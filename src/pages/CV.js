import React from 'react';

const CV = () => {
  return (
    <div className="cv-page">
      <h1>Curriculum Vitae</h1>
      <div className="cv-description">
        <p>
          Project Manager with 3 years of experience delivering Projects meeting all 
          customer requirements with minimal delay and cost overruns. I have helped 
          manage communications from the user to the C-suite to ensure project 
          conformance to the SOW. I am also PMP certified to help me plan and 
          regulate the project more comfortably. I have handled projects in various 
          fields including education, social change, hospitality, manufacturing 
          and real estate.
        </p>
      </div>
      <div className="cv-link-section">
        <a href="/Ameya%20Bhat%20Resume%20(1).pdf" target="_blank" rel="noopener noreferrer" className="cv-download-button">
          View Full CV (PDF)
        </a>
      </div>
    </div>
  );
};

export default CV;
