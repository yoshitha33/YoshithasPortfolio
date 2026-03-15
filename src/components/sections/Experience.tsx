import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, Briefcase, GraduationCap, Trophy } from 'lucide-react';

export const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const experiences = [
    {
      type: 'work',
      icon: Briefcase,
      title: 'Senior Full Stack Developer',
      organization: 'Tech Innovations Inc.',
      period: '2022 - Present',
      description: 'Leading development of enterprise-scale MERN applications, mentoring junior developers, and architecting scalable solutions.',
      color: 'from-cyan-400 to-blue-500',
    },
    {
      type: 'work',
      icon: Briefcase,
      title: 'Full Stack Developer',
      organization: 'Digital Solutions Ltd.',
      period: '2021 - 2022',
      description: 'Developed and maintained multiple client projects using MERN stack, implemented CI/CD pipelines, and improved application performance.',
      color: 'from-blue-500 to-purple-500',
    },
    {
      type: 'education',
      icon: GraduationCap,
      title: 'B.S. Computer Science',
      organization: 'State University',
      period: '2017 - 2021',
      description: 'Graduated with honors, specialized in web technologies and software engineering. Active member of coding club.',
      color: 'from-purple-500 to-pink-500',
    },
  ];

  const achievements = [
    {
      icon: Trophy,
      title: 'Hackathon Winner',
      description: 'First place in National Web Dev Hackathon 2023',
      color: 'from-yellow-400 to-orange-500',
    },
    {
      icon: Award,
      title: 'Open Source Contributor',
      description: 'Contributed to 15+ open source projects',
      color: 'from-green-400 to-teal-500',
    },
    {
      icon: Award,
      title: 'Speaker',
      description: 'Presented at 3 tech conferences on MERN stack',
      color: 'from-cyan-400 to-blue-500',
    },
    {
      icon: Trophy,
      title: 'Certifications',
      description: 'AWS Certified, MongoDB Professional',
      color: 'from-pink-400 to-red-500',
    },
  ];

  return (
    <section
      id="experience"
      className="py-20 bg-gray-50 dark:bg-gray-800 relative overflow-hidden"
      ref={ref}
    >
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-cyan-400 rounded-full filter blur-3xl opacity-10" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl opacity-10" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Experience & Achievements
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-4" />
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            My professional journey and notable accomplishments
          </p>
        </motion.div>

        <div className="mb-16">
          <motion.h3
            className="text-3xl font-bold mb-12 text-center text-gray-800 dark:text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Professional Experience
          </motion.h3>

          <div className="max-w-4xl mx-auto">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className="relative pl-8 pb-12 border-l-2 border-cyan-400 last:pb-0"
                initial={{ opacity: 0, x: -50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.2 }}
              >
                <div className="absolute left-0 top-0 transform -translate-x-1/2">
                  <motion.div
                    className={`w-12 h-12 bg-gradient-to-r ${exp.color} rounded-full flex items-center justify-center shadow-lg`}
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.3 }}
                  >
                    <exp.icon className="text-white" size={24} />
                  </motion.div>
                </div>

                <motion.div
                  className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg ml-4 cursor-hover group hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-cyan-400/50"
                  whileHover={{ x: 10 }}
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                    <h4 className="text-xl font-bold text-gray-800 dark:text-white">
                      {exp.title}
                    </h4>
                    <span className="text-cyan-400 font-semibold">{exp.period}</span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 font-medium mb-2">
                    {exp.organization}
                  </p>
                  <p className="text-gray-600 dark:text-gray-300">
                    {exp.description}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h3 className="text-3xl font-bold mb-12 text-center text-gray-800 dark:text-white">
            Achievements & Recognition
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-hover group border-2 border-transparent hover:border-cyan-400/50"
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <motion.div
                  className={`w-16 h-16 bg-gradient-to-r ${achievement.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <achievement.icon className="text-white" size={32} />
                </motion.div>
                <h4 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">
                  {achievement.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {achievement.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
