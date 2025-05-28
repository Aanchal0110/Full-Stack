import Link from 'next/link';

const productCategories = [
  {
    title: 'AI Toolkits',
    description: 'Code assistants, linting tools, and AI-powered development utilities',
    href: '/products/ai-toolkits',
    icon: '🤖',
    badge: 'New',
    features: ['Code Generation', 'Code Review', 'Documentation', 'Testing']
  },
  {
    title: 'Project Starter Kits',
    description: 'Pre-configured templates for MERN, Next.js, and Express projects',
    href: '/products/starter-kits',
    icon: '🚀',
    badge: null,
    features: ['MERN Stack', 'Next.js', 'Express', 'TypeScript']
  },
  {
    title: 'API Playground',
    description: 'Interactive environment to test REST and GraphQL endpoints',
    href: '/products/api-playground',
    icon: '🎮',
    badge: 'Pro',
    features: ['REST Testing', 'GraphQL Explorer', 'WebSocket', 'Mock Data']
  },
  {
    title: 'Deployment Helpers',
    description: 'Tools and configurations for Vercel, Render, and other platforms',
    href: '/products/deployment',
    icon: '🚢',
    badge: null,
    features: ['Vercel Config', 'Docker Setup', 'CI/CD', 'Monitoring']
  },
  {
    title: 'VSCode Extensions',
    description: 'Custom extensions to enhance your development workflow',
    href: '/products/vscode-extensions',
    icon: '⚡',
    badge: 'Open Source',
    features: ['Snippets', 'Themes', 'Productivity', 'Debugging']
  }
];

export default function ProductsPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-4 text-gray-900 dark:text-white">
        Developer Products
      </h1>
      <p className="text-xl text-center mb-12 text-gray-600 dark:text-gray-300">
        Tools and utilities to enhance your development workflow
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {productCategories.map((product) => (
          <Link
            key={product.title}
            href={product.href}
            className="group block bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
          >
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <span className="text-3xl mr-3">{product.icon}</span>
                  <h2 className="text-2xl font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                    {product.title}
                  </h2>
                </div>
                {product.badge && (
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    product.badge === 'New' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' :
                    product.badge === 'Pro' ? 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200' :
                    'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
                  }`}>
                    {product.badge}
                  </span>
                )}
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {product.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {product.features.map((feature) => (
                  <span
                    key={feature}
                    className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
} 