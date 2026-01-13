import React, { useState } from 'react';
import { Menu, X, Calendar, Mail, Linkedin, Github, ExternalLink, BookOpen, BarChart3, Lightbulb, FileText } from 'lucide-react';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  const projects = [
    {
      title: "Making Cents of the Left and Right",
      description: "The Relationship Between Candidate Ideology and Small-Dollar Contributions in the 2014 Election Among House Incumbents",
      link: "https://repository.library.georgetown.edu/handle/10822/1062245",
      tags: ["Political Science", "Data Analysis"],
      icon: <BookOpen size={24} />
    },
    {
      title: "Southern USA Voting Systems Analysis",
      description: "Jurisdictions in Louisiana, Alabama and Tennessee rely heavily on vulnerable voting systems - analysis for November 2020 Elections",
      link: "https://drive.google.com/file/d/1koH588omhVRFSwgScXnRo_58UFwnXf_R/view?usp=share_link",
      tags: ["Policy", "Voting Systems"],
      icon: <BarChart3 size={24} />
    },
    {
      title: "Super PACs in the 2018 Election",
      description: "Using machine learning to predict whether political committees are Super PACs based on algorithmic patterns",
      link: "https://drive.google.com/file/d/1M68OZeIbnf3py4-obOblnNjLuUiNa2kX/view?usp=sharing",
      tags: ["Machine Learning", "Political Finance"],
      icon: <Lightbulb size={24} />
    },
    {
      title: "Spotify API Automation",
      description: "Working with the Spotify API in Python to automate transferring the Weekly Discover playlist to a master playlist",
      link: "https://github.com/bsilha/Spotify_Project",
      tags: ["Python", "API Integration"],
      icon: <Lightbulb size={24} />
    },
    {
      title: "Linear Regression in Power BI",
      description: "Using Power BI and the Least Squares method to create an interactive linear regression with user-adjustable parameters",
      link: "https://drive.google.com/file/d/1VyTn3tXntfmQlY4CR0bEo2piOweFCjZc/view?usp=drive_link",
      tags: ["Power BI", "Statistics"],
      icon: <BarChart3 size={24} />
    },
    {
      title: "Multiple Regression - Housing Prices",
      description: "Using R and Power BI to create a multiple regression formula predicting house prices in Kings County, Washington",
      link: "https://drive.google.com/file/d/1V9-S_W78GgMU5ItQoC1YKKP5awqW-5wM/view?usp=drive_link",
      tags: ["R", "Power BI", "Predictive Modeling"],
      icon: <BarChart3 size={24} />
    },
    {
      title: "Customer Retention & Revenue Dashboard",
      description: "Analyze customer behavior and revenue trends to identify key drivers of retention and lost revenue for customer success teams",
      link: "https://drive.google.com/file/d/1tcrea0vdytoo6R0wyjpLRAy1O3a29o7y/view?usp=drive_link",
      tags: ["Business Analytics", "Dashboard"],
      icon: <BarChart3 size={24} />
    }
  ];

  const personalProject = {
    title: "Notion Recipe Collection",
    description: "Documenting my baking experiments with the same analytical rigor I bring to policy research - because good data practices apply everywhere",
    link: "#",
    tags: ["Personal", "For Fun"]
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Decorative header stripe - colorblind friendly with pattern */}
      <div className="h-2 bg-gradient-to-r from-blue-900 via-orange-600 to-blue-900"></div>
      
      {/* Navigation */}
      <nav className="sticky top-0 w-full bg-white z-50 border-b-2 border-slate-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-2xl font-bold tracking-tight"
            >
              <span className="text-slate-900">BRIDGET</span>{' '}
              <span className="text-blue-700">SILHA</span>
            </button>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {['Home', 'Projects', 'Story', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-slate-700 hover:text-blue-700 transition-colors font-medium uppercase text-sm tracking-wide"
                >
                  {item}
                </button>
              ))}
              <a
                href="https://drive.google.com/file/d/1wwehL024F7tROLNyS3gWA3qevL2u6nUM/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-700 hover:text-blue-700 transition-colors font-medium uppercase text-sm tracking-wide flex items-center gap-1"
              >
                <FileText size={16} />
                Resume
              </a>
              <a
                href="https://calendar.app.google/9ihLWw3LjqMUXzqz5"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-700 text-white px-6 py-2.5 font-semibold hover:bg-blue-800 transition-all flex items-center gap-2 uppercase text-sm tracking-wide"
              >
                <Calendar size={16} />
                Connect
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-slate-800"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t-2 border-slate-200">
            <div className="px-6 py-4 space-y-3">
              {['Home', 'Projects', 'Story', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block w-full text-left text-slate-700 hover:text-blue-700 transition-colors py-2 font-medium uppercase text-sm tracking-wide"
                >
                  {item}
                </button>
              ))}
              <a
                href="https://drive.google.com/file/d/1wwehL024F7tROLNyS3gWA3qevL2u6nUM/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-left text-slate-700 hover:text-blue-700 transition-colors py-2 font-medium uppercase text-sm tracking-wide flex items-center gap-2"
              >
                <FileText size={16} />
                Resume
              </a>
              <a
                href="https://calendar.app.google/9ihLWw3LjqMUXzqz5"
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-blue-700 text-white px-6 py-2.5 text-center font-semibold hover:bg-blue-800 transition-all uppercase text-sm tracking-wide"
              >
                Connect
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section - Bold, Structured Layout */}
      <section id="home" className="relative overflow-hidden">
        {/* Background geometric shapes */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
          <div className="absolute top-0 left-0 w-96 h-96 bg-red-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-slate-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left side - Photo with geometric frame */}
            <div className="order-2 lg:order-1 flex justify-center">
              <div className="relative">
                {/* Geometric frame elements - high contrast borders */}
                <div className="absolute -inset-4 border-4 border-blue-700 -rotate-3"></div>
                <div className="absolute -inset-4 border-4 border-orange-600 rotate-3"></div>
                <img 
                  src="https://img1.wsimg.com/isteam/ip/42d1f331-6306-467a-8bad-04eced35181e/DSC_6227_00001.png"
                  alt="Bridget Silha"
                  className="relative w-72 h-72 sm:w-96 sm:h-96 object-cover shadow-2xl"
                />
                {/* Corner accents - distinct colors */}
                <div className="absolute -top-2 -left-2 w-8 h-8 bg-blue-700"></div>
                <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-orange-600"></div>
              </div>
            </div>
            
            {/* Right side - Content with government-style typography */}
            <div className="order-1 lg:order-2">
              <div className="mb-6">
                <div className="inline-block border-l-4 border-blue-700 pl-4">
                  <p className="text-sm font-bold uppercase tracking-widest text-blue-700 mb-1">
                    Policy • Technology • Design
                  </p>
                </div>
              </div>
              
              <h1 className="text-5xl sm:text-7xl font-black mb-6 text-slate-900 leading-none tracking-tight">
                WELCOME
              </h1>
              
              <div className="h-1 w-24 bg-orange-600 mb-8"></div>
              
              <p className="text-xl sm:text-2xl text-slate-700 mb-10 leading-relaxed font-light">
                I work at the <span className="font-bold text-blue-700">intersection</span> of government policy, technology, and simplistic design
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://calendar.app.google/9ihLWw3LjqMUXzqz5"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-700 text-white px-8 py-4 font-bold hover:bg-blue-800 transition-all shadow-lg flex items-center gap-3 justify-center uppercase text-sm tracking-wide"
                >
                  <Calendar size={20} />
                  Let's Connect
                </a>
                <a
                  href="https://drive.google.com/file/d/1wwehL024F7tROLNyS3gWA3qevL2u6nUM/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-2 border-slate-900 text-slate-900 px-8 py-4 font-bold hover:bg-slate-900 hover:text-white transition-all flex items-center gap-3 justify-center uppercase text-sm tracking-wide"
                >
                  <FileText size={20} />
                  View Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Statement - Bold divider section */}
      <section className="bg-slate-900 text-white py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="border-l-4 border-orange-500 pl-8">
            <p className="text-2xl sm:text-3xl font-light leading-relaxed">
              Making <span className="font-bold">data-driven insights</span> understandable and actionable for decision-makers and the public
            </p>
          </div>
        </div>
      </section>

      {/* My Story Section - Documentary style */}
      <section id="story" className="py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12">
            <div className="border-l-4 border-blue-700 pl-8">
              <h2 className="text-5xl sm:text-7xl font-black text-slate-900 tracking-tight leading-none mb-6">
                MY STORY
              </h2>
              <div className="h-1 w-24 bg-orange-600"></div>
            </div>
          </div>
          
          <div className="ml-12 space-y-6">
            <p className="text-xl text-slate-700 leading-relaxed font-light">
              I'm passionate about <span className="font-bold">bridging the gap</span> between complex policy issues, cutting-edge technology, and accessible design. My work focuses on making data-driven insights understandable and actionable for decision-makers and the public.
            </p>
            
            <div className="h-1 w-16 bg-orange-600 my-8"></div>
            
            <p className="text-xl text-slate-700 leading-relaxed font-light">
              With a background spanning political science, data analytics, and technical implementation, I bring a <span className="font-bold">unique perspective</span> to projects at the intersection of government, technology, and society. From analyzing voting systems to building predictive models, I'm committed to using technology to strengthen democratic institutions and inform better policy decisions.
            </p>
            
            <div className="h-1 w-16 bg-orange-600 my-8"></div>
            
            <p className="text-xl text-slate-700 leading-relaxed font-light">
              Whether it's through machine learning, data visualization, or policy research, I believe in the power of <span className="font-bold">clear, honest analysis</span> to drive meaningful change.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section - Grid with structured cards */}
      <section id="projects" className="py-24 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 max-w-5xl">
            <div className="border-l-4 border-blue-700 pl-8 mb-6">
              <h2 className="text-5xl sm:text-7xl font-black text-slate-900 tracking-tight leading-none mb-6">
                PROJECTS
              </h2>
              <div className="h-1 w-24 bg-orange-600 mb-6"></div>
              <p className="text-xl text-slate-600 font-light">
                Exploring data, policy, and technology through analytical research and creative solutions
              </p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white border-2 border-slate-200 hover:border-blue-700 transition-all group relative overflow-hidden"
              >
                {/* Colored top stripe - high contrast pattern */}
                <div className="h-2 bg-gradient-to-r from-blue-700 to-orange-600"></div>
                
                <div className="p-6">
                  <div className="mb-4 text-blue-700 group-hover:scale-110 transition-transform inline-block">
                    {project.icon}
                  </div>
                  
                  <h3 className="text-xl font-bold text-slate-900 mb-3 uppercase tracking-tight leading-tight">
                    {project.title}
                  </h3>
                  
                  <p className="text-slate-600 mb-4 leading-relaxed text-sm">
                    {project.description}
                  </p>
                  
                  <div className="flex gap-2 flex-wrap mb-4">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="text-xs px-3 py-1 bg-slate-100 text-slate-700 font-medium uppercase tracking-wide"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-blue-700 hover:text-blue-900 font-bold uppercase text-sm tracking-wide group-hover:gap-3 transition-all underline decoration-2 underline-offset-4"
                  >
                    Read More
                    <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Personal Section - Beyond the Data */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12">
            <div className="border-l-4 border-blue-700 pl-8">
              <h3 className="text-5xl sm:text-7xl font-black text-slate-900 tracking-tight leading-none mb-6">
                BEYOND THE DATA
              </h3>
              <div className="h-1 w-24 bg-orange-600 mb-6"></div>
              <p className="text-xl text-slate-600 font-light">
                When I'm not analyzing policy and building solutions, you'll find me in the kitchen or seeking adventure around the world
              </p>
            </div>
          </div>
          
          <div className="pl-12 grid md:grid-cols-2 gap-8">
            {/* Recipe Collection */}
            <div className="bg-gradient-to-br from-slate-50 to-blue-50 border-2 border-slate-200 hover:border-slate-300 transition-all p-8 group h-full flex flex-col">
              <div className="mb-4">
                <div className="inline-block p-3 bg-white rounded-lg mb-4">
                  <BookOpen className="text-blue-700" size={28} />
                </div>
              </div>
              
              <h4 className="text-2xl font-bold text-slate-900 mb-3 tracking-tight">
                Recipe Collection
              </h4>
              
              <p className="text-slate-600 mb-4 leading-relaxed flex-grow">
                {personalProject.description}
              </p>
              
              <div className="flex gap-2 flex-wrap mb-6">
                {personalProject.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="text-xs px-3 py-1 bg-white text-slate-600 font-medium uppercase tracking-wide"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              <a
                href="https://www.notion.so/Recipe-List-2e6358f3099780089e74ef0efff63a62?source=copy_link"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-slate-700 hover:text-slate-900 font-bold uppercase text-sm tracking-wide group-hover:gap-3 transition-all underline decoration-2 underline-offset-4"
              >
                View Recipes
                <ExternalLink size={16} />
              </a>
            </div>

            {/* Adventure Gallery */}
            <div className="bg-gradient-to-br from-slate-50 to-blue-50 border-2 border-slate-200 p-8 h-full flex flex-col">
              <div className="mb-4">
                <div className="inline-block p-3 bg-white rounded-lg mb-4">
                  <Lightbulb className="text-blue-700" size={28} />
                </div>
              </div>
              
              <h4 className="text-2xl font-bold text-slate-900 mb-3 tracking-tight">
                Adventures
              </h4>
              
              <p className="text-slate-600 mb-6 leading-relaxed">
                From skydiving to exploring ancient civilizations - embracing experiences that push boundaries
              </p>
              
              <div className="grid grid-cols-2 gap-3 flex-grow">
                {[
                  { url: 'https://i.imgur.com/7L67Cjw.jpg', caption: 'BASE Jumping' },
                  { url: 'https://i.imgur.com/rTvaVnx.jpg', caption: 'Bungee Jumping' },
                  { url: 'https://i.imgur.com/2SW3VEh.jpg', caption: 'Nile Cruise, Egypt' },
                  { url: 'https://i.imgur.com/1yXoWJG.jpg', caption: 'Hot Air Balloon' }
                ].map((photo, i) => (
                  <div key={i} className="group cursor-pointer">
                    <div className="aspect-square bg-slate-200 border-2 border-slate-300 hover:border-blue-700 transition-all overflow-hidden">
                      <img 
                        src={photo.url}
                        alt={photo.caption}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <p className="text-xs text-slate-600 mt-2 uppercase tracking-wide font-medium">
                      {photo.caption}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section - Bold and direct */}
      <section id="contact" className="py-24 px-6 bg-slate-900 text-white">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12">
            <div className="border-l-4 border-orange-500 pl-8">
              <h2 className="text-5xl sm:text-7xl font-black tracking-tight leading-none mb-6">
                GET IN TOUCH
              </h2>
              <div className="h-1 w-24 bg-orange-600"></div>
            </div>
          </div>
          
          <p className="text-xl text-slate-300 mb-12 pl-12 font-light">
            Interested in collaboration or have a project in mind? I'd love to hear from you.
          </p>
          
          <div className="grid sm:grid-cols-3 gap-6 pl-12 mb-12">
            <a
              href="https://calendar.app.google/9ihLWw3LjqMUXzqz5"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-8 bg-blue-700 hover:bg-blue-600 transition-all group border-2 border-blue-700"
            >
              <Calendar className="text-white group-hover:scale-110 transition-transform" size={32} />
              <span className="text-white font-bold uppercase tracking-wide">Schedule Call</span>
            </a>
            
            <a
              href="mailto:contact@bridgetsilha.com"
              className="flex items-center gap-4 p-8 bg-slate-800 hover:bg-slate-700 transition-all group border-2 border-slate-700"
            >
              <Mail className="text-white group-hover:scale-110 transition-transform" size={32} />
              <span className="text-white font-bold uppercase tracking-wide">Send Email</span>
            </a>

            <a
              href="https://drive.google.com/file/d/1wwehL024F7tROLNyS3gWA3qevL2u6nUM/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-8 bg-slate-800 hover:bg-slate-700 transition-all group border-2 border-slate-700"
            >
              <FileText className="text-white group-hover:scale-110 transition-transform" size={32} />
              <span className="text-white font-bold uppercase tracking-wide">View Resume</span>
            </a>
          </div>

          <div className="flex justify-center gap-6 pl-12">
            <a
              href="https://linkedin.com/in/bridgetsilha"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-slate-800 hover:bg-blue-700 transition-all text-white border-2 border-slate-700 hover:border-blue-700"
              aria-label="LinkedIn"
            >
              <Linkedin size={28} />
            </a>
            <a
              href="https://github.com/bsilha"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-slate-800 hover:bg-blue-700 transition-all text-white border-2 border-slate-700 hover:border-blue-700"
              aria-label="GitHub"
            >
              <Github size={28} />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t-4 border-slate-200 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-slate-600 font-medium">© 2026 BRIDGET SILHA - ALL RIGHTS RESERVED</p>
          <p className="text-sm text-slate-500 mt-2 uppercase tracking-wide">Policy • Technology • Design</p>
        </div>
      </footer>

      <style jsx>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
}