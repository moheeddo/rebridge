/* ============================================================
   SLIDE 2 — 타임라인: 커리어 여정
   심플한 타임라인 + 핵심 메시지
   ============================================================ */
import VideoBackground from '../components/VideoBackground';

const CONTENT = {
  videoSrc: '/videos/bg-agenda.mp4',
  sectionTag: 'MY JOURNEY',
  title: '다양한 경험이 가장 큰 자산',
  bottomQuote: '"내 커리어가 왜 이렇게 왔다 갔다 하지?"',
  bottomAnswer: '시간이 지나고 보니,\n그 경험들이 오히려 가장 큰 자산이었습니다.',
};

const TIMELINE = [
  { year: "'15.08", label: '입사', sub: '고리본부', color: '#A78BFA' },
  { year: "'15~'19", label: '고리본부', sub: '물리적방호 · ICT', color: '#818CF8' },
  { year: "'19~'23", label: '본사', sub: 'ICT · 용역관리 · 기업문화', color: '#F472B6' },
  { year: "'23", label: '차장 승진', sub: '', color: '#FBBF24' },
  { year: "'23~'24", label: '한울본부', sub: '현장 경험', color: '#34D399' },
  { year: "'25~", label: '인재개발원', sub: 'ICT · AI교육혁신TF', color: '#A78BFA' },
];

export default function IntroSlide() {
  return (
    <div className="slide">
      <VideoBackground src={CONTENT.videoSrc} overlayOpacity={0.6} />

      <div className="relative z-10 flex items-center justify-center w-full h-full" style={{ padding: '5%' }}>
        <div className="flex flex-col items-center w-full" style={{ maxWidth: '90%', gap: 'clamp(24px, 3vw, 48px)' }}>

          {/* Header */}
          <div className="entrance entrance-d1 flex flex-col items-center" style={{ gap: 'clamp(6px, 0.8vw, 12px)' }}>
            <span className="font-pretendard tracking-widest" style={{ fontSize: 'clamp(12px, 0.9vw, 16px)', color: '#A78BFA', letterSpacing: '0.2em' }}>
              {CONTENT.sectionTag}
            </span>
            <h2 className="font-pretendard font-bold text-center" style={{ fontSize: 'clamp(28px, 3.5vw, 64px)', letterSpacing: '-0.02em' }}>
              {CONTENT.title}
            </h2>
          </div>

          {/* Timeline — horizontal */}
          <div className="entrance entrance-d2 w-full flex items-start justify-center relative" style={{ gap: 'clamp(4px, 0.5vw, 8px)' }}>
            {/* Connecting line */}
            <div
              className="absolute line-reveal"
              style={{
                top: 'clamp(18px, 2vw, 32px)',
                left: '8%',
                right: '8%',
                height: '2px',
                background: 'linear-gradient(90deg, rgba(167,139,250,0.1), rgba(167,139,250,0.4), rgba(167,139,250,0.1))',
              }}
            />
            {TIMELINE.map((item, i) => (
              <div
                key={i}
                className={`entrance entrance-d${Math.min(i + 2, 6)} flex flex-col items-center text-center relative`}
                style={{ flex: 1, minWidth: 0 }}
              >
                {/* Dot */}
                <div
                  style={{
                    width: 'clamp(10px, 1.2vw, 18px)',
                    height: 'clamp(10px, 1.2vw, 18px)',
                    borderRadius: '50%',
                    background: item.color,
                    boxShadow: `0 0 12px ${item.color}66`,
                    marginBottom: 'clamp(10px, 1.2vw, 20px)',
                    position: 'relative',
                    zIndex: 2,
                  }}
                />
                <p className="font-pretendard font-bold" style={{ fontSize: 'clamp(13px, 1.1vw, 20px)', color: item.color }}>
                  {item.year}
                </p>
                <p className="font-pretendard font-bold" style={{ fontSize: 'clamp(14px, 1.2vw, 22px)', marginTop: '4px' }}>
                  {item.label}
                </p>
                {item.sub && (
                  <p className="font-pretendard" style={{ fontSize: 'clamp(11px, 0.85vw, 15px)', opacity: 0.5, marginTop: '2px' }}>
                    {item.sub}
                  </p>
                )}
              </div>
            ))}
          </div>

          {/* Bottom message */}
          <div className="entrance entrance-d5 flex flex-col items-center text-center" style={{ gap: 'clamp(8px, 1vw, 16px)', marginTop: 'clamp(8px, 1vw, 16px)' }}>
            <p className="font-pretendard" style={{ fontSize: 'clamp(16px, 1.4vw, 26px)', opacity: 0.5, fontStyle: 'italic' }}>
              {CONTENT.bottomQuote}
            </p>
            <p className="font-pretendard font-bold whitespace-pre-line" style={{ fontSize: 'clamp(18px, 1.8vw, 34px)', color: '#A78BFA', lineHeight: 1.4 }}>
              {CONTENT.bottomAnswer}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
