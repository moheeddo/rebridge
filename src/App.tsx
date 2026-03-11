import Presentation from './components/Presentation';
import CoverSlide from './slides/CoverSlide';
import IntroSlide from './slides/IntroSlide';
import ParadigmSlide from './slides/ParadigmSlide';
import ExperienceSlide from './slides/ExperienceSlide';
import CultureSlide from './slides/CultureSlide';
import FutureSlide from './slides/FutureSlide';
import ClosingSlide from './slides/ClosingSlide';

/*
  ============================================================
  슬라이드 순서 편집 가이드:
  - 순서를 바꾸려면 아래 배열 순서를 변경하세요
  - 각 슬라이드의 CONTENT 객체를 수정하면 텍스트가 즉시 반영됩니다
  - 영상 배경: CONTENT.videoSrc에 MP4 경로 또는 youtubeId 입력
  ============================================================

  서사구조: Hook → 여정 → 깨달음 4개 → 마무리
*/
const slides = [
  <CoverSlide />,        // 1. Hook — "이 회사에 안 맞는 사람"
  <IntroSlide />,        // 2. 타임라인 — 커리어 여정
  <ParadigmSlide />,     // 3. 깨달음① — 전문가보다 문제 해결자
  <ExperienceSlide />,   // 4. 깨달음② — 창의력 = 연결 능력
  <CultureSlide />,      // 5. 깨달음③ — 커뮤니케이션
  <FutureSlide />,       // 6. 깨달음④ — 일은 사람으로 된다
  <ClosingSlide />,      // 7. 마무리 — 이등병, 경험·연결·소통
];

export default function App() {
  return <Presentation slides={slides} />;
}
