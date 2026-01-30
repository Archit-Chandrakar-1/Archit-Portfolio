"use client";

import React from 'react';
import Navbar from '@/components/ui/navbar';
import Footer from '../footer/page';
import { Calendar, Video, MessageCircle, ArrowRight, Share2, Facebook, Twitter, Linkedin } from 'lucide-react';

// --- Mock Blog Data ---
const blogPosts = [
  {
    id: 1,
    day: "15",
    month: "JAN",
    year: "2026",
    title: "The Future of AI in EdTech: Beyond Automation",
    excerpt: "How Generative AI is reshaping personalized learning paths. We explore the shift from static curriculums to dynamic, AI-driven educational experiences that adapt to every student's pace.",
    category: "AI Product",
    image: "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?q=80&w=800&auto=format&fit=crop",
    slug: "ai-in-edtech",
    comments: 24,
    type: "article"
  },
  {
    id: 2,
    day: "22",
    month: "DEC",
    year: "2025",
    title: "Migrating Legacy Systems to Modern Stacks",
    excerpt: "A deep dive case study on migrating the MATS University portal from PHP to React.js. Discover the challenges of data integrity, SEO preservation, and the massive performance wins achieved.",
    category: "Development",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=800&auto=format&fit=crop",
    slug: "migration-case-study",
    comments: 12,
    type: "video"
  },
  {
    id: 3,
    day: "10",
    month: "NOV",
    year: "2025",
    title: "Data-Driven Decisions with RFM Analysis",
    excerpt: "Using Python to unlock e-commerce growth. We break down Recency, Frequency, and Monetary analysis and how visualzing this data can transform your marketing strategy.",
    category: "Data Science",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
    slug: "rfm-analysis",
    comments: 56,
    type: "article"
  }
];

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-white relative overflow-hidden selection:bg-emerald-200 selection:text-emerald-900">
      <Navbar />

      {/* === LIQUID BACKGROUND ANIMATION === */}
      <div className="fixed inset-0 pointer-events-none z-0">
         {/* Top Right Orb */}
         <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-emerald-100/60 rounded-full blur-[100px] animate-float-slow"></div>
         {/* Bottom Left Orb */}
         <div className="absolute bottom-[10%] left-[-10%] w-[600px] h-[600px] bg-emerald-50/80 rounded-full blur-[120px] animate-pulse-slow"></div>
         {/* Center Small Orb */}
         <div className="absolute top-[40%] left-[40%] w-[300px] h-[300px] bg-emerald-200/20 rounded-full blur-[80px]"></div>
      </div>

      {/* --- Page Header --- */}
      <section className="relative z-10 pt-40 pb-20 text-center">
        <h1 className="text-5xl md:text-7xl font-serif font-medium text-emerald-950 tracking-tight mb-4">
          The Journal
        </h1>
        <div className="flex items-center justify-center gap-4">
            <div className="h-px w-12 bg-emerald-300"></div>
            <p className="text-emerald-600/80 uppercase tracking-[0.2em] text-sm font-medium">
                Insights & Reflections
            </p>
            <div className="h-px w-12 bg-emerald-300"></div>
        </div>
      </section>

      {/* --- Blog List Section --- */}
      <section className="relative z-10 pb-32 px-6 lg:px-8 max-w-7xl mx-auto space-y-24">
        {blogPosts.map((post, index) => (
          <article 
            key={post.id} 
            className={`flex flex-col lg:flex-row gap-12 items-center ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
          >
            
            {/* === LEFT: IMAGE COMPOSITION === */}
            <div className="w-full lg:w-1/2 relative group">
                {/* The "Color Block" Background (Emerald) */}
                <div className={`absolute top-8 ${index % 2 !== 0 ? '-right-8' : '-left-8'} w-full h-full bg-emerald-50 rounded-3xl -z-10 transition-transform duration-500 group-hover:scale-[1.02] group-hover:bg-emerald-100`}></div>
                
                {/* The "Glass Frame" & Image */}
                <div className="relative p-3 bg-white/40 backdrop-blur-md border border-white/60 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-transform duration-500 group-hover:-translate-y-2">
                    <div className="relative overflow-hidden rounded-xl aspect-[4/3]">
                        <img 
                            src={post.image} 
                            alt={post.title} 
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        {/* Overlay on hover */}
                        <div className="absolute inset-0 bg-emerald-900/0 group-hover:bg-emerald-900/10 transition-colors duration-500"></div>
                    </div>
                </div>
            </div>

            {/* === RIGHT: CONTENT === */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center">
                
                {/* Meta Header */}
                <div className="flex items-center gap-6 mb-6">
                    {/* Date Block */}
                    <div className="flex items-baseline gap-2 text-emerald-950">
                        <span className="text-4xl font-bold">{post.day}</span>
                        <span className="text-xl font-medium uppercase text-emerald-600">{post.month}</span>
                    </div>

                    {/* Icons */}
                    <div className="flex items-center gap-3 text-gray-400 text-sm">
                        {post.type === 'video' ? <Video size={16} /> : <div className="w-4 h-4 rounded-full bg-emerald-100"></div>}
                        <div className="flex items-center gap-1">
                            <MessageCircle size={16} />
                            <span>{post.comments}</span>
                        </div>
                        <span className="px-3 py-1 bg-emerald-50 text-emerald-700 text-xs font-bold uppercase tracking-wider rounded-full">
                            {post.category}
                        </span>
                    </div>
                </div>

                {/* Title */}
                <h2 className="text-3xl md:text-4xl font-serif text-gray-900 leading-tight mb-6 hover:text-emerald-700 transition-colors cursor-pointer">
                    {post.title}
                </h2>

                {/* Excerpt */}
                <p className="text-gray-500 text-lg leading-relaxed mb-8 font-light">
                    {post.excerpt}
                </p>

                {/* Footer Actions */}
                <div className="flex items-center justify-between border-t border-emerald-100 pt-8">
                    
                    {/* Button */}
                    <a href={`/blog/${post.slug}`} className="group inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 text-white rounded-full font-medium shadow-lg shadow-emerald-200 hover:bg-emerald-700 hover:shadow-emerald-300 transition-all duration-300">
                        Continue Reading
                        <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                    </a>

                    {/* Social Share */}
                    <div className="flex items-center gap-4 text-gray-400">
                        <button className="hover:text-emerald-600 transition-colors"><Facebook size={18} /></button>
                        <button className="hover:text-emerald-600 transition-colors"><Twitter size={18} /></button>
                        <button className="hover:text-emerald-600 transition-colors"><Linkedin size={18} /></button>
                    </div>
                </div>

            </div>

          </article>
        ))}
      </section>

      <Footer />
    </main>
  );
}