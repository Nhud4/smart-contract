'use client'

import React from 'react'

import styles from './style.module.css'

type Props = {
  title: string
  desc: string
}

export default function BaseCard({ title, desc }: Props) {
  return (
    <div className={styles.card}>
      <h1>{title}</h1>
      <p>{desc}</p>
    </div>
  )
}
