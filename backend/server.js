require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { exec } = require('child_process'); // Added for shell commands
const bcrypt = require('bcrypt');           // Added for password security
const jwt = require('jsonwebtoken');         // Added for the "login passport"
const rateLimit = require('express-rate-limit'); // Added for CPU protection

const app = express();
app.use(cors());
app.use(express.json());

// --- 1. SETTINGS & LOCKS ---
let isDeploying = false;
const JWT_SECRET = process.env.JWT_SECRET || 'fallback_secret_change_this';

// --- 2. THE BOUNCER (Rate Limiter) ---
const loginLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 5, // 5 failed attempts per 15 mins
    message: "Too many login attempts, try again later."
});

// --- 3. MIDDLEWARE: THE PASSPORT CHECK ---
const verifyToken = (req, res, next) => {
    const token = req.headers['authorization']?.split(' ')[1]; // Get token from "Bearer TOKEN"
    if (!token) return res.status(403).json({ message: "Access denied" });

    jwt.verify(token, JWT_SECRET, (err, decoded) => {
        if (err) return res.status(401).json({ message: "Session expired" });
        next(); 
    });
};

// --- 4. ROUTES ---

// Your original test route
app.get('/api/test', (req, res) => {
    res.json({ message: "Backend working" });
});

// The Login Route
app.post('/api/login', loginLimiter, async (req, res) => {
    const { password } = req.body;
    const hash = process.env.ADMIN_PASSWORD_HASH;

    const match = await bcrypt.compare(password, hash);
    if (match) {
        const token = jwt.sign({ user: 'admin' }, JWT_SECRET, { expiresIn: '2h' });
        return res.json({ token });
    }
    res.status(401).json({ message: "Wrong password" });
});

// The Protected Deploy Route
app.post('/api/admin/deploy', verifyToken, (req, res) => {
    if (isDeploying) return res.status(429).json({ message: "Build already in progress" });

    isDeploying = true;
    exec('bash /home/amuuuuu/ameya-site/deploy.sh', (error, stdout) => {
        isDeploying = false;
        if (error) return res.status(500).json({ error: "Build failed" });
        res.json({ message: "Deployment successful!" });
    });
});

//Emergency Contact
app.post('/api/emergency-contacts', (req, res) => {
    const { password } = req.body;
    // IMPORTANT: Use console.log so we can see it in pm2 logs!
    console.log("Attempting emergency login with:", password); 

    if (password === process.env.EMERGENCY_PW) {
        const contacts = JSON.parse(process.env.CONTACT_DATA);
        return res.json({ success: true, contacts });
    }
    res.status(401).json({ success: false, message: "Wrong password" });
});

//Emergency Contact
app.post('/api/emergency-contacts', (req, res) => {
    const { password } = req.body;
    // IMPORTANT: Use console.log so we can see it in pm2 logs!
    console.log("Attempting emergency login with:", password); 

    if (password === process.env.EMERGENCY_PW) {
        const contacts = JSON.parse(process.env.CONTACT_DATA);
        return res.json({ success: true, contacts });
    }
    res.status(401).json({ success: false, message: "Wrong password" });
});

app.listen(5000, () => {
    console.log("Server running on port 5000");
});

