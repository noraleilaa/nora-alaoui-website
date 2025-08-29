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
      {/* Navigation */}
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

      {/* Hero Section */}
      <section className="min-h-[90vh] flex items-center">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <h1 className="text-3xl md:text-5xl font-medium text-gray-900 mb-6 leading-tight">
              AI Engineer | Data Scientist
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              I design and deploy intelligent systems that bridge the gap
              between cutting-edge research and practical applications.
            </p>
            <Link
              href="#contact"
              className="inline-flex items-center text-gray-900 hover:translate-x-1 transition-transform"
            >
              <span className="mr-2">Let&apos;s Connect</span>
              <FiArrowRight />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-normal text-gray-800 mb-12"
          >
            About Me
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl text-gray-600 text-lg"
          >
            With a background in data science and artificial intelligence, I
            specialize in developing scalable solutions that drive progress and
            shape the future of technology. My passion lies in healthcare AI,
            multimodal systems, and solving complex real-world challenges
            through machine learning.
          </motion.p>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20">
        <div className="container mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-normal text-gray-800 mb-12"
          >
            Experience
          </motion.h2>
          <div className="space-y-8">
            {[
              {
                role: "AI Engineer",
                company: "Healthcare Startup",
                period: "2023 - Present",
                description:
                  "Building AI models for medical imaging and clinical decision support systems.",
              },
              {
                role: "Data Scientist",
                company: "Tech Company",
                period: "2020 - 2023",
                description:
                  "Developed NLP models and recommendation systems at scale.",
              },
            ].map((job, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="border-l-2 border-gray-200 pl-6 relative"
              >
                <div className="absolute left-[-5px] top-2 w-2 h-2 rounded-full bg-gray-400" />
                <h3 className="font-medium text-gray-800">{job.role}</h3>
                <p className="text-gray-600 text-sm">
                  {job.company} • {job.period}
                </p>
                <p className="text-gray-600 mt-2">{job.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-normal text-gray-800 mb-12"
          >
            Projects
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "ProSyn",
                description:
                  "Generates protein images from textual input using AI.",
                link: "https://pros-syn.com",
                image: "/images/pro-syn.png",
              },
              {
                title: "Brain Tumor Detector",
                description:
                  "Deep learning model for brain tumor detection in MRI scans.",
                link: "#",
                image: "/images/brain-tumor.png",
              },
            ].map((project, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
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
                  <h3 className="font-medium text-gray-800">{project.title}</h3>
                  <p className="text-gray-600 text-sm mt-2">
                    {project.description}
                  </p>
                  <Link
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-gray-900 mt-4 hover:translate-x-1 transition-transform text-sm"
                  >
                    <span className="mr-2">View Project</span>
                    <FiArrowRight />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
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

                <div className="flex justify-center space-x-4 mb-8">
                  <a
                    href="https://github.com/noraleilaa"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    <FiGithub size={20} />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/nora-alaoui-b49968135/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    <FiLinkedin size={20} />
                  </a>
                </div>
              </div>

              {/* Form */}
              <form className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-gray-700 text-sm mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-gray-400 text-sm"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-gray-700 text-sm mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-gray-400 text-sm"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-gray-700 text-sm mb-2"
                  >
                    Message
                  </label>
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
          <p className="text-gray-600 text-sm">
            © {new Date().getFullYear()} Nora Alaoui. All rights reserved.
          </p>
          <div className="flex justify-center mt-4">
            <Image
              src="/images/Northwestern.png"
              alt="Northwestern University"
              width={200}
              height={200}
              className="object-contain"
              priority
            />
          </div>
        </div>
      </footer>
    </div>
  );
}
