"use client";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

export default function Modal({ onClose }: any) {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEsc);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("keydown", handleEsc);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-gray-800 opacity-50"></div>
      <div
        ref={modalRef}
        className="dark:bg-gray-800 bg-white p-6 rounded-lg z-10 relative"
      >
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Connect with me</h2>
          <div className="flex justify-center space-x-4">
            <Link
              href="https://github.com/b0kic4"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size={24} />
            </Link>
            <Link
              href="https://www.linkedin.com/in/boris-nikolic-a44a2126a/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size={24} />
            </Link>
            <Link
              href="https://twitter.com/bok1c4"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter size={24} />
            </Link>
            <Link href="mailto:borisnikolic2302@gmail.com">
              <FaEnvelope size={24} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
