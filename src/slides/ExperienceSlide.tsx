/* SLIDE 4 — 창의력 = 연결 능력 */
import VideoBackground from '../components/VideoBackground';
import { Link2 } from 'lucide-react';

const CONTENT = {
  videoSrc: '/videos/bg-safety.mp4',
  title: '창의력',
  equals: '=',
  accent: '연결 능력',
  photoPlaceholder1: 'Before',
  photoPlaceholder2: 'After',
};

const CONNECTIONS = [
  { label: 'ICT', color: '#A78BFA' },
  { label: '디지털 사이니지', color: '#F472B6' },
  { label: '기업문화', color: '#FBBF24' },
];

export default function ExperienceSlide() {
  return (
    <div className="slide">
      <VideoBackground src={CONTENT.videoSrc} overlayOpacity={0.6} />

      <div className="relative z-10 flex items-center justify-center w-full h-full" style={{ padding: '5%' }}>
        <div className="flex flex-col items-center" style={{ maxWidth: '85%', gap: 'clamp(28px, 3.5vw, 56px)' }}>

          {/* Title */}
          <div className="entrance entrance-d1 text-center">
            <h2
              className="font-pretendard font-bold"
              style={{ fontSize: 'clamp(36px, 4.5vw, 90px)', letterSpacing: '-0.03em', lineHeight: 1.15 }}
            >
              {CONTENT.title}
              <span style={{ opacity: 0.4, margin: '0 0.2em' }}>{CONTENT.equals}</span>
              <span style={{ color: '#F472B6' }}>{CONTENT.accent}</span>
            </h2>
          </div>

          {/* Connection chips */}
          <div className="entrance entrance-d2 flex items-center justify-center flex-wrap" style={{ gap: 'clamp(8px, 1vw, 16px)' }}>
            {CONNECTIONS.map((item, i) => (
              <div key={i} className="flex items-center" style={{ gap: 'clamp(8px, 1vw, 16px)' }}>
                <span
                  className="font-pretendard font-bold"
                  style={{
                    fontSize: 'clamp(16px, 1.5vw, 28px)',
                    padding: 'clamp(8px, 0.8vw, 14px) clamp(16px, 1.5vw, 28px)',
                    background: `${item.color}15`,
                    border: `1px solid ${item.color}33`,
                    borderRadius: 'clamp(8px, 1vw, 16px)',
                    color: item.color,
                  }}
                >
                  {item.label}
                </span>
                {i < CONNECTIONS.length - 1 && (
                  <Link2 style={{ width: 'clamp(16px, 1.2vw, 22px)', height: 'clamp(16px, 1.2vw, 22px)', opacity: 0.25 }} />
                )}
              </div>
            ))}
          </div>

          {/* Before / After photos */}
          <div className="entrance entrance-d3 flex justify-center" style={{ gap: 'clamp(12px, 1.5vw, 24px)' }}>
            {[CONTENT.photoPlaceholder1, CONTENT.photoPlaceholder2].map((label, i) => (
              <div
                key={i}
                className="flex flex-col items-center"
                style={{ gap: '8px' }}
              >
                <span className="font-pretendard font-bold" style={{ fontSize: 'clamp(12px, 0.9vw, 16px)', color: i === 0 ? '#EF4444' : '#34D399', opacity: 0.6 }}>
                  {label}
                </span>
                <div
                  style={{
                    width: 'clamp(200px, 28vw, 420px)',
                    height: 'clamp(140px, 18vw, 280px)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: 'linear-gradient(135deg, rgba(255,255,255,0.04), rgba(255,255,255,0.01))',
                    border: '1px dashed rgba(255,255,255,0.15)',
                    borderRadius: 'clamp(8px, 1vw, 16px)',
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
