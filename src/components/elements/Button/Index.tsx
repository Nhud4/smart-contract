'use client'

import React from 'react'

import styles from './style.module.css'

type Props = {
  title: string
  onClick?: () => void
}

export default function Button({ title, onClick }: Props) {
  return (
    <button className={styles.wrapper} onClick={onClick}>
      <p>{title}</p>
    </button>
  )
}
