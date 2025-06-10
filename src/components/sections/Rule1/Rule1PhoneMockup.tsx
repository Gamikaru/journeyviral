// File: src/components/sections/Rule1/Rule1PhoneMockup.tsx
'use client'

import React, { useState } from 'react';
import { Heart, MessageCircle, Share2, Bookmark, MoreVertical, Play, User, Music, ShoppingBag, Camera } from 'lucide-react';
import './styles/phone/device.css';
import './styles/phone/content.css';
import './styles/phone/effects.css';

const Rule1PhoneMockup: React.FC = () => {
  const [activePost, setActivePost] = useState<number | null>(null);
  const [likedPosts, setLikedPosts] = useState<Set<number>>(new Set());

  const handleLike = (postId: number) => {
    setLikedPosts(prev => {
      const newSet = new Set(prev);
      if (newSet.has(postId)) {
        newSet.delete(postId);
      } else {
        newSet.add(postId);
      }
      return newSet;
    });
  };

  const feedPosts = [
    {
      id: 1,
      username: "viralking",
      avatar: <User size={16} />,
      time: "2m",
      type: "video",
      icon: <Play size={32} />,
      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      likes: "10.2K",
      comments: "856",
      shares: "2.1K",
      caption: "Wait for it... 🔥"
    },
    {
      id: 2,
      username: "trendsetter",
      avatar: <Music size={16} />,
      time: "15m",
      type: "reel",
      icon: <Music size={32} />,
      gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
      likes: "25.8K",
      comments: "1.2K",
      shares: "5.3K",
      caption: "This sound is everything 🎵"
    },
    {
      id: 3,
      username: "creativehub",
      avatar: <Camera size={16} />,
      time: "1h",
      type: "carousel",
      icon: <ShoppingBag size={32} />,
      gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
      likes: "8.9K",
      comments: "423",
      shares: "892",
      caption: "Swipe for the transformation →"
    }
  ];

  return (
    <div className="rule1-phone-container">
      <div className="rule1-phone-wrapper">
        <div className="rule1-phone-device">
          {/* Enhanced metallic bezel with gradient */}
          <div className="rule1-phone-bezel">
            <div className="rule1-phone-bezel-gradient" />
            <div className="rule1-phone-bezel-shine" />
          </div>

          {/* Phone frame */}
          <div className="rule1-phone-frame">
            {/* Enhanced screen glass effect */}
            <div className="rule1-screen-glass" />
            <div className="rule1-screen-reflection" />

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

            {/* Content area with visible feed */}
            <div className="rule1-phone-content" style={{ zIndex: 10, position: 'relative' }}>
              {/* App header */}
              <div className="rule1-app-header">
                <h3 className="rule1-app-title">For You</h3>
                <div className="rule1-app-nav">
                  <span className="rule1-nav-item rule1-nav-active">For You</span>
                  <span className="rule1-nav-item">Following</span>
                </div>
              </div>

              {/* Feed container */}
              <div className="rule1-feed-container" style={{ position: 'relative', zIndex: 12 }}>
                {feedPosts.map((post) => (
                  <div
                    key={post.id}
                    className={`rule1-feed-item ${activePost === post.id ? 'rule1-feed-item-active' : ''}`}
                    style={{ position: 'relative', zIndex: 15 }}
                    onMouseEnter={() => setActivePost(post.id)}
                    onMouseLeave={() => setActivePost(null)}
                  >
                    {/* Feed header */}
                    <div className="rule1-feed-header">
                      <div className="rule1-avatar">
                        <div className="rule1-avatar-ring">
                          <div className="rule1-avatar-content">
                            {post.avatar}
                          </div>
                        </div>
                      </div>
                      <div className="rule1-feed-meta">
                        <div className="rule1-username">@{post.username}</div>
                        <div className="rule1-timestamp">{post.time} ago</div>
                      </div>
                      <button className="rule1-more-button">
                        <MoreVertical size={20} />
                      </button>
                    </div>

                    {/* Media content */}
                    <div
                      className="rule1-feed-media"
                      style={{ background: post.gradient }}
                    >
                      <div className="rule1-media-overlay">
                        <div className="rule1-media-icon">
                          {post.icon}
                        </div>
                        {post.type === 'video' && (
                          <div className="rule1-video-indicator">
                            <Play size={16} fill="white" />
                            <span>0:30</span>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Caption */}
                    <div className="rule1-feed-caption">
                      <p>{post.caption}</p>
                    </div>

                    {/* Actions */}
                    <div className="rule1-feed-actions">
                      <div className="rule1-action-group">
                        <button
                          className={`rule1-action-button rule1-like-button ${likedPosts.has(post.id) ? 'rule1-liked' : ''}`}
                          onClick={() => handleLike(post.id)}
                        >
                          <Heart size={22} fill={likedPosts.has(post.id) ? '#ff0080' : 'none'} />
                          <span>{post.likes}</span>
                        </button>
                        <button className="rule1-action-button">
                          <MessageCircle size={22} />
                          <span>{post.comments}</span>
                        </button>
                        <button className="rule1-action-button">
                          <Share2 size={22} />
                          <span>{post.shares}</span>
                        </button>
                      </div>
                      <button className="rule1-action-button">
                        <Bookmark size={22} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Scroll indicator */}
              <div className="rule1-scroll-indicator">
                <div className="rule1-scroll-thumb" />
              </div>
            </div>
          </div>

          {/* Enhanced glow effects */}
          <div className="rule1-phone-glow rule1-glow-primary" />
          <div className="rule1-phone-glow rule1-glow-secondary" />
          <div className="rule1-phone-glow rule1-glow-pulse" />

          {/* Dynamic edge lighting */}
          <div className="rule1-edge-light rule1-edge-top" />
          <div className="rule1-edge-light rule1-edge-right" />
          <div className="rule1-edge-light rule1-edge-bottom" />
          <div className="rule1-edge-light rule1-edge-left" />
        </div>

        {/* Floating UI elements */}
        <div className="rule1-floating-elements">
          <div className="rule1-floating-heart">
            <Heart size={24} fill="#ff0080" />
          </div>
          <div className="rule1-floating-comment">
            <MessageCircle size={20} fill="#00d4ff" />
          </div>
          <div className="rule1-floating-share">
            <Share2 size={22} fill="#9333ea" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rule1PhoneMockup;