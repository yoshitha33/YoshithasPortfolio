import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Database, Server, Lightbulb } from 'lucide-react';

export const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const timeline = [
    {
      year: '2020',
      title: 'Started Coding Journey',
      description: 'Began learning HTML, CSS, and JavaScript basics',
      icon: Code,
    },
    {
      year: '2021',
      title: 'Discovered React',
      description: 'Fell in love with React and modern frontend development',
      icon: Lightbulb,
    },
    {
      year: '2022',
      title: 'Backend Development',
      description: 'Learned Node.js, Express, and API development',
      icon: Server,
    },
    {
      year: '2023',
      title: 'Full Stack Mastery',
      description: 'Mastered MongoDB and became a MERN stack developer',
      icon: Database,
    },
  ];

  const skills = [
    { name: 'React & Frontend', level: 95 },
    { name: 'Node.js & Express', level: 90 },
    { name: 'MongoDB', level: 85 },
    { name: 'UI/UX Design', level: 80 },
  ];

  return (
    <section
      id="about"
      className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden"
      ref={ref}
    >
      <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-400 rounded-full filter blur-3xl opacity-10 animate-pulse" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl opacity-10 animate-pulse" style={{ animationDelay: '1s' }} />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">
              My Story
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
              I'm a passionate Full Stack MERN Developer with a love for creating
              beautiful, functional, and scalable web applications. My journey
              into web development started with curiosity and has evolved into a
              career dedicated to solving complex problems with elegant code.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
              I specialize in the MERN stack (MongoDB, Express.js, React.js,
              Node.js) and have a keen eye for design and user experience. I
              believe that great software is not just about functionality, but
              also about creating delightful experiences for users.
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              When I'm not coding, you'll find me exploring new technologies,
              contributing to open source projects, or creating digital art.
            </p>
          </motion.div>

          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">
              Skill Proficiency
            </h3>
            {skills.map((skill, index) => (
              <div key={skill.name} className="space-y-2">
                <div className="flex justify-between text-gray-700 dark:text-gray-300">
                  <span className="font-semibold">{skill.name}</span>
                  <span>{skill.level}%</span>
                </div>
                <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-cyan-400 to-blue-500"
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${skill.level}%` } : {}}
                    transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                  />
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h3 className="text-3xl font-bold mb-12 text-center text-gray-800 dark:text-white">
            My Journey
          </h3>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-cyan-400 to-blue-500" />

            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                className={`flex items-center mb-12 ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.2 }}
              >
                <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-xl border-2 border-cyan-400/20 cursor-hover group hover:border-cyan-400 transition-all">
                    <div className="text-cyan-400 font-bold mb-2">{item.year}</div>
                    <h4 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">
                      {item.title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      {item.description}
                    </p>
                  </div>
                </div>

                <div className="w-2/12 flex justify-center">
                  <motion.div
                    className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center shadow-lg z-10"
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.3 }}
                  >
                    <item.icon className="text-white" size={28} />
                  </motion.div>
                </div>

                <div className="w-5/12" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
