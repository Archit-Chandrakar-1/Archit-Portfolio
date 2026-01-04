

import Navbar from '@/components/ui/navbar';
import HeroSection from '@/components/ui/hero-section';
import ExperienceSection from '@/components/ui/experience';
import ContactForm from '@/components/ui/contactForm';
import Service from './service/page';

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <HeroSection />
      <ExperienceSection/>
      <Service/>
      <ContactForm/>
      
    </main>
  );
}