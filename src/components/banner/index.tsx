'use client'

import React from 'react'
import Image from 'next/image'
import IMAGES from '../../configs/images'
import Button from '../elements/Button/Index'

import styles from './style.module.css'

export default function Banner() {
  return (
    <div className={styles.container}>
      <div className={styles.wrapperText}>
        <h1>PrimeBlock</h1>
        <p>
          PrimeBlock is a layer 1 blockchain project that combines the
          cutting-edge technology of blockchain with artificial intelligence to
          create an innovative and adaptive decentralized ecosystem. Built with
          a focus on speed, security, and scalability, PrimeBlock opens the door
          to various decentralized applications that support growth and
          innovation across industries.
        </p>
        <div className={styles.button}>
          <Button title="Get Sharted" />
        </div>
      </div>
      <Image alt="banner" src={IMAGES.City} width={500} />
    </div>
  )
}
