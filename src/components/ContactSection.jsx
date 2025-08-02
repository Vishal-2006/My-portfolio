import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, MessageSquare, Calendar, CheckCircle } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';

const ContactSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const sectionRef = useRef(null);

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

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
    
    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'vishalrbxb10@gmail.com',
      link: 'mailto:vishalrbxb10@gmail.com',
      description: 'Best for project inquiries'
    },
    {
      icon: Phone,
      title: 'Phone',
      link: 'tel:+91 8148913024',
      description: 'Available 9 AM - 6 PM PST'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Nagercoil, Tamil Nadu, India',
      description: 'Open to remote work worldwide'
    },
    
  ];

  const socialLinks = [
    {
      icon: Github,
      name: 'GitHub',
      url: 'https://github.com/Vishal-2006',
      color: 'hover:text-gray-400'
    },
    {
      icon: Linkedin,
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/vishal-r-b-52352b289/',
      color: 'hover:text-blue-400'
    },
    {
      icon: Twitter,
      name: 'Twitter',
      url: 'https://x.com/Vishal_17890',
      color: 'hover:text-blue-400'
    },
    {
      icon: MessageSquare,
      name: 'Discord',
      url: 'https://discord.com/channels/@vishal45854',
      color: 'hover:text-purple-400'
    }
  ];

  return (
    <section id="contact" ref={sectionRef} className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-glow">
            Let's Build Together
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to transform your ideas into revolutionary blockchain solutions? Let's start the conversation.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.3 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-3xl font-semibold mb-6 text-primary">
                Get In Touch
              </h3>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Whether you're looking to build a DeFi protocol, launch an NFT marketplace, 
                or integrate AI into your blockchain project, I'm here to help bring your vision to life.
              </p>
            </div>

            {/* Contact Methods */}
            <div className="grid sm:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.5 + index * 0.1 }}
                >
                  <Card className="card-hover bg-card/80 border-[#333344]/50 h-full">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="p-3 rounded-full bg-primary/10 border border-primary/30">
                          <info.icon className="h-6 w-6 text-primary" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-foreground mb-1">
                            {info.title}
                          </h4>
                          {info.link ? (
                            <a
                              href={info.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-primary hover:text-primary/80 transition-colors"
                            >
                              {info.value}
                            </a>
                          ) : (
                            <div className="text-foreground">{info.value}</div>
                          )}
                          <p className="text-sm text-muted-foreground mt-1">
                            {info.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              <h4 className="text-xl font-semibold mb-4 text-foreground">
                Connect With Me
              </h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 rounded-full border border-primary/30 hover:border-primary hover:bg-primary/10 transition-all duration-300 hover:scale-110 ${social.color}`}
                    title={social.name}
                  >
                    <social.icon className="h-6 w-6" />
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <Card className="bg-card/80 border-[#333344]/50">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-6 text-primary">
                  Send Me a Message
                </h3>
                
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-8"
                  >
                    <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                    <h4 className="text-xl font-semibold text-foreground mb-2">
                      Message Sent Successfully!
                    </h4>
                    <p className="text-muted-foreground">
                      Thank you for reaching out. I'll get back to you within 24 hours.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                          Name *
                        </label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          className="bg-background/50 border-[#333344] focus:border-primary"
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                          Email *
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          className="bg-background/50 border-[#333344] focus:border-primary"
                          placeholder="your.email@example.com"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                        Subject *
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        type="text"
                        required
                        value={formData.subject}
                        onChange={handleInputChange}
                        className="bg-background/50 border-[#333344] focus:border-primary"
                        placeholder="Project inquiry, consultation, etc."
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                        Message *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        rows={6}
                        value={formData.message}
                        onChange={handleInputChange}
                        className="bg-background/50 border-[#333344] focus:border-primary resize-none"
                        placeholder="Tell me about your project, timeline, budget, and any specific requirements..."
                      />
                    </div>
                    
                    <Button
                      type="submit"
                      size="lg"
                      disabled={isSubmitting}
                      className="w-full glow-effect"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2" />
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send className="ml-2 h-5 w-5" />
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 1.2 }}
          className="text-center mt-20 pt-8 border-t border-[#333344]/50"
        >
          <p className="text-muted-foreground">
            By Vishal R B 
            
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;

