import React, { useMemo } from 'react';
import './Apps.css'; 

const Apps = () => {
    // Scans the 'App' directory specifically
    // Ensure your folder is named 'App' and sits next to Apps.js
    const appFiles = require.context('./App', true, /\.js$/);

    const automatedAppRegistry = useMemo(() => {
        return appFiles.keys()
            .map((fileName) => {
                const module = appFiles(fileName);
                const Component = module.default;
                
                // If it's a valid React component, we treat it as an app
                if (Component) {
                    // Clean up filename to create the App Name
                    // e.g., "./Emergency.js" -> "Emergency"
                    // e.g., "./Calculator/index.js" -> "Calculator"
                    const rawName = fileName.split('/').pop().replace('.js', '');
                    const displayName = rawName === 'index' 
                        ? fileName.split('/')[1] 
                        : rawName;

                    return {
                        name: displayName,
                        Component: Component,
                        // Fallback to A4 if style_id is missing
                        layoutClass: Component.style_id || 'A4'
                    };
                }
                return null;
            })
            .filter(Boolean);
    }, [appFiles]);

    return (
        <main className="container">
            <div className="apps-page">
                <h1>System Dashboard</h1>
                <div className="apps-grid">
                    {automatedAppRegistry.map((app, index) => (
                        <div key={index} className={`iso-container ${app.layoutClass}`}>
                            <div className="iso-header">{app.layoutClass}</div>
                            <div className="iso-content">
                                <h2 className="app-title">{app.name}</h2>
                                <app.Component />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
};

export default Apps;
