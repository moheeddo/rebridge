/* ============================================================
   SLIDE 3 — 전문가보다 문제를 해결하는 사람
   화상회의 공간 개선 사례
   ============================================================ */
import VideoBackground from '../components/VideoBackground';
import GlassCard from '../components/GlassCard';

const CONTENT = {
  videoSrc: '/videos/bg-quote.mp4',
  sectionTag: 'INSIGHT 01',
  title: '전문가보다\n문제를 해결하는 사람',
  story: '본사 화상회의 공간을 새로 만들 때\n카메라와 마이크만 설치하면 끝이 아니었습니다.',
  details: [
    '좌석 배치와 시선 방향',
    '어떤 화면이 더 자연스러운지',
    '사장님 회의 시 가장 큰 문제점은 무엇인지',
  ],
  result: '회의 환경이 훨씬 자연스러워졌고\n좋은 평가를 받게 되었습니다.',
  lesson: '정답을 아는 사람보다\n문제를 다르게 보고 실행하는 사람이 필요하다.',
  photoPlaceholder1: '회의실 사진 1',
  photoPlaceholder2: '회의실 사진 2',
};

export default function ParadigmSlide() {
  return (
    <div className="slide">
      <VideoBackground src={CONTENT.videoSrc} overlayOpacity={0.6} />

      <div className="relative z-10 flex items-center justify-center w-full h-full" style={{ padding: '5%' }}>
        <div className="flex flex-col items-center w-full" style={{ maxWidth: '88%', gap: 'clamp(20px, 2.5vw, 40px)' }}>

          {/* Header */}
          <div className="entrance entrance-d1 flex flex-col items-center" style={{ gap: 'clamp(6px, 0.8vw, 12px)' }}>
            <span className="font-pretendard tracking-widest" style={{ fontSize: 'clamp(12px, 0.9vw, 16px)', color: '#FBBF24', letterSpacing: '0.2em' }}>
              {CONTENT.sectionTag}
            </span>
            <h2
              className="font-pretendard font-bold text-center whitespace-pre-line"
              style={{ fontSize: 'clamp(28px, 3.5vw, 64px)', letterSpacing: '-0.02em', lineHeight: 1.15 }}
            >
              {CONTENT.title}
            </h2>
          </div>

          {/* Content row: Story + Photo placeholders */}
          <div className="flex flex-wrap justify-center items-stretch w-full" style={{ gap: 'clamp(12px, 1.5vw, 24px)' }}>
            {/* Story */}
            <div className="entrance entrance-d2" style={{ flex: '1 1 clamp(280px, 40vw, 500px)', maxWidth: '600px' }}>
              <GlassCard style={{ padding: 'clamp(20px, 2vw, 36px)', height: '100%' }}>
                <p className="font-pretendard whitespace-pre-line" style={{ fontSize: 'clamp(15px, 1.2vw, 22px)', opacity: 0.85, lineHeight: 1.7 }}>
                  {CONTENT.story}
                </p>
                <div style={{ marginTop: 'clamp(12px, 1.2vw, 20px)', display: 'flex', flexDirection: 'column', gap: 'clamp(6px, 0.5vw, 10px)' }}>
                  {CONTENT.details.map((d, i) => (
                    <div key={i} className="flex items-center" style={{ gap: 'clamp(6px, 0.6vw, 10px)' }}>
                      <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#FBBF24', flexShrink: 0 }} />
                      <p className="font-pretendard" style={{ fontSize: 'clamp(14px, 1.1vw, 20px)', opacity: 0.75 }}>{d}</p>
                    </div>
                  ))}
                </div>
                <p className="font-pretendard whitespace-pre-line" style={{ fontSize: 'clamp(15px, 1.2vw, 22px)', opacity: 0.85, lineHeight: 1.7, marginTop: 'clamp(12px, 1.2vw, 20px)' }}>
                  {CONTENT.result}
                </p>
              </GlassCard>
            </div>

            {/* Photo placeholders */}
            <div className="entrance entrance-d3 flex flex-col" style={{ flex: '0 1 clamp(200px, 22vw, 320px)', gap: 'clamp(8px, 1vw, 16px)' }}>
              {[CONTENT.photoPlaceholder1, CONTENT.photoPlaceholder2].map((label, i) => (
                <div
                  key={i}
                  style={{
                    flex: 1,
                    minHeight: 'clamp(100px, 12vw, 180px)',
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

          {/* Lesson */}
          <div className="entrance entrance-d4">
            <div
              style={{
                padding: 'clamp(12px, 1.2vw, 20px) clamp(24px, 2.5vw, 48px)',
                background: 'rgba(251, 191, 36, 0.08)',
                border: '1px solid rgba(251, 191, 36, 0.2)',
                borderRadius: 'clamp(8px, 1vw, 16px)',
              }}
            >
              <p className="font-pretendard font-bold text-center whitespace-pre-line accent-glow" style={{ fontSize: 'clamp(17px, 1.5vw, 28px)', color: '#FBBF24', lineHeight: 1.4 }}>
                {CONTENT.lesson}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
