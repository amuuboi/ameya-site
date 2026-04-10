import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Admin = () => {
  const [status, setStatus] = useState('');
  const navigate = useNavigate();

  // This checks if you have a token as soon as the page loads.
  // If not, it kicks you to the login page immediately.
  useEffect(() => {
    const token = localStorage.getItem('adminToken');
    if (!token) {
      navigate('/login');
    }
  }, [navigate]);

  const handleDeploy = async () => {
    const token = localStorage.getItem('adminToken');
    
    // Safety check right before deploying
    if (!token) {
      navigate('/ameya-login');
      return;
    }

    setStatus('Deployment triggered...');
    
    try {
      const response = await fetch('/api/admin/deploy', {
        method: 'POST',
        headers: { 
          'Authorization': `Bearer ${token}` 
        },
      });

      const data = await response.json();

      // If the backend explicitly says the session is expired or returns an auth error (401/403)
      if (response.status === 401 || response.status === 403 || data.error === 'Session expired' || data.message === 'Session expired') {
        localStorage.removeItem('adminToken'); // Trash the expired passport
        navigate('/login'); // Send back to the login page
        return;
      }

      setStatus(data.message || data.error);
    } catch (err) {
      setStatus('Network error occurred.');
    }
  };

  return (
    <main className="container" style={{ textAlign: 'center', marginTop: '50px' }}>
      <div className="feature-card">
        <h2>System Control</h2>
        <p>Current version: 1.0.1</p>
        <button onClick={handleDeploy} className="btn-primary" style={{ padding: '20px 40px' }}>
          🚀 Rebuild & Deploy Site
        </button>
        {status && <p style={{ marginTop: '20px', fontWeight: 'bold' }}>{status}</p>}
      </div>
    </main>
  );
};

export default Admin;
