import React from 'react';
import SectionHeader from './SectionHeader';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';

const Contact = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState({ type: null, message: '' });

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: null, message: '' });

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_9qggvxp';
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_v45oqgl';
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'isxOJjAeQXReC-oCN';

    emailjs.sendForm(
      serviceId,
      templateId,
      form.current,
      publicKey
    )
      .then((result) => {
        setStatus({ type: 'success', message: 'Message sent successfully! Our team will get back to you shortly.' });
        form.current.reset();
      }, (error) => {
        console.error(error.text);
        setStatus({ type: 'error', message: 'Failed to send the message. Please ensure your EmailJS keys are configured in the .env file.' });
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <section id="contact" className="py-20 bg-white">
      {/* Pre-Contact Banner */}
      <div className="bg-gradient-to-r from-[var(--color-navy)] to-[var(--color-tech-blue)] py-16 mb-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-poppins font-bold text-white mb-6">
            Looking for Advanced Security or <br className="hidden md:block" /> Software Solutions?
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Let's build the right solution for your organization.
          </p>
          <a href="#contact-form" className="inline-flex items-center bg-[var(--color-orange)] hover:bg-[#d97000] text-white px-8 py-4 rounded-md font-medium text-lg transition-all shadow-[0_0_20px_rgba(247,127,0,0.4)]">
            Contact Our Team
          </a>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 lg:px-8" id="contact-form">
        <SectionHeader title="Get In Touch" subtitle="Contact Us" centered={true} />

        <div className="grid lg:grid-cols-2 gap-12 mt-12 bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">

          {/* Left: Contact Form */}
          <div className="p-8 md:p-12">
            <h3 className="text-2xl font-poppins font-bold text-[var(--color-navy)] mb-6">Send us a Message</h3>
            <form ref={form} onSubmit={sendEmail} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                  <input type="text" name="firstName" required className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[var(--color-tech-blue)] focus:border-transparent transition-all" placeholder="John" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                  <input type="text" name="lastName" required className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[var(--color-tech-blue)] focus:border-transparent transition-all" placeholder="Doe" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                <input type="email" name="email" required className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[var(--color-tech-blue)] focus:border-transparent transition-all" placeholder="john@example.com" />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                <input type="tel" name="phone" required className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[var(--color-tech-blue)] focus:border-transparent transition-all" placeholder="+91 XXXXX XXXXX" />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea rows="4" name="message" required className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[var(--color-tech-blue)] focus:border-transparent transition-all" placeholder="How can we help you?"></textarea>
              </div>

              <AnimatePresence>
                {status.message && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className={`p-4 rounded-lg text-sm font-medium ${status.type === 'success' ? 'bg-green-50 text-green-800 border border-green-200' : 'bg-red-50 text-red-800 border border-red-200'}`}
                  >
                    {status.message}
                  </motion.div>
                )}
              </AnimatePresence>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full bg-[var(--color-navy)] hover:bg-[var(--color-tech-blue)] text-white font-medium py-4 rounded-lg flex items-center justify-center transition-all ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
              >
                {isSubmitting ? (
                  <div className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </div>
                ) : (
                  <>
                    <Send size={18} className="mr-2" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Right: Company Info */}
          <div className="bg-[var(--color-light-gray)] p-8 md:p-12 border-l border-gray-200">
            <h3 className="text-2xl font-poppins font-bold text-[var(--color-navy)] mb-6">Contact Information</h3>

            <div className="space-y-8">
              <div className="flex items-start group border-b border-gray-200 pb-6">
                <div className="bg-white p-3 rounded-lg shadow-sm group-hover:bg-[var(--color-orange)] group-hover:text-white transition-colors mr-4 shrink-0 text-[var(--color-tech-blue)]">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-1">Office Location</h4>
                  <p className="text-gray-600">Centrally located office, Visakhapatnam, Andhra Pradesh, India</p>
                </div>
              </div>

              <div className="flex items-start group border-b border-gray-200 pb-6">
                <div className="bg-white p-3 rounded-lg shadow-sm group-hover:bg-[var(--color-orange)] group-hover:text-white transition-colors mr-4 shrink-0 text-[var(--color-tech-blue)]">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-1">Phone Number</h4>
                  <p className="text-gray-600">+91 99999 99999</p>
                  <p className="text-gray-600">+91 88888 88888</p>
                </div>
              </div>

              <div className="flex items-start group border-b border-gray-200 pb-6">
                <div className="bg-white p-3 rounded-lg shadow-sm group-hover:bg-[var(--color-orange)] group-hover:text-white transition-colors mr-4 shrink-0 text-[var(--color-tech-blue)]">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-1">Email Address</h4>
                  <p className="text-gray-600">contact@meghanatechnologies.com</p>
                </div>
              </div>

              <div className="flex items-start group">
                <div className="bg-white p-3 rounded-lg shadow-sm group-hover:bg-[var(--color-orange)] group-hover:text-white transition-colors mr-4 shrink-0 text-[var(--color-tech-blue)]">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-1">Support Availability</h4>
                  <p className="text-gray-600">24/7 Fully Active Customer Care Team</p>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="mt-8 h-48 bg-gray-200 rounded-lg overflow-hidden relative group">
              <img
                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2074&auto=format&fit=crop"
                alt="Map Location"
                className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
              />
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <MapPin size={32} className="text-[var(--color-orange)] drop-shadow-lg" />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
