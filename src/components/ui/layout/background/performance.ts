/**
 * Performance monitoring utilities for background effects
 */

export const BackgroundPerformance = {
  // Track FPS for performance monitoring
  measureFPS: () => {
    let frames = 0;
    let lastTime = performance.now();

    const measure = () => {
      frames++;
      const currentTime = performance.now();

      if (currentTime - lastTime >= 1000) {
        const fps = Math.round((frames * 1000) / (currentTime - lastTime));

        // Log performance warning if FPS drops below 45
        if (fps < 45) {
          console.warn(`Background effects may be impacting performance. FPS: ${fps}`);
        }

        frames = 0;
        lastTime = currentTime;
      }

      requestAnimationFrame(measure);
    };

    requestAnimationFrame(measure);
  },

  // Detect if device is low-powered
  isLowPowerDevice: () => {
    // Check if we're in a browser environment
    if (typeof window === 'undefined' || typeof document === 'undefined') {
      return false; // Default to high performance on server
    }

    const canvas = document.createElement('canvas');
    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');

    if (!gl) return true;

    const debugInfo = gl.getExtension('WEBGL_debug_renderer_info');
    if (debugInfo) {
      const renderer = gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL);
      // Basic detection for integrated graphics
      return /intel|integrated|software/i.test(renderer);
    }

    return false;
  },

  // Get optimal performance settings
  getOptimalSettings: () => {
    // Check if we're in a browser environment
    if (typeof window === 'undefined' || typeof navigator === 'undefined') {
      // Return safe defaults for server-side rendering
      return {
        enableOrbs: true,
        enableWaves: true,
        enableRays: true,
        enableTransitions: true,
        orbCount: 2,
        animationDuration: 'normal'
      };
    }

    const isMobile = /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    const isLowPower = BackgroundPerformance.isLowPowerDevice();
    const slowConnection = 'connection' in navigator && (navigator as any).connection?.effectiveType === 'slow-2g';

    if (slowConnection) {
      return {
        enableOrbs: false,
        enableWaves: false,
        enableRays: false,
        enableTransitions: false,
        orbCount: 0,
        animationDuration: 'slow'
      };
    }

    if (isMobile) {
      return {
        enableOrbs: true,        // Enable on mobile
        enableWaves: false,
        enableRays: false,
        enableTransitions: true, // Enable transitions on mobile
        orbCount: 1,
        animationDuration: 'slow'
      };
    }

    if (isLowPower) {
      return {
        enableOrbs: true,
        enableWaves: true,       // Enable waves on low power
        enableRays: false,
        enableTransitions: true,
        orbCount: 2,
        animationDuration: 'slow'
      };
    }

    return {
      enableOrbs: true,
      enableWaves: true,
      enableRays: true,
      enableTransitions: true,
      orbCount: 2,
      animationDuration: 'normal'
    };
  }
};
