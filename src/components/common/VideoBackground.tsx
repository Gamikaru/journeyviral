// File: src/components/common/VideoBackground.tsx

"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { motion, useMotionValue, useTransform, AnimatePresence } from "framer-motion";

interface VideoBackgroundProps {
  src: string;
  poster?: string;
  opacity?: number;
  overlay?: boolean;
  overlayVariant?: "default" | "glitch" | "cyberpunk" | "vhs" | "holographic" | "matrix";
  className?: string;
  muted?: boolean;
  loop?: boolean;
  playbackRate?: number;
  interactive?: boolean;
  particleEffect?: boolean;
  quality?: "auto" | "low" | "medium" | "high";
}

export default function VideoBackground({
  src,
  poster,
  opacity = 0.7,
  overlay = true,
  overlayVariant = "default",
  className = "",
  muted = true,
  loop = true,
  playbackRate = 1,
  interactive = true,
  particleEffect = false,
  quality = "auto",
}: VideoBackgroundProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number }>>([]);

  // Mouse tracking for interactive effects
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Transform mouse position to overlay effects
  const overlayX = useTransform(mouseX, [0, 1], [-20, 20]);
  const overlayY = useTransform(mouseY, [0, 1], [-20, 20]);

  // Handle mouse movement
  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!interactive || !containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;

    mouseX.set(x);
    mouseY.set(y);
  }, [interactive, mouseX, mouseY]);

  // Setup video and effects
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Set video quality based on prop
    if (quality !== "auto") {
      const qualityMap = {
        low: 480,
        medium: 720,
        high: 1080,
      };
      video.height = qualityMap[quality];
    }

    // Set playback rate
    video.playbackRate = playbackRate;

    // Play video
    const playVideo = async () => {
      try {
        await video.play();
        setIsPlaying(true);
      } catch (error) {
        console.log("Video autoplay failed:", error);
        // Try playing on user interaction
        const playOnInteraction = () => {
          video.play().then(() => {
            setIsPlaying(true);
            document.removeEventListener("click", playOnInteraction);
          });
        };
        document.addEventListener("click", playOnInteraction);
      }
    };

    if (video.readyState >= 3) {
      playVideo();
    } else {
      video.addEventListener("canplay", playVideo);
    }

    // Event listeners
    const handleLoadedData = () => setIsLoaded(true);
    const handleError = () => setVideoError(true);

    video.addEventListener("loadeddata", handleLoadedData);
    video.addEventListener("error", handleError);

    return () => {
      video.removeEventListener("canplay", playVideo);
      video.removeEventListener("loadeddata", handleLoadedData);
      video.removeEventListener("error", handleError);
    };
  }, [playbackRate]);

  // Mouse tracking effect
  useEffect(() => {
    if (interactive) {
      window.addEventListener("mousemove", handleMouseMove);
      return () => window.removeEventListener("mousemove", handleMouseMove);
    }
  }, [interactive, handleMouseMove]);

  // Generate particles
  useEffect(() => {
    if (particleEffect) {
      const newParticles = Array.from({ length: 30 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
      }));
      setParticles(newParticles);
    }
  }, [particleEffect]);

  // Overlay styles based on variant
  const getOverlayStyles = () => {
    switch (overlayVariant) {
      case "glitch":
        return (
          <>
            <div className="absolute inset-0 bg-gradient-to-b from-primary/60 via-primary/80 to-primary mix-blend-multiply" />
            <div
              className="absolute inset-0 opacity-20"
              style={{
                background: "repeating-linear-gradient(0deg, rgba(0,0,0,0.15), transparent 1px, transparent 2px, rgba(0,0,0,0.15) 3px)",
                animation: "glitch 0.5s infinite",
              }}
            />
            <div className="absolute inset-0 mix-blend-color-dodge opacity-10">
              <div className="h-full w-full bg-gradient-to-r from-accent-neon via-transparent to-accent-electric animate-glitch" />
            </div>
          </>
        );

      case "cyberpunk":
        return (
          <>
            <div className="absolute inset-0 bg-gradient-to-br from-accent-neon/20 via-transparent to-accent-electric/20 mix-blend-overlay" />
            <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-primary/50" />
            <motion.div
              className="absolute inset-0"
              style={{
                background: "radial-gradient(circle at var(--mouse-x) var(--mouse-y), rgba(255,0,255,0.2) 0%, transparent 50%)",
                x: overlayX,
                y: overlayY,
              }}
            />
            <div className="absolute bottom-0 left-0 right-0 h-px bg-accent-neon shadow-[0_0_10px_#ff00ff]" />
          </>
        );

      case "vhs":
        return (
          <>
            <div className="absolute inset-0 bg-gradient-to-b from-primary/50 via-primary/70 to-primary" />
            <div
              className="absolute inset-0 opacity-30 mix-blend-screen"
              style={{
                backgroundImage: `
                  repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.03) 2px, rgba(255,255,255,0.03) 4px),
                  repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(255,255,255,0.03) 2px, rgba(255,255,255,0.03) 4px)
                `,
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 via-green-500/10 to-blue-500/10 mix-blend-color animate-pulse" />
            <div className="absolute top-0 left-0 right-0 h-4 bg-gradient-to-b from-white/20 to-transparent opacity-50" />
          </>
        );

      case "holographic":
        return (
          <>
            <div className="absolute inset-0 bg-gradient-to-br from-primary/40 via-primary/60 to-primary" />
            <motion.div
              className="absolute inset-0 opacity-30"
              animate={{
                background: [
                  "linear-gradient(45deg, transparent 30%, rgba(255,0,255,0.3) 50%, transparent 70%)",
                  "linear-gradient(45deg, transparent 30%, rgba(0,255,255,0.3) 50%, transparent 70%)",
                  "linear-gradient(45deg, transparent 30%, rgba(255,110,199,0.3) 50%, transparent 70%)",
                ],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "linear",
              }}
            />
            <div className="absolute inset-0 mix-blend-overlay opacity-20">
              <div className="h-full w-full bg-gradient-holographic bg-[length:400%_400%] animate-gradient-shift" />
            </div>
          </>
        );

      case "matrix":
        return (
          <>
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-primary/80 to-primary" />
            <div
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage: "url('data:image/svg+xml,%3Csvg width=\"40\" height=\"40\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Ctext x=\"0\" y=\"20\" font-family=\"monospace\" font-size=\"10\" fill=\"%2300ff88\"%3E10%3C/text%3E%3Ctext x=\"20\" y=\"20\" font-family=\"monospace\" font-size=\"10\" fill=\"%2300ff88\"%3E01%3C/text%3E%3Ctext x=\"0\" y=\"40\" font-family=\"monospace\" font-size=\"10\" fill=\"%2300ff88\"%3E01%3C/text%3E%3Ctext x=\"20\" y=\"40\" font-family=\"monospace\" font-size=\"10\" fill=\"%2300ff88\"%3E10%3C/text%3E%3C/svg%3E')",
                animation: "matrix-rain 20s linear infinite",
              }}
            />
            <div className="absolute inset-0 bg-gradient-radial from-success/10 to-transparent mix-blend-screen" />
          </>
        );

      default:
        return (
          <>
            <div className="absolute inset-0 bg-gradient-to-b from-primary/60 via-primary/80 to-primary" />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-transparent to-transparent" />
            <motion.div
              className="absolute inset-0 opacity-20"
              style={{
                background: "radial-gradient(circle at 50% 50%, rgba(215, 60, 190, 0.3) 0%, transparent 60%)",
              }}
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </>
        );
    }
  };

  return (
    <div ref={containerRef} className={`absolute inset-0 overflow-hidden ${className}`}>
      {/* Loading state */}
      <AnimatePresence>
        {!isLoaded && (
          <motion.div
            className="absolute inset-0 bg-primary-ultraDark flex items-center justify-center z-20"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative">
              <div className="w-16 h-16 border-4 border-accent/20 border-t-accent rounded-full animate-spin" />
              <div className="absolute inset-0 w-16 h-16 border-4 border-accent-electric/20 border-b-accent-electric rounded-full animate-spin-slow" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Error state */}
      {videoError && (
        <div className="absolute inset-0 bg-gradient-to-br from-primary-dark to-primary flex items-center justify-center">
          <div className="text-center">
            <div className="text-6xl mb-4">🎬</div>
            <p className="text-white/60">Video unavailable</p>
          </div>
        </div>
      )}

      {/* Video element */}
      <video
        ref={videoRef}
        autoPlay
        loop={loop}
        muted={muted}
        playsInline
        poster={poster}
        className="absolute inset-0 w-full h-full object-cover"
        style={{
          opacity,
          filter: overlayVariant === "vhs" ? "contrast(1.1) saturate(1.2)" : undefined,
        }}
        onLoadedData={() => setIsLoaded(true)}
        onError={() => setVideoError(true)}
      >
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay effects */}
      {overlay && !videoError && (
        <>
          {getOverlayStyles()}

          {/* Particle effects */}
          {particleEffect && (
            <div className="absolute inset-0 pointer-events-none">
              {particles.map((particle) => (
                <motion.div
                  key={particle.id}
                  className="absolute w-1 h-1 bg-white rounded-full"
                  style={{
                    left: `${particle.x}%`,
                    top: `${particle.y}%`,
                    filter: "blur(0.5px)",
                  }}
                  animate={{
                    y: [0, -100],
                    opacity: [0, 1, 0],
                  }}
                  transition={{
                    duration: 3 + Math.random() * 2,
                    repeat: Infinity,
                    delay: particle.id * 0.1,
                    ease: "linear",
                  }}
                />
              ))}
            </div>
          )}

          {/* Scanlines for certain variants */}
          {(overlayVariant === "vhs" || overlayVariant === "glitch") && (
            <div
              className="absolute inset-0 pointer-events-none opacity-10"
              style={{
                backgroundImage: "repeating-linear-gradient(0deg, rgba(0,0,0,0.25), rgba(0,0,0,0.25) 1px, transparent 1px, transparent 2px)",
                animation: "scanlines 8s linear infinite",
              }}
            />
          )}
        </>
      )}

      {/* Play/Pause indicator */}
      {!isPlaying && isLoaded && !videoError && (
        <motion.div
          className="absolute inset-0 flex items-center justify-center bg-black/50 cursor-pointer z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => {
            videoRef.current?.play();
            setIsPlaying(true);
          }}
        >
          <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
            <div className="w-0 h-0 border-l-[20px] border-l-white border-t-[12px] border-t-transparent border-b-[12px] border-b-transparent ml-2" />
          </div>
        </motion.div>
      )}
    </div>
  );
}