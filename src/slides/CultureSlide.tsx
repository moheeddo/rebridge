/* ============================================================
   SLIDE 5 — 커뮤니케이션
   AI 시대에도 가장 중요한 능력
   ============================================================ */
import VideoBackground from '../components/VideoBackground';
import { MessageCircle, Code, Search, Users } from 'lucide-react';

const CONTENT = {
  videoSrc: '/videos/bg-agenda.mp4',
  sectionTag: 'INSIGHT 03',
  title: 'AI 시대에도 가장 중요한 능력',
  accent: '커뮤니케이션',
  siliconValley: '실리콘밸리에서도 가장 가치 있는 엔지니어는\n코딩을 가장 잘하는 사람이 아니라\n고객과 대화를 가장 잘하는 사람',
  reason: 'AI가 알아서 코딩을 해주는 방향으로 흘러가고 있기 때문',
  conclusion: '코드를 만드는 능력이 아니라\n문제를 정의하는 능력',
  finalLine: '그리고 그 시작은 결국 대화와 소통입니다.',
};

const SHIFT_ITEMS = [
  { icon: Code, label: '코딩 잘하는 사람', sub: 'AI가 대체', faded: true },
  { icon: MessageCircle, label: '대화 잘하는 사람', sub: '더 가치있어짐', faded: false },
  { icon: Search, label: '문제 정의 능력', sub: '핵심 역량', faded: false },
  { icon: Users, label: '대화와 소통', sub: '모든 것의 시작', faded: false },
];

export default function CultureSlide() {
  return (
    <div className="slide">
      <VideoBackground src={CONTENT.videoSrc} overlayOpacity={0.6} />

      <div className="relative z-10 flex items-center justify-center w-full h-full" style={{ padding: '5%' }}>
        <div className="flex flex-col items-center w-full" style={{ maxWidth: '85%', gap: 'clamp(24px, 3vw, 48px)' }}>

          {/* Header */}
          <div className="entrance entrance-d1 flex flex-col items-center" style={{ gap: 'clamp(8px, 1vw, 16px)' }}>
            <span className="font-pretendard tracking-widest" style={{ fontSize: 'clamp(12px, 0.9vw, 16px)', color: '#34D399', letterSpacing: '0.2em' }}>
              {CONTENT.sectionTag}
            </span>
            <h2 className="font-pretendard font-bold text-center" style={{ fontSize: 'clamp(24px, 2.8vw, 52px)', letterSpacing: '-0.02em' }}>
              {CONTENT.title}
            </h2>
            <p className="font-pretendard font-bold accent-glow" style={{ fontSize: 'clamp(36px, 4.5vw, 88px)', color: '#34D399', letterSpacing: '-0.03em' }}>
              {CONTENT.accent}
            </p>
          </div>

          {/* Silicon Valley quote */}
          <div className="entrance entrance-d2">
            <p className="font-pretendard text-center whitespace-pre-line" style={{ fontSize: 'clamp(16px, 1.4vw, 26px)', opacity: 0.8, lineHeight: 1.6 }}>
              {CONTENT.siliconValley}
            </p>
          </div>

          {/* Shift diagram */}
          <div className="entrance entrance-d3 flex flex-wrap justify-center" style={{ gap: 'clamp(10px, 1.2vw, 20px)' }}>
            {SHIFT_ITEMS.map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={i}
                  className="glass-card flex flex-col items-center"
                  style={{
                    padding: 'clamp(14px, 1.4vw, 24px)',
                    minWidth: 'clamp(130px, 14vw, 200px)',
                    opacity: item.faded ? 0.4 : 1,
                    textDecoration: item.faded ? 'line-through' : 'none',
                    textDecorationColor: 'rgba(239,68,68,0.5)',
                  }}
                >
                  <Icon style={{ width: 'clamp(24px, 2vw, 36px)', height: 'clamp(24px, 2vw, 36px)', color: item.faded ? '#666' : '#34D399', marginBottom: '8px' }} />
                  <p className="font-pretendard font-bold" style={{ fontSize: 'clamp(14px, 1.1vw, 20px)' }}>{item.label}</p>
                  <p className="font-pretendard" style={{ fontSize: 'clamp(11px, 0.85vw, 15px)', opacity: 0.5, marginTop: '2px' }}>{item.sub}</p>
                </div>
              );
            })}
          </div>

          {/* Conclusion */}
          <div className="entrance entrance-d4 flex flex-col items-center text-center" style={{ gap: 'clamp(8px, 1vw, 16px)' }}>
            <p className="font-pretendard font-bold whitespace-pre-line" style={{ fontSize: 'clamp(18px, 1.8vw, 34px)', color: '#34D399', lineHeight: 1.4 }}>
              {CONTENT.conclusion}
            </p>
            <p className="font-pretendard" style={{ fontSize: 'clamp(16px, 1.4vw, 26px)', opacity: 0.7 }}>
              {CONTENT.finalLine}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
