
import React, { useState, useEffect } from 'react';
import { ChevronDown, Scale, Gavel, BookOpen, User, Star, Sparkles, Heart, Award, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const [currentTypewriter, setCurrentTypewriter] = useState(0);
  const [showProfile, setShowProfile] = useState(false);
  const [profileClicks, setProfileClicks] = useState(0);
  
  const typewriterTexts = [
    "Advocating Justice Through Words and Wisdom",
    "Future Legal Professional",
    "Passionate About Constitutional Law", 
    "Dedicated to Human Rights",
    "Excellence in Legal Research",
    "Champion of Justice"
  ];

  const professionalQuotes = [
    "Justice delayed is justice denied",
    "The law is reason free from passion",
    "Equal justice under law",
    "In matters of truth and justice"
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

  const handleProfileClick = () => {
    setShowProfile(!showProfile);
    setProfileClicks(prev => prev + 1);
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Professional Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 dark:from-black dark:via-slate-900 dark:to-blue-900">
        {/* Subtle Pattern */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23FFD700' fill-opacity='0.2'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
        
        {/* Secondary Pattern */}
        <div className="absolute inset-0 opacity-5 animate-pulse" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23FFFFFF' fill-opacity='0.1'%3E%3Cpath d='M20 20L30 10L30 30z'/%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      {/* Professional Floating Icons */}
      <div className="absolute inset-0 pointer-events-none">
        <Scale className="absolute top-20 left-10 w-12 h-12 text-legal-gold/60 animate-float drop-shadow-lg" style={{ animationDelay: '0s' }} />
        <Gavel className="absolute top-40 right-20 w-10 h-10 text-blue-300/50 animate-float drop-shadow-lg" style={{ animationDelay: '1s' }} />
        <BookOpen className="absolute bottom-40 left-20 w-14 h-14 text-slate-300/50 animate-float drop-shadow-lg" style={{ animationDelay: '2s' }} />
        <Award className="absolute bottom-20 right-10 w-8 h-8 text-legal-gold/40 animate-float drop-shadow-lg" style={{ animationDelay: '1.5s' }} />
        <Star className="absolute top-1/4 left-1/4 w-6 h-6 text-white/30 animate-pulse" style={{ animationDelay: '0.5s' }} />
        <Sparkles className="absolute top-3/4 right-1/4 w-8 h-8 text-blue-200/40 animate-bounce" style={{ animationDelay: '2.5s' }} />
        <Heart className="absolute top-1/2 left-1/3 w-5 h-5 text-legal-gold/30 animate-pulse" style={{ animationDelay: '3s' }} />
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center text-white px-6 max-w-6xl mx-auto">
        <div className="animate-scale-up">
          {/* Interactive Profile Section */}
          <div className="mb-8 relative">
            <div 
              onClick={handleProfileClick}
              className="relative mx-auto w-32 h-32 rounded-full cursor-pointer transform transition-all duration-500 hover:scale-110 hover:rotate-6 group"
            >
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-slate-600 animate-spin-slow"></div>
              <div className="absolute inset-2 rounded-full bg-gradient-to-r from-legal-gold via-yellow-500 to-amber-500 flex items-center justify-center animate-pulse">
                <User className="w-12 h-12 text-slate-800 group-hover:scale-125 transition-transform duration-300" />
              </div>
              <div className="absolute -top-2 -right-2 bg-blue-600 rounded-full w-8 h-8 flex items-center justify-center animate-bounce">
                <Eye className="w-4 h-4 text-white" />
              </div>
              {profileClicks > 0 && (
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-slate-700 text-white px-2 py-1 rounded-full text-xs animate-bounce border border-legal-gold">
                  Clicks: {profileClicks}
                </div>
              )}
            </div>
            
            {showProfile && (
              <div className="absolute top-40 left-1/2 transform -translate-x-1/2 bg-white/10 backdrop-blur-md rounded-xl p-6 animate-scale-up border border-white/20 shadow-2xl">
                <h3 className="text-2xl font-bold text-legal-gold mb-2">Profile Info</h3>
                <p className="text-gray-200 mb-2">🎓 Final Year Law Student</p>
                <p className="text-gray-200 mb-2">⚖️ Constitutional Law Specialist</p>
                <p className="text-gray-200 mb-2">🏆 Moot Court Champion</p>
                <p className="text-gray-200">💼 Future Legal Eagle</p>
              </div>
            )}
          </div>

          {/* Professional Name Styling */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 relative">
            <span className="absolute inset-0 bg-gradient-to-r from-slate-300 via-white to-slate-300 bg-clip-text text-transparent blur-sm opacity-50">
              Sankara Subramanian
            </span>
            <span className="relative bg-gradient-to-r from-white via-legal-gold to-white bg-clip-text text-transparent animate-glow">
              Sankara Subramanian
            </span>
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/20 via-indigo-600/20 to-slate-600/20 rounded-lg blur opacity-30 animate-pulse"></div>
          </h1>
          
          {/* Professional Typewriter Section */}
          <div className="h-20 mb-8 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-slate-800/30 to-blue-800/30 rounded-lg backdrop-blur-sm border border-white/10"></div>
            <p className="relative text-xl md:text-2xl lg:text-3xl font-light pt-4">
              <span className="inline-block overflow-hidden border-r-4 border-legal-gold whitespace-nowrap animate-typewriter text-blue-100">
                {typewriterTexts[currentTypewriter]}
              </span>
              <span className="animate-blink text-legal-gold font-bold">|</span>
            </p>
          </div>

          {/* Professional Quote */}
          <div className="mb-8">
            <p className="text-lg md:text-xl text-slate-300 font-medium italic animate-fade-in">
              "{professionalQuotes[currentTypewriter % professionalQuotes.length]}"
            </p>
          </div>

          {/* Professional Description */}
          <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed animate-fade-in bg-black/20 rounded-lg p-6 backdrop-blur-sm border border-white/10">
            Final year law student with a passion for constitutional law, human rights advocacy, 
            and legal research. Dedicated to making a positive impact in the legal profession 
            through innovation and unwavering commitment to justice. ⚖️✨
          </p>

          {/* Professional Button Section */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-slide-in-left mb-8">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-indigo-700 hover:to-blue-600 text-white font-bold px-10 py-5 rounded-full transform hover:scale-110 transition-all duration-300 shadow-2xl hover:shadow-blue-500/50 border-2 border-white/20"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Sparkles className="w-5 h-5 mr-2" />
              Get In Touch
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="border-2 border-legal-gold bg-legal-gold/10 text-white hover:bg-legal-gold hover:text-slate-800 font-bold px-10 py-5 rounded-full transform hover:scale-110 transition-all duration-300 backdrop-blur-sm"
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Star className="w-5 h-5 mr-2" />
              Learn More
            </Button>
            
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-slate-600 to-slate-700 hover:from-slate-700 hover:to-slate-600 text-white font-bold px-10 py-5 rounded-full transform hover:scale-110 transition-all duration-300 shadow-2xl hover:shadow-slate-500/50"
              onClick={() => window.open('#', '_blank')}
            >
              <Award className="w-5 h-5 mr-2" />
              View Resume
            </Button>
          </div>

          {/* Professional Social Badges */}
          <div className="flex justify-center gap-4 mb-8">
            {[
              { name: 'LinkedIn', color: 'from-blue-600 to-blue-800' },
              { name: 'GitHub', color: 'from-slate-600 to-slate-800' },
              { name: 'Email', color: 'from-legal-gold to-yellow-600' }
            ].map((social, index) => (
              <div key={social.name} className={`animate-bounce bg-gradient-to-r ${social.color} text-white px-4 py-2 rounded-full text-sm font-semibold cursor-pointer hover:scale-110 transition-transform duration-300 shadow-lg`}
              style={{ animationDelay: `${index * 0.2}s` }}>
                {social.name}
              </div>
            ))}
          </div>
        </div>

        {/* Professional Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer group" onClick={scrollToNext}>
          <div className="flex flex-col items-center text-legal-gold hover:text-white transition-colors duration-300">
            <span className="text-sm mb-2 font-bold">Scroll Down</span>
            <div className="relative">
              <ChevronDown className="w-8 h-8 animate-pulse group-hover:animate-bounce" />
              <div className="absolute inset-0 w-8 h-8 bg-legal-gold/20 rounded-full animate-ping"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Professional Particle Effects */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className={`absolute rounded-full animate-float ${
              i % 4 === 0 ? 'bg-blue-400/30 w-3 h-3' :
              i % 4 === 1 ? 'bg-white/20 w-2 h-2' :
              i % 4 === 2 ? 'bg-legal-gold/40 w-2 h-2' : 'bg-slate-300/30 w-3 h-3'
            } shadow-lg`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      {/* Professional Shooting Stars */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(3)].map((_, i) => (
          <div
            key={`star-${i}`}
            className="absolute w-1 h-1 bg-white/70 rounded-full animate-ping"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 50}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: '3s'
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
