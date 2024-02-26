import Link from "next/link";
import React from "react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="w-full h-screen flex justify-center items-center py-12 md:py-24"
    >
      <div className="container grid items-center gap-4 px-4 text-center md:px-6 lg:gap-10">
        <div className="space-y-3">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Hi, I’m Boris
          </h2>
          <p className="text-xs">vim motions {`<3`}</p>
          <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            I’m a passionate and creative Full Stack Web Developer who loves
            turning ideas into beautiful and intuitive websites.
          </p>
        </div>
        <div className="grid max-w-sm mx-auto items-stretch gap-4 md:max-w-none md:grid-cols-2 lg:gap-6">
          <Link
            className="inline-flex items-center justify-center rounded-md border border-gray-200 bg-white px-8 py-3 text-sm font-medium shadow-sm gap-2 transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
            href="#hero"
          >
            Contact Me
          </Link>
          <Link
            className="inline-flex items-center justify-center rounded-md border border-gray-200 bg-white px-8 py-3 text-sm font-medium shadow-sm gap-2 transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
            href="#projects"
          >
            My Work
          </Link>
        </div>
      </div>
    </section>
  );
}
