/* ============================================================
   SLIDE 6 — 일은 시스템이 아니라 결국 사람으로 됩니다
   워크숍, 축구동아리 사례
   ============================================================ */
import VideoBackground from '../components/VideoBackground';
import GlassCard from '../components/GlassCard';
import { Users, Phone, Heart } from 'lucide-react';

const CONTENT = {
  videoSrc: '/videos/bg-cover.mp4',
  sectionTag: 'INSIGHT 04',
  title: '일은 시스템이 아니라\n결국 사람으로 됩니다',
  photoPlaceholder1: '워크숍 사진 1',
  photoPlaceholder2: '워크숍 사진 2',
};

const STORIES = [
  {
    icon: Users,
    title: '기업문화 워크숍',
    desc: '레크리에이션을 진행하며\n많은 직원들을 만났습니다.\n그 이후 업무가 훨씬 쉬워졌습니다.',
    color: '#A78BFA',
  },
  {
    icon: Heart,
    title: '본사 축구동아리',
    desc: '총무 2년.\n다양한 직무의 분들과 함께\n운동하며 친해지니',
    color: '#F472B6',
  },
  {
    icon: Phone,
    title: '결과',
    desc: '공문이 필요했던 일도\n전화 한 통으로 해결되는 일이\n많았습니다.',
    color: '#FBBF24',
  },
];

export default function FutureSlide() {
  return (
    <div className="slide">
      <VideoBackground src={CONTENT.videoSrc} overlayOpacity={0.55} />

      <div className="relative z-10 flex items-center justify-center w-full h-full" style={{ padding: '5%' }}>
        <div className="flex flex-col items-center w-full" style={{ maxWidth: '90%', gap: 'clamp(24px, 3vw, 48px)' }}>

          {/* Header */}
          <div className="entrance entrance-d1 flex flex-col items-center" style={{ gap: 'clamp(6px, 0.8vw, 12px)' }}>
            <span className="font-pretendard tracking-widest" style={{ fontSize: 'clamp(12px, 0.9vw, 16px)', color: '#A78BFA', letterSpacing: '0.2em' }}>
              {CONTENT.sectionTag}
            </span>
            <h2
              className="font-pretendard font-bold text-center whitespace-pre-line"
              style={{ fontSize: 'clamp(28px, 3.5vw, 64px)', letterSpacing: '-0.02em', lineHeight: 1.15 }}
            >
              {CONTENT.title}
            </h2>
          </div>

          {/* Content: Photo placeholders + Stories */}
          <div className="flex flex-wrap justify-center items-stretch w-full" style={{ gap: 'clamp(12px, 1.5vw, 24px)' }}>
            {/* Photo area */}
            <div className="entrance entrance-d2 flex flex-col" style={{ flex: '0 1 clamp(240px, 26vw, 380px)', gap: 'clamp(8px, 1vw, 16px)' }}>
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

            {/* Story cards */}
            <div className="flex flex-col" style={{ flex: '1 1 clamp(320px, 40vw, 540px)', gap: 'clamp(8px, 1vw, 16px)' }}>
              {STORIES.map((story, i) => {
                const Icon = story.icon;
                return (
                  <div key={i} className={`entrance entrance-d${i + 2}`}>
                    <GlassCard style={{ padding: 'clamp(14px, 1.4vw, 24px)', borderColor: `${story.color}22` }}>
                      <div className="flex items-start" style={{ gap: 'clamp(10px, 1vw, 18px)' }}>
                        <Icon style={{ width: 'clamp(22px, 1.8vw, 32px)', height: 'clamp(22px, 1.8vw, 32px)', color: story.color, flexShrink: 0, marginTop: '2px' }} />
                        <div>
                          <p className="font-pretendard font-bold" style={{ fontSize: 'clamp(15px, 1.3vw, 24px)', color: story.color }}>
                            {story.title}
                          </p>
                          <p className="font-pretendard whitespace-pre-line" style={{ fontSize: 'clamp(13px, 1vw, 18px)', opacity: 0.75, lineHeight: 1.6, marginTop: '4px' }}>
                            {story.desc}
                          </p>
                        </div>
                      </div>
                    </GlassCard>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Bottom insight */}
          <div className="entrance entrance-d5">
            <p className="font-pretendard text-center" style={{ fontSize: 'clamp(16px, 1.4vw, 26px)', opacity: 0.65 }}>
              얼굴도 몰랐던 분들이 → <span className="text-highlight">편하게 전화할 수 있는 사람들</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
