
import React, { useState, useEffect } from 'react';
import { ChevronDown, Menu, X, Moon, Sun, Download, Mail, Linkedin, Github, ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from '@/hooks/use-toast';

import HeroSection from '@/components/portfolio/HeroSection';
import AboutSection from '@/components/portfolio/AboutSection';
import EducationSection from '@/components/portfolio/EducationSection';
import SkillsSection from '@/components/portfolio/SkillsSection';
import ExperienceSection from '@/components/portfolio/ExperienceSection';
import MootCourtSection from '@/components/portfolio/MootCourtSection';
import PublicationsSection from '@/components/portfolio/PublicationsSection';
import ProjectsSection from '@/components/portfolio/ProjectsSection';
import ContactSection from '@/components/portfolio/ContactSection';
import Navigation from '@/components/portfolio/Navigation';

const Index = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [language, setLanguage] = useState('english');

  const translations = {
    english: {
      footerName: 'Sankara Subramanian',
      footerTitle: '4th Year Law Student',
      footerSubtitle: 'Future Legal Professional & Justice Advocate',
      quickLinks: 'Quick Links',
      connect: 'Connect',
      copyright: '© 2024 Sankara Subramanian. All rights reserved.',
      contactMe: 'Contact Me',
      links: ['About', 'Education', 'Skills', 'Experience', 'Contact']
    },
    tamil: {
      footerName: 'சங்கர சுப்ரமணியன்',
      footerTitle: '4ஆம் ஆண்டு சட்ட மாணவர்',
      footerSubtitle: 'எதிர்கால சட்ட தொழில் வல்லுநர் & நீதி வழக்கறிஞர்',
      quickLinks: 'விரைவு இணைப்புகள்',
      connect: 'தொடர்பு',
      copyright: '© 2024 சங்கர சுப்ரமணியன். அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.',
      contactMe: 'என்னைத் தொடர்புகொள்ளுங்கள்',
      links: ['அறிமுகம்', 'கல்வி', 'திறமைகள்', 'அனுபவம்', 'தொடர்பு']
    }
  };

  const currentTranslations = translations[language as keyof typeof translations] || translations.english;

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
      
      // Update active section based on scroll position
      const sections = ['home', 'about', 'education', 'skills', 'experience', 'moot-court', 'publications', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  const handleLanguageChange = (newLanguage: string) => {
    setLanguage(newLanguage);
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'dark' : ''}`}>
      <div className="bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-black transition-all duration-500">
        
        {/* Navigation */}
        <Navigation 
          darkMode={darkMode} 
          toggleDarkMode={toggleDarkMode} 
          activeSection={activeSection}
          language={language}
          onLanguageChange={handleLanguageChange}
        />

        {/* Hero Section with proper top padding to avoid navigation overlap */}
        <div className="pt-16">
          <HeroSection language={language} />
        </div>

        {/* About Section */}
        <AboutSection />

        {/* Education Section */}
        <EducationSection />

        {/* Skills Section */}
        <SkillsSection />

        {/* Experience Section */}
        <ExperienceSection />

        {/* Moot Court Section */}
        <MootCourtSection />

        {/* Publications Section */}
        <PublicationsSection />

        {/* Projects Section */}
        <ProjectsSection />

        {/* Contact Section */}
        <ContactSection />

        {/* Footer */}
        <footer className="bg-legal-navy dark:bg-black text-white py-12">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="animate-fade-in">
                <h3 className="text-xl font-bold mb-4 text-legal-gold">{currentTranslations.footerName}</h3>
                <p className="text-gray-300">{currentTranslations.footerTitle}</p>
                <p className="text-gray-400 mt-2">{currentTranslations.footerSubtitle}</p>
              </div>
              
              <div className="animate-fade-in">
                <h4 className="text-lg font-semibold mb-4">{currentTranslations.quickLinks}</h4>
                <ul className="space-y-2">
                  {currentTranslations.links.map((link, index) => {
                    const hrefs = ['#about', '#education', '#skills', '#experience', '#contact'];
                    return (
                      <li key={link}>
                        <a 
                          href={hrefs[index]} 
                          className="text-gray-300 hover:text-legal-gold transition-colors duration-300"
                        >
                          {link}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
              
              <div className="animate-fade-in">
                <h4 className="text-lg font-semibold mb-4">{currentTranslations.connect}</h4>
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-300 hover:text-legal-gold transition-colors duration-300 transform hover:scale-110">
                    <Linkedin className="w-6 h-6" />
                  </a>
                  <a href="#" className="text-gray-300 hover:text-legal-gold transition-colors duration-300 transform hover:scale-110">
                    <Mail className="w-6 h-6" />
                  </a>
                  <a href="#" className="text-gray-300 hover:text-legal-gold transition-colors duration-300 transform hover:scale-110">
                    <Github className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>
            
            <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
              <p>{currentTranslations.copyright}</p>
            </div>
          </div>
        </footer>

        {/* Scroll to Top Button */}
        {showScrollTop && (
          <Button
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-50 rounded-full w-12 h-12 bg-legal-gold hover:bg-legal-gold/80 text-white shadow-lg animate-bounce"
            size="icon"
          >
            <ArrowUp className="w-5 h-5" />
          </Button>
        )}

        {/* Floating Hire Me Button */}
        <div className="fixed left-8 top-1/2 transform -translate-y-1/2 z-40 hidden lg:block">
          <Button 
            className="bg-legal-burgundy hover:bg-legal-burgundy/80 text-white px-6 py-3 rounded-full shadow-xl animate-float writing-mode-vertical"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <Mail className="w-4 h-4 mr-2" />
            {currentTranslations.contactMe}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;
