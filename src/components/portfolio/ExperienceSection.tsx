
import React, { useState } from 'react';
import { Building, Calendar, MapPin, ExternalLink, Users, FileText, Scale } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const ExperienceSection = () => {
  const [flippedCard, setFlippedCard] = useState<number | null>(null);

  const experiences = [
    {
      title: "Legal Intern",
      company: "District Court Legal Aid",
      location: "Chennai, Tamil Nadu",
      duration: "Summer 2024",
      type: "Internship",
      description: "Gained practical experience in legal procedures and client interaction under supervision.",
      responsibilities: [
        "Assisted advocates in preparing case files and documents",
        "Observed court proceedings and learned legal procedures",
        "Helped with legal research on relevant case laws",
        "Assisted in drafting basic legal documents"
      ],
      skills: ["Legal Research", "Document Preparation", "Court Procedures", "Client Communication"],
      achievements: [
        "Successfully completed 6-week internship program",
        "Gained hands-on experience in family and civil law cases"
      ],
      logo: <Scale className="w-12 h-12" />
    },
    {
      title: "Student Volunteer",
      company: "Legal Aid Society",
      location: "Local Community",
      duration: "Jan 2024 - Present",
      type: "Volunteer",
      description: "Volunteering to provide basic legal awareness in rural communities.",
      responsibilities: [
        "Conducted legal awareness programs in villages",
        "Helped people understand their basic legal rights",
        "Assisted in organizing legal aid camps",
        "Documented common legal issues faced by community"
      ],
      skills: ["Public Speaking", "Community Outreach", "Legal Awareness", "Documentation"],
      achievements: [
        "Reached over 200 people through awareness programs",
        "Helped 25+ individuals access legal aid services"
      ],
      logo: <Users className="w-12 h-12" />
    },
    {
      title: "Research Assistant",
      company: "College Law Department",
      location: "Law College",
      duration: "Sep 2023 - Dec 2023",
      type: "Academic",
      description: "Assisted professors with research projects on constitutional law topics.",
      responsibilities: [
        "Collected and organized legal research materials",
        "Prepared summaries of important case laws",
        "Assisted in preparing academic papers",
        "Maintained research databases and citations"
      ],
      skills: ["Academic Research", "Legal Writing", "Citation Methods", "Data Organization"],
      achievements: [
        "Contributed to department's research publication",
        "Developed strong research and analytical skills"
      ],
      logo: <FileText className="w-12 h-12" />
    }
  ];

  const handleCardClick = (index: number) => {
    setFlippedCard(flippedCard === index ? null : index);
  };

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800 transition-all duration-500">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-legal-navy dark:text-white mb-4 animate-fade-in">
            Learning Experience
          </h2>
          <div className="w-24 h-1 bg-legal-gold mx-auto animate-scale-up"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 mt-6 max-w-3xl mx-auto animate-fade-in">
            Building practical legal knowledge through internships, volunteer work, and academic research as a developing law student.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {experiences.map((exp, index) => (
            <div key={index} className="relative h-96 animate-scale-up" style={{ animationDelay: `${index * 0.2}s` }}>
              <div className={`absolute inset-0 transition-transform duration-700 transform-style-preserve-3d cursor-pointer ${
                flippedCard === index ? 'rotate-y-180' : ''
              }`}>
                
                {/* Front of Card */}
                <Card 
                  className="absolute inset-0 backface-hidden group hover:shadow-2xl transition-all duration-300 bg-white dark:bg-gray-700 border-l-4 border-legal-gold"
                  onClick={() => handleCardClick(index)}
                >
                  <CardHeader className="text-center pb-4">
                    <div className="text-legal-gold mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                      {exp.logo}
                    </div>
                    <CardTitle className="text-xl font-bold text-legal-navy dark:text-white mb-2">
                      {exp.title}
                    </CardTitle>
                    <div className="space-y-2">
                      <div className="flex items-center justify-center text-legal-gold font-semibold">
                        <Building className="w-4 h-4 mr-2" />
                        {exp.company}
                      </div>
                      <div className="flex items-center justify-center text-gray-600 dark:text-gray-300 text-sm">
                        <MapPin className="w-4 h-4 mr-2" />
                        {exp.location}
                      </div>
                      <div className="flex items-center justify-center text-gray-600 dark:text-gray-300 text-sm">
                        <Calendar className="w-4 h-4 mr-2" />
                        {exp.duration}
                      </div>
                    </div>
                    <Badge 
                      variant="secondary" 
                      className="bg-legal-gold/10 text-legal-gold border-legal-gold/20 mt-3"
                    >
                      {exp.type}
                    </Badge>
                  </CardHeader>

                  <CardContent className="px-6 pb-6">
                    <p className="text-gray-600 dark:text-gray-300 text-center leading-relaxed">
                      {exp.description}
                    </p>
                    
                    <div className="flex justify-center mt-6">
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="border-legal-gold text-legal-gold hover:bg-legal-gold hover:text-white transition-all duration-300"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        View Details
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                {/* Back of Card */}
                <Card 
                  className="absolute inset-0 backface-hidden rotate-y-180 group hover:shadow-2xl transition-all duration-300 bg-gradient-to-br from-legal-gold/5 to-legal-burgundy/5 dark:from-gray-700 dark:to-gray-600 border-legal-gold overflow-y-auto"
                  onClick={() => handleCardClick(index)}
                >
                  <CardHeader className="pb-4">
                    <CardTitle className="text-lg font-bold text-legal-navy dark:text-white">
                      Learning Activities
                    </CardTitle>
                  </CardHeader>

                  <CardContent className="px-6 pb-6">
                    <ul className="space-y-2 mb-6">
                      {exp.responsibilities.map((resp, respIndex) => (
                        <li key={respIndex} className="flex items-start text-sm text-gray-600 dark:text-gray-300">
                          <div className="w-2 h-2 bg-legal-gold rounded-full mr-3 mt-2 flex-shrink-0"></div>
                          {resp}
                        </li>
                      ))}
                    </ul>

                    <div className="mb-4">
                      <h4 className="font-semibold text-legal-navy dark:text-white mb-2">Skills Developed:</h4>
                      <div className="flex flex-wrap gap-1">
                        {exp.skills.map((skill, skillIndex) => (
                          <Badge 
                            key={skillIndex} 
                            variant="outline" 
                            className="text-xs border-legal-gold text-legal-gold"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-legal-navy dark:text-white mb-2">Key Learnings:</h4>
                      <ul className="space-y-1">
                        {exp.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="flex items-start text-xs text-gray-600 dark:text-gray-300">
                            <div className="w-1.5 h-1.5 bg-legal-gold rounded-full mr-2 mt-1.5 flex-shrink-0"></div>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          ))}
        </div>

        {/* Experience Summary */}
        <div className="mt-16 text-center">
          <Card className="bg-gradient-to-r from-legal-gold/5 to-legal-burgundy/5 border-legal-gold/20 animate-fade-in">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-legal-navy dark:text-white mb-4">
                Learning Journey
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-4xl mx-auto mb-6">
                As a 4th year law student, I am actively building my practical legal knowledge through diverse experiences. 
                Each opportunity has helped me understand the real-world application of legal principles and develop essential 
                skills for my future legal career.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-legal-gold mb-2">15+</div>
                  <div className="text-gray-600 dark:text-gray-300">Cases Observed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-legal-gold mb-2">100+</div>
                  <div className="text-gray-600 dark:text-gray-300">Hours of Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-legal-gold mb-2">200+</div>
                  <div className="text-gray-600 dark:text-gray-300">People Helped</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
