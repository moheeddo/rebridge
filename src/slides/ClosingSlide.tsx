/* ============================================================
   SLIDE 7 — 여러분은 지금 이등병입니다
   경험 · 연결 · 소통 세 키워드로 마무리
   ============================================================ */
import VideoBackground from '../components/VideoBackground';

const CONTENT = {
  videoSrc: '/videos/bg-closing.mp4',
  title: '여러분은 지금',
  titleAccent: '이등병',
  titleEnd: '입니다.',
  message: '이등병이 완벽할 필요는 없습니다.\n실수하는 것이 정상입니다.\n그래서 너무 잘하려고 하지 마세요.',
  closing: '10년 뒤에 여러분이 후배들에게\n이런 자리에서 어떤 이야기를 해주게 될지\n저는 그게 더 기대됩니다.',
  thankyou: '감사합니다.',
};

const KEYWORDS = [
  {
    label: '경험',
    desc: '많이 경험하세요',
    color: '#A78BFA',
  },
  {
    label: '연결',
    desc: '그 경험들을 연결하세요',
    color: '#F472B6',
  },
  {
    label: '소통',
    desc: '많은 사람과 대화하세요\n길에서 마주쳐도 스몰톡 하세요',
    color: '#FBBF24',
  },
];

export default function ClosingSlide() {
  return (
    <div className="slide">
      <VideoBackground src={CONTENT.videoSrc} overlayOpacity={0.55} />

      {/* Floating particles */}
      <div className="absolute inset-0 z-[1] overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="floating-particle absolute rounded-full"
            style={{
              width: `${4 + Math.random() * 6}px`,
              height: `${4 + Math.random() * 6}px`,
              top: `${15 + Math.random() * 70}%`,
              left: `${10 + Math.random() * 80}%`,
              background: ['rgba(167,139,250,0.25)', 'rgba(244,114,182,0.25)', 'rgba(251,191,36,0.25)'][i % 3],
              animationDelay: `${i * 1.2}s`,
              animationDuration: `${6 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 flex items-center justify-center w-full h-full">
        <div className="flex flex-col items-center text-center" style={{ maxWidth: '80%', gap: 'clamp(20px, 2.5vw, 44px)' }}>

          {/* Title */}
          <div className="entrance entrance-d1">
            <h2
              className="font-pretendard font-bold"
              style={{ fontSize: 'clamp(32px, 4vw, 80px)', letterSpacing: '-0.03em', lineHeight: 1.15 }}
            >
              {CONTENT.title}
              <br />
              <span className="accent-glow" style={{ color: '#FBBF24' }}>{CONTENT.titleAccent}</span>
              {CONTENT.titleEnd}
            </h2>
          </div>

          {/* Message */}
          <div className="entrance entrance-d2">
            <p className="font-pretendard whitespace-pre-line" style={{ fontSize: 'clamp(17px, 1.6vw, 30px)', opacity: 0.8, lineHeight: 1.6 }}>
              {CONTENT.message}
            </p>
          </div>

          {/* Accent line */}
          <div
            className="entrance entrance-d2 line-reveal"
            style={{
              width: 'clamp(40px, 5vw, 80px)',
              height: '1px',
              background: 'linear-gradient(90deg, transparent, rgba(251,191,36,0.4), transparent)',
            }}
          />

          {/* Three keywords */}
          <div className="entrance entrance-d3 flex justify-center" style={{ gap: 'clamp(12px, 2vw, 32px)' }}>
            {KEYWORDS.map((kw, i) => (
              <div
                key={i}
                className="flex flex-col items-center"
                style={{
                  padding: 'clamp(16px, 1.5vw, 28px)',
                  minWidth: 'clamp(100px, 14vw, 220px)',
                }}
              >
                <p className="font-pretendard font-bold" style={{ fontSize: 'clamp(28px, 3vw, 56px)', color: kw.color }}>
                  {kw.label}
                </p>
                <p className="font-pretendard whitespace-pre-line" style={{ fontSize: 'clamp(13px, 1vw, 18px)', opacity: 0.6, marginTop: '8px', lineHeight: 1.5 }}>
                  {kw.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Closing */}
          <div className="entrance entrance-d4">
            <p className="font-pretendard whitespace-pre-line" style={{ fontSize: 'clamp(16px, 1.4vw, 26px)', opacity: 0.7, lineHeight: 1.5 }}>
              {CONTENT.closing}
            </p>
          </div>

          {/* Thank you */}
          <div className="entrance entrance-d5">
            <p className="font-pretendard font-bold accent-glow" style={{ fontSize: 'clamp(36px, 4.5vw, 88px)', color: '#A78BFA', letterSpacing: '-0.02em' }}>
              {CONTENT.thankyou}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
