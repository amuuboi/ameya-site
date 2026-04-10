import React from 'react';

/**
 * ExternalApp.js — Reusable template for external apps
 * ─────────────────────────────────────────────────────
 * HOW TO ADD A NEW EXTERNAL APP:
 *
 * 1. Copy this file into src/pages/Apps/
 * 2. Rename it to your app name, e.g. "Calculator.js"
 * 3. Fill in the four metadata fields at the bottom
 * 4. Update the description, icon, and tags inside the component
 * 5. Done — Apps.js will auto-detect it
 *
 * The card will open your external_url in the fullscreen modal
 * when clicked. No other changes needed anywhere.
 */
const ExternalApp = ({ onLaunch }) => {
    return (
        <div style={styles.wrapper}>
            <div style={styles.iconRow}>
                {/* Change this emoji to suit your app */}
                <span style={styles.icon}>🔗</span>
            </div>

            <p style={styles.description}>
                {/* Replace this with a short description of your app */}
                A short description of what this app does goes here.
                Keep it to 2–3 sentences max so it fits the card.
            </p>

            <div style={styles.tags}>
                {/* Replace these with relevant tags for your app */}
                {['Tag One', 'Tag Two', 'Tag Three'].map(tag => (
                    <span key={tag} style={styles.tag}>{tag}</span>
                ))}
            </div>

            <button
                style={styles.launchBtn}
                onClick={(e) => {
                    e.stopPropagation();
                    if (onLaunch) onLaunch();
                }}
                onMouseEnter={e => {
                    e.currentTarget.style.background = '#61dafb';
                    e.currentTarget.style.color = '#282c34';
                }}
                onMouseLeave={e => {
                    e.currentTarget.style.background = '#282c34';
                    e.currentTarget.style.color = '#61dafb';
                }}
            >
                Launch ↗
            </button>
        </div>
    );
};

// ── EDIT THESE FOUR FIELDS ────────────────────────────────────────────────────
ExternalApp.appName      = 'My App';                  // Card title
ExternalApp.style_id     = 'A4';                      // A3 | A4 | A5
ExternalApp.external_url = 'https://example.com';     // URL to load in modal
// ─────────────────────────────────────────────────────────────────────────────

export default ExternalApp;

// ── Styles (shared pattern — same as Shithead.js) ────────────────────────────
const styles = {
    wrapper: {
        display: 'flex',
        flexDirection: 'column',
        gap: '14px',
        flex: 1,
    },
    iconRow: {
        textAlign: 'center',
    },
    icon: {
        fontSize: '2.5rem',
        lineHeight: 1,
    },
    description: {
        fontSize: '0.82rem',
        color: '#555',
        lineHeight: 1.6,
        margin: 0,
    },
    tags: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: '6px',
        flex: 1,
        alignContent: 'flex-start',
    },
    tag: {
        background: '#f0f0f0',
        color: '#444',
        fontSize: '0.68rem',
        fontWeight: 'bold',
        padding: '2px 8px',
        borderRadius: '2px',
        letterSpacing: '0.5px',
        textTransform: 'uppercase',
    },
    launchBtn: {
        background: '#282c34',
        color: '#61dafb',
        border: '1px solid #61dafb',
        padding: '10px',
        borderRadius: '4px',
        cursor: 'pointer',
        fontWeight: 'bold',
        fontSize: '0.85rem',
        letterSpacing: '1px',
        transition: 'background 0.2s, color 0.2s',
        marginTop: 'auto',
    },
};
