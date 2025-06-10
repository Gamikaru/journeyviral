// src/components/sections/Rule3/Rule3SupportingText.tsx
'use client'

import React, { useEffect, useRef, useState } from 'react';
import './styles/typography/base.css';
import './styles/typography/supporting-text.css';
import './styles/typography/glitch-effects.css';

interface WordSpan {
  text: string;
  isHighlight?: boolean;
  isStrong?: boolean;
}

const Rule3SupportingText: React.FC = () => {
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

      let className = 'rule3-word';
      if (word.isHighlight) className += ' rule3-word-highlight';
      if (word.isStrong) className += ' rule3-word-strong';
      if (isHovered) className += ' rule3-word-hovered';
      if (isVisible) className += ' rule3-word-visible';

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

  // Content configuration
  const paragraph1SpecialWords: WordSpan[] = [
    { text: "milliseconds.", isHighlight: true },
    { text: "micro-decision", isStrong: true }
  ];

  const paragraph2SpecialWords: WordSpan[] = [
    { text: "hook", isHighlight: true },
    { text: "instantly,", isHighlight: true },
    { text: "undeniable value,", isStrong: true },
    { text: "curiosity gaps", isStrong: true },
    { text: "impossible.", isHighlight: true }
  ];

  const paragraph1Text = "In today's attention economy, every scroll is a micro-decision. Your content faces instant judgment—not in minutes or even seconds, but in milliseconds.";
  const paragraph2Text = "The brutal truth? You must hook viewers instantly, lead with undeniable value, and create curiosity gaps that make scrolling past impossible.";

  return (
    <div ref={textRef} className="rule3-supporting-wrapper" style={{ marginTop: '1rem' }}>
      {/* Decorative elements */}
      <div className="rule3-text-decoration rule3-decoration-1" />
      <div className="rule3-text-decoration rule3-decoration-2" />

      {/* Main content */}
      <div className="rule3-supporting-content">
        <p
          className="rule3-supporting-paragraph"
          dangerouslySetInnerHTML={{
            __html: renderParagraphWithSpans(paragraph1Text, paragraph1SpecialWords)
          }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        />

        <p
          className="rule3-detail-paragraph"
          dangerouslySetInnerHTML={{
            __html: renderParagraphWithSpans(paragraph2Text, paragraph2SpecialWords)
          }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        />

        {/* Interactive hint */}
        <div className={`rule3-interaction-hint ${isVisible ? 'rule3-hint-visible' : ''}`} style={{ marginTop: '2rem' }}>
          <span className="rule3-hint-text">The secret? Stop creating content. Start creating experiences.</span>
          <span className="rule3-hint-arrow">→</span>
        </div>
      </div>

      {/* Background text effect */}
      <div className="rule3-bg-text" aria-hidden="true">
        VALUE
      </div>
    </div>
  );
};

export default Rule3SupportingText;