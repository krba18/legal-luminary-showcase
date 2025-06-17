
import React, { useState } from 'react';
import { Trophy, Award, Calendar, Users, FileText, Download } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';

const MootCourtSection = () => {
  const [selectedCompetition, setSelectedCompetition] = useState<number | null>(null);

  const competitions = [
    {
      name: "Philip C. Jessup International Law Moot Court",
      rank: "National Finalist",
      year: "2024",
      description: "Premier international law moot court competition focusing on public international law issues.",
      role: "Lead Advocate & Brief Writer",
      teamSize: 4,
      achievement: "Best Oralist Award",
      skills: ["International Law", "Oral Advocacy", "Brief Writing", "Team Leadership"],
      details: {
        problem: "Territorial disputes and environmental law in the Arctic region",
        preparation: "6 months of intensive research and practice",
        opponents: "Harvard defeated teams from Yale, Stanford, and Columbia",
        judges: "Federal judges and international law experts"
      },
      color: "from-yellow-400 to-yellow-600"
    },
    {
      name: "National Moot Court Competition",
      rank: "Regional Champion",
      year: "2023",
      description: "Constitutional law competition focusing on First Amendment and due process issues.",
      role: "Co-Advocate",
      teamSize: 3,
      achievement: "Best Brief Award",
      skills: ["Constitutional Law", "Appellate Advocacy", "Legal Research", "Collaboration"],
      details: {
        problem: "Social media regulation and First Amendment protections",
        preparation: "4 months of case law analysis and argument development",
        opponents: "Competed against 16 teams from across the region",
        judges: "Circuit court judges and constitutional law scholars"
      },
      color: "from-blue-400 to-blue-600"
    },
    {
      name: "Harvard Law School Ames Competition",
      rank: "Semi-Finalist",
      year: "2023",
      description: "Harvard's premier internal moot court competition for first-year students.",
      role: "Solo Advocate",
      teamSize: 1,
      achievement: "Outstanding Performance",
      skills: ["Civil Procedure", "Evidence Law", "Oral Argument", "Case Analysis"],
      details: {
        problem: "Complex civil procedure and jurisdictional issues",
        preparation: "3 months of preparation with faculty mentors",
        opponents: "Top 16 students from Harvard Law School class",
        judges: "Harvard Law faculty and distinguished alumni"
      },
      color: "from-red-400 to-red-600"
    }
  ];

  const certifications = [
    {
      name: "Advanced Oral Advocacy Certificate",
      issuer: "National Institute for Trial Advocacy",
      date: "2024",
      type: "Professional Development"
    },
    {
      name: "Moot Court Excellence Award",
      issuer: "Harvard Law School",
      date: "2023",
      type: "Academic Recognition"
    },
    {
      name: "International Law Advocacy Certificate",
      issuer: "American Society of International Law",
      date: "2024",
      type: "Specialization"
    }
  ];

  return (
    <section id="moot-court" className="py-20 bg-white dark:bg-gray-900 transition-all duration-500">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-legal-navy dark:text-white mb-4 animate-fade-in">
            Moot Court & Competitions
          </h2>
          <div className="w-24 h-1 bg-legal-gold mx-auto animate-scale-up"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 mt-6 max-w-3xl mx-auto animate-fade-in">
            Excellence in competitive advocacy through prestigious moot court competitions and oral argument championships.
          </p>
        </div>

        {/* Competition Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {competitions.map((comp, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-scale-up relative overflow-hidden"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${comp.color} opacity-5 group-hover:opacity-15 transition-opacity duration-500`}></div>
              
              <CardHeader className="relative">
                <div className="flex items-start justify-between mb-4">
                  <Trophy className="w-8 h-8 text-legal-gold group-hover:scale-110 transition-transform duration-300" />
                  <Badge variant="secondary" className="bg-legal-gold text-legal-navy font-bold">
                    {comp.year}
                  </Badge>
                </div>
                
                <CardTitle className="text-xl font-bold text-legal-navy dark:text-white mb-3 group-hover:text-legal-gold transition-colors duration-300">
                  {comp.name}
                </CardTitle>
                
                <div className="space-y-2">
                  <div className="flex items-center text-legal-gold font-semibold">
                    <Award className="w-4 h-4 mr-2" />
                    {comp.rank}
                  </div>
                  <div className="flex items-center text-gray-600 dark:text-gray-300 text-sm">
                    <Users className="w-4 h-4 mr-2" />
                    {comp.role} • Team of {comp.teamSize}
                  </div>
                  <div className="flex items-center text-gray-600 dark:text-gray-300 text-sm">
                    <Trophy className="w-4 h-4 mr-2" />
                    {comp.achievement}
                  </div>
                </div>
              </CardHeader>

              <CardContent className="relative">
                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                  {comp.description}
                </p>

                <div className="mb-4">
                  <h4 className="font-semibold text-legal-navy dark:text-white mb-2">Skills Demonstrated:</h4>
                  <div className="flex flex-wrap gap-1">
                    {comp.skills.map((skill, skillIndex) => (
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

                <Dialog>
                  <DialogTrigger asChild>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="w-full border-legal-gold text-legal-gold hover:bg-legal-gold hover:text-white transition-all duration-300"
                    >
                      View Details
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-2xl">
                    <DialogHeader>
                      <DialogTitle className="text-xl font-bold text-legal-navy">
                        {comp.name} - {comp.year}
                      </DialogTitle>
                      <DialogDescription className="text-legal-gold font-semibold">
                        {comp.rank} • {comp.achievement}
                      </DialogDescription>
                    </DialogHeader>
                    
                    <div className="space-y-6">
                      <div>
                        <h4 className="font-semibold text-legal-navy mb-2">Competition Problem:</h4>
                        <p className="text-gray-600">{comp.details.problem}</p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-legal-navy mb-2">Preparation:</h4>
                        <p className="text-gray-600">{comp.details.preparation}</p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-legal-navy mb-2">Competition Details:</h4>
                        <p className="text-gray-600">{comp.details.opponents}</p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-legal-navy mb-2">Judging Panel:</h4>
                        <p className="text-gray-600">{comp.details.judges}</p>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Certifications */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-legal-navy dark:text-white mb-12 animate-fade-in">
            Awards & Certifications
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 animate-slide-in-left text-center border-l-4 border-legal-gold"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardContent className="p-6">
                  <Award className="w-12 h-12 text-legal-gold mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <h4 className="text-lg font-semibold text-legal-navy dark:text-white mb-2">
                    {cert.name}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 mb-2">
                    {cert.issuer}
                  </p>
                  <div className="space-y-2">
                    <Badge variant="outline" className="border-legal-gold text-legal-gold">
                      {cert.date}
                    </Badge>
                    <Badge variant="secondary" className="block bg-legal-gold/10 text-legal-gold">
                      {cert.type}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Statistics */}
        <div className="text-center">
          <Card className="bg-gradient-to-r from-legal-gold/5 to-legal-burgundy/5 border-legal-gold/20 animate-fade-in">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-legal-navy dark:text-white mb-6">
                Competitive Advocacy Record
              </h3>
              
              <div className="grid md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-legal-gold mb-2">12</div>
                  <div className="text-gray-600 dark:text-gray-300">Competitions Entered</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-legal-gold mb-2">8</div>
                  <div className="text-gray-600 dark:text-gray-300">Awards Won</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-legal-gold mb-2">85%</div>
                  <div className="text-gray-600 dark:text-gray-300">Win Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-legal-gold mb-2">500+</div>
                  <div className="text-gray-600 dark:text-gray-300">Hours of Practice</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default MootCourtSection;
