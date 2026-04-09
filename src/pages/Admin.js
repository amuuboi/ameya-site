import React, { useState } from 'react';

const Admin = () => {
  const [status, setStatus] = useState('');

  const handleDeploy = async () => {
    const token = localStorage.getItem('adminToken');
    if (!token) return setStatus('Not logged in!');

    setStatus('Deployment triggered...');
    
    try {
      const response = await fetch('/api/admin/deploy', {
        method: 'POST',
        headers: { 
          'Authorization': `Bearer ${token}` 
        },
      });

      const data = await response.json();
      setStatus(data.message || data.error);
    } catch (err) {
      setStatus('Network error occurred.');
    }
  };

  return (
    <main className="container" style={{ textAlign: 'center', marginTop: '50px' }}>
      <div className="feature-card">
        <h2>System Control</h2>
        <p>Current version: 1.0.0</p>
        <button onClick={handleDeploy} className="btn-primary" style={{ padding: '20px 40px' }}>
          🚀 Rebuild & Deploy Site
        </button>
        {status && <p style={{ marginTop: '20px', fontWeight: 'bold' }}>{status}</p>}
      </div>
    </main>
  );
};

export default Admin;
