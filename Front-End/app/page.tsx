import Navbar from '@/components/ui/navbar';
import HeroSection from '@/components/ui/hero-section';
// Make sure this import path matches your actual file name (experience.tsx vs experience-section.tsx)
import ExperienceSection from '@/components/ui/experience'; 
import ContactForm from '@/components/ui/contactForm';
import AboutMe from './about/page';
import ExpertiseSection from './expertise/page';
import Certifications from './certification/page';
import Footer from './footer/page';
import { PrismaClient } from '@prisma/client'; // <--- 1. IMPORT PRISMA

const prisma = new PrismaClient(); // <--- 2. INITIALIZE PRISMA

// 3. MAKE THIS ASYNC
export default async function Home() {
  
  // 4. FETCH THE DATA (This defines 'experiences')
  const experiences = await prisma.experience.findMany({
    orderBy: { createdAt: 'desc' }
  });

  return (
    <main className="relative">
      <Navbar />
      
      <HeroSection />

      <section id="about">
        <AboutMe/>
      </section>

      <section id="experience" className="py-24 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
            Professional <span className="text-red-600">Journey</span>
          </h2>
          {/* Now 'experiences' exists! */}
          <ExperienceSection data={experiences} />
        </div>
      </section>

      <section id="expertise">
        <ExpertiseSection/>
      </section>

      <section id="certifications">
        <Certifications/>
      </section>
      
      <section id="contact">
        <ContactForm/>
      </section>

      <Footer/>
    </main>
  );
}