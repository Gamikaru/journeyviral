// File: src/components/sections/Rule1/Rule1PhoneMockup.tsx
'use client'

import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { Heart, MessageCircle, Share2, Bookmark, MoreVertical } from 'lucide-react';
import './styles/phone/device.css';
import './styles/phone/content.css';
import './styles/phone/effects.css';

interface FeedPost {
  id: number;
  username: string;
  avatar: string;
  time: string;
  bgGradient: string;
  textColor: string;
  likes: string;
  comments: string;
  shares: string;
  textSegment: string;
  isHighlight: boolean;
}

const Rule1PhoneMockup: React.FC = () => {
  const [activePost, setActivePost] = useState<number | null>(null);
  const [likedPosts, setLikedPosts] = useState<Set<number>>(new Set());
  const [visiblePosts, setVisiblePosts] = useState(1);
  const [isScrolling, setIsScrolling] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const feedContainerRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Memoized feed posts data
  const feedPosts: FeedPost[] = useMemo(() => [
    {
      id: 1,
      username: "contentcreator",
      avatar: "CC",
      time: "5m",
      bgGradient: "linear-gradient(135deg, #00ffff 0%, #0088cc 100%)",
      textColor: "#001a2e",
      likes: "2.1K",
      comments: "156",
      shares: "89",
      textSegment: "Most creators (especially brands) make content as if...",
      isHighlight: false
    },
    {
      id: 2,
      username: "socialmedia_guru",
      avatar: "SG",
      time: "8m",
      bgGradient: "linear-gradient(135deg, #9333ea 0%, #6b21a8 100%)",
      textColor: "#ffffff",
      likes: "1.8K",
      comments: "234",
      shares: "67",
      textSegment: "people are binge-watching their feed.",
      isHighlight: false
    },
    {
      id: 3,
      username: "viral_insights",
      avatar: "VI",
      time: "12m",
      bgGradient: "linear-gradient(135deg, #f8bbd9 0%, #f472b6 100%)",
      textColor: "#4a0e2d",
      likes: "3.2K",
      comments: "89",
      shares: "145",
      textSegment: "They're not.",
      isHighlight: true
    },
    {
      id: 4,
      username: "attention_hacker",
      avatar: "AH",
      time: "15m",
      bgGradient: "linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)",
      textColor: "#451a03",
      likes: "1.9K",
      comments: "178",
      shares: "92",
      textSegment: "Your vid's crammed between memes, hot takes...",
      isHighlight: false
    },
    {
      id: 5,
      username: "feed_reality",
      avatar: "FR",
      time: "18m",
      bgGradient: "linear-gradient(135deg, #10b981 0%, #059669 100%)",
      textColor: "#ffffff",
      likes: "2.7K",
      comments: "345",
      shares: "128",
      textSegment: "and a cat doing backflips.",
      isHighlight: false
    },
    {
      id: 6,
      username: "standout_strategy",
      avatar: "SS",
      time: "22m",
      bgGradient: "linear-gradient(135deg, #ff6b6b 0%, #ee5a52 100%)",
      textColor: "#ffffff",
      likes: "4.1K",
      comments: "567",
      shares: "234",
      textSegment: "So... how are you standing out?",
      isHighlight: true
    }
  ], []);

  // Optimized auto-scroll with pause/resume functionality
  const startAutoScroll = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      if (!isPaused && visiblePosts < feedPosts.length) {
        setVisiblePosts(prev => {
          const newCount = prev + 1;

          // Smooth scroll with optimized timing
          if (feedContainerRef.current) {
            const container = feedContainerRef.current;
            const targetScroll = (newCount - 1) * container.clientHeight;

            container.scrollTo({
              top: targetScroll,
              behavior: 'smooth'
            });
          }

          return newCount;
        });

        setIsScrolling(true);
        setTimeout(() => setIsScrolling(false), 1000);
      }
    }, 4500); // Optimized timing for better readability
  }, [isPaused, visiblePosts, feedPosts.length]);

  useEffect(() => {
    startAutoScroll();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [startAutoScroll]);

  // Optimized like handler with haptic feedback
  const handleLike = useCallback((postId: number) => {
    // Add haptic feedback for mobile devices
    if ('vibrate' in navigator) {
      navigator.vibrate(50);
    }

    setLikedPosts(prev => {
      const newSet = new Set(prev);
      if (newSet.has(postId)) {
        newSet.delete(postId);
      } else {
        newSet.add(postId);
      }
      return newSet;
    });
  }, []);

  // Pause auto-scroll on hover/focus
  const handleMouseEnter = useCallback((postId: number) => {
    setActivePost(postId);
    setIsPaused(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setActivePost(null);
    setIsPaused(false);
  }, []);

  // Keyboard navigation support
  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown' && visiblePosts < feedPosts.length) {
      e.preventDefault();
      setVisiblePosts(prev => Math.min(prev + 1, feedPosts.length));
    } else if (e.key === 'ArrowUp' && visiblePosts > 1) {
      e.preventDefault();
      setVisiblePosts(prev => Math.max(prev - 1, 1));
    }
  }, [visiblePosts, feedPosts.length]);

  return (
    <div className="rule1-phone-container">
      <div className="rule1-phone-wrapper">
        <div className="rule1-phone-device">
          {/* Enhanced metallic bezel */}
          <div className="rule1-phone-bezel">
            <div className="rule1-phone-bezel-gradient" />
            <div className="rule1-phone-bezel-shine" />
          </div>

          {/* Phone frame */}
          <div className="rule1-phone-frame">
            {/* Enhanced screen effects */}
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

            {/* Enhanced content area */}
            <div
              className="rule1-phone-content"
              onKeyDown={handleKeyDown}
              tabIndex={0}
              role="application"
              aria-label="Social media feed demonstration"
            >
              {/* App header */}
              <div className="rule1-app-header">
                <nav className="rule1-app-nav" role="navigation" aria-label="Feed navigation">
                  <span className="rule1-nav-item rule1-nav-active">For You</span>
                  <span className="rule1-nav-item">Following</span>
                </nav>
              </div>

              {/* Optimized scrollable feed */}
              <div
                ref={feedContainerRef}
                className={`rule1-feed-container rule1-scrollable-feed ${isScrolling ? 'scrolling' : ''}`}
                role="feed"
                aria-live="polite"
                aria-label="Content demonstrating how posts get lost in feeds"
              >
                <div className="rule1-feed-scroll-content">
                  {feedPosts.slice(0, visiblePosts).map((post, index) => (
                    <article
                      key={post.id}
                      className={`rule1-feed-item rule1-tiktok-post ${
                        activePost === post.id ? 'rule1-feed-item-active' : ''
                      } ${post.isHighlight ? 'rule1-highlight-post' : ''}`}
                      style={{
                        background: post.bgGradient,
                        animationDelay: `${index * 0.2}s`,
                        opacity: index === visiblePosts - 1 ? 0 : 1,
                        animation: index === visiblePosts - 1 ? 'fadeInUp 1s ease forwards' : 'none'
                      }}
                      onMouseEnter={() => handleMouseEnter(post.id)}
                      onMouseLeave={handleMouseLeave}
                      aria-label={`Post by ${post.username}: ${post.textSegment}`}
                    >
                      {/* Post header */}
                      <header className="rule1-tiktok-header">
                        <div className="rule1-tiktok-avatar" aria-hidden="true">
                          <div
                            className="rule1-avatar-letter"
                            style={{ color: post.textColor }}
                          >
                            {post.avatar}
                          </div>
                        </div>
                        <div className="rule1-tiktok-meta">
                          <div
                            className="rule1-tiktok-username"
                            style={{ color: post.textColor }}
                          >
                            @{post.username}
                          </div>
                          <time
                            className="rule1-tiktok-timestamp"
                            style={{ color: `${post.textColor}99` }}
                            dateTime={`${post.time} ago`}
                          >
                            {post.time} ago
                          </time>
                        </div>
                        <button
                          className="rule1-tiktok-more"
                          style={{ color: `${post.textColor}cc` }}
                          aria-label="More options"
                        >
                          <MoreVertical size={18} />
                        </button>
                      </header>

                      {/* Main content */}
                      <div className="rule1-tiktok-content">
                        <p
                          className={`rule1-tiktok-text ${
                            post.isHighlight ? 'rule1-highlight-text' : ''
                          }`}
                          style={{ color: post.textColor }}
                        >
                          {post.textSegment}
                        </p>

                        {/* Decorative elements */}
                        <div className="rule1-text-decoration-dots" aria-hidden="true">
                          <span style={{ backgroundColor: `${post.textColor}33` }}></span>
                          <span style={{ backgroundColor: `${post.textColor}33` }}></span>
                          <span style={{ backgroundColor: `${post.textColor}33` }}></span>
                        </div>
                      </div>

                      {/* Enhanced actions */}
                      <footer className="rule1-tiktok-actions">
                        <div className="rule1-tiktok-action-group" role="group" aria-label="Post actions">
                          <button
                            className={`rule1-tiktok-action rule1-like-action ${
                              likedPosts.has(post.id) ? 'rule1-liked' : ''
                            }`}
                            onClick={() => handleLike(post.id)}
                            style={{
                              color: likedPosts.has(post.id) ? '#ff0080' : `${post.textColor}dd`
                            }}
                            aria-label={`${likedPosts.has(post.id) ? 'Unlike' : 'Like'} post - ${post.likes} likes`}
                          >
                            <Heart
                              size={20}
                              fill={likedPosts.has(post.id) ? '#ff0080' : 'none'}
                            />
                            <span>{post.likes}</span>
                          </button>

                          <button
                            className="rule1-tiktok-action"
                            style={{ color: `${post.textColor}dd` }}
                            aria-label={`Comment on post - ${post.comments} comments`}
                          >
                            <MessageCircle size={20} />
                            <span>{post.comments}</span>
                          </button>

                          <button
                            className="rule1-tiktok-action"
                            style={{ color: `${post.textColor}dd` }}
                            aria-label={`Share post - ${post.shares} shares`}
                          >
                            <Share2 size={20} />
                            <span>{post.shares}</span>
                          </button>
                        </div>

                        <button
                          className="rule1-tiktok-action"
                          style={{ color: `${post.textColor}dd` }}
                          aria-label="Bookmark post"
                        >
                          <Bookmark size={20} />
                        </button>
                      </footer>
                    </article>
                  ))}

                  {/* Enhanced loading indicator */}
                  {visiblePosts < feedPosts.length && (
                    <div className="rule1-loading-next" aria-live="polite">
                      <div className="rule1-loading-dots" aria-label="Loading next post">
                        <span></span>
                        <span></span>
                        <span></span>
                      </div>
                    </div>
                  )}
                </div>
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
      </div>
    </div>
  );
};

export default React.memo(Rule1PhoneMockup);