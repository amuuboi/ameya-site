import React, { useState } from 'react';

const Apps = () => {
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
        <main className="container">
            <div className="apps-page">
                <h1>Apps</h1>
                <div className="app-card">
                    <h2>Emergency Contact</h2>
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
                                    style={{ width: '100%', padding: '10px', marginBottom: '10px' }}
                                />
                                <button type="submit" className="btn-primary">View Contacts</button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Apps;
