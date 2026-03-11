import { useEffect, useRef } from 'react';

interface VideoBackgroundProps {
  src?: string;
  youtubeId?: string;
  overlay?: boolean;
  overlayOpacity?: number;
  gradientTheme?: 'purple' | 'teal' | 'sunset' | 'storm' | 'gold' | 'neon' | 'rose';
}

const GRADIENT_THEMES: Record<string, string> = {
  purple: 'linear-gradient(135deg, #0c0015, #1a0033, #0d001a, #120025)',
  teal: 'linear-gradient(135deg, #001a1a, #002626, #001515, #002020)',
  sunset: 'linear-gradient(135deg, #1a0a00, #2d1200, #1a0800, #331500)',
  storm: 'linear-gradient(135deg, #0a0a1a, #0d0d2d, #080818, #0f0f25)',
  gold: 'linear-gradient(135deg, #1a1200, #2d1f00, #1a1000, #332200)',
  neon: 'linear-gradient(135deg, #0a001a, #150033, #0d0026, #1a004d)',
  rose: 'linear-gradient(135deg, #1a000d, #2d0015, #1a000a, #33001a)',
};

export default function VideoBackground({
  src,
  youtubeId,
  overlay = true,
  overlayOpacity = 0.45,
  gradientTheme = 'purple',
}: VideoBackgroundProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const loadedRef = useRef(false);

  useEffect(() => {
    if (youtubeId || !src) return;
    const video = videoRef.current;
    if (!video) return;

    const wrapper = video.closest('[data-slide-active]');

    const loadVideo = () => {
      if (loadedRef.current) return;
      loadedRef.current = true;
      video.src = src;
      video.addEventListener('loadedmetadata', () => {
        video.play().catch(() => {});
      });
    };

    if (!wrapper) {
      loadVideo();
      return;
    }

    const check = () => {
      const isActive = wrapper.getAttribute('data-slide-active') === 'true';
      const isPreload = wrapper.getAttribute('data-slide-preload') === 'true';

      if (isActive || isPreload) loadVideo();
      if (isActive) {
        video.play().catch(() => {});
      } else if (loadedRef.current) {
        video.pause();
      }
    };

    check();

    const observer = new MutationObserver(check);
    observer.observe(wrapper, {
      attributes: true,
      attributeFilter: ['data-slide-active', 'data-slide-preload'],
    });

    return () => {
      observer.disconnect();
      loadedRef.current = false;
    };
  }, [src, youtubeId]);

  return (
    <>
      {youtubeId ? (
        <div className="absolute inset-0 overflow-hidden">
          <iframe
            className="absolute w-[300%] h-[300%]"
            style={{
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              pointerEvents: 'none',
            }}
            src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&mute=1&loop=1&playlist=${youtubeId}&controls=0&showinfo=0&modestbranding=1&playsinline=1&rel=0&enablejsapi=1`}
            allow="autoplay; encrypted-media"
            allowFullScreen
            title="Background Video"
          />
        </div>
      ) : src ? (
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover"
          loop
          muted
          playsInline
        />
      ) : (
        <div
          className="absolute inset-0 animated-gradient"
          style={{ background: GRADIENT_THEMES[gradientTheme] || GRADIENT_THEMES.purple }}
        />
      )}
      {overlay && (
        <div
          className="absolute inset-0"
          style={{ backgroundColor: `rgba(0,0,0,${overlayOpacity})` }}
        />
      )}
    </>
  );
}
