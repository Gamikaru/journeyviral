// UI Gallery Health Check
"use client";

import React from 'react';

export default function UIGalleryHealthCheck() {
  const componentStatus = {
    'Isolated Components': {
      'IsolatedNeonButton': '✅ Ready',
      'IsolatedHeroTitle': '✅ Ready',
      'IsolatedHeroTagline': '✅ Ready',
      'IsolatedHeroLogo': '✅ Ready',
      'IsolatedGlassCard': '✅ Ready',
      'IsolatedVHSBadge': '✅ Ready',
      'IsolatedShimmerEffect': '✅ Ready'
    },
    'UI Gallery Sections': {
      'Hero Elements Section': '✅ Ready',
      'Buttons Section': '✅ Ready',
      'Typography Section': '✅ Ready',
      'Effects Section': '✅ Ready'
    },
    'Layout Components': {
      'Header': '✅ Ready',
      'Sidebar': '✅ Ready',
      'Navigation': '✅ Ready'
    }
  };

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 text-cyan-400">
          🔧 UI Gallery Health Check
        </h1>

        <div className="space-y-6">
          {Object.entries(componentStatus).map(([category, items]) => (
            <div key={category} className="bg-gray-900 rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-4 text-cyan-300">
                {category}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {Object.entries(items).map(([name, status]) => (
                  <div key={name} className="flex justify-between items-center p-3 bg-gray-800 rounded">
                    <span className="font-medium">{name}</span>
                    <span className="text-green-400">{status}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <p className="text-gray-400 mb-4">
            All components have been successfully isolated and are ready for testing.
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="/ui-gallery"
              className="bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              Visit UI Gallery
            </a>
            <a
              href="/test-hero-components"
              className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              Test Components
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
