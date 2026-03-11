/* ============================================================
   SLIDE 1 — Hook: "저는 사실 이 회사에 안 맞는 사람일 수도 있습니다"
   TED 강연 st — 강렬한 한 마디로 시작
   ============================================================ */
import VideoBackground from '../components/VideoBackground';

const CONTENT = {
  videoSrc: '/videos/bg-cover.mp4',
  hookLine: '저는 사실',
  hookAccent: '이 회사에 안 맞는 사람',
  hookEnd: '일 수도 있습니다.',
  quote: '"도한아… 나는 널 담을 그릇이 안 된다.\n너는 구글에 가야 한다."',
  quoteAuthor: '— 어느 차장님',
  punchline: '그런데 저는 아직 이 회사에 있습니다.',
  subPunchline: '오늘은 그 이유를 이야기해 보려고 합니다.',
};

export default function CoverSlide() {
  return (
    <div className="slide">
      <VideoBackground src={CONTENT.videoSrc} overlayOpacity={0.55} />

      <div className="relative z-10 flex flex-col items-center justify-center w-full h-full">
        <div className="flex flex-col items-center text-center" style={{ maxWidth: '80%', gap: 'clamp(20px, 2.5vw, 44px)' }}>

          {/* Hook statement */}
          <div className="entrance entrance-d1">
            <h1
              className="font-pretendard font-bold"
              style={{
                fontSize: 'clamp(32px, 4.5vw, 88px)',
                letterSpacing: '-0.03em',
                lineHeight: 1.15,
              }}
            >
              {CONTENT.hookLine}
              <br />
              <span className="accent-glow" style={{ color: '#A78BFA' }}>
                {CONTENT.hookAccent}
              </span>
              <br />
              {CONTENT.hookEnd}
            </h1>
          </div>

          {/* Accent line */}
          <div
            className="entrance entrance-d2 line-reveal"
            style={{
              width: 'clamp(40px, 6vw, 100px)',
              height: '2px',
              background: 'linear-gradient(90deg, transparent, #A78BFA, transparent)',
            }}
          />

          {/* Quote */}
          <div className="entrance entrance-d3">
            <blockquote
              className="font-pretendard whitespace-pre-line"
              style={{
                fontSize: 'clamp(18px, 2vw, 38px)',
                opacity: 0.7,
                lineHeight: 1.4,
                fontStyle: 'italic',
              }}
            >
              {CONTENT.quote}
            </blockquote>
            <p
              className="font-pretendard"
              style={{
                fontSize: 'clamp(14px, 1.1vw, 20px)',
                opacity: 0.4,
                marginTop: 'clamp(6px, 0.5vw, 12px)',
              }}
            >
              {CONTENT.quoteAuthor}
            </p>
          </div>

          {/* Punchline */}
          <div className="entrance entrance-d4">
            <p
              className="font-pretendard font-bold"
              style={{
                fontSize: 'clamp(22px, 2.5vw, 48px)',
                color: '#A78BFA',
              }}
            >
              {CONTENT.punchline}
            </p>
          </div>

          <div className="entrance entrance-d5">
            <p
              className="font-pretendard"
              style={{
                fontSize: 'clamp(16px, 1.4vw, 26px)',
                opacity: 0.6,
              }}
            >
              {CONTENT.subPunchline}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
