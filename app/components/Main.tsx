import React from "react";
import Link from "next/link";
import Image from "next/image";
// Sample project data
const projects = [
  {
    name: "TeamResolve",
    description: "Task Management App For Resolving Bugs in Teams",
    imageUrl: "https://snipboard.io/S2tkr0.jpg",
    link: "https://team-resolve.vercel.app/",
    techStack: [
      "React",
      "Next.js",
      "Next-AppRouter",
      "PostgreSQL",
      "Typescript",
      "Prisma",
      "Tailwind CSS",
      "Firebase",
      "Clerk",
      "shadcn/ui",
      "radix-ui",
      "React Query",
      "React Hook Form",
      "Nivo Charts",
      "React Toastify",
      "Zod",
    ],
    hosting: [
      "Vercel (Frontend & Backend)",
      "Supabase (Database)",
      "Firebase Cloud Storage (Image Hosting)",
    ],
    inDevelopment: false,
  },
  {
    name: "SnapSync",
    description: "Image Refactorer Resizer and More powered with AI",
    imageUrl: "https://snipboard.io/D4fTCB.jpg",
    link: "https://snapsync-three-steel.vercel.app/",
    techStack: [
      "React",
      "Next.js",
      "MongoDB",
      "Cloudinary",
      "Clerk",
      "Tailwind CSS",
      "React Hook Form",
      "Radix UI",
      "Cloudinary",
      "shadcn/ui",
      "Stripe",
      "Lucide React",
      "Tailwind CSS",
      "Zod",
    ],
    hosting: ["Vercel"],
    inDevelopment: false,
  },
  {
    name: "MyMarketplace",
    description:
      "E-Commerce Application for Purchasing and Creating new Products",
    imageUrl: "https://snipboard.io/SrQTkg.jpg",
    link: "https://mymarketplace-mu.vercel.app/",
    techStack: ["React", "Nextjs", "Nestjs", "Postgresql"],
    hosting: [
      "Vercel (Frontend - Nextjs)",
      "Railways (Backend - Nestjs)",
      "Supabase (Database)",
      "Firebase Cloud Storage (Image Hosting)",
    ],
    inDevelopment: true,
  },
];


interface TechStackBadgeProps {
  tech: string;
}

const TechStackBadge: React.FC<TechStackBadgeProps> = ({ tech }) => (
  <span className="inline-flex items-center justify-center bg-blue-600 text-white text-sm font-medium py-1.5 px-3 rounded-md shadow-sm hover:bg-blue-700 transition-colors duration-150 mr-2 mb-2">
    {tech}
  </span>
);

interface HostingBadgeProps {
  service: string;
}

const HostingBadge: React.FC<HostingBadgeProps> = ({ service }) => (
  <span className="inline-flex items-center justify-center bg-green-600 text-white text-sm font-medium py-1.5 px-3 rounded-md shadow-sm hover:bg-green-700 transition-colors duration-150 mr-2 mb-2">
    {service}
  </span>
);

const ProjectPreview = ({
  name,
  description,
  imageUrl,
  link,
  techStack,
  hosting,
  inDevelopment,
}: {
  name: string;
  description: string;
  imageUrl: string;
  link: string;
  techStack: string[];
  hosting: string[];
  inDevelopment: boolean;
}) => (
  <Link
    href={link}
    target="_blank"
    passHref
    className="bg-white rounded-lg shadow p-4 block hover:shadow-lg transition duration-300"
  >
    <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
      <Image
        src={imageUrl}
        alt={name}
        layout="fill"
        objectFit="cover"
        className="rounded-lg"
      />
    </div>
    <div className="flex flex-col">
      <div className="flex flex-col gap-1">
        <h3 className="text-xl font-semibold mb-2">{name}</h3>
        {inDevelopment && (
          <span className="text-md text-orange-600 font-semibold ml-2">
            In Development
          </span>
        )}
      </div>
      <p className="text-base mt-1 font-semibold text-gray-700 mb-4">{description}</p>
      <div className="flex flex-wrap justify-start mb-4">
        <p className="text-sm font-bold text-gray-700 mb-2 w-full">Tech Stack:</p>
        {techStack.map((tech, index) => (
          <TechStackBadge key={index} tech={tech} />
        ))}
      </div>
      <div className="flex flex-wrap justify-center">
        <p className="text-sm font-bold text-gray-700 mb-1 w-full">Hosting:</p>
        {hosting.map((service, index) => (
          <HostingBadge key={index} service={service} />
        ))}
      </div>
    </div>
  </Link>
);

export default function Main() {
  return (
    <section
      id="projects"
      className="flex justify-center w-full py-12 md:py-24 lg:py-32"
    >
      <div className="container grid items-center gap-4 px-4 text-center md:px-6 lg:gap-10">
        <div className="space-y-3">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Projects
          </h2>
          <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Check out some of the projects I've worked on.
          </p>
        </div>
        <div className="grid max-w-5xl mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10">
          {projects.map((project, index) => (
            <ProjectPreview key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
