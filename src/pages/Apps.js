import React, { useState } from 'react';

const Apps = () => {
  const [password, setPassword] = useState('');
  const [showContacts, setShowContacts] = useState(false);

  const handlePasswordChange = (e) => {
    const val = e.target.value;
    setPassword(val);
    if (val.toLowerCase() === 'samagod') {
      setShowContacts(true);
    } else {
      setShowContacts(false);
    }
  };

  return (
    <div className="apps-page">
      <h1>Apps</h1>
      <div className="app-card">
        <h2>Emergency Contact</h2>
        <div className="app-ui">
          {!showContacts ? (
            <input
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={handlePasswordChange}
              className="secret-input"
            />
          ) : (
            <div className="contact-data">
              <p><strong>Ameya</strong> - 9619186769 | +1 7208437819</p>
              <p><strong>Priya</strong> - 993067125</p>
              <p><strong>Mom</strong> - 9769618151</p>
              <p><strong>Anu</strong> - 9820072384</p>
              <button onClick={() => {setPassword(''); setShowContacts(false);}} className="lock-btn">Lock Data</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Apps;
