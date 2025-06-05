// File: src/app/Loading.tsx

export default function Loading() {
  return (
    <div className="min-h-screen bg-primary flex items-center justify-center">
      <div className="relative">
        {/* Animated logo placeholder */}
        <div className="w-24 h-24 rounded-full bg-gradient-to-r from-accent to-pink-500 animate-pulse" />

        {/* Rotating ring */}
        <div className="absolute inset-0 rounded-full border-4 border-white/20 border-t-accent animate-spin" />

        {/* Loading text */}
        <p className="mt-8 text-white/60 text-center animate-pulse">
          Loading viral content...
        </p>
      </div>
    </div>
  );
}
