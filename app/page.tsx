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


import ContactPage from "./page";

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
            Contact Me <FiArrowRight className="ml-2" />
          </Link>
          <Link 
            href="#projects" 
            className="flex items-center px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition text-sm"
          >
            View Projects <FiArrowRight className="ml-2" />
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
                <h3 className="text-lg font-medium text-gray-800 mb-4">Biography</h3>
                <p className="text-gray-600 text-sm mb-6">
                  Experienced Machine Learning Engineer specializing in Generative AI and MLOps. 
                  MS in Data Science from Northwestern University with extensive experience in 
                  diffusion models, GANs, and computer vision applications.
                </p>
                <div className="flex space-x-4">
                  <a href="https://github.com/noraleilaa" target="_blank" className="text-gray-600 hover:text-gray-900 transition-colors">
                    <FiGithub size={20} />
                  </a>
                  <a href="https://www.linkedin.com/in/nora-alaoui-b49968135/" target="_blank" className="text-gray-600 hover:text-gray-900 transition-colors">
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
                    'Generative AI', 'Diffusion Models', 'GANs', 'PyTorch', 
                    'TensorFlow', 'AWS SageMaker', 'Computer Vision', 'MLOps',
                    'Python', 'SQL', 'Data Science', 'Medical Imaging'
                  ].map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs">
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
                <h3 className="text-lg font-medium text-gray-800">Machine Learning & Generative AI Engineer</h3>
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
                <h3 className="text-lg font-medium text-gray-800">ML Researcher & Developer</h3>
                <p className="text-gray-600 text-sm">Dec 2021 - Jun 2022</p>
              </div>
              <p className="text-blue-600 text-sm font-medium mb-4">Virginia Tech AIC</p>
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
            {/* Project 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-sm transition-shadow"
            >
              <div className="relative h-48 w-full mb-4 rounded-lg overflow-hidden flex items-center justify-center">
              <img 
                src="/images/pro-syn.png" 
                alt="ProSyn" 
                className="h-full w-full object-cover"
              />
            </div>
              <h3 className="text-lg font-medium text-gray-800 mb-2">Protein Image Synthesis</h3>
              <p className="text-gray-600 text-sm mb-4">Synthetic DICOM/NIfTI generation</p>
              <p className="text-gray-700 text-sm mb-4">
                Designed advanced diffusion models for protein image synthesis, accelerating drug discovery pipelines.
              </p>
              <div className="flex flex-wrap gap-1 mb-4">
                {["PyTorch", "AWS", "Medical AI"].map((tech) => (
                  <span key={tech} className="px-2 py-1 bg-blue-50 text-blue-700 rounded text-xs">
                    {tech}
                  </span>
                ))}
              </div>
              <a 
                href="https://pro-syn.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-blue-600 hover:text-blue-800 text-sm flex items-center"
              >
                Learn more <FiArrowRight className="ml-1" />
              </a>
            </motion.div>

            {/* Project 2 */}
            <motion.div
              <img 
                src="/images/yolo.jpg" 
                alt="Autonomous Driving" 
                className="h-full w-full object-cover"
              />
              <div className="relative h-48 w-full mb-4 rounded-lg overflow-hidden bg-gradient-to-br from-green-50 to-green-100 flex items-center justify-center">
                <span className="text-green-600 font-medium">Autonomous Driving</span>
              </div>
              <h3 className="text-lg font-medium text-gray-800 mb-2">Autonomous Driving Object Detection</h3>
              <p className="text-gray-600 text-sm mb-4">Edge computing implementation</p>
              <p className="text-gray-700 text-sm mb-4">
                Real-time object detection system deployed on edge devices with optimized GPU acceleration.
              </p>
              <div className="flex flex-wrap gap-1 mb-4">
                {["TensorFlow", "Edge AI", "YOLO"].map((tech) => (
                  <span key={tech} className="px-2 py-1 bg-green-50 text-green-700 rounded text-xs">
                    {tech}
                  </span>
                ))}
              </div>
              <a href="#" className="text-blue-600 hover:text-blue-800 text-sm flex items-center">
                Learn more <FiArrowRight className="ml-1" />
              </a>
            </motion.div>
          </div>
        </div>
      </section>
{/* p-2 text-gray-600 */}
      {/* Contact Section - Minimalist Redesign */}
      <section id="contact" className="p-2 text-gray-600">
        <div className="container mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-normal text-gray-800 mb-12 text-center"
          >
            Get In Touch
          </motion.h2>
          
          <div className="max-w-md mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white border border-gray-200 rounded-lg p-8"
            >
              <div className="space-y-6 mb-8">
                <div className="flex items-center text-gray-700">
                  <FiMail className="text-gray-400 mr-3" size={18} />
                  <span className="text-sm">nora@nalaoui.com</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <FiPhone className="text-gray-400 mr-3" size={18} />
                  <span className="text-sm">(202) 341-2564</span>
                </div>
              </div>
              
              <div className="flex justify-center space-x-4 mb-8">
                <a
                  href="https://github.com/noraleilaa"
                  target="_blank"
                  className="p-2 text-gray-600 hover:text-gray-900 transition-colors"
                >
                  <FiGithub size={20} />
                </a>
                <a
                  href="https://www.linkedin.com/in/nora-alaoui-b49968135/"
                  target="_blank"
                  className="p-2 text-gray-600 hover:text-gray-900 transition-colors"
                >
                  <FiLinkedin size={20} />
                </a>
              </div>
              
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-gray-700 text-sm mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-gray-400 text-sm"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-700 text-sm mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-gray-400 text-sm"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-gray-700 text-sm mb-2">Message</label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-gray-400 text-sm"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-gray-800 text-white py-2 rounded hover:bg-gray-900 transition-colors text-sm"
                >
                  Send Message
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-white border-t border-gray-100">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-600 text-sm">© {new Date().getFullYear()} Nora Alaoui. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
