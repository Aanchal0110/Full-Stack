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

const [showCode, setShowCode] = useState<string | null>(null);
const [copiedCode, setCopiedCode] = useState<string | null>(null);
// Component states from ComponentCollection
const [sidebarOpen, setSidebarOpen] = useState(false);
const [dropdownOpen, setDropdownOpen] = useState(false);
const [passwordVisible, setPasswordVisible] = useState(false);
const [activeModal, setActiveModal] = useState<string | null>(null);
const [rating, setRating] = useState(0);
const [formStep, setFormStep] = useState(1);

// Helper function from ComponentCollection
const copyToClipboard = (code: string, id: string) => {
  navigator.clipboard.writeText(code);
  setCopiedCode(id);
  setTimeout(() => setCopiedCode(null), 2000);
};

// Component Card from ComponentCollection
const ComponentCard = ({ id, title, description, component, code }: {
    id: string;
    title: string;
    description: string;
    component: React.ReactNode;
    code?: string;
}) => (
  // ... existing code ...

  <textarea
    className="w-full px-3 py-2 border rounded-md"
    rows={3}
    placeholder="Your feedback..."
  />
);

// ... existing code ... 