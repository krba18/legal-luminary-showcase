
import React, { useState, useEffect, useRef } from 'react';
import { FileText, Users, Gavel, Search, MessageSquare, BookOpen, Scale, Target } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

const SkillsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const legalSkills = [
    {
      name: "Legal Research",
      level: 95,
      icon: <Search className="w-6 h-6" />,
      description: "Advanced proficiency in Westlaw, LexisNexis, and Bloomberg Law"
    },
    {
      name: "Legal Writing",
      level: 92,
      icon: <FileText className="w-6 h-6" />,
      description: "Briefs, memoranda, contracts, and appellate documents"
    },
    {
      name: "Oral Advocacy",
      level: 88,
      icon: <MessageSquare className="w-6 h-6" />,
      description: "Moot court competitions and client presentations"
    },
    {
      name: "Case Analysis",
      level: 90,
      icon: <Gavel className="w-6 h-6" />,
      description: "Constitutional law, civil rights, and federal jurisprudence"
    },
    {
      name: "Client Counseling",
      level: 85,
      icon: <Users className="w-6 h-6" />,
      description: "Pro bono work and legal clinic experience"
    },
    {
      name: "Contract Drafting",
      level: 87,
      icon: <BookOpen className="w-6 h-6" />,
      description: "Commercial agreements and legal documentation"
    }
  ];

  const practiceAreas = [
    {
      name: "Constitutional Law",
      expertise: "Expert",
      icon: <Scale className="w-8 h-8" />,
      color: "from-legal-gold to-yellow-600"
    },
    {
      name: "Human Rights",
      expertise: "Advanced",
      icon: <Target className="w-8 h-8" />,
      color: "from-legal-burgundy to-red-700"
    },
    {
      name: "Civil Litigation",
      expertise: "Intermediate",
      icon: <Gavel className="w-8 h-8" />,
      color: "from-blue-500 to-blue-700"
    },
    {
      name: "Corporate Law",
      expertise: "Intermediate",
      icon: <BookOpen className="w-8 h-8" />,
      color: "from-green-500 to-green-700"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" ref={sectionRef} className="py-20 bg-white dark:bg-gray-900 transition-all duration-500">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-legal-navy dark:text-white mb-4 animate-fade-in">
            Legal Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-legal-gold mx-auto animate-scale-up"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 mt-6 max-w-3xl mx-auto animate-fade-in">
            Comprehensive legal skills developed through rigorous academic training, practical experience, and continuous professional development.
          </p>
        </div>

        {/* Legal Skills with Progress Bars */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center text-legal-navy dark:text-white mb-12 animate-fade-in">
            Core Legal Competencies
          </h3>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {legalSkills.map((skill, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 animate-slide-in-left border-l-4 border-legal-gold"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="text-legal-gold mr-4 group-hover:scale-110 transition-transform duration-300">
                      {skill.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-legal-navy dark:text-white mb-1">
                        {skill.name}
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        {skill.description}
                      </p>
                    </div>
                    <div className="text-legal-gold font-bold text-lg">
                      {skill.level}%
                    </div>
                  </div>
                  
                  <Progress 
                    value={isVisible ? skill.level : 0} 
                    className="w-full h-3 bg-gray-200 dark:bg-gray-700"
                  />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Practice Areas */}
        <div>
          <h3 className="text-3xl font-bold text-center text-legal-navy dark:text-white mb-12 animate-fade-in">
            Areas of Legal Focus
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {practiceAreas.map((area, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 hover:rotate-1 animate-scale-up relative overflow-hidden"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${area.color} opacity-10 group-hover:opacity-20 transition-opacity duration-500`}></div>
                
                <CardContent className="p-8 text-center relative">
                  <div className="text-legal-gold mb-6 flex justify-center group-hover:scale-125 group-hover:rotate-12 transition-all duration-500">
                    {area.icon}
                  </div>
                  <h4 className="text-xl font-bold text-legal-navy dark:text-white mb-3 group-hover:text-legal-gold transition-colors duration-300">
                    {area.name}
                  </h4>
                  <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-legal-gold/10 text-legal-gold border border-legal-gold/20">
                    {area.expertise}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Skills Summary */}
        <div className="mt-20 text-center">
          <Card className="bg-gradient-to-r from-legal-gold/5 to-legal-burgundy/5 border-legal-gold/20 animate-fade-in">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-legal-navy dark:text-white mb-4">
                Professional Summary
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-4xl mx-auto">
                With over 3 years of intensive legal education and practical experience, I have developed 
                a comprehensive skill set that encompasses both traditional legal competencies and modern 
                technological proficiencies. My expertise in constitutional law, combined with strong 
                research and advocacy skills, positions me to make meaningful contributions to the legal profession.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
