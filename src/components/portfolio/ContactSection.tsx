
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, Calendar, Send, CheckCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { toast } from '@/hooks/use-toast';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      value: "alexandra.mitchell@email.com",
      description: "Send me an email anytime",
      color: "from-blue-500 to-blue-700"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      value: "+1 (555) 123-4567",
      description: "Available Mon-Fri, 9AM-6PM EST",
      color: "from-green-500 to-green-700"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Location",
      value: "Cambridge, MA",
      description: "Harvard Law School",
      color: "from-purple-500 to-purple-700"
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: "Availability",
      value: "Open to Opportunities",
      description: "Graduating May 2025",
      color: "from-orange-500 to-orange-700"
    }
  ];

  const socialLinks = [
    {
      icon: <Linkedin className="w-6 h-6" />,
      name: "LinkedIn",
      url: "#",
      username: "@alexandramitchell",
      color: "hover:text-blue-600"
    },
    {
      icon: <Github className="w-6 h-6" />,
      name: "GitHub",
      url: "#",
      username: "@alex-mitchell-law",
      color: "hover:text-gray-800"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      name: "Email",
      url: "mailto:alexandra.mitchell@email.com",
      username: "alexandra.mitchell@email.com",
      color: "hover:text-red-600"
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSubmitted(true);
    
    toast({
      title: "Message Sent Successfully!",
      description: "Thank you for reaching out. I'll get back to you within 24 hours.",
    });

    // Reset form after successful submission
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitted(false);
    }, 3000);
  };

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800 transition-all duration-500">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-legal-navy dark:text-white mb-4 animate-fade-in">
            Let's Connect
          </h2>
          <div className="w-24 h-1 bg-legal-gold mx-auto animate-scale-up"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 mt-6 max-w-3xl mx-auto animate-fade-in">
            I'm always interested in discussing legal opportunities, collaborations, or simply connecting with fellow legal professionals.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            <div className="animate-slide-in-left">
              <h3 className="text-2xl font-bold text-legal-navy dark:text-white mb-6">
                Get In Touch
              </h3>
              
              {contactInfo.map((info, index) => (
                <Card 
                  key={index} 
                  className="mb-4 group hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border-l-4 border-legal-gold"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-4">
                      <div className={`p-3 rounded-full bg-gradient-to-br ${info.color} text-white group-hover:scale-110 transition-transform duration-300`}>
                        {info.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-legal-navy dark:text-white">
                          {info.title}
                        </h4>
                        <p className="text-legal-gold font-medium">
                          {info.value}
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          {info.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Social Links */}
            <div className="animate-slide-in-left">
              <h4 className="text-lg font-semibold text-legal-navy dark:text-white mb-4">
                Connect on Social Media
              </h4>
              <div className="space-y-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    className={`flex items-center space-x-3 p-3 rounded-lg bg-white dark:bg-gray-700 hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 group ${social.color}`}
                  >
                    <div className="text-legal-gold group-hover:scale-110 transition-transform duration-300">
                      {social.icon}
                    </div>
                    <div>
                      <div className="font-medium text-legal-navy dark:text-white">
                        {social.name}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-300">
                        {social.username}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="animate-slide-in-right bg-white dark:bg-gray-700 shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-legal-navy dark:text-white">
                  Send Me a Message
                </CardTitle>
                <p className="text-gray-600 dark:text-gray-300">
                  I'll respond within 24 hours during business days.
                </p>
              </CardHeader>
              
              <CardContent>
                {isSubmitted ? (
                  <div className="text-center py-12 animate-scale-up">
                    <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-green-600 mb-2">Message Sent!</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Thank you for reaching out. I'll get back to you soon.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-legal-navy dark:text-white font-medium">
                          Full Name *
                        </Label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          placeholder="Your full name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="border-gray-300 dark:border-gray-600 focus:border-legal-gold focus:ring-legal-gold"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-legal-navy dark:text-white font-medium">
                          Email Address *
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="your.email@example.com"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="border-gray-300 dark:border-gray-600 focus:border-legal-gold focus:ring-legal-gold"
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="subject" className="text-legal-navy dark:text-white font-medium">
                        Subject *
                      </Label>
                      <Input
                        id="subject"
                        name="subject"
                        type="text"
                        placeholder="What would you like to discuss?"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        className="border-gray-300 dark:border-gray-600 focus:border-legal-gold focus:ring-legal-gold"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-legal-navy dark:text-white font-medium">
                        Message *
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Tell me about your legal needs, project ideas, or how we might collaborate..."
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={6}
                        className="border-gray-300 dark:border-gray-600 focus:border-legal-gold focus:ring-legal-gold resize-none"
                      />
                    </div>
                    
                    <Button
                      type="submit"
                      disabled={isSubmitting || !formData.name || !formData.email || !formData.subject || !formData.message}
                      className="w-full bg-legal-gold hover:bg-legal-gold/80 text-legal-navy font-semibold py-3 text-lg rounded-lg transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                    >
                      {isSubmitting ? (
                        <div className="flex items-center justify-center space-x-2">
                          <div className="w-5 h-5 border-2 border-legal-navy border-t-transparent rounded-full animate-spin"></div>
                          <span>Sending Message...</span>
                        </div>
                      ) : (
                        <div className="flex items-center justify-center space-x-2">
                          <Send className="w-5 h-5" />
                          <span>Send Message</span>
                        </div>
                      )}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <Card className="bg-gradient-to-r from-legal-gold/5 to-legal-burgundy/5 border-legal-gold/20 animate-fade-in">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-legal-navy dark:text-white mb-4">
                Ready to Work Together?
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
                Whether you're looking for a dedicated law student for an internship, seeking collaboration on research, 
                or need assistance with legal projects, I'm here to help.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="bg-legal-gold hover:bg-legal-gold/80 text-legal-navy font-semibold px-8 py-3 rounded-full transform hover:scale-105 transition-all duration-300"
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  Schedule a Meeting
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-2 border-legal-gold text-legal-gold hover:bg-legal-gold hover:text-legal-navy font-semibold px-8 py-3 rounded-full transform hover:scale-105 transition-all duration-300"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Send Quick Email
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
