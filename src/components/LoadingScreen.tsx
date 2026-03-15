import { motion } from 'framer-motion';

export const LoadingScreen = () => {
  return (
    <motion.div
      className="fixed inset-0 bg-gradient-to-br from-gray-900 via-blue-900 to-cyan-900 flex items-center justify-center z-50"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-center">
        <motion.div
          className="mb-8"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <div className="w-20 h-20 border-4 border-cyan-400 border-t-transparent rounded-full mx-auto" />
        </motion.div>
        <motion.h2
          className="text-3xl font-bold text-white mb-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Loading Portfolio
        </motion.h2>
        <motion.p
          className="text-cyan-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Preparing an amazing experience...
        </motion.p>
      </div>
    </motion.div>
  );
};
