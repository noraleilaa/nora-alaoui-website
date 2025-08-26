// In your pages/index.js
<header className="relative py-32 bg-white overflow-hidden">
  {/* Dot Background (now managed globally) */}
  
  <div className="container mx-auto px-6 relative z-10 text-center">
    <div className="mx-auto mb-12 relative w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-lg">
      <Image
        src="/images/profile.jpeg"
        alt="Nora Alaoui"
        fill
        className="object-cover"
        priority
      />
    </div>
    
    <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">
      Nora Alaoui
    </h1>
    <p className="text-xl md:text-2xl text-gray-600 mb-8">
      Machine Learning Engineer | Generative AI Specialist
    </p>
    
    {/* Add a semi-transparent background to text for better readability */}
    <div className="max-w-2xl mx-auto bg-white/80 backdrop-blur-sm p-6 rounded-lg">
      <p className="text-gray-700 mb-6">
        I architect and deploy state-of-the-art AI solutions with 5+ years of experience in healthcare, 
        autonomous systems, and logistics.
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        <a 
          href="#contact" 
          className="flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Contact Me <FiArrowRight className="ml-2" />
        </a>
        <a 
          href="#projects" 
          className="flex items-center px-6 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition"
        >
          View Projects <FiArrowRight className="ml-2" />
        </a>
      </div>
    </div>
  </div>
</header>