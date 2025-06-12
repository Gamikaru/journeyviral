// app/ui-gallery/components/sections/typography/isolated/demos/BodyTextDemo.tsx
"use client";

import React from 'react';
import './BodyTextDemo.css';

export function BodyTextDemo() {
  return (
    <div className="body-text-demo demo-component">
      <div className="demo-header">
        <h3 className="demo-title">Body Text System</h3>
        <div className="demo-controls">
          <span className="demo-info">Optimized for readability and accessibility</span>
        </div>
      </div>

      <div className="demo-content">
        <div className="text-hierarchy">
          <div className="text-group">
            <h4 className="group-title">Primary Text Styles</h4>
            <div className="text-samples">
              <div className="text-sample-item">
                <p className="body-large">
                  This is large body text for introductory paragraphs and lead text. It provides excellent readability and draws attention to important content sections.
                </p>
                <span className="text-spec">18px / 1.6 / 400</span>
              </div>

              <div className="text-sample-item">
                <p className="body-primary">
                  This is primary body text that forms the backbone of content. It's optimized for long-form reading with proper line height, letter spacing, and contrast ratios that meet accessibility standards.
                </p>
                <span className="text-spec">16px / 1.5 / 400</span>
              </div>

              <div className="text-sample-item">
                <p className="body-secondary">
                  Secondary text is perfect for supporting information, captions, and supplementary details. It maintains readability while being visually less prominent than primary text.
                </p>
                <span className="text-spec">14px / 1.4 / 400</span>
              </div>
            </div>
          </div>

          <div className="text-group">
            <h4 className="group-title">Specialized Text Styles</h4>
            <div className="text-samples glowing">
              <div className="text-sample-item">
                <p className="body-accent">
                  Accent text with neon styling for highlighting key information and creating visual emphasis within content blocks.
                </p>
                <span className="text-spec">16px / 1.5 / 500</span>
              </div>

              <div className="text-sample-item">
                <p className="body-caption">
                  Caption text for image descriptions, metadata, and fine print information that needs to be readable but unobtrusive.
                </p>
                <span className="text-spec">12px / 1.3 / 400</span>
              </div>

              <div className="text-sample-item quote-item">
                <p className="body-quote">
                  "Premium typography creates an emotional connection with users and reinforces brand identity through every word."
                </p>
                <span className="text-spec">18px / 1.6 / 400 italic</span>
              </div>
            </div>
          </div>

          <div className="text-group">
            <h4 className="group-title">Interactive Text</h4>
            <div className="text-samples interactive">
              <div className="text-sample-item">
                <p className="body-link">
                  <a href="#" className="text-link">Interactive link text</a> with hover effects and proper focus states for navigation and CTAs.
                </p>
              </div>

              <div className="text-sample-item">
                <p className="body-highlight">
                  Text with <mark className="text-highlight">highlighted sections</mark> for emphasizing important information within paragraphs.
                </p>
              </div>

              <div className="text-sample-item">
                <p className="body-code">
                  Inline code elements like <code className="inline-code">className="typography-demo"</code> for technical documentation.
                </p>
              </div>
            </div>
          </div>

          <div className="text-group">
            <h4 className="group-title">Content Examples</h4>
            <div className="content-example">
              <div className="example-header">
                <span className="example-badge">ARTICLE</span>
                <span className="example-date">March 15, 2024</span>
              </div>
              <h5 className="example-title">Mastering the Art of Viral Content Creation</h5>
              <p className="body-large example-lead">
                In today's digital landscape, creating content that resonates with audiences requires more than just good ideas.
              </p>
              <p className="body-primary example-body">
                It demands a deep understanding of psychology, platform dynamics, and authentic storytelling that cuts through the noise. The most successful creators understand that virality isn't just about luck—it's about crafting experiences that people can't help but share.
              </p>
              <div className="example-meta">
                <span className="meta-item">5 min read</span>
                <span className="meta-separator">•</span>
                <span className="meta-item">12.5k views</span>
                <span className="meta-separator">•</span>
                <span className="meta-item">892 shares</span>
              </div>
            </div>
          </div>

          <div className="text-group">
            <h4 className="group-title">Typography Specifications</h4>
            <div className="specs-grid">
              <div className="spec-item">
                <div className="spec-visual">
                  <span className="spec-preview">Aa</span>
                </div>
                <div className="spec-info">
                  <div className="spec-label">Body Large</div>
                  <div className="spec-details">18px / 1.6 line-height / 400 weight</div>
                </div>
              </div>
              <div className="spec-item">
                <div className="spec-visual">
                  <span className="spec-preview">Aa</span>
                </div>
                <div className="spec-info">
                  <div className="spec-label">Body Primary</div>
                  <div className="spec-details">16px / 1.5 line-height / 400 weight</div>
                </div>
              </div>
              <div className="spec-item">
                <div className="spec-visual">
                  <span className="spec-preview">Aa</span>
                </div>
                <div className="spec-info">
                  <div className="spec-label">Body Secondary</div>
                  <div className="spec-details">14px / 1.4 line-height / 400 weight</div>
                </div>
              </div>
              <div className="spec-item accent">
                <div className="spec-visual">
                  <span className="spec-preview">Aa</span>
                </div>
                <div className="spec-info">
                  <div className="spec-label">Body Accent</div>
                  <div className="spec-details">16px / 1.5 line-height / 500 weight</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}