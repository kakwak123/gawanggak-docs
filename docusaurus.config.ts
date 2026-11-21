import type { Config } from '@docusaurus/types'
import type * as Preset from '@docusaurus/preset-classic'
import { themes as prismThemes } from 'prism-react-renderer'

const config: Config = {
  title: '가왕각',
  tagline: '내 노래가 몇 단계인지 알려 주는 앱',
  favicon: 'img/icon.png',
  url: 'https://kakwak123.github.io',
  baseUrl: '/gawanggak-docs/',
  organizationName: 'kakwak123',
  projectName: 'gawanggak-docs',
  trailingSlash: false,
  onBrokenLinks: 'throw',
  markdown: { hooks: { onBrokenMarkdownLinks: 'throw' } },
  i18n: { defaultLocale: 'ko', locales: ['ko'] },
  headTags: [
    { tagName: 'link', attributes: { rel: 'preconnect', href: 'https://fonts.googleapis.com' } },
    { tagName: 'link', attributes: { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: 'anonymous' } },
    {
      tagName: 'link',
      attributes: {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Black+Han+Sans&family=Noto+Sans+KR:wght@400;500;700&display=swap',
      },
    },
  ],
  presets: [
    [
      'classic',
      {
        docs: { sidebarPath: './sidebars.ts', routeBasePath: 'docs' },
        blog: false,
        theme: { customCss: './src/css/custom.css' },
      } satisfies Preset.Options,
    ],
  ],
  themeConfig: {
    image: 'img/icon.png',
    colorMode: { defaultMode: 'dark', disableSwitch: true, respectPrefersColorScheme: false },
    navbar: {
      title: '가왕각',
      logo: { alt: '', src: 'img/icon.png' },
      items: [
        { to: '/docs/roadmap', label: '로드맵', position: 'left' },
        { to: '/docs/intro', label: '앱 소개', position: 'left' },
        { to: '/docs/how-it-works', label: '작동 방식', position: 'left' },
        { to: '/docs/changelog', label: '진행 기록', position: 'right' },
      ],
    },
    footer: {
      style: 'dark',
      copyright: '가왕각 (SingK). 아직 출시 전이며, 이 문서의 계획은 바뀔 수 있어요.',
    },
    docs: { sidebar: { hideable: false } },
    prism: { theme: prismThemes.vsDark, darkTheme: prismThemes.vsDark },
  } satisfies Preset.ThemeConfig,
}

export default config
