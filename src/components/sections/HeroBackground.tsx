"use client";

export default function HeroBackground() {
  return (
    <>
      {/* Fallback background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("/images/misc/purple_gradient_bg_static_image.jpg")',
        }}
      />

      {/* Video Background - Enhanced test with better browser support */}
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover z-10"
        onError={(e) => {
          console.error("Video error:", e);
          console.error("Video error details:", e.currentTarget.error);
          // Hide video on error to show fallback background
          e.currentTarget.style.display = 'none';
        }}
        onLoadedData={() => console.log("Video loaded successfully")}
        onCanPlay={() => console.log("Video can play")}
        onLoadStart={() => console.log("Video load started")}
      >
        <source src="/videos/video_version_of_Homepage_hero_bg.mp4" type="video/mp4" />
        <p className="absolute inset-0 flex items-center justify-center text-white bg-red-500/50">
          Your browser does not support the video tag. Video path: /videos/video_version_of_Homepage_hero_bg.mp4
        </p>
      </video>
    </>
  );
}
