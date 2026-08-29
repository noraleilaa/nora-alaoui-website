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

  const skills = [
    "Python",
    "PyTorch",
    "TensorFlow",
    "SQL",
    "PySpark",
    "XGBoost",
    "scikit-learn",
    "GraphSAGE",
    "YOLO",
    "Detectron2",
    "OpenCV",
    "RAG",
    "Transformers",
    "Docker",
    "FastAPI",
    "AWS SageMaker",
    "CI/CD",
    "Model Monitoring",
  ];

  const experience = [
    {
      title: "Cardiology Deep Learning Research Trainee",
      company: "Children's National Medical Center",
      date: "May 2026 - Present",
      bullets: [
        "Built an end-to-end arrhythmia prediction pipeline for 4,918 cardiac-surgery patients and 34,204 patient-time records, combining demographics, diagnoses, procedures, medications, labs, and longitudinal patient history.",
        "Developed preoperative and rolling postoperative models using logistic regression and XGBoost, with time-based splits and strict prediction-time feature availability to prevent data leakage.",
        "Built patient graphs and similarity features for graph-based modeling. The best model reached 0.748 test AUROC and 3.3x baseline AUPRC on a highly imbalanced outcome.",
        "Prepared 12-lead ECG and MUSE XML data and tested CNN models for integration with the clinical risk pipeline.",
      ],
    },
    {
      title: "Machine Learning & Generative AI Engineer",
      company: "ProSyn",
      date: "Jun 2024 - Present",
      bullets: [
        "Designed a RAG-based multimodal pipeline combining biomedical literature retrieval, transformer models, and protein-generation models to produce research candidates and comparison reports.",
        "Deployed containerized Docker and FastAPI inference services and built AWS SageMaker training workflows for PyTorch transformer and diffusion models.",
        "Built protein comparison and expert-review tools displaying model confidence, structural differences, and supporting evidence.",
        "Optimized GPU training and inference, reducing protein-generation time by 40% and improving training stability by 20%.",
      ],
    },
    {
      title: "Machine Learning / AI Researcher & Developer",
      company: "Virginia Tech Arlington Innovation Center",
      date: "Dec 2021 - Jun 2022",
      bullets: [
        "Built TensorFlow CNN and transfer-learning models for lung-cancer imaging, reaching 80% test accuracy.",
        "Trained YOLO and Detectron2 models for lung-lesion detection and evaluated accuracy, recall, false positives, and inference speed.",
        "Built a repeatable medical-imaging pipeline with quality checks, preprocessing, augmentation, and held-out model testing.",
      ],
    },
    {
      title: "Machine Learning Scientist",
      company: "mdlogix",
      date: "Apr 2021 - May 2022",
      bullets: [
        "Built mental-health models that predicted 80+ suicide events and 130+ adolescent crises, giving care teams earlier data for review and follow-up.",
        "Migrated production analytics from AWS to Oracle and automated ETL pipelines, improving processing speed by approximately 25% and reducing manual data preparation by 40%.",
        "Added HIPAA-aware data checks and repeatable ML workflows to improve data quality and training reproducibility.",
      ],
    },
  ];

  const projects = [
    {
      title: "Real-Time Object Detection for Autonomous Driving",
      subtitle: "Computer Vision • Edge AI",
      description:
        "Led a real-time object detection pipeline for edge devices, matching model design to GPU and NPU limits while tracking model accuracy and data quality.",
      technologies: ["YOLO", "Computer Vision", "Edge AI"],
      link: "#",
      image: "/images/yolo.jpg",
      colorClass: "bg-green-50 text-green-700",
    },
    {
      title: "Facial Recognition in Augmented Reality",
      subtitle: "Deep Learning • Computer Vision",
      description:
        "Built a 26-layer ResNet facial-recognition model that reached 90% accuracy while meeting real-time inference requirements.",
      technologies: ["ResNet", "Deep Learning", "Computer Vision"],
      link: "#",
      image: "/images/BTD.jpg",
      colorClass: "bg-purple-50 text-purple-700",
    },
    {
      title: "Object Detection & RAG App",
      subtitle: "Computer Vision • Generative AI",
      description:
        "Built an iOS application combining cloud computer vision and retrieval-augmented generation to identify objects and return useful contextual information.",
      technologies: ["RAG", "Computer Vision", "iOS"],
      link: "https://github.com/noraleilaa",
      image: "/images/pro-syn.png",
      colorClass: "bg-blue-50 text-blue-700",
    },
    {
      title: "Clinical Arrhythmia Prediction",
      subtitle: "Clinical ML • Graph ML",
      description:
        "Developed temporal machine-learning and graph-based approaches for predicting postoperative arrhythmia from longitudinal clinical data.",
      technologies: ["XGBoost", "Graph ML", "Clinical AI"],
      link: "#experience",
      image: "/images/stocks.jpeg",
      colorClass: "bg-pink-50 text-pink-700",
    },
  ];

  return (
    <div className="min-h-screen bg-[#fafafa] font-sans">
      {/* Navigation */}
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

            <span className="text-lg font-medium text-gray-800">
              Nora Alaoui
            </span>
          </Link>

          <div className="hidden md:flex space-x-8">
            {["about", "skills", "experience", "projects", "contact"].map(
              (item) => (
                <Link
                  key={item}
                  href={`#${item}`}
                  className="text-gray-600 hover:text-gray-900 transition-colors text-sm"
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </Link>
              )
            )}
          </div>

          <button
            type="button"
            aria-label="Toggle navigation"
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
            {["about", "skills", "experience", "projects", "contact"].map(
              (item) => (
                <Link
                  key={item}
                  href={`#${item}`}
                  onClick={() => setMenuOpen(false)}
                  className="block text-gray-600 hover:text-gray-900 transition-colors text-sm py-2"
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </Link>
              )
            )}
          </motion.div>
        )}
      </nav>

      {/* Hero */}
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

        <h1 className="text-3xl md:text-5xl font-normal text-gray-800 mb-4">
          Nora Alaoui
        </h1>

        <p className="text-xl text-gray-700 mb-3">
          Machine Learning Engineer | AI Engineer | Computer Vision
        </p>

        <p className="max-w-3xl mx-auto text-base md:text-lg text-gray-500 mb-8 px-6 leading-relaxed">
          Building end-to-end machine learning systems across clinical AI,
          computer vision, graph ML, and generative AI — from data preparation
          and model training to deployment, evaluation, and monitoring.
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

      {/* About */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-normal text-gray-800 mb-8 text-center"
          >
            About Me
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-gray-50 rounded-xl p-8 border border-gray-200"
          >
            <p className="text-gray-700 mb-4 text-lg leading-relaxed">
              I&apos;m a Machine Learning Engineer with 4+ years of experience
              building computer vision, clinical machine learning, and
              generative AI systems.
            </p>

            <p className="text-gray-700 mb-4 text-lg leading-relaxed">
              My work spans the full ML lifecycle, including data preparation,
              feature engineering, model training, temporal validation,
              evaluation, deployment, inference APIs, and model monitoring.
            </p>

            <p className="text-gray-700 text-lg leading-relaxed">
              Recent projects include postoperative arrhythmia prediction,
              patient graph modeling, RAG systems, protein generation,
              medical-image analysis, and real-time object detection.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 max-w-5xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-normal text-gray-800 mb-12 text-center"
          >
            Technical Skills
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-3"
          >
            {skills.map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 bg-white border border-gray-200 text-gray-700 rounded-full text-sm shadow-sm"
              >
                {skill}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="py-20 bg-white">
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
            {experience.map((job, index) => (
              <motion.div
                key={`${job.company}-${job.title}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="bg-gray-50 border border-gray-200 rounded-xl p-6 md:p-8"
              >
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-2 mb-3">
                  <div>
                    <h3 className="text-lg font-medium text-gray-800">
                      {job.title}
                    </h3>

                    <p className="text-blue-600 text-sm font-medium mt-1">
                      {job.company}
                    </p>
                  </div>

                  <p className="text-gray-500 text-sm whitespace-nowrap">
                    {job.date}
                  </p>
                </div>

                <ul className="space-y-3 text-gray-600 text-sm leading-relaxed">
                  {job.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start">
                      <span className="text-blue-500 mr-3 mt-0.5">•</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-normal text-gray-800 mb-12 text-center"
          >
            Featured ML & AI Projects
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-md transition-shadow"
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

                  <p className="text-gray-500 text-sm mb-3">
                    {project.subtitle}
                  </p>

                  <p className="text-gray-700 text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className={`px-2 py-1 rounded text-xs ${project.colorClass}`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <a
                    href={project.link}
                    target={
                      project.link.startsWith("http") ? "_blank" : undefined
                    }
                    rel={
                      project.link.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
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

      {/* Education */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-normal text-gray-800 mb-12 text-center"
          >
            Education
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="border border-gray-200 rounded-xl p-6">
              <h3 className="font-medium text-gray-800">
                Northwestern University
              </h3>

              <p className="text-gray-700 mt-2">
                M.S., Data Science
              </p>

              <p className="text-blue-600 text-sm mt-1">
                Artificial Intelligence
              </p>

              <p className="text-gray-500 text-sm mt-2">2024</p>
            </div>

            <div className="border border-gray-200 rounded-xl p-6">
              <h3 className="font-medium text-gray-800">
                George Mason University
              </h3>

              <p className="text-gray-700 mt-2">
                B.S., Psychology
              </p>

              <p className="text-blue-600 text-sm mt-1">
                Neuroscience
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
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

          <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm">
            <a
              href="mailto:nora@nalaoui.com"
              className="flex items-center mb-6 text-gray-600 hover:text-gray-900 transition"
            >
              <FiMail className="mr-3" />
              nora@nalaoui.com
            </a>

            <div className="flex justify-center space-x-6 mb-8">
              <a
                href="https://github.com/noraleilaa"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-gray-600 hover:text-gray-900 transition"
              >
                <FiGithub size={22} />
              </a>

              <a
                href="https://www.linkedin.com/in/nora-alaoui-b49968135/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-gray-600 hover:text-gray-900 transition"
              >
                <FiLinkedin size={22} />
              </a>
            </div>

            <form
              action="https://formspree.io/f/xvgbkodq"
              method="POST"
              className="space-y-4"
            >
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm text-gray-700 mb-1"
                >
                  Name
                </label>

                <input
                  id="name"
                  type="text"
                  name="name"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-700 focus:ring-2 focus:ring-gray-300 focus:outline-none"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm text-gray-700 mb-1"
                >
                  Email
                </label>

                <input
                  id="email"
                  type="email"
                  name="email"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-700 focus:ring-2 focus:ring-gray-300 focus:outline-none"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm text-gray-700 mb-1"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-700 focus:ring-2 focus:ring-gray-300 focus:outline-none"
                />
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

      {/* Footer */}
      <footer className="py-6 border-t border-gray-200 text-center text-gray-600 text-sm">
        © {new Date().getFullYear()} Nora Alaoui. All rights reserved.
      </footer>
    </div>
  );
}
