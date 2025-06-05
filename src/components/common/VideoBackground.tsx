"use client";

import { useEffect, useRef } from "react";

interface VideoBackgroundProps {
  src: string;
  opacity?: number;
  overlay?: boolean;
  className?: string;
}

export default function VideoBackground({
  src,
  opacity = 0.7,
  overlay = true,
  className = "",
}: VideoBackgroundProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Ensure video plays on mount
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.log("Video autoplay failed:", error);
      });
    }
  }, []);

  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover scale-110"
        style={{ opacity }}
      >
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {overlay && (
        <>
          {/* Multiple gradient overlays for depth */}
          <div className="absolute inset-0 bg-gradient-to-b from-primary/60 via-primary/80 to-primary" />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-transparent to-transparent" />
          <div className="absolute inset-0 bg-gradient-radial mix-blend-multiply" />

          {/* Animated color overlay */}
          <div
            className="absolute inset-0 opacity-20"
            style={{
              background: "radial-gradient(circle at 50% 50%, rgba(215, 60, 190, 0.3) 0%, transparent 60%)",
              animation: "pulse 8s ease-in-out infinite",
            }}
          />
        </>
      )}
    </div>
  );
}