import Link from 'next/link'
import CardSlider from '@/components/CardSlider'
import TestimonialsSlider from '@/components/TestimonialsSlider'
import HeroSection from '@/components/HeroSection'
import FAQSection from '@/components/FAQSection'

const sections = [
  {
    title: 'AI Tool Websites',
    description: 'Discover AI-powered website builders and learn how to use them effectively.',
    href: '/ai-tools',
  },
  {
    title: 'Development Environments',
    description: 'Installation guides and tips for popular code editors and IDEs.',
    href: '/dev-environments',
  },
  {
    title: 'Frontend Technologies',
    description: 'Resources for HTML, CSS, JavaScript, and major frameworks.',
    href: '/frontend',
  },
  {
    title: 'Backend Technologies',
    description: 'Learn about backend frameworks, databases, and API design.',
    href: '/backend',
  },
  {
    title: 'Version Control',
    description: 'Master Git basics and version control workflows.',
    href: '/version-control',
  },
  {
    title: 'DevOps & Deployment',
    description: 'Resources on Docker, cloud services, and CI/CD pipelines.',
    href: '/devops',
  },
]

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

const technologies = [
  { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
  { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
  { name: 'Tailwind CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg' },
  { name: 'Bootstrap', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg' },
  { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
  { name: 'Express.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
  { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
  { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
  { name: 'Vercel', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg' },
  { name: 'Netlify', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/netlify/netlify-original.svg' },
  { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
  { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
  { name: 'Linux', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg' },
  { name: 'VS Code', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' }
]

export default function Home() {
  return (
    <main className="dark:bg-gray-900 dark:text-gray-100">
      <HeroSection />

      {/* Technologies Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Technologies We Support</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {technologies.map((tech) => (
              <div key={tech.name} className="flex flex-col items-center p-4 bg-white dark:bg-gray-700 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <img src={tech.icon} alt={tech.name} className="w-12 h-12 mb-2" />
                <span className="text-sm font-medium text-gray-800 dark:text-gray-200">{tech.name}</span>
            </div>
            ))}
          </div>
        </div>
      </section>

      {/* Card Slider Section */}
      <CardSlider />

      {/* About the Founder Section */}
      <div className="bg-white dark:bg-gray-800 py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-50 to-transparent opacity-30 transform translate-y-1/2 parallax-bg"></div>
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-12 relative z-10">
          {/* Founder Image */}
          <div className="w-60 h-60 rounded-full overflow-hidden flex-shrink-0">
            <img
              src="/Aanchal.jpg"
              alt="Aanchal Choudhary"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Founder Description */}
          <div>
            <h2 className="text-3xl font-bold mb-6 text-blue-700 dark:text-blue-400">About the Founder</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Hello! I'm <strong>Aanchal Choudhary</strong> — a passionate full-stack developer and tech enthusiast dedicated to creating intuitive, intelligent, and impactful web solutions. My journey started with curiosity about how websites function, which soon turned into a deep love for building things that solve real problems.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              From crafting smooth frontend experiences to setting up robust backends, I enjoy every part of the development lifecycle. I thrive on learning new tools, collaborating with creators, and helping others step into tech with confidence. This platform is a result of that passion — a place where full-stack resources, real projects, and helpful guides live in harmony.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              Beyond code, I enjoy exploring UI/UX design, reading about tech trends, and contributing to community-driven tech spaces. Whether it's solving bugs, mentoring peers, or launching projects, I'm always driven by purpose and a growth mindset.
            </p>

            {/* Skills / Tags */}
            <div className="mt-6 flex flex-wrap gap-2">
              <span className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-3 py-1 rounded-full text-sm hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors">React</span>
              <span className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-3 py-1 rounded-full text-sm hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors">Node.js</span>
              <span className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-3 py-1 rounded-full text-sm hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors">TypeScript</span>
              <span className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-3 py-1 rounded-full text-sm hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors">MongoDB</span>
              <span className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-3 py-1 rounded-full text-sm hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors">Supabase</span>
              <span className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-3 py-1 rounded-full text-sm hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors">Next.js</span>
              <span className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-3 py-1 rounded-full text-sm hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors">Tailwind CSS</span>
              <span className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-3 py-1 rounded-full text-sm hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors">REST APIs</span>
              <span className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-3 py-1 rounded-full text-sm hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors">Git & GitHub</span>
              <span className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-3 py-1 rounded-full text-sm hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors">Firebase</span>
            </div>
          </div>
        </div>
      </div>

      {/* Video Section */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="container relative z-10">
          <h2 className="text-3xl font-bold mb-8 text-blue-700 text-center">Watch Our Latest Video</h2>
          <div className="aspect-w-16 aspect-h-9 max-w-4xl mx-auto">
            <video 
              controls 
              className="w-full h-full rounded-lg shadow-xl"
              title="Tutorial Video"
            >
              <source src="/video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <TestimonialsSlider />

      {/* Frequently Asked Questions Section */}
      <FAQSection />

      {/* Footer */}
      <footer className="bg-white border-t border-gray-300">
        <div className="container py-8">
          <p className="text-center text-gray-600">
            © {new Date().getFullYear()} FullStack Dev Hub. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  )
} 