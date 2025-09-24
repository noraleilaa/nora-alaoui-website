"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  FiGithub,
  FiLinkedin,
  FiMail,
  FiArrowRight,
  FiMenu,
  FiX,
} from "react-icons/fi";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#fafafa] font-sans">
      {/* ✅ Navigation */}
      <nav className="bg-white/80 backdrop-blur-sm py-6 sticky top-0 z-50 border-b border-gray-100">
        <div className="container mx-auto px-6 flex justify-between items-center">
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

          <button
            className="md:hidden text-gray-600 hover:text-gray-900 transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FiX size={20} /> : <FiMenu size={20} />}
          </button>
        </div>

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

      {/* ✅ Hero Section */}
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
        <h1 className="text-3xl md:text-4xl font-normal text-gray-800 mb-4">
          Nora Alaoui
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Machine Learning Engineer & AI Specialist
        </p>
        <div className="flex flex-wrap justify-center gap-4">
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
        </div>
      </header>

      {/* ✅ Experience Section */}
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

      {/* ✅ Projects Section - Fixed */}
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
                link: "https://github.com/noraleilaa/BrainTumor_detector",
                image: "/images/BTD.jpg",
                colorClass: "bg-pink-50 text-pink-700"
              }, 
            {
                title: "Stock prediction based on Sentiment",
                subtitle: "Stock Prediction Model",
                description: "Designed advanced diffusion models for protein image synthesis, accelerating drug discovery pipelines.",
                technologies: ["LSTM", "Web-Scraping", "Sentiment Analysis", "NLU"],
                link: "https://pro-syn.com",
                image: "/images/pro-syn.png",
                colorClass: "bg-blue-50 text-blue-700"
              },
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

      {/* ✅ Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 max-w-xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-normal text-gray-800 mb-12 text-center"
          >
            Get In Touch
          </motion.h2>

          <div className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm">
            {/* Contact Info */}
            <div className="flex items-center mb-6 text-gray-600">
              <FiMail className="mr-3" />
              <span>nora@nalaoui.com</span>
            </div>

            {/* Social Links */}
            <div className="flex justify-center space-x-6 mb-6">
              <a
                href="https://github.com/noraleilaa"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900 transition"
              >
                <FiGithub size={22} />
              </a>
              <a
                href="https://www.linkedin.com/in/nora-alaoui-b49968135/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900 transition"
              >
                <FiLinkedin size={22} />
              </a>
            </div>

            {/* Form */}
            <form
              action="https://formspree.io/f/xvgbkodq"
              method="POST"
              className="space-y-4"
            >
              <div>
                <label className="block text-sm text-gray-700 mb-1">Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full px-4 py-2 border rounded-lg text-gray-600 focus:ring-2 focus:text-gray-600 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full px-4 py-2 border rounded-lg text-gray-600 focus:ring-2 focus:text-gray-600 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-1">Message</label>
                <textarea
                  name="message"
                  rows={4}
                  required
                  className="w-full px-4 py-2 border rounded-lg text-gray-600 focus:ring-2 focus:text-gray-600 focus:outline-none"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-gray-800 text-white py-3 rounded-lg hover:bg-gray-900 transition text-sm"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* ✅ Footer */}
      <footer className="py-6 border-t text-center text-gray-600 text-sm">
        © {new Date().getFullYear()} Nora Alaoui. All rights reserved.
      </footer>
    </div>
  );
}
