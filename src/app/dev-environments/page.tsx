"use client";
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const devEnvData = [
  {
    name: "Visual Studio Code",
    description: "A lightweight yet powerful source code editor by Microsoft.",
    link: "https://code.visualstudio.com/",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
  },
  {
    name: "Visual Studio",
    description: "A comprehensive IDE for .NET and C++ development by Microsoft.",
    link: "https://visualstudio.microsoft.com/",
    icon: "https://visualstudio.microsoft.com/wp-content/uploads/2021/10/Product-Icon.svg",
  },
  {
    name: "IntelliJ IDEA",
    description: "Java IDE by JetBrains known for smart code assistance and productivity.",
    link: "https://www.jetbrains.com/idea/",
    icon: "https://resources.jetbrains.com/storage/products/intellij-idea/img/meta/intellij-idea_logo_300x300.png",
  },
  {
    name: "PyCharm",
    description: "IDE for Python with smart code completion, testing and debugging tools.",
    link: "https://www.jetbrains.com/pycharm/",
    icon: "https://resources.jetbrains.com/storage/products/pycharm/img/meta/pycharm_logo_300x300.png",
  },
  {
    name: "WebStorm",
    description: "Powerful IDE for JavaScript, TypeScript and frontend frameworks.",
    link: "https://www.jetbrains.com/webstorm/",
    icon: "https://resources.jetbrains.com/storage/products/webstorm/img/meta/webstorm_logo_300x300.png",
  },
  {
    name: "Sublime Text",
    description: "A sophisticated text editor for code, markup and prose.",
    link: "https://www.sublimetext.com/",
    icon: "https://upload.wikimedia.org/wikipedia/en/d/d2/Sublime_Text_3_logo.png",
  },
  {
    name: "Atom",
    description: "Hackable text editor for the 21st century by GitHub (deprecated now).",
    link: "https://github.com/atom/atom",
    icon: "https://upload.wikimedia.org/wikipedia/commons/8/80/Atom_editor_logo.svg",
  },
  {
    name: "Cursor",
    description: "AI-first code editor that supports Copilot-like assistants.",
    link: "https://www.cursor.so/",
    icon: "https://www.cursor.so/favicon.ico",
  },
  {
    name: "Fleet",
    description: "Next-generation IDE by JetBrains with distributed IDE features.",
    link: "https://www.jetbrains.com/fleet/",
    icon: "https://resources.jetbrains.com/fleet/img/meta/fleet_logo_300x300.png",
  },
  {
    name: "Vim",
    description: "Highly configurable text editor built to make editing efficient.",
    link: "https://www.vim.org/",
    icon: "https://upload.wikimedia.org/wikipedia/commons/9/9f/Vimlogo.svg",
  },
  {
    name: "Neovim",
    description: "Modern Vim with extensibility and Lua scripting.",
    link: "https://neovim.io/",
    icon: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Neovim-mark.svg",
  },
  {
    name: "Emacs",
    description: "Customizable and extensible text editor for power users.",
    link: "https://www.gnu.org/software/emacs/",
    icon: "https://upload.wikimedia.org/wikipedia/commons/0/08/EmacsIcon.svg",
  },
  {
    name: "NetBeans",
    description: "Free and open-source IDE, mainly for Java.",
    link: "https://netbeans.apache.org/",
    icon: "https://netbeans.apache.org/images/apache-netbeans.svg",
  },
  {
    name: "Android Studio",
    description: "Official IDE for Android development, based on IntelliJ IDEA.",
    link: "https://developer.android.com/studio",
    icon: "https://developer.android.com/images/logos/android.svg",
  },
  {
    name: "Xcode",
    description: "Apple's IDE for building apps on iOS, macOS, watchOS, and tvOS.",
    link: "https://developer.apple.com/xcode/",
    icon: "https://upload.wikimedia.org/wikipedia/en/5/5e/Xcode_14_icon.png",
  },
  {
    name: "Eclipse",
    description: "Popular Java IDE also used for web and enterprise apps.",
    link: "https://www.eclipse.org/",
    icon: "https://upload.wikimedia.org/wikipedia/commons/5/5a/Eclipse_Logo.svg",
  }
];

export default function DevEnvironmentsPage() {
  const [search, setSearch] = useState('');

  const filteredEditors = devEnvData.filter((env) =>
    env.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 py-10">
      <div className="container px-6 space-y-8">
        <h1 className="text-4xl font-bold text-center text-primary-400">Code Editors & IDEs</h1>
        <Input
          placeholder="Search editors or IDEs..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full max-w-md mx-auto"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredEditors.map((env) => (
            <Card
              key={env.name}
              className="hover:shadow-lg transition-transform hover:scale-105 group"
            >
              <CardContent className="flex flex-col items-center text-center gap-4 p-6">
                <img
                  src={env.icon}
                  alt={env.name}
                  className="w-16 h-16 object-contain transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6"
                />
                <h2 className="text-xl font-semibold">{env.name}</h2>
                <p className="text-sm text-gray-400">{env.description}</p>
                <a href={env.link} target="_blank" rel="noopener noreferrer">
                  <Button className="mt-2 group-hover:bg-blue-600 transition-colors duration-300">Learn More</Button>
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
