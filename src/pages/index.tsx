import Link from '@docusaurus/Link'
import Layout from '@theme/Layout'

import Stairs from '@site/src/components/Stairs'

import styles from './index.module.css'

export default function Home() {
  return (
    <Layout title="로드맵" description="가왕각이 Android와 iOS 출시까지 가는 길">
      <main className={styles.page}>
        <header className={styles.hero}>
          <h1 className={styles.title}>가왕각</h1>
          <p className={styles.lead}>노래를 부르면 AI가 8단계 티어와 닮은 목소리를 알려 주는 앱이에요. 지금은 Android 출시를 준비하고 있고, 그다음 iOS로 가요.</p>
          <div className={styles.actions}>
            <Link className={styles.primary} to="/docs/roadmap">로드맵 자세히 보기</Link>
            <Link className={styles.secondary} to="/docs/intro">앱 소개 읽기</Link>
          </div>
        </header>
        <section aria-labelledby="road">
          <h2 id="road" className={styles.heading}>출시까지 가는 길</h2>
          <Stairs />
          <p className={styles.foot}>아직 스토어에는 없어요. 날짜는 확실해지면 여기에 적을게요.</p>
        </section>
      </main>
    </Layout>
  )
}
