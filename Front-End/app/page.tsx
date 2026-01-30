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
      
      {/* Hero doesn't need an ID as it's at the top */}
      <HeroSection />

      {/* Linked to Navbar "About" */}
      <section id="about">
        <AboutMe/>
      </section>

      {/* Experience doesn't have a direct nav link currently, 
          but usually sits nicely after About */}
      <ExperienceSection/>

      {/* Linked to Navbar "Expertise" */}
      <section id="expertise">
        <ExpertiseSection/>
      </section>

      {/* Linked to Navbar "Certifications" */}
      <section id="certifications">
        <Certifications/>
      </section>
      
      {/* Linked to Navbar "Let's Connect" button */}
      <section id="contact">
        <ContactForm/>
      </section>

      <Footer/>
    </main>
  );
}