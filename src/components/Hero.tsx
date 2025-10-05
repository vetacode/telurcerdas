'use client';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className='from-primary bg-gradient-to-t to-orange-400 px-8 py-20 text-center text-white'>
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
          className='text-primary rounded-full bg-white px-6 py-3 font-semibold transition duration-200 ease-in-out hover:bg-orange-600 hover:text-white hover:shadow-[0_0_17px_rgba(255,255,255,0.9)] hover:ring-3'
        >
          Shop Now
        </a>
      </motion.div>
    </section>
  );
}
