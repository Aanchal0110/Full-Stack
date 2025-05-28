'use client'

import dynamic from 'next/dynamic'
import Link from 'next/link'
import { useScroll, useTransform } from 'framer-motion'

const MotionImg = dynamic(() => import('framer-motion').then(mod => mod.motion.img), {
  ssr: false
})

export default function AnimatedHero() {
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.5])

  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 animate-gradient">
              Your Complete Full-Stack Development Resource
            </h1>
            <p className="text-lg mb-8 text-gray-600 dark:text-gray-300">
              Access AI tools, development environments, and comprehensive guides for frontend and backend development.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                href="/ai-tools" 
                className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium transition-all duration-300 hover:bg-blue-700 hover:shadow-lg hover:-translate-y-0.5"
              >
                Explore AI Tools
              </Link>
              <Link 
                href="/dev-environments" 
                className="px-6 py-3 bg-purple-600 text-white rounded-lg font-medium transition-all duration-300 hover:bg-purple-700 hover:shadow-lg hover:-translate-y-0.5"
              >
                View Dev Environments
              </Link>
            </div>
          </div>
          <div className="lg:w-1/2 relative">
            <MotionImg
              src="/backend.png"
              alt="Full-Stack Development"
              className="w-full h-auto rounded-lg shadow-xl"
              style={{ y, opacity }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg pointer-events-none"></div>
          </div>
        </div>
      </div>
    </section>
  )
} 