"use client";

import Link from 'next/link';
import React, { useState, useEffect, StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { StaticImageData } from 'next/image';
import { FaRocket, FaStar, FaHeart, FaCode } from 'react-icons/fa';
import {
  Menu, X, Search, User, Bell, Home, Settings, Mail, Phone,
  Eye, EyeOff, Copy, Code, ChevronDown, Star, Upload,
  Check, AlertCircle, Info, Heart, ShoppingCart, Trash2,
  MapPin, Calendar, Clock, Download, Share, Lock, Users,
  MessageCircle, Bookmark, Filter, ArrowRight, Play
} from 'lucide-react';

// Placeholder images - replace these with actual images later
const placeholderImage = {
  src: '/images/placeholder.png',
  height: 300,
  width: 400,
  blurDataURL: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg=='
};

// Import images (replace with your actual image paths)
const ButtonGlowImage = placeholderImage;
const ButtonGradientImage = placeholderImage;
const ButtonRippleImage = placeholderImage;
const ButtonNeonImage = placeholderImage;
const ButtonPulseImage = placeholderImage;
const Button3DImage = placeholderImage;
const ButtonIconImage = placeholderImage;
const ButtonGlassImage = placeholderImage;
const ButtonSkewImage = placeholderImage;
const ButtonFlipImage = placeholderImage;

const CardGlassImage = placeholderImage;
const CardTiltImage = placeholderImage;
const CardFlipBookImage = placeholderImage;
const CardHoverZoomImage = placeholderImage;
const CardShadowElevateImage = placeholderImage;
const CardSlideRevealImage = placeholderImage;
const CardOverlayTextImage = placeholderImage;
const CardRotateImage = placeholderImage;
const CardToggleInfoImage = placeholderImage;
const CardPulseBorderImage = placeholderImage;

// Import code snippets (replace with your actual code)
const buttonCode = `
.glowing-button { /* ... your glowing button CSS ... */ }
.gradient-button { /* ... your gradient button CSS ... */ }
/* ... and so on for other buttons ... */
`;

const cardCode = `
.glassmorphism-card { /* ... your glassmorphism card CSS ... */ }
.tilt-card { /* ... your tilt card CSS ... */ }
/* ... and so on for other cards ... */
`;

type LinkSubcategory = {
    type: 'link';
    title: string;
    href: string;
};

type ToolItem = {
    name: string;
    description: string;
    type: 'Free' | 'Paid';
};

type GroupSubcategory = {
    type: 'group';
    title: string;
    items: ToolItem[];
};

type Subcategory = LinkSubcategory | GroupSubcategory;

type ComponentCategory = {
    title: string;
    href: string;
    icon: string;
    subcategories?: Subcategory[];
};

const componentCategories: ComponentCategory[] = [
  {
    title: 'AI UI Elements',
    href: '/components/ai-ui-elements',
    icon: '✨',
    subcategories: [
      { 
        type: 'link', 
        title: 'Buttons', 
        href: '/components/ai-ui-elements/buttons' 
      },
      { type: 'link', title: 'Cards', href: '/components/ai-ui-elements/cards' },
      { type: 'link', title: 'Navbars', href: '/components/ai-ui-elements/navbars' },
      { type: 'link', title: 'Inputs', href: '/components/ai-ui-elements/inputs' },
      { type: 'link', title: 'Modals', href: '/components/ai-ui-elements/modals' },
      { type: 'link', title: 'Forms', href: '/components/ai-ui-elements/forms' },
      { type: 'link', title: 'Badges/Tags', href: '/components/ai-ui-elements/badges' },
    ]
  },
  {
    title: 'AI Tools',
    href: '/components/ai-tools',
    icon: '🛠️',
    subcategories: [
            {
                type: 'group',
                title: 'Tools',
                items: [
                    { name: 'Locofy.ai', description: 'AI → Code (React, Next.js, etc.)', type: 'Free' },
                    { name: 'TeleportHQ', description: 'AI to Web Component UI', type: 'Free' },
                    { name: 'Shadcn UI + GPT', description: 'GPT-4 prompt generates Shadcn components', type: 'Free' },
                    { name: 'CodeWP', description: 'Prompt-based UI blocks', type: 'Free' },
                    { name: 'Builder.io', description: 'Drag-n-drop with AI generation', type: 'Paid' },
                    { name: 'Genius UI / UIzard', description: 'Prompt → Tailwind/HTML elements', type: 'Paid' },
                ]
            }
        ]
  },
  {
    title: 'Smart Layouts',
    href: '/components/smart-layouts',
        icon: '💡',
  },
  {
    title: 'AI API Snippets',
    href: '/components/api-snippets',
        icon: '🔌',
  },
  {
    title: 'DB Models Generator',
    href: '/components/db-models-generator',
        icon: '🗄️',
  },
  {
    title: 'Reusable Hooks AI',
    href: '/components/hooks-generator',
        icon: '🎣',
    },
];

type ComponentDetail = {
  image: StaticImageData;
  code: string;
  description: string;
  component: React.ReactNode;
};

type ComponentDetails = {
  [key: string]: ComponentDetail;
};

const buttonCodeExamples = {
  'Glowing Button': {
    code: `.glowing-button {
  position: relative;
  padding: 12px 24px;
  background: #ff69b4;
  border: none;
  color: #fff;
  cursor: pointer;
  transition: all 0.3s;
  border-radius: 8px;
  font-weight: 500;
}

.Glowing-button:hover {
  box-shadow: 0 0 20px rgba(255, 105, 180, 0.8);
  transform: translateY(-2px);
}`,
    description: 'Pink glowing button with hover effect'
  },
  'Gradient Button': {
    code: `.Gradient-button {
  padding: 12px 24px;
  background: linear-Gradient(45deg, #ff6b6b, #ff8e8e);
  border: none;
  color: white;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s;
}

.Gradient-button:hover {
  background: linear-Gradient(45deg, #ff8e8e, #ff6b6b);
  transform: translateY(-2px);
  box-shadow: 0 4px 15px rgba(255, 107, 107, 0.4);
}`,
    description: 'Button with gradient background'
  },
  'Ripple Effect Button': {
    code: `.Ripple-effect-button {
  position: relative;
  padding: 12px 24px;
  background: #9c27b0;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  overflow: hidden;
}

.Ripple-effect-button::after {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  pointer-events: none;
  background-image: Radial-gradient(circle, rgba(255,255,255,0.8) 10%, transparent 10.01%);
  background-repeat: no-repeat;
  background-position: 50%;
  transform: scale(10, 10);
  opacity: 0;
  transition: transform 0.5s, opacity 1s;
}

.Ripple-effect-button:active::after {
  transform: scale(0, 0);
  opacity: 0.3;
  transition: 0s;
}`,
    description: 'Purple button with ripple effect on click'
  },
  'Neon Border Button': {
    code: `.button-preview-container .Neon-border-button {
  padding: 16px 32px;
  background: transparent;
  color: #fff;
  border: 2px solid #0f0;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s;
  text-shadow: 0 0 5px #0f0;
  box-shadow: 0 0 5px #0f0;
}

.button-preview-container .Neon-border-button:hover {
  background: #0f0;
  color: #000;
  box-shadow: 0 0 20px #0f0;
}`,
    description: 'Button with neon border effect'
  },
  'Pulse Button': {
    code: `.button-preview-container .Pulse-button {
  padding: 16px 32px;
  background: #4CAF50;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  animation: button-preview-container-pulse 2s infinite;
}

@keyframes button-preview-container-Pulse {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
}`,
    description: 'Button with pulsing animation'
  },
  '3D Push Button': {
    code: `.Push-button {
  padding: 12px 24px;
  background: #2196f3;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transform-style: preserve-3d;
  transition: transform 0.2s, box-shadow 0.2s;
  box-shadow: 0 6px 0 #1976d2;
}

.Push-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 0 #1976d2;
}

.Push-button:active {
  transform: translateY(4px);
  box-shadow: 0 2px 0 #1976d2;
}`,
    description: '3D button with push effect'
  },
  'Glassmorphism Button': {
    code: `.Glassmorphism-button {
  padding: 12px 24px;
  background: linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05));
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255,255,255,0.2);
  color: white;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s;
}

.Glassmorphism-button:hover {
  background: linear-gradient(135deg, rgba(255,255,255,0.2), rgba(255,255,255,0.1));
  border-color: rgba(255,255,255,0.3);
  transform: translateY(-2px);
  box-shadow: 0 8px 32px rgba(31, 38, 135, 0.37);
}`,
    description: 'Frosted glass effect button'
  },
  'Skew Button': {
    code: `.Skew-button {
  padding: 12px 24px;
  background: #ff6b6b;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s;
  position: relative;
  overflow: hidden;
}

.Skew-button:hover {
  transform: skew(-10deg) scale(1.1);
  background: #ff4757;
}

.Skew-button::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
  transition: 0.5s;
}

.Skew-button:hover::before {
  left: 100%;
}`,
    description: 'Button with skew and shine effect'
  },
  'Flip Button': {
    code: `.Flip-button {
  perspective: 1000px;
  width: 120px;
  height: 40px;
}

.Flip-button-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.6s;
  transform-style: preserve-3d;
}

.Flip-button:hover .flip-button-inner {
  transform: rotateY(180deg);
}

.Flip-button-front, .flip-button-back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
}

.Flip-button-front {
  background: #2196f3;
  color: white;
}

.Flip-button-back {
  background: #ff6b6b;
  color: white;
  transform: rotateY(180deg);
}`,
    description: 'Button that flips to reveal back side'
  },
  'Icon Button': {
    code: `.icon-button {
  padding: 12px;
  background: #333;
  color: white;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s;
  width: 48px;
  height: 48px;
}

.icon-button:hover {
  background: #444;
  transform: rotate(360deg);
}

.icon-button i {
  font-size: 20px;
}`,
    description: 'Circular button with rotating icon'
  }
};

type CardCodeExample = {
    code: string;
    description: string;
};

type CardCodeExamples = {
    [key: string]: CardCodeExample;
};

const cardCodeExamples: CardCodeExamples = {
  'Glassmorphism Card': {
        code: `.glassmorphism-card {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 12px;
  padding: 20px;
}`,
        description: 'Modern glass-like effect with blur'
  },
  'Tilt Card': {
    code: `.tilt-card {
  background: #2a2a2a;
  border-radius: 12px;
  padding: 20px;
  transform-style: preserve-3d;
    transition: transform 0.3s;
}

.tilt-card:hover {
    transform: perspective(1000px) rotateX(10deg) rotateY(10deg);
}`,
    description: '3D tilt effect on hover'
  },
  'Flip Book Card': {
        code: `.flipbook-card {
    background: #2a2a2a;
    border-radius: 12px;
  perspective: 1000px;
}

.flipbook-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform 0.6s;
  transform-style: preserve-3d;
}

.flipbook-card:hover .flipbook-card-inner {
  transform: rotateY(180deg);
}

.flipbook-card-front,
.flipbook-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
}

.flipbook-card-back {
  transform: rotateY(180deg);
}`,
    description: 'Book-like flip animation'
  },
  'Hover Zoom Card': {
        code: `.hoverzoom-card {
  background: #2a2a2a;
  border-radius: 12px;
  overflow: hidden;
}

.hoverzoom-card img {
  transition: transform 0.3s;
}

.hoverzoom-card:hover img {
  transform: scale(1.1);
}`,
        description: 'Image zoom on hover'
  },
  'Shadow Elevate Card': {
    code: `.shadow-card {
  background: #2a2a2a;
  border-radius: 12px;
  padding: 20px;
  transition: all 0.3s;
}

.shadow-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
}`,
    description: 'Elevating shadow animation'
  },
  'Slide Reveal Card': {
    code: `.slide-card {
  background: #2a2a2a;
  border-radius: 12px;
  overflow: hidden;
  position: relative;
}

.slide-card-content {
  position: absolute;
  bottom: -100%;
  left: 0;
  width: 100%;
  padding: 20px;
  background: rgba(0, 0, 0, 0.8);
  transition: bottom 0.3s;
}

.slide-card:hover .slide-card-content {
  bottom: 0;
}`,
    description: 'Content slides in on hover'
  },
  'Overlay Text Card': {
    code: `.overlay-card {
  background: #2a2a2a;
  border-radius: 12px;
  overflow: hidden;
  position: relative;
}

.overlay-card-text {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s;
}

.overlay-card:hover .overlay-card-text {
  opacity: 1;
}`,
    description: 'Text overlay with fade effect'
  },
  'Rotate Card': {
    code: `.rotate-card {
  background: #2a2a2a;
  border-radius: 12px;
  padding: 20px;
  transition: transform 0.6s;
  transform-style: preserve-3d;
}

.rotate-card:hover {
  transform: rotateY(180deg);
}`,
    description: '3D rotation on hover'
  },
  'Card with Toggle Info': {
    code: `.toggle-card {
  background: #2a2a2a;
  border-radius: 12px;
  padding: 20px;
  overflow: hidden;
}

.toggle-card-info {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s;
}

.toggle-card.active .toggle-card-info {
  max-height: 200px;
}`,
    description: 'Expandable card with toggle info'
  },
  'Pulse Border Card': {
    code: `.pulseborder-card {
  background: #2a2a2a;
  border-radius: 12px;
  padding: 20px;
  position: relative;
}

.pulseborder-card::before {
  content: '';
  position: absolute;
  top: -2px;
  left: -2px;
  right: -2px;
  bottom: -2px;
  border-radius: 14px;
  background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
  z-index: -1;
  animation: button-preview-container-pulse 2s infinite;
}

@keyframes button-preview-container-pulse {
  0% { transform: scale(1); }
  50% { transform: scale(1.02); }
  100% { transform: scale(1); }
}`,
    description: 'Pulsing border animation'
  }
};

const getButtonClassName = (name: string): string => {
  switch (name) {
    case '3D Push Button':
      return 'push-button';
    case 'Gradient Button':
      return 'gradient-button';
    case 'Pulse Button':
      return 'pulse-button';
    case 'Neon Border Button':
      return 'neon-border-button';
    case 'Glassmorphism Button':
      return 'glassmorphism-button';
    case 'Flip Button':
      return 'flip-button';
    case 'Icon Button':
      return 'icon-button';
    case 'Glowing Button':
      return 'glowing-button';
    case 'Ripple Effect Button':
      return 'ripple-button';
    case 'Skew Button':
      return 'skew-button';
    default:
      return name.toLowerCase().replace(/\s+/g, '-');
  }
};

const getCardClassName = (name: string): string => {
  switch (name) {
    case 'Glassmorphism Card':
      return 'glassmorphism-card';
    case 'Tilt Card':
      return 'tilt-card';
    case 'Flip Book Card':
      return 'flipbook-card';
    case 'Hover Zoom Card':
      return 'hoverzoom-card';
    case 'Shadow Elevate Card':
      return 'shadow-card';
    case 'Slide Reveal Card':
      return 'slide-card';
    case 'Overlay Text Card':
      return 'overlay-card';
    case 'Rotate Card':
      return 'rotate-card';
    case 'Card with Toggle Info':
      return 'toggle-card';
    case 'Pulse Border Card':
      return 'pulseborder-card';
    default:
      return name.toLowerCase().replace(/\s+/g, '-');
  }
};

// Mapping of subcategory titles to their image sources and code
const componentDetails: ComponentDetails = {
  'Glowing Button': { 
    image: ButtonGlowImage, 
    code: buttonCodeExamples['Glowing Button'].code,
    description: buttonCodeExamples['Glowing Button'].description,
    component: (
      <button className={`${getButtonClassName('Glowing Button')} w-full max-w-sm`}>
        Glowing Button
      </button>
    ),
  },
  'Gradient Button': { 
    image: ButtonGradientImage, 
    code: buttonCodeExamples['Gradient Button'].code,
    description: buttonCodeExamples['Gradient Button'].description,
    component: (
      <button className={`${getButtonClassName('Gradient Button')} w-full max-w-sm`}>
        Gradient Button
      </button>
    ),
  },
  'Ripple Effect Button': { 
    image: ButtonRippleImage, 
    code: buttonCodeExamples['Ripple Effect Button'].code,
    description: buttonCodeExamples['Ripple Effect Button'].description,
    component: (
      <button className={`${getButtonClassName('Ripple Effect Button')} w-full max-w-sm`}>
        Ripple Effect Button
      </button>
    ),
  },
  'Neon Border Button': { 
    image: ButtonNeonImage, 
    code: buttonCodeExamples['Neon Border Button'].code,
    description: buttonCodeExamples['Neon Border Button'].description,
    component: (
      <button className={`${getButtonClassName('Neon Border Button')} w-full max-w-sm`}>
        Neon Border Button
      </button>
    ),
  },
  'Pulse Button': { 
    image: ButtonPulseImage, 
    code: buttonCodeExamples['Pulse Button'].code,
    description: buttonCodeExamples['Pulse Button'].description,
    component: (
      <button className={`${getButtonClassName('Pulse Button')} w-full max-w-sm`}>
        Pulse Button
      </button>
    ),
  },
  '3D Push Button': { 
    image: Button3DImage, 
    code: buttonCodeExamples['3D Push Button'].code,
    description: buttonCodeExamples['3D Push Button'].description,
    component: (
      <button className={`${getButtonClassName('3D Push Button')} w-full max-w-sm`}>
        3D Push Button
      </button>
    ),
  },
  'Icon Button': { 
    image: ButtonIconImage, 
    code: buttonCodeExamples['Icon Button'].code,
    description: buttonCodeExamples['Icon Button'].description,
    component: (
      <button className={`${getButtonClassName('Icon Button')} w-full max-w-sm`}>
        <FaRocket />
      </button>
    ),
  },
  'Glassmorphism Button': { 
    image: ButtonGlassImage, 
    code: buttonCodeExamples['Glassmorphism Button'].code,
    description: buttonCodeExamples['Glassmorphism Button'].description,
    component: (
      <button className={`${getButtonClassName('Glassmorphism Button')} w-full max-w-sm`}>
        Glassmorphism Button
      </button>
    ),
  },
  'Skew Button': { 
    image: ButtonSkewImage, 
    code: buttonCodeExamples['Skew Button'].code,
    description: buttonCodeExamples['Skew Button'].description,
    component: (
      <button className={`${getButtonClassName('Skew Button')} w-full max-w-sm`}>
        Skew Button
      </button>
    ),
  },
  'Flip Button': { 
    image: ButtonFlipImage, 
    code: buttonCodeExamples['Flip Button'].code,
    description: buttonCodeExamples['Flip Button'].description,
    component: (
      <div className={`${getButtonClassName('Flip Button')} w-full max-w-sm`}>
        <div className="flip-button-inner">
          <div className="flip-button-front">Flip Button</div>
          <div className="flip-button-back">Back</div>
        </div>
      </div>
    ),
  },
  'Glassmorphism Card': { 
    image: CardGlassImage, 
    code: cardCodeExamples['Glassmorphism Card'].code,
    description: cardCodeExamples['Glassmorphism Card'].description,
    component: (
      <div className={`${getCardClassName('Glassmorphism Card')} w-full max-w-sm`}>
        Glassmorphism Card
      </div>
    ),
  },
  'Tilt Card': { 
    image: CardTiltImage, 
    code: cardCodeExamples['Tilt Card'].code,
    description: cardCodeExamples['Tilt Card'].description,
    component: (
      <div className={`${getCardClassName('Tilt Card')} w-full max-w-sm`}>
        Tilt Card
      </div>
    ),
  },
  'Flip Book Card': { 
    image: CardFlipBookImage, 
    code: cardCodeExamples['Flip Book Card'].code,
    description: cardCodeExamples['Flip Book Card'].description,
    component: (
      <div className={`${getCardClassName('Flip Book Card')} w-full max-w-sm`}>
        <div className="flipbook-card-inner">
          <div className="flipbook-card-front">Flip Book Card</div>
          <div className="flipbook-card-back">Back</div>
        </div>
      </div>
    ),
  },
  'Hover Zoom Card': { 
    image: CardHoverZoomImage, 
    code: cardCodeExamples['Hover Zoom Card'].code,
    description: cardCodeExamples['Hover Zoom Card'].description,
    component: (
      <div className={`${getCardClassName('Hover Zoom Card')} w-full max-w-sm`}>
        <div className="hoverzoom-card">
          <img src="/placeholder.png" alt="Placeholder" />
        </div>
      </div>
    ),
  },
  'Shadow Elevate Card': { 
    image: CardShadowElevateImage, 
    code: cardCodeExamples['Shadow Elevate Card'].code,
    description: cardCodeExamples['Shadow Elevate Card'].description,
    component: (
      <div className={`${getCardClassName('Shadow Elevate Card')} w-full max-w-sm`}>
        Shadow Elevate Card
      </div>
    ),
  },
  'Slide Reveal Card': { 
    image: CardSlideRevealImage, 
    code: cardCodeExamples['Slide Reveal Card'].code,
    description: cardCodeExamples['Slide Reveal Card'].description,
    component: (
      <div className={`${getCardClassName('Slide Reveal Card')} w-full max-w-sm`}>
        Slide Reveal Card
      </div>
    ),
  },
  'Overlay Text Card': { 
    image: CardOverlayTextImage, 
    code: cardCodeExamples['Overlay Text Card'].code,
    description: cardCodeExamples['Overlay Text Card'].description,
    component: (
      <div className={`${getCardClassName('Overlay Text Card')} w-full max-w-sm`}>
        Overlay Text Card
      </div>
    ),
  },
  'Rotate Card': { 
    image: CardRotateImage, 
    code: cardCodeExamples['Rotate Card'].code,
    description: cardCodeExamples['Rotate Card'].description,
    component: (
      <div className={`${getCardClassName('Rotate Card')} w-full max-w-sm`}>
        Rotate Card
      </div>
    ),
  },
  'Card with Toggle Info': { 
    image: CardToggleInfoImage, 
    code: cardCodeExamples['Card with Toggle Info'].code,
    description: cardCodeExamples['Card with Toggle Info'].description,
    component: (
      <div className={`${getCardClassName('Card with Toggle Info')} w-full max-w-sm`}>
        <div className="toggle-card-info">Toggle Info</div>
      </div>
    ),
  },
  'Pulse Border Card': { 
    image: CardPulseBorderImage, 
    code: cardCodeExamples['Pulse Border Card'].code,
    description: cardCodeExamples['Pulse Border Card'].description,
    component: (
      <div className={`${getCardClassName('Pulse Border Card')} w-full max-w-sm`}>
        Pulse Border Card
      </div>
    ),
  },
  'Login Form': {
    image: placeholderImage,
    code: `<form>...Login Form code...</form>`,
    description: 'Basic email/password login form',
    component: (
      <form className="space-y-4">
        <input type="email" placeholder="Email" className="w-full p-2 border rounded" />
        <input type="password" placeholder="Password" className="w-full p-2 border rounded" />
        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">Login</button>
      </form>
    ),
  },
  'Signup Form': {
    image: placeholderImage,
    code: `<form>...Signup Form code...</form>`,
    description: 'Name, email, password, confirm password',
    component: (
      <form className="space-y-4">
        <input type="text" placeholder="Name" className="w-full p-2 border rounded" />
        <input type="email" placeholder="Email" className="w-full p-2 border rounded" />
        <input type="password" placeholder="Password" className="w-full p-2 border rounded" />
        <input type="password" placeholder="Confirm Password" className="w-full p-2 border rounded" />
        <button type="submit" className="w-full bg-green-500 text-white p-2 rounded">Sign Up</button>
      </form>
    ),
  },
  'Contact Form': {
    image: placeholderImage,
    code: `<form>...Contact Form code...</form>`,
    description: 'Name, email, message',
    component: (
      <form className="space-y-4">
        <input type="text" placeholder="Name" className="w-full p-2 border rounded" />
        <input type="email" placeholder="Email" className="w-full p-2 border rounded" />
        <textarea placeholder="Message" className="w-full p-2 border rounded" />
        <button type="submit" className="w-full bg-purple-500 text-white p-2 rounded">Send</button>
      </form>
    ),
  },
  'Search Form': {
    image: placeholderImage,
    code: `<form>...Search Form code...</form>`,
    description: 'Styled input with magnifying icon',
    component: (
      <form className="flex items-center space-x-2">
        <input type="text" placeholder="Search..." className="w-full p-2 border rounded" />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">
          <Search className="w-5 h-5" />
        </button>
      </form>
    ),
  },
  'Newsletter Form': {
    image: placeholderImage,
    code: `<form>...Newsletter Form code...</form>`,
    description: 'Email input with subscribe button',
    component: (
      <form className="flex space-x-2">
        <input type="email" placeholder="Your email" className="w-full p-2 border rounded" />
        <button type="submit" className="bg-yellow-500 text-white p-2 rounded">Subscribe</button>
      </form>
    ),
  },
  'Feedback Form': {
    image: placeholderImage,
    code: `<form>...Feedback Form code...</form>`,
    description: 'Star rating with comment',
    component: (
      <form className="space-y-4">
        <div className="flex space-x-1">
          {[1,2,3,4,5].map(i => <Star key={i} className="w-5 h-5 text-yellow-400" />)}
        </div>
        <textarea placeholder="Your feedback..." className="w-full p-2 border rounded" />
        <button type="submit" className="w-full bg-indigo-500 text-white p-2 rounded">Submit</button>
      </form>
    ),
  },
  'Profile Edit Form': {
    image: placeholderImage,
    code: `<form>...Profile Edit Form code...</form>`,
    description: 'Edit profile with image upload',
    component: (
      <form className="space-y-4">
        <input type="file" className="w-full p-2 border rounded" />
        <input type="text" placeholder="Name" className="w-full p-2 border rounded" />
        <input type="email" placeholder="Email" className="w-full p-2 border rounded" />
        <button type="submit" className="w-full bg-pink-500 text-white p-2 rounded">Save</button>
      </form>
    ),
  },
  'Multi-Step Form': {
    image: placeholderImage,
    code: `<form>...Multi-Step Form code...</form>`,
    description: 'Progress bar included',
    component: (
      <form className="space-y-4">
        <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
          <div className="bg-blue-500 h-2 rounded-full" style={{ width: '50%' }}></div>
        </div>
        <input type="text" placeholder="Step 1" className="w-full p-2 border rounded" />
        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">Next</button>
      </form>
    ),
  },
  'Dark Mode Form': {
    image: placeholderImage,
    code: `<form>...Dark Mode Form code...</form>`,
    description: 'Contrast-friendly styling',
    component: (
      <form className="space-y-4 bg-gray-900 text-white p-4 rounded">
        <input type="text" placeholder="Name" className="w-full p-2 border rounded bg-gray-800 text-white" />
        <input type="email" placeholder="Email" className="w-full p-2 border rounded bg-gray-800 text-white" />
        <button type="submit" className="w-full bg-white text-gray-900 p-2 rounded">Submit</button>
      </form>
    ),
  },
  'Floating Form': {
    image: placeholderImage,
    code: `<form>...Floating Form code...</form>`,
    description: 'Positioned on bottom corner of screen',
    component: (
      <form className="fixed bottom-4 right-4 bg-white p-4 rounded shadow-lg w-80 space-y-2">
        <input type="email" placeholder="Email" className="w-full p-2 border rounded" />
        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">Send</button>
      </form>
    ),
  },
  'Status Badge': {
    image: placeholderImage,
    code: `<span className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-800">Active</span>`,
    description: 'Status indicator badge',
    component: (
      <span className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-800">Active</span>
    ),
  },
  'Notification Badge': {
    image: placeholderImage,
    code: `<span className="px-2 py-1 text-xs rounded-full bg-red-100 text-red-800">3</span>`,
    description: 'Notification counter badge',
    component: (
      <span className="px-2 py-1 text-xs rounded-full bg-red-100 text-red-800">3</span>
    ),
  },
  'Feature Tag': {
    image: placeholderImage,
    code: `<span className="px-3 py-1 text-sm rounded-full bg-blue-100 text-blue-800">New Feature</span>`,
    description: 'Feature indicator tag',
    component: (
      <span className="px-3 py-1 text-sm rounded-full bg-blue-100 text-blue-800">New Feature</span>
    ),
  },
  'Category Tag': {
    image: placeholderImage,
    code: `<span className="px-3 py-1 text-sm rounded-full bg-purple-100 text-purple-800">Technology</span>`,
    description: 'Category indicator tag',
    component: (
      <span className="px-3 py-1 text-sm rounded-full bg-purple-100 text-purple-800">Technology</span>
    ),
  },
  'Skill Tag': {
    image: placeholderImage,
    code: `<span className="px-3 py-1 text-sm rounded-full bg-gray-200 text-gray-800">React</span>`,
    description: 'Skill indicator tag',
    component: (
      <span className="px-3 py-1 text-sm rounded-full bg-gray-200 text-gray-800">React</span>
    ),
  },
  'Removable Tag': {
    image: placeholderImage,
    code: `<span className="inline-flex items-center px-3 py-1 text-sm rounded-full bg-yellow-100 text-yellow-800">
  <span>Filter</span>
  <button className="ml-2 text-yellow-600 hover:text-yellow-800">×</button>
</span>`,
    description: 'Tag with remove button',
    component: (
      <span className="inline-flex items-center px-3 py-1 text-sm rounded-full bg-yellow-100 text-yellow-800">
        <span>Filter</span>
        <button className="ml-2 text-yellow-600 hover:text-yellow-800">×</button>
      </span>
    ),
  },
  'Basic Navbar': {
    image: placeholderImage,
    code: `<nav className="flex items-center justify-between p-4 bg-gray-800">
  <div className="text-xl font-bold">Logo</div>
  <div className="space-x-4">
    <a href="#" className="text-gray-300 hover:text-white">Home</a>
    <a href="#" className="text-gray-300 hover:text-white">About</a>
    <a href="#" className="text-gray-300 hover:text-white">Contact</a>
  </div>
</nav>`,
    description: 'Simple navigation bar with logo and links',
    component: (
      <nav className="flex items-center justify-between p-4 bg-gray-800">
        <div className="text-xl font-bold">Logo</div>
        <div className="space-x-4">
          <a href="#" className="text-gray-300 hover:text-white">Home</a>
          <a href="#" className="text-gray-300 hover:text-white">About</a>
          <a href="#" className="text-gray-300 hover:text-white">Contact</a>
        </div>
      </nav>
    ),
  },
  'Sidebar Collapse Navbar': {
    image: placeholderImage,
    code: `<div className="flex">
  <aside className="bg-gray-800 text-white w-16 hover:w-48 transition-all duration-300 h-screen flex flex-col items-center py-4">
    <div className="flex-1 flex flex-col space-y-4 w-full items-center">
      <a href="#" className="w-full px-4 py-2 hover:bg-gray-700 rounded">🏠 <span className="ml-2 hidden lg:inline">Home</span></a>
      <a href="#" className="w-full px-4 py-2 hover:bg-gray-700 rounded">📄 <span className="ml-2 hidden lg:inline">Docs</span></a>
      <a href="#" className="w-full px-4 py-2 hover:bg-gray-700 rounded">⚙️ <span className="ml-2 hidden lg:inline">Settings</span></a>
    </div>
  </aside>
  <main className="flex-1 p-6">Sidebar Collapse Content</main>
</div>`,
    description: 'Expands/collapses on toggle.',
    component: (
      <div className="flex">
        <aside className="bg-gray-800 text-white w-16 hover:w-48 transition-all duration-300 h-40 flex flex-col items-center py-4">
          <div className="flex-1 flex flex-col space-y-4 w-full items-center">
            <a href="#" className="w-full px-4 py-2 hover:bg-gray-700 rounded">🏠 <span className="ml-2 hidden lg:inline">Home</span></a>
            <a href="#" className="w-full px-4 py-2 hover:bg-gray-700 rounded">📄 <span className="ml-2 hidden lg:inline">Docs</span></a>
            <a href="#" className="w-full px-4 py-2 hover:bg-gray-700 rounded">⚙️ <span className="ml-2 hidden lg:inline">Settings</span></a>
          </div>
        </aside>
        <main className="flex-1 p-6">Sidebar Collapse Content</main>
      </div>
    ),
  },
  'Glass Navigation Bar': {
    image: placeholderImage,
    code: `<nav className="backdrop-blur-md bg-white/30 border-b border-white/20 shadow-lg fixed w-full top-0 left-0 z-40 flex items-center justify-between px-6 py-3">
  <span className="font-bold text-lg">GlassNav</span>
  <div className="space-x-4">
    <a href="#" className="hover:underline">Home</a>
    <a href="#" className="hover:underline">Features</a>
    <a href="#" className="hover:underline">Contact</a>
  </div>
</nav>`,
    description: 'Transparent glass-like look.',
    component: (
      <nav className="backdrop-blur-md bg-white/30 border-b border-white/20 shadow-lg fixed w-full top-0 left-0 z-40 flex items-center justify-between px-6 py-3">
        <span className="font-bold text-lg">GlassNav</span>
        <div className="space-x-4">
          <a href="#" className="hover:underline">Home</a>
          <a href="#" className="hover:underline">Features</a>
          <a href="#" className="hover:underline">Contact</a>
        </div>
      </nav>
    ),
  },
  'Animated Underline Navbar': {
    image: placeholderImage,
    code: `<nav className="bg-gray-900 text-white flex items-center justify-center space-x-8 py-4">
  <a href="#" className="relative group">
    Home
    <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300"></span>
  </a>
  <a href="#" className="relative group">
    Services
    <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300"></span>
  </a>
  <a href="#" className="relative group">
    Contact
    <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300"></span>
  </a>
</nav>`,
    description: 'Underline follows active tab.',
    component: (
      <nav className="bg-gray-900 text-white flex items-center justify-center space-x-8 py-4">
        {['Home', 'Services', 'Contact'].map((tab) => (
          <a key={tab} href="#" className="relative group px-2">
            {tab}
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300"></span>
          </a>
        ))}
      </nav>
    ),
  },
  'Mega Menu Navbar': {
    image: placeholderImage,
    code: `<nav className="bg-gray-800 text-white px-6 py-3 flex items-center">
  <div className="relative group">
    <button className="px-4 py-2">Products</button>
    <div className="absolute left-0 mt-2 w-96 bg-white text-gray-900 rounded shadow-lg p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-50">
      <div className="grid grid-cols-3 gap-4">
        <div><h4 className="font-bold mb-2">Category 1</h4><ul><li>Item 1</li><li>Item 2</li></ul></div>
        <div><h4 className="font-bold mb-2">Category 2</h4><ul><li>Item 3</li><li>Item 4</li></ul></div>
        <div><h4 className="font-bold mb-2">Category 3</h4><ul><li>Item 5</li><li>Item 6</li></ul></div>
      </div>
    </div>
  </div>
</nav>`,
    description: 'Expands with large multi-column menu.',
    component: (
      <nav className="bg-gray-800 text-white px-6 py-3 flex items-center">
        <div className="relative group">
          <button className="px-4 py-2">Products</button>
          <div className="absolute left-0 mt-2 w-96 bg-white text-gray-900 rounded shadow-lg p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-50">
            <div className="grid grid-cols-3 gap-4">
              <div><h4 className="font-bold mb-2">Category 1</h4><ul><li>Item 1</li><li>Item 2</li></ul></div>
              <div><h4 className="font-bold mb-2">Category 2</h4><ul><li>Item 3</li><li>Item 4</li></ul></div>
              <div><h4 className="font-bold mb-2">Category 3</h4><ul><li>Item 5</li><li>Item 6</li></ul></div>
            </div>
          </div>
        </div>
      </nav>
    ),
  },
  'Responsive Toggle Navbar': {
    image: placeholderImage,
    code: `<nav className="bg-gray-900 text-white flex items-center justify-between px-6 py-3">
  <span className="font-bold text-lg">Brand</span>
  <button className="md:hidden block">☰</button>
  <div className="hidden md:flex space-x-4">
    <a href="#" className="hover:underline">Home</a>
    <a href="#" className="hover:underline">About</a>
    <a href="#" className="hover:underline">Contact</a>
  </div>
</nav>`,
    description: 'Changes to hamburger icon on small screens.',
    component: (
      <nav className="bg-gray-900 text-white flex items-center justify-between px-6 py-3">
        <span className="font-bold text-lg">Brand</span>
        <button className="md:hidden block">☰</button>
        <div className="hidden md:flex space-x-4">
          <a href="#" className="hover:underline">Home</a>
          <a href="#" className="hover:underline">About</a>
          <a href="#" className="hover:underline">Contact</a>
        </div>
      </nav>
    ),
  },
  'Scroll Reveal Navbar': {
    image: placeholderImage,
    code: `<nav className="fixed top-0 left-0 w-full bg-blue-800 text-white shadow-md transition-transform duration-300">
  <span className="font-bold text-lg">Scroll Reveal Navbar</span>
  <div className="space-x-4">
    <a href="#" className="hover:underline">Home</a>
    <a href="#" className="hover:underline">About</a>
    <a href="#" className="hover:underline">Contact</a>
  </div>
</nav>`,
    description: 'Appears only on scroll up (static demo).',
    component: (
      <nav className="fixed top-0 left-0 w-full bg-blue-800 text-white shadow-md transition-transform duration-300">
        <span className="font-bold text-lg">Scroll Reveal Navbar</span>
        <div className="space-x-4">
          <a href="#" className="hover:underline">Home</a>
          <a href="#" className="hover:underline">About</a>
          <a href="#" className="hover:underline">Contact</a>
        </div>
      </nav>
    ),
  },
  'Floating Navbar': {
    image: placeholderImage,
    code: `<nav className="fixed top-6 left-1/2 transform -translate-x-1/2 bg-white/90 shadow-lg rounded-full px-8 py-3 flex items-center space-x-6 z-50">
  <a href="#" className="text-gray-700 hover:text-blue-600">Home</a>
  <a href="#" className="text-gray-700 hover:text-blue-600">About</a>
  <a href="#" className="text-gray-700 hover:text-blue-600">Contact</a>
</nav>`,
    description: 'Hovers over content with shadow.',
    component: (
      <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 bg-white/90 shadow-lg rounded-full px-8 py-3 flex items-center space-x-6 z-50">
        <a href="#" className="text-gray-700 hover:text-blue-600">Home</a>
        <a href="#" className="text-gray-700 hover:text-blue-600">About</a>
        <a href="#" className="text-gray-700 hover:text-blue-600">Contact</a>
      </nav>
    ),
  },
  'Icon-Based Navbar': {
    image: placeholderImage,
    code: `<nav className="bg-gray-900 text-white flex items-center justify-center space-x-8 py-4">
  <a href="#" title="Home" className="flex flex-col items-center group">
    <Home className="w-6 h-6" />
    <span className="text-xs mt-1 opacity-0 group-hover:opacity-100 transition">Home</span>
  </a>
  <a href="#" title="Search" className="flex flex-col items-center group">
    <Search className="w-6 h-6" />
    <span className="text-xs mt-1 opacity-0 group-hover:opacity-100 transition">Search</span>
  </a>
  <a href="#" title="Settings" className="flex flex-col items-center group">
    <Settings className="w-6 h-6" />
    <span className="text-xs mt-1 opacity-0 group-hover:opacity-100 transition">Settings</span>
  </a>
</nav>`,
    description: 'Uses only icons with tooltips.',
    component: (
      <nav className="bg-gray-900 text-white flex items-center justify-center space-x-8 py-4">
        <a href="#" title="Home" className="flex flex-col items-center group">
          <Home className="w-6 h-6" />
          <span className="text-xs mt-1 opacity-0 group-hover:opacity-100 transition">Home</span>
        </a>
        <a href="#" title="Search" className="flex flex-col items-center group">
          <Search className="w-6 h-6" />
          <span className="text-xs mt-1 opacity-0 group-hover:opacity-100 transition">Search</span>
        </a>
        <a href="#" title="Settings" className="flex flex-col items-center group">
          <Settings className="w-6 h-6" />
          <span className="text-xs mt-1 opacity-0 group-hover:opacity-100 transition">Settings</span>
        </a>
      </nav>
    ),
  },
  'Section Highlight Navbar': {
    image: placeholderImage,
    code: `<nav className="bg-gray-800 text-white flex items-center justify-center space-x-8 py-4">
  <a href="#section1" className="hover:text-blue-400 data-[active=true]:text-blue-400">Section 1</a>
  <a href="#section2" className="hover:text-blue-400 data-[active=true]:text-blue-400">Section 2</a>
  <a href="#section3" className="hover:text-blue-400 data-[active=true]:text-blue-400">Section 3</a>
</nav>`,
    description: 'Highlights based on current section in view (static demo).',
    component: (
      <nav className="bg-gray-800 text-white flex items-center justify-center space-x-8 py-4">
        <a href="#section1" className="hover:text-blue-400 text-blue-400">Section 1</a>
        <a href="#section2" className="hover:text-blue-400">Section 2</a>
        <a href="#section3" className="hover:text-blue-400">Section 3</a>
      </nav>
    ),
  },
  'Password Input': {
    image: placeholderImage,
    code: `<input type="password" placeholder="Password" className="w-full p-2 border border-gray-600 rounded bg-gray-800 text-white" />`,
    description: 'Password input field',
    component: (
      <input
        type="password"
        placeholder="Password"
        className="w-full p-2 border border-gray-600 rounded bg-gray-800 text-white"
      />
    ),
  },
  'Email Input': {
    image: placeholderImage,
    code: `<input type="email" placeholder="Email" className="w-full p-2 border border-gray-600 rounded bg-gray-800 text-white" />`,
    description: 'Email input field',
    component: (
      <input
        type="email"
        placeholder="Email"
        className="w-full p-2 border border-gray-600 rounded bg-gray-800 text-white"
      />
    ),
  },
  'Number Input': {
    image: placeholderImage,
    code: `<input type="number" placeholder="Number" className="w-full p-2 border border-gray-600 rounded bg-gray-800 text-white" />`,
    description: 'Number input field',
    component: (
      <input
        type="number"
        placeholder="Number"
        className="w-full p-2 border border-gray-600 rounded bg-gray-800 text-white"
      />
    ),
  },
  'Confirmation Modal': {
    image: placeholderImage,
    code: `<div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
  <div className="bg-white p-6 rounded-lg w-96">
    <h3 className="text-xl font-bold mb-4">Are you sure?</h3>
    <div className="flex justify-end space-x-2">
      <button className="bg-gray-300 px-4 py-2 rounded">Cancel</button>
      <button className="bg-red-500 text-white px-4 py-2 rounded">Delete</button>
    </div>
  </div>
</div>`,
    description: 'Confirmation dialog modal',
    component: (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div className="bg-white p-6 rounded-lg w-96">
          <h3 className="text-xl font-bold mb-4">Are you sure?</h3>
          <div className="flex justify-end space-x-2">
            <button className="bg-gray-300 px-4 py-2 rounded">Cancel</button>
            <button className="bg-red-500 text-white px-4 py-2 rounded">Delete</button>
          </div>
        </div>
      </div>
    ),
  },
  'Info Modal': {
    image: placeholderImage,
    code: `<div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
  <div className="bg-blue-100 p-6 rounded-lg w-96">
    <h3 className="text-xl font-bold mb-4 text-blue-700">Information</h3>
    <p className="mb-4 text-blue-800">This is an informational modal.</p>
    <button className="bg-blue-500 text-white px-4 py-2 rounded">OK</button>
  </div>
</div>`,
    description: 'Informational modal dialog',
    component: (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div className="bg-blue-100 p-6 rounded-lg w-96">
          <h3 className="text-xl font-bold mb-4 text-blue-700">Information</h3>
          <p className="mb-4 text-blue-800">This is an informational modal.</p>
          <button className="bg-blue-500 text-white px-4 py-2 rounded">OK</button>
        </div>
      </div>
    ),
  },
  'Grid Auto-Fill Layout': {
    image: placeholderImage,
    code: `<div className="grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-4">
  <div className="bg-blue-100 p-4 rounded">Item 1</div>
  <div className="bg-blue-200 p-4 rounded">Item 2</div>
  <div className="bg-blue-300 p-4 rounded">Item 3</div>
  <div className="bg-blue-400 p-4 rounded">Item 4</div>
</div>`,
    description: 'Responsive grid that auto-fills columns.',
    component: (
      <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '1rem' }}>
        <div className="bg-blue-100 p-4 rounded">Item 1</div>
        <div className="bg-blue-200 p-4 rounded">Item 2</div>
        <div className="bg-blue-300 p-4 rounded">Item 3</div>
        <div className="bg-blue-400 p-4 rounded">Item 4</div>
      </div>
    ),
  },
  'Masonry Card Layout': {
    image: placeholderImage,
    code: `<div className="columns-2 md:columns-3 gap-4">
  <div className="bg-pink-100 p-4 rounded mb-4">Card 1</div>
  <div className="bg-pink-200 p-4 rounded mb-4">Card 2 (taller)<br/><br/></div>
  <div className="bg-pink-300 p-4 rounded mb-4">Card 3</div>
  <div className="bg-pink-400 p-4 rounded mb-4">Card 4 (tallest)<br/><br/><br/></div>
</div>`,
    description: 'Pinterest-style masonry card layout.',
    component: (
      <div className="columns-2 md:columns-3 gap-4">
        <div className="bg-pink-100 p-4 rounded mb-4">Card 1</div>
        <div className="bg-pink-200 p-4 rounded mb-4">Card 2 (taller)<br/><br/></div>
        <div className="bg-pink-300 p-4 rounded mb-4">Card 3</div>
        <div className="bg-pink-400 p-4 rounded mb-4">Card 4 (tallest)<br/><br/><br/></div>
      </div>
    ),
  },
  'Responsive Hero Sections': {
    image: placeholderImage,
    code: `<section className="flex flex-col md:flex-row items-center justify-between bg-gradient-to-r from-blue-100 to-blue-300 p-8 rounded">
  <div className="mb-6 md:mb-0">
    <h1 className="text-3xl font-bold mb-2">Hero Title</h1>
    <p className="text-lg">Catchy subtitle goes here.</p>
  </div>
  <img src="/images/placeholder.png" alt="Hero" className="w-40 h-40 object-cover rounded-full" />
</section>`,
    description: 'Hero section that adapts to screen size.',
    component: (
      <section className="flex flex-col md:flex-row items-center justify-between bg-gradient-to-r from-blue-100 to-blue-300 p-8 rounded">
        <div className="mb-6 md:mb-0">
          <h1 className="text-3xl font-bold mb-2">Hero Title</h1>
          <p className="text-lg">Catchy subtitle goes here.</p>
        </div>
        <img src="/images/placeholder.png" alt="Hero" className="w-40 h-40 object-cover rounded-full" />
      </section>
    ),
  },
  'Sidebar + Content Split View': {
    image: placeholderImage,
    code: `<div className="flex min-h-[200px]">
  <aside className="w-48 bg-gray-200 p-4">Sidebar</aside>
  <main className="flex-1 bg-white p-4">Main Content</main>
</div>`,
    description: 'Sidebar and main content split horizontally.',
    component: (
      <div className="flex min-h-[200px]">
        <aside className="w-48 bg-gray-200 p-4">Sidebar</aside>
        <main className="flex-1 bg-white p-4">Main Content</main>
      </div>
    ),
  },
  'Tabbed Content Layout': {
    image: placeholderImage,
    code: `<div>
  <div className="flex border-b mb-4">
    <button className="px-4 py-2">Tab 1</button>
    <button className="px-4 py-2">Tab 2</button>
  </div>
  <div className="p-4">Tab content here</div>
</div>`,
    description: 'Tabs for switching between content sections.',
    component: (
      <div>
        <div className="flex border-b mb-4">
          <button className="px-4 py-2">Tab 1</button>
          <button className="px-4 py-2">Tab 2</button>
        </div>
        <div className="p-4">Tab content here</div>
      </div>
    ),
  },
  'Dynamic Section Reveal on Scroll': {
    image: placeholderImage,
    code: `<div className="space-y-8">
  <section className="bg-green-100 p-6 rounded">Section 1</section>
  <section className="bg-green-200 p-6 rounded">Section 2</section>
  <section className="bg-green-300 p-6 rounded">Section 3</section>
</div>`,
    description: 'Sections that could animate in on scroll (static demo).',
    component: (
      <div className="space-y-8">
        <section className="bg-green-100 p-6 rounded">Section 1</section>
        <section className="bg-green-200 p-6 rounded">Section 2</section>
        <section className="bg-green-300 p-6 rounded">Section 3</section>
      </div>
    ),
  },
  'Mobile-First Navigation Layout': {
    image: placeholderImage,
    code: `<nav className="flex flex-col md:flex-row bg-gray-900 text-white p-4 rounded">
  <a href="#" className="py-2 px-4 hover:bg-gray-700 rounded">Home</a>
  <a href="#" className="py-2 px-4 hover:bg-gray-700 rounded">About</a>
  <a href="#" className="py-2 px-4 hover:bg-gray-700 rounded">Contact</a>
</nav>`,
    description: 'Navigation bar optimized for mobile first.',
    component: (
      <nav className="flex flex-col md:flex-row bg-gray-900 text-white p-4 rounded">
        <a href="#" className="py-2 px-4 hover:bg-gray-700 rounded">Home</a>
        <a href="#" className="py-2 px-4 hover:bg-gray-700 rounded">About</a>
        <a href="#" className="py-2 px-4 hover:bg-gray-700 rounded">Contact</a>
      </nav>
    ),
  },
  'Dashboard with Widgets': {
    image: placeholderImage,
    code: `<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
  <div className="bg-white p-4 rounded shadow">Widget 1</div>
  <div className="bg-white p-4 rounded shadow">Widget 2</div>
  <div className="bg-white p-4 rounded shadow">Widget 3</div>
</div>`,
    description: 'Dashboard layout with multiple widgets.',
    component: (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded shadow">Widget 1</div>
        <div className="bg-white p-4 rounded shadow">Widget 2</div>
        <div className="bg-white p-4 rounded shadow">Widget 3</div>
      </div>
    ),
  },
  'Collapsible Panel Layout': {
    image: placeholderImage,
    code: `<div>
  <button className="bg-blue-500 text-white px-4 py-2 rounded mb-2">Toggle Panel</button>
  <div className="bg-blue-100 p-4 rounded">Panel Content</div>
</div>`,
    description: 'Panel that can be collapsed/expanded (static demo).',
    component: (
      <div>
        <button className="bg-blue-500 text-white px-4 py-2 rounded mb-2">Toggle Panel</button>
        <div className="bg-blue-100 p-4 rounded">Panel Content</div>
      </div>
    ),
  },
  'Multi-Column Form Layout': {
    image: placeholderImage,
    code: `<form className="grid grid-cols-1 md:grid-cols-2 gap-4">
  <input type="text" placeholder="First Name" className="p-2 border rounded" />
  <input type="text" placeholder="Last Name" className="p-2 border rounded" />
  <input type="email" placeholder="Email" className="p-2 border rounded md:col-span-2" />
  <button type="submit" className="bg-green-500 text-white p-2 rounded md:col-span-2">Submit</button>
</form>`,
    description: 'Form with multiple columns for fields.',
    component: (
      <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input type="text" placeholder="First Name" className="p-2 border rounded" />
        <input type="text" placeholder="Last Name" className="p-2 border rounded" />
        <input type="email" placeholder="Email" className="p-2 border rounded md:col-span-2" />
        <button type="submit" className="bg-green-500 text-white p-2 rounded md:col-span-2">Submit</button>
      </form>
    ),
  },
  'Text Completion (OpenAI)': {
    image: placeholderImage,
    code: "const response = await fetch('https://api.openai.com/v1/completions', {\n  method: 'POST',\n  headers: {\n    'Authorization': 'Bearer YOUR_API_KEY',\n    'Content-Type': 'application/json',\n  },\n  body: JSON.stringify({\n    model: 'text-davinci-003',\n    prompt: 'Once upon a time...',\n    max_tokens: 50,\n  }),\n});\nconst data = await response.json();\nconsole.log(data.choices[0].text);",
    description: 'OpenAI GPT text completion API call.',
    component: (
      <pre className="bg-gray-900 text-green-300 p-4 rounded overflow-x-auto text-xs">
        {"fetch('https://api.openai.com/v1/completions', { ... })"}
      </pre>
    ),
  },
  'Image Generation (DALL·E)': {
    image: placeholderImage,
    code: "const response = await fetch('https://api.openai.com/v1/images/generations', {\n  method: 'POST',\n  headers: {\n    'Authorization': 'Bearer YOUR_API_KEY',\n    'Content-Type': 'application/json',\n  },\n  body: JSON.stringify({\n    prompt: 'A futuristic cityscape',\n    n: 1,\n    size: '1024x1024',\n  }),\n});\nconst data = await response.json();\nconsole.log(data.data[0].url);",
    description: 'DALL·E image generation API call.',
    component: (
      <pre className="bg-gray-900 text-blue-300 p-4 rounded overflow-x-auto text-xs">
        {"fetch('https://api.openai.com/v1/images/generations', { ... })"}
      </pre>
    ),
  },
  'Sentiment Analysis (Hugging Face)': {
    image: placeholderImage,
    code: "const response = await fetch('https://api-inference.huggingface.co/models/distilbert-base-uncased-finetuned-sst-2-english', {\n  method: 'POST',\n  headers: {\n    'Authorization': 'Bearer YOUR_HF_TOKEN',\n    'Content-Type': 'application/json',\n  },\n  body: JSON.stringify({ inputs: 'I love this product!' }),\n});\nconst data = await response.json();\nconsole.log(data[0]);",
    description: 'Hugging Face sentiment analysis API call.',
    component: (
      <pre className="bg-gray-900 text-yellow-300 p-4 rounded overflow-x-auto text-xs">
        {"fetch('https://api-inference.huggingface.co/models/distilbert-base-uncased-finetuned-sst-2-english', { ... })"}
      </pre>
    ),
  },
  'Language Translation (Google Cloud)': {
    image: placeholderImage,
    code: "const {Translate} = require('@google-cloud/translate').v2;\nconst translate = new Translate({key: 'YOUR_API_KEY'});\nconst [translation] = await translate.translate('Hello world', 'es');\nconsole.log(translation);",
    description: 'Google Cloud language translation API call.',
    component: (
      <pre className="bg-gray-900 text-red-300 p-4 rounded overflow-x-auto text-xs">
        {"translate.translate('Hello world', 'es')"}
      </pre>
    ),
  },
  'Speech-to-Text (Whisper API)': {
    image: placeholderImage,
    code: "const response = await fetch('https://api.openai.com/v1/audio/transcriptions', {\n  method: 'POST',\n  headers: {\n    'Authorization': 'Bearer YOUR_API_KEY',\n  },\n  body: formData, // formData with audio file\n});\nconst data = await response.json();\nconsole.log(data.text);",
    description: 'OpenAI Whisper speech-to-text API call.',
    component: (
      <pre className="bg-gray-900 text-purple-300 p-4 rounded overflow-x-auto text-xs">
        {"fetch('https://api.openai.com/v1/audio/transcriptions', { ... })"}
      </pre>
    ),
  },
  'Text Summarization (Cohere)': {
    image: placeholderImage,
    code: "const response = await fetch('https://api.cohere.ai/v1/summarize', {\n  method: 'POST',\n  headers: {\n    'Authorization': 'Bearer YOUR_API_KEY',\n    'Content-Type': 'application/json',\n  },\n  body: JSON.stringify({\n    text: 'Long text to summarize...',\n  }),\n});\nconst data = await response.json();\nconsole.log(data.summary);",
    description: 'Cohere text summarization API call.',
    component: (
      <pre className="bg-gray-900 text-pink-300 p-4 rounded overflow-x-auto text-xs">
        {"fetch('https://api.cohere.ai/v1/summarize', { ... })"}
      </pre>
    ),
  },
  'AI Chat Interface': {
    image: placeholderImage,
    code: "// Pseudocode for a chat interface\nconst [messages, setMessages] = useState([]);\nconst sendMessage = async (msg) => {\n  const response = await fetch('/api/chat', { ... });\n  const data = await response.json();\n  setMessages([...messages, { role: 'user', content: msg }, { role: 'ai', content: data.reply }]);\n};",
    description: 'Basic AI chat interface logic.',
    component: (
      <pre className="bg-gray-900 text-cyan-300 p-4 rounded overflow-x-auto text-xs">
        {"// Pseudocode for a chat interface\nsendMessage('Hello!')"}
      </pre>
    ),
  },
  'Intent Detection (Dialogflow)': {
    image: placeholderImage,
    code: "const response = await fetch('https://api.dialogflow.com/v1/query?v=20150910', {\n  method: 'POST',\n  headers: {\n    'Authorization': 'Bearer YOUR_API_KEY',\n    'Content-Type': 'application/json',\n  },\n  body: JSON.stringify({\n    query: 'Book a flight',\n    lang: 'en',\n    sessionId: '12345',\n  }),\n});\nconst data = await response.json();\nconsole.log(data.result.metadata.intentName);",
    description: 'Dialogflow intent detection API call.',
    component: (
      <pre className="bg-gray-900 text-orange-300 p-4 rounded overflow-x-auto text-xs">
        {"fetch('https://api.dialogflow.com/v1/query', { ... })"}
      </pre>
    ),
  },
  'Image Classification (Clarifai)': {
    image: placeholderImage,
    code: "const response = await fetch('https://api.clarifai.com/v2/models/general-image-recognition/outputs', {\n  method: 'POST',\n  headers: {\n    'Authorization': 'Key YOUR_API_KEY',\n    'Content-Type': 'application/json',\n  },\n  body: JSON.stringify({\n    inputs: [{ data: { image: { url: 'https://example.com/image.jpg' } } }],\n  }),\n});\nconst data = await response.json();\nconsole.log(data.outputs[0].data.concepts);",
    description: 'Clarifai image classification API call.',
    component: (
      <pre className="bg-gray-900 text-lime-300 p-4 rounded overflow-x-auto text-xs">
        {"fetch('https://api.clarifai.com/v2/models/general-image-recognition/outputs', { ... })"}
      </pre>
    ),
  },
  'Named Entity Recognition (SpaCy)': {
    image: placeholderImage,
    code: "import spacy\nnlp = spacy.load('en_core_web_sm')\ndoc = nlp('Apple is looking at buying U.K. startup for $1 billion')\nfor ent in doc.ents:\n    print(ent.text, ent.label_)",
    description: 'SpaCy named entity recognition example.',
    component: (
      <pre className="bg-gray-900 text-fuchsia-300 p-4 rounded overflow-x-auto text-xs">
        {"import spacy\ndoc = nlp('Apple is looking...')"}
      </pre>
    ),
  },
  'User Authentication Model': {
    image: placeholderImage,
    code: "model User {\n  id        Int      @id @default(autoincrement())\n  email     String   @unique\n  password  String\n  name      String?\n  createdAt DateTime @default(now())\n  updatedAt DateTime @updatedAt\n}",
    description: 'Basic user authentication model (Prisma/SQL style)',
    component: (
      <pre className="bg-gray-900 text-blue-300 p-4 rounded overflow-x-auto text-xs">
        {`model User { id Int @id @default(autoincrement()) email String @unique password String name String? createdAt DateTime @default(now()) updatedAt DateTime @updatedAt }`}
      </pre>
    ),
  },
  'Blog Posts with Tags Model': {
    image: placeholderImage,
    code: "model Post {\n  id        Int      @id @default(autoincrement())\n  title     String\n  content   String\n  author    User     @relation(fields: [authorId], references: [id])\n  authorId  Int\n  tags      Tag[]\n  createdAt DateTime @default(now())\n}\n\nmodel Tag {\n  id    Int    @id @default(autoincrement())\n  name  String @unique\n  posts Post[]\n}",
    description: 'Blog post and tag many-to-many relationship',
    component: (
      <pre className="bg-gray-900 text-green-300 p-4 rounded overflow-x-auto text-xs">
        {`model Post { ... } model Tag { ... }`}
      </pre>
    ),
  },
  'E-commerce Products & Orders Model': {
    image: placeholderImage,
    code: "model Product {\n  id          Int      @id @default(autoincrement())\n  name        String\n  description String\n  price       Float\n  orders      OrderItem[]\n}\n\nmodel Order {\n  id         Int         @id @default(autoincrement())\n  user       User        @relation(fields: [userId], references: [id])\n  userId     Int\n  items      OrderItem[]\n  createdAt  DateTime    @default(now())\n}\n\nmodel OrderItem {\n  id        Int      @id @default(autoincrement())\n  order     Order    @relation(fields: [orderId], references: [id])\n  orderId   Int\n  product   Product  @relation(fields: [productId], references: [id])\n  productId Int\n  quantity  Int\n}",
    description: 'Products, orders, and order items for e-commerce',
    component: (
      <pre className="bg-gray-900 text-yellow-300 p-4 rounded overflow-x-auto text-xs">
        {`model Product { ... } model Order { ... } model OrderItem { ... }`}
      </pre>
    ),
  },
  'Chat Messages with Threads Model': {
    image: placeholderImage,
    code: "model Thread {\n  id        Int       @id @default(autoincrement())\n  title     String\n  messages  Message[]\n}\n\nmodel Message {\n  id        Int      @id @default(autoincrement())\n  content   String\n  sender    User     @relation(fields: [senderId], references: [id])\n  senderId  Int\n  thread    Thread   @relation(fields: [threadId], references: [id])\n  threadId  Int\n  sentAt    DateTime @default(now())\n}",
    description: 'Chat threads and messages',
    component: (
      <pre className="bg-gray-900 text-purple-300 p-4 rounded overflow-x-auto text-xs">
        {`model Thread { ... } model Message { ... }`}
      </pre>
    ),
  },
  'Student-Course Enrollment Model': {
    image: placeholderImage,
    code: "model Student {\n  id        Int        @id @default(autoincrement())\n  name      String\n  email     String     @unique\n  enrollments Enrollment[]\n}\n\nmodel Course {\n  id        Int        @id @default(autoincrement())\n  title     String\n  enrollments Enrollment[]\n}\n\nmodel Enrollment {\n  id        Int      @id @default(autoincrement())\n  student   Student  @relation(fields: [studentId], references: [id])\n  studentId Int\n  course    Course   @relation(fields: [courseId], references: [id])\n  courseId  Int\n  enrolledAt DateTime @default(now())\n}",
    description: 'Student, course, and enrollment join table',
    component: (
      <pre className="bg-gray-900 text-cyan-300 p-4 rounded overflow-x-auto text-xs">
        {`model Student { ... } model Course { ... } model Enrollment { ... }`}
      </pre>
    ),
  },
  'Event Scheduling Model': {
    image: placeholderImage,
    code: "model Event {\n  id        Int      @id @default(autoincrement())\n  title     String\n  start     DateTime\n  end       DateTime\n  location  String\n  organizer User     @relation(fields: [organizerId], references: [id])\n  organizerId Int\n}",
    description: 'Event scheduling with organizer',
    component: (
      <pre className="bg-gray-900 text-pink-300 p-4 rounded overflow-x-auto text-xs">
        {`model Event { ... }`}
      </pre>
    ),
  },
  'Booking System Model': {
    image: placeholderImage,
    code: "model Booking {\n  id        Int      @id @default(autoincrement())\n  user      User     @relation(fields: [userId], references: [id])\n  userId    Int\n  resource  String\n  start     DateTime\n  end       DateTime\n  status    String\n}",
    description: 'Booking system for resources',
    component: (
      <pre className="bg-gray-900 text-orange-300 p-4 rounded overflow-x-auto text-xs">
        {`model Booking { ... }`}
      </pre>
    ),
  },
  'Feedback & Ratings Model': {
    image: placeholderImage,
    code: "model Feedback {\n  id        Int      @id @default(autoincrement())\n  user      User     @relation(fields: [userId], references: [id])\n  userId    Int\n  comment   String\n  rating    Int\n  createdAt DateTime @default(now())\n}",
    description: 'Feedback and ratings for users or products',
    component: (
      <pre className="bg-gray-900 text-lime-300 p-4 rounded overflow-x-auto text-xs">
        {`model Feedback { ... }`}
      </pre>
    ),
  },
  'Notification System Model': {
    image: placeholderImage,
    code: "model Notification {\n  id        Int      @id @default(autoincrement())\n  user      User     @relation(fields: [userId], references: [id])\n  userId    Int\n  message   String\n  read      Boolean  @default(false)\n  createdAt DateTime @default(now())\n}",
    description: 'Notification system for users',
    component: (
      <pre className="bg-gray-900 text-fuchsia-300 p-4 rounded overflow-x-auto text-xs">
        {`model Notification { ... }`}
      </pre>
    ),
  },
  'Project & Task Management Model': {
    image: placeholderImage,
    code: "model Project {\n  id        Int      @id @default(autoincrement())\n  name      String\n  tasks     Task[]\n}\n\nmodel Task {\n  id        Int      @id @default(autoincrement())\n  title     String\n  completed Boolean  @default(false)\n  project   Project  @relation(fields: [projectId], references: [id])\n  projectId Int\n}",
    description: 'Projects with related tasks',
    component: (
      <pre className="bg-gray-900 text-blue-400 p-4 rounded overflow-x-auto text-xs">
        {`model Project { ... } model Task { ... }`}
      </pre>
    ),
  },
};

const badgeComponents = [
  {
    id: 'status-badge',
    title: 'Status Badge',
    description: 'Status indicator badge',
    component: (
      <span className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-800">Active</span>
    ),
    code: `<span className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-800">Active</span>`,
    category: 'badge'
  },
  {
    id: 'notification-badge',
    title: 'Notification Badge',
    description: 'Notification counter badge',
    component: (
      <span className="px-2 py-1 text-xs rounded-full bg-red-100 text-red-800">3</span>
    ),
    code: `<span className="px-2 py-1 text-xs rounded-full bg-red-100 text-red-800">3</span>`,
    category: 'badge'
  },
  {
    id: 'feature-tag',
    title: 'Feature Tag',
    description: 'Feature indicator tag',
    component: (
      <span className="px-3 py-1 text-sm rounded-full bg-blue-100 text-blue-800">New Feature</span>
    ),
    code: `<span className="px-3 py-1 text-sm rounded-full bg-blue-100 text-blue-800">New Feature</span>`,
    category: 'badge'
  },
  {
    id: 'category-tag',
    title: 'Category Tag',
    description: 'Category indicator tag',
    component: (
      <span className="px-3 py-1 text-sm rounded-full bg-purple-100 text-purple-800">Technology</span>
    ),
    code: `<span className="px-3 py-1 text-sm rounded-full bg-purple-100 text-purple-800">Technology</span>`,
    category: 'badge'
  },
  {
    id: 'skill-tag',
    title: 'Skill Tag',
    description: 'Skill indicator tag',
    component: (
      <span className="px-3 py-1 text-sm rounded-full bg-gray-200 text-gray-800">React</span>
    ),
    code: `<span className="px-3 py-1 text-sm rounded-full bg-gray-200 text-gray-800">React</span>`,
    category: 'badge'
  },
  {
    id: 'removable-tag',
    title: 'Removable Tag',
    description: 'Tag with remove button',
    component: (
      <span className="inline-flex items-center px-3 py-1 text-sm rounded-full bg-yellow-100 text-yellow-800">
        <span>Filter</span>
        <button className="ml-2 text-yellow-600 hover:text-yellow-800">×</button>
      </span>
    ),
    code: `<span className="inline-flex items-center px-3 py-1 text-sm rounded-full bg-yellow-100 text-yellow-800">
  <span>Filter</span>
  <button className="ml-2 text-yellow-600 hover:text-yellow-800">×</button>
</span>`,
    category: 'badge'
  }
];

// Restore ModalPreviewWrapper definition above ComponentsPage
const ModalPreviewWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="w-full h-40 border border-gray-600 overflow-y-auto relative p-4 bg-gray-950 rounded-lg flex items-center justify-center">
      {children}
    </div>
  );
};

export default function ComponentsPage() {
    const [selectedCategory, setSelectedCategory] = useState<string>('Buttons');
    const [selectedSubcategory, setSelectedSubcategory] = useState<string>('');
    const [expandedCategory, setExpandedCategory] = useState<string>('');
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [copiedCode, setCopiedCode] = useState<string>('');
    const [showCode, setShowCode] = useState<string | null>(null);
    const [openModal, setOpenModal] = useState<string | null>(null);

    const copyToClipboard = async (code: string, id: string) => {
        try {
            await navigator.clipboard.writeText(code);
            setCopiedCode(id);
            setTimeout(() => setCopiedCode(''), 2000);
        } catch (err) {
            console.error('Failed to copy code:', err);
        }
    };

    useEffect(() => {
        const styleSheet = document.createElement('style');
        styleSheet.textContent = buttonStyles + cardStyles;
        document.head.appendChild(styleSheet);

        return () => {
            document.head.removeChild(styleSheet);
        };
    }, []);

    const handleCategoryClick = (categoryTitle: string) => {
        // Special handling for 'AI Tools' which has a group subcategory
        if (categoryTitle === 'AI Tools') {
            setSelectedSubcategory('Tools');
            setExpandedCategory(categoryTitle);
        } else {
        setExpandedCategory(expandedCategory === categoryTitle ? '' : categoryTitle);
        }
    };

    const handleSubcategoryClick = (subcategoryTitle: string) => {
        // If the subcategory is 'Tools', set it as the selected subcategory
        if (subcategoryTitle === 'Tools') {
            setSelectedSubcategory('Tools');
        } else {
        setSelectedSubcategory(subcategoryTitle);
        }
    };

    const renderContent = () => {
        if (!selectedSubcategory) return '';
        
        // Debug log for selectedSubcategory
        console.log('DEBUG: selectedSubcategory =', selectedSubcategory);
        
        switch (selectedSubcategory) {
            case 'Buttons': {
            return (
                <div className="p-6">
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-2xl font-bold">Button Collection</h2>
                        <button
                                onClick={() => setSelectedSubcategory('')}
                            className="text-gray-400 hover:text-white"
                        >
                            Close
                        </button>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {Object.entries(buttonCodeExamples).map(([name, { code, description }]) => (
                                <div key={name} className="bg-gray-800 p-6 rounded-lg">
                                    <h3 className="text-lg font-semibold mb-4">{name}</h3>
                            <div className="flex justify-center mb-4">
                                        <div className="button-preview-container w-full max-w-sm flex justify-center">
                                             {name === 'Flip Button' ? (
                                                <div className={`${getButtonClassName(name)} w-full max-w-sm`}>
                                                    <div className="flip-button-inner">
                                                        <div className="flip-button-front">{name}</div>
                                                        <div className="flip-button-back">Back</div>
                                                    </div>
                                                </div>
                                            ) : name === 'Icon Button' ? (
                                                <button className={`${getButtonClassName(name)} w-full max-w-sm`}>
                                                    <FaRocket />
                                                </button>
                                            ) : (
                                                <button className={`${getButtonClassName(name)} w-full max-w-sm`}>{name}</button>
                                            )}
                                        </div>
                                    </div>
                                    <p className="text-gray-400 mb-4 flex-grow">{description}</p>
                                    <div className="flex justify-center mt-auto">
                                <button
                                            onClick={() => setShowCode(showCode === name ? null : name)}
                                            className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm hover:bg-blue-700 transition-colors"
                                        >
                                            {showCode === name ? 'Hide Code' : 'Show Code'}
                                </button>
                                <button
                                            onClick={() => copyToClipboard(code, name)}
                                            className={`ml-2 p-2 text-gray-400 hover:text-white ${showCode === name ? '' : 'hidden'}`}
                                        >
                                            {copiedCode === name ? <Check className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
                                </button>
                                        {showCode === name && (
                                            <pre className="bg-gray-900 p-4 rounded-lg overflow-x-auto mt-2">
                                                <code>{code}</code>
                            </pre>
                                        )}
                        </div>
                                </div>
                            ))}
                    </div>
                </div>
            );
            }
            case 'Cards': {
                const cardKeys: string[] = Object.keys(cardCodeExamples);
            return (
                <div className="p-6">
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-2xl font-bold">Card Collection</h2>
                        <button
                                 onClick={() => setSelectedSubcategory('')}
                            className="text-gray-400 hover:text-white"
                        >
                            Close
                        </button>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {cardKeys.map(name => {
                                const { code, description } = cardCodeExamples[name];
                                return (
                            <div key={name} className="bg-gray-800 p-6 rounded-lg">
                                <h3 className="text-lg font-semibold mb-4">{name}</h3>
                                <div className="flex justify-center mb-4">
                                                 <div className={`${getCardClassName(name)} w-full max-w-sm`}>
                                                             {name}
                                                </div>
                                                </div>
                                        <p className="text-gray-400 mb-4 flex-grow">{description}</p>
                                        <div className="flex justify-center mt-auto">
                                            <button
                                                onClick={() => setShowCode(showCode === name ? null : name)}
                                                className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm hover:bg-blue-700 transition-colors"
                                            >
                                                {showCode === name ? 'Hide Code' : 'Show Code'}
                                            </button>
                                            <button
                                                onClick={() => copyToClipboard(code, name)}
                                                className={`ml-2 p-2 text-gray-400 hover:text-white ${showCode === name ? '' : 'hidden'}`}
                                            >
                                                {copiedCode === name ? <Check className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
                                            </button>
                                            {showCode === name && (
                                                <pre className="bg-gray-900 p-4 rounded-lg overflow-x-auto mt-2">
                                                    <code>{code}</code>
                                                </pre>
                                            )}
                                            </div>
                                            </div>
                                );
                            })}
                                    </div>
                                </div>
                );
            }
            case 'AI API Snippets': {
                const apiSnippetKeys: string[] = [
                    'Text Completion (OpenAI)',
                    'Image Generation (DALL·E)',
                    'Sentiment Analysis (Hugging Face)',
                    'Language Translation (Google Cloud)',
                    'Speech-to-Text (Whisper API)',
                    'Text Summarization (Cohere)',
                    'AI Chat Interface',
                    'Intent Detection (Dialogflow)',
                    'Image Classification (Clarifai)',
                    'Named Entity Recognition (SpaCy)'
                ];
                return (
                    <div className="p-6">
                        <div className="flex items-center justify-between mb-6">
                            <h2 className="text-2xl font-bold">AI API Snippets Collection</h2>
                            <button
                                onClick={() => setSelectedSubcategory('')}
                                className="text-gray-400 hover:text-white"
                            >
                                Close
                            </button>
                                     </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {apiSnippetKeys.map((name: string) => {
                                const details = componentDetails[name];
                                if (!details) return null;
                                return (
                                    <div key={name} className="bg-gray-800 p-8 rounded-lg flex flex-col h-full transform transition-all duration-300 hover:scale-105 hover:shadow-lg"
                                        style={{
                                            animation: `fadeIn 0.5s ease-out ${apiSnippetKeys.indexOf(name) * 0.1}s both`
                                        }}
                                    >
                                        <h3 className="text-lg font-semibold mb-4">{name}</h3>
                                        <div className="flex justify-center mb-4 flex-grow items-center">
                                            <div className="w-full">{details.component}</div>
                                        </div>
                                        <p className="text-gray-400 mb-4 flex-grow">{details.description}</p>
                                        <div className="flex justify-center mt-auto">
                                    <button
                                             onClick={() => setShowCode(showCode === name ? null : name)}
                                                className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm hover:bg-blue-700 transition-colors"
                                         >
                                             {showCode === name ? 'Hide Code' : 'Show Code'}
                                    </button>
                                    <button
                                                onClick={() => copyToClipboard(details.code, name)}
                                                className={`ml-2 p-2 text-gray-400 hover:text-white ${showCode === name ? '' : 'hidden'}`}
                                         >
                                             {copiedCode === name ? <Check className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
                                    </button>
                                         {showCode === name && (
                                             <pre className="bg-gray-900 p-4 rounded-lg overflow-x-auto mt-2">
                                                    <code>{details.code}</code>
                                             </pre>
                                         )}
                                </div>
                                 </div>
                                );
                            })}
                         </div>
                     </div>
                 );
            }
            case 'Navbars': {
                const navbarKeys: string[] = Object.keys(componentDetails).filter(key => key.toLowerCase().includes('navbar'));
                return (
                    <div className="p-6">
                        <div className="flex items-center justify-between mb-6">
                            <h2 className="text-2xl font-bold">Navbar Collection</h2>
                            <button
                                onClick={() => setSelectedSubcategory('')}
                                className="text-gray-400 hover:text-white"
                            >
                                Close
                            </button>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {navbarKeys.map((name: string) => {
                                const details = componentDetails[name];
                                return (
                                    <div key={name} className="bg-gray-800 p-8 rounded-lg flex flex-col h-full transform transition-all duration-300 hover:scale-105 hover:shadow-lg"
                                        style={{
                                            animation: `fadeIn 0.5s ease-out ${navbarKeys.indexOf(name) * 0.1}s both`
                                        }}
                                    >
                                        <h3 className="text-lg font-semibold mb-4">{name}</h3>
                                        <div className="flex justify-center mb-4 flex-grow items-center">
                                            <div className="w-full">{details.component}</div>
                                        </div>
                                        <p className="text-gray-400 mb-4 flex-grow">{details.description}</p>
                                        <div className="flex justify-center mt-auto">
                                            <button
                                                onClick={() => setShowCode(showCode === name ? null : name)}
                                                className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm hover:bg-blue-700 transition-colors"
                                            >
                                                {showCode === name ? 'Hide Code' : 'Show Code'}
                                            </button>
                                            <button
                                                onClick={() => copyToClipboard(details.code, name)}
                                                className={`ml-2 p-2 text-gray-400 hover:text-white ${showCode === name ? '' : 'hidden'}`}
                                            >
                                                {copiedCode === name ? <Check className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
                                            </button>
                                            {showCode === name && (
                                                <pre className="bg-gray-900 p-4 rounded-lg overflow-x-auto mt-2">
                                                    <code>{details.code}</code>
                                </pre>
                                            )}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                );
            }
            case 'Inputs': {
                const inputKeys: string[] = Object.keys(componentDetails).filter(key => key.toLowerCase().includes('input'));
                return (
                    <div className="p-6">
                        <div className="flex items-center justify-between mb-6">
                            <h2 className="text-2xl font-bold">Input Collection</h2>
                            <button
                                onClick={() => setSelectedSubcategory('')}
                                className="text-gray-400 hover:text-white"
                            >
                                Close
                            </button>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {inputKeys.map(name => {
                                const details = componentDetails[name];
                                return (
                                    <div key={name} className="bg-gray-800 p-6 rounded-lg">
                                        <h3 className="text-lg font-semibold mb-4">{name}</h3>
                                        <div className="flex justify-center mb-4">
                                            <div className="w-full h-40 border border-gray-600 overflow-y-auto relative p-4 bg-gray-950 rounded-lg flex items-center justify-center">
                                                {details.component}
                                            </div>
                                        </div>
                                        <p className="text-gray-400 mb-4">{details.description}</p>
                                        <div className="flex justify-center mt-auto">
                                            <button
                                                onClick={() => setShowCode(showCode === name ? null : name)}
                                                className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm hover:bg-blue-700 transition-colors"
                                            >
                                                {showCode === name ? 'Hide Code' : 'Show Code'}
                                            </button>
                                            <button
                                                onClick={() => copyToClipboard(details.code, name)}
                                                className={`ml-2 p-2 text-gray-400 hover:text-white ${showCode === name ? '' : 'hidden'}`}
                                            >
                                                {copiedCode === name ? <Check className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
                                            </button>
                                            {showCode === name && (
                                                <pre className="bg-gray-900 p-4 rounded-lg overflow-x-auto mt-2">
                                                    <code>{details.code}</code>
                                                </pre>
                                            )}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                );
            }
            case 'Modals': {
                const modalKeys: string[] = Object.keys(componentDetails).filter(key => key.toLowerCase().includes('modal') && key !== 'Basic Modal');
                return (
                    <div className="p-6">
                        <div className="flex items-center justify-between mb-6">
                            <h2 className="text-2xl font-bold">Modal Collection</h2>
                            <button
                                onClick={() => setSelectedSubcategory('')}
                                className="text-gray-400 hover:text-white"
                            >
                                Close
                            </button>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {modalKeys.map(name => {
                                const details = componentDetails[name];
                                return (
                                    <div key={name} className="bg-gray-800 p-6 rounded-lg">
                                        <h3 className="text-lg font-semibold mb-4">{name}</h3>
                                        <div className="flex justify-center mb-4">
                                            <button
                                                className="bg-blue-500 text-white px-4 py-2 rounded"
                                                onClick={() => setOpenModal(name)}
                                            >
                                                Preview Modal
                                            </button>
                                            {openModal === name && (
                                                <div className="fixed inset-0 z-50 flex items-center justify-center">
                                                    {/* Clone the modal and inject a close handler if possible */}
                                                    {React.cloneElement(details.component as React.ReactElement, {
                                                        closeModal: () => setOpenModal(null)
                                                    })}
                                                    {/* Overlay to close modal on click */}
                                                    <div
                                                        className="fixed inset-0 bg-black bg-opacity-50 z-40"
                                                        onClick={() => setOpenModal(null)}
                                                    />
                                                </div>
                                            )}
                                        </div>
                                        <p className="text-gray-400 mb-4">{details.description}</p>
                                        <div className="flex justify-center mt-auto">
                                            <button
                                                onClick={() => setShowCode(showCode === name ? null : name)}
                                                className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm hover:bg-blue-700 transition-colors"
                                            >
                                                {showCode === name ? 'Hide Code' : 'Show Code'}
                                            </button>
                                            <button
                                                onClick={() => copyToClipboard(details.code, name)}
                                                className={`ml-2 p-2 text-gray-400 hover:text-white ${showCode === name ? '' : 'hidden'}`}
                                            >
                                                {copiedCode === name ? <Check className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
                                            </button>
                                            {showCode === name && (
                                                <pre className="bg-gray-900 p-4 rounded-lg overflow-x-auto mt-2">
                                                    <code>{details.code}</code>
                                                </pre>
                                            )}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                );
            }
            case 'Forms': {
                const formKeys: string[] = Object.keys(componentDetails).filter(key => key.toLowerCase().includes('form'));
                return (
                    <div className="p-6">
                        <div className="flex items-center justify-between mb-6">
                            <h2 className="text-2xl font-bold">Form Collection</h2>
                            <button
                                onClick={() => setSelectedSubcategory('')}
                                className="text-gray-400 hover:text-white"
                            >
                                Close
                            </button>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {formKeys.map(name => {
                                const details = componentDetails[name];
                                return (
                                    <div key={name} className="bg-gray-800 p-6 rounded-lg">
                                        <h3 className="text-lg font-semibold mb-4">{name}</h3>
                                        <div className="flex justify-center mb-4">
                                            <div className="w-full">{details.component}</div>
                                        </div>
                                        <p className="text-gray-400 mb-4">{details.description}</p>
                                        <div className="flex justify-center mt-auto">
                                            <button
                                                onClick={() => setShowCode(showCode === name ? null : name)}
                                                className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm hover:bg-blue-700 transition-colors"
                                            >
                                                {showCode === name ? 'Hide Code' : 'Show Code'}
                                            </button>
                                            <button
                                                onClick={() => copyToClipboard(details.code, name)}
                                                className={`ml-2 p-2 text-gray-400 hover:text-white ${showCode === name ? '' : 'hidden'}`}
                                            >
                                                {copiedCode === name ? <Check className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
                                            </button>
                                            {showCode === name && (
                                                <pre className="bg-gray-900 p-4 rounded-lg overflow-x-auto mt-2">
                                                    <code>{details.code}</code>
                                                </pre>
                                            )}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                );
            }
            case 'Badges/Tags': {
                const badgeComponentsFiltered = badgeComponents.filter(component => component.category === 'badge');
                return (
                    <div className="p-6">
                        <div className="flex items-center justify-between mb-6">
                            <h2 className="text-2xl font-bold">Badge/Tag Collection</h2>
                            <button
                                onClick={() => setSelectedSubcategory('')}
                                className="text-gray-400 hover:text-white"
                            >
                                Close
                            </button>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {badgeComponentsFiltered.map(component => (
                                <div key={component.id} className="bg-gray-800 p-6 rounded-lg">
                                    <h3 className="text-lg font-semibold mb-4">{component.title}</h3>
                                    <div className="flex justify-center mb-4">
                                        <div className="w-full">
                                            {component.component}
                                        </div>
                                    </div>
                                    <p className="text-gray-400 mb-4">{component.description}</p>
                                    <div className="flex justify-center mt-auto">
                                        <button
                                            onClick={() => setShowCode(showCode === component.id ? null : component.id)}
                                            className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm hover:bg-blue-700 transition-colors"
                                        >
                                            {showCode === component.id ? 'Hide Code' : 'Show Code'}
                                        </button>
                                        <button
                                            onClick={() => copyToClipboard(component.code, component.id)}
                                            className={`ml-2 p-2 text-gray-400 hover:text-white ${showCode === component.id ? '' : 'hidden'}`}
                                        >
                                            {copiedCode === component.id ? <Check className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
                                        </button>
                                        {showCode === component.id && (
                                            <pre className="bg-gray-900 p-4 rounded-lg overflow-x-auto mt-2">
                                                <code>{component.code}</code>
                                            </pre>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                );
            }
            case 'Smart Layouts': {
                const smartLayoutKeys: string[] = [
                'Grid Auto-Fill Layout',
                'Masonry Card Layout',
                'Responsive Hero Sections',
                'Sidebar + Content Split View',
                'Tabbed Content Layout',
                'Dynamic Section Reveal on Scroll',
                'Mobile-First Navigation Layout',
                'Dashboard with Widgets',
                'Collapsible Panel Layout',
                'Multi-Column Form Layout',
              ];
              return (
                <div className="p-6">
                  <h2 className="text-2xl font-bold mb-6 text-primary-400">Smart Layouts</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {smartLayoutKeys.map((key) => {
                      const component = componentDetails[key];
                      return (
                        <div key={key} className="bg-gray-800 rounded-lg p-4">
                          <h3 className="text-lg font-semibold mb-2">{key}</h3>
                          <p className="text-gray-400 mb-4">{component.description}</p>
                                        <div className="flex justify-center mt-auto">
                            <button
                              onClick={() => setShowCode(showCode === key ? null : key)}
                                                className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm hover:bg-blue-700 transition-colors"
                            >
                              {showCode === key ? 'Hide Code' : 'Show Code'}
                            </button>
                            <button
                              onClick={() => copyToClipboard(component.code, key)}
                                                className={`ml-2 p-2 text-gray-400 hover:text-white ${showCode === key ? '' : 'hidden'}`}
                            >
                              {copiedCode === key ? <Check className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
                            </button>
                            {showCode === key && (
                              <pre className="bg-gray-900 p-4 rounded-lg overflow-x-auto mt-2">
                                <code>{component.code}</code>
                              </pre>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            }
            case 'DB Models Generator': {
                const dbModelKeys: string[] = [
                'User Authentication Model',
                'Blog Posts with Tags Model',
                'E-commerce Products & Orders Model',
                'Chat Messages with Threads Model',
                'Student-Course Enrollment Model',
                'Event Scheduling Model',
                'Booking System Model',
                'Feedback & Ratings Model',
                'Notification System Model',
                'Project & Task Management Model',
              ];
                const dbModelsExist = dbModelKeys.some((key: string) => componentDetails[key]);
              if (!dbModelsExist) {
                return (
                  <div className="p-6 text-red-400">
                    No DB model components found in componentDetails. Check your keys and data.
                  </div>
                );
              }
              return (
                <div className="p-6">
                  <h2 className="text-2xl font-bold mb-6 text-primary-400">DB Models Generator</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {dbModelKeys.map((key) => {
                      const component = componentDetails[key];
                      if (!component) {
                        return (
                          <div key={key} className="bg-gray-800 rounded-lg p-4 text-red-400">
                            Missing: {key}
                          </div>
                        );
                      }
                      return (
                        <div key={key} className="bg-gray-800 rounded-lg p-4">
                          <h3 className="text-lg font-semibold mb-2">{key}</h3>
                          <p className="text-gray-400 mb-4">{component.description}</p>
                                        <div className="flex justify-center mt-auto">
                            <button
                              onClick={() => setShowCode(showCode === key ? null : key)}
                                                className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm hover:bg-blue-700 transition-colors"
                            >
                              {showCode === key ? 'Hide Code' : 'Show Code'}
                            </button>
                            <button
                              onClick={() => copyToClipboard(component.code, key)}
                                                className={`ml-2 p-2 text-gray-400 hover:text-white ${showCode === key ? '' : 'hidden'}`}
                            >
                              {copiedCode === key ? <Check className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
                            </button>
                            {showCode === key && (
                              <pre className="bg-gray-900 p-4 rounded-lg overflow-x-auto mt-2">
                                <code>{component.code}</code>
                              </pre>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            }
            case 'API Endpoints': {
                const apiSnippetKeys: string[] = [
                    'RESTful API Endpoint',
                    'GraphQL Query/Mutation',
                    'WebSocket Connection',
                    'Authentication Middleware',
                    'Rate Limiting',
                    'Error Handling',
                    'File Upload',
                    'Pagination',
                    'Caching',
                    'Webhook Integration',
              ];
              return (
                <div className="p-6">
                  <div className="flex items-center justify-between mb-6">
                            <h2 className="text-2xl font-bold">API Endpoints</h2>
                    <button
                      onClick={() => setSelectedSubcategory('')}
                      className="text-gray-400 hover:text-white"
                    >
                      Close
                    </button>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {apiSnippetKeys.map(name => {
                      const details = componentDetails[name];
                      return (
                        <div key={name} className="bg-gray-800 p-6 rounded-lg">
                          <h3 className="text-lg font-semibold mb-4">{name}</h3>
                          <div className="flex justify-center mb-4">
                            <div className="w-full">{details.component}</div>
                          </div>
                          <p className="text-gray-400 mb-4">{details.description}</p>
                                        <div className="flex justify-center mt-auto">
                            <button
                              onClick={() => setShowCode(showCode === name ? null : name)}
                                                className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm hover:bg-blue-700 transition-colors"
                            >
                              {showCode === name ? 'Hide Code' : 'Show Code'}
                            </button>
                            <button
                              onClick={() => copyToClipboard(details.code, name)}
                                                className={`ml-2 p-2 text-gray-400 hover:text-white ${showCode === name ? '' : 'hidden'}`}
                            >
                              {copiedCode === name ? <Check className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
                            </button>
                            {showCode === name && (
                              <pre className="bg-gray-900 p-4 rounded-lg overflow-x-auto mt-2">
                                <code>{details.code}</code>
                              </pre>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            }
            case 'Reusable Hooks AI': {
                const hooks: Array<{
                    name: string;
                    description: string;
                    code: string;
                }> = [
                {
                  name: 'useChatGPT',
                  description: 'For conversational UIs',
                  code: `import { useState } from 'react';\nexport function useChatGPT(apiKey) {\n  const [messages, setMessages] = useState([]);\n  const sendMessage = async (msg) => {\n    const response = await fetch('https://api.openai.com/v1/chat/completions', {\n      method: 'POST',\n      headers: {\n        'Authorization': 'Bearer ' + apiKey,\n        'Content-Type': 'application/json',\n      },\n      body: JSON.stringify({\n        model: 'gpt-3.5-turbo',\n        messages: [...messages, { role: 'user', content: msg }],\n      }),\n    });\n    const data = await response.json();\n    setMessages([...messages, { role: 'user', content: msg }, { role: 'assistant', content: data.choices[0].message.content }]);\n  };\n  return { messages, sendMessage };\n}`
                },
                {
                  name: 'useAutoComplete',
                  description: 'For search suggestions',
                  code: `import { useState } from 'react';\nexport function useAutoComplete(fetchSuggestions) {\n  const [suggestions, setSuggestions] = useState([]);\n  const getSuggestions = async (input) => {\n    const result = await fetchSuggestions(input);\n    setSuggestions(result);\n  };\n  return { suggestions, getSuggestions };\n}`
                    }
                ];
                return (
                    <div className="p-6">
                        <div className="flex items-center justify-between mb-6">
                            <h2 className="text-2xl font-bold">Reusable Hooks</h2>
                            <button
                                onClick={() => setSelectedSubcategory('')}
                                className="text-gray-400 hover:text-white"
                            >
                                Close
                            </button>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {hooks.map((hook) => (
                                <div key={hook.name} className="bg-gray-800 p-6 rounded-lg">
                                    <h3 className="text-lg font-semibold mb-4">{hook.name}</h3>
                                    <p className="text-gray-400 mb-4">{hook.description}</p>
                                    <div className="flex justify-center mt-auto">
                                        <button
                                            onClick={() => setShowCode(showCode === hook.name ? null : hook.name)}
                                            className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm hover:bg-blue-700 transition-colors"
                                        >
                                            {showCode === hook.name ? 'Hide Code' : 'Show Code'}
                                        </button>
                                        <button
                                            onClick={() => copyToClipboard(hook.code, hook.name)}
                                            className={`ml-2 p-2 text-gray-400 hover:text-white ${showCode === hook.name ? '' : 'hidden'}`}
                                        >
                                            {copiedCode === hook.name ? <Check className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
                                        </button>
                                        {showCode === hook.name && (
                                            <pre className="bg-gray-900 p-4 rounded-lg overflow-x-auto mt-2 text-xs">
                                                <code>{hook.code}</code>
                                            </pre>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                );
            }
            case 'Tools': {
                const freeTools = [
                    {
                        name: 'ChatGPT (Free Plan)',
                        description: 'AI chatbot (OpenAI)',
                        tier: 'GPT-3.5 available free',
                        icon: '🤖'
                    },
                    {
                        name: 'Google Bard',
                        description: "Google's conversational AI",
                        tier: 'Free',
                        icon: '🔍'
                    },
                    {
                        name: 'Hugging Face Spaces',
                        description: 'AI models for NLP, vision, etc.',
                        tier: 'Free with public spaces',
                        icon: '🤗'
                    },
                    {
                        name: 'Perplexity AI',
                        description: 'AI search assistant',
                        tier: 'Free (Pro plan available)',
                        icon: '❓'
                    },
                    {
                        name: 'Canva AI (Magic Design)',
                        description: 'AI-powered design assistant',
                        tier: 'Free with limited credits',
                        icon: '🎨'
                    },
                    {
                        name: 'Krita + GMIC AI',
                        description: 'Free AI-based image editing',
                        tier: 'Open-source, free',
                        icon: '🖌️'
                    },
                    {
                        name: 'Remove.bg',
                        description: 'Background remover',
                        tier: 'Free with low-res limit',
                        icon: '✂️'
                    },
                    {
                        name: 'D-ID',
                        description: 'Talking avatar generator',
                        tier: 'Free with watermark',
                        icon: '👤'
                    },
                    {
                        name: 'Illustroke',
                        description: 'Text-to-vector generator',
                        tier: 'Free with watermark',
                        icon: '🎯'
                    },
                    {
                        name: 'Notion AI',
                        description: 'AI assistant for note-taking',
                        tier: 'Free trial for Notion users (7 days)',
                        icon: '📝'
                    }
                ];

                const paidTools = [
                    {
                        name: 'ChatGPT Plus',
                        description: 'GPT-4, advanced features',
                        tier: '$20/month, no free trial',
                        icon: '✨'
                    },
                    {
                        name: 'Midjourney',
                        description: 'Text-to-image generation',
                        tier: 'No free trial currently',
                        icon: '🎨'
                    },
                    {
                        name: 'Jasper AI',
                        description: 'AI content writer',
                        tier: '7-day free trial',
                        icon: '✍️'
                    },
                    {
                        name: 'Copy.ai',
                        description: 'Marketing content generation',
                        tier: '7-day free trial',
                        icon: '📄'
                    },
                    {
                        name: 'Writesonic',
                        description: 'Blog & ad content generator',
                        tier: 'Free with credits, then paid',
                        icon: '📝'
                    },
                    {
                        name: 'Runway ML',
                        description: 'Video editing with AI',
                        tier: 'Free trial, then $12/month',
                        icon: '🎬'
                    },
                    {
                        name: 'Synthesia',
                        description: 'AI avatar videos',
                        tier: 'Paid only, no trial',
                        icon: '🎥'
                    },
                    {
                        name: 'Descript',
                        description: 'AI audio/video editing',
                        tier: 'Free with limited export time',
                        icon: '🎙️'
                    },
                    {
                        name: 'Pictory',
                        description: 'AI video from text',
                        tier: '3 free video projects',
                        icon: '🎞️'
                    },
                    {
                        name: 'Surfer SEO',
                        description: 'SEO + AI writing tool',
                        tier: '7-day money-back guarantee (no free tier)',
                        icon: '📊'
                    }
                ];

              return (
                <div className="p-6">
                        <div className="flex items-center justify-between mb-6">
                            <h2 className="text-2xl font-bold">AI Tools Collection</h2>
                          <button
                                onClick={() => setSelectedSubcategory('')}
                                className="text-gray-400 hover:text-white"
                          >
                                Close
                          </button>
                        </div>

                        {/* Free Tools Section */}
                        <div className="mb-8">
                            <h3 className="text-xl font-semibold mb-4 flex items-center">
                                <span className="mr-2">🎁</span> Free or Freemium AI Tools
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {freeTools.map((tool, index) => (
                                    <div
                                        key={tool.name}
                                        className="bg-gray-800 p-6 rounded-lg transform transition-all duration-300 hover:scale-105 hover:shadow-lg"
                                        style={{
                                            animation: `fadeIn 0.5s ease-out ${index * 0.1}s both`
                                        }}
                                    >
                                        <div className="flex items-center mb-4">
                                            <span className="text-2xl mr-3">{tool.icon}</span>
                                            <h4 className="text-lg font-semibold">{tool.name}</h4>
                                        </div>
                                        <p className="text-gray-400 mb-2">{tool.description}</p>
                                        <div className="flex items-center text-sm text-green-400">
                                            <span className="mr-2">🎯</span>
                                            {tool.tier}
                        </div>
                      </div>
                    ))}
                  </div>
                        </div>

                        {/* Paid Tools Section */}
                        <div>
                            <h3 className="text-xl font-semibold mb-4 flex items-center">
                                <span className="mr-2">💳</span> Paid AI Tools
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {paidTools.map((tool, index) => (
                                    <div
                                        key={tool.name}
                                        className="bg-gray-800 p-6 rounded-lg transform transition-all duration-300 hover:scale-105 hover:shadow-lg"
                                        style={{
                                            animation: `fadeIn 0.5s ease-out ${index * 0.1}s both`
                                        }}
                                    >
                                        <div className="flex items-center mb-4">
                                            <span className="text-2xl mr-3">{tool.icon}</span>
                                            <h4 className="text-lg font-semibold">{tool.name}</h4>
                                        </div>
                                        <p className="text-gray-400 mb-2">{tool.description}</p>
                                        <div className="flex items-center text-sm text-blue-400">
                                            <span className="mr-2">💰</span>
                                            {tool.tier}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <style jsx>{`
                            @keyframes fadeIn {
                                from {
                                    opacity: 0;
                                    transform: translateY(20px);
                                }
                                to {
                                    opacity: 1;
                                    transform: translateY(0);
                                }
                            }
                        `}</style>
                </div>
              );
            }
            default: {
        const componentDetail = componentDetails[selectedSubcategory];
                if (!componentDetail) return '';

        return (
            <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                    <div>
                        <h2 className="text-2xl font-bold">{selectedSubcategory}</h2>
                        <p className="text-gray-400 mt-1">{componentDetail.description}</p>
                    </div>
                    <button
                                onClick={() => setSelectedSubcategory('')}
                        className="text-gray-400 hover:text-white"
                    >
                        Close
                    </button>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className="space-y-6">
                        <div className="bg-gray-800 p-8 rounded-lg flex items-center justify-center">
                            <div className="w-full max-w-md">
                                         {selectedSubcategory.endsWith('Modal') ? (
                                             <ModalPreviewWrapper>{componentDetail.component}</ModalPreviewWrapper>
                                         ) : (
                                            componentDetail.component
                                         )}
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        );
            }
        }
    };

  return (
    <div className="flex min-h-screen bg-gray-900 text-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 text-gray-200 p-6 space-y-4 flex-shrink-0">
        <h2 className="text-2xl font-bold mb-6 text-primary-400">Components</h2>
        <nav className="space-y-2">
          {componentCategories.map((category) => (
            <div key={category.title}>
              <button
                onClick={() => {
                  if (!category.subcategories) {
                    setSelectedSubcategory(category.title);
                  } else {
                    handleCategoryClick(category.title);
                  }
                }}
                className={`flex items-center justify-between w-full text-left font-semibold p-2 rounded-lg transition-colors ${
                  expandedCategory === category.title ? 'bg-gray-700 text-primary-400' : 'hover:bg-gray-700'
                }`}
              >
                <span className="flex items-center">
                  {category.icon && <span className="mr-2 text-xl">{category.icon}</span>}
                  {category.title}
                </span>
                {category.subcategories && (
                  <ChevronDownIcon
                    className={`w-5 h-5 transition-transform ${
                      expandedCategory === category.title ? 'transform rotate-180' : ''
                    }`}
                  />
                )}
              </button>
              {category.subcategories && expandedCategory === category.title && (
                <div className="ml-6 mt-2 space-y-2">
                  {category.subcategories.map((subcat) => (
                    subcat.type === 'link' && (
                      <button
                        key={subcat.title}
                        onClick={() => handleSubcategoryClick(subcat.title)}
                        className={`block w-full text-left text-sm p-2 rounded-lg transition-colors ${
                          selectedSubcategory === subcat.title
                            ? 'bg-gray-700 text-primary-400'
                            : 'text-gray-300 hover:bg-gray-700'
                        }`}
                      >
                        {subcat.title}
                      </button>
                    )
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
      </aside>

      {/* Main Content Area */}
            <main className="flex-1">
                {selectedSubcategory ? (
                    renderContent()
                ) : (
                    <div className="p-8">
        <h1 className="text-3xl font-bold mb-6 text-white">Welcome to the Components Section</h1>
                        <p className="text-gray-300">Select a category from the sidebar to explore AI-powered components.</p>
                    </div>
                )}
      </main>
    </div>
  );
}

// Add styles for each button type
const buttonStyles = `
  /* Glowing Button */
  .glowing-button {
    position: relative;
    padding: 16px 32px;
    background: #ff69b4;
    border: none;
    border-radius: 8px;
    color: white;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.3s;
    font-size: 16px;
    min-width: 200px;
  }
  .glowing-button:hover {
    box-shadow: 0 0 20px rgba(255, 105, 180, 0.8);
    transform: translateY(-2px);
  }

  /* Ripple Effect Button */
  .ripple-button {
    position: relative;
    padding: 16px 32px;
    background: #9c27b0;
    color: white;
    border: none;
    border-radius: 8px;
    font-weight: bold;
    cursor: pointer;
    overflow: hidden;
    transition: all 0.3s;
    font-size: 16px;
    min-width: 200px;
  }
  .ripple-button::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    pointer-events: none;
    background-image: radial-gradient(circle, #fff 10%, transparent 10.01%);
    background-repeat: no-repeat;
    background-position: 50%;
    transform: scale(10, 10);
    opacity: 0;
    transition: transform 0.5s, opacity 1s;
  }
  .ripple-button:active::after {
    transform: scale(0, 0);
    opacity: 0.3;
    transition: 0s;
  }

  /* 3D Push Button */
  .push-button {
    padding: 16px 32px;
    background: #2196f3;
    color: white;
    border: none;
    border-radius: 8px;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.3s;
    box-shadow: 0 4px 0 #1976d2;
    font-size: 16px;
    min-width: 200px;
  }
  .push-button:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 0 #1976d2;
  }
  .push-button:active {
    transform: translateY(4px);
    box-shadow: 0 2px 0 #1976d2;
  }

  /* Glassmorphism Button */
  .glassmorphism-button {
    padding: 16px 32px;
    background: linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05));
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255,255,255,0.2);
    border-radius: 8px;
    color: white;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.3s;
    font-size: 16px;
    min-width: 200px;
  }
  .glassmorphism-button:hover {
    background: linear-gradient(135deg, rgba(255,255,255,0.2), rgba(255,255,255,0.1));
    border-color: rgba(255,255,255,0.3);
    transform: translateY(-2px);
    box-shadow: 0 8px 32px rgba(31, 38, 135, 0.37);
  }

  /* Skew Button */
  .skew-button {
    padding: 16px 32px;
    background: #ff6b6b;
    color: white;
    border: none;
    border-radius: 8px;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.3s;
    position: relative;
    overflow: hidden;
    font-size: 16px;
    min-width: 200px;
  }
  .skew-button:hover {
    transform: skew(-10deg) scale(1.1);
    background: #ff4757;
  }
  .skew-button::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
    transition: 0.5s;
  }
  .skew-button:hover::before {
    left: 100%;
  }

  /* Flip Button */
  .flip-button {
    perspective: 1000px;
    width: 200px;
    height: 60px;
  }
  .flip-button-inner {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.6s;
    transform-style: preserve-3d;
  }
  .flip-button:hover .flip-button-inner {
    transform: rotateY(180deg);
  }
  .flip-button-front, .flip-button-back {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    border-radius: 8px;
    font-size: 16px;
  }
  .flip-button-front {
    background: #2196f3;
    color: white;
  }
  .flip-button-back {
    background: #ff6b6b;
    color: white;
    transform: rotateY(180deg);
  }

  /* Icon Button */
  .icon-button {
    padding: 16px;
    background: #333;
    color: white;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    transition: all 0.3s;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 64px;
    height: 64px;
  }
  .icon-button:hover {
    background: #444;
    transform: rotate(360deg);
  }
  .icon-button i {
    font-size: 24px;
  }
`;

// Add card styles
const cardStyles = `
  /* Glassmorphism Card */
  .glassmorphism-card {
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 12px;
    padding: 20px;
    transition: all 0.3s;
    color: white;
  }

  .glassmorphism-card:hover {
    background: rgba(255, 255, 255, 0.15);
    border-color: rgba(255, 255, 255, 0.3);
    box-shadow: 0 8px 32px rgba(31, 38, 135, 0.37);
  }

  /* Tilt Card */
  .tilt-card {
    background: #2a2a2a;
    border-radius: 12px;
    padding: 20px;
    transition: transform 0.3s;
    transform-style: preserve-3d;
    perspective: 1000px;
    color: white;
  }

  .tilt-card:hover {
    transform: rotateX(5deg) rotateY(5deg);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
  }

  /* Flip Book Card */
  .flipbook-card {
    perspective: 1000px;
    width: 100%;
    height: 200px;
  }

  .flipbook-card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    transition: transform 0.6s;
    transform-style: preserve-3d;
  }

  .flipbook-card:hover .flipbook-card-inner {
    transform: rotateY(180deg);
  }

  .flipbook-card-front, .flipbook-card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    border-radius: 12px;
    padding: 20px;
    background: #2a2a2a;
    color: white;
  }

  .flipbook-card-back {
    transform: rotateY(180deg);
    background: #3a3a3a;
  }

  /* Hover Zoom Card */
  .hoverzoom-card {
    background: #2a2a2a;
    border-radius: 12px;
    overflow: hidden;
    transition: transform 0.3s;
  }

  .hoverzoom-card img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    transition: transform 0.3s;
  }

  .hoverzoom-card:hover img {
    transform: scale(1.1);
  }

  /* Shadow Elevate Card */
  .shadow-card {
    background: #2a2a2a;
    border-radius: 12px;
    padding: 20px;
    transition: all 0.3s;
    color: white;
  }

  .shadow-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
  }

  /* Slide Reveal Card */
  .slide-card {
    background: #2a2a2a;
    border-radius: 12px;
    overflow: hidden;
    position: relative;
  }

  .slide-card-content {
    position: absolute;
    bottom: -100%;
    left: 0;
    width: 100%;
    padding: 20px;
    background: rgba(0, 0, 0, 0.8);
    transition: bottom 0.3s;
    color: white;
  }

  .slide-card:hover .slide-card-content {
    bottom: 0;
  }

  /* Overlay Text Card */
  .overlay-card {
    background: #2a2a2a;
    border-radius: 12px;
    overflow: hidden;
    position: relative;
  }

  .overlay-card-text {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(0, 0, 0, 0.7);
    opacity: 0;
    transition: opacity 0.3s;
  }

  .overlay-card:hover .overlay-card-text {
    opacity: 1;
  }

  /* Rotate Card */
  .rotate-card {
    background: #2a2a2a;
    border-radius: 12px;
    padding: 20px;
    transition: transform 0.6s;
    transform-style: preserve-3d;
    color: white;
  }

  .rotate-card:hover {
    transform: rotateY(180deg);
  }

  /* Card with Toggle Info */
  .toggle-card {
    background: #2a2a2a;
    border-radius: 12px;
    padding: 20px;
    overflow: hidden;
    color: white;
  }

  .toggle-card-info {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.3s;
  }

  .toggle-card.active .toggle-card-info {
    max-height: 200px;
  }

  /* Pulse Border Card */
  .pulseborder-card {
    background: #2a2a2a;
    border-radius: 12px;
    padding: 20px;
    position: relative;
    color: white;
  }

  .pulseborder-card::before {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    border-radius: 14px;
    background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
    z-index: -1;
    animation: button-preview-container-pulse 2s infinite;
  }

  @keyframes button-preview-container-pulse {
    0% { transform: scale(1); }
    50% { transform: scale(1.02); }
    100% { transform: scale(1); }
  }
`;

// Add the styles to the document
if (typeof document !== 'undefined') {
  const styleSheet = document.createElement('style');
  styleSheet.textContent = buttonStyles + cardStyles;
  document.head.appendChild(styleSheet);
} 