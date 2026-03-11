/* SLIDE 6 — 일은 시스템이 아니라 결국 사람으로 됩니다 */
import VideoBackground from '../components/VideoBackground';

const CONTENT = {
  videoSrc: '/videos/bg-cover.mp4',
  line1: '일은 시스템이 아니라',
  accent: '결국 사람',
  line2: '으로 됩니다.',
  photoPlaceholder1: '워크숍 사진 1',
  photoPlaceholder2: '워크숍 사진 2',
};

export default function FutureSlide() {
  return (
    <div className="slide">
      <VideoBackground src={CONTENT.videoSrc} overlayOpacity={0.55} />

      <div className="relative z-10 flex items-center justify-center w-full h-full" style={{ padding: '5%' }}>
        <div className="flex flex-col items-center" style={{ maxWidth: '85%', gap: 'clamp(32px, 4vw, 64px)' }}>

          {/* Tag + Title */}
          <div className="entrance entrance-d1 text-center" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 'clamp(8px, 1vw, 16px)' }}>
            <span className="font-pretendard tracking-widest" style={{ fontSize: 'clamp(13px, 1vw, 18px)', color: '#A78BFA', letterSpacing: '0.15em', opacity: 0.8 }}>
              네 번째 깨달음
            </span>
            <h2
              className="font-pretendard font-bold"
              style={{ fontSize: 'clamp(32px, 4vw, 80px)', letterSpacing: '-0.03em', lineHeight: 1.15 }}
            >
              {CONTENT.line1}
              <br />
              <span className="accent-glow" style={{ color: '#A78BFA' }}>{CONTENT.accent}</span>{CONTENT.line2}
            </h2>
          </div>

          {/* Photo placeholders */}
          <div className="entrance entrance-d2 flex justify-center" style={{ gap: 'clamp(12px, 1.5vw, 24px)' }}>
            {[CONTENT.photoPlaceholder1, CONTENT.photoPlaceholder2].map((label, i) => (
              <div
                key={i}
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
              >
                <span className="font-pretendard" style={{ fontSize: 'clamp(12px, 0.9vw, 16px)', opacity: 0.3 }}>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
