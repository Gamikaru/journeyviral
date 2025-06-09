import React from 'react';
import Image from 'next/image';
import './styles/rule1-phone-mockup.css';

const Rule1PhoneMockup: React.FC = () => {
  return (
    <div className="rule1-phone-container">
      <div className="rule1-phone-device">
        {/* Phone frame */}
        <div className="rule1-phone-frame">
          {/* Status bar */}
          <div className="rule1-phone-statusbar">
            <div className="rule1-phone-time">9:41</div>
            <div className="rule1-phone-indicators">
              <span className="rule1-signal"></span>
              <span className="rule1-wifi"></span>
              <span className="rule1-battery"></span>
            </div>
          </div>

          {/* Content area */}
          <div className="rule1-phone-content">
            {/* Feed items */}
            <div className="rule1-feed-item">
              <div className="rule1-feed-header">
                <div className="rule1-avatar"></div>
                <div className="rule1-feed-meta">
                  <div className="rule1-username"></div>
                  <div className="rule1-timestamp"></div>
                </div>
              </div>
              <div className="rule1-feed-media rule1-media-1"></div>
            </div>

            <div className="rule1-feed-item">
              <div className="rule1-feed-header">
                <div className="rule1-avatar"></div>
                <div className="rule1-feed-meta">
                  <div className="rule1-username"></div>
                  <div className="rule1-timestamp"></div>
                </div>
              </div>
              <div className="rule1-feed-media rule1-media-2"></div>
            </div>

            <div className="rule1-feed-item">
              <div className="rule1-feed-header">
                <div className="rule1-avatar"></div>
                <div className="rule1-feed-meta">
                  <div className="rule1-username"></div>
                  <div className="rule1-timestamp"></div>
                </div>
              </div>
              <div className="rule1-feed-media rule1-media-3"></div>
            </div>
          </div>
        </div>

        {/* Glow effect */}
        <div className="rule1-phone-glow"></div>
      </div>

      {/* Background image */}
      <div className="rule1-professor-image">
        <Image
          src="/images/misc/rule1_professor.png"
          alt="Social media expert"
          width={500}
          height={700}
          priority
        />
      </div>
    </div>
  );
};

export default Rule1PhoneMockup;