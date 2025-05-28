"use client";

import { useState, ChangeEvent } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface TechItem {
  name: string;
  description: string;
  link: string;
  icon: string;
}

const aiToolData: TechItem[] = [
  {
    name: "GitHub Copilot",
    description: "AI pair programmer that helps you write code using suggestions from OpenAI Codex.",
    link: "https://github.com/features/copilot",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  },
  {
    name: "ChatGPT",
    description: "AI assistant that can generate HTML, CSS, JavaScript, and backend code from prompts.",
    link: "https://chat.openai.com",
    icon: "https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg",
  },
  {
    name: "Replit Ghostwriter",
    description: "AI coding assistant built into Replit that suggests code in real-time.",
    link: "https://replit.com/ghostwriter",
    icon: "https://upload.wikimedia.org/wikipedia/commons/b/b2/Replit-logo.png",
  },
  {
    name: "Cursor",
    description: "AI-powered code editor that lets you chat with your code and get fixes or explanations.",
    link: "https://www.cursor.so",
    icon: "https://www.cursor.so/favicon.ico",
  },
  {
    name: "Tabnine",
    description: "AI assistant that autocompletes code and supports many programming languages.",
    link: "https://www.tabnine.com",
    icon: "https://www.tabnine.com/favicon.ico",
  },
  {
    name: "Durable",
    description: "AI website builder that creates websites in 30 seconds based on prompts.",
    link: "https://durable.co",
    icon: "https://durable.co/favicon.ico",
  },
  {
    name: "TeleportHQ",
    description: "Drag-and-drop AI website builder with live code generation.",
    link: "https://teleporthq.io",
    icon: "https://teleporthq.io/favicon.ico",
  },
  {
    name: "Codeium",
    description: "AI-powered autocomplete for modern IDEs, like VSCode, JetBrains, etc.",
    link: "https://codeium.com",
    icon: "https://codeium.com/favicon.ico",
  },
  {
    name: "Wix ADI",
    description: "AI tool by Wix that builds websites using user answers and preferences.",
    link: "https://www.wix.com/adi",
    icon: "https://static.wixstatic.com/media/57f6f3_a6945eeb4c9c4f4fa6634b330e6f5433~mv2.png",
  },
  {
    name: "Framer AI",
    description: "AI tool that turns text prompts into responsive websites using Framer's design editor.",
    link: "https://www.framer.com/ai",
    icon: "https://www.framer.com/images/favicons/apple-touch-icon.png",
  },
  {
    name: "CodeWP",
    description: "AI tool focused on WordPress code generation, including shortcodes and custom plugins.",
    link: "https://codewp.ai",
    icon: "https://codewp.ai/favicon.ico",
  },
  {
    name: "Webflow AI",
    description: "Webflow's AI assistant that helps generate layouts and content structures from text.",
    link: "https://webflow.com/ai",
    icon: "https://assets-global.website-files.com/5d3ac7a0b3f4c1462edb55d2/62373c4e364a4619b02ec51b_Webflow-Favicon.png",
  },
  {
    name: "Uizard",
    description: "Turn screenshots or wireframes into functional UI designs with code using AI.",
    link: "https://uizard.io",
    icon: "https://uizard.io/favicon.ico",
  },
  {
    name: "Builder.io",
    description: "AI-powered visual editor for building websites and pages without writing code.",
    link: "https://www.builder.io",
    icon: "https://www.builder.io/images/favicon.ico",
  },
  {
    name: "Appy Pie Website Builder",
    description: "Drag-and-drop AI website builder that supports e-commerce and mobile responsiveness.",
    link: "https://www.appypie.com/website-builder",
    icon: "https://www.appypie.com/favicon.ico",
  },
  {
    name: "10Web AI",
    description: "AI website builder that generates WordPress websites from text instructions.",
    link: "https://10web.io/ai-website-builder/",
    icon: "https://10web.io/favicon.ico",
  },
  {
    name: "Bookmark AiDA",
    description: "Bookmark's AI Design Assistant (AiDA) creates websites from a few simple questions.",
    link: "https://www.bookmark.com",
    icon: "https://www.bookmark.com/favicon.ico",
  },
  {
    name: "Vzy AI Website Builder",
    description: "AI-based tool for building personal and business websites with simple inputs.",
    link: "https://vzy.co",
    icon: "https://vzy.co/favicon.ico",
  },
  {
    name: "Notion AI",
    description: "Generates blog and content structure that can be exported into website code.",
    link: "https://www.notion.so/product/ai",
    icon: "https://www.notion.so/images/favicon.ico",
  },
  {
    name: "Sitekick AI",
    description: "Creates high-quality marketing websites for startups with zero coding.",
    link: "https://sitekick.ai",
    icon: "https://sitekick.ai/favicon.ico",
  }
];

export default function InteractiveAIToolCards() {
  const [search, setSearch] = useState("");

  const filteredTech = aiToolData.filter((tech: TechItem) =>
    tech.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold text-center">Explore AI Tools</h1>
      <Input
        placeholder="Search tools..."
        value={search}
        onChange={handleSearchChange}
        className="w-full max-w-md mx-auto"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredTech.map((tech: TechItem) => (
          <Card
            key={tech.name}
            className="hover:shadow-lg transition-transform hover:scale-105 group"
          >
            <CardContent className="flex flex-col items-center text-center gap-4 p-6">
              <img
                src={tech.icon}
                alt={tech.name}
                className="w-16 h-16 transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110"
              />
              <h2 className="text-xl font-semibold">{tech.name}</h2>
              <p className="text-sm text-gray-600 dark:text-gray-300">{tech.description}</p>
              <a href={tech.link} target="_blank" rel="noopener noreferrer">
                <Button className="group-hover:bg-blue-600 transition-colors duration-300">Learn More</Button>
              </a>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
