
import React, { useState } from 'react';
import { FileText, Download, Eye, Calendar, Users, ExternalLink } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';

const ProjectsSection = () => {
  const projects = [
    {
      category: "briefs",
      title: "Constitutional Challenge to Digital Privacy Act",
      type: "Appellate Brief",
      date: "March 2024",
      description: "Comprehensive appellate brief challenging state digital privacy legislation on First Amendment grounds.",
      collaborators: 2,
      pages: 45,
      preview: "This brief argues that the Digital Privacy Act violates the First Amendment by imposing content-based restrictions on speech in digital forums. The legislation's broad definition of 'harmful content' creates a chilling effect on protected expression and fails to meet strict scrutiny review...",
      tags: ["Constitutional Law", "First Amendment", "Digital Rights", "Appellate Practice"],
      color: "from-blue-500 to-blue-700"
    },
    {
      category: "petitions",
      title: "Emergency Writ of Habeas Corpus",
      type: "Federal Petition",
      date: "February 2024",
      description: "Emergency petition for writ of habeas corpus challenging unlawful detention and due process violations.",
      collaborators: 1,
      pages: 28,
      preview: "Petitioner seeks immediate relief from unlawful detention based on substantial due process violations during initial proceedings. The detention lacks proper legal foundation and violates clearly established constitutional protections under the Fifth and Fourteenth Amendments...",
      tags: ["Habeas Corpus", "Due Process", "Criminal Law", "Emergency Relief"],
      color: "from-red-500 to-red-700"
    },
    {
      category: "memoranda",
      title: "Legal Memorandum on AI Bias in Sentencing",
      type: "Research Memorandum",
      date: "January 2024",
      description: "Comprehensive legal analysis of algorithmic bias in criminal sentencing systems and constitutional implications.",
      collaborators: 3,
      pages: 52,
      preview: "This memorandum examines the constitutional implications of AI-assisted sentencing algorithms, particularly focusing on due process concerns and equal protection violations. The analysis reveals significant bias patterns that may violate fundamental fairness requirements...",
      tags: ["Technology Law", "Criminal Justice", "AI Ethics", "Equal Protection"],
      color: "from-purple-500 to-purple-700"
    },
    {
      category: "contracts",
      title: "Technology Transfer Agreement Template",
      type: "Contract Template",
      date: "December 2023",
      description: "Comprehensive template for university-industry technology transfer agreements with IP protection clauses.",
      collaborators: 2,
      pages: 38,
      preview: "This agreement governs the transfer of technology and intellectual property rights from academic institutions to commercial entities. The template includes comprehensive IP protection, licensing terms, and revenue-sharing provisions designed to protect institutional interests...",
      tags: ["Intellectual Property", "Contract Law", "Technology Transfer", "Commercial Law"],
      color: "from-green-500 to-green-700"
    },
    {
      category: "briefs",
      title: "Amicus Curiae Brief - Environmental Rights",
      type: "Supreme Court Brief",
      date: "November 2023",
      description: "Amicus brief supporting environmental rights in landmark climate change litigation case.",
      collaborators: 4,
      pages: 35,
      preview: "As amici curiae, we urge this Court to recognize the constitutional dimensions of environmental protection and the rights of future generations. Climate change presents an unprecedented challenge requiring judicial recognition of fundamental environmental rights...",
      tags: ["Environmental Law", "Climate Change", "Constitutional Rights", "Amicus Brief"],
      color: "from-emerald-500 to-emerald-700"
    },
    {
      category: "memoranda",
      title: "Corporate Governance Reform Analysis",
      type: "Policy Memorandum",
      date: "October 2023",
      description: "Analysis of proposed corporate governance reforms and their impact on shareholder rights and corporate accountability.",
      collaborators: 2,
      pages: 41,
      preview: "This memorandum analyzes recent proposals for corporate governance reform, examining their potential impact on shareholder rights, board accountability, and corporate transparency. The analysis includes recommendations for implementation and potential legal challenges...",
      tags: ["Corporate Law", "Governance", "Securities Law", "Policy Analysis"],
      color: "from-indigo-500 to-indigo-700"
    }
  ];

  const categories = [
    { id: "all", label: "All Projects", count: projects.length },
    { id: "briefs", label: "Legal Briefs", count: projects.filter(p => p.category === "briefs").length },
    { id: "petitions", label: "Petitions", count: projects.filter(p => p.category === "petitions").length },
    { id: "memoranda", label: "Memoranda", count: projects.filter(p => p.category === "memoranda").length },
    { id: "contracts", label: "Contracts", count: projects.filter(p => p.category === "contracts").length }
  ];

  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredProjects = selectedCategory === "all" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900 transition-all duration-500">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-legal-navy dark:text-white mb-4 animate-fade-in">
            Legal Projects & Drafts
          </h2>
          <div className="w-24 h-1 bg-legal-gold mx-auto animate-scale-up"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 mt-6 max-w-3xl mx-auto animate-fade-in">
            Sample legal documents, briefs, petitions, and memoranda demonstrating practical legal writing and analytical skills.
          </p>
        </div>

        {/* Category Tabs */}
        <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="mb-12">
          <TabsList className="grid w-full grid-cols-5 bg-gray-100 dark:bg-gray-800 rounded-lg p-1">
            {categories.map((category) => (
              <TabsTrigger 
                key={category.id} 
                value={category.id}
                className="flex flex-col items-center py-3 data-[state=active]:bg-legal-gold data-[state=active]:text-white transition-all duration-300"
              >
                <span className="font-medium">{category.label}</span>
                <Badge variant="secondary" className="mt-1 text-xs">
                  {category.count}
                </Badge>
              </TabsTrigger>
            ))}
          </TabsList>

          <TabsContent value={selectedCategory} className="mt-8">
            <div className="grid lg:grid-cols-2 gap-8">
              {filteredProjects.map((project, index) => (
                <Card 
                  key={index} 
                  className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-scale-up relative overflow-hidden bg-white dark:bg-gray-700"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Background Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-5 group-hover:opacity-10 transition-opacity duration-500`}></div>
                  
                  <CardHeader className="relative">
                    <div className="flex items-start justify-between mb-4">
                      <FileText className="w-6 h-6 text-legal-gold group-hover:scale-110 transition-transform duration-300" />
                      <Badge variant="outline" className="border-legal-gold text-legal-gold">
                        {project.type}
                      </Badge>
                    </div>
                    
                    <CardTitle className="text-xl font-bold text-legal-navy dark:text-white mb-3 group-hover:text-legal-gold transition-colors duration-300 leading-tight">
                      {project.title}
                    </CardTitle>
                    
                    <div className="grid grid-cols-2 gap-4 text-sm text-gray-600 dark:text-gray-300">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-2" />
                        {project.date}
                      </div>
                      <div className="flex items-center">
                        <Users className="w-4 h-4 mr-2" />
                        {project.collaborators + 1} authors
                      </div>
                      <div className="flex items-center">
                        <FileText className="w-4 h-4 mr-2" />
                        {project.pages} pages
                      </div>
                      <div className="flex items-center">
                        <Eye className="w-4 h-4 mr-2" />
                        Available
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="relative">
                    <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="mb-6">
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag, tagIndex) => (
                          <Badge 
                            key={tagIndex} 
                            variant="secondary" 
                            className="text-xs bg-legal-gold/10 text-legal-gold border-legal-gold/20"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button 
                            variant="outline" 
                            size="sm" 
                            className="flex-1 border-legal-gold text-legal-gold hover:bg-legal-gold hover:text-white transition-all duration-300"
                          >
                            <Eye className="w-4 h-4 mr-2" />
                            Preview
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
                          <DialogHeader>
                            <DialogTitle className="text-xl font-bold text-legal-navy">
                              {project.title}
                            </DialogTitle>
                            <DialogDescription className="text-legal-gold">
                              {project.type} • {project.date}
                            </DialogDescription>
                          </DialogHeader>
                          
                          <div className="space-y-4">
                            <div className="flex flex-wrap gap-2">
                              {project.tags.map((tag, tagIndex) => (
                                <Badge 
                                  key={tagIndex} 
                                  variant="secondary" 
                                  className="text-xs bg-legal-gold/10 text-legal-gold"
                                >
                                  {tag}
                                </Badge>
                              ))}
                            </div>
                            
                            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                              <h4 className="font-semibold text-legal-navy dark:text-white mb-3">Document Preview:</h4>
                              <p className="text-gray-600 dark:text-gray-300 leading-relaxed font-mono text-sm">
                                {project.preview}
                              </p>
                            </div>
                            
                            <div className="grid grid-cols-2 gap-4 text-sm">
                              <div>
                                <span className="font-semibold text-legal-navy dark:text-white">Document Type:</span>
                                <span className="ml-2 text-gray-600 dark:text-gray-300">{project.type}</span>
                              </div>
                              <div>
                                <span className="font-semibold text-legal-navy dark:text-white">Page Count:</span>
                                <span className="ml-2 text-gray-600 dark:text-gray-300">{project.pages} pages</span>
                              </div>
                              <div>
                                <span className="font-semibold text-legal-navy dark:text-white">Collaborators:</span>
                                <span className="ml-2 text-gray-600 dark:text-gray-300">{project.collaborators} co-authors</span>
                              </div>
                              <div>
                                <span className="font-semibold text-legal-navy dark:text-white">Date:</span>
                                <span className="ml-2 text-gray-600 dark:text-gray-300">{project.date}</span>
                              </div>
                            </div>
                          </div>
                        </DialogContent>
                      </Dialog>

                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="border-legal-gold text-legal-gold hover:bg-legal-gold hover:text-white transition-all duration-300"
                      >
                        <Download className="w-4 h-4 mr-2" />
                        Download
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* Projects Summary */}
        <div className="mt-16 text-center">
          <Card className="bg-gradient-to-r from-legal-gold/5 to-legal-burgundy/5 border-legal-gold/20 animate-fade-in">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-legal-navy dark:text-white mb-6">
                Document Portfolio Summary
              </h3>
              
              <div className="grid md:grid-cols-4 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-legal-gold mb-2">15+</div>
                  <div className="text-gray-600 dark:text-gray-300">Documents Drafted</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-legal-gold mb-2">500+</div>
                  <div className="text-gray-600 dark:text-gray-300">Pages Written</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-legal-gold mb-2">8</div>
                  <div className="text-gray-600 dark:text-gray-300">Practice Areas</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-legal-gold mb-2">100%</div>
                  <div className="text-gray-600 dark:text-gray-300">Quality Standard</div>
                </div>
              </div>
              
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto">
                This portfolio represents a comprehensive collection of legal documents spanning multiple practice areas, 
                demonstrating proficiency in legal writing, research, and analysis across various legal contexts.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
