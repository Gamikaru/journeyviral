import React, { useEffect, useRef, useState } from 'react';
import './styles/typography/base.css';
import './styles/typography/supporting-text.css';
import './styles/typography/glitch-effects.css';

interface WordSpan {
  text: string;
  isHighlight?: boolean;
  isStrong?: boolean;
}

const Rule1SupportingText: React.FC = () => {
  const textRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredWord, setHoveredWord] = useState<number | null>(null);
  const [glitchActive, setGlitchActive] = useState(false);

  // Split text into words for animation
  const paragraph1Words: WordSpan[] = [
    { text: 'Most' },
    { text: 'creators—especially' },
    { text: 'brands—make' },
    { text: 'content' },
    { text: 'like' },
    { text: 'people' },
    { text: 'are' },
    { text: 'binge-watching' },
    { text: 'their' },
    { text: 'feed.' },
    { text: "They're", isHighlight: true },
    { text: 'not.', isHighlight: true }
  ];

  const paragraph2Words: WordSpan[] = [
    { text: 'Your' },
    { text: "vid's" },
    { text: 'crammed' },
    { text: 'between' },
    { text: 'memes,' },
    { text: 'hot' },
    { text: 'takes,' },
    { text: 'and' },
    { text: 'a' },
    { text: 'cat' },
    { text: 'doing' },
    { text: 'backflips.' },
    { text: 'So...', isStrong: true },
    { text: 'how', isStrong: true },
    { text: 'are', isStrong: true },
    { text: 'you', isStrong: true },
    { text: 'standing', isStrong: true },
    { text: 'out?', isStrong: true }
  ];

  // Intersection Observer for visibility
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Trigger glitch effect after delay
          setTimeout(() => setGlitchActive(true), 1200);
        }
      },
      { threshold: 0.3 }
    );

    if (textRef.current) {
      observer.observe(textRef.current);
    }

    return () => {
      if (textRef.current) {
        observer.unobserve(textRef.current);
      }
    };
  }, []);

  // Glitch effect for highlight
  useEffect(() => {
    if (!glitchActive) return;

    const glitchInterval = setInterval(() => {
      setGlitchActive(prev => !prev);
    }, 3000);

    return () => clearInterval(glitchInterval);
  }, [glitchActive]);

  const renderWord = (word: WordSpan, index: number, paragraphIndex: number) => {
    const globalIndex = paragraphIndex === 0 ? index : paragraph1Words.length + index;
    const isHovered = hoveredWord === globalIndex;

    let className = 'rule1-word';
    if (word.isHighlight) className += ' rule1-word-highlight';
    if (word.isStrong) className += ' rule1-word-strong';
    if (isHovered) className += ' rule1-word-hovered';
    if (isVisible) className += ' rule1-word-visible';

    return (
      <span
        key={globalIndex}
        className={className}
        onMouseEnter={() => setHoveredWord(globalIndex)}
        onMouseLeave={() => setHoveredWord(null)}
        style={{
          animationDelay: `${globalIndex * 0.05}s`
        }}
      >
        {word.isHighlight && glitchActive ? (
          <span className="rule1-glitch" data-text={word.text}>
            {word.text}
          </span>
        ) : (
          word.text
        )}
        {index < (paragraphIndex === 0 ? paragraph1Words.length - 1 : paragraph2Words.length - 1) && ' '}
      </span>
    );
  };

  return (
    <div ref={textRef} className="rule1-supporting-wrapper">
      {/* Decorative elements */}
      <div className="rule1-text-decoration rule1-decoration-1" />
      <div className="rule1-text-decoration rule1-decoration-2" />

      {/* Main content */}
      <div className="rule1-supporting-content">
        <p className="rule1-supporting-paragraph">
          <span className="rule1-paragraph-inner">
            {paragraph1Words.map((word, index) => renderWord(word, index, 0))}
          </span>

          {/* Emphasis particles */}
          <span className="rule1-emphasis-particles">
            <span className="rule1-particle rule1-particle-1" />
            <span className="rule1-particle rule1-particle-2" />
            <span className="rule1-particle rule1-particle-3" />
          </span>
        </p>

        <p className="rule1-detail-paragraph">
          <span className="rule1-paragraph-inner">
            {paragraph2Words.map((word, index) => renderWord(word, index, 1))}
          </span>
        </p>

        {/* Interactive hint */}
        <div className={`rule1-interaction-hint ${isVisible ? 'rule1-hint-visible' : ''}`}>
          <span className="rule1-hint-text">The secret? Stop thinking like a creator.</span>
          <span className="rule1-hint-arrow">→</span>
        </div>
      </div>

      {/* Background text effect */}
      <div className="rule1-bg-text" aria-hidden="true">
        ATTENTION
      </div>
    </div>
  );
};

export default Rule1SupportingText;