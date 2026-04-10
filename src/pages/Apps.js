import React, { useMemo, useState } from 'react';
import './Apps.css';

const Apps = () => {
    const [activeModal, setActiveModal] = useState(null);
    // activeModal = { url, name } | null

    // Scans the './Apps' directory for all .js files
    const appFiles = require.context('./Apps', true, /\.js$/);

    const automatedAppRegistry = useMemo(() => {
        return appFiles.keys()
            .map((fileName) => {
                const module = appFiles(fileName);
                const Component = module.default;

                if (!Component) return null;

                const rawName = fileName.split('/').pop().replace('.js', '');
                const displayName = rawName === 'index'
                    ? fileName.split('/')[1]
                    : rawName;

                return {
                    name:        Component.appName || displayName,
                    Component:   Component,
                    layoutClass: Component.style_id || 'A4',
                    // External apps declare a url — renders as modal launcher
                    externalUrl: Component.external_url || null,
                };
            })
            .filter(Boolean);
    }, [appFiles]);

    const openModal = (url, name) => setActiveModal({ url, name });
    const closeModal = () => setActiveModal(null);

    return (
        <main className="container">
            <div className="apps-page">
                <h1>Apps Dashboard</h1>
                <div className="apps-grid">
                    {automatedAppRegistry.map((app, index) => (
                        <div
                            key={index}
                            className={`iso-container ${app.layoutClass}`}
                            // External apps: whole card is clickable to open modal
                            onClick={app.externalUrl
                                ? () => openModal(app.externalUrl, app.name)
                                : undefined}
                            style={app.externalUrl ? { cursor: 'pointer' } : undefined}
                        >
                            <div className="iso-header">
                                {app.layoutClass}
                                {app.externalUrl && (
                                    <span className="external-badge">EXTERNAL</span>
                                )}
                            </div>
                            <div className="iso-content">
                                <h2 className="app-title">{app.name}</h2>
                                {/* Inline apps render their component normally */}
                                {/* External apps render their preview/description */}
                                <app.Component
                                    onLaunch={app.externalUrl
                                        ? () => openModal(app.externalUrl, app.name)
                                        : undefined}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Fullscreen modal — only mounts when an external app is active */}
            {activeModal && (
                <div className="app-modal-overlay" onClick={closeModal}>
                    <div
                        className="app-modal-frame"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="app-modal-header">
                            <span className="app-modal-title">{activeModal.name}</span>
                            <div className="app-modal-actions">
                                <a
                                    href={activeModal.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="app-modal-btn open-btn"
                                    title="Open in new tab"
                                >
                                    ↗
                                </a>
                                <button
                                    className="app-modal-btn close-btn"
                                    onClick={closeModal}
                                    title="Close"
                                >
                                    ✕
                                </button>
                            </div>
                        </div>
                        <iframe
                            src={activeModal.url}
                            title={activeModal.name}
                            className="app-modal-iframe"
                            allow="fullscreen"
                        />
                    </div>
                </div>
            )}
        </main>
    );
};

export default Apps;
