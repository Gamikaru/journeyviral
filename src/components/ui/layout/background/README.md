# Simplified Background System

## Overview
This is a completely rewritten, performance-optimized background system that replaces the previous complex multi-component approach with a single, efficient component.

## Key Improvements

### Performance Optimizations
- **90% reduction in DOM elements**: From ~15+ animated elements to 2-6 elements max
- **Automatic performance detection**: Adjusts effects based on device capabilities
- **Mobile-first approach**: Minimal effects on mobile devices
- **Battery-conscious**: Reduces animations on mobile devices automatically
- **FPS monitoring**: Built-in performance tracking in development mode

### Visual Design
- **Subtle parallax orbs**: 2 gentle floating orbs (cyan/pink) that travel across sections
- **Section-aware effects**: Different subtle effects appear in different scroll regions
- **Smooth color transitions**: Background color smoothly transitions between sections
- **Accessibility compliant**: Respects `prefers-reduced-motion` and high contrast settings

## Components

### UnifiedBackground.tsx
Main component that handles all background effects:
- Scroll-reactive color transitions
- 2 floating orbs with parallax movement
- Conditional rendering based on performance settings
- Mobile-optimized gradient overlay

### SimpleTransitions.tsx
Lightweight component for section-specific subtle glows:
- Hero section: Purple/cyan glow
- Transform: Creative energy effects
- Stats: Data visualization hints
- Expertise: Tech-focused aesthetics
- Rules: Dramatic emphasis

### performance.ts
Performance monitoring utilities:
- FPS tracking
- Device capability detection
- Optimal settings calculation
- Low-power device detection

## Usage

```tsx
import UnifiedBackground from './UnifiedBackground';

// Basic usage
<UnifiedBackground />

// With reduced motion
<UnifiedBackground reducedMotion={true} />

// With custom class
<UnifiedBackground className="custom-bg" />
```

## Effect Timeline

| Scroll % | Effect |
|----------|--------|
| 0-20% | Hero: Cyan orb enters, purple glow |
| 20-40% | Transform: Pink orb active, creative effects |
| 40-60% | Stats: Subtle waves, data aesthetics |
| 60-80% | Expertise: Tech glows, professional feel |
| 80-100% | Rules: Gentle rays, dramatic emphasis |

## Performance Settings

The system automatically detects:
- Mobile devices (reduces effects)
- Low-power devices (disables complex animations)
- Slow connections (minimal effects)
- User preferences (reduced motion, high contrast)

## Browser Support
- Modern browsers with CSS Grid and Framer Motion support
- Graceful degradation for older browsers
- Hardware acceleration optimized

## Development
- FPS monitoring in development mode
- Console warnings for performance issues
- TypeScript support throughout
