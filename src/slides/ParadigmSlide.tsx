/* SLIDE 3 — 전문가보다 문제를 해결하는 사람 */
import VideoBackground from '../components/VideoBackground';

const CONTENT = {
  videoSrc: '/videos/bg-quote.mp4',
  title: '전문가보다',
  accent: '문제를 해결하는 사람',
  photos: ['/photos/slide3/1.jpg', '/photos/slide3/2.jpg'],
};

export default function ParadigmSlide() {
  return (
    <div className="slide">
      <VideoBackground src={CONTENT.videoSrc} overlayOpacity={0.6} />

      <div className="relative z-10 flex items-center justify-center w-full h-full" style={{ padding: '5%' }}>
        <div className="flex flex-col items-center" style={{ maxWidth: '85%', gap: 'clamp(28px, 3.5vw, 56px)' }}>

          {/* Tag + Title */}
          <div className="entrance entrance-d1 text-center" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 'clamp(8px, 1vw, 16px)' }}>
            <span className="font-pretendard tracking-widest" style={{ fontSize: 'clamp(13px, 1vw, 18px)', color: '#FBBF24', letterSpacing: '0.15em', opacity: 0.8 }}>
              첫 번째 깨달음
            </span>
            <h2
              className="font-pretendard font-bold"
              style={{ fontSize: 'clamp(32px, 4vw, 80px)', letterSpacing: '-0.03em', lineHeight: 1.15 }}
            >
              {CONTENT.title}
              <br />
              <span style={{ color: '#FBBF24' }}>{CONTENT.accent}</span>
            </h2>
          </div>

          {/* Photos */}
          <div className="entrance entrance-d2 flex justify-center" style={{ gap: 'clamp(12px, 1.5vw, 24px)' }}>
            {CONTENT.photos.map((src, i) => (
              <div
                key={i}
                style={{
                  width: 'clamp(200px, 28vw, 420px)',
                  height: 'clamp(140px, 18vw, 280px)',
                  overflow: 'hidden',
                  borderRadius: 'clamp(8px, 1vw, 16px)',
                  background: 'linear-gradient(135deg, rgba(255,255,255,0.04), rgba(255,255,255,0.01))',
                  border: '1px solid rgba(255,255,255,0.1)',
                }}
              >
                <img
                  src={src}
                  alt={`slide3-${i + 1}`}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                  onError={(e) => { e.currentTarget.style.display = 'none'; }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
