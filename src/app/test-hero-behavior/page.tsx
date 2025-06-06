/**
 * Test page for HeroContent behavior verification
 * Navigate to /test-hero-behavior to see this page
 */

'use client';

import { MockHeroContent, runBehaviorTest } from '../../components/sections/__tests__/HeroContentBehaviorTest';
import { useState, useEffect } from 'react';

export default function TestHeroBehaviorPage() {
  const [showTest, setShowTest] = useState(false);

  useEffect(() => {
    // Run the test after component mounts
    runBehaviorTest();
  }, []);

  return (
    <div style={{
      minHeight: '100vh',
      padding: '20px',
      backgroundColor: '#1a0f2e',
      color: 'white',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <header style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h1 style={{
            fontSize: '2.5rem',
            fontWeight: 'bold',
            background: 'linear-gradient(45deg, #ff006e, #8e00ff, #00ffff)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            marginBottom: '10px'
          }}>
            🧪 HeroContent Behavior Test
          </h1>
          <p style={{ fontSize: '1.2rem', opacity: 0.8 }}>
            Testing title/subtitle animation and timing behavior
          </p>
        </header>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '40px',
          marginBottom: '40px'
        }}>
          <div style={{
            padding: '20px',
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            borderRadius: '10px',
            backdropFilter: 'blur(10px)'
          }}>
            <h2 style={{ fontSize: '1.5rem', marginBottom: '20px' }}>📋 Expected Behavior</h2>
            <div style={{ fontSize: '14px', lineHeight: '1.6' }}>
              <h3 style={{ color: '#ff6ec7', marginBottom: '10px' }}>Initial Load (0-1500ms):</h3>
              <ul style={{ paddingLeft: '20px', marginBottom: '20px' }}>
                <li>First pair shows with upward animation</li>
                <li>No scrambling on initial render</li>
                <li>Clean text display</li>
              </ul>

              <h3 style={{ color: '#ff6ec7', marginBottom: '10px' }}>After Load (1500-5500ms):</h3>
              <ul style={{ paddingLeft: '20px', marginBottom: '20px' }}>
                <li>4-second display period</li>
                <li>No animations during display</li>
                <li>Text remains stable</li>
              </ul>

              <h3 style={{ color: '#ff6ec7', marginBottom: '10px' }}>Transitions (5500ms+):</h3>
              <ul style={{ paddingLeft: '20px', marginBottom: '20px' }}>
                <li>1-second scramble animation</li>
                <li>No upward animation</li>
                <li>Content changes without re-mounting</li>
                <li>5-second cycles (4s display + 1s scramble)</li>
              </ul>
            </div>
          </div>

          <div style={{
            padding: '20px',
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            borderRadius: '10px',
            backdropFilter: 'blur(10px)'
          }}>
            <h2 style={{ fontSize: '1.5rem', marginBottom: '20px' }}>🔍 What to Watch For</h2>
            <div style={{ fontSize: '14px', lineHeight: '1.6' }}>
              <h3 style={{ color: '#d73cbe', marginBottom: '10px' }}>❌ Issues to Check:</h3>
              <ul style={{ paddingLeft: '20px', marginBottom: '20px' }}>
                <li>Upward animation on every transition</li>
                <li>Scrambling on initial load</li>
                <li>Incorrect timing intervals</li>
                <li>Elements re-mounting (flickering)</li>
              </ul>

              <h3 style={{ color: '#00ff88', marginBottom: '10px' }}>✅ Expected Results:</h3>
              <ul style={{ paddingLeft: '20px', marginBottom: '20px' }}>
                <li>Smooth initial upward animation</li>
                <li>Clean 4-second display periods</li>
                <li>Seamless content transitions</li>
                <li>Consistent 5-second cycles</li>
              </ul>
            </div>
          </div>
        </div>

        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <button
            onClick={() => setShowTest(!showTest)}
            style={{
              padding: '15px 30px',
              fontSize: '1.1rem',
              fontWeight: 'bold',
              background: 'linear-gradient(135deg, #22d3ee 0%, #0891b2 50%, #06b6d4 100%)',
              color: '#000',
              border: 'none',
              borderRadius: '50px',
              cursor: 'pointer',
              boxShadow: '0 10px 40px rgba(34, 211, 238, 0.4)',
              transition: 'all 0.3s ease'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 15px 50px rgba(34, 211, 238, 0.6)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 10px 40px rgba(34, 211, 238, 0.4)';
            }}
          >
            {showTest ? '🔒 Hide Test' : '🚀 Start Behavior Test'}
          </button>
        </div>

        {showTest && (
          <div style={{
            padding: '20px',
            backgroundColor: 'rgba(0, 0, 0, 0.3)',
            borderRadius: '15px',
            border: '1px solid rgba(255, 255, 255, 0.2)'
          }}>
            <MockHeroContent />
          </div>
        )}

        <footer style={{
          textAlign: 'center',
          marginTop: '40px',
          padding: '20px',
          opacity: 0.6,
          fontSize: '14px'
        }}>
          <p>Open browser dev tools console to see detailed timing logs</p>
          <p>Check that the behavior matches the expected timeline above</p>
        </footer>
      </div>
    </div>
  );
}
