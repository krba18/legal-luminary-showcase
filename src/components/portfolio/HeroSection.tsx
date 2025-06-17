
import React, { useState, useEffect } from 'react';
import { ChevronDown, Scale, Gavel, BookOpen, Award, Users, FileText, Mail, Phone, Download, Eye, Star, Briefcase } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const [currentTypewriter, setCurrentTypewriter] = useState(0);
  const [isProfileExpanded, setIsProfileExpanded] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  const typewriterTexts = [
    "Advocating Justice Through Words and Wisdom",
    "Future Legal Professional",
    "Passionate About Constitutional Law",
    "Dedicated to Human Rights"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTypewriter((prev) => (prev + 1) % typewriterTexts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToNext = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleProfileClick = () => {
    setIsProfileExpanded(!isProfileExpanded);
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Professional Background with High Court Image */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&auto=format&fit=crop&w=6000&q=80')`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-legal-navy/95 via-slate-900/90 to-gray-900/95"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30"></div>
      </div>

      {/* Subtle Floating Icons */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <Scale className="absolute top-16 left-8 lg:left-16 w-6 h-6 lg:w-8 lg:h-8 text-legal-gold animate-float" style={{ animationDelay: '0s' }} />
        <Gavel className="absolute top-32 right-12 lg:right-24 w-5 h-5 lg:w-7 lg:h-7 text-blue-300 animate-float" style={{ animationDelay: '1s' }} />
        <BookOpen className="absolute bottom-40 left-12 lg:left-24 w-7 h-7 lg:w-9 lg:h-9 text-gray-300 animate-float" style={{ animationDelay: '2s' }} />
        <Award className="absolute top-1/2 left-4 lg:left-8 w-5 h-5 lg:w-6 lg:h-6 text-legal-gold/70 animate-float" style={{ animationDelay: '0.5s' }} />
        <Users className="absolute top-1/4 right-4 lg:right-8 w-6 h-6 lg:w-7 lg:h-7 text-blue-200 animate-float" style={{ animationDelay: '1.5s' }} />
        <FileText className="absolute bottom-1/4 right-16 lg:right-32 w-5 h-5 lg:w-6 lg:h-6 text-gray-400 animate-float" style={{ animationDelay: '2.5s' }} />
        <Briefcase className="absolute bottom-16 right-8 lg:right-16 w-6 h-6 lg:w-7 lg:h-7 text-legal-gold/60 animate-float" style={{ animationDelay: '3s' }} />
        <Star className="absolute top-20 left-1/2 w-4 h-4 lg:w-5 lg:h-5 text-blue-300 animate-float" style={{ animationDelay: '0.8s' }} />
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 max-w-7xl mx-auto">
        <div className="animate-fade-in">
          {/* Static Professional Name */}
          <div className="mb-8">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white mb-4">
              Sankara Subramanian
            </h1>
          </div>

          {/* Moved Down Profile Section */}
          <div className="mb-12 flex justify-center">
            <div 
              className={`relative group cursor-pointer transition-all duration-500 ${isProfileExpanded ? 'scale-110' : 'hover:scale-105'}`}
              onClick={handleProfileClick}
            >
              <div className="w-24 h-24 lg:w-32 lg:h-32 rounded-full bg-gradient-to-r from-legal-gold via-blue-500 to-legal-navy p-1">
                <div className="w-full h-full rounded-full bg-gray-800 flex items-center justify-center overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-legal-gold/30 to-legal-navy/50 flex items-center justify-center text-2xl lg:text-3xl font-bold text-legal-gold">
                    SS
                  </div>
                </div>
              </div>
              
              {/* Profile Expansion Animation */}
              <div className={`absolute inset-0 rounded-full transition-all duration-500 ${isProfileExpanded ? 'scale-150 opacity-20' : 'scale-100 opacity-0'} bg-gradient-to-r from-legal-gold to-blue-400 animate-ping`}></div>
              
              {/* View Icon */}
              <div className="absolute -bottom-1 -right-1 bg-legal-gold text-legal-navy rounded-full p-1.5 transform transition-all duration-300 group-hover:scale-110">
                <Eye className="w-3 h-3" />
              </div>
            </div>
          </div>

          {/* Half-Visible Tagline */}
          <div className="mb-8 overflow-hidden" style={{ height: '2rem' }}>
            <div className="text-lg sm:text-xl lg:text-2xl text-legal-gold font-light">
              Human Rights, Justice Advocate
            </div>
          </div>

          {/* Professional Description */}
          <p className="text-base sm:text-lg text-gray-300 mb-16 max-w-3xl mx-auto leading-relaxed">
            Final year law student with a passion for constitutional law, human rights advocacy, 
            and legal research. Dedicated to making a positive impact in the legal profession.
          </p>

          {/* Professional Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button 
              size="lg" 
              className="bg-legal-gold hover:bg-legal-gold/90 text-legal-navy font-semibold px-8 py-4 rounded-lg transform hover:scale-105 transition-all duration-300 shadow-lg"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Mail className="w-5 h-5 mr-2" />
              Contact Me
            </Button>
            
            <Button 
              size="lg" 
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-lg transform hover:scale-105 transition-all duration-300 shadow-lg"
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Users className="w-5 h-5 mr-2" />
              About Me
            </Button>
            
            <Button 
              size="lg" 
              className="bg-gray-700 hover:bg-gray-600 text-white font-semibold px-8 py-4 rounded-lg transform hover:scale-105 transition-all duration-300 shadow-lg"
              onClick={() => window.open('#', '_blank')}
            >
              <Download className="w-5 h-5 mr-2" />
              Download CV
            </Button>
          </div>

          {/* Additional Contact Icons */}
          <div className="flex justify-center gap-4 mb-8">
            <Button
              size="sm"
              variant="outline"
              className="border-2 border-legal-gold text-legal-gold hover:bg-legal-gold hover:text-legal-navy rounded-full p-3 transform hover:scale-110 transition-all duration-300"
              onClick={() => window.open('tel:+1234567890', '_self')}
            >
              <Phone className="w-4 h-4" />
            </Button>
            
            <Button
              size="sm"
              variant="outline"
              className="border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white rounded-full p-3 transform hover:scale-110 transition-all duration-300"
              onClick={() => window.open('mailto:sankara@example.com', '_self')}
            >
              <Mail className="w-4 h-4" />
            </Button>
            
            <Button
              size="sm"
              variant="outline"
              className="border-2 border-gray-400 text-gray-400 hover:bg-gray-400 hover:text-white rounded-full p-3 transform hover:scale-110 transition-all duration-300"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <FileText className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Overlapping Scroll Indicator */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer group z-20" onClick={scrollToNext}>
          <div className="flex flex-col items-center text-legal-gold hover:text-white transition-colors duration-300">
            <span className="text-sm mb-2 font-medium">Scroll Down</span>
            <div className="relative">
              <ChevronDown className="w-6 h-6 animate-pulse group-hover:animate-bounce" />
              <div className="absolute inset-0 w-6 h-6 bg-legal-gold/20 rounded-full animate-ping"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Professional Achievement Badges */}
      <div className="absolute top-4 right-4 lg:top-8 lg:right-8 flex flex-col gap-2 animate-slide-in-right">
        <div className="bg-legal-gold/20 backdrop-blur-sm rounded-full px-3 py-1 text-xs text-legal-gold border border-legal-gold/30">
          Law Student
        </div>
        <div className="bg-blue-500/20 backdrop-blur-sm rounded-full px-3 py-1 text-xs text-blue-300 border border-blue-400/30">
          Human Rights
        </div>
        <div className="bg-gray-500/20 backdrop-blur-sm rounded-full px-3 py-1 text-xs text-gray-300 border border-gray-400/30">
          Justice Advocate
        </div>
      </div>

      {/* Subtle Particle Effects */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className={`absolute rounded-full animate-float ${
              i % 3 === 0 ? 'w-1 h-1 bg-legal-gold' :
              i % 3 === 1 ? 'w-1.5 h-1.5 bg-blue-400' :
              'w-1 h-1 bg-gray-400'
            }`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${4 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
