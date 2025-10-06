'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';

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
        <Link href='/products'>
          <motion.button
            whileHover={{ scale: 1.2, rotate: 5 }}
            whileTap={{ scale: 0.8, rotate: -360 }}
            transition={{ type: 'spring', stiffness: 400, damping: 17 }}
            className='text-primary hover:bg-primary rounded-full bg-white px-6 py-3 font-semibold transition-colors duration-200 ease-in-out hover:cursor-pointer hover:text-white hover:shadow-[0_0_17px_rgba(255,255,255,0.9)] active:bg-orange-600'
          >
            Shop Now
          </motion.button>
        </Link>
      </motion.div>
    </section>
  );
}
