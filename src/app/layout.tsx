import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import ParallaxEffect from '@/components/ParallaxEffect'
import { ThemeProvider } from '@/components/ThemeProvider'
import ThemeToggle from '@/components/ThemeToggle'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'FullStack Dev Hub - Your Complete Developer Resource',
  description: 'A comprehensive hub for full-stack developers featuring AI tools, development environments, frontend & backend technologies, and more.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} dark:bg-gray-900 dark:text-gray-100`}>
        <ThemeProvider>
          <div className="min-h-screen">
            <ThemeToggle />
            <Navbar />
            <ParallaxEffect />
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
} 