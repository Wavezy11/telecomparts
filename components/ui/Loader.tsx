'use client';

import { motion } from 'framer-motion';

export default function Loader() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-white/80 backdrop-blur-md"
    >
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1.2, ease: 'linear' }}
        className="w-24 h-24 rounded-full bg-gradient-to-tr from-teal-400 to-blue-400 opacity-40 blur-2xl"
      />
      <span className="absolute text-3xl font-black bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent select-none tracking-tight">
        TELECOMPARTS
      </span>
    </motion.div>
  );
}
