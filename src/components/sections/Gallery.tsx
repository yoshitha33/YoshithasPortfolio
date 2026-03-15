import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export const Gallery = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const images = [
    {
      url: 'https://images.pexels.com/photos/1629236/pexels-photo-1629236.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Abstract Design',
      category: 'Digital Art',
    },
    {
      url: 'https://images.pexels.com/photos/1269968/pexels-photo-1269968.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Modern Architecture',
      category: 'Photography',
    },
    {
      url: 'https://images.pexels.com/photos/1820563/pexels-photo-1820563.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Colorful Waves',
      category: 'Digital Art',
    },
    {
      url: 'https://images.pexels.com/photos/1083822/pexels-photo-1083822.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Geometric Patterns',
      category: 'Design',
    },
    {
      url: 'https://images.pexels.com/photos/1242348/pexels-photo-1242348.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Nature Landscape',
      category: 'Photography',
    },
    {
      url: 'https://images.pexels.com/photos/1323550/pexels-photo-1323550.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Urban Vibes',
      category: 'Photography',
    },
    {
      url: 'https://images.pexels.com/photos/1089438/pexels-photo-1089438.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Digital Illustration',
      category: 'Digital Art',
    },
    {
      url: 'https://images.pexels.com/photos/1762851/pexels-photo-1762851.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Minimalist Design',
      category: 'Design',
    },
    {
      url: 'https://images.pexels.com/photos/1631677/pexels-photo-1631677.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Creative Composition',
      category: 'Digital Art',
    },
  ];

  const navigateImage = (direction: 'prev' | 'next') => {
    if (selectedImage === null) return;

    if (direction === 'prev') {
      setSelectedImage(selectedImage === 0 ? images.length - 1 : selectedImage - 1);
    } else {
      setSelectedImage(selectedImage === images.length - 1 ? 0 : selectedImage + 1);
    }
  };

  return (
    <section
      id="gallery"
      className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden"
      ref={ref}
    >
      <div className="absolute top-0 left-1/2 w-96 h-96 bg-cyan-400 rounded-full filter blur-3xl opacity-10 animate-pulse" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Creative Gallery
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-4" />
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Exploring creativity through digital art, design, and photography
          </p>
        </motion.div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {images.map((image, index) => (
            <motion.div
              key={index}
              className="break-inside-avoid cursor-pointer group cursor-hover"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onClick={() => setSelectedImage(index)}
            >
              <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-auto group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <h3 className="text-white font-bold text-xl mb-1">
                    {image.title}
                  </h3>
                  <p className="text-cyan-300 text-sm">{image.category}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <button
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}
              className="absolute top-6 right-6 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-colors cursor-hover z-10"
            >
              <X className="text-white" size={24} />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                navigateImage('prev');
              }}
              className="absolute left-6 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-colors cursor-hover z-10"
            >
              <ChevronLeft className="text-white" size={24} />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                navigateImage('next');
              }}
              className="absolute right-6 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-colors cursor-hover z-10"
            >
              <ChevronRight className="text-white" size={24} />
            </button>

            <motion.div
              className="max-w-6xl max-h-[90vh] relative"
              initial={{ scale: 0.8, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, y: 50 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={images[selectedImage].url}
                alt={images[selectedImage].title}
                className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-lg">
                <h3 className="text-white font-bold text-2xl mb-1">
                  {images[selectedImage].title}
                </h3>
                <p className="text-cyan-300">{images[selectedImage].category}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
