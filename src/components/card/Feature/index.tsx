'use client'

import React from 'react'
import BaseCard from '@/components/elements/BaseCard'
import { FEATURE_DATA } from '@/configs/data'

import styles from './style.module.css'

export default function Feature() {
  return (
    <div className={styles.container}>
      <h1>Key Features of PrimeBlock</h1>
      <div className={styles.content}>
        {FEATURE_DATA.map((item, index) => (
          <BaseCard title={item.title} desc={item.desc} key={index} />
        ))}
      </div>
    </div>
  )
}
