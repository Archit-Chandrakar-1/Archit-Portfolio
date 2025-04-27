import './style.css'
import emailjs from '@emailjs/browser';

// Initialize EmailJS
emailjs.init(import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY);

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

// Portfolio data
const portfolioCategories = ['All', 'Branding', 'Photography', 'Fashion', 'Product'];
const portfolioItems = [
  {
    image: 'https://images.pexels.com/photos/1037992/pexels-photo-1037992.jpeg',
    category: 'Branding',
    link: 'https://example.com/project1'
  },
  {
    image: 'https://images.pexels.com/photos/2442888/pexels-photo-2442888.jpeg',
    category: 'Photography',
    link: 'https://example.com/project2'
  },
  {
    image: 'https://images.pexels.com/photos/994523/pexels-photo-994523.jpeg',
    category: 'Fashion',
    link: 'https://example.com/project3'
  },
  {
    image: 'https://images.pexels.com/photos/1667088/pexels-photo-1667088.jpeg',
    category: 'Product',
    link: 'https://example.com/project4'
  }
];

// Portfolio filtering and pagination
let currentCategory = 'All';
let currentPage = 1;
const itemsPerPage = 6;

function filterPortfolioItems(category) {
  currentCategory = category;
  currentPage = 1;
  updatePortfolio();
}

function updatePortfolio() {
  const filteredItems = currentCategory === 'All' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === currentCategory);
  
  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const visibleItems = filteredItems.slice(startIndex, startIndex + itemsPerPage);
  
  const portfolioGrid = document.querySelector('.portfolio-grid');
  const pagination = document.querySelector('.portfolio-pagination');
  
  if (portfolioGrid) {
    portfolioGrid.innerHTML = visibleItems.map(item => `
      <a href="${item.link}" target="_blank" class="portfolio-card">
        <img src="${item.image}" alt="${item.category}">
        <div class="portfolio-card-overlay">
          <span>${item.category}</span>
        </div>
      </a>
    `).join('');
    
    pagination.innerHTML = Array.from({ length: totalPages }, (_, i) => `
      <button class="page-btn ${currentPage === i + 1 ? 'active' : ''}"
              onclick="window.changePage(${i + 1})">${i + 1}</button>
    `).join('');
  }
}

// Contact form handling
let form = {
  name: '',
  email: '',
  message: ''
};

function handleSubmit(e) {
  e.preventDefault();
  const submitButton = document.querySelector('.contact-submit');
  submitButton.textContent = 'Sending...';
  submitButton.disabled = true;

  emailjs.send(
    import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
    import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
    {
      from_name: form.name,
      from_email: form.email,
      message: form.message,
    },
    import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
  ).then(
    () => {
      alert('Thank you. I will get back to you as soon as possible.');
      form = { name: '', email: '', message: '' };
      document.querySelectorAll('.contact-input').forEach(input => {
        input.value = '';
      });
      submitButton.textContent = 'Send';
      submitButton.disabled = false;
    },
    (error) => {
      console.error(error);
      alert('Something went wrong. Please try again.');
      submitButton.textContent = 'Send';
      submitButton.disabled = false;
    }
  );
}

window.filterPortfolioItems = filterPortfolioItems;
window.changePage = (page) => {
  currentPage = page;
  updatePortfolio();
};

document.querySelector('#app').innerHTML = `
  <nav>
    <a href="#" class="logo">Archit Chandrakar</a>
    <div class="nav-links">
      <a href="#home">Home</a>
      <a href="#services">Services</a>
      <a href="#experience">Experience</a>
      <a href="#portfolio">Portfolio</a>
      <a href="#about">About</a>
      <a href="#blogs">Blogs</a>
      <a href="#contact">Contact</a>
    </div>
  </nav>
  
  <section class="hero" id="home">
    <video autoplay loop muted playsinline>
      <source src="/Videos/Archit-portfolio-video.mp4" type="video/mp4">
    </video>
    <div class="hero-content">
      <h1>Hello I'm,<br>Archit Chandrakar</h1>
      <p>Webdesigner & Entrepreneur</p>
    </div>
  </section>

  <section class="about" id="about">
    <div class="about-container">
      <div class="photo-frame">
        <img src="Archit.jpeg" alt="Archit Chandrakar">
      </div>
      <div class="about-content">
        <h2>About Me</h2>
        <p>Your description goes here. Write about your journey, expertise, and what drives you as a web designer and entrepreneur.</p>
        
        <div class="info-cards">
          <div class="info-card">
            <h3>Experience</h3>
            <p>5+ Years</p>
          </div>
          <div class="info-card">
            <h3>Projects</h3>
            <p>100+ Completed</p>
          </div>
        </div>

        <div class="social-links">
          <a href="https://linkedin.com" target="_blank" class="social-icon">
            <i class="fab fa-linkedin"></i>
          </a>
          <a href="https://instagram.com" target="_blank" class="social-icon">
            <i class="fab fa-instagram"></i>
          </a>
          <a href="https://wa.me/yourphone" target="_blank" class="social-icon">
            <i class="fab fa-whatsapp"></i>
          </a>
          <a href="https://twitter.com" target="_blank" class="social-icon">
            <i class="fab fa-x-twitter"></i>
          </a>
        </div>
      </div>
    </div>
  </section>

  <section class="services" id="services">
    <div class="services-container">
      <h2>My Services</h2>
      <div class="services-grid">
        ${services.map(service => `
          <div class="service-card">
            <i class="fas ${service.icon}"></i>
            <h3>${service.title}</h3>
            <p>${service.description}</p>
          </div>
        `).join('')}
      </div>
    </div>
  </section>

  <section class="experience" id="experience">
    <div class="experience-container">
      <h2>My Experience</h2>
      <div class="experience-timeline">
        ${experiences.map(exp => `
          <div class="experience-card">
            <div class="company-info">
              <img src="${exp.logo}" alt="${exp.company}" class="company-logo">
              <div>
                <h3>${exp.role}</h3>
                <h4>${exp.company}</h4>
                <p class="duration">${exp.duration}</p>
              </div>
            </div>
            <ul class="achievements">
              ${exp.achievements.map(achievement => `
                <li>${achievement}</li>
              `).join('')}
            </ul>
          </div>
        `).join('')}
      </div>
    </div>
  </section>

  <section class="portfolio" id="portfolio">
    <div class="portfolio-container">
      <h2>My Portfolio</h2>
      <div class="portfolio-categories">
        ${portfolioCategories.map(category => `
          <button 
            class="category-btn ${category === 'All' ? 'active' : ''}"
            onclick="filterPortfolioItems('${category}')"
          >${category}</button>
        `).join('')}
      </div>
      <div class="portfolio-grid"></div>
      <div class="portfolio-pagination"></div>
    </div>
  </section>

  

  <section class="contact" id="contact">
    <div class="contact-container">
      <h2>Contact Me</h2>
      <div class="contact-content">
        <form onsubmit="handleSubmit(event)" class="contact-form">
          <div class="form-group">
            <label for="name">Your Name</label>
            <input 
              type="text" 
              id="name" 
              class="contact-input"
              placeholder="What's your name?"
              required
              onchange="form.name = this.value"
            >
          </div>
          <div class="form-group">
            <label for="email">Your Email</label>
            <input 
              type="email" 
              id="email" 
              class="contact-input"
              placeholder="What's your email address?"
              required
              onchange="form.email = this.value"
            >
          </div>
          <div class="form-group">
            <label for="message">Your Message</label>
            <textarea 
              id="message" 
              class="contact-input"
              placeholder="What would you like to say?"
              rows="7"
              required
              onchange="form.message = this.value"
            ></textarea>
          </div>
          <button type="submit" class="contact-submit">Send</button>
        </form>
        <div class="contact-decoration">
          <div class="globe-container">
            <div class="globe"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
`;

// Initialize portfolio
document.addEventListener('DOMContentLoaded', updatePortfolio);