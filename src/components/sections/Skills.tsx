import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Server, Database, Wrench } from 'lucide-react';

export const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skillCategories = [
    {
      title: 'Frontend',
      icon: Code,
      color: 'from-cyan-400 to-blue-500',
      skills: ['React', 'HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'Tailwind CSS'],
    },
    {
      title: 'Backend',
      icon: Server,
      color: 'from-blue-500 to-purple-500',
      skills: ['Node.js', 'Express.js', 'REST APIs', 'GraphQL', 'JWT Auth'],
    },
    {
      title: 'Database',
      icon: Database,
      color: 'from-purple-500 to-pink-500',
      skills: ['MongoDB', 'Mongoose', 'PostgreSQL', 'Redis', 'Supabase'],
    },
    {
      title: 'Tools & Others',
      icon: Wrench,
      color: 'from-pink-500 to-red-500',
      skills: ['Git', 'VS Code', 'Postman', 'Docker', 'AWS', 'Vercel'],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section
      id="skills"
      className="py-20 bg-gray-50 dark:bg-gray-800 relative overflow-hidden"
      ref={ref}
    >
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-cyan-400 rounded-full filter blur-3xl opacity-10" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl opacity-10" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-4" />
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            My technical toolkit for building modern web applications
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {skillCategories.map((category) => (
            <motion.div
              key={category.title}
              className="group"
              variants={itemVariants}
              whileHover={{ y: -10 }}
            >
              <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 h-full border-2 border-transparent hover:border-cyan-400/50 cursor-hover">
                <motion.div
                  className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <category.icon className="text-white" size={32} />
                </motion.div>

                <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">
                  {category.title}
                </h3>

                <div className="space-y-3">
                  {category.skills.map((skill, index) => (
                    <motion.div
                      key={skill}
                      className="flex items-center gap-3"
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.3 + index * 0.1 }}
                    >
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${category.color}`} />
                      <span className="text-gray-600 dark:text-gray-300">
                        {skill}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="inline-block bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-xl">
            <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">
              Always Learning
            </h3>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl">
              The tech world never stops evolving, and neither do I. Currently
              exploring Next.js, Three.js, and advanced animation techniques.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
