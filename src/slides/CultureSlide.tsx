/* SLIDE 5 — 커뮤니케이션 */
import VideoBackground from '../components/VideoBackground';

const CONTENT = {
  videoSrc: '/videos/bg-agenda.mp4',
  accent: '커뮤니케이션',
  sub: 'AI 시대에도 가장 중요한 능력',
};

export default function CultureSlide() {
  return (
    <div className="slide">
      <VideoBackground src={CONTENT.videoSrc} overlayOpacity={0.6} />
      <div className="relative z-10 flex items-center justify-center w-full h-full">
        <div className="flex flex-col items-center text-center" style={{ maxWidth: '80%', gap: 'clamp(16px, 2vw, 32px)' }}>
          <div className="entrance entrance-d1" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 'clamp(8px, 1vw, 16px)' }}>
            <span className="font-pretendard tracking-widest" style={{ fontSize: 'clamp(13px, 1vw, 18px)', color: '#34D399', letterSpacing: '0.15em', opacity: 0.8 }}>
              세 번째 깨달음
            </span>
            <p className="font-pretendard" style={{ fontSize: 'clamp(16px, 1.5vw, 28px)', opacity: 0.5 }}>
              {CONTENT.sub}
            </p>
          </div>
          <div className="entrance entrance-d2">
            <h2
              className="font-pretendard font-bold accent-glow"
              style={{ fontSize: 'clamp(48px, 7vw, 140px)', color: '#34D399', letterSpacing: '-0.03em' }}
            >
              {CONTENT.accent}
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}
