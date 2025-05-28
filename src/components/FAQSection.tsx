'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface FAQQuestion {
  id: number;
  question: string;
  answer: string;
  icon: string;
}

interface FAQCategory {
  title: string;
  icon: string;
  questions: FAQQuestion[];
}

interface FAQCategories {
  [key: string]: FAQCategory;
}

// FAQ categories and data
const faqCategories: FAQCategories = {
  general: {
    title: "General Questions",
    icon: "❓",
    questions: [
      {
        id: 1,
        question: "What is this website about?",
        answer: "This website is a comprehensive hub for full-stack developers, offering curated resources, tutorials, guides, and tools across frontend, backend, DevOps, version control, and more.",
        icon: "🌐"
      },
      {
        id: 2,
        question: "Who is this website for?",
        answer: "It's designed for aspiring and experienced full-stack developers, including students, professionals, and hobbyists looking to improve their skills or build complete web applications.",
        icon: "👥"
      },
      {
        id: 3,
        question: "Is the content free to access?",
        answer: "Yes, most of the resources, guides, and tools listed are free. Some third-party links may direct to paid courses or software.",
        icon: "💸"
      }
    ]
  },
  aiTools: {
    title: "AI Tools & Website Builders",
    icon: "🤖",
    questions: [
      {
        id: 4,
        question: "What are AI website builders?",
        answer: "AI website builders like Lovable use artificial intelligence to automatically generate websites based on your input, reducing the need for manual coding.",
        icon: "🎨"
      },
      {
        id: 5,
        question: "Can I use these AI tools for professional websites?",
        answer: "Yes, many AI builders offer professional-grade designs and functionalities suitable for portfolios, businesses, and startups.",
        icon: "💼"
      }
    ]
  },
  development: {
    title: "Development & Tools",
    icon: "💻",
    questions: [
      {
        id: 6,
        question: "Which code editors are recommended?",
        answer: "We recommend editors like VSCode, Cursor, and Windsurf for their flexibility, speed, and extension support.",
        icon: "⚡"
      },
      {
        id: 7,
        question: "How do I set up my development environment?",
        answer: "Each editor has a dedicated guide on our site covering installation, essential plugins, and configuration tips for various languages.",
        icon: "🛠️"
      }
    ]
  }
};

export default function FAQSection() {
  const [expandedQuestions, setExpandedQuestions] = useState<number[]>([]);
  const [feedback, setFeedback] = useState<Record<number, { helpful: boolean; comment?: string }>>({});

  const toggleQuestion = (questionId: number) => {
    setExpandedQuestions(prev =>
      prev.includes(questionId)
        ? prev.filter(id => id !== questionId)
        : [...prev, questionId]
    );
  };

  const handleFeedback = (questionId: number, isHelpful: boolean) => {
    setFeedback(prev => ({
      ...prev,
      [questionId]: { helpful: isHelpful }
    }));
  };

  return (
    <div className="container py-16 transition-colors duration-300">
      <h2 className="text-3xl font-bold mb-8 text-center text-blue-700 dark:text-blue-300 transition-colors duration-300">
        Frequently Asked Questions
      </h2>
      
      <div className="max-w-4xl mx-auto space-y-8">
        {Object.entries(faqCategories).map(([key, category]) => (
          <div 
            key={key} 
            className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 transition-colors duration-300"
          >
            <h3 className="text-2xl font-bold mb-6 text-blue-700 dark:text-blue-300 flex items-center gap-2 transition-colors duration-300">
              <span>{category.icon}</span> {category.title}
            </h3>
            
            <div className="space-y-4">
              {category.questions.map((faq) => (
                <div
                  key={faq.id}
                  className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden hover:shadow-md transition-all duration-300"
                >
                  <button
                    onClick={() => toggleQuestion(faq.id)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-300"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-xl">{faq.icon}</span>
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100 transition-colors duration-300">
                        {faq.question}
                      </h4>
                    </div>
                    <span className="text-gray-600 dark:text-gray-300 transition-colors duration-300">
                      {expandedQuestions.includes(faq.id) ? '−' : '+'}
                    </span>
                  </button>

                  <AnimatePresence>
                    {expandedQuestions.includes(faq.id) && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 py-4 bg-gray-50 dark:bg-gray-700 transition-colors duration-300">
                          <p className="text-gray-800 dark:text-gray-200 transition-colors duration-300">
                            {faq.answer}
                          </p>
                          
                          {/* Feedback Section */}
                          <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-600 transition-colors duration-300">
                            <p className="text-sm text-gray-600 dark:text-gray-300 mb-2 transition-colors duration-300">
                              Was this helpful?
                            </p>
                            <div className="flex gap-4">
                              <button
                                onClick={() => handleFeedback(faq.id, true)}
                                className={`flex items-center gap-1 px-3 py-1 rounded-full text-sm transition-colors duration-300 ${
                                  feedback[faq.id]?.helpful === true
                                    ? 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200'
                                    : 'bg-gray-100 dark:bg-gray-600 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-500'
                                }`}
                              >
                                👍 Yes
                              </button>
                              <button
                                onClick={() => handleFeedback(faq.id, false)}
                                className={`flex items-center gap-1 px-3 py-1 rounded-full text-sm transition-colors duration-300 ${
                                  feedback[faq.id]?.helpful === false
                                    ? 'bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200'
                                    : 'bg-gray-100 dark:bg-gray-600 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-500'
                                }`}
                              >
                                👎 No
                              </button>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 