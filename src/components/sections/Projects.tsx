import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github, X } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  description: string;
  detailedDescription: string;
  techStack: string[];
  image: string;
  liveDemo?: string;
  github?: string;
  category: string;
}

export const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: '1',
      title: 'E-Commerce Platform',
      description: 'Full-featured online shopping platform with cart and payment integration',
      detailedDescription: 'A comprehensive e-commerce solution built with the MERN stack. Features include user authentication, product catalog, shopping cart, order management, and Stripe payment integration. Implemented advanced search and filtering capabilities with real-time inventory updates.',
      techStack: ['React', 'Node.js', 'MongoDB', 'Express', 'Stripe', 'Redux'],
      image: 'https://images.pexels.com/photos/34577/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=800',
      liveDemo: 'https://example.com',
      github: 'https://github.com',
      category: 'fullstack',
    },
    {
      id: '2',
      title: 'Social Media Dashboard',
      description: 'Analytics dashboard for social media metrics and engagement',
      detailedDescription: 'A modern analytics dashboard that aggregates data from multiple social media platforms. Built with React and D3.js for interactive data visualization. Backend powered by Node.js with scheduled jobs for real-time data updates.',
      techStack: ['React', 'D3.js', 'Node.js', 'MongoDB', 'Chart.js'],
      image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800',
      liveDemo: 'https://example.com',
      github: 'https://github.com',
      category: 'fullstack',
    },
    {
      id: '3',
      title: 'Task Management App',
      description: 'Collaborative task and project management platform',
      detailedDescription: 'A Trello-inspired task management application with drag-and-drop functionality, real-time collaboration using Socket.io, team management, and deadline tracking. Features include file attachments, comments, and activity logs.',
      techStack: ['React', 'Socket.io', 'Node.js', 'MongoDB', 'Redux'],
      image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800',
      liveDemo: 'https://example.com',
      github: 'https://github.com',
      category: 'fullstack',
    },
    {
      id: '4',
      title: 'Weather Forecast App',
      description: 'Beautiful weather app with location-based forecasts',
      detailedDescription: 'A sleek weather application that provides accurate forecasts using multiple weather APIs. Features include current conditions, hourly and weekly forecasts, weather maps, and severe weather alerts. Optimized for mobile with PWA capabilities.',
      techStack: ['React', 'Weather API', 'Geolocation', 'Tailwind CSS'],
      image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800',
      liveDemo: 'https://example.com',
      github: 'https://github.com',
      category: 'frontend',
    },
    {
      id: '5',
      title: 'Blog Platform',
      description: 'Modern blogging platform with rich text editor',
      detailedDescription: 'A full-featured blogging platform with a rich text editor, markdown support, image uploads, comments, and social sharing. Includes SEO optimization, tag-based categorization, and user profiles. Built with SSR for optimal performance.',
      techStack: ['React', 'Node.js', 'MongoDB', 'Express', 'Quill.js'],
      image: 'https://images.pexels.com/photos/261662/pexels-photo-261662.jpeg?auto=compress&cs=tinysrgb&w=800',
      liveDemo: 'https://example.com',
      github: 'https://github.com',
      category: 'fullstack',
    },
    {
      id: '6',
      title: 'Fitness Tracker',
      description: 'Track workouts, nutrition, and fitness goals',
      detailedDescription: 'A comprehensive fitness tracking application that helps users monitor their workouts, nutrition, and progress towards fitness goals. Features workout plans, calorie tracking, progress charts, and social features to connect with other fitness enthusiasts.',
      techStack: ['React', 'Node.js', 'MongoDB', 'Chart.js', 'Express'],
      image: 'https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=800',
      liveDemo: 'https://example.com',
      github: 'https://github.com',
      category: 'fullstack',
    },
  ];

  return (
    <section
      id="projects"
      className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden"
      ref={ref}
    >
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-400 rounded-full filter blur-3xl opacity-10 animate-pulse" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl opacity-10 animate-pulse" style={{ animationDelay: '1s' }} />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-4" />
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A showcase of my recent work and passion projects
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="group cursor-pointer cursor-hover"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              onClick={() => setSelectedProject(project)}
            >
              <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 h-full border-2 border-transparent group-hover:border-cyan-400/50">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                    <span className="text-white font-semibold">View Details</span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.techStack.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-cyan-400/10 text-cyan-400 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 3 && (
                      <span className="px-3 py-1 bg-cyan-400/10 text-cyan-400 rounded-full text-sm">
                        +{project.techStack.length - 3}
                      </span>
                    )}
                  </div>

                  <div className="flex gap-4">
                    {project.liveDemo && (
                      <a
                        href={project.liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors"
                      >
                        <ExternalLink size={16} />
                        <span>Demo</span>
                      </a>
                    )}
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors"
                      >
                        <Github size={16} />
                        <span>Code</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="bg-white dark:bg-gray-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              initial={{ scale: 0.9, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 50 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative h-64 md:h-96">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 w-10 h-10 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors cursor-hover"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="p-8">
                <h3 className="text-3xl font-bold mb-4 text-gray-800 dark:text-white">
                  {selectedProject.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  {selectedProject.detailedDescription}
                </p>

                <div className="mb-6">
                  <h4 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-4 py-2 bg-gradient-to-r from-cyan-400 to-blue-500 text-white rounded-full text-sm font-semibold"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4">
                  {selectedProject.liveDemo && (
                    <a
                      href={selectedProject.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-400 to-blue-500 text-white rounded-full font-semibold hover:shadow-lg transition-shadow cursor-hover"
                    >
                      <ExternalLink size={20} />
                      <span>View Live Demo</span>
                    </a>
                  )}
                  {selectedProject.github && (
                    <a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-6 py-3 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-full font-semibold hover:border-gray-400 dark:hover:border-gray-500 transition-colors cursor-hover"
                    >
                      <Github size={20} />
                      <span>View Source</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
