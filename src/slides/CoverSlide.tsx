/* SLIDE 1 — Hook */
import VideoBackground from '../components/VideoBackground';

const CONTENT = {
  videoSrc: '/videos/bg-cover.mp4',
  line1: '저는 사실',
  accent: '이 회사에 안 맞는 사람',
  line2: '일 수도 있습니다.',
};

export default function CoverSlide() {
  return (
    <div className="slide">
      <VideoBackground src={CONTENT.videoSrc} overlayOpacity={0.55} />
      <div className="relative z-10 flex items-center justify-center w-full h-full">
        <div className="entrance entrance-d1 text-center" style={{ maxWidth: '80%' }}>
          <h1
            className="font-pretendard font-bold"
            style={{ fontSize: 'clamp(36px, 5vw, 100px)', letterSpacing: '-0.03em', lineHeight: 1.15 }}
          >
            {CONTENT.line1}
            <br />
            <span className="accent-glow" style={{ color: '#A78BFA' }}>{CONTENT.accent}</span>
            <br />
            {CONTENT.line2}
          </h1>
        </div>
      </div>
    </div>
  );
}
