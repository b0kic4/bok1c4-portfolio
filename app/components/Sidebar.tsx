import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";
export default function Sidebar() {
  return (
    <div className="fixed top-0 left-0 h-full bg-transparent p-4 flex flex-col items-center justify-center">
      <a
        href="https://github.com/your-github-profile"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white mb-4"
      >
        <FaGithub size={24} />
      </a>
      <a
        href="https://linkedin.com/in/your-linkedin-profile"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white mb-4"
      >
        <FaLinkedin size={24} />
      </a>
      <a
        href="https://twitter.com/your-twitter-handle"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white mb-4"
      >
        <FaTwitter size={24} />
      </a>
      <a href="mailto:your-email@example.com" className="text-white">
        <FaEnvelope size={24} />
      </a>
    </div>
  );
}
