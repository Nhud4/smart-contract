'use client'

import React from 'react'
import CustomLayout from '@/components/CustomLayout'
import Banner from '@/components/banner'
import About from '@/components/card/About'
import Feature from '@/components/card/Feature'
import Plans from '@/components/card/Plans'

export default function Home() {
  return (
    <CustomLayout>
      <Banner />
      <About />
      <Feature />
      <Plans />
    </CustomLayout>
  )
}
