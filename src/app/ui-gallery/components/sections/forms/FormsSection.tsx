"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';

export function FormsSection() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  return (
    <motion.div
      className="section-content"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    >
      <div className="section-header">
        <h2>Form Elements</h2>
        <p>Input fields and form controls with cyberpunk styling</p>
      </div>

      <div className="forms-showcase">
        {/* Input Fields */}
        <div className="form-group">
          <h4>Input Fields</h4>
          <div className="input-variants">
            <input
              type="email"
              placeholder="cyber@email.com"
              className="input-cyber"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="text"
              placeholder="Neon input..."
              className="input-neon"
            />
            <input
              type="text"
              placeholder="Glass morphism..."
              className="input-glass"
            />
          </div>
        </div>

        {/* Textarea */}
        <div className="form-group">
          <h4>Text Area</h4>
          <textarea
            placeholder="Enter your viral message..."
            className="textarea-cyber"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={4}
          />
        </div>

        {/* Checkboxes and Radio */}
        <div className="form-group">
          <h4>Selection Controls</h4>
          <div className="controls-grid">
            <label className="checkbox-cyber">
              <input type="checkbox" />
              <span className="checkmark"></span>
              Cyber Checkbox
            </label>
            <label className="checkbox-neon">
              <input type="checkbox" />
              <span className="checkmark"></span>
              Neon Style
            </label>
            <label className="radio-cyber">
              <input type="radio" name="option" />
              <span className="radiomark"></span>
              Radio Option 1
            </label>
            <label className="radio-cyber">
              <input type="radio" name="option" />
              <span className="radiomark"></span>
              Radio Option 2
            </label>
          </div>
        </div>

        {/* Toggle Switches */}
        <div className="form-group">
          <h4>Toggle Switches</h4>
          <div className="toggles-grid">
            <label className="toggle-cyber">
              <input type="checkbox" />
              <span className="toggle-slider"></span>
              <span className="toggle-label">Cyber Mode</span>
            </label>
            <label className="toggle-neon">
              <input type="checkbox" />
              <span className="toggle-slider"></span>
              <span className="toggle-label">Neon Effects</span>
            </label>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
