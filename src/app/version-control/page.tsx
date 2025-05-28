"use client";

import { useState, ChangeEvent } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface ToolItem {
  name: string;
  description: string;
  link: string;
  icon: string;
}

const versionControlTools: ToolItem[] = [
  {
    name: "Git",
    description: "Distributed version control system for tracking changes in source code.",
    link: "https://git-scm.com/",
    icon: "https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png",
  },
  {
    name: "GitHub",
    description: "Web-based platform for version control using Git with collaboration features.",
    link: "https://github.com/",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  },
  {
    name: "GitLab",
    description: "DevOps platform providing Git repository management, CI/CD, and more.",
    link: "https://gitlab.com/",
    icon: "https://about.gitlab.com/images/press/logo/png/gitlab-icon-rgb.png",
  },
  {
    name: "Bitbucket",
    description: "Git repository hosting service by Atlassian with support for Mercurial (deprecated).",
    link: "https://bitbucket.org/",
    icon: "https://wac-cdn.atlassian.com/dam/jcr:b525b4bb-1953-4db4-99cd-94c6c228cdd3/bitbucket-atlassian-logo.png",
  },
  {
    name: "SourceTree",
    description: "A free Git GUI client for Windows and macOS by Atlassian.",
    link: "https://www.sourcetreeapp.com/",
    icon: "https://www.sourcetreeapp.com/images/logos/sourcetree-logo.png",
  },
  {
    name: "Azure Repos",
    description: "Set of version control tools from Microsoft for managing code with Git or TFVC.",
    link: "https://azure.microsoft.com/en-us/products/devops/repos/",
    icon: "https://azurecomcdn.azureedge.net/cvt-2b21c07f6f087041a9b0602656aa14f5d2f8fa297a16f92f825ab13e3940d8d1/images/page/services/devops/media/index/azure-repos.svg",
  },
  {
    name: "Perforce Helix Core",
    description: "Version control system optimized for large scale enterprise projects.",
    link: "https://www.perforce.com/products/helix-core",
    icon: "https://www.perforce.com/themes/custom/perforce/images/logo.svg",
  },
  {
    name: "AWS CodeCommit",
    description: "Fully managed source control service that hosts secure Git repositories.",
    link: "https://aws.amazon.com/codecommit/",
    icon: "https://a0.awsstatic.com/libra-css/images/logos/aws_logo_smile_1200x630.png",
  },
  {
    name: "Apache Subversion (SVN)",
    description: "Centralized version control system often used for enterprise applications.",
    link: "https://subversion.apache.org/",
    icon: "https://subversion.apache.org/images/logo.png",
  },
  {
    name: "Plastic SCM",
    description: "Version control for teams and enterprises with powerful branching and merging.",
    link: "https://www.plasticscm.com/",
    icon: "https://www.plasticscm.com/imgs/logo-plastic-dark.svg",
  }
];

export default function InteractiveVersionControlCards() {
  const [search, setSearch] = useState("");

  const filteredTools = versionControlTools.filter((tool: ToolItem) =>
    tool.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold text-center">Explore Version Control Tools</h1>
      <Input
        placeholder="Search tools..."
        value={search}
        onChange={handleSearchChange}
        className="w-full max-w-md mx-auto"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredTools.map((tool: ToolItem) => (
          <Card
            key={tool.name}
            className="hover:shadow-lg transition-transform hover:scale-105 group"
          >
            <CardContent className="flex flex-col items-center text-center gap-4 p-6">
              <img
                src={tool.icon}
                alt={tool.name}
                className="w-16 h-16 transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110"
              />
              <h2 className="text-xl font-semibold">{tool.name}</h2>
              <p className="text-sm text-gray-600 dark:text-gray-300">{tool.description}</p>
              <a href={tool.link} target="_blank" rel="noopener noreferrer">
                <Button className="group-hover:bg-blue-600 transition-colors duration-300">Learn More</Button>
              </a>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
