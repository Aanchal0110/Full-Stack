"use client";

import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const databaseTechData = [
  {
    name: "MySQL",
    description: "A widely used open-source relational database.",
    link: "https://www.mysql.com/",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  },
  {
    name: "PostgreSQL",
    description: "An advanced, open-source relational database with strong features.",
    link: "https://www.postgresql.org/",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  },
  {
    name: "MongoDB",
    description: "A NoSQL database for flexible, JSON-like document storage.",
    link: "https://www.mongodb.com/",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },
  {
    name: "SQLite",
    description: "A lightweight, serverless, self-contained SQL database engine.",
    link: "https://www.sqlite.org/",
    icon: "https://upload.wikimedia.org/wikipedia/commons/3/38/SQLite370.svg",
  },
  {
    name: "Redis",
    description: "An in-memory key-value store, often used for caching.",
    link: "https://redis.io/",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg",
  },
  {
    name: "Firebase Realtime Database",
    description: "A cloud-hosted NoSQL database for real-time syncing.",
    link: "https://firebase.google.com/products/realtime-database",
    icon: "https://www.gstatic.com/devrel-devsite/prod/vc1b8a9c5e3929e33cc07380e4c77b4d95d1c74568e96439dcf29596336d40704/firebase/images/lockup.svg",
  },
  {
    name: "Firestore",
    description: "A scalable NoSQL database from Firebase with real-time capabilities.",
    link: "https://firebase.google.com/products/firestore",
    icon: "https://firebase.google.com/downloads/brand-guidelines/PNG/logo-vertical.png",
  },
  {
    name: "Oracle DB",
    description: "A multi-model database from Oracle with enterprise capabilities.",
    link: "https://www.oracle.com/database/",
    icon: "https://www.oracle.com/favicon.ico",
  },
  {
    name: "MariaDB",
    description: "A community-developed fork of MySQL.",
    link: "https://mariadb.org/",
    icon: "https://mariadb.org/wp-content/uploads/2019/11/mariadb_org_rgb.png",
  },
  {
    name: "Cassandra",
    description: "A highly scalable NoSQL database from Apache.",
    link: "https://cassandra.apache.org/",
    icon: "https://cassandra.apache.org/img/cassandra_logo.svg",
  },
  {
    name: "DynamoDB",
    description: "Amazon's NoSQL key-value and document database.",
    link: "https://aws.amazon.com/dynamodb/",
    icon: "https://a0.awsstatic.com/libra-css/images/logos/aws_logo_smile_1200x630.png",
  },
  {
    name: "CouchDB",
    description: "A NoSQL database that uses JSON for documents and HTTP for APIs.",
    link: "https://couchdb.apache.org/",
    icon: "https://couchdb.apache.org/image/logo.png",
  },
  {
    name: "Amazon RDS",
    description: "Managed relational database service by AWS.",
    link: "https://aws.amazon.com/rds/",
    icon: "https://a0.awsstatic.com/libra-css/images/logos/aws_logo_smile_1200x630.png",
  },
  {
    name: "Neo4j",
    description: "A graph database that uses nodes, relationships and properties.",
    link: "https://neo4j.com/",
    icon: "https://neo4j.com/wp-content/themes/neo4jweb/assets/images/neo4j-logo-2021.svg",
  },
  {
    name: "Supabase",
    description: "An open-source Firebase alternative built on PostgreSQL.",
    link: "https://supabase.com/",
    icon: "https://supabase.com/icons/icon-192x192.png",
  },
];

export default function DatabasesPage() {
  const [search, setSearch] = useState('');

  const filteredDatabases = databaseTechData.filter((db) =>
    db.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 py-10 overflow-x-hidden">
      <div className="container px-6 space-y-8">
        <h1 className="text-4xl font-bold text-center text-primary-400">Explore Database Technologies</h1>
        <Input
          placeholder="Search databases..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full max-w-md mx-auto"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredDatabases.map((db) => (
            <Card
              key={db.name}
              className="hover:shadow-lg transition-transform hover:scale-105 group"
            >
              <CardContent className="flex flex-col items-center text-center gap-4 p-6">
                <img
                  src={db.icon}
                  alt={db.name}
                  className="w-16 h-16 object-contain group-hover:rotate-6 group-hover:scale-110 transition-transform"
                />
                <h2 className="text-xl font-semibold">{db.name}</h2>
                <p className="text-sm text-gray-400">{db.description}</p>
                <a href={db.link} target="_blank" rel="noopener noreferrer">
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
