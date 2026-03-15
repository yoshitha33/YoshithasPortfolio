import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { ThemeProvider } from './contexts/ThemeContext';
import { Header } from './components/Header';
import { CustomCursor } from './components/CustomCursor';
import { LoadingScreen } from './components/LoadingScreen';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Skills } from './components/sections/Skills';
import { Projects } from './components/sections/Projects';
import { Experience } from './components/sections/Experience';
import { Gallery } from './components/sections/Gallery';
import { Contact } from './components/sections/Contact';

function AppContent() {
  return (
    <div className="bg-white dark:bg-gray-900 transition-colors duration-300">
      <Header />
      <CustomCursor />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Gallery />
      <Contact />
      <footer className="py-8 bg-gray-900 text-gray-300 text-center">
        <p>© 2024 Alex Johnson. All rights reserved. Built with React & Tailwind CSS.</p>
      </footer>
    </div>
  );
}

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <ThemeProvider>
      <AnimatePresence mode="wait">
        {isLoading ? (
          <LoadingScreen key="loading" />
        ) : (
          <AppContent key="content" />
        )}
      </AnimatePresence>
    </ThemeProvider>
  );
}

export default App;
