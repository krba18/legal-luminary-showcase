
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
      {/* Dynamic Background with Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-legal-navy via-slate-800 to-gray-900 dark:from-black dark:via-slate-900 dark:to-legal-navy">
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23B8860B' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
        
        {/* Animated Cursor Glow */}
        <div 
          className="absolute w-64 h-64 bg-legal-gold/10 rounded-full blur-3xl pointer-events-none transition-all duration-300 ease-out"
          style={{
            left: mousePosition.x - 128,
            top: mousePosition.y - 128,
          }}
        />
      </div>

      {/* Enhanced Floating Icons */}
      <div className="absolute inset-0 pointer-events-none">
        <Scale className="absolute top-16 left-8 lg:left-16 w-8 h-8 lg:w-12 lg:h-12 text-blue-400/40 animate-float" style={{ animationDelay: '0s' }} />
        <Gavel className="absolute top-32 right-12 lg:right-24 w-6 h-6 lg:w-10 lg:h-10 text-emerald-400/30 animate-float" style={{ animationDelay: '1s' }} />
        <BookOpen className="absolute bottom-40 left-12 lg:left-24 w-10 h-10 lg:w-14 lg:h-14 text-amber-400/35 animate-float" style={{ animationDelay: '2s' }} />
        <Award className="absolute top-1/2 left-4 lg:left-8 w-6 h-6 lg:w-8 lg:h-8 text-purple-400/30 animate-float" style={{ animationDelay: '0.5s' }} />
        <Users className="absolute top-1/4 right-4 lg:right-8 w-8 h-8 lg:w-10 lg:h-10 text-cyan-400/25 animate-float" style={{ animationDelay: '1.5s' }} />
        <FileText className="absolute bottom-1/4 right-16 lg:right-32 w-6 h-6 lg:w-9 lg:h-9 text-rose-400/30 animate-float" style={{ animationDelay: '2.5s' }} />
        <Briefcase className="absolute bottom-16 right-8 lg:right-16 w-7 h-7 lg:w-8 lg:h-8 text-indigo-400/35 animate-float" style={{ animationDelay: '3s' }} />
        <Star className="absolute top-20 left-1/2 w-5 h-5 lg:w-6 lg:h-6 text-yellow-400/40 animate-float" style={{ animationDelay: '0.8s' }} />
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 max-w-7xl mx-auto">
        <div className="animate-fade-in">
          {/* Profile Section with Click Animation */}
          <div className="mb-8 flex justify-center">
            <div 
              className={`relative group cursor-pointer transition-all duration-500 ${isProfileExpanded ? 'scale-110' : 'hover:scale-105'}`}
              onClick={handleProfileClick}
            >
              <div className="w-32 h-32 lg:w-40 lg:h-40 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-1 animate-pulse">
                <div className="w-full h-full rounded-full bg-gray-300 flex items-center justify-center overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-legal-gold/20 to-legal-navy/30 flex items-center justify-center text-4xl lg:text-5xl font-bold text-legal-gold">
                    SS
                  </div>
                </div>
              </div>
              
              {/* Profile Expansion Animation */}
              <div className={`absolute inset-0 rounded-full transition-all duration-500 ${isProfileExpanded ? 'scale-150 opacity-30' : 'scale-100 opacity-0'} bg-gradient-to-r from-blue-400 to-purple-400 animate-ping`}></div>
              
              {/* View Icon */}
              <div className="absolute -bottom-2 -right-2 bg-blue-500 text-white rounded-full p-2 transform transition-all duration-300 group-hover:scale-110 group-hover:bg-blue-600">
                <Eye className="w-4 h-4" />
              </div>
            </div>
          </div>

          {/* Enhanced Name with Letter Animation */}
          <div className="mb-6 overflow-hidden">
            <h1 className="text-4xl sm:text-6xl lg:text-8xl font-bold bg-gradient-to-r from-white via-legal-gold to-blue-400 bg-clip-text text-transparent animate-glow">
              {"Sankara Subramanian".split("").map((letter, index) => (
                <span
                  key={index}
                  className="inline-block animate-bounce hover:text-legal-gold transition-colors duration-300 cursor-default"
                  style={{
                    animationDelay: `${index * 0.1}s`,
                    animationDuration: '2s'
                  }}
                >
                  {letter === " " ? "\u00A0" : letter}
                </span>
              ))}
            </h1>
          </div>
          
          {/* Enhanced Typewriter Effect */}
          <div className="h-16 mb-8">
            <div className="relative">
              <p className="text-lg sm:text-xl lg:text-3xl text-legal-gold font-light">
                <span className="inline-block overflow-hidden border-r-2 border-legal-gold whitespace-nowrap animate-typewriter">
                  {typewriterTexts[currentTypewriter]}
                </span>
                <span className="animate-blink text-blue-400">|</span>
              </p>
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg blur-sm animate-pulse"></div>
            </div>
          </div>

          {/* Enhanced Description */}
          <p className="text-base sm:text-lg lg:text-xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed animate-slide-in-up">
            Final year law student with a passion for constitutional law, human rights advocacy, 
            and legal research. Dedicated to making a positive impact in the legal profession 
            through innovation and unwavering commitment to justice.
          </p>

          {/* Colorful Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8 animate-slide-in-left">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold px-8 py-4 rounded-full transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl group"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Mail className="w-5 h-5 mr-2 group-hover:animate-bounce" />
              Get In Touch
            </Button>
            
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-semibold px-8 py-4 rounded-full transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl group"
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Users className="w-5 h-5 mr-2 group-hover:animate-bounce" />
              Learn More
            </Button>
            
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white font-semibold px-8 py-4 rounded-full transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl group"
              onClick={() => window.open('#', '_blank')}
            >
              <Download className="w-5 h-5 mr-2 group-hover:animate-bounce" />
              Download CV
            </Button>
          </div>

          {/* Additional Contact Buttons */}
          <div className="flex justify-center gap-4 mb-8 animate-fade-in">
            <Button
              size="sm"
              variant="outline"
              className="border-2 border-rose-400 text-rose-400 hover:bg-rose-400 hover:text-white rounded-full p-3 transform hover:scale-110 transition-all duration-300"
              onClick={() => window.open('tel:+1234567890', '_self')}
            >
              <Phone className="w-4 h-4" />
            </Button>
            
            <Button
              size="sm"
              variant="outline"
              className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white rounded-full p-3 transform hover:scale-110 transition-all duration-300"
              onClick={() => window.open('mailto:sankara@example.com', '_self')}
            >
              <Mail className="w-4 h-4" />
            </Button>
            
            <Button
              size="sm"
              variant="outline"
              className="border-2 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white rounded-full p-3 transform hover:scale-110 transition-all duration-300"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <FileText className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Enhanced Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer group" onClick={scrollToNext}>
          <div className="flex flex-col items-center text-legal-gold hover:text-white transition-colors duration-300">
            <span className="text-sm mb-2 font-medium animate-pulse">Scroll Down</span>
            <div className="relative">
              <ChevronDown className="w-6 h-6 animate-pulse group-hover:animate-bounce" />
              <div className="absolute inset-0 w-6 h-6 bg-legal-gold/20 rounded-full animate-ping"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Particle Effects */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className={`absolute rounded-full opacity-40 animate-float ${
              i % 4 === 0 ? 'w-1 h-1 bg-blue-400' :
              i % 4 === 1 ? 'w-2 h-2 bg-purple-400' :
              i % 4 === 2 ? 'w-1.5 h-1.5 bg-emerald-400' :
              'w-1 h-1 bg-amber-400'
            }`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      {/* Floating Achievement Badges */}
      <div className="absolute top-4 right-4 lg:top-8 lg:right-8 flex flex-col gap-2 animate-slide-in-right">
        <div className="bg-blue-500/20 backdrop-blur-sm rounded-full px-3 py-1 text-xs text-blue-300 border border-blue-400/30">
          Law Student
        </div>
        <div className="bg-purple-500/20 backdrop-blur-sm rounded-full px-3 py-1 text-xs text-purple-300 border border-purple-400/30">
          Human Rights
        </div>
        <div className="bg-emerald-500/20 backdrop-blur-sm rounded-full px-3 py-1 text-xs text-emerald-300 border border-emerald-400/30">
          Justice Advocate
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
