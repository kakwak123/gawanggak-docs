import type { SidebarsConfig } from '@docusaurus/plugin-content-docs'

const sidebars: SidebarsConfig = {
  docs: [
    {
      type: 'category',
      label: '로드맵',
      collapsed: false,
      link: { type: 'doc', id: 'roadmap/index' },
      items: ['roadmap/android', 'roadmap/server', 'roadmap/ios'],
    },
    {
      type: 'category',
      label: '가왕각 알아보기',
      collapsed: false,
      items: ['intro', 'features', 'tiers', 'how-it-works', 'limits'],
    },
    'privacy',
    'changelog',
  ],
}

export default sidebars
