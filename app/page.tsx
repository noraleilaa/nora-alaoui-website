"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  FiGithub,
  FiLinkedin,
  FiMail,
  FiPhone,
  FiArrowRight,
  FiMenu,
  FiX,
} from "react-icons/fi";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#fafafa] font-sans">
      {/* Navigation - Minimalist like Hanane's */}
      <nav className="bg-white/80 backdrop-blur-sm py-6 sticky top-0 z-50 border-b border-gray-100">
        <div className="container mx-auto px-6 flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="relative w-8 h-8 rounded-full overflow-hidden">
              <Image
                src="/images/profile.jpeg"
                alt="Nora Alaoui"
                width={32}
                height={32}
                className="object-cover"
                priority
              />
            </div>
            <span className="text-lg font-medium text-gray-800">Nora Alaoui</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {["about", "experience", "projects", "contact"].map((item) => (
              <Link
                key={item}
                href={`#${item}`}
                className="text-gray-600 hover:text-gray-900 transition-colors text-sm"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </Link>
            ))}
          </div>

          {/* Mobile Nav Toggle */}
          <button
            className="md:hidden text-gray-600 hover:text-gray-900 transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <FiX size={20} /> : <FiMenu size={20} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-white border-t border-gray-100 px-6 py-4 space-y-3"
          >
            {["about", "experience", "projects", "contact"].map((item) => (
              <Link
                key={item}
                href={`#${item}`}
                onClick={() => setMenuOpen(false)}
                className="block text-gray-600 hover:text-gray-900 transition-colors text-sm py-2"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </Link>
            ))}
          </motion.div>
        )}
      </nav>

      {/* Hero Section - Clean like Hanane's */}
      <header className="py-24 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-8 relative w-24 h-24 rounded-full overflow-hidden border-2 border-white shadow-sm"
        >
          <Image
            src="/images/profile.jpeg"
            alt="Nora Alaoui"
            fill
            className="object-cover"
            priority
          />
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-3xl md:text-4xl font-normal text-gray-800 mb-4"
        >
          Nora Alaoui
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto"
        >
          Machine Learning Engineer & AI Specialist
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <Link
            href="#contact"
            className="flex items-center px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition text-sm"
          >
            Contact Me
            <FiArrowRight className="ml-2" />
          </Link>
          <Link
            href="#projects"
            className="flex items-center px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition text-sm"
          >
            View Projects
            <FiArrowRight className="ml-2" />
          </Link>
        </motion.div>
      </header>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-normal text-gray-800 mb-12 text-center"
          >
            About Me
          </motion.h2>
          <div className="flex flex-col md:flex-row items-center gap-12 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="md:w-1/2"
            >
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-medium text-gray-800 mb-4">
                  Biography
                </h3>
                <p className="text-gray-600 text-sm mb-6">
                  Experienced Machine Learning Engineer specializing in Generative AI and MLOps. MS in Data Science from Northwestern University with extensive experience in diffusion models, GANs, and computer vision applications.
                </p>
                <div className="flex space-x-4">
                  <a
                    href="https://github.com/noraleilaa"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    <FiGithub size={20} />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/nora-alaoui-b49968135/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    <FiLinkedin size={20} />
                  </a>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="md:w-1/2"
            >
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-medium text-gray-800 mb-4">Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    'Generative AI', 'Diffusion Models', 'GANs', 'PyTorch', 'TensorFlow', 
                    'AWS SageMaker', 'Computer Vision', 'MLOps', 'Python', 'SQL', 
                    'Data Science', 'Medical Imaging'
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-normal text-gray-800 mb-12 text-center"
          >
            Experience
          </motion.h2>
          <div className="space-y-8 max-w-4xl mx-auto">
            {/* Job 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white border border-gray-200 rounded-lg p-6"
            >
              <div className="flex flex-col md:flex-row justify-between mb-4">
                <h3 className="text-lg font-medium text-gray-800">
                  Machine Learning & Generative AI Engineer
                </h3>
                <p className="text-gray-600 text-sm">June 2024 - Present</p>
              </div>
              <p className="text-blue-600 text-sm font-medium mb-4">Prosyn</p>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  Spearheaded deployment of diffusion models (DDPM) using PyTorch, reducing medical imaging data creation time by 40%
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  Architected StyleGAN-3 and Stable Diffusion models, achieving 30% improvement in image quality
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  Led team to deploy AI imaging solutions, improving training stability by 20%
                </li>
              </ul>
            </motion.div>

            {/* Job 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white border border-gray-200 rounded-lg p-6"
            >
              <div className="flex flex-col md:flex-row justify-between mb-4">
                <h3 className="text-lg font-medium text-gray-800">
                  ML Researcher & Developer
                </h3>
                <p className="text-gray-600 text-sm">Dec 2021 - Jun 2022</p>
              </div>
              <p className="text-blue-600 text-sm font-medium mb-4">
                Virginia Tech AIC
              </p>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  Developed CNN systems for lung cancer detection with 80% accuracy
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  Optimized medical datasets, improving training efficiency by 30%
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

     {/* Projects Section - Minimalist Redesign */}
<section id="projects" className="py-20 bg-white">
  <div className="container mx-auto px-6">
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-2xl md:text-3xl font-normal text-gray-800 mb-12 text-center"
    >
      Featured Projects
    </motion.h2>
    
    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
      {[
        {
          title: "Protein Image Synthesis",
          subtitle: "Synthetic DICOM/NIfTI generation",
          description: "Designed advanced diffusion models for protein image synthesis, accelerating drug discovery pipelines.",
          technologies: ["PyTorch", "AWS", "Medical AI"],
          link: "https://pro-syn.com",
          image: "/images/pro-syn.png",
          colorClass: "bg-blue-50 text-blue-700"
        },
        {
          title: "Autonomous Driving Object Detection",
          subtitle: "Edge computing implementation",
          description: "Real-time object detection system deployed on edge devices with optimized GPU acceleration.",
          technologies: ["TensorFlow", "Edge AI", "YOLO"],
          link: "#",
          image: "/images/yolo.jpg",
          colorClass: "bg-green-50 text-green-700"
        },
        {
          title: "Brain Tumor Detector",
          subtitle: "Multi-Modal AI",
          description: "Developed multimodal AI integrating MRI, text, and clinical data for precise brain tumor detection.",
          technologies: ["TensorFlow", "Multi-Modal AI", "Healthcare"],
          link: "#",
          image: "/images/brain-tumor.jpg",
          colorClass: "bg-pink-50 text-pink-700"
        }
      ].map((project, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-sm transition-shadow"
        >
          <div className="relative h-48 w-full">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
            />
          </div>
          <div className="p-6">
            <h3 className="text-lg font-medium text-gray-800 mb-2">
              {project.title}
            </h3>
            <p className="text-gray-600 text-sm mb-2">
              {project.subtitle}
            </p>
            <p className="text-gray-700 text-sm mb-4">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-1 mb-4">
              {project.technologies.map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className={`px-2 py-1 rounded text-xs ${project.colorClass}`}
                >
                  {tech}
                </span>
              ))}
            </div>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 text-sm flex items-center"
            >
              Learn more
              <FiArrowRight className="ml-1" />
            </a>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
</section>
      {/* Contact Section - Minimalist Redesign */}
      <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Nora Alaoui - Contact</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
        }
        
        body {
            background-color: #fafafa;
            color: #333;
            line-height: 1.6;
        }
        
        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 20px;
        }
        
        /* Navigation */
        nav {
            background: rgba(255, 255, 255, 0.8);
            backdrop-filter: blur(10px);
            padding: 20px 0;
            position: sticky;
            top: 0;
            z-index: 100;
            border-bottom: 1px solid #eee;
        }
        
        .nav-container {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        
        .logo {
            display: flex;
            align-items: center;
            gap: 12px;
            text-decoration: none;
            color: #333;
            font-weight: 500;
        }
        
        .logo-img {
            width: 40px;
            height: 40px;
            border-radius: 50%;
            overflow: hidden;
            background: #0066ff;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-weight: bold;
        }
        
        .nav-links {
            display: flex;
            gap: 30px;
        }
        
        .nav-links a {
            text-decoration: none;
            color: #666;
            font-size: 14px;
            font-weight: 500;
            transition: color 0.3s;
        }
        
        .nav-links a:hover {
            color: #333;
        }
        
        .menu-btn {
            display: none;
            background: none;
            border: none;
            font-size: 24px;
            cursor: pointer;
            color: #666;
        }
        
        /* Contact Section */
        .contact-section {
            padding: 80px 0;
            background-color: #f8f9fa;
        }
        
        .section-title {
            text-align: center;
            font-size: 2.5rem;
            font-weight: 300;
            margin-bottom: 60px;
            color: #333;
        }
        
        .contact-container {
            max-width: 500px;
            margin: 0 auto;
            background: white;
            border-radius: 12px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
            padding: 40px;
            border: 1px solid #eee;
        }
        
        .contact-info {
            display: flex;
            align-items: center;
            margin-bottom: 30px;
            color: #555;
        }
        
        .contact-icon {
            margin-right: 15px;
            color: #888;
        }
        
        .social-links {
            display: flex;
            justify-content: center;
            gap: 20px;
            margin-bottom: 30px;
        }
        
        .social-link {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 40px;
            height: 40px;
            border-radius: 50%;
            color: #666;
            transition: all 0.3s;
            text-decoration: none;
            border: 1px solid #eee;
        }
        
        .social-link:hover {
            color: #0066ff;
            border-color: #0066ff;
            transform: translateY(-2px);
        }
        
        .form-group {
            margin-bottom: 20px;
        }
        
        .form-label {
            display: block;
            margin-bottom: 8px;
            font-size: 14px;
            color: #555;
            font-weight: 500;
        }
        
        .form-input {
            width: 100%;
            padding: 12px 15px;
            border: 1px solid #ddd;
            border-radius: 8px;
            font-size: 14px;
            transition: border-color 0.3s;
        }
        
        .form-input:focus {
            outline: none;
            border-color: #0066ff;
        }
        
        .form-textarea {
            min-height: 120px;
            resize: vertical;
        }
        
        .submit-btn {
            width: 100%;
            padding: 14px;
            background: #333;
            color: white;
            border: none;
            border-radius: 8px;
            font-size: 14px;
            font-weight: 500;
            cursor: pointer;
            transition: background 0.3s;
        }
        
        .submit-btn:hover {
            background: #000;
        }
        
        .success-message {
            display: none;
            text-align: center;
            color: #28a745;
            margin-top: 20px;
            padding: 10px;
            background: #f0fff4;
            border-radius: 8px;
            border: 1px solid #c6f6d5;
        }
        
        /* Footer */
        footer {
            background: white;
            border-top: 1px solid #eee;
            padding: 30px 0;
            text-align: center;
            color: #666;
            font-size: 14px;
        }
        
        /* Responsive */
        @media (max-width: 768px) {
            .nav-links {
                display: none;
            }
            
            .menu-btn {
                display: block;
            }
            
            .contact-container {
                padding: 30px 20px;
            }
            
            .section-title {
                font-size: 2rem;
            }
        }
    </style>
</head>
<body>
    <!-- Navigation -->
    <nav>
        <div class="container nav-container">
            <a href="#" class="logo">
                <div class="logo-img">NA</div>
                <span>Nora Alaoui</span>
            </a>
            <div class="nav-links">
                <a href="#about">About</a>
                <a href="#experience">Experience</a>
                <a href="#projects">Projects</a>
                <a href="#contact">Contact</a>
            </div>
            <button class="menu-btn">
                <i class="fas fa-bars"></i>
            </button>
        </div>
    </nav>

    <!-- Contact Section -->
    <section id="contact" class="contact-section">
        <div class="container">
            <h2 class="section-title">Get In Touch</h2>
            <div class="contact-container">
                <div class="contact-info">
                    <i class="fas fa-envelope contact-icon"></i>
                    <span>nora@nalaoui.com</span>
                </div>
                
                <div class="social-links">
                    <a href="https://github.com/noraleilaa" target="_blank" class="social-link">
                        <i class="fab fa-github"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/nora-alaoui-b49968135/" target="_blank" class="social-link">
                        <i class="fab fa-linkedin-in"></i>
                    </a>
                </div>
                
                <!-- Form with your Formspree endpoint -->
                <form id="contact-form" action="https://formspree.io/f/xvgbkodq" method="POST">
                    <div class="form-group">
                        <label for="name" class="form-label">Name</label>
                        <input type="text" id="name" name="name" class="form-input" required>
                    </div>
                    
                    <div class="form-group">
                        <label for="email" class="form-label">Email</label>
                        <input type="email" id="email" name="email" class="form-input" required>
                    </div>
                    
                    <div class="form-group">
                        <label for="message" class="form-label">Message</label>
                        <textarea id="message" name="message" class="form-input form-textarea" required></textarea>
                    </div>
                    
                    <button type="submit" class="submit-btn">Send Message</button>
                </form>
                
                <div id="success-message" class="success-message">
                    <i class="fas fa-check-circle"></i>
                    Thank you for your message! I'll get back to you soon.
                </div>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer>
        <div class="container">
            <p>© 2023 Nora Alaoui. All rights reserved.</p>
        </div>
    </footer>

    <script>
        // Form submission handling
        document.getElementById('contact-form').addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            
            // Send form data to Formspree
            fetch(this.action, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            })
            .then(response => {
                if (response.ok) {
                    // Show success message
                    document.getElementById('success-message').style.display = 'block';
                    // Reset form
                    document.getElementById('contact-form').reset();
                    // Hide success message after 5 seconds
                    setTimeout(() => {
                        document.getElementById('success-message').style.display = 'none';
                    }, 5000);
                } else {
                    throw new Error('Form submission failed');
                }
            })
            .catch(error => {
                console.error('Error:', error);
                alert('There was a problem sending your message. Please try again.');
            });
        });
    </script>
</body>
</html>
