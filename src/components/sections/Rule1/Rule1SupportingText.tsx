// File: src/components/sections/Rule1/Rule1SupportingText.tsx
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

  // Intersection Observer for visibility
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
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

  const renderParagraphWithSpans = (text: string, specialWords: WordSpan[]) => {
    let result = text;
    let spanIndex = 0;

    specialWords.forEach((word) => {
      const globalIndex = spanIndex++;
      const isHovered = hoveredWord === globalIndex;

      let className = 'rule1-word';
      if (word.isHighlight) className += ' rule1-word-highlight';
      if (word.isStrong) className += ' rule1-word-strong';
      if (isHovered) className += ' rule1-word-hovered';
      if (isVisible) className += ' rule1-word-visible';

      const spanElement = `<span
        class="${className}"
        data-index="${globalIndex}"
        data-glow="${word.isHighlight || word.isStrong ? 'true' : 'false'}"
      >${word.text}</span>`;
      result = result.replace(word.text, spanElement);
    });

    return result;
  };

  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLElement;
    const index = target.getAttribute('data-index');
    if (index) {
      setHoveredWord(parseInt(index));
    }
  };

  const handleMouseLeave = () => {
    setHoveredWord(null);
  };

  // Only special words that need formatting
  const paragraph1SpecialWords: WordSpan[] = [
    { text: "They're", isHighlight: true },
    { text: "not.", isHighlight: true }
  ];

  const paragraph2SpecialWords: WordSpan[] = [
    { text: "So...", isStrong: true },
    { text: "how", isStrong: true },
    { text: "are", isStrong: true },
    { text: "you", isStrong: true },
    { text: "standing", isStrong: true },
    { text: "out?", isStrong: true }
  ];

  const paragraph1Text = "Most creators—especially brands—make content like people are binge-watching their feed. They're not.";
  const paragraph2Text = "Your vid's crammed between memes, hot takes, and a cat doing backflips. So... how are you standing out?";

  return (
    <div ref={textRef} className="rule1-supporting-wrapper" style={{ marginTop: '1rem' }}>
      {/* Decorative elements */}
      <div className="rule1-text-decoration rule1-decoration-1" />
      <div className="rule1-text-decoration rule1-decoration-2" />

      {/* Main content */}
      <div className="rule1-supporting-content">
        <p
          className="rule1-supporting-paragraph"
          dangerouslySetInnerHTML={{
            __html: renderParagraphWithSpans(paragraph1Text, paragraph1SpecialWords)
          }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        />

        <p
          className="rule1-detail-paragraph"
          dangerouslySetInnerHTML={{
            __html: renderParagraphWithSpans(paragraph2Text, paragraph2SpecialWords)
          }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        />

        {/* Interactive hint */}
        <div className={`rule1-interaction-hint ${isVisible ? 'rule1-hint-visible' : ''}`} style={{ marginTop: '2rem' }}>
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