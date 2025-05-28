'use client';

import { FaRocket, FaStar, FaHeart, FaCode } from 'react-icons/fa';
import { useState } from 'react';

import {
  Menu, X, Search, User, Bell, Home, Settings, Mail, Phone,
  Eye, EyeOff, Copy, Code, ChevronDown, Star, Upload,
  Check, AlertCircle, Info, Heart, ShoppingCart, Trash2,
  MapPin, Calendar, Clock, Download, Share, Lock, Users,
  MessageCircle, Bookmark, Filter, ArrowRight, Play
} from 'lucide-react';

// Placeholder images - replace these with actual images later

// Component Card from ComponentCollection
const ComponentCard = ({ id, title, description, component, code }: {
    id: string;
    title: string;
    description: string;
    component: React.ReactNode;
    code?: string;
}) => {
  const [showCode, setShowCode] = useState<string | null>(null);
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const copyToClipboard = (code: string, id: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(id);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
      <div className="mb-4">
        {component}
      </div>
      {code && (
        <div className="mt-4">
          <button
            onClick={() => setShowCode(showCode === id ? null : id)}
            className="flex items-center text-sm text-blue-600 dark:text-blue-400"
          >
            <Code className="w-4 h-4 mr-2" />
            {showCode === id ? 'Hide Code' : 'Show Code'}
          </button>
          {showCode === id && (
            <div className="mt-2 relative">
              <pre className="bg-gray-100 dark:bg-gray-900 p-4 rounded-md overflow-x-auto">
                <code>{code}</code>
              </pre>
              <button
                onClick={() => copyToClipboard(code, id)}
                className="absolute top-2 right-2 p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
              >
                {copiedCode === id ? (
                  <Check className="w-4 h-4" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

// Main Components Page
export default function ComponentsPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [activeModal, setActiveModal] = useState<string | null>(null);
  const [rating, setRating] = useState(0);
  const [formStep, setFormStep] = useState(1);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">UI Components</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Add your component cards here */}
      </div>
    </div>
  );
} 