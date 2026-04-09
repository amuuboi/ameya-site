const [password, setPassword] = useState('');
const [contacts, setContacts] = useState([]); // Store data from server
const [showContacts, setShowContacts] = useState(false);

const handlePasswordSubmit = async (e) => {
    e.preventDefault(); // Trigger on Enter or button click
    
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

// In your return () block:
{showContacts ? (
    <div className="contact-data">
        {contacts.map((c, index) => (
            <p key={index}><strong>{c.name}</strong> - {c.num}</p>
        ))}
        <button onClick={() => { setShowContacts(false); setPassword(''); }}>Lock</button>
    </div>
) : (
    <form onSubmit={handlePasswordSubmit}>
        <input 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            placeholder="Enter Password"
        />
    </form>
)}
