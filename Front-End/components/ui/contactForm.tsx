"use client";

export default function ContactForm() {
  return (
    <div className="min-h-screen flex items-center justify-center p-5 bg-gradient-to-br from-[#667eea] to-[#764ba2]">
      <div className="w-full max-w-[1100px] bg-white rounded-[40px] shadow-2xl overflow-hidden relative">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-[60px] p-8 md:p-[60px] items-center">
          
          {/* Left Section - Form */}
          <div className="relative z-[2]">
            <h1 className="text-[42px] text-[#6366f1] font-bold mb-4">
              Let's talk
            </h1>
            <p className="text-[#6b7280] text-[15px] leading-relaxed mb-9">
              To request a quote or want to meet up for coffee, contact us directly or fill out the form and we will get back to you promptly.
            </p>

            <form action="https://formspree.io/f/xkgqbdvq" method="POST">
              <div className="mb-5">
                <label htmlFor="name" className="block text-[#6b7280] text-[13px] mb-2 font-medium">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-[18px] py-[14px] border border-[#e5e7eb] rounded-xl text-sm bg-[#f9fafb] text-[#1f2937] focus:outline-none focus:border-[#6366f1] focus:bg-white focus:shadow-[0_0_0_3px_rgba(99,102,241,0.1)] transition-all duration-300"
                  required
                />
              </div>

              <div className="mb-5">
                <label htmlFor="email" className="block text-[#6b7280] text-[13px] mb-2 font-medium">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-[18px] py-[14px] border border-[#e5e7eb] rounded-xl text-sm bg-[#f9fafb] text-[#1f2937] focus:outline-none focus:border-[#6366f1] focus:bg-white focus:shadow-[0_0_0_3px_rgba(99,102,241,0.1)] transition-all duration-300"
                  required
                />
              </div>

              <div className="mb-5">
                <label htmlFor="phone" className="block text-[#6b7280] text-[13px] mb-2 font-medium">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full px-[18px] py-[14px] border border-[#e5e7eb] rounded-xl text-sm bg-[#f9fafb] text-[#1f2937] focus:outline-none focus:border-[#6366f1] focus:bg-white focus:shadow-[0_0_0_3px_rgba(99,102,241,0.1)] transition-all duration-300"
                  required
                />
              </div>

              <div className="mb-5">
                <label htmlFor="message" className="block text-[#6b7280] text-[13px] mb-2 font-medium">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Type something if you want..."
                  className="w-full px-[18px] py-[14px] border border-[#e5e7eb] rounded-xl text-sm bg-[#f9fafb] text-[#1f2937] resize-y min-h-[120px] focus:outline-none focus:border-[#6366f1] focus:bg-white focus:shadow-[0_0_0_3px_rgba(99,102,241,0.1)] transition-all duration-300"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-[#6366f1] text-white rounded-xl text-base font-semibold cursor-pointer transition-all duration-300 shadow-[0_4px_14px_rgba(99,102,241,0.3)] hover:bg-[#4f46e5] hover:shadow-[0_6px_20px_rgba(99,102,241,0.4)] hover:-translate-y-0.5 active:translate-y-0"
              >
                Send Message
              </button>
            </form>
          </div>

          <div className="md:absolute static md:bottom-[60px] md:right-[60px] text-right mt-8 md:mt-0 text-center md:text-right">
              <div className="flex items-center justify-end md:justify-end justify-center mb-3 text-[#6b7280] text-[13px]">
                <span>Raipur, Chhattisgarh India</span>
                <svg className="ml-2 opacity-60" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
              </div>

              <div className="flex items-center justify-end md:justify-end justify-center mb-3 text-[#6b7280] text-[13px]">
                <span>+91 9171311131</span>
                <svg className="ml-2 opacity-60" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
              </div>

              <div className="flex items-center justify-end md:justify-end justify-center mb-3 text-[#6b7280] text-[13px]">
                <span>archit1chandrakar@gmail.com</span>
                <svg className="ml-2 opacity-60" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
              </div>

              {/* Social Media Icons */}
              <div className="flex gap-3 mt-4 justify-end md:justify-end justify-center">
              {/* Facebook Icon */}
    
    
                {/* Twitter Icon */}
                <a 
                  href="#" 
                  // Changed background color to black for 'X' branding
                  className="w-10 h-10 rounded-full flex items-center justify-center bg-black text-white transition-all duration-300 shadow-[0_2px_8px_rgba(0,0,0,0.1)] hover:-translate-y-1 hover:shadow-[0_4px_12px_rgba(0,0,0,0.15)]" 
                  aria-label="X (Twitter)"
                >
                    {/* Updated SVG path for the 'X' logo */}
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M18.901 1.164h3.68c-.618 3.12-2.182 5.823-4.256 7.643 2.113-.08 3.862-1.742 4.092-3.793h-1.57c-.206 1.15-1.127 2.085-2.296 2.376-1.168.29-2.34-.14-3.08-1.077-.74-.937-1.042-2.238-.857-3.64 1.258.125 2.508.068 3.75-.18V1.164zM10.7 13.568l-3.32-8.52h-2.12L10.7 13.568zm-5.787 5.76h11.232c1.47 0 2.658-.78 3.47-1.87 1.5-2.06 1.755-4.542.845-7.143-2.617 1.636-5.717 2.213-9.15 1.583-3.433-.63-6.177-2.67-7.85-5.32 1.34 2.89 4.14 4.542 7.15 4.542z"/>
                    </svg>
                </a>
                
                {/* Instagram Icon (Updated Link) */}
                <a 
                  href="https://www.instagram.com/archit.chandrakar" 
                  className="w-10 h-10 rounded-full flex items-center justify-center bg-gradient-to-br from-[#f09433] via-[#dc2743] to-[#bc1888] text-white transition-all duration-300 shadow-[0_2px_8px_rgba(0,0,0,0.1)] hover:-translate-y-1 hover:shadow-[0_4px_12px_rgba(0,0,0,0.15)]" 
                  aria-label="Instagram Profile: archit.chandrakar"
                >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/>
                    </svg>
                </a>
                
                {/* LinkedIn Icon (New) */}
                <a 
                  href="https://www.linkedin.com/in/archit-chandrakar-39154a1b0/" 
                  className="w-10 h-10 rounded-full flex items-center justify-center bg-[#0077B5] text-white transition-all duration-300 shadow-[0_2px_8px_rgba(0,0,0,0.1)] hover:-translate-y-1 hover:shadow-[0_4px_12px_rgba(0,0,0,0.15)]" 
                  aria-label="LinkedIn Profile: Archit Chandrakar"
                >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M20.447 20.452h-3.568v-5.604c0-1.336-.237-2.385-1.379-2.385-1.38 0-1.581 1.03-1.581 2.385v5.604h-3.567s.04-9.691 0-10.74h3.567v1.543h.04c.548-.87 1.573-1.897 3.528-1.897 2.32 0 4.09 1.517 4.09 4.706v6.388zM5.313 7.884c-1.142 0-2.068-.926-2.068-2.068 0-1.142.926-2.068 2.068-2.068 1.142 0 2.068.926 2.068 2.068 0 1.142-.926 2.068-2.068 2.068zm1.789 12.568h-3.578v-10.74h3.578v10.74z"/>
                    </svg>
                </a>
            </div>
          </div>

          {/* Right Section - Illustration */}
          <div className="relative flex flex-col items-center justify-center order-first md:order-last">
            <div className="relative w-full max-w-[400px] flex items-center justify-center">
              
              {/* Decorative Bubbles */}
              <div className="absolute w-[60px] h-[60px] rounded-full bg-[#f472b6] opacity-20 top-[10%] -left-[10%]" />
              <div className="absolute w-[40px] h-[40px] rounded-full bg-[#fbbf24] opacity-20 top-[15%] right-[10%]" />
              <div className="absolute w-[30px] h-[30px] rounded-full bg-[#34d399] opacity-20 bottom-[20%] left-[5%]" />
              <div className="absolute w-[25px] h-[25px] rounded-full bg-[#60a5fa] opacity-20 bottom-[10%] right-[15%]" />
              <div className="absolute w-[15px] h-[15px] rounded-full bg-[#a78bfa] opacity-20 top-[40%] -left-[5%]" />

              {/* Email Envelope Illustration */}
              <svg className="w-[280px] h-auto drop-shadow-[0_10px_30px_rgba(99,102,241,0.15)]" viewBox="0 0 400 350" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M80 120L200 200L320 120L320 280L80 280L80 120Z" fill="#6366f1" opacity="0.9"/>
                <path d="M80 120L200 200L320 120L200 60L80 120Z" fill="#818cf8"/>
                <rect x="120" y="140" width="160" height="100" rx="8" fill="white" opacity="0.95"/>
                <line x1="140" y1="165" x2="260" y2="165" stroke="#6366f1" strokeWidth="3" opacity="0.3"/>
                <line x1="140" y1="185" x2="240" y2="185" stroke="#6366f1" strokeWidth="3" opacity="0.3"/>
                <line x1="140" y1="205" x2="220" y2="205" stroke="#6366f1" strokeWidth="3" opacity="0.3"/>
                <circle cx="100" cy="90" r="25" fill="#60a5fa" opacity="0.8"/>
                <circle cx="90" cy="85" r="3" fill="white"/>
                <circle cx="100" cy="85" r="3" fill="white"/>
                <circle cx="110" cy="85" r="3" fill="white"/>
                <path d="M310 200C310 188 318 178 328 178C338 178 346 188 346 200C346 212 338 222 328 222C326 222 324 221.5 322 221L310 225L314 216C311 212 310 206 310 200Z" fill="#f472b6" opacity="0.7"/>
                <circle cx="150" cy="60" r="18" fill="#34d399" opacity="0.8"/>
                <path d="M145 52L145 68L158 60L145 52Z" fill="white"/>
                <g transform="translate(280, 80) rotate(-25)">
                  <path d="M0 0L30 10L0 20L5 10L0 0Z" fill="#a78bfa" opacity="0.8"/>
                  <path d="M5 10L30 10" stroke="#a78bfa" strokeWidth="2"/>
                </g>
                <circle cx="340" cy="250" r="4" fill="#fbbf24" opacity="0.6"/>
                <circle cx="60" cy="260" r="4" fill="#f472b6" opacity="0.6"/>
                <path d="M350 140L355 150L360 140" stroke="#34d399" strokeWidth="2" opacity="0.5"/>
                <path d="M55 150L60 140L65 150" stroke="#60a5fa" strokeWidth="2" opacity="0.5"/>
              </svg>
            </div>

            {/* Contact Information */}
            
          </div>
          
        </div>
      </div>
    </div>
  );
}
