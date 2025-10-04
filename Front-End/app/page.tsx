import Navbar from '@/components/ui/navbar';
import HeroSection from '@/components/ui/hero-section';
import ExperienceSection from '@/components/ui/experience';
import ContactForm from '@/components/ui/contactForm';

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <HeroSection />
      <ExperienceSection/>
      <ContactForm/>
    </main>
  );
}