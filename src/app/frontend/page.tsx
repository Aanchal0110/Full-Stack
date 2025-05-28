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

const techData: TechItem[] = [
  {
    name: "HTML5",
    description: "Markup language used for structuring and presenting content on the Web.",
    link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  {
    name: "CSS3",
    description: "Style sheet language used for describing the presentation of a document.",
    link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  {
    name: "JavaScript",
    description: "Programming language that enables interactive web pages.",
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "React.js",
    description: "A JavaScript library for building user interfaces.",
    link: "https://reactjs.org",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "Vue.js",
    description: "The Progressive JavaScript Framework for building UIs.",
    link: "https://vuejs.org",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
  },
  {
    name: "Angular",
    description: "A platform for building mobile and desktop web applications.",
    link: "https://angular.io",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg",
  },
  {
    name: "Next.js",
    description: "The React Framework for Production.",
    link: "https://nextjs.org",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  },
  {
    name: "Svelte",
    description: "Cybernetically enhanced web apps with less boilerplate.",
    link: "https://svelte.dev",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/svelte/svelte-original.svg",
  },
  {
    name: "Tailwind CSS",
    description: "A utility-first CSS framework for rapid UI development.",
    link: "https://tailwindcss.com",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
  },
  {
    name: "Bootstrap",
    description: "Popular CSS framework for developing responsive websites.",
    link: "https://getbootstrap.com",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
  },
  {
    name: "TypeScript",
    description: "Typed superset of JavaScript that compiles to plain JavaScript.",
    link: "https://www.typescriptlang.org",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
  {
    name: "jQuery",
    description: "A fast, small, and feature-rich JavaScript library.",
    link: "https://jquery.com",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original.svg",
  },
  {
    name: "Redux",
    description: "A predictable state container for JavaScript apps.",
    link: "https://redux.js.org",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
  },
  {
    name: "Sass / SCSS",
    description: "CSS preprocessor with variables, nested rules, and more.",
    link: "https://sass-lang.com",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg",
  },
  {
    name: "GSAP",
    description: "Professional-grade JavaScript animation library.",
    link: "https://greensock.com/gsap/",
    icon: "https://seeklogo.com/images/G/gsap-greensock-logo-6EBD9BFE2F-seeklogo.com.png",
  },
  {
    name: "Three.js",
    description: "JavaScript 3D library for rendering 3D graphics in the browser.",
    link: "https://threejs.org",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/threejs/threejs-original.svg",
  },
  {
    name: "Vite",
    description: "Next generation frontend tooling for faster development.",
    link: "https://vitejs.dev",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vite/vite-original.svg",
  },
  {
    name: "Parcel",
    description: "Zero-configuration web application bundler.",
    link: "https://parceljs.org",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/parcel/parcel-original.svg",
  },
  {
    name: "ESLint",
    description: "Find and fix problems in your JavaScript code.",
    link: "https://eslint.org",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/eslint/eslint-original.svg",
  },
  {
    name: "Prettier",
    description: "An opinionated code formatter for consistent styling.",
    link: "https://prettier.io",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prettier/prettier-original.svg",
  },
  {
    name: "Storybook",
    description: "UI development environment for building components in isolation.",
    link: "https://storybook.js.org",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/storybook/storybook-original.svg",
  }
];

export default function InteractiveTechCards() {
  const [search, setSearch] = useState("");

  const filteredTech = techData.filter((tech) =>
    tech.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold text-center">Explore Frontend Technologies</h1>
      <Input
        placeholder="Search technologies..."
        value={search}
        onChange={handleSearchChange}
        className="w-full max-w-md mx-auto"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredTech.map((tech) => (
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
