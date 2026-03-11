/* SLIDE 7 — 여러분은 지금 이등병입니다 */
import VideoBackground from '../components/VideoBackground';

const CONTENT = {
  videoSrc: '/videos/bg-closing.mp4',
  line1: '여러분은 지금',
  accent: '이등병',
  line2: '입니다.',
  thankyou: '감사합니다.',
};

const KEYWORDS = [
  { label: '경험', color: '#A78BFA' },
  { label: '연결', color: '#F472B6' },
  { label: '소통', color: '#FBBF24' },
];

export default function ClosingSlide() {
  return (
    <div className="slide">
      <VideoBackground src={CONTENT.videoSrc} overlayOpacity={0.55} />

      <div className="relative z-10 flex items-center justify-center w-full h-full">
        <div className="flex flex-col items-center text-center" style={{ maxWidth: '80%', gap: 'clamp(28px, 3.5vw, 56px)' }}>

          {/* Title */}
          <div className="entrance entrance-d1">
            <h2
              className="font-pretendard font-bold"
              style={{ fontSize: 'clamp(36px, 4.5vw, 90px)', letterSpacing: '-0.03em', lineHeight: 1.15 }}
            >
              {CONTENT.line1}
              <br />
              <span className="accent-glow" style={{ color: '#FBBF24' }}>{CONTENT.accent}</span>{CONTENT.line2}
            </h2>
          </div>

          {/* Three keywords */}
          <div className="entrance entrance-d2 flex justify-center" style={{ gap: 'clamp(20px, 3vw, 48px)' }}>
            {KEYWORDS.map((kw, i) => (
              <p key={i} className="font-pretendard font-bold" style={{ fontSize: 'clamp(28px, 3.5vw, 68px)', color: kw.color }}>
                {kw.label}
              </p>
            ))}
          </div>

          {/* Thank you */}
          <div className="entrance entrance-d3">
            <p className="font-pretendard font-bold" style={{ fontSize: 'clamp(24px, 3vw, 56px)', opacity: 0.6 }}>
              {CONTENT.thankyou}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
