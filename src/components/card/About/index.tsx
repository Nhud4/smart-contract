'use client'

import React from 'react'
import Image from 'next/image'
import IMAGES from '@/configs/images'
import Button from '@/components/elements/Button/Index'

import styles from './style.module.css'

export default function About() {
  return (
    <div className={styles.gradient}>
      <div className={styles.wrapper}>
        <div className="place-self-center">
          <Image alt="about" src={IMAGES.About} width={380} />
        </div>
        <div className={styles.wrapperText}>
          <div className={styles.text}>
            <h1 className="text-white">PrimeBlock Is Not Just a</h1>
            <div className={styles.text2}>
              <h1 className="text-primary-2">Blockchain</h1>
              <h1 className="text-white">Project</h1>
            </div>
          </div>
          <p className="text-sm text-neutral-1">
            It is an intelligent and adaptive decentralized solution aimed at
            advancing technology and driving innovation worldwide. Join
            PrimeBlock on the journey towards a brighter and decentralized
            future
          </p>
          <div className="pt-4">
            <Button title="Join Now" />
          </div>
        </div>
      </div>
    </div>
  )
}
