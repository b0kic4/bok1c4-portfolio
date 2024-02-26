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
      "React Query",
      "React Hook Form",
      "Nivo Charts",
      "EasyMDE",
      "React Draggable",
      "React Toastify",
      "React Virtualized Auto Sizer",
      "Zod",
      "Node.js",
    ],
    hosting: [
      "Vercel (Frontend & Backend)",
      "Supabase (Database)",
      "Firebase Cloud Storage (Image Hosting)",
    ],
  },
  {
    name: "SnapSync",
    description: "Image Refactorer Resizer and More powered with AI",
    imageUrl: "https://snipboard.io/D4fTCB.jpg",
    link: "https://ai-saas-three-steel.vercel.app/",
    techStack: [
      "React",
      "Next.js",
      "MongoDB",
      "Cloudinary",
      "Clerk",
      "React Hook Form",
      "Radix UI",
      "Cloudinary",
      "Stripe",
      "Lucide React",
      "Tailwind CSS",
      "Zod",
      "Node.js",
    ],
    hosting: ["Vercel"],
  },
  {
    name: "MyMarketplace",
    description:
      "E-Commerce Application for Purchasing and Creating new Products - currently in development",
    imageUrl: "https://snipboard.io/SrQTkg.jpg",
    link: "https://mymarketplace-mu.vercel.app/",
    techStack: ["React", "Nextjs", "Nestjs", "Postgresql"],
    hosting: [
      "Vercel (Frontend - Nextjs)",
      "Railways (Backend - Nestjs)",
      "Supabase (Database)",
      "Firebase Cloud Storage (Image Hosting)",
    ],
  },
];

const ProjectPreview = ({
  name,
  description,
  imageUrl,
  link,
  techStack,
  hosting,
}: {
  name: string;
  description: string;
  imageUrl: string;
  link: string;
  techStack: string[];
  hosting: string[];
}) => (
  <Link
    href={link}
    passHref
    className="bg-white rounded-lg shadow p-4 block hover:shadow-lg transition duration-300"
  >
    <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
      <Image
        src={imageUrl}
        alt={name}
        layout="responsive"
        width={900}
        height={600}
        objectFit="cover"
        className="rounded-lg"
      />
    </div>
    <div className="flex flex-col">
      <h3 className="text-xl font-semibold mb-2">{name}</h3>
      <p className="text-sm text-gray-600 mb-4">{description}</p>
      <div className="flex space-x-4">
        <div className="flex flex-col">
          <p className="text-xs text-gray-700">
            <strong>Tech Stack:</strong>
          </p>
          <p className="text-xs text-gray-600 font-semibold mt-1">
            {techStack.join(", ")}
          </p>
        </div>
        <div className="flex flex-col">
          <p className="text-xs text-gray-700">
            <strong>Hosting:</strong>
          </p>
          <p className="text-xs text-gray-600 font-semibold mt-1">
            {hosting.join(", ")}
          </p>
        </div>
      </div>
    </div>
  </Link>
);

export default function Main() {
  return (
    <section className="flex justify-center w-full py-12 md:py-24 lg:py-32">
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
