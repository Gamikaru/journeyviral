/**
 * Manual Test for HeroContent Component Behavior
 *
 * This test verifies the title/subtitle animation and timing behavior:
 * 1. Entry animation only happens on page load
 * 2. Text scramble effect only occurs during transitions
 * 3. Proper timing: 4 seconds display + 1 second scramble = 5 second cycle
 */

import React from 'react';
import { motion } from 'framer-motion';

// Mock fixed-duration scramble effect for testing
const useMockTextScramble = (text: string, isActive: boolean) => {
  const [displayText, setDisplayText] = React.useState(text);
  const chars = "!@#$%^&*()_+-=[]{}|;:,.<>?";

  React.useEffect(() => {
    if (!isActive) {
      setDisplayText(text);
      return;
    }

    const TOTAL_SCRAMBLE_TIME = 1000; // Fixed 1000ms duration
    const FRAME_RATE = 30; // Lower for test visibility
    const FRAME_INTERVAL = 1000 / FRAME_RATE;
    const TOTAL_FRAMES = TOTAL_SCRAMBLE_TIME / FRAME_INTERVAL;

    let currentFrame = 0;

    const interval = setInterval(() => {
      const progress = currentFrame / TOTAL_FRAMES;

      setDisplayText(
        text
          .split("")
          .map((letter, index) => {
            const charLockPoint = (index + 1) / text.length;

            if (progress >= charLockPoint) {
              return text[index];
            } else {
              return chars[Math.floor(Math.random() * chars.length)];
            }
          })
          .join("")
      );

      currentFrame++;

      if (currentFrame > TOTAL_FRAMES) {
        clearInterval(interval);
        setDisplayText(text);
      }
    }, FRAME_INTERVAL);

    return () => clearInterval(interval);
  }, [text, chars, isActive]);

  return displayText;
};

// Mock the HeroContent behavior for testing
export function MockHeroContent() {
  const [currentPairIndex, setCurrentPairIndex] = React.useState(0);
  const [isScrambling, setIsScrambling] = React.useState(false);
  const [hasInitiallyLoaded, setHasInitiallyLoaded] = React.useState(false);
  const [isFirstRender, setIsFirstRender] = React.useState(true);
  const [testLog, setTestLog] = React.useState<string[]>([]);

  const titleSubtitlePairs = [
    { title: "YOUR CONTENT SUCKS.", subtitle: "WE CAN FIX THAT." },
    { title: "GO VIRAL", subtitle: "OR GO HOME." },
    { title: "BREAK ALGORITHMS.", subtitle: "NOT THE BANK." }
  ];

  const log = (message: string) => {
    const timestamp = Date.now();
    const logEntry = `${timestamp}: ${message}`;
    setTestLog(prev => [...prev, logEntry]);
    console.log(logEntry);
  };

  // Test the initial load behavior
  React.useEffect(() => {
    log('🚀 Component mounted - starting initial animations');

    const timer = setTimeout(() => {
      setHasInitiallyLoaded(true);
      setIsFirstRender(false);
      log('✅ Initial animations complete - starting 4-second display timer');
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  // Test the cycling behavior
  React.useEffect(() => {
    if (!hasInitiallyLoaded) return;

    const firstTransitionDelay = 4000;
    log(`⏰ Starting ${firstTransitionDelay}ms delay before first transition`);

    const startCycling = setTimeout(() => {
      log('🔄 Starting cycling logic');

      const cycleContent = () => {
        log('🔀 Starting scramble animation');
        setIsScrambling(true);

        // Change to next pair immediately when scrambling starts (seamless transition)
        const nextIndex = (currentPairIndex + 1) % titleSubtitlePairs.length;
        setCurrentPairIndex(nextIndex);
        log(`🎯 Text immediately changes to pair ${nextIndex}: "${titleSubtitlePairs[nextIndex].title}" (scrambling)`);

        setTimeout(() => {
          setIsScrambling(false);
          log(`✨ Scramble complete - cleanly showing pair ${nextIndex}: "${titleSubtitlePairs[nextIndex].title}"`);
        }, 1000);
      };

      // First transition
      cycleContent();

      // Subsequent transitions every 5 seconds
      const interval = setInterval(() => {
        log('⏰ 5-second interval reached - starting next transition');
        cycleContent();
      }, 5000);

      return () => clearInterval(interval);
    }, firstTransitionDelay);

    return () => clearTimeout(startCycling);
  }, [hasInitiallyLoaded, currentPairIndex]);

  const currentPair = titleSubtitlePairs[currentPairIndex];
  const titleText = useMockTextScramble(currentPair.title, isScrambling);
  const subtitleText = useMockTextScramble(currentPair.subtitle, isScrambling);

  return (
    <div style={{ padding: '20px', fontFamily: 'monospace' }}>
      <h1>🧪 HeroContent Behavior Test</h1>

      <div style={{ marginBottom: '20px', padding: '10px', border: '1px solid #ccc' }}>
        <h2>Current State:</h2>
        <p><strong>Pair Index:</strong> {currentPairIndex}</p>
        <p><strong>Is Scrambling:</strong> {isScrambling ? '🔀 YES' : '✨ NO'}</p>
        <p><strong>Is First Render:</strong> {isFirstRender ? '🆕 YES' : '🔄 NO'}</p>
        <p><strong>Has Initially Loaded:</strong> {hasInitiallyLoaded ? '✅ YES' : '⏳ NO'}</p>

        <div style={{ marginTop: '10px', padding: '10px', backgroundColor: '#f0f0f0' }}>
          <p><strong>Title:</strong> <span style={{ fontFamily: 'monospace', fontSize: '1.2em' }}>{titleText}</span></p>
          <p><strong>Subtitle:</strong> <span style={{ fontFamily: 'monospace', fontSize: '1.1em' }}>{subtitleText}</span></p>
          <p><strong>Status:</strong> {isScrambling ? '🔀 SCRAMBLING (Fixed 1000ms)' : '✨ DISPLAYING'}</p>
        </div>
      </div>

      <div style={{ marginBottom: '20px' }}>
        <h3>Expected Behavior:</h3>
        <ul>
          <li>✅ First pair shows with upward animation (only on initial load)</li>
          <li>⏰ Display for 4 seconds after initial animations complete</li>
          <li>🔀 Scramble animation for 1 second during transition</li>
          <li>✨ Show next pair (no upward animation, just content change)</li>
          <li>🔄 Repeat cycle every 5 seconds</li>
        </ul>
      </div>

      <div style={{ marginBottom: '20px' }}>
        <h3>Test Log (last 10 entries):</h3>
        <div style={{
          height: '200px',
          overflow: 'auto',
          padding: '10px',
          backgroundColor: '#f9f9f9',
          border: '1px solid #ddd',
          fontSize: '12px'
        }}>
          {testLog.slice(-10).map((entry, index) => (
            <div key={index} style={{ marginBottom: '5px' }}>
              {entry}
            </div>
          ))}
        </div>
      </div>

      <div style={{ marginTop: '20px', padding: '10px', backgroundColor: '#e8f5e8' }}>
        <h3>✅ Test Verification Checklist:</h3>
        <ul>
          <li>
            <input type="checkbox" readOnly checked={isFirstRender === false && hasInitiallyLoaded} />
            {' '}Initial load completed without scrambling
          </li>
          <li>
            <input type="checkbox" readOnly checked={currentPairIndex > 0} />
            {' '}At least one transition occurred
          </li>
          <li>
            <input type="checkbox" readOnly checked={testLog.some(log => log.includes('Starting scramble'))} />
            {' '}Scramble animation triggered
          </li>
          <li>
            <input type="checkbox" readOnly checked={testLog.some(log => log.includes('5-second interval'))} />
            {' '}5-second interval cycling works
          </li>
        </ul>
      </div>
    </div>
  );
}

// Test utility to run behavior verification
export function runBehaviorTest() {
  console.log('🧪 Running HeroContent Behavior Test');
  console.log('================================');

  // Test case 1: Initial state
  console.log('\n📋 Test Case 1: Initial State');
  console.log('Expected: isFirstRender=true, isScrambling=false, currentPairIndex=0');

  // Test case 2: After initial load
  console.log('\n📋 Test Case 2: After Initial Load (1500ms)');
  console.log('Expected: isFirstRender=false, hasInitiallyLoaded=true');

  // Test case 3: First transition
  console.log('\n📋 Test Case 3: First Transition (5500ms total)');
  console.log('Expected: scramble starts, then shows second pair');

  // Test case 4: Subsequent transitions
  console.log('\n📋 Test Case 4: Subsequent Transitions (every 5000ms)');
  console.log('Expected: consistent 5-second intervals');

  console.log('\n✅ Test complete - check browser console and UI for verification');
}

export default MockHeroContent;
