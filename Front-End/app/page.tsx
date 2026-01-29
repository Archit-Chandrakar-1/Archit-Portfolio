

import Navbar from '@/components/ui/navbar';
import HeroSection from '@/components/ui/hero-section';
import ExperienceSection from '@/components/ui/experience';
import ContactForm from '@/components/ui/contactForm';
import AboutMe from './about/page';
import ExpertiseSection from './expertise/page';
import Certifications from './certification/page';
import Footer from './footer/page';

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <HeroSection />
      <AboutMe/>
      <ExperienceSection/>
      <Certifications/>
      <ExpertiseSection/>
      <ContactForm/>
      <Footer/>
      
    </main>
  );
}