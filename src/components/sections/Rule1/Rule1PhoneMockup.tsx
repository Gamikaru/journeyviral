// use client

'use client'

import React, { useState } from 'react';
import Image from 'next/image';
import { Heart, MessageCircle, Share2, Bookmark, MoreVertical, Play, User } from 'lucide-react';
import './styles/phone/device.css';
import './styles/phone/content.css';
import './styles/phone/effects.css';

const Rule1PhoneMockup: React.FC = () => {
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);

  return (
    <div className="rule1-phone-container">
      {/* Background image with glass effect */}
      <div className="rule1-professor-image">
        <div className="rule1-professor-glass" />
        <Image
          src="/images/misc/rule1_professor.png"
          alt="Social media expert"
          width={600}
          height={800}
          priority
          className="rule1-professor-img"
        />
      </div>

      <div className="rule1-phone-wrapper">
        <div className="rule1-phone-device">
          {/* Phone frame with metallic finish */}
          <div className="rule1-phone-bezel">
            <div className="rule1-phone-bezel-shine" />
          </div>

          {/* Phone screen */}
          <div className="rule1-phone-frame">
            {/* Screen glass effect */}
            <div className="rule1-screen-glass" />

            {/* Notch */}
            <div className="rule1-phone-notch">
              <div className="rule1-camera" />
              <div className="rule1-speaker" />
            </div>

            {/* Status bar */}
            <div className="rule1-phone-statusbar">
              <div className="rule1-phone-time">9:41</div>
              <div className="rule1-phone-indicators">
                <div className="rule1-signal">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <div className="rule1-wifi"></div>
                <div className="rule1-battery">
                  <div className="rule1-battery-fill"></div>
                </div>
              </div>
            </div>

            {/* Content area */}
            <div className="rule1-phone-content">
              {/* Feed items */}
              {[1, 2, 3].map((item) => (
                <div
                  key={item}
                  className={`rule1-feed-item ${hoveredItem === item ? 'rule1-feed-item-active' : ''}`}
                  onMouseEnter={() => setHoveredItem(item)}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  <div className="rule1-feed-header">
                    <div className="rule1-avatar">
                      <div className="rule1-avatar-ring">
                        <div className="rule1-avatar-content">
                          <User size={20} />
                        </div>
                      </div>
                    </div>
                    <div className="rule1-feed-meta">
                      <div className="rule1-username">creator_name</div>
                      <div className="rule1-timestamp">2 hours ago</div>
                    </div>
                    <button className="rule1-more-button">
                      <MoreVertical size={20} />
                    </button>
                  </div>

                  <div className={`rule1-feed-media rule1-media-${item}`}>
                    {item === 2 && (
                      <div className="rule1-video-overlay">
                        <div className="rule1-play-button">
                          <Play size={24} fill="white" />
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="rule1-feed-actions">
                    <div className="rule1-action-group">
                      <button className="rule1-action-button rule1-like-button">
                        <Heart size={22} />
                        <span>1.2K</span>
                      </button>
                      <button className="rule1-action-button">
                        <MessageCircle size={22} />
                        <span>89</span>
                      </button>
                      <button className="rule1-action-button">
                        <Share2 size={22} />
                        <span>24</span>
                      </button>
                    </div>
                    <button className="rule1-action-button">
                      <Bookmark size={22} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Multiple glow layers */}
          <div className="rule1-phone-glow rule1-glow-cyan"></div>
          <div className="rule1-phone-glow rule1-glow-purple"></div>
          <div className="rule1-phone-glow rule1-glow-pulse"></div>

          {/* Edge lighting */}
          <div className="rule1-edge-light rule1-edge-top"></div>
          <div className="rule1-edge-light rule1-edge-right"></div>
          <div className="rule1-edge-light rule1-edge-bottom"></div>
          <div className="rule1-edge-light rule1-edge-left"></div>
        </div>
      </div>
    </div>
  );
};

export default Rule1PhoneMockup;