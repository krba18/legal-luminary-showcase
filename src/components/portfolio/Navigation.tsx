
import React, { useState } from 'react';
import { Menu, X, Moon, Sun, Download, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

interface NavigationProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
  activeSection: string;
  language: string;
  onLanguageChange: (language: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ 
  darkMode, 
  toggleDarkMode, 
  activeSection,
  language,
  onLanguageChange
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const translations = {
    english: {
      navItems: [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Education', href: '#education' },
        { name: 'Skills', href: '#skills' },
        { name: 'Experience', href: '#experience' },
        { name: 'Moot Court', href: '#moot-court' },
        { name: 'Publications', href: '#publications' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contact', href: '#contact' }
      ],
      resume: 'Resume',
      downloadResume: 'Download Resume'
    },
    tamil: {
      navItems: [
        { name: 'முகப்பு', href: '#home' },
        { name: 'அறிமுகம்', href: '#about' },
        { name: 'கல்வி', href: '#education' },
        { name: 'திறமைகள்', href: '#skills' },
        { name: 'அனுபவம்', href: '#experience' },
        { name: 'மூட் கோர்ட்', href: '#moot-court' },
        { name: 'வெளியீடுகள்', href: '#publications' },
        { name: 'திட்டங்கள்', href: '#projects' },
        { name: 'தொடர்பு', href: '#contact' }
      ],
      resume: 'விவரக்குறிப்பு',
      downloadResume: 'விவரக்குறிப்பை பதிவிறக்கு'
    }
  };

  const currentTranslations = translations[language as keyof typeof translations] || translations.english;

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md border-b border-gray-200 dark:border-gray-700 transition-all duration-300">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo - Fixed width and proper text sizing */}
          <div className="flex-shrink-0 min-w-0">
            <a 
              href="#home" 
              className="text-lg sm:text-xl md:text-2xl font-bold text-legal-navy dark:text-legal-gold hover:text-legal-gold dark:hover:text-white transition-colors duration-300 truncate block max-w-[200px] sm:max-w-none"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('#home');
              }}
            >
              Sankara Subramanian
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {currentTranslations.navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.href);
                  }}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:bg-legal-gold/10 hover:text-legal-gold ${
                    activeSection === item.href.substring(1) 
                      ? 'text-legal-gold bg-legal-gold/10' 
                      : 'text-gray-700 dark:text-gray-300'
                  }`}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button
              variant="outline"
              size="sm"
              className="border-legal-gold text-legal-gold hover:bg-legal-gold hover:text-white transition-all duration-300"
            >
              <Download className="w-4 h-4 mr-2" />
              {currentTranslations.resume}
            </Button>
            
            {/* Language Selector */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="rounded-full">
                  <Globe className="w-5 h-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem 
                  onClick={() => onLanguageChange('english')}
                  className={language === 'english' ? 'bg-legal-gold/10 text-legal-gold' : ''}
                >
                  English
                </DropdownMenuItem>
                <DropdownMenuItem 
                  onClick={() => onLanguageChange('tamil')}
                  className={language === 'tamil' ? 'bg-legal-gold/10 text-legal-gold' : ''}
                >
                  தமிழ்
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleDarkMode}
              className="rounded-full"
            >
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center space-x-2">
            {/* Mobile Language Selector */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="rounded-full">
                  <Globe className="w-5 h-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem 
                  onClick={() => onLanguageChange('english')}
                  className={language === 'english' ? 'bg-legal-gold/10 text-legal-gold' : ''}
                >
                  English
                </DropdownMenuItem>
                <DropdownMenuItem 
                  onClick={() => onLanguageChange('tamil')}
                  className={language === 'tamil' ? 'bg-legal-gold/10 text-legal-gold' : ''}
                >
                  தமிழ்
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleDarkMode}
              className="rounded-full"
            >
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="rounded-md"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 animate-fade-in">
              {currentTranslations.navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.href);
                  }}
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 ${
                    activeSection === item.href.substring(1)
                      ? 'text-legal-gold bg-legal-gold/10'
                      : 'text-gray-700 dark:text-gray-300 hover:text-legal-gold hover:bg-legal-gold/10'
                  }`}
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-2">
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full border-legal-gold text-legal-gold hover:bg-legal-gold hover:text-white transition-all duration-300"
                >
                  <Download className="w-4 h-4 mr-2" />
                  {currentTranslations.downloadResume}
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
