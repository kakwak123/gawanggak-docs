import Link from '@docusaurus/Link'
import clsx from 'clsx'
import type { CSSProperties } from 'react'

import { STAGES, STATE_LABEL } from '@site/src/data/roadmap'

import styles from './Stairs.module.css'

/** The road to the stores, drawn as the same kind of climb the app's tiers are. */
export default function Stairs() {
  return (
    <ol className={styles.stairs} aria-label="출시까지 8단계">
      {STAGES.map((s, i) => (
        <li key={s.name} className={styles.item} style={{ '--i': i } as CSSProperties}>
          <Link to={s.to} className={clsx(styles.step, styles[s.state])} aria-current={s.state === 'now' ? 'step' : undefined}>
            <span className={styles.num}>{i + 1}</span>
            <span className={styles.name}>{s.name}</span>
            <span className={styles.state}>{STATE_LABEL[s.state]}</span>
            <span className={styles.note}>{s.note}</span>
          </Link>
        </li>
      ))}
    </ol>
  )
}
