import React from 'react';
import { motion } from 'framer-motion';

const Loader = ({ onLoaded }) => {
  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{ y: '-100%' }}
      transition={{ duration: 1, ease: [0.76, 0, 0.24, 1], delay: 2 }}
      onAnimationComplete={onLoaded}
      className="fixed z-[9999] top-0 left-0 w-full h-screen bg-zinc-900 flex justify-center items-center"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-white text-5xl md:text-7xl font-bold tracking-tighter"
      >
        Kirei
      </motion.div>
    </motion.div>
  );
};

export default Loader;

