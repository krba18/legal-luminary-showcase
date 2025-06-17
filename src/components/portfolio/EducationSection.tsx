
import React from 'react';
import { GraduationCap, Award, Calendar, MapPin } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const EducationSection = () => {
  const education = [
    {
      degree: "Juris Doctor (J.D.)",
      institution: "Harvard Law School",
      location: "Cambridge, MA",
      duration: "2022 - 2025",
      gpa: "3.85/4.0",
      achievements: [
        "Dean's List - 6 consecutive semesters",
        "Harvard Law Review - Associate Editor",
        "Constitutional Law Society - President",
        "Ames Moot Court Competition - Finalist"
      ],
      description: "Specializing in Constitutional Law, Human Rights, and Civil Liberties with a focus on Supreme Court jurisprudence and federal court litigation.",
      color: "from-legal-gold to-yellow-600"
    },
    {
      degree: "Bachelor of Arts in Political Science",
      institution: "Yale University",
      location: "New Haven, CT",
      duration: "2018 - 2022",
      gpa: "3.9/4.0",
      achievements: [
        "Summa Cum Laude",
        "Phi Beta Kappa Honor Society",
        "Outstanding Senior Thesis Award",
        "Political Science Department Honors"
      ],
      description: "Concentrated in American Government and Public Policy with extensive coursework in constitutional theory and political philosophy.",
      color: "from-legal-burgundy to-red-700"
    }
  ];

  const certifications = [
    {
      name: "Constitutional Law Certificate",
      issuer: "American Bar Association",
      date: "2024",
      icon: <Award className="w-5 h-5" />
    },
    {
      name: "Legal Research & Writing",
      issuer: "West Academic Publishing",
      date: "2023",
      icon: <GraduationCap className="w-5 h-5" />
    },
    {
      name: "Human Rights Advocacy",
      issuer: "UN Human Rights Office",
      date: "2023",
      icon: <Award className="w-5 h-5" />
    }
  ];

  return (
    <section id="education" className="py-20 bg-gray-50 dark:bg-gray-800 transition-all duration-500">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-legal-navy dark:text-white mb-4 animate-fade-in">
            Education
          </h2>
          <div className="w-24 h-1 bg-legal-gold mx-auto animate-scale-up"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 mt-6 max-w-3xl mx-auto animate-fade-in">
            Academic excellence and continuous learning have been the foundation of my legal education journey.
          </p>
        </div>

        {/* Education Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-legal-gold hidden lg:block"></div>
          
          {education.map((edu, index) => (
            <div key={index} className={`mb-16 ${index % 2 === 0 ? 'lg:pr-8' : 'lg:pl-8'}`}>
              <div className={`lg:w-1/2 ${index % 2 === 0 ? 'lg:ml-auto' : ''}`}>
                <Card className={`group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-slide-in-${index % 2 === 0 ? 'right' : 'left'} relative overflow-hidden`}>
                  {/* Background Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${edu.color} opacity-5 group-hover:opacity-10 transition-opacity duration-500`}></div>
                  
                  {/* Timeline Dot */}
                  <div className="absolute top-1/2 transform -translate-y-1/2 w-6 h-6 bg-legal-gold rounded-full border-4 border-white shadow-lg hidden lg:block" 
                       style={{ 
                         left: index % 2 === 0 ? '-12px' : 'calc(100% - 12px)',
                         right: index % 2 === 0 ? 'auto' : '-12px'
                       }}>
                  </div>

                  <CardHeader className="relative">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <CardTitle className="text-2xl font-bold text-legal-navy dark:text-white mb-2 group-hover:text-legal-gold transition-colors duration-300">
                          {edu.degree}
                        </CardTitle>
                        <div className="flex items-center text-legal-gold font-semibold mb-2">
                          <GraduationCap className="w-5 h-5 mr-2" />
                          {edu.institution}
                        </div>
                        <div className="flex items-center text-gray-600 dark:text-gray-300 text-sm mb-2">
                          <MapPin className="w-4 h-4 mr-2" />
                          {edu.location}
                        </div>
                        <div className="flex items-center text-gray-600 dark:text-gray-300 text-sm">
                          <Calendar className="w-4 h-4 mr-2" />
                          {edu.duration}
                        </div>
                      </div>
                      <Badge variant="secondary" className="bg-legal-gold text-legal-navy font-bold">
                        GPA: {edu.gpa}
                      </Badge>
                    </div>
                  </CardHeader>

                  <CardContent className="relative">
                    <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                      {edu.description}
                    </p>

                    <div>
                      <h4 className="font-semibold text-legal-navy dark:text-white mb-3">Key Achievements:</h4>
                      <div className="grid gap-2">
                        {edu.achievements.map((achievement, achievementIndex) => (
                          <div 
                            key={achievementIndex} 
                            className="flex items-center text-gray-600 dark:text-gray-300 group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors duration-300"
                          >
                            <div className="w-2 h-2 bg-legal-gold rounded-full mr-3 flex-shrink-0"></div>
                            {achievement}
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-center text-legal-navy dark:text-white mb-12 animate-fade-in">
            Certifications & Awards
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-scale-up bg-white dark:bg-gray-700 border-l-4 border-legal-gold"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="text-legal-gold mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                    {cert.icon}
                  </div>
                  <h4 className="text-lg font-semibold text-legal-navy dark:text-white mb-2">
                    {cert.name}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 mb-2">
                    {cert.issuer}
                  </p>
                  <Badge variant="outline" className="border-legal-gold text-legal-gold">
                    {cert.date}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
