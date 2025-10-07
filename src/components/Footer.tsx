'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Footer() {
  return (
    <>
      <footer className='bottom-0 mt-12 bg-white px-8 py-6 text-center shadow-md'>
        <small className='copyright text-gray-600'>
          © {new Date().getFullYear()} Copyright • PT. Diamant Origo
          International • Telur Cerdas • All Rights Reserved
        </small>
      </footer>
      <motion.a
        initial={{ scale: 0 }}
        animate={{
          scale: 1,
          y: [0, -20, 0, -8, 0],
          rotate: [0, 360],
        }}
        transition={{
          scale: { duration: 0.5 },
          y: {
            duration: 2.5,
            repeat: Infinity,
            ease: 'easeInOut',
            repeatType: 'loop',
          },

          rotate: {
            duration: 8,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'linear',
          },
        }}
        whileHover={{
          scale: 1.2,
          rotate: 0, // stop rotation while hovered (optional)
          transition: { duration: 0.3 },
        }}
        whileTap={{
          scale: 0.8,
        }}
        href='https://wa.link/5xrmu5'
        target='_blank'
        className='fixed right-6 bottom-6 z-50 rounded-full bg-transparent shadow-lg md:right-12 md:bottom-12'
      >
        <div className='flex h-16 w-16 items-center justify-center overflow-hidden rounded-full md:h-20 md:w-20'>
          <Image
            src='/images/waicon3d.png'
            alt='whatsapp'
            width={70}
            height={70}
            className='scale-107 object-cover md:scale-125'
          />
        </div>
      </motion.a>
    </>
  );
}
