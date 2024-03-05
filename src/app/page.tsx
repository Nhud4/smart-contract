'use client'

import React from 'react'
import CustomLayout from '@/components/CustomLayout'
import Banner from '@/components/banner'
import About from '@/components/card/About'

export default function Home() {
  return (
    <CustomLayout>
      <Banner />
      <About />
    </CustomLayout>
  )
}
