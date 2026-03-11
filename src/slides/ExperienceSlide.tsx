/* ============================================================
   SLIDE 4 — 창의력 = 연결 능력
   인재개발원 디자인 표준화 사례
   ============================================================ */
import VideoBackground from '../components/VideoBackground';
import GlassCard from '../components/GlassCard';
import { Link2 } from 'lucide-react';

const CONTENT = {
  videoSrc: '/videos/bg-safety.mp4',
  sectionTag: 'INSIGHT 02',
  title: '창의력 = 연결 능력',
  subtitle: '새로운 것을 만드는 능력이 아니라\n기존 경험을 연결하는 능력',
  story: '작년 기업문화 업무를 하면서\n인재개발원의 디자인을 바꾸는 프로젝트를 했습니다.',
  lesson: 'Zero to One은 천재적인 아이디어가 아니라\n지금까지의 경험들을 연결하는 능력입니다.',
  photoPlaceholder1: '디자인 Before',
  photoPlaceholder2: '디자인 After',
};

const CONNECTIONS = [
  { label: 'ICT 경험', color: '#A78BFA' },
  { label: '디지털 사이니지', color: '#F472B6' },
  { label: '기업문화', color: '#FBBF24' },
];

export default function ExperienceSlide() {
  return (
    <div className="slide">
      <VideoBackground src={CONTENT.videoSrc} overlayOpacity={0.6} />

      <div className="relative z-10 flex items-center justify-center w-full h-full" style={{ padding: '5%' }}>
        <div className="flex flex-col items-center w-full" style={{ maxWidth: '88%', gap: 'clamp(20px, 2.5vw, 40px)' }}>

          {/* Header */}
          <div className="entrance entrance-d1 flex flex-col items-center" style={{ gap: 'clamp(6px, 0.8vw, 12px)' }}>
            <span className="font-pretendard tracking-widest" style={{ fontSize: 'clamp(12px, 0.9vw, 16px)', color: '#F472B6', letterSpacing: '0.2em' }}>
              {CONTENT.sectionTag}
            </span>
            <h2 className="font-pretendard font-bold text-center" style={{ fontSize: 'clamp(28px, 3.5vw, 64px)', letterSpacing: '-0.02em' }}>
              {CONTENT.title}
            </h2>
            <p className="font-pretendard text-center whitespace-pre-line" style={{ fontSize: 'clamp(15px, 1.3vw, 24px)', opacity: 0.6, lineHeight: 1.5 }}>
              {CONTENT.subtitle}
            </p>
          </div>

          {/* Connection diagram: A + B + C → Result */}
          <div className="entrance entrance-d2 flex items-center justify-center flex-wrap" style={{ gap: 'clamp(8px, 1vw, 16px)' }}>
            {CONNECTIONS.map((item, i) => (
              <div key={i} className="flex items-center" style={{ gap: 'clamp(8px, 1vw, 16px)' }}>
                <GlassCard
                  style={{
                    padding: 'clamp(12px, 1.2vw, 20px) clamp(20px, 2vw, 36px)',
                    borderColor: `${item.color}33`,
                    textAlign: 'center',
                  }}
                >
                  <p className="font-pretendard font-bold" style={{ fontSize: 'clamp(15px, 1.3vw, 24px)', color: item.color }}>
                    {item.label}
                  </p>
                </GlassCard>
                {i < CONNECTIONS.length - 1 && (
                  <Link2 style={{ width: 'clamp(16px, 1.4vw, 24px)', height: 'clamp(16px, 1.4vw, 24px)', opacity: 0.3, color: '#fff' }} />
                )}
              </div>
            ))}
          </div>

          {/* Story + Photo placeholders */}
          <div className="flex flex-wrap justify-center items-stretch w-full" style={{ gap: 'clamp(12px, 1.5vw, 24px)' }}>
            {/* Story */}
            <div className="entrance entrance-d3" style={{ flex: '1 1 clamp(260px, 36vw, 460px)', maxWidth: '520px' }}>
              <GlassCard style={{ padding: 'clamp(20px, 2vw, 36px)', height: '100%' }}>
                <p className="font-pretendard whitespace-pre-line" style={{ fontSize: 'clamp(15px, 1.2vw, 22px)', opacity: 0.85, lineHeight: 1.7 }}>
                  {CONTENT.story}
                </p>
              </GlassCard>
            </div>

            {/* Before / After photos */}
            <div className="entrance entrance-d4 flex" style={{ flex: '0 1 clamp(300px, 32vw, 460px)', gap: 'clamp(8px, 1vw, 16px)' }}>
              {[CONTENT.photoPlaceholder1, CONTENT.photoPlaceholder2].map((label, i) => (
                <div
                  key={i}
                  style={{
                    flex: 1,
                    minHeight: 'clamp(120px, 14vw, 200px)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: 'linear-gradient(135deg, rgba(255,255,255,0.04), rgba(255,255,255,0.01))',
                    border: '1px dashed rgba(255,255,255,0.15)',
                    borderRadius: 'clamp(8px, 1vw, 16px)',
                    gap: '8px',
                  }}
                >
                  <span className="font-pretendard font-bold" style={{ fontSize: 'clamp(12px, 0.9vw, 16px)', opacity: 0.4, color: i === 0 ? '#EF4444' : '#34D399' }}>
                    {i === 0 ? 'BEFORE' : 'AFTER'}
                  </span>
                  <span className="font-pretendard" style={{ fontSize: 'clamp(11px, 0.8vw, 14px)', opacity: 0.25 }}>{label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Lesson */}
          <div className="entrance entrance-d5">
            <div
              style={{
                padding: 'clamp(12px, 1.2vw, 20px) clamp(24px, 2.5vw, 48px)',
                background: 'rgba(244, 114, 182, 0.08)',
                border: '1px solid rgba(244, 114, 182, 0.2)',
                borderRadius: 'clamp(8px, 1vw, 16px)',
              }}
            >
              <p className="font-pretendard font-bold text-center whitespace-pre-line accent-glow" style={{ fontSize: 'clamp(17px, 1.5vw, 28px)', color: '#F472B6', lineHeight: 1.4 }}>
                {CONTENT.lesson}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
