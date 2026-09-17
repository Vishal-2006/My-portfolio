import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Github, Linkedin, X, MessageSquare, Copy, Check, Sparkles, Clock, ArrowUpRight } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';

const ContactSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('vishalrbxb10@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({
          access_key: '1c8b0d75-1d8a-4edd-85f0-e0a65e4a8f4f',
          name: formData.name,
          email: formData.email,
          subject: formData.subject || 'Portfolio Inquiry',
          message: formData.message,
          from_name: 'Vishal Portfolio Contact',
          to_email: 'vishalrbxb10@gmail.com'
        })
      });

      const data = await response.json();

      if (data.success) {
        setIsSubmitting(false);
        setIsSubmitted(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setIsSubmitted(false), 6000);
      } else {
        throw new Error(data.message || 'Submission failed');
      }
    } catch (err) {
      console.error('Submission error:', err);
      setError('Failed to send message. Please send an email directly to vishalrbxb10@gmail.com');
      setIsSubmitting(false);
    }
  };

  const contactCards = [
    {
      icon: Mail,
      title: 'Email Address',
      value: 'vishalrbxb10@gmail.com',
      action: handleCopyEmail,
      actionLabel: copiedEmail ? 'Copied to clipboard!' : 'Click to copy',
      actionIcon: copiedEmail ? Check : Copy
    },
    {
      icon: Phone,
      title: 'Phone / WhatsApp',
      value: '+91 8148913024',
      link: 'tel:+918148913024'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Rajapalayam / Nagercoil, Tamil Nadu, India',
      subtext: 'Available for Remote Worldwide & Relocation'
    }
  ];

  return (
    <section id="contact" ref={sectionRef} className="py-20 md:py-28 px-4 sm:px-6 relative z-10">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-3"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-indigo-500/20 bg-indigo-500/5 text-xs font-semibold text-indigo-300">
            <Sparkles className="w-3.5 h-3.5" />
            LET'S COLLABORATE
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            Have an AI, Blockchain, or Full-Stack Project?
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Whether you need machine learning pipelines, smart contract development, or a scalable Next.js/React web application, let's connect.
          </p>
        </motion.div>

        {/* Split Contact Grid (Mobbin / Dribbble Style) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Info & Socials (5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-5 space-y-5"
          >
            {/* Status Card */}
            <div className="glass-card rounded-3xl p-6 border border-emerald-500/20 bg-emerald-500/[0.03]">
              <div className="flex items-center gap-3">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500" />
                </span>
                <div>
                  <h3 className="text-sm font-bold text-white">Fast Response Guaranteed</h3>
                  <p className="text-xs text-slate-400 flex items-center gap-1.5 mt-0.5">
                    <Clock className="w-3.5 h-3.5 text-cyan-400" /> Typically replies within 24 hours
                  </p>
                </div>
              </div>
            </div>

            {/* Direct Contact Cards */}
            {contactCards.map((card, idx) => {
              const Icon = card.icon;
              const ActionIcon = card.actionIcon;
              return (
                <div
                  key={card.title}
                  onClick={card.action}
                  className={`glass-card rounded-3xl p-6 transition-all ${
                    card.action ? 'cursor-pointer hover:border-cyan-400/50 group' : ''
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3.5">
                      <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 shrink-0">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-xs text-slate-400 font-medium">{card.title}</div>
                        {card.link ? (
                          <a href={card.link} className="text-sm font-semibold text-white hover:text-cyan-400 transition-colors">
                            {card.value}
                          </a>
                        ) : (
                          <div className="text-sm font-semibold text-white group-hover:text-cyan-300 transition-colors">
                            {card.value}
                          </div>
                        )}
                        {card.subtext && (
                          <div className="text-[11px] text-slate-400 mt-0.5">{card.subtext}</div>
                        )}
                      </div>
                    </div>

                    {ActionIcon && (
                      <span className="p-2 rounded-lg bg-white/5 text-slate-400 group-hover:text-cyan-400 group-hover:bg-cyan-500/10 transition-all">
                        <ActionIcon className="w-4 h-4" />
                      </span>
                    )}
                  </div>
                  {card.actionLabel && (
                    <div className="text-[11px] text-cyan-400 font-medium mt-2 text-right">
                      {card.actionLabel}
                    </div>
                  )}
                </div>
              );
            })}

            {/* Social Channels */}
            <div className="glass-card rounded-3xl p-6">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-4">
                Connect on Social Networks
              </h3>
              <div className="grid grid-cols-2 gap-3">
                <a
                  href="https://github.com/vishal-2006"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 p-3 rounded-2xl border border-white/5 bg-white/[0.02] text-xs font-medium text-slate-300 hover:text-cyan-400 hover:border-cyan-400/30 hover:bg-cyan-500/10 transition-all"
                >
                  <Github className="w-4 h-4 text-cyan-400" />
                  <span>GitHub</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/vishal-r-b-52352b289/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 p-3 rounded-2xl border border-white/5 bg-white/[0.02] text-xs font-medium text-slate-300 hover:text-cyan-400 hover:border-cyan-400/30 hover:bg-cyan-500/10 transition-all"
                >
                  <Linkedin className="w-4 h-4 text-cyan-400" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href="https://x.com/Vishal_17890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 p-3 rounded-2xl border border-white/5 bg-white/[0.02] text-xs font-medium text-slate-300 hover:text-cyan-400 hover:border-cyan-400/30 hover:bg-cyan-500/10 transition-all"
                >
                  <X className="w-4 h-4 text-cyan-400" />
                  <span>Twitter / X</span>
                </a>
                <a
                  href="https://discord.com/channels/@vishal45854"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 p-3 rounded-2xl border border-white/5 bg-white/[0.02] text-xs font-medium text-slate-300 hover:text-cyan-400 hover:border-cyan-400/30 hover:bg-cyan-500/10 transition-all"
                >
                  <MessageSquare className="w-4 h-4 text-indigo-400" />
                  <span>Discord</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Web3Forms Contact Form (7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-7 glass-card rounded-3xl p-8 sm:p-10 border border-white/10"
          >
            <h3 className="text-xl font-bold text-white mb-2">Send a Direct Message</h3>
            <p className="text-xs text-slate-400 mb-6">
              Fill in your project specifications or question below. I will respond to your email.
            </p>

            {isSubmitted && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="mb-6 p-4 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-xs font-medium flex items-center gap-2.5"
              >
                <Check className="w-4 h-4 shrink-0" />
                Thank you! Your message has been sent successfully. I will get back to you shortly.
              </motion.div>
            )}

            {error && (
              <div className="mb-6 p-4 rounded-2xl bg-rose-500/15 border border-rose-500/30 text-rose-300 text-xs font-medium">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-300">Your Name *</label>
                  <Input
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    placeholder="e.g. Satoshi Nakamoto"
                    className="rounded-xl border-white/10 bg-white/[0.03] text-white placeholder:text-slate-500 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all text-xs py-2.5"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-300">Email Address *</label>
                  <Input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="name@company.com"
                    className="rounded-xl border-white/10 bg-white/[0.03] text-white placeholder:text-slate-500 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all text-xs py-2.5"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-300">Subject / Project Scope</label>
                <Input
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="e.g. AI Model Pipeline, Smart Contract Audit, Next.js Full-Stack App..."
                  className="rounded-xl border-white/10 bg-white/[0.03] text-white placeholder:text-slate-500 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all text-xs py-2.5"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-300">Project Details / Message *</label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  placeholder="Describe your requirements, timeline, or inquiries..."
                  className="rounded-xl border-white/10 bg-white/[0.03] text-white placeholder:text-slate-500 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all text-xs"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full rounded-2xl py-3.5 text-xs font-bold bg-gradient-to-r from-cyan-400 to-sky-500 text-black hover:from-cyan-300 hover:to-sky-400 shadow-lg shadow-cyan-500/25 border-0 hover:scale-[1.01] active:scale-[0.99] transition-all disabled:opacity-50"
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <span className="w-3.5 h-3.5 border-2 border-black border-t-transparent rounded-full animate-spin" />
                    Sending Message...
                  </span>
                ) : (
                  <span className="flex items-center justify-center gap-2">
                    Send Message
                    <Send className="w-3.5 h-3.5" />
                  </span>
                )}
              </Button>
            </form>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default ContactSection;
