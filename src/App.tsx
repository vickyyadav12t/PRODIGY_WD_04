import React, { useEffect, useState, useRef } from 'react';
import { Github, Linkedin, Mail, FileDown, ChevronDown, Code2, Globe, ExternalLink, GraduationCap, Briefcase, Send, User, AtSign, ArrowUp, Sun, Moon, Volume2, VolumeX, Plus, Minus, Brain, Coffee, Terminal } from 'lucide-react';

function App() {
  const [text, setText] = useState('');
  const [isComplete, setIsComplete] = useState(false);
  const [formStatus, setFormStatus] = useState('');
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSoundEnabled, setSoundEnabled] = useState(false);
  const [showMoreAbout, setShowMoreAbout] = useState(false);
  const [currentGradient, setCurrentGradient] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [funFactIndex, setFunFactIndex] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);
  const fullText = 'Web Developer | MERN Stack Enthusiast | React Expert | Problem Solver';

  const gradients = [
    'from-purple-600 via-pink-600 to-blue-600',
    'from-blue-600 via-green-600 to-purple-600',
    'from-pink-600 via-yellow-600 to-purple-600',
    'from-green-600 via-blue-600 to-pink-600'
  ];

  const funFacts = [
    "I've written over 10,000 lines of code! 🚀",
    "I debug in my dreams! 💭",
    "Coffee is my fuel! ☕",
    "I love solving algorithmic puzzles! 🧩"
  ];

  const programmingSkills = [
    {
      name: 'Python',
      level: 85,
      icon: Terminal,
      description: 'Used for Data Analysis, AI/ML, and Automation',
      color: 'from-green-500 to-blue-500'
    },
    {
      name: 'Java',
      level: 80,
      icon: Coffee,
      description: 'Enterprise Applications and Android Development',
      color: 'from-red-500 to-orange-500'
    },
    {
      name: 'C++',
      level: 75,
      icon: Brain,
      description: 'System Programming and Competitive Coding',
      color: 'from-blue-500 to-purple-500'
    },
    {
      name: 'C',
      level: 70,
      icon: Terminal,
      description: 'Low-level Programming and Embedded Systems',
      color: 'from-gray-500 to-blue-500'
    }
  ];

  const skills = [
    { name: 'HTML/CSS', level: 90 },
    { name: 'JavaScript', level: 85 },
    { name: 'React.js', level: 88 },
    { name: 'Node.js', level: 82 },
    { name: 'MongoDB', level: 80 },
    { name: 'Express.js', level: 78 },
  ];

  const projects = [
    {
      title: 'Food Delivery App',
      description: 'A full-stack food delivery application with real-time order tracking and payment integration.',
      image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&h=400&fit=crop',
      tech: ['React', 'Node.js', 'MongoDB', 'Express'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'Blogging Website',
      description: 'A modern blogging platform with markdown support and user authentication.',
      image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=600&h=400&fit=crop',
      tech: ['React', 'Node.js', 'MongoDB', 'Express'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'Weather App',
      description: 'Real-time weather application with location-based forecasts and interactive maps.',
      image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?w=600&h=400&fit=crop',
      tech: ['React', 'Node.js', 'OpenWeather API'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'Tic-Tac-Toe',
      description: 'Interactive Tic-Tac-Toe game with AI opponent and multiplayer support.',
      image: 'https://images.unsplash.com/photo-1611996575749-79a3a250f948?w=600&h=400&fit=crop',
      tech: ['React', 'Socket.io', 'Node.js'],
      liveUrl: '#',
      githubUrl: '#'
    }
  ];

  const timeline = [
    {
      type: 'experience',
      title: 'Full Stack Developer Intern',
      organization: 'Prodigy Infotech',
      period: 'Jan 2025 - Present',
      description: 'Working on full-stack web development projects using MERN stack.',
      ongoing: true,
      icon: Briefcase
    },
    {
      type: 'education',
      title: 'Summer Training',
      organization: 'Cipher School',
      period: 'May 2024 - July 2024',
      description: 'Intensive training in MERN Stack development and modern web technologies.',
      ongoing: false,
      icon: GraduationCap
    },
    {
      type: 'education',
      title: 'B.Tech Computer Science',
      organization: 'Lovely Professional University',
      period: '2022 - Present',
      description: 'Pursuing Bachelor\'s degree with focus on software development and computer science fundamentals.',
      ongoing: true,
      icon: GraduationCap
    }
    
  ];

  const audioRef = useRef<HTMLAudioElement | null>(null);
  useEffect(() => {
    audioRef.current = new Audio('https://example.com/ambient.mp3');
    audioRef.current.loop = true;
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentGradient((prev) => (prev + 1) % gradients.length);
    }, 5000);
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setFunFactIndex((prev) => (prev + 1) % funFacts.length);
    }, 3000);
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const { left, top, width, height } = heroRef.current.getBoundingClientRect();
        const x = (e.clientX - left) / width;
        const y = (e.clientY - top) / height;
        setMousePosition({ x, y });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    let currentIndex = 0;
    const intervalId = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        setIsComplete(true);
        clearInterval(intervalId);
      }
    }, 50);

    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      clearInterval(intervalId);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleSound = () => {
    if (audioRef.current) {
      if (isSoundEnabled) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setSoundEnabled(!isSoundEnabled);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('sending');
    
    setTimeout(() => {
      setFormStatus('success');
      setTimeout(() => setFormStatus(''), 3000);
    }, 1500);
  };

  const renderHeroSection = () => (
    <div 
      ref={heroRef}
      id="home" 
      className={`relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden transition-colors duration-1000 bg-gradient-to-br ${gradients[currentGradient]}`}
    >
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-grid-white animate-[grid-fade_20s_linear_infinite]"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/10 to-transparent"></div>
      </div>

      <div className="absolute top-24 left-0 right-0 flex justify-center">
        <a 
          href="#projects"
          className="group bg-black/20 backdrop-blur-lg rounded-full px-6 py-2 flex items-center gap-2 hover:bg-black/30 transition-all transform hover:scale-105"
        >
          <span className="text-sm font-medium">Latest Project: Food Delivery App</span>
          <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </a>
      </div>

      <button
        onClick={toggleSound}
        className="absolute top-24 right-8 p-3 bg-black/20 backdrop-blur-lg rounded-full hover:bg-black/30 transition-all"
        aria-label={isSoundEnabled ? 'Disable sound' : 'Enable sound'}
      >
        {isSoundEnabled ? (
          <Volume2 className="w-5 h-5" />
        ) : (
          <VolumeX className="w-5 h-5" />
        )}
      </button>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-8">
          <div className="relative">
            <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-purple-500 shadow-lg shadow-purple-500/20">
              <img
                src="/profile.jpg"
                alt="Prince Raj"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-500/20 to-transparent"></div>
          </div>

          <div className="flex-1">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text">
              Hi, I'm Prince Raj
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-6">A Full-Stack Web Developer</p>
            <div className="h-8">
              <p className="text-lg text-purple-400">
                {text}
                {!isComplete && <span className="animate-pulse">|</span>}
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mt-8">
          <button className="group relative px-6 py-3 bg-purple-600 rounded-lg overflow-hidden transition-all hover:scale-105">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <span className="relative flex items-center gap-2">
              <FileDown className="w-5 h-5" />
              Download Resume
            </span>
          </button>
          <button className="group relative px-6 py-3 bg-transparent border-2 border-purple-500 rounded-lg overflow-hidden transition-all hover:scale-105">
            <div className="absolute inset-0 bg-purple-500 opacity-0 group-hover:opacity-20 transition-opacity"></div>
            <span className="relative flex items-center gap-2">
              <Mail className="w-5 h-5" />
              Contact Me
            </span>
          </button>
        </div>

        <div className="flex justify-center gap-6 mt-8">
          <a href="" className="text-gray-400 hover:text-purple-400 transition-colors">
            <Github className="w-6 h-6" />
          </a>
          <a href="https://www.linkedin.com/in/prince-raj2003/" className="text-gray-400 hover:text-purple-400 transition-colors">
            <Linkedin className="w-6 h-6" />
          </a>
          <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
            <Mail className="w-6 h-6" />
          </a>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-purple-400" />
        </div>
      </div>
    </div>
  );

  const renderAboutSection = () => (
    <section id="about" className="relative py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text">
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <p className="text-xl text-gray-300 italic mb-6">
              "Turning Ideas into Code, One Line at a Time"
            </p>
            <div className="space-y-4">
              <p className="text-gray-300">
                Currently pursuing B.Tech in Computer Science Engineering at Lovely Professional University,
                I'm passionate about creating scalable web applications that solve real-world problems.
              </p>
              <p className="text-gray-300">
                During my internship at Prodigy Infotech, I gained valuable experience in full-stack development,
                working with modern technologies and agile methodologies.
              </p>
              <p className="text-gray-300">
                I specialize in building robust web applications using the MERN stack and have a keen interest
                in creating intuitive user experiences.
              </p>
            </div>

            <div className="bg-purple-500/10 rounded-lg p-6 mt-8">
              <div className="h-16 flex items-center justify-center">
                <p className="text-lg text-purple-400 text-center animate-fade-in">
                  {funFacts[funFactIndex]}
                </p>
              </div>
            </div>

            <button
              onClick={() => setShowMoreAbout(!showMoreAbout)}
              className="w-full mt-4 px-6 py-3 bg-purple-500/10 rounded-lg flex items-center justify-between hover:bg-purple-500/20 transition-colors"
            >
              <span>More About Me</span>
              {showMoreAbout ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
            </button>

            {showMoreAbout && (
              <div className="space-y-4 animate-fade-in">
                <h4 className="text-lg font-semibold">Hobbies & Interests</h4>
                <ul className="list-disc list-inside space-y-2 text-gray-300">
                  <li>Competitive Programming</li>
                  <li>Open Source Contributing</li>
                  <li>Tech Blogging</li>
                  <li>AI/ML Exploration</li>
                </ul>
              </div>
            )}
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-semibold mb-6">Programming Skills</h3>
            <div className="space-y-6">
              {programmingSkills.map((skill) => (
                <div
                  key={skill.name}
                  className="group relative bg-gray-800/30 rounded-lg p-4 hover:bg-gray-800/50 transition-colors"
                >
                  <div className="flex items-center gap-4 mb-2">
                    <div className="p-2 bg-gray-700 rounded-lg">
                      <skill.icon className="w-6 h-6 text-purple-400" />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-center">
                        <h4 className="font-medium">{skill.name}</h4>
                        <span className="text-purple-400">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-gray-700 rounded-full mt-2 overflow-hidden">
                        <div
                          className={`h-full bg-gradient-to-r ${skill.color} transform origin-left transition-transform duration-1000 scale-x-0 group-hover:scale-x-100`}
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="absolute left-0 right-0 -bottom-12 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="bg-gray-800 text-sm p-2 rounded-lg text-center">
                      {skill.description}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <a
            href="/Princecv.pdf"
            download
            className="inline-flex items-center gap-2 px-6 py-3 bg-purple-500 rounded-lg hover:bg-purple-600 transition-colors"
          >
            <FileDown className="w-5 h-5" />
            <span>Download Full Resume</span>
          </a>
        </div>
      </div>
    </section>
  );

  return (
    <div className={`min-h-screen bg-gradient-to-br ${
      isDarkMode 
        ? 'from-gray-900 via-black to-gray-900 text-white' 
        : 'from-gray-100 via-white to-gray-100 text-gray-900'
    } transition-colors duration-300`}>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? `${isDarkMode ? 'bg-black/80' : 'bg-white/80'} backdrop-blur-lg shadow-lg` 
          : 'bg-transparent'
      }`}>
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <a 
              href="#" 
              className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text hover:glow-effect transition-all"
            >
              PR
            </a>

            <div className="hidden md:flex items-center space-x-8">
              {[
                { name: 'Home', id: 'home' },
                { name: 'About Me', id: 'about' },
                { name: 'Projects', id: 'projects' },
                { name: 'Education', id: 'education' },
                { name: 'Contact Me', id: 'contact' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`nav-link-underline py-2 ${
                    isDarkMode 
                      ? 'text-gray-300 hover:text-purple-400' 
                      : 'text-gray-600 hover:text-purple-600'
                  } transition-colors hover:glow-effect`}
                >
                  {item.name}
                </button>
              ))}
            </div>

            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className={`p-2 rounded-full ${
                isDarkMode 
                  ? 'bg-gray-800 hover:bg-gray-700' 
                  : 'bg-gray-200 hover:bg-gray-300'
              } transition-colors`}
              aria-label="Toggle theme"
            >
              {isDarkMode ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </button>

            <div className="md:hidden">
              <button
                className={`p-2 rounded-lg ${
                  isDarkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-200'
                } transition-colors`}
                aria-label="Menu"
              >
                <div className="w-6 h-0.5 bg-current mb-1.5"></div>
                <div className="w-6 h-0.5 bg-current mb-1.5"></div>
                <div className="w-6 h-0.5 bg-current"></div>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {renderHeroSection()}
      {renderAboutSection()}

      <section id="projects" className="relative py-20 px-4 bg-black/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text">
            Featured Projects
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group relative bg-gray-800/50 rounded-xl overflow-hidden transition-transform hover:-translate-y-2"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 text-sm bg-purple-500/10 text-purple-400 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <a
                      href={project.liveUrl}
                      className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
                    >
                      <Globe className="w-4 h-4" />
                      <span>Live Demo</span>
                    </a>
                    <a
                      href={project.githubUrl}
                      className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
                    >
                      <Code2 className="w-4 h-4" />
                      <span>Source Code</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="education" className="relative py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text">
            Experience & Education
          </h2>

          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 to-pink-500"></div>

            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div
                  key={index}
                  className={`relative flex flex-col md:flex-row gap-8 ${
                    index % 2 === 0 ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  <div className="absolute left-4 md:left-1/2 -translate-x-2 md:-translate-x-3 w-4 h-4 rounded-full bg-purple-500 border-4 border-gray-900"></div>

                  <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pl-12' : 'md:pr-12'}`}>
                    <div className="bg-gray-800/50 rounded-lg p-6 transform hover:-translate-y-1 transition-transform">
                      <div className="flex items-center gap-3 mb-2">
                        <item.icon className="w-5 h-5 text-purple-400" />
                        <h3 className="text-xl font-semibold">{item.title}</h3>
                      </div>
                      <p className="text-purple-400 mb-2">{item.organization}</p>
                      <p className="text-gray-400 mb-3">{item.period}</p>
                      <p className="text-gray-300">{item.description}</p>
                      {item.ongoing && (
                        <div className="mt-4">
                          <div className="h-1.5 w-full bg-gray-700 rounded-full overflow-hidden">
                            <div className="h-full w-2/3 bg-gradient-to-r from-purple-500 to-pink-500 animate-pulse"></div>
                          </div>
                          <p className="text-sm text-purple-400 mt-1">In Progress</p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="relative py-20 px-4 bg-black/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text">
            Get In Touch
          </h2>

          <div className="grid md:grid-cols-5 gap-12">
            <div className="md:col-span-3">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Your Name"
                    required
                    className="w-full bg-gray-800/50 rounded-lg px-10 py-3 outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                  />
                </div>
                <div className="relative">
                  <AtSign className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="email"
                    placeholder="Your Email"
                    required
                    className="w-full bg-gray-800/50 rounded-lg px-10 py-3 outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                  />
                </div>
                <textarea
                  placeholder="Your Message"
                  required
                  rows={5}
                  className="w-full bg-gray-800/50 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                ></textarea>
                <button
                  type="submit"
                  disabled={formStatus === 'sending'}
                  className="group relative w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 rounded-lg overflow-hidden transition-all hover:scale-[1.02]"
                >
                  <span className="relative flex items-center justify-center gap-2">
                    <Send className={`w-5 h-5 ${formStatus === 'sending' ? 'animate-ping' : ''}`} />
                    {formStatus === 'sending' ? 'Sending...' : 'Send Message'}
                  </span>
                </button>
                {formStatus === 'success' && (
                  <div className="text-center text-green-400 animate-fade-in">
                    Message sent successfully!
                  </div>
                )}
              </form>
            </div>

            <div className="md:col-span-2 space-y-8">
              <div className="text-center md:text-left">
                <h3 className="text-2xl font-sem ibold mb-6">Connect With Me</h3>
                <div className="space-y-4">
                  <a
                    href="mailto:contact@example.com"
                    className="flex items-center gap-4 text-gray-300 hover:text-purple-400 transition-colors"
                  >
                    <div className="w-12 h-12 rounded-full bg-gray-800/50 flex items-center justify-center">
                      <Mail className="w-6 h-6" />
                    </div>
                    <span>contact@example.com</span>
                  </a>
                  <a
                    href="https://github.com/princeraj"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 text-gray-300 hover:text-purple-400 transition-colors"
                  >
                    <div className="w-12 h-12 rounded-full bg-gray-800/50 flex items-center justify-center">
                      <Github className="w-6 h-6" />
                    </div>
                    <span>github.com/princeraj</span>
                  </a>
                  <a
                    href="https://linkedin.com/in/princeraj"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 text-gray-300 hover:text-purple-400 transition-colors"
                  >
                    <div className="w-12 h-12 rounded-full bg-gray-800/50 flex items-center justify-center">
                      <Linkedin className="w-6 h-6" />
                    </div>
                    <span>linkedin.com/in/princeraj</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className={`relative ${isDarkMode ? 'bg-black/30' : 'bg-white/30'} py-12 px-4`}>
        <div className="max-w-6xl mx-auto text-center">
          <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            © {new Date().getFullYear()} Prince Raj. All rights reserved.
          </p>
        </div>
      </footer>

      {showScrollTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 p-3 bg-purple-500 rounded-full shadow-lg hover:bg-purple-600 transition-colors"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-6 h-6" />
        </button>
      )}
    </div>
  );
}

export default App;