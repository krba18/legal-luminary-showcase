
import React, { useState, useEffect } from 'react';
import { ChevronDown, Scale, Gavel, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const [currentTypewriter, setCurrentTypewriter] = useState(0);
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

  const scrollToNext = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-legal-navy via-gray-800 to-black dark:from-black dark:via-gray-900 dark:to-legal-navy">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23B8860B" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="4"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      </div>

      {/* Floating Icons */}
      <div className="absolute inset-0 pointer-events-none">
        <Scale className="absolute top-20 left-10 w-12 h-12 text-legal-gold/30 animate-float" style={{ animationDelay: '0s' }} />
        <Gavel className="absolute top-40 right-20 w-10 h-10 text-legal-gold/20 animate-float" style={{ animationDelay: '1s' }} />
        <BookOpen className="absolute bottom-40 left-20 w-14 h-14 text-legal-gold/25 animate-float" style={{ animationDelay: '2s' }} />
        <Scale className="absolute bottom-20 right-10 w-8 h-8 text-legal-gold/35 animate-float" style={{ animationDelay: '1.5s' }} />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-6 max-w-6xl mx-auto">
        <div className="animate-scale-up">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 bg-gradient-to-r from-white via-legal-gold to-white bg-clip-text text-transparent animate-glow">
            Alexandra Mitchell
          </h1>
          
          <div className="h-16 mb-8">
            <p className="text-xl md:text-2xl lg:text-3xl text-legal-gold font-light">
              <span className="inline-block overflow-hidden border-r-2 border-legal-gold whitespace-nowrap animate-typewriter">
                {typewriterTexts[currentTypewriter]}
              </span>
              <span className="animate-blink">|</span>
            </p>
          </div>

          <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in">
            Final year law student with a passion for constitutional law, human rights advocacy, 
            and legal research. Dedicated to making a positive impact in the legal profession 
            through innovation and unwavering commitment to justice.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-in-left">
            <Button 
              size="lg" 
              className="bg-legal-gold hover:bg-legal-gold/80 text-legal-navy font-semibold px-8 py-4 rounded-full transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get In Touch
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-2 border-legal-gold text-legal-gold hover:bg-legal-gold hover:text-legal-navy font-semibold px-8 py-4 rounded-full transform hover:scale-105 transition-all duration-300"
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Learn More
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer" onClick={scrollToNext}>
          <div className="flex flex-col items-center text-legal-gold hover:text-white transition-colors duration-300">
            <span className="text-sm mb-2 font-medium">Scroll Down</span>
            <ChevronDown className="w-6 h-6 animate-pulse" />
          </div>
        </div>
      </div>

      {/* Particle Effect */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-legal-gold rounded-full opacity-30 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
