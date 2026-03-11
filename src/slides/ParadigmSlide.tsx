/* SLIDE 3 — 전문가보다 문제를 해결하는 사람 */
import VideoBackground from '../components/VideoBackground';

const CONTENT = {
  videoSrc: '/videos/bg-quote.mp4',
  title: '전문가보다',
  accent: '문제를 해결하는 사람',
  photoPlaceholder1: '회의실 사진 1',
  photoPlaceholder2: '회의실 사진 2',
};

export default function ParadigmSlide() {
  return (
    <div className="slide">
      <VideoBackground src={CONTENT.videoSrc} overlayOpacity={0.6} />

      <div className="relative z-10 flex items-center justify-center w-full h-full" style={{ padding: '5%' }}>
        <div className="flex flex-col items-center" style={{ maxWidth: '85%', gap: 'clamp(28px, 3.5vw, 56px)' }}>

          {/* Title */}
          <div className="entrance entrance-d1 text-center">
            <h2
              className="font-pretendard font-bold"
              style={{ fontSize: 'clamp(32px, 4vw, 80px)', letterSpacing: '-0.03em', lineHeight: 1.15 }}
            >
              {CONTENT.title}
              <br />
              <span style={{ color: '#FBBF24' }}>{CONTENT.accent}</span>
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
