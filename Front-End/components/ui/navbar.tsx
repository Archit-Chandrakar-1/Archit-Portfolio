"use client";

import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex items-center space-x-1">
              <div className="relative">
                <div className="w-8 h-8 bg-green-500 transform rotate-45 rounded-sm"></div>
                <div className="absolute top-1 left-1 w-6 h-6 bg-white transform rotate-45 rounded-sm"></div>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-white hover:text-green-400 transition-colors font-medium">
              Home
            </Link>
            <Link href="/service" className="text-gray-300 hover:text-green-400 transition-colors font-medium">
              Service
            </Link>
            <Link href="/portfolio" className="text-gray-300 hover:text-green-400 transition-colors font-medium">
              Projects
            </Link>
            <Link href="/blog" className="text-gray-300 hover:text-green-400 transition-colors font-medium">
              Blog
            </Link>
            <Link href="/experience" className="text-gray-300 hover:text-green-400 transition-colors font-medium" target="_blank" rel="noopener noreferrer">
            Experience
            </Link>
            <Link href="/portfolioAdmin" className="text-gray-300 hover:text-green-400 transition-colors font-medium" target="_blank" rel="noopener noreferrer">
            Admin Login
            </Link>
          </div>

          {/* Get in Touch Button */}
          <a href="#contact-form" className="ml-auto">
            <Button 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-black transition-all duration-300"
            >
              Get in Touch
            </Button>
          </a>
        </div>
      </div>
    </nav>
  );
}