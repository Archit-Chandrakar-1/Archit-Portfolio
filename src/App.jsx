import React, { useState, useEffect } from 'react';
import { Cloudinary } from '@cloudinary/url-gen';
import { auto } from '@cloudinary/url-gen/actions/resize';
import { autoGravity } from '@cloudinary/url-gen/qualifiers/gravity';
import { AdvancedImage } from '@cloudinary/react';
import emailjs from '@emailjs/browser';
import './App.css';

const App = () => {
  const [currentCategory, setCurrentCategory] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  
  const itemsPerPage = 6;

  // Initialize Cloudinary
  const cld = new Cloudinary({ cloud: { cloudName: 'daozx86oq' } });

  // Initialize EmailJS
  useEffect(() => {
    emailjs.init(import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY);
  }, []);

  // Services data
  const services = [
    {
      icon: 'fa-code',
      title: 'Web Development',
      description: 'Creating responsive and modern websites using the latest technologies.'
    },
    {
      icon: 'fa-palette',
      title: 'UI/UX Design',
      description: 'Designing beautiful and intuitive user interfaces for the best user experience.'
    },
    {
      icon: 'fa-mobile-screen',
      title: 'Mobile Development',
      description: 'Building cross-platform mobile applications that work seamlessly.'
    },
    {
      icon: 'fa-magnifying-glass-chart',
      title: 'SEO Optimization',
      description: 'Optimizing websites for better search engine rankings and visibility.'
    }
  ];

  // Experience data
  const experiences = [
    {
      company: 'Google',
      logo: 'https://www.google.com/favicon.ico',
      role: 'Senior Web Developer',
      duration: '2020 - Present',
      achievements: [
        'Led a team of 5 developers for major product launches',
        'Improved website performance by 40%',
        'Implemented new responsive design system'
      ]
    },
    {
      company: 'Microsoft',
      logo: 'https://www.microsoft.com/favicon.ico',
      role: 'Full Stack Developer',
      duration: '2018 - 2020',
      achievements: [
        'Developed and maintained multiple client projects',
        'Reduced server response time by 60%',
        'Created automated testing system'
      ]
    }
  ];

  // Portfolio data with Cloudinary images
  const portfolioCategories = ['All', 'Branding', 'Photography', 'Fashion', 'Product'];
  const portfolioItems = [
    {
      cloudinaryId: 'cld-sample-5',
      category: 'Branding',
      link: 'https://example.com/project1'
    },
    {
      cloudinaryId: 'cld-sample-4',
      category: 'Photography',
      link: 'https://example.com/project2'
    },
    {
      cloudinaryId: 'cld-sample-3',
      category: 'Fashion',
      link: 'https://example.com/project3'
    },
    {
      cloudinaryId: 'cld-sample-2',
      category: 'Product',
      link: 'https://example.com/project4'
    },
    {
      cloudinaryId: 'cld-sample',
      category: 'Branding',
      link: 'https://example.com/project5'
    },
    {
      cloudinaryId: 'samples/landscapes/beach-boat',
      category: 'Photography',
      link: 'https://example.com/project6'
    }
  ];

  // Portfolio filtering
  const filterPortfolioItems = (category) => {
    setCurrentCategory(category);
    setCurrentPage(1);
  };

  const getFilteredItems = () => {
    const filteredItems = currentCategory === 'All' 
      ? portfolioItems 
      : portfolioItems.filter(item => item.category === currentCategory);
    
    const startIndex = (currentPage - 1) * itemsPerPage;
    return {
      items: filteredItems.slice(startIndex, startIndex + itemsPerPage),
      totalPages: Math.ceil(filteredItems.length / itemsPerPage)
    };
  };

  // Contact form handling
  const handleSubmit = async (e) => {
    e.preventDefault();
    const submitButton = e.target.querySelector('.contact-submit');
    submitButton.textContent = 'Sending...';
    submitButton.disabled = true;

    try {
      await emailjs.send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      );
      
      alert('Thank you. I will get back to you as soon as possible.');
      setForm({ name: '', email: '', message: '' });
    } catch (error) {
      console.error(error);
      alert('Something went wrong. Please try again.');
    } finally {
      submitButton.textContent = 'Send';
      submitButton.disabled = false;
    }
  };

  // Cloudinary profile image
  const profileImg = cld
    .image('Archit')
    .format('auto')
    .quality('auto')
    .resize(auto().gravity(autoGravity()).width(500).height(500));

  // Function to create optimized Cloudinary images for portfolio
  const createPortfolioImage = (cloudinaryId) => {
    return cld
      .image(cloudinaryId)
      .format('auto')
      .quality('auto')
      .resize(auto().gravity(autoGravity()).width(400).height(400));
  };

  const { items: visibleItems, totalPages } = getFilteredItems();

  return (
    <div className="App">
      <nav>
        <a href="#" className="logo">Archit Chandrakar</a>
        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#services">Services</a>
          <a href="#experience">Experience</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#about">About</a>
          <a href="#blogs">Blogs</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>
      
      <section className="hero" id="home">
        <iframe 
          src="https://player.cloudinary.com/embed/?cloud_name=daozx86oq&public_id=bdcf8jiwc6qbp88smoya&player[autoplay]=true&player[autoplayMode]=on-scroll&player[muted]=true&player[loop]=true&player[controls]=false"
          width="100%" 
          height="100%" 
          style={{ border: 'none', position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover' }}
          allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
          allowFullScreen
          frameBorder="0">
        </iframe>
        <div className="hero-content">
          <h1>Hello I'm,<br />Archit Chandrakar</h1>
          <p>Webdesigner & Entrepreneur</p>
        </div>
      </section>

      <section className="about" id="about">
        <div className="about-container">
          <div className="photo-frame">
            <AdvancedImage cldImg={profileImg} alt="Archit Chandrakar" />
          </div>
          <div className="about-content">
            <h2>About Me</h2>
            <p>Your description goes here. Write about your journey, expertise, and what drives you as a web designer and entrepreneur.</p>
            
            <div className="info-cards">
              <div className="info-card">
                <h3>Experience</h3>
                <p>5+ Years</p>
              </div>
              <div className="info-card">
                <h3>Projects</h3>
                <p>100+ Completed</p>
              </div>
            </div>

            <div className="social-links">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://wa.me/yourphone" target="_blank" rel="noopener noreferrer" className="social-icon">
                <i className="fab fa-whatsapp"></i>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                <i className="fab fa-x-twitter"></i>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="services" id="services">
        <div className="services-container">
          <h2>My Services</h2>
          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-card">
                <i className={`fas ${service.icon}`}></i>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="experience" id="experience">
        <div className="experience-container">
          <h2>My Experience</h2>
          <div className="experience-timeline">
            {experiences.map((exp, index) => (
              <div key={index} className="experience-card">
                <div className="company-info">
                  <img src={exp.logo} alt={exp.company} className="company-logo" />
                  <div>
                    <h3>{exp.role}</h3>
                    <h4>{exp.company}</h4>
                    <p className="duration">{exp.duration}</p>
                  </div>
                </div>
                <ul className="achievements">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i}>{achievement}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="portfolio" id="portfolio">
        <div className="portfolio-container">
          <h2>My Portfolio</h2>
          <div className="portfolio-categories">
            {portfolioCategories.map(category => (
              <button 
                key={category}
                className={`category-btn ${category === currentCategory ? 'active' : ''}`}
                onClick={() => filterPortfolioItems(category)}
              >
                {category}
              </button>
            ))}
          </div>
          <div className="portfolio-grid">
            {visibleItems.map((item, index) => (
              <a key={index} href={item.link} target="_blank" rel="noopener noreferrer" className="portfolio-card">
                <AdvancedImage cldImg={createPortfolioImage(item.cloudinaryId)} alt={item.category} />
                <div className="portfolio-card-overlay">
                  <span>{item.category}</span>
                </div>
              </a>
            ))}
          </div>
          <div className="portfolio-pagination">
            {Array.from({ length: totalPages }, (_, i) => (
              <button 
                key={i + 1}
                className={`page-btn ${currentPage === i + 1 ? 'active' : ''}`}
                onClick={() => setCurrentPage(i + 1)}
              >
                {i + 1}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="contact" id="contact">
        <div className="contact-container">
          <h2>Contact Me</h2>
          <div className="contact-content">
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="contact-input"
                  placeholder="What's your name?"
                  required
                  value={form.name}
                  onChange={(e) => setForm({...form, name: e.target.value})}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Your Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className="contact-input"
                  placeholder="What's your email address?"
                  required
                  value={form.email}
                  onChange={(e) => setForm({...form, email: e.target.value})}
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Your Message</label>
                <textarea 
                  id="message" 
                  className="contact-input"
                  placeholder="What would you like to say?"
                  rows="7"
                  required
                  value={form.message}
                  onChange={(e) => setForm({...form, message: e.target.value})}
                />
              </div>
              <button type="submit" className="contact-submit">Send</button>
            </form>
            <div className="contact-decoration">
              <div className="globe-container">
                <div className="globe"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default App;