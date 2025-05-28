'use client';

import dynamic from 'next/dynamic'
import { useRef } from 'react'

const MotionDiv = dynamic(() => import('framer-motion').then(mod => mod.motion.div), {
  ssr: false
})

export default function ParallaxEffect() {
  const ref = useRef(null)

  return (
    <MotionDiv
      ref={ref}
      className="absolute inset-0 pointer-events-none overflow-hidden"
      initial={{ y: 0, opacity: 1 }}
      animate={{ y: '50%', opacity: 0 }}
      transition={{
        y: {
          duration: 1,
          ease: 'easeInOut',
        },
        opacity: {
          duration: 0.5,
          ease: 'easeInOut',
        },
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-primary-50 to-transparent opacity-50 transform -translate-y-1/2 parallax-bg"></div>
    </MotionDiv>
  )
} 