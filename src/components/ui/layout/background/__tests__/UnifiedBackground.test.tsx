import { render, screen } from '@testing-library/react';
import UnifiedBackground from '../UnifiedBackground';

// Mock framer-motion
jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, style, className, ...props }: any) =>
      <div style={style} className={className} {...props}>{children}</div>
  },
  useScroll: () => ({
    scrollYProgress: {
      set: jest.fn(),
      get: jest.fn(() => 0),
      getVelocity: jest.fn(() => 0),
    }
  }),
  useTransform: () => ({
    set: jest.fn(),
    get: jest.fn(() => 0),
    getVelocity: jest.fn(() => 0),
  })
}));

// Mock performance monitoring
jest.mock('../performance', () => ({
  BackgroundPerformance: {
    getOptimalSettings: () => ({
      enableOrbs: true,
      enableWaves: true,
      enableRays: true,
      enableTransitions: true,
      orbCount: 2,
      animationDuration: 'normal'
    }),
    measureFPS: jest.fn()
  }
}));

describe('UnifiedBackground', () => {
  beforeEach(() => {
    // Mock window.matchMedia
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: jest.fn().mockImplementation(query => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: jest.fn(),
        removeListener: jest.fn(),
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
      })),
    });
  });

  it('renders without crashing', () => {
    render(<UnifiedBackground />);
    expect(document.querySelector('.simplified-background')).toBeInTheDocument();
  });

  it('applies custom className', () => {
    render(<UnifiedBackground className="custom-bg" />);
    expect(document.querySelector('.simplified-background.custom-bg')).toBeInTheDocument();
  });

  it('includes scroll container for measurement', () => {
    render(<UnifiedBackground />);
    expect(document.querySelector('.scroll-container')).toBeInTheDocument();
  });

  it('includes vignette overlay', () => {
    render(<UnifiedBackground />);
    expect(document.querySelector('.simple-vignette')).toBeInTheDocument();
  });

  it('respects reduced motion preference', () => {
    // Mock reduced motion preference
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: jest.fn().mockImplementation(query => ({
        matches: query === '(prefers-reduced-motion: reduce)',
        media: query,
        onchange: null,
        addListener: jest.fn(),
        removeListener: jest.fn(),
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
      })),
    });

    render(<UnifiedBackground />);
    // Should still render but with reduced effects
    expect(document.querySelector('.simplified-background')).toBeInTheDocument();
  });
});
