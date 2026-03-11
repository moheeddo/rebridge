/* SLIDE 5 — 세 번째 깨달음: 커뮤니케이션 + 일은 사람으로 된다 */
import VideoBackground from '../components/VideoBackground';

const CONTENT = {
  videoSrc: '/videos/bg-agenda.mp4',
  accent: '커뮤니케이션',
  sub: '일은 시스템이 아니라 결국 사람으로 됩니다',
  photos: ['/photos/slide5/1.jpg', '/photos/slide5/2.jpg'],
};

export default function CultureSlide() {
  return (
    <div className="slide">
      <VideoBackground src={CONTENT.videoSrc} overlayOpacity={0.6} />
      <div className="relative z-10 flex items-center justify-center w-full h-full" style={{ padding: '5%' }}>
        <div className="flex flex-col items-center text-center" style={{ maxWidth: '85%', gap: 'clamp(20px, 2.5vw, 40px)' }}>

          {/* Tag */}
          <div className="entrance entrance-d1">
            <span className="font-pretendard tracking-widest" style={{ fontSize: 'clamp(13px, 1vw, 18px)', color: '#34D399', letterSpacing: '0.15em', opacity: 0.8 }}>
              세 번째 깨달음
            </span>
          </div>

          {/* Main keyword */}
          <div className="entrance entrance-d2">
            <h2
              className="font-pretendard font-bold accent-glow"
              style={{ fontSize: 'clamp(48px, 7vw, 140px)', color: '#34D399', letterSpacing: '-0.03em' }}
            >
              {CONTENT.accent}
            </h2>
          </div>

          {/* Sub message */}
          <div className="entrance entrance-d3">
            <p className="font-pretendard" style={{ fontSize: 'clamp(18px, 1.8vw, 34px)', opacity: 0.6 }}>
              {CONTENT.sub}
            </p>
          </div>

          {/* Photos */}
          <div className="entrance entrance-d4 flex justify-center" style={{ gap: 'clamp(12px, 1.5vw, 24px)' }}>
            {CONTENT.photos.map((src, i) => (
              <div
                key={i}
                style={{
                  width: 'clamp(180px, 26vw, 380px)',
                  height: 'clamp(120px, 16vw, 240px)',
                  overflow: 'hidden',
                  borderRadius: 'clamp(8px, 1vw, 16px)',
                  background: 'linear-gradient(135deg, rgba(255,255,255,0.04), rgba(255,255,255,0.01))',
                  border: '1px solid rgba(255,255,255,0.1)',
                }}
              >
                <img
                  src={src}
                  alt={`slide5-${i + 1}`}
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
