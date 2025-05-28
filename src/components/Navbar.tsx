"use client";

import Link from 'next/link'
// import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/react' // Removed Headless UI imports
import { useState, useEffect, useRef } from 'react';
import { ChevronDownIcon } from '@heroicons/react/20/solid' // Import an icon for the dropdown
import { useTheme } from 'next-themes'
import { usePathname } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';

const resources = [
  {
    category: "Development",
    items: [
      { name: "Frontend", href: "/frontend", description: "HTML, CSS, JavaScript, and frameworks" },
      { name: "Backend", href: "/backend", description: "Server-side technologies and APIs" },
      { name: "DevOps", href: "/devops", description: "Deployment and infrastructure" },
      { name: "Version Control", href: "/version-control", description: "Git and collaboration" },
    ]
  },
  {
    category: "Databases",
    items: [
      { name: "MySQL", href: "/databases", description: "Relational database" },
      { name: "PostgreSQL", href: "/databases", description: "Object-relational database" },
      { name: "MongoDB", href: "/databases", description: "NoSQL document database" },
      { name: "Redis", href: "/databases", description: "In-memory data structure store" },
    ]
  },
  {
    category: "Tools & Environments",
    items: [
      { name: "AI Tools", href: "/ai-tools", description: "AI-powered development tools" },
      { name: "Dev Environments", href: "/dev-environments", description: "IDEs and code editors" },
      { name: "Testing Tools", href: "/testing", description: "Testing frameworks and utilities" },
      { name: "Performance Tools", href: "/performance", description: "Optimization and monitoring" },
    ]
  },
  {
    category: "Learning",
    items: [
      { name: "Tutorials", href: "/tutorials", description: "Step-by-step guides" },
      { name: "Documentation", href: "/docs", description: "API and framework docs" },
      { name: "Best Practices", href: "/best-practices", description: "Coding standards and patterns" },
      { name: "Community", href: "/community", description: "Forums and discussions" },
    ]
  }
];

const navigation = [
  { name: 'Home', href: '/', submenu: null },
  {
    name: 'Components',
    href: '/components',
    submenu: null,
  },
  {
    name: 'Products',
    href: '/products',
    submenu: [
      { name: 'AI Toolkits', href: '/products/ai-toolkits', badge: 'New' },
      { name: 'Project Starter Kits', href: '/products/starter-kits', badge: null },
      { name: 'API Playground', href: '/products/api-playground', badge: 'Pro' },
      { name: 'Deployment Helpers', href: '/products/deployment', badge: null },
      { name: 'VSCode Extensions', href: '/products/vscode-extensions', badge: 'Open Source' },
    ]
  },
  { name: 'About', href: '/about', submenu: null },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);
  const [activeResourceCategory, setActiveResourceCategory] = useState<string | null>(null);
  const [openMobileResourceCategory, setOpenMobileResourceCategory] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const pathname = usePathname();
  const resourcesTimerRef = useRef<NodeJS.Timeout | null>(null);

  const isActive = (href: string) => pathname === href || (href !== '/' && pathname.startsWith(href));

  useEffect(() => {
    setMounted(true);
  }, []);

  // Close desktop menus when mobile menu is opened
  useEffect(() => {
    if (isMobileMenuOpen) {
      setIsResourcesOpen(false);
      setActiveSubmenu(null);
      setActiveResourceCategory(null); // Close desktop resource category submenu
    } else {
       setOpenMobileResourceCategory(null); // Close mobile resource category submenu when mobile menu closes
    }
  }, [isMobileMenuOpen]);

  // Close mobile resource category submenu when main resources menu is closed in mobile view
   useEffect(() => {
     if (!isResourcesOpen && isMobileMenuOpen) {
       setOpenMobileResourceCategory(null);
     }
   }, [isResourcesOpen, isMobileMenuOpen]);

  const toggleMobileResourceCategory = (categoryName: string) => {
    setOpenMobileResourceCategory(openMobileResourceCategory === categoryName ? null : categoryName);
  };

  const handleResourcesMouseEnter = () => {
    if (resourcesTimerRef.current) {
      clearTimeout(resourcesTimerRef.current);
    }
    setIsResourcesOpen(true);
  };

  const handleResourcesMouseLeave = () => {
    resourcesTimerRef.current = setTimeout(() => {
      setIsResourcesOpen(false);
      setActiveResourceCategory(null); // Close nested submenu when leaving main dropdown
    }, 150); // Adjust delay as needed (in milliseconds)
  };

  return (
    <nav className="sticky top-0 z-50 bg-white dark:bg-gray-900 shadow-md transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-blue-600 dark:text-blue-400">
            FullStack Dev Hub
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {/* Home */}
            <div key={navigation[0].name} className="relative group">
              <Link
                href={navigation[0].href}
                className={`px-3 py-2 rounded-md text-base font-medium transition-colors duration-300 ${isActive(navigation[0].href)
                    ? 'text-blue-600 dark:text-blue-400'
                    : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
                }`}
              >
                {navigation[0].name}
              </Link>
            </div>

            {/* Components - Now a simple link */}
            <div key={navigation[1].name} className="relative group">
              <Link
                href={navigation[1].href}
                className={`px-3 py-2 rounded-md text-base font-medium transition-colors duration-300 ${isActive(navigation[1].href)
                    ? 'text-blue-600 dark:text-blue-400'
                    : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
                }`}
              >
                {navigation[1].name}
              </Link>
            </div>

            {/* Resources Dropdown (Desktop) */}
            <div className="relative group">
              <button
                onClick={() => setIsResourcesOpen(!isResourcesOpen)}
                className="px-3 py-2 rounded-md text-base font-medium transition-colors duration-300 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 focus:outline-none flex items-center"
                onMouseEnter={handleResourcesMouseEnter}
                onMouseLeave={handleResourcesMouseLeave}
              >
                Resources
                <ChevronDownIcon className={`ml-1 h-5 w-5 transition-transform duration-200 ${isResourcesOpen ? 'rotate-180' : 'rotate-0'}`} />
              </button>

              {isResourcesOpen && (
                <div
                  className="absolute right-0 mt-2 w-48 origin-top-right rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5 focus:outline-none p-1 animate-slide-down"
                  onMouseEnter={handleResourcesMouseEnter}
                  onMouseLeave={handleResourcesMouseLeave}
                >
                  <div className="grid grid-cols-1 gap-1">
                    {resources.map((category) => (
                      <div
                        key={category.category}
                        className="relative group"
                        onMouseEnter={() => {
                           if (category.category === 'Development' || category.category === 'Tools & Environments') {
                             setActiveResourceCategory(category.category);
                           } else {
                             setActiveResourceCategory(null);
                           }
                        }}
                        onMouseLeave={() => setActiveResourceCategory(null)}
                      >
                        {(category.category === 'Development' || category.category === 'Tools & Environments') ? (
                           <button className="flex items-center justify-between w-full p-2 rounded-md text-left text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200">
                             {category.category}
                             <ChevronDownIcon className={`ml-1 h-5 w-5 transition-transform duration-200 ${activeResourceCategory === category.category ? 'rotate-180' : 'rotate-270'}`} />
                           </button>
                        ) : (
                           <Link
                             href={category.items[0].href} // Assuming a single link for these categories
                             className="block p-2 rounded-md text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
                             onClick={() => {
                               setIsResourcesOpen(false);
                             }}
                           >
                             {category.category}
                           </Link>
                        )}

                        {(category.category === 'Development' || category.category === 'Tools & Environments') && activeResourceCategory === category.category && (
                          <div className="absolute left-full top-0 mt-0 w-48 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5 focus:outline-none p-1 z-20">
                            <div className="grid grid-cols-1 gap-1">
                              {category.items.map((item) => (
                                <Link
                                  key={item.name}
                                  href={item.href}
                                  className="block p-2 rounded-md text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
                                  onClick={() => {
                                    setIsResourcesOpen(false);
                                    setActiveResourceCategory(null);
                                    if (resourcesTimerRef.current) {
                                      clearTimeout(resourcesTimerRef.current);
                                    }
                                  }}
                                >
                                  {item.name}
                                </Link>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Products */}
            <div key={navigation[2].name} className="relative group">
              <Link
                href={navigation[2].href}
                className={`px-3 py-2 rounded-md text-base font-medium transition-colors duration-300 ${
                  isActive(navigation[2].href) || (navigation[2].submenu && navigation[2].submenu.some(subItem => isActive(subItem.href)))
                    ? 'text-blue-600 dark:text-blue-400'
                    : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
                }`}
                onMouseEnter={() => navigation[2].submenu && setActiveSubmenu(navigation[2].name)}
                onMouseLeave={() => setActiveSubmenu(null)}
              >
                {navigation[2].name}
              </Link>
              {/* Products Submenu */}
              {navigation[2].submenu && activeSubmenu === navigation[2].name && (
                <div
                  className="absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5 focus:outline-none p-1 transition-all duration-300 origin-top"
                  onMouseEnter={() => setActiveSubmenu(navigation[2].name)}
                  onMouseLeave={() => setActiveSubmenu(null)}
                >
                  <div className="py-1">
                    {navigation[2].submenu.map((subItem) => (
                      <Link
                        key={subItem.name}
                        href={subItem.href}
                        className="flex items-center justify-between px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300"
                        onClick={() => {
                           setActiveSubmenu(null); // Close submenu on click
                           setIsResourcesOpen(false); // Also close main Resources dropdown for better UX
                           setIsMobileMenuOpen(false); // Ensure mobile menu is closed if applicable
                        }}
                      >
                        <span>{subItem.name}</span>
                        {subItem.badge && (
                          <span className={`px-2 py-1 text-xs rounded-full ${
                            subItem.badge === 'New' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' :
                            subItem.badge === 'Pro' ? 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200' :
                            'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
                          }`}>
                            {subItem.badge}
                          </span>
                        )}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* About Link */}
            <div key={navigation[3].name} className="relative group">
              <Link
                href={navigation[3].href}
                className={`px-3 py-2 rounded-md text-base font-medium transition-colors duration-300 ${isActive(navigation[3].href)
                    ? 'text-blue-600 dark:text-blue-400'
                    : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
                }`}
              >
                {navigation[3].name}
              </Link>
            </div>

            {/* Login/Sign up */}
            <Link
              href="/login"
              className={`px-3 py-2 rounded-md text-base font-medium transition-colors duration-300 ${isActive('/login')
                ? 'text-blue-600 dark:text-blue-400'
                : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
              }`}
            >
              Login/Sign up
            </Link>

            {/* Theme Toggle */}
            {mounted && (
              <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? '🌞' : '🌙'}
              </button>
            )}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-md text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 focus:outline-none"
            aria-label="Toggle mobile menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="md:hidden px-2 pt-2 pb-3 space-y-1"
            >

              {/* Home Link */}
              <div key={navigation[0].name}>
                <Link
                  href={navigation[0].href}
                  className={`block px-3 py-2 rounded-md text-base font-medium ${isActive(navigation[0].href)
                    ? 'text-blue-600 dark:text-blue-400'
                    : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
                  }`}
                   onClick={() => setIsMobileMenuOpen(false)}
                >
                  {navigation[0].name}
                </Link>
              </div>

              {/* Components Link - Now a simple link */}
              <div key={navigation[1].name}>
                <Link
                  href={navigation[1].href}
                  className={`block px-3 py-2 rounded-md text-base font-medium ${isActive(navigation[1].href)
                    ? 'text-blue-600 dark:text-blue-400'
                    : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
                  }`}
                   onClick={() => setIsMobileMenuOpen(false)}
                >
                  {navigation[1].name}
                </Link>
              </div>

              {/* Mobile Resources Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setIsResourcesOpen(!isResourcesOpen)}
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 focus:outline-none w-full text-left flex items-center justify-between"
                >
                  Resources
                  <ChevronDownIcon className={`ml-1 h-5 w-5 transition-transform duration-200 ${isResourcesOpen ? 'rotate-180' : 'rotate-0'}`} />
                </button>
                {isResourcesOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.2 }}
                    className="pl-4 space-y-2 py-2 overflow-hidden"
                  >
                    {resources.map((category) => (
                      <div key={category.category} className="space-y-1">
                        {(category.category === 'Development' || category.category === 'Tools & Environments') ? (
                          <button
                            onClick={() => toggleMobileResourceCategory(category.category)}
                            className="flex items-center justify-between w-full text-left text-blue-600 dark:text-blue-400 font-semibold"
                          >
                            {category.category}
                            <ChevronDownIcon className={`ml-1 h-5 w-5 transition-transform duration-200 ${openMobileResourceCategory === category.category ? 'rotate-180' : 'rotate-0'}`} />
                          </button>
                        ) : (
                          <Link
                            href={category.items[0].href} // Assuming a single link for these categories
                            className="block px-2 py-1 text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
                            onClick={() => {
                              setIsResourcesOpen(false);
                              setIsMobileMenuOpen(false);
                            }}
                          >
                            {category.category}
                          </Link>
                        )}
                        <AnimatePresence>
                          {(category.category === 'Development' || category.category === 'Tools & Environments') && openMobileResourceCategory === category.category && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.2 }}
                              className="pl-4 space-y-1 overflow-hidden"
                            >
                              {category.items.map((item) => (
                                <Link
                                  key={item.name}
                                  href={item.href}
                                  className="block px-2 py-1 text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
                                  onClick={() => {
                                    setIsResourcesOpen(false);
                                    setIsMobileMenuOpen(false);
                                    setOpenMobileResourceCategory(null);
                                  }}
                                >
                                  {item.name}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ))}
                  </motion.div>
                )}
              </div>

               {/* Mobile Products Link with Submenu */}
              <div key={navigation[2].name}>
                 <Link
                   href={navigation[2].href}
                   className={`block px-3 py-2 rounded-md text-base font-medium ${isActive(navigation[2].href) || (navigation[2].submenu && navigation[2].submenu.some(subItem => isActive(subItem.href)))
                       ? 'text-blue-600 dark:text-blue-400'
                       : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
                   }`}
                    onClick={() => navigation[2].submenu ? null : setIsMobileMenuOpen(false)}
                 >
                   {navigation[2].name}
                 </Link>
                 {/* Products Submenu */}
                 {navigation[2].submenu && (
                   <div className="pl-4 space-y-1">
                     {navigation[2].submenu.map((subItem) => (
                       <Link
                         key={subItem.name}
                         href={subItem.href}
                         className="flex items-center justify-between px-3 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
                         onClick={() => setIsMobileMenuOpen(false)}
                       >
                         <span>{subItem.name}</span>
                         {subItem.badge && (
                           <span className={`px-2 py-1 text-xs rounded-full ${
                             subItem.badge === 'New' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' :
                             subItem.badge === 'Pro' ? 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200' :
                             'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
                           }`}>
                             {subItem.badge}
                           </span>
                         )}
                       </Link>
                     ))}
                   </div>
                 )}
               </div>

              {/* About Link */}
              <div key={navigation[3].name}>
                 <Link
                   href={navigation[3].href}
                   className={`block px-3 py-2 rounded-md text-base font-medium ${isActive(navigation[3].href)
                       ? 'text-blue-600 dark:text-blue-400'
                       : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
                   }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                 >
                   {navigation[3].name}
                 </Link>
               </div>

               {/* Mobile Login/Sign up */}
               <Link
                href="/login"
                className={`block px-3 py-2 rounded-md text-base font-medium ${isActive('/login')
                  ? 'text-blue-600 dark:text-blue-400'
                  : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
                }`}
                 onClick={() => setIsMobileMenuOpen(false)}
              >
                Login/Sign up
              </Link>

               {/* Mobile Theme Toggle */}
               {mounted && (
                <button
                  onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                  className="block w-full text-left px-3 py-2 rounded-md text-base font-medium bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                >
                  {theme === 'dark' ? '🌞 Light Mode' : '🌙 Dark Mode'}
                </button>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  )
} 