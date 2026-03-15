import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ChevronDown } from 'lucide-react';
import { ParticleBackground } from '../ParticleBackground';

export const Hero = () => {
  const [text, setText] = useState('');
  const fullText = 'Full Stack MERN Developer';
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      if (index <= fullText.length) {
        setText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100);

    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);

    return () => {
      clearInterval(typingInterval);
      clearInterval(cursorInterval);
    };
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const socialLinks = [
    { icon: Github, href: 'https://github.com', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:dev@example.com', label: 'Email' },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 via-blue-50 to-cyan-50 dark:from-gray-900 dark:via-blue-950 dark:to-cyan-950"
    >
      <ParticleBackground />

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="text-cyan-500 font-semibold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Hello, I'm
            </motion.div>

            <motion.h1
              className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Alex Johnson
            </motion.h1>

            <div className="text-2xl md:text-3xl font-semibold text-gray-700 dark:text-gray-300 mb-6 h-12">
              <span>{text}</span>
              {showCursor && <span className="animate-pulse">|</span>}
            </div>

            <motion.p
              className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              Building scalable and creative full stack applications with modern
              technologies. Passionate about crafting beautiful user experiences
              and robust backend systems.
            </motion.p>

            <motion.div
              className="flex gap-4 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              <motion.button
                onClick={() => scrollToSection('#projects')}
                className="px-8 py-3 bg-gradient-to-r from-cyan-400 to-blue-500 text-white rounded-full font-semibold shadow-lg cursor-hover"
                whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(34, 211, 238, 0.4)' }}
                whileTap={{ scale: 0.95 }}
              >
                View Projects
              </motion.button>
              <motion.button
                onClick={() => scrollToSection('#contact')}
                className="px-8 py-3 border-2 border-cyan-400 text-cyan-400 rounded-full font-semibold cursor-hover"
                whileHover={{ scale: 1.05, backgroundColor: 'rgba(34, 211, 238, 0.1)' }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Me
              </motion.button>
            </motion.div>

            <motion.div
              className="flex gap-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-cyan-400 hover:text-white transition-colors cursor-hover"
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.div
              className="relative w-full max-w-md mx-auto"
              animate={{
                y: [0, -20, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full blur-3xl opacity-30 animate-pulse" />
              <div className="relative w-80 h-80 mx-auto bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 rounded-full p-2">
                <div className="w-full h-full bg-gray-900 rounded-full flex items-center justify-center text-white text-6xl font-bold">
                  AJ
                </div>
              </div>
            </motion.div>

            <div className="absolute top-10 -right-10 w-24 h-24 bg-cyan-400 rounded-lg opacity-20 animate-pulse" />
            <div className="absolute bottom-10 -left-10 w-32 h-32 bg-blue-500 rounded-lg opacity-20 animate-pulse" style={{ animationDelay: '1s' }} />
          </motion.div>
        </div>
      </div>

      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer cursor-hover"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        onClick={() => scrollToSection('#about')}
      >
        <ChevronDown size={40} className="text-cyan-400" />
      </motion.div>
    </section>
  );
};
