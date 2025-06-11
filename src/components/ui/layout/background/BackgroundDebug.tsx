"use client";

import React, { useState } from 'react';
import { usePerformancePreference } from '@/hooks/usePerformancePreference';

export function BackgroundDebug() {
  const [debugMode, setDebugMode] = useState(false);
  const performanceMode = usePerformancePreference();

  if (process.env.NODE_ENV !== 'development') return null;

  return (
    <div className="fixed top-4 left-4 z-50 bg-black/80 text-white p-4 rounded text-sm font-sans">
      <button
        onClick={() => setDebugMode(!debugMode)}
        className="mb-2 px-2 py-1 bg-blue-600 rounded hover:bg-blue-700 transition-colors"
      >
        {debugMode ? 'Hide' : 'Show'} Background Debug
      </button>

      <div className="space-y-1">
        <div>Performance Mode: <span className="text-cyan-400">{performanceMode}</span></div>
        <div>Debug Mode: <span className={debugMode ? 'text-green-400' : 'text-red-400'}>{debugMode ? 'ON' : 'OFF'}</span></div>
      </div>

      {debugMode && (
        <>
          <style jsx global>{`
            .gentle-orb {
              opacity: 0.9 !important;
              filter: blur(30px) !important;
              background: radial-gradient(circle, rgba(0, 255, 255, 0.8) 0%, rgba(255, 0, 255, 0.6) 50%, transparent 70%) !important;
              border: 2px solid rgba(0, 255, 255, 0.5) !important;
            }

            .simple-vignette {
              opacity: 0.6 !important;
              background: radial-gradient(ellipse at center, transparent 0%, rgba(255, 0, 255, 0.2) 60%, rgba(0, 255, 255, 0.3) 100%) !important;
              mix-blend-mode: normal !important;
              border: 1px solid rgba(255, 255, 255, 0.1) !important;
            }

            .section-glow {
              opacity: 0.8 !important;
              mix-blend-mode: normal !important;
              border: 1px solid rgba(255, 255, 255, 0.1) !important;
            }

            .hero-glow {
              background: radial-gradient(ellipse at center top, rgba(138, 43, 226, 0.6) 0%, rgba(0, 255, 255, 0.4) 40%, transparent 70%) !important;
            }

            .transform-glow {
              background: radial-gradient(ellipse at 30% 50%, rgba(255, 105, 180, 0.5) 0%, rgba(0, 255, 255, 0.3) 50%, transparent 80%) !important;
            }

            .simplified-background {
              border: 2px solid rgba(255, 0, 255, 0.3) !important;
            }
          `}</style>
          <div className="mt-2 text-xs">
            <div className="text-yellow-400">🎨 Debug styles active</div>
            <div className="text-green-400">✅ All effects visible</div>
          </div>
        </>
      )}
    </div>
  );
}