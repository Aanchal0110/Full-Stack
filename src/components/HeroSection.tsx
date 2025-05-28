'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';

export default function HeroSection() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Parallax effects for different layers
  const y1 = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const y2 = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.5]);

  return (
    <div ref={containerRef} className="relative min-h-screen overflow-hidden bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
      {/* Background layers with parallax */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 opacity-30"
        style={{ y: y1 }}
      />
      
      <motion.div 
        className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"
        style={{ y: y2 }}
      />

      <div className="container mx-auto px-4 py-20 relative z-10 overflow-x-hidden">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Left side - Text content */}
          <div className="flex-1 text-left md:w-1/4">
            <motion.h1 
              className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 animate-gradient"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <p> Your Complete</p>
              <p> Fullstack Development Resource</p>
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Your one-stop resource for mastering full-stack development, AI tools, and development environments.
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Link 
                href="/ai-tools" 
                className="btn-primary animate-float"
              >
                Explore AI Tools
              </Link>
              <Link 
                href="/dev-environments" 
                className="btn-secondary animate-float"
                style={{ animationDelay: '0.2s' }}
              >
                Setup Dev Environment
              </Link>
            </motion.div>
          </div>

          {/* Right side - Hero Image with Parallax */}
          <motion.div 
            className="flex-1 relative md:w-3/4 overflow-hidden"
            style={{ y: y1, opacity }}
          >
            <motion.div
              className="relative w-full aspect-video rounded-lg overflow-hidden shadow-2xl"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              whileHover={{ scale: 1.02 }}
            >
              <img
                src="/backend.png"
                alt="Fullstack Development"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
} 