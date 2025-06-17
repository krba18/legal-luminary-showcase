
import React from 'react';
import { BookOpen, ExternalLink, Calendar, Tag, Eye } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const PublicationsSection = () => {
  const publications = [
    {
      title: "Constitutional Safeguards in the Digital Age: Privacy Rights and Government Surveillance",
      type: "Law Review Article",
      journal: "Harvard Law Review",
      date: "March 2024",
      excerpt: "An in-depth analysis of Fourth Amendment protections in the context of modern digital surveillance technologies, examining the balance between national security and individual privacy rights.",
      tags: ["Constitutional Law", "Privacy Rights", "Digital Surveillance", "Fourth Amendment"],
      status: "Published",
      readTime: "15 min read",
      views: 2847,
      color: "from-blue-500 to-blue-700"
    },
    {
      title: "The Evolution of Due Process: Examining Modern Applications of the Fourteenth Amendment",
      type: "Research Paper",
      journal: "Yale Constitutional Law Journal",
      date: "January 2024",
      excerpt: "A comprehensive examination of how due process guarantees have evolved to address contemporary legal challenges, with particular focus on criminal justice reform and administrative proceedings.",
      tags: ["Due Process", "Fourteenth Amendment", "Criminal Justice", "Administrative Law"],
      status: "Published",
      readTime: "12 min read",
      views: 1923,
      color: "from-green-500 to-green-700"
    },
    {
      title: "International Human Rights Law and Domestic Implementation: A Comparative Analysis",
      type: "Blog Series",
      journal: "Harvard Human Rights Journal Blog",
      date: "December 2023",
      excerpt: "A three-part series exploring how international human rights treaties are implemented in domestic legal systems, comparing approaches across different jurisdictions.",
      tags: ["Human Rights", "International Law", "Comparative Law", "Treaty Implementation"],
      status: "Published",
      readTime: "8 min read",
      views: 3156,
      color: "from-purple-500 to-purple-700"
    },
    {
      title: "Climate Change Litigation: The Role of Constitutional Rights in Environmental Protection",
      type: "Case Comment",
      journal: "Environmental Law Review",
      date: "November 2023",
      excerpt: "Analysis of recent climate change litigation trends and the emerging role of constitutional rights in environmental protection cases, with focus on intergenerational equity.",
      tags: ["Environmental Law", "Climate Change", "Constitutional Rights", "Litigation"],
      status: "Published",
      readTime: "10 min read",
      views: 1467,
      color: "from-emerald-500 to-emerald-700"
    },
    {
      title: "Artificial Intelligence and Legal Decision-Making: Algorithmic Bias in the Justice System",
      type: "Research Paper",
      journal: "Stanford Technology Law Review",
      date: "February 2024",
      excerpt: "Examining the implications of AI implementation in legal decision-making processes, addressing concerns about algorithmic bias and proposing frameworks for ethical AI use in the justice system.",
      tags: ["Technology Law", "Artificial Intelligence", "Algorithmic Bias", "Justice System"],
      status: "Under Review",
      readTime: "14 min read",
      views: 892,
      color: "from-orange-500 to-orange-700"
    },
    {
      title: "Corporate Social Responsibility and Legal Accountability: Modern Frameworks",
      type: "Law Review Note",
      journal: "Business Law Review",
      date: "April 2024",
      excerpt: "Exploring the intersection of corporate social responsibility and legal accountability, analyzing current frameworks and proposing enhanced mechanisms for corporate governance.",
      tags: ["Corporate Law", "Social Responsibility", "Governance", "Accountability"],
      status: "Forthcoming",
      readTime: "11 min read",
      views: 0,
      color: "from-indigo-500 to-indigo-700"
    }
  ];

  const getStatusBadge = (status: string) => {
    const statusConfig = {
      'Published': { color: 'bg-green-100 text-green-800 border-green-200', icon: '✓' },
      'Under Review': { color: 'bg-yellow-100 text-yellow-800 border-yellow-200', icon: '⏳' },
      'Forthcoming': { color: 'bg-blue-100 text-blue-800 border-blue-200', icon: '📅' }
    };
    
    const config = statusConfig[status as keyof typeof statusConfig] || statusConfig['Published'];
    
    return (
      <Badge className={`${config.color} border font-medium`}>
        {config.icon} {status}
      </Badge>
    );
  };

  return (
    <section id="publications" className="py-20 bg-gray-50 dark:bg-gray-800 transition-all duration-500">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-legal-navy dark:text-white mb-4 animate-fade-in">
            Publications & Writings
          </h2>
          <div className="w-24 h-1 bg-legal-gold mx-auto animate-scale-up"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 mt-6 max-w-3xl mx-auto animate-fade-in">
            Academic publications, research papers, and thought leadership pieces on contemporary legal issues and constitutional law.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {publications.map((pub, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-scale-up relative overflow-hidden bg-white dark:bg-gray-700"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${pub.color} opacity-5 group-hover:opacity-10 transition-opacity duration-500`}></div>
              
              <CardHeader className="relative">
                <div className="flex items-start justify-between mb-4">
                  <BookOpen className="w-6 h-6 text-legal-gold group-hover:scale-110 transition-transform duration-300" />
                  {getStatusBadge(pub.status)}
                </div>
                
                <CardTitle className="text-xl font-bold text-legal-navy dark:text-white mb-3 group-hover:text-legal-gold transition-colors duration-300 leading-tight">
                  {pub.title}
                </CardTitle>
                
                <div className="space-y-2">
                  <div className="flex items-center text-legal-gold font-semibold">
                    <BookOpen className="w-4 h-4 mr-2" />
                    {pub.journal}
                  </div>
                  <div className="flex items-center justify-between text-gray-600 dark:text-gray-300 text-sm">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      {pub.date}
                    </div>
                    <Badge variant="outline" className="text-xs border-legal-gold text-legal-gold">
                      {pub.type}
                    </Badge>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="relative">
                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                  {pub.excerpt}
                </p>

                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {pub.tags.map((tag, tagIndex) => (
                      <Badge 
                        key={tagIndex} 
                        variant="secondary" 
                        className="text-xs bg-legal-gold/10 text-legal-gold border-legal-gold/20"
                      >
                        <Tag className="w-3 h-3 mr-1" />
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-4">
                  <span>{pub.readTime}</span>
                  {pub.status === 'Published' && (
                    <div className="flex items-center">
                      <Eye className="w-4 h-4 mr-1" />
                      {pub.views.toLocaleString()} views
                    </div>
                  )}
                </div>

                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full border-legal-gold text-legal-gold hover:bg-legal-gold hover:text-white transition-all duration-300 group-hover:shadow-lg"
                  disabled={pub.status !== 'Published'}
                >
                  {pub.status === 'Published' ? (
                    <>
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Read Full Article
                    </>
                  ) : (
                    <>
                      <Calendar className="w-4 h-4 mr-2" />
                      {pub.status}
                    </>
                  )}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Publication Statistics */}
        <div className="text-center">
          <Card className="bg-gradient-to-r from-legal-gold/5 to-legal-burgundy/5 border-legal-gold/20 animate-fade-in">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-legal-navy dark:text-white mb-6">
                Publication Impact
              </h3>
              
              <div className="grid md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-legal-gold mb-2">6</div>
                  <div className="text-gray-600 dark:text-gray-300">Published Articles</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-legal-gold mb-2">10,285</div>
                  <div className="text-gray-600 dark:text-gray-300">Total Views</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-legal-gold mb-2">45</div>
                  <div className="text-gray-600 dark:text-gray-300">Citations</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-legal-gold mb-2">3</div>
                  <div className="text-gray-600 dark:text-gray-300">Awards Received</div>
                </div>
              </div>
              
              <div className="mt-8">
                <Button 
                  size="lg" 
                  className="bg-legal-gold hover:bg-legal-gold/80 text-legal-navy font-semibold px-8 py-3 rounded-full transform hover:scale-105 transition-all duration-300"
                >
                  <BookOpen className="w-5 h-5 mr-2" />
                  View All Publications
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PublicationsSection;
