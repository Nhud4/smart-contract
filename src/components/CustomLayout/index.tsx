'use client'

import React from 'react'
import Header from '../elements/Header'

import styles from './style.module.css'

export default function CustomLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.children}>{children}</div>
    </div>
  )
}
