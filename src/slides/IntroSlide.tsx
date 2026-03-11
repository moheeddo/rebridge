/* SLIDE 2 — 타임라인 (심플) */
import VideoBackground from '../components/VideoBackground';

const CONTENT = {
  videoSrc: '/videos/bg-agenda.mp4',
};

const TIMELINE = [
  { year: "'15", label: '입사 · 고리본부' },
  { year: "'19", label: '본사' },
  { year: "'23", label: '차장 승진 · 한울본부' },
  { year: "'25~", label: '인재개발원 · AI교육혁신TF' },
];

const KEYWORDS = ['물리적방호', 'ICT', '용역관리', '기업문화', '교육', 'AI'];

export default function IntroSlide() {
  return (
    <div className="slide">
      <VideoBackground src={CONTENT.videoSrc} overlayOpacity={0.6} />

      <div className="relative z-10 flex items-center justify-center w-full h-full" style={{ padding: '5%' }}>
        <div className="flex flex-col items-center" style={{ maxWidth: '90%', gap: 'clamp(32px, 4vw, 64px)' }}>

          {/* Timeline dots */}
          <div className="entrance entrance-d1 w-full flex items-start justify-center relative" style={{ gap: 'clamp(8px, 1vw, 16px)' }}>
            <div
              className="absolute line-reveal"
              style={{ top: 'clamp(14px, 1.6vw, 24px)', left: '10%', right: '10%', height: '2px', background: 'linear-gradient(90deg, rgba(167,139,250,0.1), rgba(167,139,250,0.4), rgba(167,139,250,0.1))' }}
            />
            {TIMELINE.map((item, i) => (
              <div key={i} className={`entrance entrance-d${i + 1} flex flex-col items-center text-center relative`} style={{ flex: 1 }}>
                <div style={{ width: 'clamp(10px, 1.2vw, 18px)', height: 'clamp(10px, 1.2vw, 18px)', borderRadius: '50%', background: '#A78BFA', boxShadow: '0 0 12px rgba(167,139,250,0.5)', marginBottom: 'clamp(12px, 1.4vw, 24px)', zIndex: 2 }} />
                <p className="font-pretendard font-bold" style={{ fontSize: 'clamp(18px, 1.8vw, 34px)', color: '#A78BFA' }}>{item.year}</p>
                <p className="font-pretendard" style={{ fontSize: 'clamp(13px, 1.1vw, 20px)', opacity: 0.7, marginTop: '4px' }}>{item.label}</p>
              </div>
            ))}
          </div>

          {/* Keyword chips */}
          <div className="entrance entrance-d5 flex flex-wrap justify-center" style={{ gap: 'clamp(8px, 0.8vw, 14px)' }}>
            {KEYWORDS.map((kw, i) => (
              <span
                key={i}
                className="font-pretendard"
                style={{
                  fontSize: 'clamp(13px, 1vw, 18px)',
                  padding: 'clamp(4px, 0.4vw, 8px) clamp(12px, 1.2vw, 20px)',
                  background: 'rgba(167,139,250,0.1)',
                  border: '1px solid rgba(167,139,250,0.2)',
                  borderRadius: '999px',
                  opacity: 0.7,
                }}
              >
                {kw}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
