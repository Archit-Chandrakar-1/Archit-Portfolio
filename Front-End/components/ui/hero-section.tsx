"use client";

import React, { useEffect, useRef } from 'react';
import { ArrowDown, Sparkles, Mail, Linkedin, Twitter } from 'lucide-react';
import { SiGithub, SiWhatsapp, SiInstagram } from 'react-icons/si';
import CelestialBody from './CelestialBody';
import ShootingStarCursor from './shootingStar';
import { useTheme } from "@/app/context/ThemeContext";

// --- Social Links Data ---
const socialLinks = [
  { Icon: SiGithub, href: 'https://github.com/Archit-Chandrakar-1', label: 'GitHub' },
  { Icon: Linkedin, href: 'https://www.linkedin.com/in/archit-chandrakar-39154a1b0/', label: 'LinkedIn' },
  { Icon: Twitter, href: 'https://x.com/ArchitChan86131', label: 'X (Twitter)' },
  { Icon: SiInstagram, href: 'https://www.instagram.com/archit.chandrakar/', label: 'Instagram' },
  { Icon: Mail, href: 'mailto:archit1chandrakar@gmail.com', label: 'Email' },
  { Icon: SiWhatsapp, href: 'https://wa.me/919171311131', label: 'WhatsApp' },
];

// --- Personal Data ---
const personalData = {
  name: "Archit Chandrakar",
  role: "AI Product Manager",
  previousRole: "Lead Software Developer",
  tagline: "From Code to Product Vision",
};

const HeroSection = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { isDark } = useTheme();

  // --- Background Star Animation Logic ---
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let stars: { x: number; y: number; radius: number; opacity: number; twinkleSpeed: number }[] = [];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initStars();
    };

    const initStars = () => {
      stars = [];
      const starCount = Math.floor((canvas.width * canvas.height) / 6000);
      for (let i = 0; i < starCount; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 1.8,
          opacity: Math.random(),
          twinkleSpeed: 0.003 + Math.random() * 0.008
        });
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Only draw background stars in Dark Mode
      if (isDark) {
        stars.forEach((star) => {
          star.opacity += star.twinkleSpeed;
          if (star.opacity > 1 || star.opacity < 0.1) {
            star.twinkleSpeed = -star.twinkleSpeed;
          }
          ctx.beginPath();
          ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity * 0.8})`;
          ctx.fill();
        });
      }
      animationId = requestAnimationFrame(animate);
    };

    resizeCanvas();
    animate();
    window.addEventListener('resize', resizeCanvas);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, [isDark]);

  const scrollToAbout = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToProjects = () => {
    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className={`relative min-h-screen overflow-hidden flex items-center transition-colors duration-1000 ${
      isDark ? 'bg-[#050508]' : 'bg-gradient-to-br from-gray-50 via-white to-blue-50/30'
    }`}>
      
      {/* 1. Custom Cursor Effect */}
      <ShootingStarCursor />

      {/* 2. Background Star Canvas */}
      <canvas
        ref={canvasRef}
        className={`absolute inset-0 z-0 transition-opacity duration-1000 ${
          isDark ? 'opacity-100' : 'opacity-0'
        }`}
      />

      {/* 3. Celestial Body (Sun/Moon Toggle) */}
      <CelestialBody />

      {/* 4. Background Ambience (Nebula & Blurs) */}
      {/* Dark Mode Nebula */}
      <div className={`absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-purple-900/5 via-transparent to-transparent z-0 transition-opacity duration-1000 ${
        isDark ? 'opacity-100' : 'opacity-0'
      }`} />
      <div className={`absolute top-1/4 left-0 w-96 h-96 rounded-full bg-blue-600/5 blur-3xl transition-opacity duration-1000 ${
        isDark ? 'opacity-100' : 'opacity-0'
      }`} />

      {/* Light Mode Glows */}
      <div className={`absolute top-20 left-10 w-72 h-72 rounded-full bg-amber-100/30 blur-3xl transition-opacity duration-1000 ${
        isDark ? 'opacity-0' : 'opacity-100'
      }`} />
      <div className={`absolute bottom-40 left-1/4 w-64 h-64 rounded-full bg-blue-100/20 blur-3xl transition-opacity duration-1000 ${
        isDark ? 'opacity-0' : 'opacity-100'
      }`} />

      {/* 5. Main Content */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl text-left">
          <div className="space-y-8">
            
            {/* Role Badge */}
            <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border backdrop-blur-sm transition-all duration-700 ${
              isDark 
                ? 'border-white/10 bg-white/5' 
                : 'border-black/10 bg-white/50'
            }`}>
              <Sparkles size={14} className={isDark ? 'text-amber-400' : 'text-amber-500'} />
              <span className={`text-sm font-medium tracking-wide transition-colors duration-700 ${
                isDark ? 'text-white/70' : 'text-black/60'
              }`}>
                {personalData.previousRole} <span className="mx-2">→</span> {personalData.role}
              </span>
            </div>

            {/* Name Headline */}
            <h1 className="text-6xl md:text-7xl lg:text-9xl font-bold tracking-tighter leading-none transition-colors duration-700">
              <span className={`block ${isDark ? 'text-white' : 'text-black'}`}>
                {personalData.name.split(' ')[0].toUpperCase()}
              </span>
              <span className={`block ${isDark ? 'text-neutral-500' : 'text-neutral-300'}`}>
                {personalData.name.split(' ')[1].toUpperCase()}
              </span>
            </h1>

            {/* Tagline */}
            <p className={`text-xl md:text-2xl font-light tracking-wide max-w-lg transition-colors duration-700 ${
              isDark ? 'text-neutral-400' : 'text-black/50'
            }`}>
              {personalData.tagline}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 pt-6">
              <button
                onClick={scrollToProjects}
                className="px-8 py-4 bg-[#dc2626] text-white font-medium rounded-full hover:bg-[#b91c1c] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(220,38,38,0.4)]"
              >
                View My Work
              </button>
              <a
                href="#about"
                className={`px-8 py-4 border font-medium rounded-full transition-all duration-300 ${
                  isDark 
                    ? 'border-white/20 text-white hover:border-white hover:bg-white/5' 
                    : 'border-black/20 text-black hover:border-black hover:bg-black/5'
                }`}
              >
                Learn More
              </a>
            </div>

            {/* Social Icons */}
            <div className="flex gap-4 pt-6 flex-wrap">
                {socialLinks.map(({ Icon, href, label }, i) => (
                    <a 
                      key={i} 
                      href={href} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      aria-label={label} 
                      className={`p-3 rounded-full border transition-all duration-300 ${
                        isDark 
                        ? 'border-white/10 text-neutral-400 hover:text-white hover:border-white hover:bg-white/5' 
                        : 'border-black/10 text-neutral-500 hover:text-black hover:border-black hover:bg-black/5'
                    }`}>
                        <Icon size={20} />
                    </a>
                ))}
            </div>

          </div>
        </div>
      </div>

      {/* 6. Scroll Indicator */}
      <button
        onClick={scrollToAbout}
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 z-20 transition-colors duration-300 animate-bounce ${
          isDark ? 'text-white/30 hover:text-[#dc2626]' : 'text-black/30 hover:text-[#dc2626]'
        }`}
      >
        <ArrowDown size={24} />
      </button>

      {/* 7. Bottom Fade Gradient */}
      <div className={`absolute bottom-0 left-0 right-0 h-32 z-10 pointer-events-none transition-colors duration-1000 ${
        isDark 
          ? 'bg-gradient-to-t from-[#050508] to-transparent' 
          : 'bg-gradient-to-t from-white to-transparent'
      }`} />
    </section>
  );
};

export default HeroSection;