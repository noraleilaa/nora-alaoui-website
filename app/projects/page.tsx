// app/projects/page.tsx
"use client";

import { FiGithub, FiFramer, FiStar, FiExternalLink, FiArrowLeft } from 'react-icons/fi';
import Link from 'next/link';

// Sample project data - replace with your actual projects
const projects = [
  {
    id: 1,
    title: "Medical Imaging with Diffusion Models",
    description: "Advanced diffusion models for synthetic medical imaging, accelerating drug discovery pipelines.",
    technologies: ["PyTorch", "AWS", "Medical AI", "DICOM"],
    githubUrl: "https://github.com/noraleilaa/medical-diffusion",
    demoUrl: "#",
    stars: 42,
    forks: 18,
    featured: true
  },
  {
    id: 2,
    title: "Autonomous Driving Object Detection",
    description: "Real-time object detection system deployed on edge devices with optimized GPU acceleration.",
    technologies: ["TensorFlow", "Edge AI", "YOLO", "OpenCV"],
    githubUrl: "https://github.com/noraleilaa/autonomous-driving",
    demoUrl: "#",
    stars: 28,
    forks: 9,
    featured: true
  },
  {
    id: 3,
    title: "StyleGAN-3 Medical Image Generation",
    description: "High-quality synthetic medical image generation using StyleGAN-3 architecture.",
    technologies: ["PyTorch", "GANs", "Medical Imaging", "Computer Vision"],
    githubUrl: "https://github.com/noraleilaa/stylegan3-medical",
    demoUrl: "#",
    stars: 35,
    forks: 12
  },
  {
    id: 4,
    title: "Lung Cancer Detection CNN",
    description: "CNN systems for lung cancer detection with 80% accuracy on medical datasets.",
    technologies: ["TensorFlow", "CNN", "Medical Diagnostics", "3D Slicer"],
    githubUrl: "https://github.com/noraleilaa/lung-cancer-cnn",
    demoUrl: "#",
    stars: 51,
    forks: 21
  },
  {
    id: 5,
    title: "AI-Powered Mental Health Predictor",
    description: "Predictive framework forecasting mental health crises using machine learning.",
    technologies: ["Python", "Scikit-learn", "Predictive Analytics", "Healthcare"],
    githubUrl: "https://github.com/noraleilaa/mental-health-ai",
    demoUrl: "#",
    stars: 67,
    forks: 24
  },
  {
    id: 6,
    title: "Edge Computing Object Detection App",
    description: "iOS application leveraging Cloud Vision API for real-time object identification.",
    technologies: ["Swift", "iOS", "Cloud Vision API", "Edge Computing"],
    githubUrl: "https://github.com/noraleilaa/edge-object-detection",
    demoUrl: "#",
    stars: 23,
    forks: 7
  }
];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="flex items-center mb-12">
          <Link 
            href="/" 
            className="flex items-center text-blue-600 hover:text-blue-800 transition mr-6"
          >
            <FiArrowLeft className="mr-2" /> Back to Home
          </Link>
          <h1 className="text-4xl font-bold text-gray-800">My Projects</h1>
        </div>

        {/* GitHub Profile Card */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-12">
          <div className="flex flex-col md:flex-row items-center">
            <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-6">
              <div className="w-24 h-24 rounded-full bg-blue-100 flex items-center justify-center">
                <FiGithub className="text-4xl text-blue-600" />
              </div>
            </div>
            <div className="flex-grow text-center md:text-left">
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">Nora Alaoui on GitHub</h2>
              <p className="text-gray-600 mb-4">
                Explore my open-source contributions and personal projects on GitHub.
              </p>
              <a
                href="https://github.com/noraleilaa"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition"
              >
                <FiGithub className="mr-2" /> Visit My GitHub Profile
              </a>
            </div>
            <div className="hidden md:flex flex-col items-center mt-4 md:mt-0 md:ml-6">
              <div className="bg-blue-100 text-blue-800 px-4 py-2 rounded-lg mb-2">
                <span className="font-semibold">{projects.reduce((acc, proj) => acc + proj.stars, 0)}+</span> Stars
              </div>
              <div className="bg-green-100 text-green-800 px-4 py-2 rounded-lg">
                <span className="font-semibold">{projects.reduce((acc, proj) => acc + proj.forks, 0)}+</span> Forks
              </div>
            </div>
          </div>
        </div>

        {/* Featured Projects */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center md:text-left">Featured Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.filter(p => p.featured).map((project) => (
              <div key={project.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition">
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex space-x-4">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-gray-700 hover:text-blue-600 transition"
                      >
                        <FiGithub className="mr-1" /> Code
                      </a>
                      {project.demoUrl && (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center text-gray-700 hover:text-blue-600 transition"
                        >
                          <FiExternalLink className="mr-1" /> Demo
                        </a>
                      )}
                    </div>
                    <div className="flex space-x-4">
                      <div className="flex items-center text-gray-600">
                        <FiStar className="mr-1" /> {project.stars}
                      </div>
                      <div className="flex items-center text-gray-600">
                        <FiFramer className="mr-1" /> {project.forks}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* All Projects */}
        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center md:text-left">All Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <div key={project.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition">
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">{project.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.technologies.slice(0, 3).map((tech, index) => (
                      <span key={index} className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded-full text-xs">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>
                  <div className="flex items-center justify-between">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm flex items-center text-blue-600 hover:text-blue-800 transition"
                    >
                      <FiGithub className="mr-1" /> View Code
                    </a>
                    <div className="flex space-x-3 text-xs text-gray-500">
                      <div className="flex items-center">
                        <FiStar className="mr-1" /> {project.stars}
                      </div>
                      <div className="flex items-center">
                        <FiFramer className="mr-1" /> {project.forks}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* GitHub CTA */}
        <div className="bg-blue-600 rounded-xl shadow-md mt-16 p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Want to see more?</h2>
          <p className="text-blue-100 mb-6">
            Check out my GitHub profile for more projects, contributions, and open-source work.
          </p>
          <a
            href="https://github.com/noraleilaa"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-white text-blue-600 rounded-lg hover:bg-blue-50 transition font-semibold"
          >
            <FiGithub className="mr-2" /> Explore My GitHub
          </a>
        </div>
      </div>
    </div>
  );
}