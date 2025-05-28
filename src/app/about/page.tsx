'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';

// You might need to install framer-motion and react-intersection-observer:
// npm install framer-motion react-intersection-observer

const AboutPage = () => {
    const [activeSection, setActiveSection] = useState('about');
    
    const animationOptions = {
        triggerOnce: true,
        threshold: 0.1,
    };

    const [introRef, introInView] = useInView(animationOptions);
    const [missionRef, missionInView] = useInView(animationOptions);
    const [storyRef, storyInView] = useInView(animationOptions);
    const [teamRef, teamInView] = useInView(animationOptions);
    const [contactRef, contactInView] = useInView(animationOptions);

    // Animation variants
    const fadeInVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
    };

    const scrollToSection = (sectionId: string) => {
        setActiveSection(sectionId);
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
            {/* Navigation Bar */}
            <nav className="sticky top-0 z-50 bg-white dark:bg-gray-800 shadow-md">
                <div className="container mx-auto px-4">
                    <div className="flex justify-center space-x-8 py-4">
                        <button
                            onClick={() => scrollToSection('about')}
                            className={`text-lg font-medium transition-colors duration-300 ${
                                activeSection === 'about'
                                    ? 'text-blue-600 dark:text-blue-400'
                                    : 'text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
                            }`}
                        >
                            About Us
                        </button>
                        <button
                            onClick={() => scrollToSection('contact')}
                            className={`text-lg font-medium transition-colors duration-300 ${
                                activeSection === 'contact'
                                    ? 'text-blue-600 dark:text-blue-400'
                                    : 'text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
                            }`}
                        >
                            Contact Us
                        </button>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="relative h-[40vh] flex items-center justify-center text-center overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600">
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="relative z-10 p-8">
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">FullStack Dev Hub</h1>
                    <p className="text-xl text-gray-200">Your Partner in Full-Stack Mastery</p>
                </div>
            </section>

            <div className="container mx-auto px-4 py-12">
                {/* About Section */}
                <div id="about">
                    <motion.section
                        ref={introRef}
                        initial="hidden"
                        animate={introInView ? "visible" : "hidden"}
                        variants={fadeInVariants}
                        className="mb-16"
                    >
                        <h2 className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-6">🧩 Introduction</h2>
                        <p className="text-lg text-gray-700 dark:text-gray-300">
                            FullStack Dev Hub is your one-stop destination for mastering the full-stack development lifecycle. We offer curated resources, AI tools, reusable components, and personalized guidance to help developers accelerate their productivity and career growth.
                        </p>
                    </motion.section>

                    <motion.section
                        ref={missionRef}
                        initial="hidden"
                        animate={missionInView ? "visible" : "hidden"}
                        variants={fadeInVariants}
                        className="mb-16"
                    >
                        <h2 className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-6">🚀 Mission Statement</h2>
                        <p className="text-lg text-gray-700 dark:text-gray-300">
                            Our mission is to empower developers with smart, accessible, and evolving resources that bridge the gap between learning and real-world development—from frontend to backend to AI integration.
                        </p>
                    </motion.section>

                    <motion.section
                        ref={storyRef}
                        initial="hidden"
                        animate={storyInView ? "visible" : "hidden"}
                        variants={fadeInVariants}
                        className="mb-16"
                    >
                        <h2 className="text-3xl font-bold text-pink-600 dark:text-pink-400 mb-6">📖 Our Story</h2>
                        <p className="text-lg text-gray-700 dark:text-gray-300">
                            Started by a passionate group of developers, FullStack Dev Hub began as a simple collection of tools to streamline internal development processes. What started as an internal toolkit is now a growing platform used by thousands of learners and developers worldwide.
                        </p>
                    </motion.section>

                    <motion.section
                        ref={teamRef}
                        initial="hidden"
                        animate={teamInView ? "visible" : "hidden"}
                        variants={fadeInVariants}
                        className="mb-16"
                    >
                        <h2 className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-6">🧑‍🤝‍🧑 Our Team</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                                <div className="w-24 h-24 bg-blue-200 dark:bg-blue-900 rounded-full flex items-center justify-center text-4xl mx-auto mb-4">👤</div>
                                <h3 className="text-xl font-semibold text-center mb-2">Aanchal</h3>
                                <p className="text-gray-600 dark:text-gray-400 text-center">Founder & UI/UX Strategist</p>
                            </div>
                            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                                <div className="w-24 h-24 bg-purple-200 dark:bg-purple-900 rounded-full flex items-center justify-center text-4xl mx-auto mb-4">👤</div>
                                <h3 className="text-xl font-semibold text-center mb-2">Content Lead</h3>
                                <p className="text-gray-600 dark:text-gray-400 text-center">Documentation Expert</p>
                            </div>
                        </div>
                    </motion.section>
                </div>

                {/* Contact Section */}
                <div id="contact" className="pt-16">
                    <motion.section
                        ref={contactRef}
                        initial="hidden"
                        animate={contactInView ? "visible" : "hidden"}
                        variants={fadeInVariants}
                        className="mb-16"
                    >
                        <h2 className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-8">Contact Us</h2>
                        <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
                            We'd love to hear from you! Whether you're a developer, student, educator, or company representative, the FullStack Dev Hub team is here to answer your questions, receive your feedback, and explore new opportunities.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {/* General Inquiries */}
                            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                                <div className="text-4xl mb-4">✉️</div>
                                <h3 className="text-xl font-semibold mb-4">General Inquiries</h3>
                                <p className="text-gray-600 dark:text-gray-400 mb-4">
                                    Have questions about how our platform works or want to know more about our tools and resources?
                                </p>
                                <a href="mailto:support@fullstackdevhub.com" className="text-blue-600 dark:text-blue-400 hover:underline">
                                    support@fullstackdevhub.com
                                </a>
                            </div>

                            {/* Collaborations */}
                            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                                <div className="text-4xl mb-4">🤝</div>
                                <h3 className="text-xl font-semibold mb-4">Collaborations & Partnerships</h3>
                                <p className="text-gray-600 dark:text-gray-400 mb-4">
                                    Want to collaborate, feature your tool, or partner with us? We're always open to impactful partnerships.
                                </p>
                                <a href="mailto:partnerships@fullstackdevhub.com" className="text-blue-600 dark:text-blue-400 hover:underline">
                                    partnerships@fullstackdevhub.com
                                </a>
                            </div>

                            {/* Technical Support */}
                            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                                <div className="text-4xl mb-4">🛠️</div>
                                <h3 className="text-xl font-semibold mb-4">Technical Support</h3>
                                <p className="text-gray-600 dark:text-gray-400 mb-4">
                                    Facing an issue or bug? Let us know and we'll fix it as fast as we can.
                                </p>
                                <a href="mailto:techsupport@fullstackdevhub.com" className="text-blue-600 dark:text-blue-400 hover:underline">
                                    techsupport@fullstackdevhub.com
                                </a>
                            </div>
                        </div>

                        {/* Social Media */}
                        <div className="mt-12">
                            <h3 className="text-2xl font-semibold mb-6">📱 Social Media</h3>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <a href="https://linkedin.com/company/fullstackdevhub" target="_blank" rel="noopener noreferrer" 
                                   className="flex items-center space-x-3 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                                    <span className="text-2xl">🌐</span>
                                    <span>LinkedIn</span>
                                </a>
                                <a href="https://twitter.com/fullstackdevhub" target="_blank" rel="noopener noreferrer"
                                   className="flex items-center space-x-3 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                                    <span className="text-2xl">🐦</span>
                                    <span>Twitter/X</span>
                                </a>
                                <a href="https://instagram.com/fullstack.dev.hub" target="_blank" rel="noopener noreferrer"
                                   className="flex items-center space-x-3 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                                    <span className="text-2xl">📸</span>
                                    <span>Instagram</span>
                                </a>
                            </div>
                        </div>

                        {/* Address */}
                        <div className="mt-12 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                            <h3 className="text-2xl font-semibold mb-4">📍 Address</h3>
                            <p className="text-gray-600 dark:text-gray-400">
                                FullStack Dev Hub<br />
                                #123 Developer Street<br />
                                Tech City, 000000<br />
                                Remote-first, global team 🌍
                            </p>
                        </div>

                        {/* Feedback */}
                        <div className="mt-12 text-center">
                            <h3 className="text-2xl font-semibold mb-4">💡 We'd Love Your Feedback</h3>
                            <p className="text-gray-600 dark:text-gray-400 mb-6">
                                Your input helps us grow and improve. Fill out our feedback form or drop us a line directly.
                            </p>
                            <a href="/feedback" className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                                Share Your Feedback
                            </a>
                        </div>
                    </motion.section>
                </div>
            </div>

            {/* Footer */}
            <footer className="bg-gray-100 dark:bg-gray-800 py-8">
                <div className="container mx-auto px-4 text-center">
                    <p className="text-gray-600 dark:text-gray-400">© 2024 FullStack Dev Hub. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
};

export default AboutPage; 