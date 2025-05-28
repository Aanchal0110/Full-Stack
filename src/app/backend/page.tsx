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

const backendTechData: TechItem[] = [
  {
    name: "Node.js",
    description: "JavaScript runtime built on Chrome's V8 engine.",
    link: "https://nodejs.org",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "Express.js",
    description: "Fast, minimalist web framework for Node.js.",
    link: "https://expressjs.com",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  },
  {
    name: "Django",
    description: "High-level Python web framework for rapid development.",
    link: "https://www.djangoproject.com",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg",
  },
  {
    name: "Flask",
    description: "Lightweight Python web framework for building APIs.",
    link: "https://flask.palletsprojects.com",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg",
  },
  {
    name: "Ruby on Rails",
    description: "Server-side web application framework written in Ruby.",
    link: "https://rubyonrails.org",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rails/rails-original-wordmark.svg",
  },
  {
    name: "Spring Boot",
    description: "Java-based framework for building microservices and APIs.",
    link: "https://spring.io/projects/spring-boot",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
  },
  {
    name: "Laravel",
    description: "PHP web application framework with expressive syntax.",
    link: "https://laravel.com",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-plain.svg",
  },
  {
    name: "FastAPI",
    description: "Modern, fast (high-performance) Python web framework for APIs.",
    link: "https://fastapi.tiangolo.com",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg",
  },
  {
    name: "Koa.js",
    description: "Next-generation web framework for Node.js by the creators of Express.",
    link: "https://koajs.com",
    icon: "https://avatars.githubusercontent.com/u/16093558?s=200&v=4", // Not available on Devicon
  },
  {
    name: "NestJS",
    description: "Progressive Node.js framework for building efficient server-side applications.",
    link: "https://nestjs.com",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-plain.svg",
  },
  {
    name: "ASP.NET Core",
    description: "Cross-platform .NET framework for building modern web apps.",
    link: "https://dotnet.microsoft.com/en-us/apps/aspnet",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg",
  },
  {
    name: "Phoenix (Elixir)",
    description: "Web framework for Elixir for building scalable applications.",
    link: "https://www.phoenixframework.org",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/elixir/elixir-original.svg",
  },
  {
    name: "Hapi.js",
    description: "Rich framework for building applications and services in Node.js.",
    link: "https://hapi.dev",
    icon: "https://avatars.githubusercontent.com/u/377453?s=200&v=4",
  },
  {
    name: "Micronaut",
    description: "Modern JVM-based framework for building modular microservices.",
    link: "https://micronaut.io",
    icon: "https://micronaut.io/images/micronaut-icon.svg",
  },
  {
    name: "AdonisJS",
    description: "Node.js MVC framework that offers a stable ecosystem.",
    link: "https://adonisjs.com",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/adonisjs/adonisjs-original.svg",
  },
  {
    name: "CakePHP",
    description: "Rapid development framework for PHP.",
    link: "https://cakephp.org",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cakephp/cakephp-original.svg",
  },
  {
    name: "Symfony",
    description: "PHP framework for web applications and APIs.",
    link: "https://symfony.com",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/symfony/symfony-original.svg",
  },
  {
    name: "Strapi",
    description: "Headless CMS based on Node.js for building APIs quickly.",
    link: "https://strapi.io",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/strapi/strapi-original.svg",
  },
  {
    name: "LoopBack",
    description: "Highly extensible Node.js framework for APIs.",
    link: "https://loopback.io",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/loopback/loopback-original.svg",
  },
  {
    name: "FeathersJS",
    description: "Lightweight web-framework for real-time applications.",
    link: "https://feathersjs.com",
    icon: "https://avatars.githubusercontent.com/u/11410802?s=200&v=4",
  }
];

export default function InteractiveBackendTechCards() {
  const [search, setSearch] = useState("");

  const filteredTech = backendTechData.filter((tech: TechItem) =>
    tech.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold text-center">Explore Backend Technologies</h1>
      <Input
        placeholder="Search technologies..."
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
