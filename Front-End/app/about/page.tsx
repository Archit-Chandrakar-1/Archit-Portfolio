import React from "react";
import { MapPin, Mail, Linkedin, Github, Twitter } from "lucide-react"; // Ensure lucide-react is installed

export default function AboutMe() {
  return (
    <section className="bg-white min-h-screen flex items-center py-20 px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          
          {/* --- LEFT COLUMN: Text Content --- */}
          <div className="flex flex-col justify-center">
            
            {/* Tagline */}
            <h3 className="text-red-500 text-sm font-bold tracking-[0.2em] uppercase mb-6">
              About Me
            </h3>
            
            {/* Headline */}
            <h1 className="text-5xl md:text-6xl font-extrabold text-black leading-tight mb-2">
              Building bridges <br />
              between
            </h1>
            <h1 className="text-5xl md:text-6xl font-extrabold text-gray-300 leading-tight mb-8">
              code & vision
            </h1>

            {/* Bio Paragraph */}
            <p className="text-lg text-gray-600 leading-relaxed mb-10">
              AI Product Manager transitioning from a strong technical background in full-stack development and product execution. 
              Skilled in AI-first product strategy, problem discovery, user research, and data-driven decision making. 
              Experienced building digital platforms, integrating AI tools, and collaborating with engineering teams. 
              Currently pursuing AI-First Product Management (Airtribe) to master PM, AI workflows, and industry-ready product skills.
            </p>

            {/* Contact Details */}
            <div className="flex flex-col sm:flex-row gap-6 mb-12">
              <div className="flex items-center gap-3 text-gray-500">
                <MapPin className="text-red-500 w-5 h-5" />
                <span>Raipur, Chhattisgarh</span>
              </div>
              <div className="flex items-center gap-3 text-gray-500">
                <Mail className="text-red-500 w-5 h-5" />
                <a href="mailto:archit1chandrakar@gmail.com" className="hover:text-red-500 transition-colors">
                  archit1chandrakar@gmail.com
                </a>
              </div>
            </div>

            {/* Horizontal Separator */}
            <div className="h-px w-full bg-gray-200 mb-8"></div>

            {/* Social Links */}
            <div className="flex items-center gap-8">
              <span className="text-gray-400 font-medium">Connect with me:</span>
              <div className="flex gap-6">
                <a href="#" className="flex items-center gap-2 text-gray-600 hover:text-black transition-colors font-medium">
                  <Linkedin className="w-5 h-5" />
                  LinkedIn
                </a>
                <a href="#" className="flex items-center gap-2 text-gray-600 hover:text-black transition-colors font-medium">
                  <Github className="w-5 h-5" />
                  GitHub
                </a>
                <a href="#" className="flex items-center gap-2 text-gray-600 hover:text-black transition-colors font-medium">
                  <Twitter className="w-5 h-5" />
                  Twitter
                </a>
              </div>
            </div>
          </div>

          {/* --- RIGHT COLUMN: Stats Grid --- */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 h-full">
            {/* Card 1 */}
            <div className="bg-gray-50 rounded-3xl p-10 flex flex-col justify-center hover:bg-gray-100 transition-colors duration-300">
              <span className="text-5xl font-bold text-black mb-2">2+</span>
              <span className="text-gray-500 font-medium">Years in Tech</span>
            </div>

            {/* Card 2 */}
            <div className="bg-gray-50 rounded-3xl p-10 flex flex-col justify-center hover:bg-gray-100 transition-colors duration-300">
              <span className="text-5xl font-bold text-black mb-2">10+</span>
              <span className="text-gray-500 font-medium">Projects Delivered</span>
            </div>

            {/* Card 3 */}
            <div className="bg-gray-50 rounded-3xl p-10 flex flex-col justify-center hover:bg-gray-100 transition-colors duration-300">
              <span className="text-5xl font-bold text-black mb-2">10+</span>
              <span className="text-gray-500 font-medium">Domains Managed</span>
            </div>

            {/* Card 4 */}
            <div className="bg-gray-50 rounded-3xl p-10 flex flex-col justify-center hover:bg-gray-100 transition-colors duration-300">
              <span className="text-5xl font-bold text-black mb-2">3</span>
              <span className="text-gray-500 font-medium">Companies Worked</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}