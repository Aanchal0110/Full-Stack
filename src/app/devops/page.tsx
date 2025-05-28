"use client";

import { useState, ChangeEvent } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

type TechItem = {
  name: string;
  description: string;
  link: string;
  icon: string;
};

const devOpsData: TechItem[] = [
  {
    name: "Docker",
    description: "Platform for building, running, and managing containers.",
    link: "https://www.docker.com/",
    icon: "https://www.docker.com/wp-content/uploads/2022/03/vertical-logo-monochromatic.png",
  },
  {
    name: "Kubernetes",
    description: "Automates deployment, scaling, and management of containerized applications.",
    link: "https://kubernetes.io/",
    icon: "https://kubernetes.io/images/favicon.png",
  },
  {
    name: "Jenkins",
    description: "Automation server for building, testing, and deploying code.",
    link: "https://www.jenkins.io/",
    icon: "https://www.jenkins.io/images/logos/jenkins/jenkins.png",
  },
  {
    name: "GitHub Actions",
    description: "CI/CD service provided by GitHub.",
    link: "https://github.com/features/actions",
    icon: "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
  },
  {
    name: "CircleCI",
    description: "CI/CD platform for fast software delivery.",
    link: "https://circleci.com/",
    icon: "https://circleci.com/favicon.ico",
  },
  {
    name: "Travis CI",
    description: "Continuous integration service for building and testing.",
    link: "https://travis-ci.org/",
    icon: "https://travis-ci.org/images/favicon-32x32.png",
  },
  {
    name: "Terraform",
    description: "Infrastructure as code tool to provision cloud infrastructure.",
    link: "https://www.terraform.io/",
    icon: "https://www.terraform.io/favicon.ico",
  },
  {
    name: "Ansible",
    description: "Automation tool for configuration management and app deployment.",
    link: "https://www.ansible.com/",
    icon: "https://www.ansible.com/hubfs/Ansible-Mark-RGB_Full-RGB.svg",
  },
  {
    name: "AWS",
    description: "Amazon Web Services offering EC2, S3, Lambda and more.",
    link: "https://aws.amazon.com/",
    icon: "https://a0.awsstatic.com/libra-css/images/logos/aws_logo_smile_1200x630.png",
  },
  {
    name: "Azure DevOps",
    description: "Microsoft's set of development tools for CI/CD and collaboration.",
    link: "https://azure.microsoft.com/en-us/products/devops/",
    icon: "https://learn.microsoft.com/en-us/azure/devops/media/index/azure-devops-icon.png",
  },
  {
    name: "Google Cloud Platform (GCP)",
    description: "Google's cloud infrastructure and deployment tools.",
    link: "https://cloud.google.com/",
    icon: "https://cloud.google.com/_static/cloud/images/favicons/onecloud/favicon.ico",
  },
  {
    name: "Nginx",
    description: "Web server and reverse proxy server for HTTP, HTTPS, etc.",
    link: "https://www.nginx.com/",
    icon: "https://www.nginx.com/wp-content/uploads/2023/05/favicon.png",
  },
  {
    name: "Apache HTTP Server",
    description: "Popular open-source web server software.",
    link: "https://httpd.apache.org/",
    icon: "https://httpd.apache.org/images/apache_pb2.gif",
  },
  {
    name: "PM2",
    description: "Advanced process manager for Node.js applications.",
    link: "https://pm2.keymetrics.io/",
    icon: "https://avatars.githubusercontent.com/u/7101542?s=200&v=4",
  },
  {
    name: "Grafana",
    description: "Analytics and monitoring platform for time series data.",
    link: "https://grafana.com/",
    icon: "https://grafana.com/static/img/favicon.ico",
  },
  {
    name: "Prometheus",
    description: "Monitoring system with a dimensional data model and query language.",
    link: "https://prometheus.io/",
    icon: "https://prometheus.io/assets/favicons/favicon-32x32.png",
  },
  {
    name: "New Relic",
    description: "Observability platform for performance monitoring.",
    link: "https://newrelic.com/",
    icon: "https://newrelic.com/assets/favicon.ico",
  },
  {
    name: "ELK Stack",
    description: "Composed of Elasticsearch, Logstash and Kibana for logs and search.",
    link: "https://www.elastic.co/what-is/elk-stack",
    icon: "https://www.elastic.co/favicon.ico",
  },
  {
    name: "Vagrant",
    description: "Tool for building and managing virtual machine environments.",
    link: "https://www.vagrantup.com/",
    icon: "https://www.vagrantup.com/assets/favicon-228f74b8.png",
  },
  {
    name: "Chef",
    description: "Powerful automation platform that transforms infrastructure into code.",
    link: "https://www.chef.io/",
    icon: "https://www.chef.io/favicon.ico",
  },
];

export default function InteractiveDevOpsCards() {
  const [search, setSearch] = useState("");

  const filteredTech = devOpsData.filter((tech: TechItem) =>
    tech.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold text-center">Explore DevOps Tools</h1>
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
