'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Footer() {
  return (
    <>
      <footer className='bottom-0 mt-12 bg-white py-6 text-center shadow-md'>
        <small className='copyright text-gray-600'>
          © {new Date().getFullYear()} Copyright • Telur Cerdas • Otak Kuat
          Anak Hebat • All Rights Reserved
        </small>
      </footer>
      <motion.a
        whileHover={{ scale: 1.1, rotate: 100 }}
        whileTap={{ scale: 0.8, rotate: -100 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        href='https://wa.link/cu3pim'
        target='_blank'
        className='fixed right-4 bottom-4 z-50 rounded-full bg-transparent shadow-lg md:right-8 md:bottom-8'
      >
        {' '}
        <Image
          // src='/images/logo.svg'
          // src='/images/whatsapp-icon.png'
          src='/images/waicon3d.png'
          alt='whatsapp'
          width={50}
          height={50}
          className='rounded-full'
        />
      </motion.a>
    </>
  );
}
