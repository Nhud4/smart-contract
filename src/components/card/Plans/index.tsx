'use client'

import React from 'react'
import { PLANS } from '@/configs/data'

import styles from './style.module.css'

export default function Plans() {
  return (
    <div className={styles.container}>
      <h1>Future Plans of PrimeBlock</h1>
      <div>
        {PLANS.map((item) => (
          <div className={styles.wrapper}>
            <div className="flex justify-between">
              <div className={styles.heading}>
                <h2>
                  {item.main} <br />
                  {item.child}
                </h2>
              </div>
              <div className={styles.wrapperLine}>
                <div className={styles.line1} />
                <div className={styles.wrapperCircle}>
                  <div className={styles.circle} />
                </div>
                <div className={styles.line2} />
              </div>
            </div>
            <div className={styles.desc}>
              <p>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
