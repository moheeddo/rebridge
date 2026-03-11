import { useState, useEffect, useCallback } from 'react';
import type { ReactElement } from 'react';
import { ChevronLeft, ChevronRight, Maximize, Minimize } from 'lucide-react';

interface PresentationProps {
  slides: ReactElement[];
}

export default function Presentation({ slides }: PresentationProps) {
  const [current, setCurrent] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [controlsVisible, setControlsVisible] = useState(true);
  const [transitioning, setTransitioning] = useState(false);
  const total = slides.length;

  const goTo = useCallback((index: number) => {
    if (index < 0 || index >= total || transitioning) return;
    setTransitioning(true);
    setCurrent(index);
    setTimeout(() => setTransitioning(false), 500);
  }, [total, transitioning]);

  const next = useCallback(() => goTo(current + 1), [current, goTo]);
  const prev = useCallback(() => goTo(current - 1), [current, goTo]);

  const toggleFullscreen = useCallback(() => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
      setIsFullscreen(true);
    } else {
      document.exitFullscreen().catch(() => {});
      setIsFullscreen(false);
    }
  }, []);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      switch (e.key) {
        case 'ArrowRight':
        case 'ArrowDown':
        case ' ':
          e.preventDefault();
          next();
          break;
        case 'ArrowLeft':
        case 'ArrowUp':
          e.preventDefault();
          prev();
          break;
        case 'f':
        case 'F':
          toggleFullscreen();
          break;
        case 'Escape':
          if (document.fullscreenElement) {
            document.exitFullscreen();
            setIsFullscreen(false);
          }
          break;
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [next, prev, toggleFullscreen]);

  useEffect(() => {
    const handler = () => setIsFullscreen(!!document.fullscreenElement);
    document.addEventListener('fullscreenchange', handler);
    return () => document.removeEventListener('fullscreenchange', handler);
  }, []);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    const showControls = () => {
      setControlsVisible(true);
      clearTimeout(timer);
      timer = setTimeout(() => setControlsVisible(false), 3000);
    };
    window.addEventListener('mousemove', showControls);
    timer = setTimeout(() => setControlsVisible(false), 3000);
    return () => {
      window.removeEventListener('mousemove', showControls);
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="relative w-full h-full bg-black overflow-hidden select-none">
      {slides.map((slide, i) => {
        const offset = i - current;
        const isActive = i === current;

        const isZoom = i === 1 || i === 5;
        const isSlideUp = i === 3 || i === 6;

        let transform: string;
        let duration = 500;

        if (isZoom) {
          transform = isActive ? 'scale(1)' : offset < 0 ? 'scale(1.15)' : 'scale(0.85)';
          duration = 700;
        } else if (isSlideUp) {
          transform = isActive ? 'translateY(0)' : offset < 0 ? 'translateY(-4%)' : 'translateY(4%)';
          duration = 600;
        } else {
          transform = `scale(${isActive ? 1 : offset < 0 ? 0.95 : 1.05})`;
        }

        return (
          <div
            key={i}
            className="absolute inset-0 w-full h-full"
            data-slide-active={isActive ? 'true' : 'false'}
            data-slide-preload={Math.abs(offset) <= 1 ? 'true' : 'false'}
            style={{
              opacity: isActive ? 1 : 0,
              transform,
              transition: `opacity ${duration}ms ease-in-out, transform ${duration}ms ease-in-out`,
              pointerEvents: isActive ? 'auto' : 'none',
              zIndex: isActive ? 1 : 0,
            }}
          >
            {slide}
          </div>
        );
      })}

      {/* Top-right hint */}
      <div
        className="absolute top-[2%] right-[2%] z-50"
        style={{
          opacity: controlsVisible ? 1 : 0,
          transition: 'opacity 300ms ease',
          fontSize: '11px',
          color: 'rgba(255,255,255,0.4)',
        }}
      >
        <span className="font-pretendard">&larr; &rarr; Navigate &middot; F Fullscreen</span>
      </div>

      {/* Bottom navigation bar */}
      <div
        className="absolute bottom-0 left-0 right-0 z-50 flex items-center justify-between"
        style={{
          opacity: controlsVisible ? 1 : 0,
          transition: 'opacity 300ms ease',
          padding: '0 2.5% 2% 2.5%',
        }}
      >
        <div
          className="font-pretendard"
          style={{
            fontSize: '13px',
            fontVariantNumeric: 'tabular-nums',
            minWidth: '60px',
          }}
        >
          <span style={{ color: '#A78BFA', fontWeight: 700 }}>{current + 1}</span>
          <span style={{ color: 'rgba(255,255,255,0.35)' }}> / {total}</span>
        </div>

        <div className="flex items-center gap-[6px]">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className="rounded-full transition-all duration-300"
              style={{
                width: i === current ? '24px' : '6px',
                height: '6px',
                backgroundColor: i === current ? '#A78BFA' : 'rgba(255,255,255,0.25)',
                boxShadow: i === current ? '0 0 8px rgba(167, 139, 250, 0.5)' : 'none',
              }}
            />
          ))}
        </div>

        <div className="flex items-center gap-[8px]" style={{ minWidth: '60px', justifyContent: 'flex-end' }}>
          <button
            onClick={prev}
            className="flex items-center justify-center rounded-md transition-all duration-200"
            style={{ width: '32px', height: '32px', color: 'rgba(255,255,255,0.5)' }}
            onMouseEnter={(e) => { e.currentTarget.style.color = 'rgba(255,255,255,0.9)'; e.currentTarget.style.background = 'rgba(255,255,255,0.1)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(255,255,255,0.5)'; e.currentTarget.style.background = 'transparent'; }}
          >
            <ChevronLeft size={18} />
          </button>
          <button
            onClick={next}
            className="flex items-center justify-center rounded-md transition-all duration-200"
            style={{ width: '32px', height: '32px', color: 'rgba(255,255,255,0.5)' }}
            onMouseEnter={(e) => { e.currentTarget.style.color = 'rgba(255,255,255,0.9)'; e.currentTarget.style.background = 'rgba(255,255,255,0.1)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(255,255,255,0.5)'; e.currentTarget.style.background = 'transparent'; }}
          >
            <ChevronRight size={18} />
          </button>
          <div style={{ width: '1px', height: '16px', backgroundColor: 'rgba(255,255,255,0.2)', margin: '0 4px' }} />
          <button
            onClick={toggleFullscreen}
            className="flex items-center justify-center rounded-md transition-all duration-200"
            style={{ width: '32px', height: '32px', color: 'rgba(255,255,255,0.5)' }}
            onMouseEnter={(e) => { e.currentTarget.style.color = 'rgba(255,255,255,0.9)'; e.currentTarget.style.background = 'rgba(255,255,255,0.1)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(255,255,255,0.5)'; e.currentTarget.style.background = 'transparent'; }}
          >
            {isFullscreen ? <Minimize size={16} /> : <Maximize size={16} />}
          </button>
        </div>
      </div>

      {/* Bottom progress line */}
      <div className="absolute bottom-0 left-0 right-0 z-40" style={{ height: '2px', background: 'rgba(255,255,255,0.04)' }}>
        <div
          className="progress-bar-accent"
          style={{
            height: '100%',
            width: `${((current + 1) / total) * 100}%`,
            background: 'linear-gradient(90deg, rgba(167,139,250,0.2), #A78BFA)',
            transition: 'width 600ms cubic-bezier(0.16, 1, 0.3, 1)',
          }}
        />
      </div>
    </div>
  );
}
