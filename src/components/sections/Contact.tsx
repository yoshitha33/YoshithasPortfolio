import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
import { supabase, ContactMessage } from '../../lib/supabase';

export const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const contactMessage: ContactMessage = {
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
      };

      const { error: supabaseError } = await supabase
        .from('contact_messages')
        .insert([contactMessage]);

      if (supabaseError) {
        throw supabaseError;
      }

      const apiUrl = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/send-contact-email`;
      const emailResponse = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
        },
        body: JSON.stringify(formData),
      });

      if (!emailResponse.ok) {
        console.error('Email send failed, but message was saved');
      }

      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });

      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    } catch (err) {
      setError('Failed to send message. Please try again.');
      console.error('Error:', err);
    } finally {
      setLoading(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      content: 'alex@example.com',
      link: 'mailto:alex@example.com',
      color: 'from-cyan-400 to-blue-500',
    },
    {
      icon: Phone,
      title: 'Phone',
      content: '+1 (555) 123-4567',
      link: 'tel:+15551234567',
      color: 'from-blue-500 to-purple-500',
    },
    {
      icon: MapPin,
      title: 'Location',
      content: 'San Francisco, CA',
      link: '#',
      color: 'from-purple-500 to-pink-500',
    },
  ];

  return (
    <section
      id="contact"
      className="py-20 bg-gray-50 dark:bg-gray-800 relative overflow-hidden"
      ref={ref}
    >
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-cyan-400 rounded-full filter blur-3xl opacity-10" />
      <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl opacity-10" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-4" />
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Have a project in mind? Let's collaborate and create something amazing together.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {contactInfo.map((info, index) => (
            <motion.a
              key={index}
              href={info.link}
              className="group cursor-hover"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 h-full border-2 border-transparent group-hover:border-cyan-400/50">
                <motion.div
                  className={`w-16 h-16 bg-gradient-to-r ${info.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <info.icon className="text-white" size={32} />
                </motion.div>
                <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">
                  {info.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">{info.content}</p>
              </div>
            </motion.a>
          ))}
        </div>

        <motion.div
          className="max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="bg-white dark:bg-gray-900 p-8 md:p-12 rounded-2xl shadow-xl border-2 border-cyan-400/20">
            {submitted && (
              <motion.div
                className="mb-6 p-4 bg-green-50 dark:bg-green-900/30 border-2 border-green-400 rounded-lg flex items-center gap-3"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <CheckCircle className="text-green-500" size={24} />
                <p className="text-green-700 dark:text-green-300 font-semibold">
                  Message sent successfully! I'll get back to you soon.
                </p>
              </motion.div>
            )}

            {error && (
              <motion.div
                className="mb-6 p-4 bg-red-50 dark:bg-red-900/30 border-2 border-red-400 rounded-lg"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <p className="text-red-700 dark:text-red-300 font-semibold">{error}</p>
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <label className="block text-gray-700 dark:text-gray-300 font-semibold mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:border-cyan-400 transition-colors"
                    placeholder="John Doe"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <label className="block text-gray-700 dark:text-gray-300 font-semibold mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:border-cyan-400 transition-colors"
                    placeholder="john@example.com"
                  />
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <label className="block text-gray-700 dark:text-gray-300 font-semibold mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:border-cyan-400 transition-colors"
                  placeholder="Project Collaboration"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <label className="block text-gray-700 dark:text-gray-300 font-semibold mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:border-cyan-400 transition-colors resize-none"
                  placeholder="Tell me about your project..."
                />
              </motion.div>

              <motion.button
                type="submit"
                disabled={loading}
                className="w-full px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-white rounded-lg font-bold shadow-lg cursor-hover hover:shadow-xl transition-shadow disabled:opacity-50"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                {loading ? (
                  <span className="flex items-center justify-center gap-2">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Sending...
                  </span>
                ) : (
                  <span className="flex items-center justify-center gap-2">
                    <Send size={20} />
                    Send Message
                  </span>
                )}
              </motion.button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
