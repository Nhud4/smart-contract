'use client'

import React from 'react'
import Image from 'next/image'
import IMAGES from '../../../configs/images'

import styles from './style.module.css'

export default function Header() {
  return (
    <div className={styles.wrapper}>
      <Image alt="logo" src={IMAGES.Logo} width={40} height={40} />
      <h1>PrimeBlock</h1>
    </div>
  )
}
