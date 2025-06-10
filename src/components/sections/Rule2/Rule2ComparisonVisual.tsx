// File: src/components/sections/Rule2/Rule2EnhancedVisual.tsx
'use client'

import React, { useState, useEffect, useRef } from 'react';
import {
  SkipForward,
  TrendingUp,
  DollarSign,
  Users,
  Heart,
  Share2,
  MessageCircle,
  Eye,
  X,
  Zap,
  Sparkles,
  TrendingDown,
  ThumbsDown,
  Volume2,
  VolumeX,
  AlertCircle,
  BarChart3
} from 'lucide-react';
import './styles/visual/comparison.css';

const Rule2Visual: React.FC = () => {
  const [activeView, setActiveView] = useState('overview');
  const [animationPhase, setAnimationPhase] = useState(0);
  const [skipCount, setSkipCount] = useState(0);
  const [engagementData, setEngagementData] = useState({
    ad: { likes: 0, shares: 0, comments: 0 },
    content: { likes: 0, shares: 0, comments: 0 }
  });
  const [viralSpread, setViralSpread] = useState<Array<{ id: number; x: number; y: number; delay: number }>>([]);

  // Auto-cycle through views
  useEffect(() => {
    const viewCycle = ['overview', 'skipRate', 'engagement', 'cost', 'viral'];
    let currentIndex = 0;

    const interval = setInterval(() => {
      currentIndex = (currentIndex + 1) % viewCycle.length;
      setActiveView(viewCycle[currentIndex]);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // Skip rate animation
  useEffect(() => {
    if (activeView === 'skipRate') {
      let count = 0;
      const interval = setInterval(() => {
        count += Math.floor(Math.random() * 50 + 30);
        if (count >= 9450) {
          count = 9450;
          clearInterval(interval);
        }
        setSkipCount(count);
      }, 50);

      return () => clearInterval(interval);
    }
  }, [activeView]);

  // Engagement animation
  useEffect(() => {
    if (activeView === 'engagement') {
      const animateEngagement = () => {
        setEngagementData({
          ad: {
            likes: Math.floor(Math.random() * 50),
            shares: Math.floor(Math.random() * 10),
            comments: Math.floor(Math.random() * 20)
          },
          content: {
            likes: Math.floor(Math.random() * 50000 + 100000),
            shares: Math.floor(Math.random() * 20000 + 30000),
            comments: Math.floor(Math.random() * 10000 + 15000)
          }
        });
      };

      const interval = setInterval(animateEngagement, 1000);
      animateEngagement();

      return () => clearInterval(interval);
    }
  }, [activeView]);

  // Viral spread animation
  useEffect(() => {
    if (activeView === 'viral') {
      const generateNodes = () => {
        const nodes = [];
        for (let i = 0; i < 20; i++) {
          nodes.push({
            id: i,
            x: Math.random() * 100,
            y: Math.random() * 100,
            delay: Math.random() * 2
          });
        }
        setViralSpread(nodes);
      };

      generateNodes();
    }
  }, [activeView]);

  return (
    <div className="rule2-enhanced-visual">
      {/* Navigation Tabs */}
      <div className="visual-nav">
        {['overview', 'skipRate', 'engagement', 'cost', 'viral'].map((view) => (
          <button
            key={view}
            className={`nav-tab ${activeView === view ? 'active' : ''}`}
            onClick={() => setActiveView(view)}
          >
            {view === 'overview' && <BarChart3 size={16} />}
            {view === 'skipRate' && <SkipForward size={16} />}
            {view === 'engagement' && <Heart size={16} />}
            {view === 'cost' && <DollarSign size={16} />}
            {view === 'viral' && <Share2 size={16} />}
          </button>
        ))}
      </div>

      {/* Main Visualization Area */}
      <div className="visual-content">
        {/* Overview View */}
        {activeView === 'overview' && (
          <div className="overview-view">
            <h3 className="view-title">The Reality of Modern Advertising</h3>

            <div className="comparison-grid">
              {/* Traditional Ad Performance */}
              <div className="performance-card ad-performance">
                <h4>Traditional Ads</h4>
                <div className="metric-display">
                  <div className="metric">
                    <Eye size={20} />
                    <span className="metric-value">50K</span>
                    <span className="metric-label">Views</span>
                  </div>
                  <div className="metric negative">
                    <ThumbsDown size={20} />
                    <span className="metric-value">94.5%</span>
                    <span className="metric-label">Skip Rate</span>
                  </div>
                  <div className="metric cost">
                    <DollarSign size={20} />
                    <span className="metric-value">$50K</span>
                    <span className="metric-label">Cost</span>
                  </div>
                </div>
                <div className="performance-graph">
                  <div className="graph-bar ad-bar" style={{ height: '10%' }}></div>
                </div>
              </div>

              {/* Authentic Content Performance */}
              <div className="performance-card content-performance">
                <h4>Authentic Content</h4>
                <div className="metric-display">
                  <div className="metric">
                    <Eye size={20} />
                    <span className="metric-value">5.2M</span>
                    <span className="metric-label">Views</span>
                  </div>
                  <div className="metric positive">
                    <Heart size={20} />
                    <span className="metric-value">12.8%</span>
                    <span className="metric-label">Engagement</span>
                  </div>
                  <div className="metric free">
                    <Zap size={20} />
                    <span className="metric-value">$0</span>
                    <span className="metric-label">Cost</span>
                  </div>
                </div>
                <div className="performance-graph">
                  <div className="graph-bar content-bar" style={{ height: '95%' }}></div>
                </div>
              </div>
            </div>

            <div className="overview-insight">
              <AlertCircle size={20} />
              <p>104x more views, infinite ROI, zero ad spend</p>
            </div>
          </div>
        )}

        {/* Skip Rate View */}
        {activeView === 'skipRate' && (
          <div className="skip-rate-view">
            <h3 className="view-title">What People Really Do With Ads</h3>

            <div className="skip-visualization">
              <div className="skip-counter">
                <div className="counter-display">
                  <span className="counter-number">{skipCount.toLocaleString()}</span>
                  <span className="counter-label">out of 10,000 viewers</span>
                </div>
                <div className="skip-percentage">
                  {((skipCount / 10000) * 100).toFixed(1)}%
                </div>
              </div>

              <div className="skip-animation">
                {[...Array(20)].map((_, i) => (
                  <div
                    key={i}
                    className="skip-particle"
                    style={{
                      animationDelay: `${i * 0.1}s`,
                      left: `${Math.random() * 80 + 10}%`
                    }}
                  >
                    <SkipForward size={16} />
                  </div>
                ))}
              </div>

              <div className="skip-reasons">
                <div className="reason">
                  <VolumeX size={20} />
                  <span>Annoying</span>
                </div>
                <div className="reason">
                  <X size={20} />
                  <span>Irrelevant</span>
                </div>
                <div className="reason">
                  <AlertCircle size={20} />
                  <span>Disruptive</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Engagement View */}
        {activeView === 'engagement' && (
          <div className="engagement-view">
            <h3 className="view-title">Engagement Comparison</h3>

            <div className="engagement-comparison">
              <div className="engagement-side ad-engagement">
                <h4>Ad Content</h4>
                <div className="engagement-metrics">
                  <div className="eng-metric">
                    <Heart size={24} />
                    <span>{engagementData.ad.likes}</span>
                  </div>
                  <div className="eng-metric">
                    <Share2 size={24} />
                    <span>{engagementData.ad.shares}</span>
                  </div>
                  <div className="eng-metric">
                    <MessageCircle size={24} />
                    <span>{engagementData.ad.comments}</span>
                  </div>
                </div>
                <div className="engagement-visual low">
                  <div className="pulse-ring"></div>
                </div>
              </div>

              <div className="vs-divider">
                <span>VS</span>
              </div>

              <div className="engagement-side content-engagement">
                <h4>Authentic Content</h4>
                <div className="engagement-metrics">
                  <div className="eng-metric">
                    <Heart size={24} />
                    <span>{(engagementData.content.likes / 1000).toFixed(0)}K</span>
                  </div>
                  <div className="eng-metric">
                    <Share2 size={24} />
                    <span>{(engagementData.content.shares / 1000).toFixed(0)}K</span>
                  </div>
                  <div className="eng-metric">
                    <MessageCircle size={24} />
                    <span>{(engagementData.content.comments / 1000).toFixed(0)}K</span>
                  </div>
                </div>
                <div className="engagement-visual high">
                  <div className="pulse-ring"></div>
                  <div className="pulse-ring delay-1"></div>
                  <div className="pulse-ring delay-2"></div>
                </div>
              </div>
            </div>

            <div className="engagement-ratio">
              <TrendingUp size={20} />
              <span>2,560% higher engagement rate</span>
            </div>
          </div>
        )}

        {/* Cost Efficiency View */}
        {activeView === 'cost' && (
          <div className="cost-view">
            <h3 className="view-title">Cost Per Real Engagement</h3>

            <div className="cost-comparison">
              <div className="cost-visual">
                <div className="money-burn">
                  {[...Array(10)].map((_, i) => (
                    <div
                      key={i}
                      className="dollar-bill burning"
                      style={{ animationDelay: `${i * 0.2}s` }}
                    >
                      <DollarSign size={30} />
                    </div>
                  ))}
                </div>

                <div className="cost-breakdown">
                  <div className="cost-item ad-cost">
                    <h4>Traditional Ad Campaign</h4>
                    <div className="cost-details">
                      <div className="detail">
                        <span>Budget:</span>
                        <strong>$50,000</strong>
                      </div>
                      <div className="detail">
                        <span>Real Views:</span>
                        <strong>2,750</strong>
                      </div>
                      <div className="detail highlight">
                        <span>Cost per view:</span>
                        <strong className="expensive">$18.18</strong>
                      </div>
                    </div>
                  </div>

                  <div className="cost-item content-cost">
                    <h4>Organic Content</h4>
                    <div className="cost-details">
                      <div className="detail">
                        <span>Budget:</span>
                        <strong>$0</strong>
                      </div>
                      <div className="detail">
                        <span>Real Views:</span>
                        <strong>5,200,000</strong>
                      </div>
                      <div className="detail highlight">
                        <span>Cost per view:</span>
                        <strong className="free">$0.00</strong>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="roi-indicator">
                  <Zap size={24} />
                  <span>∞% ROI</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Viral Spread View */}
        {activeView === 'viral' && (
          <div className="viral-view">
            <h3 className="view-title">How Content Actually Spreads</h3>

            <div className="viral-visualization">
              <div className="viral-network">
                <div className="origin-node">
                  <Sparkles size={24} />
                </div>

                {viralSpread.map((node) => (
                  <div
                    key={node.id}
                    className="viral-node"
                    style={{
                      left: `${node.x}%`,
                      top: `${node.y}%`,
                      animationDelay: `${node.delay}s`
                    }}
                  >
                    <div className="node-icon">
                      <Users size={16} />
                    </div>
                    <div className="node-connection"></div>
                  </div>
                ))}
              </div>

              <div className="viral-stats">
                <div className="viral-metric">
                  <h4>Organic Reach</h4>
                  <div className="metric-bar">
                    <div className="bar-fill organic"></div>
                  </div>
                  <span>5.2M people</span>
                </div>

                <div className="viral-metric">
                  <h4>Paid Reach</h4>
                  <div className="metric-bar">
                    <div className="bar-fill paid"></div>
                  </div>
                  <span>50K people</span>
                </div>
              </div>

              <div className="viral-quote">
                "People share what they love, not what interrupts them"
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default React.memo(Rule2Visual);