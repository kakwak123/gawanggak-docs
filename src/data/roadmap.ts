export type StageState = 'done' | 'now' | 'next'

export type Stage = { name: string; state: StageState; to: string; note: string }

export const STATE_LABEL: Record<StageState, string> = { done: '끝남', now: '지금', next: '예정' }

// The one place to update when a stage moves. No dates until they are real.
export const STAGES: Stage[] = [
  { name: '측정 엔진', state: 'done', to: '/docs/how-it-works', note: '노래를 듣고 티어, 항목별 점수, 닮은 목소리를 계산해요.' },
  { name: 'Android 앱', state: 'now', to: '/docs/roadmap/android', note: '화면과 녹음, 결과를 만들었고 실제 폰에서 마지막 점검을 해요.' },
  { name: '공개 서버', state: 'next', to: '/docs/roadmap/server', note: '누구나 쓸 수 있게 분석 서버를 클라우드로 옮겨요.' },
  { name: '권리와 개인정보 점검', state: 'next', to: '/docs/roadmap/android', note: '처리방침을 공개하고 출시 전에 전문가 검토를 받아요.' },
  { name: 'Android 비공개 테스트', state: 'next', to: '/docs/roadmap/android', note: '테스터 12명이 14일 동안 Google Play에서 써 봐요.' },
  { name: 'Android 출시', state: 'next', to: '/docs/roadmap/android', note: 'Google Play 심사를 거쳐 누구나 받을 수 있게 해요.' },
  { name: 'iOS 베타', state: 'next', to: '/docs/roadmap/ios', note: '아이폰에 맞춰 점검하고 TestFlight로 나눠 줘요.' },
  { name: 'iOS 출시', state: 'next', to: '/docs/roadmap/ios', note: 'App Store 심사를 거쳐 아이폰에도 출시해요.' },
]
