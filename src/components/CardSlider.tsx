'use client'

import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const cardData = [
  {
    title: 'AI Website Builders',
    description: 'Discover AI tools like Lovable that simplify web creation. Learn how to build modern websites without writing code from scratch.',
    icon: '🤖',
    href: '/ai-tools'
  },
  {
    title: 'Code Editors & IDEs',
    description: 'Set up your perfect coding environment with guides on VSCode, Cursor, Windsurf, and more. Includes recommended plugins and tips.',
    icon: '💻',
    href: '/dev-environments'
  },
  {
    title: 'Frontend Development',
    description: 'Master HTML, CSS, JavaScript, and popular frameworks like React, Vue, and Angular. Includes UI/UX design insights and tools.',
    icon: '🎨',
    href: '/frontend'
  },
  {
    title: 'Backend Development',
    description: 'Dive into server-side coding with Node.js, Django, Flask, and database integration. Learn how to build powerful APIs.',
    icon: '🛠️',
    href: '/backend'
  },
  {
    title: 'Version Control',
    description: 'Get started with Git and learn to manage code with GitHub, GitLab, and Bitbucket. Perfect for collaboration and tracking changes.',
    icon: '🔁',
    href: '/version-control'
  },
  {
    title: 'DevOps & Deployment',
    description: 'Deploy your projects with Docker, AWS, and CI/CD pipelines. Learn everything from containerization to production deployment.',
    icon: '🚀',
    href: '/devops'
  },
  {
    title: 'Database Management',
    description: 'Understand SQL and NoSQL databases. Learn CRUD operations, schema design, indexing, and optimization techniques.',
    icon: '🗄️',
    href: '/databases'
  },
  {
    title: 'API Design & Integration',
    description: 'Build scalable REST and GraphQL APIs. Explore real-world integration patterns and best practices.',
    icon: '🔌',
    href: '/api-design'
  },
  {
    title: 'UI/UX Resources',
    description: 'Access design systems, Figma templates, accessibility tips, and responsive design strategies.',
    icon: '🎯',
    href: '/ui-ux'
  },
  {
    title: 'Developer Resources & Community',
    description: 'Connect with global dev communities, find curated courses, blogs, and join forums to stay updated and inspired.',
    icon: '🌐',
    href: '/community'
  }
]

export default function CardSlider() {
  return (
    <div className="bg-white py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary-50 to-transparent opacity-30 transform -translate-y-1/2 parallax-bg"></div>
      <div className="container relative z-10 overflow-hidden">
        <h2 className="text-3xl font-bold mb-8 text-center text-blue-700">Explore Our Resources</h2>
        <Swiper
          modules={[Autoplay, Navigation, Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 4,
            },
          }}
          className="pb-12"
        >
          {cardData.map((card, index) => (
            <SwiperSlide key={index}>
              <Link href={card.href} className="block h-full">
                <div className="bg-white rounded-lg shadow-lg p-6 h-full transform transition-all duration-300 hover:scale-105 hover:shadow-xl border border-gray-200">
                  <div className="text-4xl mb-4">{card.icon}</div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-gray-200">{card.title}</h3>
                  <p className="text-gray-600">{card.description}</p>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
} 