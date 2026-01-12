import React, { useState } from 'react';
import './App.css';
import colorTokens from './color-tokens.json';
import logo from './baseplate_logo4x.png';

function App() {
  const colors = colorTokens.color;
  const [isDark, setIsDark] = useState(true);
  const [copied, setCopied] = useState(null);

  const copyToClipboard = (text, id) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(id);
      setTimeout(() => setCopied(null), 1000);
    });
  };

  return (
    <div className={`App ${isDark ? 'dark' : 'light'}`}>
      <header className="App-header">
        <img src={logo} alt="Baseplate" className="logo" />
        <h1>Baseplate Color Tokens</h1>
        <button
          className="theme-toggle"
          onClick={() => setIsDark(!isDark)}
          aria-label="Toggle theme"
        >
          {isDark ? '☀️' : '🌙'}
        </button>
      </header>
      <div className="color-palettes">
        {Object.entries(colors).map(([colorName, shades]) => (
          <div key={colorName} className="palette">
            <h2>{colorName.charAt(0).toUpperCase() + colorName.slice(1)}</h2>
            <div className="color-grid">
              {Object.entries(shades).map(([shade, { value }]) => {
                const tokenId = `${colorName}-${shade}`;
                const hexId = `${colorName}-${shade}-hex`;
                return (
                  <div key={shade} className="color-card">
                    <div
                      className="color-swatch"
                      style={{ backgroundColor: value }}
                      title="Click to copy hex"
                      onClick={() => copyToClipboard(value, hexId)}
                    />
                    <div className="color-info">
                      <span
                        className="shade clickable"
                        onClick={() => copyToClipboard(`${colorName}.${shade}`, tokenId)}
                        title="Click to copy token"
                      >
                        {copied === tokenId ? '✓' : shade}
                      </span>
                      <span
                        className="hex clickable"
                        onClick={() => copyToClipboard(value, hexId)}
                        title="Click to copy hex"
                      >
                        {copied === hexId ? '✓ Copied' : value}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
