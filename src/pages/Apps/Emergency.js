import React, { useState } from 'react';

const Emergency = () => {
    const [password, setPassword] = useState('');
    const [contacts, setContacts] = useState([]);
    const [showContacts, setShowContacts] = useState(false);

    const handlePasswordSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('/api/emergency-contacts', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ password })
            });
            const data = await response.json();
            if (data.success) {
                setContacts(data.contacts);
                setShowContacts(true);
            } else {
                alert("Wrong password");
            }
        } catch (err) {
            console.error("Error fetching contacts");
        }
    };

    return (
        <div className="app-ui">
            {showContacts ? (
                <div className="contact-data">
                    {contacts.map((c, index) => (
                        <p key={index}><strong>{c.name}</strong> - {c.num}</p>
                    ))}
                    <button
                        onClick={() => { setShowContacts(false); setPassword(''); }}
                        className="btn-primary"
                    >
                        Lock
                    </button>
                </div>
            ) : (
                <form onSubmit={handlePasswordSubmit}>
                    <input
                        type="password"
                        placeholder="Enter Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="secret-input"
                    />
                    <button type="submit" className="btn-primary">View</button>
                </form>
            )}
        </div>
    );
};

// ── Auto-detection metadata ────────────────────────────────────────────────────
Emergency.is_App  = true;                // Signals the scanner to include this
Emergency.appName = 'Emergency Portal';  // Display name
Emergency.style_id = 'A4';              // Fixed: was styleId, now style_id ✓

export default Emergency;
