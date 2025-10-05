'use client';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className='from-primary bg-gradient-to-r to-orange-400 py-20 text-center text-white'>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className='mb-4 text-5xl font-bold'>
          Fresh, Smart, and Nutritious Eggs
        </h1>
        <p className='mb-8 text-lg'>
          Delivering high-quality eggs straight from our farm to your home.
        </p>
        <a
          href='/products'
          className='text-primary rounded bg-white px-6 py-3 font-semibold hover:bg-gray-200'
        >
          Shop Now
        </a>
      </motion.div>
    </section>
  );
}
