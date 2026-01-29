"use client";

import React, { useEffect, useRef } from 'react';
import { ArrowDown, Sparkles, Github, Linkedin, Twitter, Mail } from 'lucide-react';
import CelestialBody from './CelestialBody';
import { useTheme } from '@/app/context/ThemeContext';

// Mock Data (Replace with your actual import)
const personalData = {
  name: "Archit Chandrakar",
  role: "AI Product Manager",
  previousRole: "Lead Software Developer",
  tagline: "From Code to Product Vision",
};

const HeroSection = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { isDark } = useTheme();

  // --- Star Animation Logic ---
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
      
      // Only draw stars in Dark Mode
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

  const scrollToProjects = () => {
    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className={`relative min-h-screen overflow-hidden flex items-center transition-colors duration-1000 ${
      isDark ? 'bg-[#050508]' : 'bg-white'
    }`}>
      
      {/* 1. Star Canvas (Background) */}
      <canvas
        ref={canvasRef}
        className={`absolute inset-0 z-0 transition-opacity duration-1000 ${
          isDark ? 'opacity-100' : 'opacity-0'
        }`}
      />

      {/* 2. Celestial Body (Sun/Moon) - Positioned Right */}
      <CelestialBody />

      {/* 3. Dark Mode Background Effects (Nebula) */}
      <div className={`absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-purple-900/10 via-transparent to-transparent z-0 transition-opacity duration-1000 ${
        isDark ? 'opacity-100' : 'opacity-0'
      }`} />
      
      {/* 4. Light Mode Background Effects (Soft Blurs) */}
      <div className={`absolute top-20 left-10 w-72 h-72 rounded-full bg-amber-100/30 blur-3xl transition-opacity duration-1000 ${
        isDark ? 'opacity-0' : 'opacity-100'
      }`} />

      {/* 5. Main Content - Positioned LEFT */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl text-left">
          <div className="space-y-8">
            
            {/* Role Badge */}
            <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border backdrop-blur-sm transition-all duration-700 ${
              isDark 
                ? 'border-white/10 bg-white/5' 
                : 'border-black/10 bg-black/5'
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
                ARCHIT
              </span>
              <span className={`block ${isDark ? 'text-neutral-500' : 'text-neutral-300'}`}>
                CHANDRAKAR
              </span>
            </h1>

            {/* Tagline */}
            <p className={`text-xl md:text-2xl font-light tracking-wide max-w-lg transition-colors duration-700 ${
              isDark ? 'text-neutral-400' : 'text-neutral-500'
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

            {/* Social Icons Row */}
            <div className="flex gap-6 pt-8">
                {[Github, Linkedin, Twitter, Mail].map((Icon, i) => (
                    <a key={i} href="#" className={`p-3 rounded-full border transition-all duration-300 ${
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

      {/* Bottom Fade Gradient */}
      <div className={`absolute bottom-0 left-0 right-0 h-32 z-10 pointer-events-none transition-colors duration-1000 ${
        isDark 
          ? 'bg-gradient-to-t from-[#050508] to-transparent' 
          : 'bg-gradient-to-t from-white to-transparent'
      }`} />
      
    </section>
  );
};

export default HeroSection;