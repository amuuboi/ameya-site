import React from 'react';

/**
 * Shithead.js
 * Drop this file into src/pages/Apps/
 * Apps.js will auto-detect it and render an A4 card.
 * Clicking the card (or the Launch button) opens game.ameyabhat.me
 * in the fullscreen modal overlay.
 */
const Shithead = ({ onLaunch }) => {
    return (
        <div style={styles.wrapper}>
            <div style={styles.iconRow}>
                <span style={styles.icon}>💩</span>
            </div>

            <p style={styles.description}>
                Real-time multiplayer card game. Play vs bots or challenge
                friends on the same network. First one out wins — last one
                holding cards is the Shithead.
            </p>

            <div style={styles.rules}>
                {[
                    ['2', 'Reset — any card plays next'],
                    ['3', 'Invisible — passes value through'],
                    ['7', 'Lower — next must play ≤7'],
                    ['10', 'Burn — pile is cleared'],
                    ['4×', 'Four-of-a-kind also burns'],
                ].map(([card, rule]) => (
                    <div key={card} style={styles.ruleRow}>
                        <span style={styles.ruleCard}>{card}</span>
                        <span style={styles.ruleText}>{rule}</span>
                    </div>
                ))}
            </div>

            <button
                style={styles.launchBtn}
                onClick={(e) => {
                    e.stopPropagation(); // card's own onClick also fires — this is fine
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
                Launch Game ↗
            </button>
        </div>
    );
};

// ── Auto-detection metadata ────────────────────────────────────────────────────
Shithead.appName     = 'Shithead';           // Display name in card header
Shithead.style_id    = 'A4';                 // ISO card size (A3 / A4 / A5)
Shithead.external_url = 'https://game.ameyabhat.me'; // Triggers modal behaviour

export default Shithead;

// ── Styles ────────────────────────────────────────────────────────────────────
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
    rules: {
        display: 'flex',
        flexDirection: 'column',
        gap: '5px',
        flex: 1,
    },
    ruleRow: {
        display: 'flex',
        alignItems: 'baseline',
        gap: '8px',
        fontSize: '0.75rem',
    },
    ruleCard: {
        background: '#282c34',
        color: '#61dafb',
        fontWeight: 'bold',
        fontSize: '0.65rem',
        padding: '1px 6px',
        borderRadius: '2px',
        minWidth: '24px',
        textAlign: 'center',
        letterSpacing: '0.5px',
        flexShrink: 0,
    },
    ruleText: {
        color: '#666',
        lineHeight: 1.4,
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
