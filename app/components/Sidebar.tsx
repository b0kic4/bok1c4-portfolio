"use client";
import Link from "next/link";
import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";
export default function Sidebar() {
  return (
    <div className="fixed top-0 left-0 h-full bg-gray-500 p-4 flex flex-col items-center justify-center">
      <Link
        href="https://github.com/b0kic4"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white mb-4"
      >
        <FaGithub size={24} />
      </Link>
      <Link
        href="https://www.linkedin.com/in/boris-nikolic-a44a2126a/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white mb-4"
      >
        <FaLinkedin size={24} />
      </Link>
      <Link
        href="https://twitter.com/bok1c4"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white mb-4"
      >
        <FaTwitter size={24} />
      </Link>
      <Link href="mailto:borisnikolic2302@gmail.com" className="text-white">
        <FaEnvelope size={24} />
      </Link>
    </div>
  );
}
