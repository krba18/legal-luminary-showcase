
import React, { useState } from 'react';
import { Quote, Heart, Target, Lightbulb } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const AboutSection = () => {
  const [currentQuote, setCurrentQuote] = useState(0);
  
  const quotes = [
    {
      text: "Justice delayed is justice denied.",
      author: "William E. Gladstone",
      icon: <Quote className="w-6 h-6" />
    },
    {
      text: "The law is reason, free from passion.",
      author: "Aristotle",
      icon: <Heart className="w-6 h-6" />
    },
    {
      text: "Injustice anywhere is a threat to justice everywhere.",
      author: "Martin Luther King Jr.",
      icon: <Target className="w-6 h-6" />
    }
  ];

  const funFacts = [
    { icon: <Lightbulb className="w-8 h-8" />, title: "Coffee Enthusiast", description: "Fueled by 5 cups of coffee daily during exam season" },
    { icon: <Heart className="w-8 h-8" />, title: "Volunteer Spirit", description: "200+ hours of pro bono legal aid work" },
    { icon: <Target className="w-8 h-8" />, title: "Debate Champion", description: "Won 3 inter-university debate competitions" }
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900 transition-all duration-500">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-legal-navy dark:text-white mb-4 animate-fade-in">
            About Me
          </h2>
          <div className="w-24 h-1 bg-legal-gold mx-auto animate-scale-up"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div className="relative animate-slide-in-left">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-legal-gold to-legal-burgundy rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
              <div className="relative bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 rounded-2xl p-8 transform group-hover:scale-105 transition-all duration-300">
                <div className="w-full h-96 bg-gradient-to-br from-legal-gold/20 to-legal-burgundy/20 rounded-xl flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-32 h-32 bg-legal-gold rounded-full mx-auto mb-4 flex items-center justify-center">
                      <span className="text-4xl font-bold text-legal-navy">AM</span>
                    </div>
                    <p className="text-lg text-gray-600 dark:text-gray-300">Professional Photo</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="animate-slide-in-right">
            <h3 className="text-2xl font-bold text-legal-navy dark:text-white mb-6">
              My Legal Journey
            </h3>
            
            <div className="prose prose-lg text-gray-600 dark:text-gray-300 mb-8">
              <p className="mb-4">
                I'm a passionate final-year law student at Harvard Law School, driven by an 
                unwavering commitment to justice and human rights. My journey into law began 
                during high school when I witnessed the power of legal advocacy in protecting 
                the vulnerable.
              </p>
              
              <p className="mb-4">
                Specializing in Constitutional Law and Human Rights, I've dedicated my academic 
                career to understanding the intricate relationship between law and society. Through 
                internships at prestigious law firms and pro bono work, I've gained practical 
                experience that complements my theoretical knowledge.
              </p>
              
              <p>
                My goal is to become a constitutional lawyer, focusing on civil liberties and 
                social justice. I believe that every individual deserves equal protection under 
                the law, and I'm committed to making that vision a reality.
              </p>
            </div>

            {/* Quote Carousel */}
            <Card className="mb-8 bg-gradient-to-r from-legal-gold/5 to-legal-burgundy/5 border-legal-gold/20">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="text-legal-gold">
                    {quotes[currentQuote].icon}
                  </div>
                  <div className="flex-1">
                    <blockquote className="text-lg italic text-gray-700 dark:text-gray-300">
                      "{quotes[currentQuote].text}"
                    </blockquote>
                    <cite className="text-sm text-legal-gold font-medium">
                      — {quotes[currentQuote].author}
                    </cite>
                  </div>
                </div>
                
                <div className="flex justify-center mt-4 space-x-2">
                  {quotes.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentQuote(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        currentQuote === index ? 'bg-legal-gold' : 'bg-gray-300'
                      }`}
                    />
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Fun Facts */}
        <div className="mt-16">
          <h3 className="text-3xl font-bold text-center text-legal-navy dark:text-white mb-12 animate-fade-in">
            Fun Facts About Me
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {funFacts.map((fact, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-scale-up border-l-4 border-legal-gold"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="text-legal-gold mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                    {fact.icon}
                  </div>
                  <h4 className="text-xl font-semibold text-legal-navy dark:text-white mb-2">
                    {fact.title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    {fact.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
